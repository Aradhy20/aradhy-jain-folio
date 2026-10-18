"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { Layers, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export function WorkingProcess() {
  const phases = PORTFOLIO_DATA.clientOnboardingProcess || PORTFOLIO_DATA.workingProcess;

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
            Client Onboarding & Delivery Workflow
          </div>
          <h2 className="section-title">
            Structured Execution From Day 1 to Handover
          </h2>
          <p className="section-copy">
            A transparent 6-phase journey ensuring clear milestones, defined deliverables, and predictable progress with zero surprises.
          </p>
        </motion.div>

        {/* 6-Phase Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {phases.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="panel border-border/70 bg-white/50 p-7 sm:p-8 shadow-md backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem] hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-cyan-500/30 font-mono group-hover:text-cyan-500/60 transition-colors">
                    {step.step}
                  </span>
                  {"duration" in step && step.duration && (
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-700 dark:text-cyan-300">
                      {step.duration}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-foreground/75">
                  {step.description}
                </p>
              </div>

              {"deliverable" in step && step.deliverable && (
                <div className="mt-6 pt-4 border-t border-foreground/10">
                  <div className="flex items-start gap-2 rounded-xl bg-foreground/[0.03] p-3 text-xs text-foreground/80 border border-foreground/5">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground/90 block text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Phase Deliverable:
                      </span>
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Cost Transparency & Zero-Markup Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-4xl mx-auto rounded-[2rem] border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8 backdrop-blur-md"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
              <ShieldCheck size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                <span>Third-Party Cost Transparency & Zero Markup Policy</span>
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-foreground/75">
                {PORTFOLIO_DATA.costTransparencyNotice}
              </p>
              <p className="text-[11px] text-foreground/50 pt-1">
                * You retain 100% direct ownership of your domain names, hosting accounts, payment gateways, and marketplace seller registrations at all times.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process CTA Button */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
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
