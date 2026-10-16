"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import {
  Briefcase,
  MessageSquare,
  Layout,
  Gauge,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />,
  MessageSquare: <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
  Layout: <Layout className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
  Gauge: <Gauge className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
};

export function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="py-24 sm:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300 mb-4">
            <CheckCircle2 size={14} className="text-cyan-400" />
            Client Partnership Value
          </div>
          <h2 className="section-title">
            Why Work With Me?
          </h2>
          <p className="section-copy">
            Many freelancers offer code or design in isolation. I combine technical execution with practical digital business understanding to deliver maintainable, high-impact results.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {PORTFOLIO_DATA.whyWorkWithMe.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="panel border-border/70 bg-white/50 p-6 sm:p-8 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2rem] hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/20 dark:bg-white/5 mb-5">
                  {ICON_MAP[item.icon] || <ShieldCheck className="h-5 w-5 text-cyan-400" />}
                </div>

                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-foreground/70">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-foreground/5 flex items-center gap-1.5 text-[11px] font-semibold text-cyan-700 dark:text-cyan-300">
                <CheckCircle2 size={13} className="text-cyan-500" />
                <span>Verified Client Principle</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
