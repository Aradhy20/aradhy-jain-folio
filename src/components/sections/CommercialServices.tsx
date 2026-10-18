"use client";

import { PORTFOLIO_DATA, ServicePackage } from "@/data";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  TrendingUp,
  BarChart3,
  Layers,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Clock,
  RotateCcw,
  FileSpreadsheet,
  Info,
} from "lucide-react";
import { useState } from "react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6 text-cyan-400" />,
  Layers: <Layers className="h-6 w-6 text-blue-400" />,
  ShoppingBag: <ShoppingBag className="h-6 w-6 text-amber-400" />,
  TrendingUp: <TrendingUp className="h-6 w-6 text-purple-400" />,
  BarChart3: <BarChart3 className="h-6 w-6 text-emerald-400" />,
};

export function CommercialServices() {
  const [expandedExclusionId, setExpandedExclusionId] = useState<string | null>(null);

  const handleSelectService = (service: ServicePackage) => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
      const selectElem = document.getElementById("contact-service") as HTMLSelectElement | null;
      if (selectElem) {
        selectElem.value = service.title;
      }
    }
  };

  const handleOpenBriefBuilder = () => {
    const briefElem = document.getElementById("audit-tool");
    if (briefElem) {
      briefElem.scrollIntoView({ behavior: "smooth" });
      // Trigger brief tab if handler exists
      const briefBtn = document.querySelector('[data-tool-tab="brief"]') as HTMLButtonElement | null;
      if (briefBtn) briefBtn.click();
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 mb-4">
            <Sparkles size={14} className="text-cyan-400" />
            Defined Service Packages & Indicative Pricing
          </div>
          <h2 className="section-title">
            Outcome-Oriented Freelance Deliverables
          </h2>
          <p className="section-copy">
            Clear deliverables, transparent timelines, defined revision limits, and explicit exclusions across three core pillars: website development, e-commerce & marketplaces, and SEO/analytics automation.
          </p>
        </motion.div>

        {/* 3 Core Service Pillars Highlight */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-4 text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">Pillar 01</p>
            <p className="mt-1 text-sm font-bold text-foreground">Website Development</p>
            <p className="text-xs text-foreground/60 mt-0.5">Starter & Custom Business Portals</p>
          </div>
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">Pillar 02</p>
            <p className="mt-1 text-sm font-bold text-foreground">E-commerce & Marketplaces</p>
            <p className="text-xs text-foreground/60 mt-0.5">Amazon, Flipkart, Meesho & Storefronts</p>
          </div>
          <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-4 text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">Pillar 03</p>
            <p className="mt-1 text-sm font-bold text-foreground">SEO, Analytics & Automation</p>
            <p className="text-xs text-foreground/60 mt-0.5">Technical Audits, Speed & Retainers</p>
          </div>
        </div>

        {/* 5 Focused Service Packages Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_DATA.services.map((service, index) => {
            const isExclusionOpen = expandedExclusionId === service.id;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border/70 bg-white/60 p-7 sm:p-8 shadow-xl backdrop-blur-xl dark:bg-slate-900/50 hover:border-cyan-500/40 hover:shadow-2xl transition-all duration-300 ${
                  index === 1 ? "ring-2 ring-cyan-500/30 dark:ring-cyan-500/40" : ""
                }`}
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/40 shadow-sm backdrop-blur-md dark:bg-white/5">
                      {ICON_MAP[service.iconName] || <Globe className="h-6 w-6 text-cyan-400" />}
                    </div>
                    <span className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                      {service.categoryBadge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    {service.tagline}
                  </p>

                  {/* Pricing Box (Indicative) */}
                  <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[11px] font-medium text-foreground/60 uppercase">Indicative Price</span>
                      <span className="text-[11px] text-foreground/50">INR / USD</span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <p className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                        {service.indicativePriceINR}
                      </p>
                      <span className="text-xs text-foreground/60 font-medium">
                        ({service.indicativePriceUSD})
                      </span>
                    </div>
                    <p className="mt-1 text-[10px] text-foreground/55">
                      *Indicative estimate. Complex requirements receive a customized quote.
                    </p>
                  </div>

                  {/* Turnaround & Revision Terms */}
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-foreground/70">
                    <div className="flex items-center gap-1.5 rounded-xl border border-border/60 bg-foreground/[0.02] p-2.5">
                      <Clock size={13} className="text-cyan-500 shrink-0" />
                      <span className="truncate">{service.estimatedTimeline}</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-xl border border-border/60 bg-foreground/[0.02] p-2.5">
                      <RotateCcw size={13} className="text-purple-500 shrink-0" />
                      <span className="truncate">{service.revisionLimit}</span>
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="mt-3.5 rounded-xl border border-border/60 bg-foreground/[0.02] p-3 text-xs text-foreground/75">
                    <span className="font-bold text-foreground">Ideal for: </span>
                    {service.targetAudience}
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-foreground/70">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-5 pt-4 border-t border-foreground/10 space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                      Defined Deliverables:
                    </p>
                    {service.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-start gap-2 text-xs text-foreground/80">
                        <CheckCircle2 size={13} className="text-cyan-500 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Explicit Exclusions Toggle */}
                  <div className="mt-4 pt-3 border-t border-foreground/10">
                    <button
                      type="button"
                      onClick={() => setExpandedExclusionId(isExclusionOpen ? null : service.id)}
                      className="inline-flex items-center justify-between w-full text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 hover:underline"
                    >
                      <span className="flex items-center gap-1">
                        <Info size={12} />
                        Explicit Exclusions ({service.explicitExclusions.length})
                      </span>
                      <span>{isExclusionOpen ? "Hide" : "Show"}</span>
                    </button>

                    {isExclusionOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2.5 space-y-1.5 text-[11px] text-foreground/70 bg-amber-500/5 p-3 rounded-xl border border-amber-500/20"
                      >
                        {service.explicitExclusions.map((ex) => (
                          <div key={ex} className="flex items-start gap-1.5">
                            <XCircle size={12} className="text-amber-600 shrink-0 mt-0.5" />
                            <span>{ex}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Reference Projects */}
                  <div className="mt-4 pt-3 border-t border-foreground/10 flex flex-wrap gap-1.5">
                    {service.representativeProjects.map((ref) => (
                      <span
                        key={ref}
                        className="rounded-md border border-border/60 bg-foreground/[0.03] px-2 py-0.5 text-[10px] font-medium text-foreground/60"
                      >
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="mt-6 pt-4 border-t border-foreground/10 flex flex-col gap-2">
                  <button
                    onClick={() => handleSelectService(service)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#06b6d4,#2563eb)] py-2.5 text-xs font-bold text-white shadow-md hover:scale-[1.01] transition-transform"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight size={13} />
                  </button>

                  <button
                    onClick={() => handleOpenBriefBuilder()}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-border/70 bg-white/40 py-2 text-[11px] font-semibold text-foreground/70 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
                  >
                    <FileSpreadsheet size={13} className="text-purple-500" />
                    Configure in Proposal Builder
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Pricing Transparency & Third-Party Cost Callout */}
        <div className="mt-16 rounded-[2rem] border border-cyan-500/25 bg-cyan-500/5 p-6 sm:p-8 backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                <Info size={14} />
                Pricing Transparency & Third-Party Expense Policy
              </div>
              <h4 className="mt-2 text-xl font-bold text-foreground">
                Honest Scoping & Direct Provider Invoicing
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                {PORTFOLIO_DATA.pricingNotice}
              </p>
              <p className="mt-2 text-xs text-foreground/65 leading-relaxed">
                {PORTFOLIO_DATA.costTransparencyNotice}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                href="#audit-tool"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-xs font-bold text-purple-700 dark:text-purple-300 hover:bg-purple-500/20 transition-colors text-center"
              >
                <FileSpreadsheet size={15} />
                Open Interactive Proposal Builder
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-5 py-3 text-xs font-bold text-white shadow-md hover:scale-[1.01] transition-transform text-center"
              >
                <span>Request Custom Scoped Proposal</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
