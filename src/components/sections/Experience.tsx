"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">A timeline of shipping useful work.</h2>
            <p className="section-copy mx-auto max-w-3xl">
              Internships across analytics, development, and data tooling have shaped a
              practical, outcome-driven approach to solving problems.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div className="absolute left-5 top-4 h-[calc(100%-2rem)] w-px bg-[linear-gradient(180deg,rgba(34,211,238,0.5),rgba(37,99,235,0.3),transparent)] md:left-1/2" />

            <div className="space-y-8">
              {PORTFOLIO_DATA.experience.map((role, index) => (
                <motion.article
                  key={role.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative grid gap-4 md:grid-cols-2 ${
                    index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className="hidden md:block" />
                  <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/35 bg-background shadow-xl md:left-1/2 md:-translate-x-1/2">
                    <BriefcaseBusiness size={18} className="text-cyan-600 dark:text-cyan-300" />
                  </div>

                  <div className="pl-16 md:pl-0">
                    <div className="panel card-hover p-6 sm:p-8">
                      <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                        {role.period}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-base text-foreground/62">{role.company}</p>
                      <div className="mt-6 space-y-3">
                        {role.responsibilities.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-sm leading-7 text-foreground/68"
                          >
                            <span className="mt-2 h-2 w-2 rounded-full bg-[linear-gradient(135deg,#22d3ee,#2563eb)]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
