"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  TrendingUp,
  Megaphone,
  BarChart3,
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
    id: "website-dev",
    title: "Website Development",
    categoryBadge: "Primary Focus",
    targetAudience: "Small businesses, educational institutions, consultants, publishers & startups",
    icon: <Globe className="h-6 w-6 text-cyan-400" />,
    tagline: "Custom websites built for credibility, fast loading, and clear visitor pathways.",
    description:
      "Developing bespoke business websites, institutional portals, and high-converting landing pages. Built with clean Next.js/React, semantic markup, and mobile-first responsiveness.",
    deliverables: [
      "Business and institutional websites",
      "Responsive UI implementation (Mobile, Tablet, Desktop)",
      "High-converting landing pages",
      "Website redesigns and modernizations",
      "Contact forms and workflow integrations",
      "Performance and accessibility improvements",
    ],
    referenceProjects: ["DSR College (dsr.college)", "Sanmati Journal (sanmatijournal.in)"],
    ctaLabel: "Discuss Website Development",
  },
  {
    id: "ecommerce-marketplaces",
    title: "E-commerce & Marketplace Support",
    categoryBadge: "Primary Focus",
    targetAudience: "Manufacturers, handicraft sellers, retailers, and online brands",
    icon: <ShoppingBag className="h-6 w-6 text-amber-400" />,
    tagline: "Amazon, Flipkart, Meesho cataloging and direct web storefronts.",
    description:
      "End-to-end commerce catalog operations. Turning raw inventory into structured, discoverable listings across marketplaces and direct-to-consumer digital storefronts.",
    deliverables: [
      "Product catalogue organization and categorization",
      "SKU and product data architecture",
      "Search-optimized product titles and bullet descriptions",
      "Listing content and image planning for marketplace readiness",
      "Amazon Seller Central, Flipkart, and Meesho onboarding support",
      "Direct product page improvements and checkout flows",
    ],
    referenceProjects: ["Paras Metal (Amazon, Flipkart, Meesho)"],
    ctaLabel: "Discuss E-commerce & Marketplaces",
  },
  {
    id: "seo-growth",
    title: "SEO & Website Optimization",
    categoryBadge: "Primary Focus",
    targetAudience: "Businesses with an existing website that needs more organic traffic & speed",
    icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
    tagline: "Technical SEO audits, structured data, and search engine discoverability.",
    description:
      "Technical audits, schema markup implementation, and search engine optimization. I diagnose crawl issues, configure Google Search Console, and improve ranking factors.",
    deliverables: [
      "Technical SEO audits with prioritized fix roadmaps",
      "Metadata, Open Graph tags, and structured schema data",
      "Indexing, sitemap, and crawlability checks",
      "Core Web Vitals investigation and speed tuning (LCP, CLS, INP)",
      "Content organization and internal linking structure",
      "Search visibility improvements and Google Search Console setup",
    ],
    referenceProjects: ["Sanmati Research Journal (ISSN 3108-1819)", "DSR College SEO"],
    ctaLabel: "Discuss SEO & Optimization",
  },
  {
    id: "marketing-analytics",
    title: "Digital Marketing & Analytics",
    categoryBadge: "Growth Services",
    targetAudience: "Businesses that need consistent online marketing, creatives & executive reporting",
    icon: <Megaphone className="h-6 w-6 text-emerald-400" />,
    tagline: "Consistent social presence, creative assets, and automated executive dashboards.",
    description:
      "Connecting digital presence with practical client acquisition. Social media content strategy, product creatives, automated Power BI/Excel dashboards, and Python scripts.",
    deliverables: [
      "Social media content support and planning",
      "Campaign reporting and performance reviews",
      "Analytics dashboards (Power BI, Google Sheets, Excel)",
      "Performance reporting on web traffic and user behavior",
      "Conversion tracking where configured",
      "E-commerce promotional graphics and creatives",
    ],
    referenceProjects: ["Paras Metal Branding", "TMU Departmental KPI Dashboard"],
    ctaLabel: "Discuss Marketing & Analytics",
  },
  {
    id: "python-data-automation",
    title: "Python, Data & Automation",
    categoryBadge: "Supporting Capability",
    targetAudience: "Businesses that need custom reporting pipelines, data cleaning, or workflow automation",
    icon: <BarChart3 className="h-6 w-6 text-blue-400" />,
    tagline: "Custom data pipelines, reporting automation, and practical intelligent workflows.",
    description:
      "Supporting capabilities in Python scripting, data cleaning, automated business dashboards, and practical AI/ML prototypes designed to eliminate tedious manual workflows.",
    deliverables: [
      "Data cleaning and preprocessing for business datasets (Python, Pandas)",
      "Interactive business dashboards (Power BI, Google Sheets)",
      "Workflow automation scripts saving repetitive manual hours",
      "API data extraction and automated reports",
      "Practical AI/ML prototypes when suitable (NLP, classification)",
    ],
    referenceProjects: ["TMU Departmental Analytics", "MathesisLabs IT Scripts"],
    ctaLabel: "Discuss Data & Automation",
  },
];

export function CommercialServices() {
  const handleSelectService = (serviceTitle: string) => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
      const selectElem = document.getElementById("contact-service") as HTMLSelectElement | null;
      if (selectElem) {
        selectElem.value = serviceTitle;
      }
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
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300 mb-4">
            <Sparkles size={14} className="text-cyan-400" />
            Commercial Client Services
          </div>
          <h2 className="section-title">
            Defined Services Built for Business Growth
          </h2>
          <p className="section-copy">
            Transparent deliverables, honest scoping, and outcome-oriented execution across web development, e-commerce, search visibility, and automation.
          </p>
        </motion.div>

        {/* 5 Focused Services Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border/70 bg-white/50 p-8 shadow-xl backdrop-blur-xl dark:bg-slate-900/40 hover:border-cyan-500/40 hover:shadow-2xl transition-all duration-300 ${
                index >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-white/20 bg-white/20 shadow-sm backdrop-blur-md dark:bg-white/5">
                    {service.icon}
                  </div>
                  <span className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                    {service.categoryBadge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  {service.tagline}
                </p>

                {/* Target Audience Pill */}
                <div className="mt-4 rounded-xl border border-border/60 bg-foreground/[0.02] p-3 text-xs text-foreground/75">
                  <span className="font-bold text-foreground">Best for: </span>
                  {service.targetAudience}
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-foreground/70">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-5 border-t border-foreground/5 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-foreground/50">
                    What You Receive:
                  </p>
                  {service.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-start gap-2.5 text-xs text-foreground/80">
                      <CheckCircle2 size={13} className="text-cyan-500 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                {/* Representative Case References */}
                <div className="mt-6 pt-4 border-t border-foreground/5 flex flex-wrap gap-1.5">
                  {service.referenceProjects.map((ref) => (
                    <span
                      key={ref}
                      className="rounded-md border border-border/60 bg-foreground/[0.03] px-2 py-0.5 text-[10px] font-medium text-foreground/60"
                    >
                      {ref}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-5 border-t border-foreground/5 flex items-center justify-between">
                <span className="text-xs text-foreground/50 font-medium">Request a Quote</span>

                <button
                  onClick={() => handleSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-4 py-2 text-xs font-semibold text-white shadow-md hover:scale-[1.02] transition-transform"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
