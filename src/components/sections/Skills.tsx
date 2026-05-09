"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">A modern toolkit for data and intelligent products.</h2>
          <p className="section-copy">
            The stack below reflects both analytical depth and the ability to package work
            into recruiter-friendly outcomes.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PORTFOLIO_DATA.skills.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="panel card-hover p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">{group.category}</h3>
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                  {group.items.length} skills
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground/80">{skill.name}</span>
                      <span className="text-foreground/52">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-foreground/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-full rounded-full bg-[linear-gradient(90deg,#22d3ee,#2563eb)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
