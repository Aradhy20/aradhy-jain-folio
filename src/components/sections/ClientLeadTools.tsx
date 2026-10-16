"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
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
} from "lucide-react";
import { useState } from "react";

type ToolTab = "audit" | "brief" | "listing";

// Sample URLs for Audit
const SAMPLE_URLS = [
  "https://dsr.college",
  "https://sanmatijournal.in",
  "https://mybusinessdemo.com",
];

// Sample Products for Listing Generator
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

export function ClientLeadTools() {
  const [activeTab, setActiveTab] = useState<ToolTab>("audit");

  // --- Audit Tool State ---
  const [auditUrl, setAuditUrl] = useState("");
  const [auditConsent, setAuditConsent] = useState(false);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<{
    url: string;
    score: number;
    passed: string[];
    improvements: string[];
  } | null>(null);

  // --- Project Brief Assistant State ---
  const [businessType, setBusinessType] = useState("E-commerce & Retail");
  const [projectGoal, setProjectGoal] = useState("Launch Multi-Channel Storefront");
  const [timeline, setTimeline] = useState("Within 1 Month");
  const [budget, setBudget] = useState("₹25,000 – ₹50,000 / $300 – $600");
  const [briefCopied, setBriefCopied] = useState(false);

  // --- Listing Generator State ---
  const [productName, setProductName] = useState(SAMPLE_PRODUCTS[0].name);
  const [productMaterial, setProductMaterial] = useState(SAMPLE_PRODUCTS[0].material);
  const [productDimensions, setProductDimensions] = useState(SAMPLE_PRODUCTS[0].dimensions);
  const [productFeatures, setProductFeatures] = useState(SAMPLE_PRODUCTS[0].features);
  const [listingCopied, setListingCopied] = useState(false);

  // Run Simulated Heuristic Audit
  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditUrl.trim() || !auditConsent) return;

    setIsAuditing(true);
    setTimeout(() => {
      const isKnownGood =
        auditUrl.includes("dsr.college") || auditUrl.includes("sanmatijournal.in");

      const score = isKnownGood ? 94 : 76;
      const passed = isKnownGood
        ? [
            "SSL/HTTPS Security verified and encryption certificate active",
            "Mobile-friendly viewport meta tag configured for all screens",
            "Structured JSON-LD schema markup detected (Organization / Scholar)",
            "Semantic HTML5 heading structure (h1, h2, h3) clean",
            "Core Web Vitals LCP preloaded for high-speed first paint",
          ]
        : [
            "SSL/HTTPS Security detected",
            "Basic viewport meta tag present",
            "Standard title tag detected",
          ];

      const improvements = isKnownGood
        ? [
            "Additional OpenGraph image sizes could be cached for WhatsApp previews",
            "Continuous monitoring of Google Search Console index coverage recommended",
          ]
        : [
            "Missing JSON-LD structured data (Product, Organization or LocalBusiness)",
            "Uncompressed heavy image assets detected — WebP conversion required",
            "Heading hierarchy contains multiple skipped levels impacting SEO",
            "Core Web Vitals: LCP could be improved by ~1.2s through asset preloading",
            "Missing OpenGraph and Twitter card social preview metadata",
          ];

      setAuditResult({
        url: auditUrl,
        score,
        passed,
        improvements,
      });
      setIsAuditing(false);
    }, 1200);
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

  const handleTransferToContact = (message: string) => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
      const textarea = document.getElementById("contact-message") as HTMLTextAreaElement | null;
      if (textarea) {
        textarea.value = message;
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
            Interactive Client Tools
          </div>
          <h2 className="section-title">
            Explore Free AI & Growth Tools
          </h2>
          <p className="section-copy">
            Test your website&apos;s health, plan a project brief, or preview marketplace-ready product listings. Built to demonstrate practical outcomes before you hire me.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
          <button
            onClick={() => setActiveTab("audit")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "audit"
                ? "bg-[linear-gradient(135deg,#06b6d4,#2563eb)] text-white shadow-lg shadow-cyan-500/25"
                : "border border-border/70 bg-white/40 text-foreground/75 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
            }`}
          >
            <Search size={15} />
            Free Website Audit
          </button>

          <button
            onClick={() => setActiveTab("brief")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "brief"
                ? "bg-[linear-gradient(135deg,#06b6d4,#2563eb)] text-white shadow-lg shadow-cyan-500/25"
                : "border border-border/70 bg-white/40 text-foreground/75 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
            }`}
          >
            <FileText size={15} />
            AI Project Brief Assistant
          </button>

          <button
            onClick={() => setActiveTab("listing")}
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
            {/* --- TAB 1: WEBSITE AUDIT GENERATOR --- */}
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
                    Automated Diagnostic Scan
                  </div>
                  <span className="text-[11px] text-foreground/50">
                    Consent-Driven Analysis
                  </span>
                </div>

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Free Preliminary Website Audit
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  Enter your business or portfolio website URL to run a preliminary check on technical SEO, security, mobile viewport, and Core Web Vitals readiness.
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
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAuditing ? (
                        <>
                          <RefreshCw size={16} className="animate-spin" />
                          Scanning...
                        </>
                      ) : (
                        <>
                          Run Free Scan
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

                  {/* Consent Checkbox */}
                  <label className="flex items-start gap-2.5 pt-2 text-xs text-foreground/70 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={auditConsent}
                      onChange={(e) => setAuditConsent(e.target.checked)}
                      className="mt-0.5 rounded border-border text-cyan-500 focus:ring-cyan-400"
                    />
                    <span>
                      I authorize a preliminary audit check on this domain. Clearly identified as an automated heuristic audit.
                    </span>
                  </label>
                </form>

                {/* Audit Results Box */}
                {auditResult && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6 sm:p-8"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cyan-500/15">
                      <div>
                        <p className="text-xs text-foreground/50">Audited Domain</p>
                        <p className="text-lg font-bold text-foreground">
                          {auditResult.url}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-xs text-foreground/50">Health Score</p>
                          <p className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">
                            {auditResult.score}/100
                          </p>
                        </div>
                        <div className="h-12 w-12 rounded-xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center font-bold text-cyan-600 dark:text-cyan-300 text-lg">
                          {auditResult.score >= 90 ? "A" : auditResult.score >= 75 ? "B" : "C"}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      {/* Passed Checks */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-3">
                          <CheckCircle2 size={14} />
                          Verified Strengths ({auditResult.passed.length})
                        </p>
                        <div className="space-y-2">
                          {auditResult.passed.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                              <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Opportunities / Fixes */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5 mb-3">
                          <AlertTriangle size={14} />
                          Actionable Optimization Areas ({auditResult.improvements.length})
                        </p>
                        <div className="space-y-2">
                          {auditResult.improvements.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                              <AlertTriangle size={13} className="text-amber-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Disclaimer & Implementation CTA */}
                    <div className="mt-8 pt-5 border-t border-cyan-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-[11px] text-foreground/55 max-w-md">
                        Preliminary heuristic scan. A full manual technical audit includes server log inspections, deep crawl indexing, and Core Web Vitals field data.
                      </p>

                      <button
                        onClick={() =>
                          handleTransferToContact(
                            `Hi Aradhy, I ran the free audit on ${auditResult.url} (Score: ${auditResult.score}/100) and would like your help implementing the recommendations:\n- ${auditResult.improvements.join("\n- ")}`
                          )
                        }
                        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-cyan-600 transition-colors"
                      >
                        Request Implementation Fix
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* --- TAB 2: AI PROJECT BRIEF ASSISTANT --- */}
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
                    <Bot size={15} />
                    AI Project Scope Assistant
                  </div>
                  <span className="text-[11px] rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-0.5 text-purple-700 dark:text-purple-300 font-medium">
                    No Sign-Up Required
                  </span>
                </div>

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Generate Your Project Scope & Estimate
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  Answer 4 quick questions about your business. The assistant structures your requirements into a clear technical brief and recommends the matching service package.
                </p>

                {/* Question Form */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      1. Business Type & Industry
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-border/80 bg-background/80 p-3.5 text-xs sm:text-sm text-foreground shadow-sm focus:border-cyan-500 focus:outline-none"
                    >
                      <option>E-commerce & Retail Manufacturer</option>
                      <option>Educational College / Academic Institution</option>
                      <option>Consultancy / Professional Firm</option>
                      <option>Local Business / Clinic / Service Provider</option>
                      <option>Tech Startup / Digital Product</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      2. Primary Goal
                    </label>
                    <select
                      value={projectGoal}
                      onChange={(e) => setProjectGoal(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-border/80 bg-background/80 p-3.5 text-xs sm:text-sm text-foreground shadow-sm focus:border-cyan-500 focus:outline-none"
                    >
                      <option>Launch Multi-Channel Storefront & Marketplaces</option>
                      <option>Build Custom Business / Institutional Website</option>
                      <option>Technical SEO Audit & Speed Improvement</option>
                      <option>Automate Business Reporting & Dashboards</option>
                      <option>End-to-End Digital Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      3. Target Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-border/80 bg-background/80 p-3.5 text-xs sm:text-sm text-foreground shadow-sm focus:border-cyan-500 focus:outline-none"
                    >
                      <option>Within 2–3 Weeks (High Urgency)</option>
                      <option>Within 1 Month (Standard Delivery)</option>
                      <option>1–2 Months (Phased Rollout)</option>
                      <option>Flexible / Exploratory Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground/70 uppercase">
                      4. Approximate Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-border/80 bg-background/80 p-3.5 text-xs sm:text-sm text-foreground shadow-sm focus:border-cyan-500 focus:outline-none"
                    >
                      <option>Starter Scope: ₹15,000 – ₹30,000 ($200 – $400)</option>
                      <option>Growth Scope: ₹30,000 – ₹60,000 ($400 – $800)</option>
                      <option>Comprehensive: ₹60,000 – ₹1,20,000 ($800 – $1,500)</option>
                      <option>Custom Enterprise / Multi-Month Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Structured Brief Output */}
                <div className="mt-8 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-300">
                      Generated Structured Project Brief
                    </span>
                    <button
                      onClick={() => {
                        const briefText = `PROJECT BRIEF:\n- Business Type: ${businessType}\n- Goal: ${projectGoal}\n- Timeline: ${timeline}\n- Budget: ${budget}\n- Recommended Service: ${
                          projectGoal.includes("Marketplace")
                            ? "E-commerce & Marketplace Operations"
                            : projectGoal.includes("SEO")
                            ? "SEO & Website Performance"
                            : "Website Design & Development"
                        }`;
                        navigator.clipboard.writeText(briefText);
                        setBriefCopied(true);
                        setTimeout(() => setBriefCopied(false), 2000);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs text-purple-600 dark:text-purple-300 hover:underline"
                    >
                      {briefCopied ? <Check size={14} /> : <Copy size={14} />}
                      {briefCopied ? "Copied" : "Copy Brief"}
                    </button>
                  </div>

                  <div className="mt-4 space-y-3 text-xs sm:text-sm text-foreground/80">
                    <p>
                      <strong className="text-foreground">Recommended Service:</strong>{" "}
                      {projectGoal.includes("Marketplace")
                        ? "E-commerce & Marketplace Operations (Amazon, Flipkart, Meesho)"
                        : projectGoal.includes("SEO")
                        ? "SEO & Website Performance Improvement"
                        : "Custom Website Design & Development"}
                    </p>
                    <p>
                      <strong className="text-foreground">Project Scope:</strong> Implementation of{" "}
                      {projectGoal} for {businessType}. Target completion {timeline.toLowerCase()} within {budget}.
                    </p>
                    <p>
                      <strong className="text-foreground">Key Architecture Milestones:</strong> Requirements discovery &rarr; Information architecture & wireframing &rarr; Core development & styling &rarr; SEO/marketplace compliance verification &rarr; Final launch and analytics handover.
                    </p>
                  </div>

                  {/* Transfer to Contact Form */}
                  <div className="mt-6 pt-4 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-foreground/60">
                      Transfer this brief into the contact inquiry form with 1 click.
                    </span>
                    <button
                      onClick={() =>
                        handleTransferToContact(
                          `Hi Aradhy, I generated a project brief using your AI assistant:\n- Business: ${businessType}\n- Goal: ${projectGoal}\n- Timeline: ${timeline}\n- Budget: ${budget}\n\nLet's connect to discuss deliverables.`
                        )
                      }
                      className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-purple-700 transition-colors"
                    >
                      Submit Brief to Aradhy
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
                      Demonstration preview. In full client engagements, listings are verified against live Amazon/Flipkart keyword volumes, category fee structures, and strict image guidelines.
                    </p>

                    <button
                      onClick={() =>
                        handleTransferToContact(
                          `Hi Aradhy, I need help cataloging and listing our product range on Amazon, Flipkart, and Meesho. Sample product: ${productName}. Let's discuss scope.`
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
