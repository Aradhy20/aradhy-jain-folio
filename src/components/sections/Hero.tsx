"use client";

import { ProfileAvatar } from "@/components/ProfileAvatar";
import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { StatsCounter } from "@/components/StatsCounter";

const ROLES = [
  "Data Analyst Intern",
  "Machine Learning Enthusiast",
  "Python Developer",
  "Power BI Dashboard Creator",
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? activeRole.substring(0, currentText.length - 1)
            : activeRole.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="container relative z-10 grid items-center gap-16 pb-20 pt-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-700 shadow-lg shadow-cyan-500/10 dark:text-cyan-200 animate-pulse">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Premium Portfolio Website
          </div>

          <h1 className="mt-8 text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            Hi, I’m{" "}
            <span className="bg-[linear-gradient(120deg,#0891b2,#2563eb,#8b5cf6)] bg-clip-text text-transparent">
              Aradhy Jain
            </span>
          </h1>

          <div className="mt-4 h-10 text-2xl font-semibold text-cyan-600 dark:text-cyan-400 sm:text-3xl">
            <span>{currentText}</span>
            <span className="animate-pulse text-cyan-500">|</span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/68 sm:text-xl">
            Passionate about transforming raw data into actionable insights through analytics,
            automation, and intelligent solutions.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-foreground/58">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/40 px-4 py-2 dark:bg-white/5">
              <MapPin size={16} />
              {PORTFOLIO_DATA.personalInfo.location}
            </div>
            <div className="rounded-full border border-border/70 bg-white/40 px-4 py-2 dark:bg-white/5">
              {PORTFOLIO_DATA.personalInfo.tagline}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#0891b2,#2563eb)] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.28)] transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href={PORTFOLIO_DATA.personalInfo.resume}
              download={`${PORTFOLIO_DATA.personalInfo.name.replace(/\s+/g, "_")}_Resume.pdf`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-white/55 px-7 py-4 text-sm font-semibold text-foreground shadow-lg backdrop-blur-xl transition-transform hover:-translate-y-0.5 dark:bg-white/5"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-white/50 text-foreground/75 shadow-lg transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:bg-white/5"
            >
              <FaLinkedinIn size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-white/50 text-foreground/75 shadow-lg transition-all hover:-translate-y-0.5 hover:text-foreground dark:bg-white/5"
            >
              <FaGithub size={18} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {PORTFOLIO_DATA.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                className="rounded-[1.6rem] border border-border/70 bg-white/55 p-5 shadow-xl backdrop-blur-xl dark:bg-white/5"
              >
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {stat.label.includes("Analyzed") ? (
                    <StatsCounter value={20} suffix="K+" />
                  ) : stat.label.includes("Delivered") ? (
                    <StatsCounter value={12} suffix="+" />
                  ) : (
                    <StatsCounter value={40} suffix="%" />
                  )}
                </p>
                <p className="mt-1 text-sm text-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.18),rgba(37,99,235,0.2),rgba(244,114,182,0.12),rgba(34,211,238,0.18))] blur-2xl" />
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-[2.25rem] border border-white/15 bg-white/45 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:bg-slate-900/45"
          >
            <div className="relative aspect-[0.9] overflow-hidden rounded-[2rem] border border-white/10">
              <ProfileAvatar />
            </div>
            <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-background/70 p-4 dark:bg-slate-950/50">
              <p className="text-sm font-medium text-foreground/75">
                Focus Areas
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Python", "SQL", "Power BI", "Excel", "Machine Learning", "Data Analytics"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/70 bg-white/50 px-3 py-1 text-xs font-medium text-foreground/70 dark:bg-white/5"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
