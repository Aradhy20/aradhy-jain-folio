"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";

const ORBIT_ITEMS = [
  { name: "Python", angle: 0, color: "from-cyan-400 to-blue-500" },
  { name: "SQL", angle: 45, color: "from-blue-500 to-indigo-600" },
  { name: "PyTorch", angle: 90, color: "from-indigo-500 to-purple-600" },
  { name: "Power BI", angle: 135, color: "from-purple-500 to-pink-600" },
  { name: "Pandas", angle: 180, color: "from-pink-500 to-rose-600" },
  { name: "React", angle: 225, color: "from-rose-500 to-orange-500" },
  { name: "Tailwind", angle: 270, color: "from-orange-500 to-amber-500" },
  { name: "Excel", angle: 315, color: "from-amber-500 to-cyan-400" },
];

export function Skills() {
  const radius = 115; // px circular radius

  return (
    <section id="skills" className="py-24 sm:py-28 relative overflow-hidden">
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

        <div className="mt-14 grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Breathtaking Interactive Rotating Skills Orbit (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative h-[360px] w-[360px] flex items-center justify-center rounded-full border border-dashed border-cyan-500/15 bg-cyan-500/[0.01] shadow-inner">
              
              {/* Outer Orbit Track Line */}
              <div className="absolute h-[230px] w-[230px] rounded-full border border-dashed border-cyan-500/25 animate-[spin_100s_linear_infinite]" />
              
              {/* Pulsing AI core inside Orbit */}
              <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(135deg,#22d3ee,#2563eb,#8b5cf6)] p-[2px] shadow-[0_0_35px_rgba(34,211,238,0.4)] flex items-center justify-center animate-pulse z-20">
                <div className="h-full w-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-1">
                  <span className="text-sm font-bold uppercase tracking-wider text-cyan-300">AI</span>
                  <span className="text-[10px] font-bold text-foreground/70">CORE</span>
                </div>
              </div>

              {/* Rotating Skills Container Wrapper */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                {ORBIT_ITEMS.map((item) => {
                  const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={item.name}
                      className="absolute top-1/2 left-1/2 z-10"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      {/* Counter-rotation ensures text labels stay perfectly upright and readable */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
                        whileHover={{ scale: 1.15, zIndex: 30 }}
                        className={`px-3 py-1.5 rounded-xl border border-white/10 bg-slate-950/80 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md cursor-pointer transition-all hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]`}
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
            
            <p className="mt-4 text-xs font-medium text-foreground/50 tracking-wider uppercase">
              Interact with the Skills Orbit
            </p>
          </div>

          {/* Right Column: Structured Detailed Skills Bars (7 cols) */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {PORTFOLIO_DATA.skills.map((group, index) => (
              <motion.article
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ 
                  y: -4, 
                  boxShadow: "0 20px 40px rgba(6,182,212,0.12)",
                  borderColor: "rgba(34,211,238,0.35)" 
                }}
                className="panel border-border/70 bg-white/45 p-6 shadow-xl backdrop-blur-xl dark:bg-white/5 transition-all duration-300 sm:p-8 relative overflow-hidden group rounded-[2rem]"
              >
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
                <div className="flex items-center justify-between gap-4 relative z-10">
                  <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors duration-300">{group.category}</h3>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300 shadow-sm">
                    {group.items.length} skills
                  </span>
                </div>

                <div className="mt-6 space-y-5 relative z-10">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="group/item">
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="font-medium text-foreground/80 group-hover/item:text-foreground transition-colors duration-200">{skill.name}</span>
                        <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-foreground/10 overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                          className="h-full rounded-full bg-[linear-gradient(90deg,#22d3ee,#2563eb,#8b5cf6)] shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
