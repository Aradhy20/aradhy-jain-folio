"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion, useScroll } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
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
                      <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 tracking-wider">
                        {role.period}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-base text-foreground/62">{role.company}</p>
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
        </div>
      </div>
    </section>
  );
}
