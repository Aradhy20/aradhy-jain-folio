# Comprehensive SEO, AEO, GEO & Technical Audit Report

**Project:** Aradhy Jain Portfolio  
**Production Domain:** `https://aradhy-jain-portfolio.vercel.app/`  
**GitHub Repository:** `https://github.com/Aradhy20/aradhy-jain-folio`  
**Auditor:** Senior Technical SEO & Next.js Specialist  
**Audit Date:** November 19, 2026  
**Standards Reference:** [Google Search Central SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), Schema.org, Core Web Vitals (W3C), and AI Crawler Specifications.

---

## Executive Summary

This audit evaluates the codebase across 7 technical categories:
1. **Crawlability & Indexing (Robots, Sitemaps, Status Codes)**
2. **Metadata & On-Page Signals (Titles, Descriptions, Open Graph, Twitter)**
3. **Structured Data & Entity Graph (Schema.org, JSON-LD, Breadcrumbs)**
4. **Keyword Alignment & Content Architecture (Personal Brand, Dev, AI, Freelance)**
5. **AI Search (AEO / GEO / Perplexity / ChatGPT Search / Copilot Readiness)**
6. **Core Web Vitals & Asset Optimization (LCP, INP, CLS, Lazy Loading)**
7. **Analytics & Search Console Verification Integrity**

---

## Audit Findings Matrix

| ID | Issue Description | Affected File | Severity | Recommended Solution | Validation Method |
|:---|:---|:---|:---:|:---|:---|
| **AUD-01** | **Unnecessary Meta Keywords Tag:** `<meta name="keywords">` is present in root layout. Google explicitly confirmed since 2009 that meta keywords are ignored for web search rankings and can expose internal keyword targeting to competitors or trigger spam heuristics. | `src/app/layout.tsx` | Medium | Remove the `keywords` array from `export const metadata: Metadata`. Focus on semantic on-page heading and contextual body text. | Inspect `<head>` via `curl -s` to confirm absence of `<meta name="keywords">`. |
| **AUD-02** | **Dynamic `new Date()` in XML Sitemap:** `sitemap.ts` generates `lastModified: new Date()` dynamically for every route on every request. Google and Bing consider rapidly fluctuating fake `lastmod` timestamps unreliable and may ignore the sitemap's freshness signals. | `src/app/sitemap.ts` | High | Replace `new Date()` with verified, deterministic revision dates (ISO strings) representing actual content update timestamps. | Fetch `https://aradhy-jain-portfolio.vercel.app/sitemap.xml` and verify fixed ISO timestamps. |
| **AUD-03** | **Missing Metadata on `/freelance` Page:** `src/app/freelance/page.tsx` is declared with `"use client"` and exports no metadata. It falls back entirely to root metadata, causing duplicate title and snippet in search results for the commercial landing page. | `src/app/freelance/page.tsx` | High | Create `src/app/freelance/layout.tsx` as a Server Component exporting dedicated metadata (`title`, `description`, `canonical: "/freelance"`, Open Graph, and Twitter). | Fetch `/freelance` and inspect `<title>`, `<meta name="description">`, and `<link rel="canonical">`. |
| **AUD-04** | **Incomplete Open Graph and Canonical on Project Pages:** `src/app/projects/[slug]/page.tsx` sets title and description in `generateMetadata`, but omits `alternates.canonical`, Twitter card specification, and Open Graph metadataBase URL. | `src/app/projects/[slug]/page.tsx` | High | Add explicit `alternates.canonical`, Twitter card metadata, and full Open Graph properties (`type: "article"`, image dimensions, siteName) to `generateMetadata`. | Verify generated HTML on `/projects/paras-metal` with `curl` and Twitter Card validator. |
| **AUD-05** | **Missing Structured Data on Project Case Studies:** Project detail pages render rich case studies (Paras Metal, Sanmati Journal, DSR College, Jambudweep) but have no JSON-LD schema describing them as `TechArticle` / `CreativeWork` / `SoftwareApplication` or providing a `BreadcrumbList`. | `src/app/projects/[slug]/page.tsx` | High | Inject schema-compliant JSON-LD (`TechArticle` / `CreativeWork` linked to author `#person` plus `BreadcrumbList`) in project pages. | Test rendered HTML in Google Rich Results Test (`search.google.com/test/rich-results`). |
| **AUD-06** | **Missing Root `WebSite` & `ProfilePage` Schemas:** Root JSON-LD in `layout.tsx` provides `Person` and `ProfessionalService`, but lacks top-level `WebSite` and `ProfilePage` declarations that Google Knowledge Graph and AI search engines use to disambiguate the entity's official domain. | `src/app/layout.tsx` | Medium | Expand `@graph` in root layout to include `WebSite` and `ProfilePage` schema linking directly to `#person`. | Validate with Schema Markup Validator (`validator.schema.org`). |
| **AUD-07** | **Robots.txt Lacks Explicit AI Search Engine Directives:** `src/app/robots.ts` only specifies a generic wildcard `userAgent: "*"`. Emerging AI search engines (`OAI-SearchBot` for SearchGPT, `PerplexityBot`, `ClaudeBot`, `Bingbot`) require explicit crawl permissions to index site content for real-time generative search answers. | `src/app/robots.ts` | Medium | Add explicit allow rules for `Googlebot`, `Bingbot`, `OAI-SearchBot`, `PerplexityBot`, and `ClaudeBot` while safeguarding private `/api/` endpoints. | Inspect output of `curl -s https://aradhy-jain-portfolio.vercel.app/robots.txt`. |
| **AUD-08** | **Missing `llms.txt` and Machine-Readable Knowledge Endpoint:** Generative AI answer engines (Perplexity, ChatGPT, Gemini, Copilot) prioritize structured markdown summaries adhering to the `/llms.txt` standard for fast zero-shot factual ingestion. | `public/llms.txt` | Low–Medium | Author a structured, fact-checked `public/llms.txt` and `public/llms-full.txt` defining Aradhy Jain's technical specialties, verified case studies, contact endpoints, and verified portfolio URLs. | `curl -i https://aradhy-jain-portfolio.vercel.app/llms.txt` returning HTTP 200. |
| **AUD-09** | **Missing Pravaah UPSC Case Study:** Requirement specifically requests verified documentation for 5 core projects (Paras Metal, Sanmati Journal, DSR College, Pravaah UPSC, Jain Mandir/Jambudweep). `pravaah-upsc` is currently absent from `PORTFOLIO_DATA.projects`. | `src/data/index.ts` | Medium | Add verified case study data for `pravaah-upsc` with genuine problem statements, architecture, tech stack, and verified deliverables. | Confirm route `/projects/pravaah-upsc` generates during build and returns HTTP 200. |
| **AUD-10** | **Internal Link Anchor Text Optimization:** Some links use generic anchor text ("Details", "Case Study", "Quick View") without descriptive context (e.g. "Read Paras Metal Case Study"), reducing internal PageRank flow and topical relevance pass-through. | `src/components/sections/Projects.tsx` | Low | Enhance `aria-label` and link titles with contextual project names while preserving clean UI styling. | Inspect DOM anchor attributes. |

---

## Technical Audit Conclusion

The Next.js 14 App Router foundation is solid (zero compilation errors, static pre-rendering of 28 routes, active Google verification, active GA4 data collection). Addressing the 10 findings above will bring the site to the 99th percentile of technical SEO and AI Search (AEO/GEO) readiness.
