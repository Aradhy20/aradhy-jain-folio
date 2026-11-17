"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion, useScroll } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useRef } from "react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

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

          <div ref={containerRef} className="relative mt-14">
            {/* Background Static Line */}
            <div className="absolute left-5 top-4 h-[calc(100%-2rem)] w-[2px] bg-foreground/10 md:left-1/2 md:-translate-x-1/2" />

            {/* Glowing Active Scroll Laser Line */}
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-[19px] top-4 origin-top h-[calc(100%-2rem)] w-[3px] bg-[linear-gradient(180deg,#22d3ee,#2563eb,#8b5cf6)] shadow-[0_0_12px_rgba(34,211,238,0.7)] md:left-1/2 md:-translate-x-[1.5px]"
            />

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
                  <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/35 bg-background shadow-xl md:left-1/2 md:-translate-x-1/2 z-10 transition-transform duration-300 hover:scale-110">
                    <BriefcaseBusiness size={18} className="text-cyan-600 dark:text-cyan-300 animate-pulse" />
                  </div>

                  <div className="pl-16 md:pl-0">
                    <div className="panel border-border/70 bg-white/45 p-6 shadow-xl backdrop-blur-xl dark:bg-white/5 transition-all duration-300 sm:p-8 hover:shadow-[0_20px_40px_rgba(6,182,212,0.12)] hover:border-cyan-500/40 relative overflow-hidden group">
                      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/15 transition-all duration-500" />
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 tracking-wider">
                          {role.period}
                        </p>
                        {"type" in role && role.type && (
                          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            role.type === "Formal Employment"
                              ? "border border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-300"
                              : role.type === "Independent Freelance Practice"
                              ? "border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"
                              : role.type === "University Internship"
                              ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                              : "border border-border/80 bg-foreground/5 text-foreground/70"
                          }`}>
                            {role.type}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-base font-medium text-foreground/75">{role.company}</p>
                      <div className="mt-6 space-y-3">
                        {role.responsibilities.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-sm leading-7 text-foreground/68"
                          >
                            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[linear-gradient(135deg,#22d3ee,#2563eb)]" />
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

          {/* Academic Background / Education */}
          {"education" in PORTFOLIO_DATA && PORTFOLIO_DATA.education && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="mt-20 pt-16 border-t border-border/60"
            >
              <div className="text-center">
                <p className="section-kicker">Education</p>
                <h3 className="section-title text-3xl">Academic Foundation</h3>
                <p className="section-copy mx-auto max-w-2xl">
                  Formal education in Data Science, Computer Science, and Mathematics.
                </p>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="panel card-hover p-6 sm:p-8 rounded-[2rem] border-border/70 bg-white/45 dark:bg-white/5 relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                        {edu.period}
                      </span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Verified
                      </span>
                    </div>
                    <div className="mt-4 flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
                          {edu.degree}
                        </h4>
                        <p className="mt-0.5 text-sm font-medium text-foreground/75">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    {edu.details && (
                      <p className="mt-4 text-xs leading-relaxed text-foreground/65 border-t border-border/40 pt-3">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
