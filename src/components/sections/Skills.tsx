"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { useState } from "react";

const ORBIT_ITEMS = [
  { name: "Next.js", angle: 0, color: "from-cyan-400 to-blue-500" },
  { name: "React", angle: 40, color: "from-blue-500 to-indigo-600" },
  { name: "TypeScript", angle: 80, color: "from-indigo-500 to-purple-600" },
  { name: "E-commerce", angle: 120, color: "from-purple-500 to-pink-600" },
  { name: "Technical SEO", angle: 160, color: "from-pink-500 to-rose-600" },
  { name: "Python", angle: 200, color: "from-rose-500 to-amber-500" },
  { name: "SQL & DBs", angle: 240, color: "from-amber-500 to-emerald-500" },
  { name: "Power BI", angle: 280, color: "from-emerald-500 to-teal-500" },
  { name: "Tailwind CSS", angle: 320, color: "from-teal-500 to-cyan-400" },
];

export function Skills() {
  const radius = 120; // px circular radius
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");

  const categories = ["All Categories", ...PORTFOLIO_DATA.skills.map((s) => s.category)];

  const displayedGroups =
    selectedCategory === "All Categories"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-kicker">Technical & Domain Skills</p>
          <h2 className="section-title">A Modern Toolkit Across Web, Data & Growth</h2>
          <p className="section-copy">
            A comprehensive, verified taxonomy of technical competencies organized by domain. Categorized transparently with realistic proficiency levels.
          </p>
        </motion.div>

        {/* Category Pills Filter */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/25"
                  : "border border-border/70 bg-white/40 text-foreground/70 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Interactive Skills Orbit Visualizer (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative sticky top-28">
            <div className="relative h-[360px] w-[360px] flex items-center justify-center rounded-full border border-dashed border-cyan-500/20 bg-cyan-500/[0.01]">
              {/* Outer Orbit Track */}
              <div className="absolute h-[240px] w-[240px] rounded-full border border-dashed border-cyan-500/30 animate-[spin_100s_linear_infinite]" />

              {/* Center Core */}
              <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb,#8b5cf6)] p-[2px] shadow-[0_0_35px_rgba(6,182,212,0.4)] flex items-center justify-center animate-pulse z-20">
                <div className="h-full w-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">CORE</span>
                  <span className="text-[10px] font-bold text-slate-300">STACK</span>
                </div>
              </div>

              {/* Orbiting Items */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                {ORBIT_ITEMS.map((item) => {
                  const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={item.name}
                      className="absolute top-1/2 left-1/2 z-10 pointer-events-auto"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
                        whileHover={{ scale: 1.15, zIndex: 30 }}
                        className="px-2.5 py-1 rounded-xl border border-white/10 bg-slate-950/85 text-[11px] font-semibold text-white shadow-lg backdrop-blur-md cursor-default transition-all hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                      >
                        <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.name}
                        </span>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <p className="mt-4 text-xs font-medium text-foreground/50 tracking-wider uppercase text-center">
              Multidisciplinary Full-Stack Ecosystem
            </p>
          </div>

          {/* Right Column: Categorized Competencies (7 cols) */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {displayedGroups.map((group, index) => (
              <motion.article
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="panel border-border/70 bg-white/45 p-6 shadow-xl backdrop-blur-xl dark:bg-white/5 rounded-[2rem] flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-foreground/5 pb-3">
                    <h3 className="text-base font-bold text-foreground">
                      {group.category}
                    </h3>
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                      {group.items.length} tools
                    </span>
                  </div>

                  <p className="mt-2.5 text-xs text-foreground/60 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills badges & proficiency */}
                  <div className="mt-4 space-y-2.5">
                    {group.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-xl border border-foreground/5 bg-foreground/[0.02] p-2.5 flex items-center justify-between gap-3 text-xs"
                      >
                        <div>
                          <p className="font-semibold text-foreground/85">{skill.name}</p>
                          {skill.focus && (
                            <p className="text-[10px] text-foreground/50">{skill.focus}</p>
                          )}
                        </div>
                        <span
                          className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                            skill.proficiency === "Advanced"
                              ? "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
                              : "bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/15"
                          }`}
                        >
                          {skill.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
