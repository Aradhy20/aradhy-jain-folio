"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { BrainCircuit, ChartNoAxesCombined, Database } from "lucide-react";

const highlights = [
  {
    title: "Analytics Mindset",
    description: "Strong at cleaning noisy data, spotting patterns, and translating analysis into business value.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "AI + NLP Curiosity",
    description: "Exploring transformer workflows, prompt engineering, and language-focused product experiences.",
    icon: BrainCircuit,
  },
  {
    title: "Data Foundations",
    description: "Comfortable with SQL, ETL thinking, dashboard design, and building reliable reporting pipelines.",
    icon: Database,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <div className="text-center">
            <p className="section-kicker">About</p>
            <h2 className="section-title">
              Built for insight, speed, and thoughtful execution.
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

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="panel card-hover p-8 sm:p-10"
            >
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-300">
                Professional Summary
              </p>
              <p className="mt-6 text-lg leading-8 text-foreground/75 sm:text-xl">
                I enjoy working where data, design, and decision-making meet. My process
                starts with understanding the problem, then building clean analysis,
                dashboards, or AI-powered tools that help teams move faster with more
                confidence.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-border/70 bg-background/65 p-5 dark:bg-slate-950/40">
                  <p className="text-sm text-foreground/55">Core stack</p>
                  <p className="mt-2 text-base font-medium text-foreground">
                    Python, SQL, Power BI, Machine Learning
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-border/70 bg-background/65 p-5 dark:bg-slate-950/40">
                  <p className="text-sm text-foreground/55">What I optimize for</p>
                  <p className="mt-2 text-base font-medium text-foreground">
                    Clarity, performance, and actionable insights
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="panel card-hover flex h-full gap-4 p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-foreground/65">
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
