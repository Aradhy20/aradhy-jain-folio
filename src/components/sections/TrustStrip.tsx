"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingBag, TrendingUp, BarChart3, CheckCircle2 } from "lucide-react";

const CAPABILITIES = [
  {
    title: "Web Development",
    description: "Custom business websites & institutional web portals with sub-second LCP.",
    icon: Globe,
    proofTag: "Live: dsr.college & sanmatijournal.in",
  },
  {
    title: "E-commerce & Marketplaces",
    description: "Catalog architecture, SKU management, and listing workflows across channels.",
    icon: ShoppingBag,
    proofTag: "Amazon · Flipkart · Meesho",
  },
  {
    title: "Technical SEO",
    description: "Structured data schemas, Core Web Vitals, and Google Search Console indexing.",
    icon: TrendingUp,
    proofTag: "Schema.org & Google Scholar",
  },
  {
    title: "Analytics & Automation",
    description: "Python data cleaning, workflow automation, and executive BI dashboards.",
    icon: BarChart3,
    proofTag: "Python & Power BI",
  },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-8 mb-12 sm:mb-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[2.2rem] border border-border/80 bg-white/70 p-6 sm:p-8 shadow-xl backdrop-blur-2xl dark:bg-slate-900/70"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-foreground/5">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Verified Core Capabilities
              </p>
              <h3 className="mt-1 text-lg sm:text-xl font-bold text-foreground">
                Delivering High-Impact Digital Growth Across 4 Pillars
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 size={14} className="text-emerald-500" />
              Verified Project Deliverables Only
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-border/60 bg-foreground/[0.02] p-5 transition-colors hover:border-cyan-500/40 dark:bg-white/[0.02]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <Icon size={18} />
                    </div>
                    <span className="rounded-md border border-cyan-500/20 bg-cyan-500/5 px-2 py-0.5 text-[10px] font-bold text-cyan-700 dark:text-cyan-300">
                      {cap.proofTag}
                    </span>
                  </div>

                  <h4 className="mt-4 text-base font-bold text-foreground">
                    {cap.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground/70">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
