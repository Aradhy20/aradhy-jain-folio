"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingBag,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Zap,
  Globe,
  Bot,
  RefreshCw,
  Copy,
  Check,
  Gauge,
  Lock,
  FileSpreadsheet,
} from "lucide-react";
import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data";

type ToolTab = "audit" | "brief" | "listing";

// Sample URLs for Audit Testing
const SAMPLE_URLS = [
  "https://dsr.college",
  "https://sanmatijournal.in",
  "https://github.com",
];

// Sample Products for Marketplace Generator
const SAMPLE_PRODUCTS = [
  {
    name: "Handcrafted Brass Peacock Diya",
    material: "Pure Brass",
    dimensions: "Height: 6 inches, Weight: 420g",
    features: "Intricate peacock engraving, traditional pooja decor, antique polished finish",
  },
  {
    name: "Hammered Copper Water Dispenser",
    material: "100% Ayurvedic Copper",
    dimensions: "Capacity: 5 Litres, Weight: 1.1kg",
    features: "Jointless leak-proof design, brass faucet tap, natural antimicrobial properties",
  },
];

interface AuditApiResponse {
  success: boolean;
  url: string;
  finalUrl: string;
  verifiedMeasurements: {
    httpStatus: number;
    protocol: string;
    responseTimeMs: number;
    bytesEvaluated: number;
    securityHeaders: {
      hsts: boolean;
      csp: boolean;
      xContentTypeOptions: boolean;
      xFrameOptions: boolean;
    };
    metaCheck: {
      titlePresent: boolean;
      titleLength: number;
      descriptionPresent: boolean;
      descriptionLength: number;
      viewportPresent: boolean;
      canonicalPresent: boolean;
      openGraphPresent: boolean;
      twitterCardPresent: boolean;
      jsonLdCount: number;
      h1Count: number;
      imagesAnalyzed: number;
      imagesMissingAlt: number;
    };
  };
  heuristicScore: number;
  verifiedStrengths: string[];
  recommendations: string[];
  disclaimer: string;
}

export function ClientLeadTools() {
  const [activeTab, setActiveTab] = useState<ToolTab>("audit");

  // --- Real Audit Tool State ---
  const [auditUrl, setAuditUrl] = useState("");
  const [auditConsent, setAuditConsent] = useState(false);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditError, setAuditError] = useState("");
  const [auditResult, setAuditResult] = useState<AuditApiResponse | null>(null);

  // --- Proposal & Brief Builder State ---
  const [selectedPackageId, setSelectedPackageId] = useState<string>("custom-business-website");
  const [businessName, setBusinessName] = useState("");
  const [businessIndustry, setBusinessIndustry] = useState("Education & Research");
  const [timelinePreference, setTimelinePreference] = useState("Within 1 Month (Standard)");
  const [specialRequirements, setSpecialRequirements] = useState("Need SEO indexing, mobile speed, and clean inquiry forms.");
  const [proposalCopied, setProposalCopied] = useState(false);

  // --- Listing Generator State ---
  const [productName, setProductName] = useState(SAMPLE_PRODUCTS[0].name);
  const [productMaterial, setProductMaterial] = useState(SAMPLE_PRODUCTS[0].material);
  const [productDimensions, setProductDimensions] = useState(SAMPLE_PRODUCTS[0].dimensions);
  const [productFeatures, setProductFeatures] = useState(SAMPLE_PRODUCTS[0].features);
  const [listingCopied, setListingCopied] = useState(false);

  const selectedPackage =
    PORTFOLIO_DATA.services.find((s) => s.id === selectedPackageId) || PORTFOLIO_DATA.services[0];

  // Execute Real Server-Side Audit
  const handleRunAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuditError("");
    setAuditResult(null);

    if (!auditUrl.trim() || !auditConsent) return;

    setIsAuditing(true);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: auditUrl.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to complete website diagnostic scan.");
      }

      setAuditResult(data);
    } catch (err: unknown) {
      setAuditError(
        err instanceof Error ? err.message : "Failed to audit website. Check the URL and try again."
      );
    } finally {
      setIsAuditing(false);
    }
  };

  // Generate Structured Proposal Draft Text
  const generatedProposalText = `=====================================================
PROJECT PROPOSAL & WORKING BRIEF
Client: ${businessName.trim() || "Business Partner"} (${businessIndustry})
Service Package: ${selectedPackage.title}
Indicative Estimate: ${selectedPackage.indicativePriceINR} (${selectedPackage.indicativePriceUSD})
Target Delivery: ${timelinePreference}
=====================================================

1. OBJECTIVE & SCOPE:
${selectedPackage.description}

2. KEY DELIVERABLES INCLUDED:
${selectedPackage.deliverables.map((d) => `• ${d}`).join("\n")}

3. REVISION TERMS & TIMELINE:
• Estimated Timeline: ${selectedPackage.estimatedTimeline}
• Included Revisions: ${selectedPackage.revisionLimit}

4. EXPLICIT EXCLUSIONS (Scope Boundaries):
${selectedPackage.explicitExclusions.map((ex) => `• [Excluded] ${ex}`).join("\n")}

5. THIRD-PARTY EXPENSE POLICY:
Domain registration, cloud hosting, and payment gateway/marketplace fees are paid directly to providers with zero markup.

6. CLIENT SPECIFIC NOTES:
${specialRequirements}

7. PREPARED BY:
Aradhy Jain — Web Developer, E-commerce & Digital Growth Specialist
Email: ${PORTFOLIO_DATA.personalInfo.email} | WhatsApp: +${PORTFOLIO_DATA.personalInfo.whatsapp}
Website: https://aradhy-jain-folio.vercel.app/
=====================================================`;

  const handleCopyProposal = () => {
    navigator.clipboard.writeText(generatedProposalText);
    setProposalCopied(true);
    setTimeout(() => setProposalCopied(false), 2500);
  };

  // Generate Marketplace Listing Copy
  const generatedTitle = `${productName} — ${productMaterial} (${productDimensions}) | ${productFeatures.slice(
    0,
    60
  )}`;

  const generatedBullets = [
    `AUTHENTIC ARTISANAL CRAFTSMANSHIP: Masterfully handcrafted from ${productMaterial}, showcasing traditional finish and meticulous attention to detail.`,
    `SPECIFICATIONS & SIZING: ${productDimensions}. Precision engineered for durability and aesthetic elegance.`,
    `MULTIPURPOSE UTILITY & DECOR: Ideal for home decor, spiritual rituals, festive gifting, and luxury living spaces.`,
    `TARNISH-RESISTANT FINISH: Specially treated with a protective lacquer coat to maintain long-lasting shine with minimal maintenance.`,
    `SECURE PACKAGING & DIRECT SUPPORT: Safely packed in corrugated protective packaging to ensure zero transit damage.`,
  ];

  const handleCopyListing = () => {
    const text = `TITLE:\n${generatedTitle}\n\nBULLET POINTS:\n${generatedBullets.join(
      "\n"
    )}\n\nKEYWORDS:\n${productName.toLowerCase()}, ${productMaterial.toLowerCase()}, handicraft, home decor, traditional gift`;
    navigator.clipboard.writeText(text);
    setListingCopied(true);
    setTimeout(() => setListingCopied(false), 2000);
  };

  const handleTransferToContact = (message: string, serviceTitle?: string) => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
      const textarea = document.getElementById("contact-message") as HTMLTextAreaElement | null;
      if (textarea) {
        textarea.value = message;
      }
      if (serviceTitle) {
        const select = document.getElementById("contact-service") as HTMLSelectElement | null;
        if (select) select.value = serviceTitle;
      }
    }
  };

  return (
    <section id="audit-tool" className="py-24 sm:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 mb-4">
            <Bot size={15} className="text-purple-400" />
            Interactive Client Tools & Proposal Builder
          </div>
          <h2 className="section-title">
            Diagnostic Audit & Project Scoping Tools
          </h2>
          <p className="section-copy">
            Test your live website with a real server-side diagnostic, build an actionable project proposal draft, or preview marketplace listing copy.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
          <button
            onClick={() => setActiveTab("audit")}
            data-tool-tab="audit"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "audit"
                ? "bg-[linear-gradient(135deg,#06b6d4,#2563eb)] text-white shadow-lg shadow-cyan-500/25"
                : "border border-border/70 bg-white/40 text-foreground/75 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
            }`}
          >
            <Search size={15} />
            Live Website Audit
          </button>

          <button
            onClick={() => setActiveTab("brief")}
            data-tool-tab="brief"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "brief"
                ? "bg-[linear-gradient(135deg,#06b6d4,#2563eb)] text-white shadow-lg shadow-cyan-500/25"
                : "border border-border/70 bg-white/40 text-foreground/75 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
            }`}
          >
            <FileSpreadsheet size={15} />
            Proposal & Brief Builder
          </button>

          <button
            onClick={() => setActiveTab("listing")}
            data-tool-tab="listing"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "listing"
                ? "bg-[linear-gradient(135deg,#06b6d4,#2563eb)] text-white shadow-lg shadow-cyan-500/25"
                : "border border-border/70 bg-white/40 text-foreground/75 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
            }`}
          >
            <ShoppingBag size={15} />
            Marketplace Listing Generator
          </button>
        </div>

        {/* Active Tool Container */}
        <div className="mt-10 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {/* --- TAB 1: REAL SERVER-SIDE WEBSITE AUDIT --- */}
            {activeTab === "audit" && (
              <motion.div
                key="audit"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="panel border-border/70 bg-white/50 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl dark:bg-slate-900/50 rounded-[2.5rem]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                    <Zap size={14} />
                    Verified Server Diagnostic
                  </div>
                  <span className="text-[11px] text-foreground/50">
                    SSRF Protected • Real Live Checks
                  </span>
                </div>

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Run a Real Diagnostic Website Scan
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  Enter your website URL to trigger a verified server-side diagnostic. Inspects live HTTP status, server latency (TTFB), security headers, mobile viewport, and search metadata.
                </p>

                {/* Audit Input Form */}
                <form onSubmit={handleRunAudit} className="mt-6 space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Globe
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
                      />
                      <input
                        type="url"
                        required
                        value={auditUrl}
                        onChange={(e) => setAuditUrl(e.target.value)}
                        placeholder="https://yourwebsite.com"
                        className="w-full rounded-2xl border border-border/80 bg-background/80 py-3.5 pl-11 pr-4 text-sm text-foreground shadow-sm placeholder:text-foreground/40 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isAuditing || !auditConsent}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                    >
                      {isAuditing ? (
                        <>
                          <RefreshCw size={16} className="animate-spin" />
                          Inspecting Server...
                        </>
                      ) : (
                        <>
                          Run Diagnostic Scan
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Sample Chips */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/60">
                    <span>Try sample:</span>
                    {SAMPLE_URLS.map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => {
                          setAuditUrl(u);
                          setAuditConsent(true);
                        }}
                        className="rounded-lg border border-border/60 bg-foreground/5 px-2.5 py-1 text-cyan-600 dark:text-cyan-400 hover:bg-foreground/10"
                      >
                        {u.replace("https://", "")}
                      </button>
                    ))}
                  </div>

                  {/* Consent & Safety Checkbox */}
                  <label className="flex items-start gap-2.5 pt-2 text-xs text-foreground/70 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={auditConsent}
                      onChange={(e) => setAuditConsent(e.target.checked)}
                      className="mt-0.5 rounded border-border text-cyan-500 focus:ring-cyan-400"
                    />
                    <span>
                      I authorize an automated diagnostic scan of this public website. I understand this checks publicly accessible HTTP headers and markup.
                    </span>
                  </label>
                </form>

                {/* Audit Error Display */}
                {auditError && (
                  <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-xs font-medium text-red-600 dark:text-red-400 flex items-start gap-2.5">
                    <AlertTriangle size={16} className="shrink-0 mt-0.5 text-red-500" />
                    <span>{auditError}</span>
                  </div>
                )}

                {/* Audit Results Box */}
                {auditResult && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6 sm:p-8 space-y-6"
                  >
                    {/* Header: URL & Score */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cyan-500/15">
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-xs text-foreground/50 mb-1">
                          <CheckCircle2 size={13} className="text-emerald-500" />
                          Verified Scan Target
                        </div>
                        <p className="text-lg font-bold text-foreground break-all">
                          {auditResult.finalUrl || auditResult.url}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-xs text-foreground/50">Preliminary Score</p>
                          <p className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">
                            {auditResult.heuristicScore}/100
                          </p>
                        </div>
                        <div className="h-12 w-12 rounded-xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center font-bold text-cyan-600 dark:text-cyan-300 text-lg">
                          {auditResult.heuristicScore >= 90
                            ? "A"
                            : auditResult.heuristicScore >= 75
                            ? "B"
                            : "C"}
                        </div>
                      </div>
                    </div>

                    {/* Section 1: Verified Server Measurements Grid */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-3 flex items-center gap-1.5">
                        <Gauge size={14} className="text-cyan-500" />
                        Verified Server & Header Measurements
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-background/80 border border-border/60">
                          <p className="text-[10px] text-foreground/50 uppercase font-bold">HTTP Status</p>
                          <p className="mt-1 font-bold text-foreground">
                            {auditResult.verifiedMeasurements.httpStatus} OK
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-background/80 border border-border/60">
                          <p className="text-[10px] text-foreground/50 uppercase font-bold">Response Latency</p>
                          <p className="mt-1 font-bold text-cyan-600 dark:text-cyan-400">
                            {auditResult.verifiedMeasurements.responseTimeMs} ms (TTFB)
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-background/80 border border-border/60">
                          <p className="text-[10px] text-foreground/50 uppercase font-bold">Security Transport</p>
                          <p className="mt-1 font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <Lock size={12} />
                            {auditResult.verifiedMeasurements.protocol}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-background/80 border border-border/60">
                          <p className="text-[10px] text-foreground/50 uppercase font-bold">Payload Evaluated</p>
                          <p className="mt-1 font-bold text-foreground">
                            {(auditResult.verifiedMeasurements.bytesEvaluated / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Verified Strengths vs Recommendations */}
                    <div className="grid gap-6 md:grid-cols-2 pt-2">
                      {/* Passed Checks */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-3">
                          <CheckCircle2 size={14} />
                          Verified Strengths ({auditResult.verifiedStrengths.length})
                        </p>
                        <div className="space-y-2">
                          {auditResult.verifiedStrengths.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                              <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Opportunities / Recommendations */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5 mb-3">
                          <AlertTriangle size={14} />
                          Actionable Recommendations ({auditResult.recommendations.length})
                        </p>
                        <div className="space-y-2">
                          {auditResult.recommendations.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                              <AlertTriangle size={13} className="text-amber-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Transparent Disclaimer & CTA */}
                    <div className="pt-5 border-t border-cyan-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-[11px] text-foreground/55 max-w-md">
                        {auditResult.disclaimer}
                      </p>

                      <button
                        onClick={() =>
                          handleTransferToContact(
                            `Hi Aradhy, I ran the diagnostic scan on ${auditResult.finalUrl} (Score: ${auditResult.heuristicScore}/100, Latency: ${auditResult.verifiedMeasurements.responseTimeMs}ms) and would like your help implementing the recommendations:\n- ${auditResult.recommendations.join("\n- ")}`,
                            "SEO & Website Optimization"
                          )
                        }
                        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-cyan-600 transition-colors"
                      >
                        Request Remediation Plan
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* --- TAB 2: INTERACTIVE PROPOSAL & BRIEF BUILDER --- */}
            {activeTab === "brief" && (
              <motion.div
                key="brief"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="panel border-border/70 bg-white/50 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl dark:bg-slate-900/50 rounded-[2.5rem]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                    <FileSpreadsheet size={15} />
                    Project Scope & Proposal Generator
                  </div>
                  <span className="text-[11px] rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-0.5 text-purple-700 dark:text-purple-300 font-medium">
                    No Obligation • Instant Scope
                  </span>
                </div>

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Build Your Custom Project Proposal
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  Select your desired service package, adjust your timeline and business context, and generate a transparent, formatted proposal draft with defined deliverables, indicative pricing, and explicit scope boundaries.
                </p>

                {/* Configuration Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      1. Select Service Package
                    </label>
                    <select
                      value={selectedPackageId}
                      onChange={(e) => setSelectedPackageId(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-border/80 bg-background/80 p-3.5 text-xs sm:text-sm text-foreground shadow-sm focus:border-cyan-500 focus:outline-none"
                    >
                      {PORTFOLIO_DATA.services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title} ({s.indicativePriceINR})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      2. Business / Client Name
                    </label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Acme Handicrafts or DSR Academy"
                      className="mt-2 w-full rounded-2xl border border-border/80 bg-background/80 p-3.5 text-xs sm:text-sm text-foreground shadow-sm focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      3. Business Industry / Sector
                    </label>
                    <select
                      value={businessIndustry}
                      onChange={(e) => setBusinessIndustry(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-border/80 bg-background/80 p-3.5 text-xs sm:text-sm text-foreground shadow-sm focus:border-cyan-500 focus:outline-none"
                    >
                      <option>Artisanal Manufacturing & Handicrafts</option>
                      <option>Education, Colleges & Teacher Training</option>
                      <option>Academic Publishing & Research Journals</option>
                      <option>Healthcare, Clinics & Fitness</option>
                      <option>Consulting & Professional Services</option>
                      <option>D2C E-commerce & Retail Brands</option>
                      <option>Technology & SaaS Startups</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      4. Target Timeline
                    </label>
                    <select
                      value={timelinePreference}
                      onChange={(e) => setTimelinePreference(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-border/80 bg-background/80 p-3.5 text-xs sm:text-sm text-foreground shadow-sm focus:border-cyan-500 focus:outline-none"
                    >
                      <option>Within 7–10 Business Days (Urgent)</option>
                      <option>Within 1 Month (Standard Delivery)</option>
                      <option>6–8 Weeks (Phased Institutional Rollout)</option>
                      <option>Monthly Ongoing Partnership</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      5. Specific Features or Goals
                    </label>
                    <input
                      type="text"
                      value={specialRequirements}
                      onChange={(e) => setSpecialRequirements(e.target.value)}
                      placeholder="e.g. Need Cashfree integration, Amazon catalog sheets, or Google Scholar indexing."
                      className="mt-2 w-full rounded-2xl border border-border/80 bg-background/80 p-3.5 text-xs sm:text-sm text-foreground shadow-sm focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Generated Proposal Output Card */}
                <div className="mt-8 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6 sm:p-8 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
                        Generated Scope & Proposal Draft
                      </span>
                      <h4 className="text-lg font-bold text-foreground mt-0.5">
                        {selectedPackage.title}
                      </h4>
                    </div>

                    <button
                      onClick={handleCopyProposal}
                      className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-bold text-purple-700 dark:text-purple-300 hover:bg-purple-500/20 transition-colors shrink-0"
                    >
                      {proposalCopied ? <Check size={14} /> : <Copy size={14} />}
                      {proposalCopied ? "Proposal Copied!" : "Copy Proposal Text"}
                    </button>
                  </div>

                  {/* Pricing & Timeline Pill */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-background/80 border border-border/60">
                      <p className="text-[10px] text-foreground/50 uppercase font-bold">Indicative Cost</p>
                      <p className="mt-1 font-bold text-foreground">
                        {selectedPackage.indicativePriceINR}
                      </p>
                      <span className="text-[10px] text-foreground/50">({selectedPackage.indicativePriceUSD})</span>
                    </div>

                    <div className="p-3 rounded-xl bg-background/80 border border-border/60">
                      <p className="text-[10px] text-foreground/50 uppercase font-bold">Timeline</p>
                      <p className="mt-1 font-bold text-foreground">
                        {selectedPackage.estimatedTimeline}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-background/80 border border-border/60 col-span-2 sm:col-span-1">
                      <p className="text-[10px] text-foreground/50 uppercase font-bold">Revision Policy</p>
                      <p className="mt-1 font-bold text-foreground">
                        {selectedPackage.revisionLimit}
                      </p>
                    </div>
                  </div>

                  {/* Included Deliverables */}
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-foreground/60">
                      Included Package Deliverables:
                    </p>
                    {selectedPackage.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-xs text-foreground/80">
                        <CheckCircle2 size={13} className="text-purple-500 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                  {/* Explicit Exclusions */}
                  <div className="space-y-1.5 pt-2 text-[11px] text-foreground/65 border-t border-purple-500/15">
                    <p className="font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      Explicit Exclusions (Zero Hidden Charges):
                    </p>
                    {selectedPackage.explicitExclusions.map((ex) => (
                      <p key={ex}>• {ex}</p>
                    ))}
                  </div>

                  {/* Transfer to Contact Form */}
                  <div className="pt-4 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-foreground/60 max-w-md">
                      Transfer this configured proposal directly to Aradhy Jain for a formal quote and delivery kickoff.
                    </p>

                    <button
                      onClick={() =>
                        handleTransferToContact(
                          `Hi Aradhy, I generated a project brief for ${businessName.trim() || "my company"} (${businessIndustry}):\n- Package: ${selectedPackage.title}\n- Indicative Estimate: ${selectedPackage.indicativePriceINR}\n- Target Timeline: ${timelinePreference}\n- Details: ${specialRequirements}\n\nPlease review and let's discuss milestones.`,
                          selectedPackage.title
                        )
                      }
                      className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-purple-700 transition-colors shrink-0"
                    >
                      Submit Proposal to Aradhy
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- TAB 3: E-COMMERCE LISTING GENERATOR --- */}
            {activeTab === "listing" && (
              <motion.div
                key="listing"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="panel border-border/70 bg-white/50 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl dark:bg-slate-900/50 rounded-[2.5rem]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    <ShoppingBag size={15} />
                    Marketplace Cataloging Preview
                  </div>
                  <span className="text-[11px] rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-amber-700 dark:text-amber-300 font-medium">
                    Amazon · Flipkart · Meesho
                  </span>
                </div>

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  E-commerce Listing Sample Generator
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  See how raw product details are converted into a compliant, search-optimized title, feature bullet points, and backend keywords for Indian marketplaces.
                </p>

                {/* Input Fields */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      Product Name
                    </label>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-border/80 bg-background/80 p-3 text-xs sm:text-sm text-foreground focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      Primary Material / Craft
                    </label>
                    <input
                      type="text"
                      value={productMaterial}
                      onChange={(e) => setProductMaterial(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-border/80 bg-background/80 p-3 text-xs sm:text-sm text-foreground focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      Dimensions / Capacity / Weight
                    </label>
                    <input
                      type="text"
                      value={productDimensions}
                      onChange={(e) => setProductDimensions(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-border/80 bg-background/80 p-3 text-xs sm:text-sm text-foreground focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      Key Distinguishing Features
                    </label>
                    <input
                      type="text"
                      value={productFeatures}
                      onChange={(e) => setProductFeatures(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-border/80 bg-background/80 p-3 text-xs sm:text-sm text-foreground focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Sample Selection Quick Buttons */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-foreground/60">
                  <span>Try sample:</span>
                  {SAMPLE_PRODUCTS.map((prod) => (
                    <button
                      key={prod.name}
                      type="button"
                      onClick={() => {
                        setProductName(prod.name);
                        setProductMaterial(prod.material);
                        setProductDimensions(prod.dimensions);
                        setProductFeatures(prod.features);
                      }}
                      className="rounded-lg border border-border/60 bg-foreground/5 px-2.5 py-1 text-amber-600 dark:text-amber-400 hover:bg-foreground/10"
                    >
                      {prod.name}
                    </button>
                  ))}
                </div>

                {/* Generated Listing Output */}
                <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-300">
                      Marketplace Compliant Draft (Amazon / Flipkart / Meesho)
                    </span>
                    <button
                      onClick={handleCopyListing}
                      className="inline-flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-300 hover:underline"
                    >
                      {listingCopied ? <Check size={14} /> : <Copy size={14} />}
                      {listingCopied ? "Copied" : "Copy Listing Set"}
                    </button>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    {/* Title */}
                    <div className="p-3.5 rounded-xl bg-background/80 border border-border/60">
                      <p className="text-[10px] font-bold text-foreground/50 uppercase mb-1">
                        Search-Optimized Title (Under 200 Chars)
                      </p>
                      <p className="font-semibold text-foreground">{generatedTitle}</p>
                    </div>

                    {/* Bullet Points */}
                    <div className="p-3.5 rounded-xl bg-background/80 border border-border/60 space-y-2">
                      <p className="text-[10px] font-bold text-foreground/50 uppercase mb-1">
                        5 Key Feature Bullet Points
                      </p>
                      {generatedBullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-foreground/80 text-xs">
                          <CheckCircle2 size={13} className="text-amber-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-amber-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-foreground/55 max-w-md">
                      Demonstration preview. Full client engagements include live Amazon/Flipkart keyword volume validation, category referral fee structures, and strict image dimension guidelines.
                    </p>

                    <button
                      onClick={() =>
                        handleTransferToContact(
                          `Hi Aradhy, I need help cataloging and listing our product range on Amazon, Flipkart, and Meesho. Sample product: ${productName}. Let's discuss scope.`,
                          "E-commerce & Marketplace Storefront"
                        )
                      }
                      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-amber-700 transition-colors"
                    >
                      Hire Me For Cataloging
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
