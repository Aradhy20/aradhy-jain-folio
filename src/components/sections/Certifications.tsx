"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-28 bg-foreground/[0.01]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-kicker">Certifications</p>
          <h2 className="section-title">Verified credentials and professional training.</h2>
          <p className="section-copy">
            A selection of industry-recognized certifications and job simulations demonstrating
            expertise in data analytics, machine learning, and structured problem-solving.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="panel card-hover flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-6 -mt-6 h-20 w-20 rounded-full bg-cyan-500/5 blur-xl" />
              
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-2.5 text-cyan-600 dark:text-cyan-400">
                    <Award size={22} className="stroke-[1.5]" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle size={12} className="stroke-[2.5]" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-tight text-foreground/90 group-hover:text-cyan-600">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-foreground/52">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-6">
                <div className="h-px bg-foreground/10 mb-4" />
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-foreground/[0.04] px-2 py-0.5 text-xs font-medium text-foreground/64 border border-foreground/[0.03]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
