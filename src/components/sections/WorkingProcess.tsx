"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";

export function WorkingProcess() {
  return (
    <section id="process" className="py-24 sm:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300 mb-4">
            <Layers size={14} className="text-cyan-400" />
            Execution Methodology
          </div>
          <h2 className="section-title">
            A Transparent Working Process
          </h2>
          <p className="section-copy">
            From initial business discovery to post-launch handover, each stage is structured with clear deliverables, honest communication, and defined milestones.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {PORTFOLIO_DATA.workingProcess.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="panel border-border/70 bg-white/50 p-7 sm:p-8 shadow-md backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem] hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-cyan-500/30 font-mono group-hover:text-cyan-500/60 transition-colors">
                  {step.step}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/50">
                  Phase {index + 1}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                {step.tagline}
              </p>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Next Step Strip */}
        <div className="mt-14 max-w-3xl mx-auto text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02]"
          >
            Start Your Discovery Discussion
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
