import { NextResponse } from "next/server";
import dns from "dns";
import net from "net";

// In-memory sliding window rate limiter: IP -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REQUESTS_PER_WINDOW = 6;

// Clean up old rate limit entries every 10 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    rateLimitMap.forEach((timestamps: number[], ip: string) => {
      const valid = timestamps.filter((t: number) => now - t < RATE_LIMIT_WINDOW_MS);
      if (valid.length === 0) {
        rateLimitMap.delete(ip);
      } else {
        rateLimitMap.set(ip, valid);
      }
    });
  }, 10 * 60 * 1000).unref?.();
}

/**
 * Checks whether an IP address is a private, loopback, link-local, carrier-grade NAT, or multicast address.
 * Prevents Server-Side Request Forgery (SSRF) and access to internal cloud/network resources.
 */
function isRestrictedIp(ip: string): boolean {
  if (!ip) return true;

  // Handle IPv4-mapped IPv6 (::ffff:192.168.1.1)
  if (ip.startsWith("::ffff:")) {
    ip = ip.substring(7);
  }

  const isV4 = net.isIPv4(ip);
  const isV6 = net.isIPv6(ip);

  if (!isV4 && !isV6) return true;

  if (isV4) {
    const parts = ip.split(".").map((p) => parseInt(p, 10));
    if (parts.length !== 4 || parts.some((p) => isNaN(p) || p < 0 || p > 255)) {
      return true;
    }

    const [a, b] = parts;

    // 0.0.0.0/8 (current network)
    if (a === 0) return true;

    // 127.0.0.0/8 (loopback)
    if (a === 127) return true;

    // 10.0.0.0/8 (private)
    if (a === 10) return true;

    // 172.16.0.0/12 (private: 172.16.0.0 - 172.31.255.255)
    if (a === 172 && b >= 16 && b <= 31) return true;

    // 192.168.0.0/16 (private)
    if (a === 192 && b === 168) return true;

    // 169.254.0.0/16 (link-local, cloud metadata 169.254.169.254)
    if (a === 169 && b === 254) return true;

    // 100.64.0.0/10 (carrier-grade NAT)
    if (a === 100 && b >= 64 && b <= 127) return true;

    // 192.0.0.0/24, 192.0.2.0/24 (TEST-NET-1), 198.51.100.0/24, 203.0.113.0/24
    if (a === 192 && b === 0) return true;
    if (a === 198 && b === 51) return true;
    if (a === 203 && b === 0) return true;

    // 224.0.0.0/4 (multicast) & 240.0.0.0/4 (reserved)
    if (a >= 224) return true;

    // 255.255.255.255 (broadcast)
    if (parts.every((p) => p === 255)) return true;

    return false;
  }

  if (isV6) {
    const normalized = ip.toLowerCase();
    // Loopback
    if (normalized === "::1" || normalized === "0:0:0:0:0:0:0:1") return true;
    // Unspecified
    if (normalized === "::" || normalized === "0:0:0:0:0:0:0:0") return true;
    // Unique Local Addresses (fc00::/7 -> fc.. or fd..)
    if (normalized.startsWith("fc") || normalized.startsWith("fd")) return true;
    // Link-local unicast (fe80::/10)
    if (normalized.startsWith("fe8") || normalized.startsWith("fe9") || normalized.startsWith("fea") || normalized.startsWith("feb")) return true;
    // Multicast (ff00::/8)
    if (normalized.startsWith("ff")) return true;

    return false;
  }

  return true;
}

/**
 * Validates domain and resolves all IPs to check against private/restricted ranges.
 */
async function validateSafeDomain(hostname: string): Promise<{ safe: boolean; reason?: string }> {
  // Reject internal/local TLDs
  const lowerHost = hostname.toLowerCase();
  const disallowedSuffixes = [".local", ".localhost", ".internal", ".test", ".example", ".invalid", ".onion", ".arpa"];
  if (disallowedSuffixes.some((suffix) => lowerHost.endsWith(suffix)) || lowerHost === "localhost") {
    return { safe: false, reason: "Internal and local network domains are not permitted." };
  }

  // Check if hostname is directly an IP
  if (net.isIP(hostname)) {
    if (isRestrictedIp(hostname)) {
      return { safe: false, reason: "Targeting private, local, or loopback IP addresses is restricted." };
    }
  }

  try {
    const lookupResult = await dns.promises.lookup(hostname, { all: true });
    if (!lookupResult || lookupResult.length === 0) {
      return { safe: false, reason: "Domain resolution returned no IP records." };
    }

    for (const record of lookupResult) {
      if (isRestrictedIp(record.address)) {
        return {
          safe: false,
          reason: "Domain resolves to a private, loopback, or cloud internal network address.",
        };
      }
    }

    return { safe: true };
  } catch {
    return { safe: false, reason: "Domain name could not be resolved by DNS." };
  }
}

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Check
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip";

    const now = Date.now();
    const timestamps = (rateLimitMap.get(clientIp) || []).filter(
      (t) => now - t < RATE_LIMIT_WINDOW_MS
    );

    if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. To preserve server resources, please wait a few minutes before submitting another audit.",
        },
        { status: 429 }
      );
    }

    timestamps.push(now);
    rateLimitMap.set(clientIp, timestamps);

    // 2. Parse and Validate Input URL
    const body = await request.json().catch(() => ({}));
    let targetUrlInput = (body.url || "").trim();

    if (!targetUrlInput) {
      return NextResponse.json(
        { error: "Please enter a valid website URL to audit." },
        { status: 400 }
      );
    }

    // Default to https if protocol omitted
    if (!/^https?:\/\//i.test(targetUrlInput)) {
      targetUrlInput = `https://${targetUrlInput}`;
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(targetUrlInput);
    } catch {
      return NextResponse.json(
        { error: "Invalid URL format. Please provide a standard address (e.g., https://example.com)." },
        { status: 400 }
      );
    }

    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return NextResponse.json(
        { error: "Only HTTP and HTTPS websites can be audited." },
        { status: 400 }
      );
    }

    // Standard web ports only
    if (parsedUrl.port && parsedUrl.port !== "80" && parsedUrl.port !== "443") {
      return NextResponse.json(
        { error: "Auditing custom port endpoints is not permitted." },
        { status: 400 }
      );
    }

    // 3. SSRF & Private IP Security Check
    const domainSafety = await validateSafeDomain(parsedUrl.hostname);
    if (!domainSafety.safe) {
      return NextResponse.json(
        { error: domainSafety.reason || "Audits are restricted to public internet domains." },
        { status: 400 }
      );
    }

    // 4. Perform Safe Server-Side Request with Strict Timeout & Size Limits
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6500); // 6.5s timeout

    const startTime = performance.now();
    let response: Response;

    try {
      response = await fetch(parsedUrl.toString(), {
        method: "GET",
        signal: controller.signal,
        redirect: "follow",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; AradhyJainPortfolioAuditBot/1.0; +https://aradhy-jain-folio.vercel.app)",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
        },
      });
    } catch (fetchErr: unknown) {
      clearTimeout(timeoutId);
      if (fetchErr instanceof Error && fetchErr.name === "AbortError") {
        return NextResponse.json(
          { error: "Connection timed out after 6.5 seconds. The target server did not respond in time." },
          { status: 504 }
        );
      }
      return NextResponse.json(
        { error: "Could not establish connection to the domain. Verify the website is live and accessible." },
        { status: 502 }
      );
    } finally {
      clearTimeout(timeoutId);
    }

    const responseDurationMs = Math.round(performance.now() - startTime);

    // Read initial HTML chunk up to 350KB to prevent memory exhaustion
    const reader = response.body?.getReader();
    let htmlContent = "";
    const MAX_BYTES = 350 * 1024; // 350KB
    let bytesRead = 0;

    if (reader) {
      const decoder = new TextDecoder("utf-8");
      try {
        while (bytesRead < MAX_BYTES) {
          const { done, value } = await reader.read();
          if (done) break;
          bytesRead += value.byteLength;
          htmlContent += decoder.decode(value, { stream: true });
        }
      } catch {
        // stream ended or error, proceed with whatever content was gathered
      } finally {
        try {
          reader.cancel();
        } catch {
          // ignore cancel error
        }
      }
    } else {
      htmlContent = await response.text().then((t) => t.substring(0, MAX_BYTES)).catch(() => "");
    }

    // 5. Inspect Real Verified Measurements
    const headers = response.headers;
    const isHttps = response.url.startsWith("https://");
    const statusCode = response.status;

    // Security Headers
    const hstsHeader = headers.get("strict-transport-security");
    const cspHeader = headers.get("content-security-policy");
    const xContentType = headers.get("x-content-type-options");
    const xFrameOptions = headers.get("x-frame-options");

    // HTML Metadata Extraction using regex on sanitized chunk
    const titleMatch = htmlContent.match(/<title[^>]*>([^<]*)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : null;

    const descMatch = htmlContent.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)
      || htmlContent.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
    const description = descMatch ? descMatch[1].trim() : null;

    const viewportMatch = htmlContent.match(/<meta[^>]*name=["']viewport["'][^>]*content=["']([^"']*)["'][^>]*>/i);
    const hasViewport = !!viewportMatch;

    const canonicalMatch = htmlContent.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i);
    const hasCanonical = !!canonicalMatch;

    const ogTitleMatch = htmlContent.match(/<meta[^>]*property=["']og:title["'][^>]*>/i);
    const ogDescMatch = htmlContent.match(/<meta[^>]*property=["']og:description["'][^>]*>/i);
    const ogImageMatch = htmlContent.match(/<meta[^>]*property=["']og:image["'][^>]*>/i);
    const hasOpenGraph = !!(ogTitleMatch || ogDescMatch || ogImageMatch);

    const twitterMatch = htmlContent.match(/<meta[^>]*name=["']twitter:card["'][^>]*>/i);
    const hasTwitterCard = !!twitterMatch;

    const jsonLdMatch = htmlContent.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>/gi);
    const jsonLdCount = jsonLdMatch ? jsonLdMatch.length : 0;

    // Headings
    const h1Matches = htmlContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
    const h1Count = h1Matches ? h1Matches.length : 0;

    // Images alt check
    const imgMatches = htmlContent.match(/<img[^>]*>/gi) || [];
    const imgTotal = imgMatches.length;
    let imgWithoutAlt = 0;
    imgMatches.forEach((imgTag) => {
      if (!/alt=["'][^"']*["']/i.test(imgTag)) {
        imgWithoutAlt++;
      }
    });

    // 6. Build Objective Verified Strengths & Actionable Recommendations
    const verifiedStrengths: string[] = [];
    const recommendations: string[] = [];
    let calculatedScore = 50;

    // HTTPS
    if (isHttps) {
      verifiedStrengths.push("Secure HTTPS connection active with encrypted transport.");
      calculatedScore += 10;
    } else {
      recommendations.push("Upgrade to HTTPS: Plain HTTP exposes visitors to security warnings and harms search indexing.");
      calculatedScore -= 10;
    }

    // Response time
    if (responseDurationMs < 600) {
      verifiedStrengths.push(`Server response time is fast (${responseDurationMs}ms TTFB).`);
      calculatedScore += 10;
    } else if (responseDurationMs < 1400) {
      verifiedStrengths.push(`Acceptable server response latency (${responseDurationMs}ms TTFB).`);
      calculatedScore += 5;
    } else {
      recommendations.push(`Server response time is slow (${responseDurationMs}ms). Consider server caching, CDN edge caching, or asset compression to reduce Time to First Byte.`);
      calculatedScore -= 10;
    }

    // Mobile Viewport
    if (hasViewport) {
      verifiedStrengths.push("Mobile-responsive viewport meta tag correctly configured for cross-device scaling.");
      calculatedScore += 8;
    } else {
      recommendations.push("Missing <meta name=\"viewport\"> tag. Mobile browsers will scale content down incorrectly.");
      calculatedScore -= 10;
    }

    // Title tag
    if (title) {
      if (title.length >= 25 && title.length <= 65) {
        verifiedStrengths.push(`Search title configured optimally (${title.length} characters): "${title.slice(0, 40)}..."`);
        calculatedScore += 8;
      } else if (title.length < 25) {
        recommendations.push(`Page title is brief (${title.length} chars). Expand to 35-60 characters with descriptive primary keywords.`);
        calculatedScore += 4;
      } else {
        recommendations.push(`Page title exceeds recommended 60-character length (${title.length} chars). Truncation may occur in Google search snippets.`);
        calculatedScore += 4;
      }
    } else {
      recommendations.push("Missing <title> tag. Essential for search engine indexing and browser bookmarks.");
      calculatedScore -= 10;
    }

    // Meta description
    if (description) {
      if (description.length >= 60 && description.length <= 165) {
        verifiedStrengths.push(`Meta description is well-sized (${description.length} chars) for search snippet previews.`);
        calculatedScore += 8;
      } else {
        recommendations.push(`Meta description length is ${description.length} chars. Optimal search snippet range is 120-160 characters.`);
        calculatedScore += 4;
      }
    } else {
      recommendations.push("Missing meta description. Search engines will autogenerate snippets, which frequently lowers click-through rates.");
      calculatedScore -= 8;
    }

    // Canonical tag
    if (hasCanonical) {
      verifiedStrengths.push("Canonical link tag defined, preventing duplicate content dilution.");
      calculatedScore += 5;
    } else {
      recommendations.push("Add a canonical link tag (<link rel=\"canonical\">) to declare the primary URL version and consolidate search authority.");
    }

    // OpenGraph & Twitter
    if (hasOpenGraph) {
      verifiedStrengths.push("OpenGraph social preview metadata detected for rich WhatsApp and LinkedIn link cards.");
      calculatedScore += 5;
    } else {
      recommendations.push("Add OpenGraph tags (og:title, og:description, og:image) to ensure attractive previews when links are shared on WhatsApp and social channels.");
    }

    // Structured Data (JSON-LD)
    if (jsonLdCount > 0) {
      verifiedStrengths.push(`Structured data detected (${jsonLdCount} JSON-LD schema block${jsonLdCount > 1 ? "s" : ""}) helping Google interpret your entity.`);
      calculatedScore += 8;
    } else {
      recommendations.push("Implement Schema.org JSON-LD structured data (e.g., Organization, LocalBusiness, Product, or Article) for Google rich results.");
    }

    // Headings
    if (h1Count === 1) {
      verifiedStrengths.push("Clean semantic heading structure with exactly one primary <h1> element.");
      calculatedScore += 5;
    } else if (h1Count === 0) {
      recommendations.push("Missing primary <h1> heading tag. Every page should feature one prominent, descriptive <h1> element.");
    } else {
      recommendations.push(`Detected ${h1Count} <h1> tags. Best practice is a single primary <h1> per page for semantic clarity.`);
    }

    // Security Headers
    if (hstsHeader) {
      verifiedStrengths.push("Strict-Transport-Security (HSTS) header enforced.");
      calculatedScore += 3;
    } else if (isHttps) {
      recommendations.push("Enable HSTS header to instruct browsers to permanently connect via HTTPS.");
    }

    if (xContentType) {
      verifiedStrengths.push("X-Content-Type-Options: nosniff header protects against MIME confusion attacks.");
      calculatedScore += 2;
    }

    // Image alt attributes
    if (imgTotal > 0 && imgWithoutAlt > 0) {
      recommendations.push(`${imgWithoutAlt} of ${imgTotal} scanned images lack descriptive 'alt' attributes, impacting accessibility and Google Image ranking.`);
    } else if (imgTotal > 0 && imgWithoutAlt === 0) {
      verifiedStrengths.push(`All ${imgTotal} scanned images include 'alt' attributes.`);
      calculatedScore += 3;
    }

    // Clamp score
    const finalScore = Math.max(35, Math.min(98, calculatedScore));

    return NextResponse.json({
      success: true,
      url: parsedUrl.toString(),
      finalUrl: response.url,
      verifiedMeasurements: {
        httpStatus: statusCode,
        protocol: isHttps ? "HTTPS" : "HTTP",
        responseTimeMs: responseDurationMs,
        bytesEvaluated: bytesRead || htmlContent.length,
        securityHeaders: {
          hsts: !!hstsHeader,
          csp: !!cspHeader,
          xContentTypeOptions: !!xContentType,
          xFrameOptions: !!xFrameOptions,
        },
        metaCheck: {
          titlePresent: !!title,
          titleLength: title?.length || 0,
          descriptionPresent: !!description,
          descriptionLength: description?.length || 0,
          viewportPresent: hasViewport,
          canonicalPresent: hasCanonical,
          openGraphPresent: hasOpenGraph,
          twitterCardPresent: hasTwitterCard,
          jsonLdCount,
          h1Count,
          imagesAnalyzed: imgTotal,
          imagesMissingAlt: imgWithoutAlt,
        },
      },
      heuristicScore: finalScore,
      verifiedStrengths,
      recommendations,
      disclaimer:
        "Automated Preliminary Diagnostic: This scan measures live HTTP headers and publicly accessible HTML markup. Real field user experience depends on Core Web Vitals lab runs, network conditions, and complete backlink profiles.",
    });
  } catch (error) {
    console.error("Audit API unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while executing the diagnostic scan. Please try again." },
      { status: 500 }
    );
  }
}
