"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  TrendingUp,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface CommercialServiceItem {
  id: string;
  title: string;
  categoryBadge: string;
  targetAudience: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  deliverables: string[];
  referenceProjects: string[];
  ctaLabel: string;
}

const SERVICES: CommercialServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Design & Development",
    categoryBadge: "High-Performance Web",
    targetAudience: "Small businesses, educational institutions, consultants, publishers & startups",
    icon: <Globe className="h-6 w-6 text-cyan-400" />,
    tagline: "Custom websites built for credibility, high conversion, and sub-second load times.",
    description:
      "Full-cycle web design and development crafted with modern frameworks. From clean business websites and institutional portals to responsive landing pages and ongoing maintenance.",
    deliverables: [
      "Custom business websites & high-converting landing pages",
      "Institutional and academic web portals with structured information architecture",
      "Mobile-first responsive layouts tested across all screen viewports",
      "Fast Core Web Vitals optimization (sub-second LCP)",
      "Ongoing website maintenance, bug fixes & security updates",
    ],
    referenceProjects: ["DSR College (dsr.college)", "Sanmati Journal (sanmatijournal.in)", "Jambudweep Portal"],
    ctaLabel: "Inquire for Web Development",
  },
  {
    id: "ecommerce-marketplaces",
    title: "E-commerce & Marketplace Operations",
    categoryBadge: "Multi-Channel Commerce",
    targetAudience: "Manufacturers, handicraft sellers, retailers, and online brands",
    icon: <ShoppingBag className="h-6 w-6 text-amber-400" />,
    tagline: "Amazon, Flipkart, Meesho marketplace setup and direct web storefronts.",
    description:
      "End-to-end commerce operations that turn raw inventory into organized, discoverable listings across India's top marketplaces and direct-to-consumer digital storefronts.",
    deliverables: [
      "Amazon, Flipkart & Meesho seller account onboarding & listing workflows",
      "Product catalog architecture, SKU hierarchies & attribute standardization",
      "Policy-compliant, keyword-rich product titles & bullet points",
      "Listing creative sets, zoom-ready image guidelines & infographics",
      "Direct e-commerce storefront development with category filtering",
    ],
    referenceProjects: ["Paras Metal (Amazon, Flipkart, Meesho)", "Artisanal Home Decor Store"],
    ctaLabel: "Inquire for E-commerce / Catalog",
  },
  {
    id: "seo-speed",
    title: "SEO & Website Performance Improvement",
    categoryBadge: "Search & Visibility",
    targetAudience: "Businesses with an existing website that needs more organic traffic & speed",
    icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
    tagline: "Outrank competitors and turn organic search traffic into qualified buyer inquiries.",
    description:
      "Technical audits, schema markup implementation, and search engine optimization. I diagnose crawl issues, configure Google Search Console, and improve ranking factors.",
    deliverables: [
      "Comprehensive technical SEO audits with prioritized fix roadmaps",
      "On-page SEO: title tags, meta descriptions, heading structure & keywords",
      "Google Search Console & GA4 traffic tracking and indexing verification",
      "Schema.org structured data (Organization, Product, Educational, Academic)",
      "Core Web Vitals performance tuning (LCP, CLS, INP)",
    ],
    referenceProjects: ["Sanmati Research Journal (ISSN 3108-1819)", "DSR College SEO"],
    ctaLabel: "Request Website SEO Audit",
  },
  {
    id: "marketing-analytics",
    title: "Digital Marketing & Analytics Automation",
    categoryBadge: "Marketing & Automation",
    targetAudience: "Businesses that need consistent online marketing, creatives & executive reporting",
    icon: <Megaphone className="h-6 w-6 text-emerald-400" />,
    tagline: "Consistent social presence, creative assets, and automated executive dashboards.",
    description:
      "Connecting digital presence with practical client acquisition. Social media content strategy, product creatives, automated Power BI/Excel dashboards, and Python scripts.",
    deliverables: [
      "Social media content calendars, promotional graphics & brand creatives",
      "E-commerce promotional banners and feature graphics",
      "Automated Power BI and Google Sheets dashboards tracking key business KPIs",
      "Python scripts automating repetitive data cleaning and report generation",
      "Clear monthly performance summaries with actionable growth recommendations",
    ],
    referenceProjects: ["Paras Metal Creatives", "TMU Departmental KPI Dashboard", "MathesisLabs Automation"],
    ctaLabel: "Inquire for Marketing & Analytics",
  },
];

export function CommercialServices() {
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
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300 mb-4">
            <Sparkles size={14} className="text-cyan-400" />
            Commercial Client Services
          </div>
          <h2 className="section-title">
            Tailored Solutions to Grow Your Business
          </h2>
          <p className="section-copy">
            Clear deliverables, honest scoping, and outcome-oriented execution across web development, marketplace operations, search visibility, and automation.
          </p>
        </motion.div>

        {/* 4 Focused Services Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border/70 bg-white/50 p-8 sm:p-10 shadow-xl backdrop-blur-xl dark:bg-slate-900/40 hover:border-cyan-500/40 hover:shadow-2xl transition-all duration-300"
            >
              {/* Corner Aura */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/15 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/20 shadow-sm backdrop-blur-md dark:bg-white/5">
                    {service.icon}
                  </div>
                  <span className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                    {service.categoryBadge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                  {service.tagline}
                </p>

                {/* Target Audience Pill */}
                <div className="mt-4 rounded-xl border border-border/60 bg-foreground/[0.02] p-3 text-xs text-foreground/75">
                  <span className="font-bold text-foreground">Best for: </span>
                  {service.targetAudience}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-5 border-t border-foreground/5 space-y-2.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-foreground/50">
                    What You Receive:
                  </p>
                  {service.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-start gap-2.5 text-xs text-foreground/80">
                      <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                {/* Representative Case References */}
                <div className="mt-6 pt-4 border-t border-foreground/5 flex flex-wrap gap-1.5">
                  {service.referenceProjects.map((ref) => (
                    <span
                      key={ref}
                      className="rounded-md border border-border/60 bg-foreground/[0.03] px-2.5 py-1 text-[11px] font-medium text-foreground/60"
                    >
                      {ref}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-foreground/5 flex items-center justify-between">
                <a
                  href="/freelance"
                  className="text-xs font-medium text-foreground/60 hover:text-foreground transition-colors"
                >
                  View Details →
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:scale-[1.02] transition-transform"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
