"use client";

import { ProfileAvatar } from "@/components/ProfileAvatar";
import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles, Briefcase, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThreeCanvas } from "@/components/ThreeCanvas";

const ROLES = [
  "Full-Stack Web Developer",
  "Freelance Digital Solutions Provider",
  "E-commerce Store Developer",
  "SEO & Performance Specialist",
  "Data Analytics & Automation Engineer",
  "Applied AI & NLP Developer",
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 25 : 50;

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2400);
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
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left Column: Copy, Typing Headline, CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-700 shadow-md backdrop-blur-md dark:text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{PORTFOLIO_DATA.personalInfo.availability}</span>
          </div>

          {/* Main Name & Title */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Hi, I’m{" "}
            <span className="bg-[linear-gradient(120deg,#06b6d4,#3b82f6,#a855f7)] bg-clip-text text-transparent">
              {PORTFOLIO_DATA.personalInfo.name}
            </span>
          </h1>

          {/* Dynamic Animated Role */}
          <div className="mt-3 flex items-center gap-2 text-xl font-semibold text-cyan-600 dark:text-cyan-400 sm:text-2xl min-h-[36px]">
            <span>{currentText}</span>
            <span className="animate-pulse text-cyan-500">|</span>
          </div>

          {/* Central Value Proposition */}
          <p className="mt-6 text-lg sm:text-xl font-normal leading-relaxed text-foreground/75 max-w-2xl">
            I design, develop, optimize, and grow digital experiences—from e-commerce platforms and institutional business websites to automation, analytics, and intelligent applications.
          </p>

          {/* Badges / Meta info */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-foreground/60">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-white/40 px-3.5 py-1.5 dark:bg-white/5">
              <MapPin size={14} className="text-cyan-500" />
              {PORTFOLIO_DATA.personalInfo.location}
            </div>
            <div className="rounded-full border border-border/70 bg-white/40 px-3.5 py-1.5 dark:bg-white/5">
              Full-Stack • E-commerce • SEO • Analytics
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects">
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02]">
                Explore My Work
                <ArrowRight size={18} />
              </span>
            </MagneticButton>

            <MagneticButton href="/freelance">
              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-cyan-700 dark:text-cyan-300 backdrop-blur-xl transition-all hover:bg-cyan-500/20">
                <Briefcase size={16} />
                Hire Me / Services
              </span>
            </MagneticButton>

            <MagneticButton
              href={PORTFOLIO_DATA.personalInfo.resume}
              download="Aradhy_Jain_Resume.pdf"
            >
              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-white/50 px-6 py-3.5 text-sm font-semibold text-foreground shadow-md backdrop-blur-xl hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10">
                <Download size={16} />
                Download Resume
              </span>
            </MagneticButton>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-3">
            <MagneticButton
              href={PORTFOLIO_DATA.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/50 text-foreground/75 shadow-md hover:text-blue-600 dark:bg-white/5 transition-colors">
                <FaLinkedinIn size={16} />
                <span className="sr-only">LinkedIn</span>
              </span>
            </MagneticButton>

            <MagneticButton
              href={PORTFOLIO_DATA.personalInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/50 text-foreground/75 shadow-md hover:text-foreground dark:bg-white/5 transition-colors">
                <FaGithub size={16} />
                <span className="sr-only">GitHub</span>
              </span>
            </MagneticButton>
          </div>

          {/* Stats Bar */}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
            {PORTFOLIO_DATA.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="rounded-2xl border border-border/70 bg-white/50 p-4 shadow-md backdrop-blur-xl dark:bg-white/5 text-center sm:text-left"
              >
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-foreground/60 leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: 3D Interactive Centerpiece & Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none flex flex-col items-center justify-center"
        >
          {/* Three.js Interactive 3D Centerpiece */}
          <div className="relative w-full aspect-square max-w-[420px] flex items-center justify-center">
            <ThreeCanvas />

            {/* Profile Avatar Badge Overlay in bottom-right */}
            <div className="absolute -bottom-4 -left-2 sm:bottom-0 sm:left-2 flex items-center gap-3 rounded-2xl border border-white/20 bg-background/80 p-2.5 shadow-2xl backdrop-blur-xl dark:bg-slate-900/80 z-20">
              <div className="h-14 w-14 overflow-hidden rounded-xl border border-white/10 shrink-0">
                <ProfileAvatar />
              </div>
              <div className="pr-3">
                <p className="text-xs font-bold text-foreground">Aradhy Jain</p>
                <p className="text-[11px] text-cyan-600 dark:text-cyan-400">Full-Stack & Digital</p>
              </div>
            </div>

            {/* Micro Badge for E-commerce & Systems */}
            <div className="absolute -top-3 -right-2 sm:top-2 sm:right-2 rounded-2xl border border-white/20 bg-background/80 px-3.5 py-2 shadow-2xl backdrop-blur-xl dark:bg-slate-900/80 z-20 flex items-center gap-2">
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-xs font-semibold text-foreground">3D Interactive</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/40 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
