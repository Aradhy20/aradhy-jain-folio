"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { ShoppingBag, TrendingUp, BarChart3, Sparkles } from "lucide-react";

const highlights = [
  {
    title: "Web & E-commerce Delivery",
    description: "Designing responsive websites and digital storefronts (like Paras Metal) that elevate brand quality and customer trust.",
    icon: ShoppingBag,
  },
  {
    title: "SEO & Digital Growth",
    description: "Structuring technical SEO, Google Search Console indexing, and Core Web Vitals performance for organic discoverability.",
    icon: TrendingUp,
  },
  {
    title: "Analytics & Automation",
    description: "Engineering Power BI dashboards, SQL databases, and Python automation scripts that eliminate repetitive manual workflows.",
    icon: BarChart3,
  },
  {
    title: "Applied AI Solutions",
    description: "Building practical NLP sentiment engines, transformer models, and conversational assistants to enhance user experiences.",
    icon: Sparkles,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <div className="text-center">
            <p className="section-kicker">About Me</p>
            <h2 className="section-title">
              Crafting Digital Solutions That Help Businesses Grow.
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section-copy mx-auto max-w-3xl"
            >
              {PORTFOLIO_DATA.about}
            </motion.p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="panel card-hover p-8 sm:p-10 flex flex-col justify-between rounded-[2.2rem]"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-300">
                  Multidisciplinary Approach
                </p>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/80">
                  I connect the dots across modern web engineering, commercial usability, technical SEO, and data automation. Whether building an institutional portal for DSR College, organizing academic literature for Sanmati Journal, or structuring e-commerce catalogs for Paras Metal, I focus on clean architecture, reliable performance, and genuine business utility.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-border/70 bg-background/65 p-4 sm:p-5 dark:bg-slate-950/40">
                  <p className="text-xs text-foreground/55 font-medium uppercase tracking-wider">Core Stack</p>
                  <p className="mt-1.5 text-sm font-semibold text-foreground">
                    Next.js, React, TypeScript, Python, SQL, Tailwind
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-border/70 bg-background/65 p-4 sm:p-5 dark:bg-slate-950/40">
                  <p className="text-xs text-foreground/55 font-medium uppercase tracking-wider">What I Optimize For</p>
                  <p className="mt-1.5 text-sm font-semibold text-foreground">
                    Speed, accessibility, user conversion & reliability
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-3.5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="panel card-hover flex items-start gap-4 p-5 rounded-[1.6rem]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-foreground/70">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
