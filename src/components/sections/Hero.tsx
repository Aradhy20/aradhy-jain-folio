"use client";

import { CreatorProfileCard } from "@/components/CreatorProfileCard";
import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles, Briefcase, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThreeCanvas } from "@/components/ThreeCanvas";

const ROLES = [
  "1. Website Development (Corporate & Institutional Portals)",
  "2. E-commerce & Marketplaces (Amazon · Flipkart · Meesho)",
  "3. Technical SEO, Speed Tuning & Search Visibility",
  "Automated Reporting Dashboards & Python ETL",
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 20 : 45;

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
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
      className="relative flex min-h-screen items-start overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16"
    >
      <div className="container relative z-10 grid items-start gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-8">
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
            <span>Available for Freelance & Digital Growth Projects</span>
          </div>

          {/* Main Name & High-Impact Headline */}
          <div className="mt-5">
            <p className="text-sm sm:text-base font-semibold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase">
              Aradhy Jain — Web Developer, E-commerce & Digital Growth Specialist
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.08]">
              I Build Websites, E-commerce Experiences &{" "}
              <span className="bg-[linear-gradient(120deg,#06b6d4,#3b82f6,#a855f7)] bg-clip-text text-transparent">
                Digital Systems That Help Businesses Grow.
              </span>
            </h1>
          </div>

          {/* Dynamic Animated Subtext */}
          <div className="mt-3.5 flex items-center gap-2 text-lg font-semibold text-foreground/80 sm:text-2xl min-h-[36px]">
            <span className="text-cyan-600 dark:text-cyan-400">{currentText}</span>
            <span className="animate-pulse text-cyan-500">|</span>
          </div>

          {/* Central Value Proposition */}
          <p className="mt-6 text-base sm:text-lg font-normal leading-relaxed text-foreground/75 max-w-2xl">
            I help businesses establish a stronger online presence through responsive websites, e-commerce solutions, marketplace catalogue optimization, technical SEO, digital marketing, and data-driven improvements.
          </p>

          {/* Core Commercial Pillar Badges - Prioritized 3 Pillars */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs font-semibold">
            <span className="rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3.5 py-1.5 text-cyan-800 dark:text-cyan-200">
              1. Website Development
            </span>
            <span className="rounded-full border border-amber-500/35 bg-amber-500/10 px-3.5 py-1.5 text-amber-800 dark:text-amber-200">
              2. E-commerce & Marketplaces (Amazon · Flipkart · Meesho)
            </span>
            <span className="rounded-full border border-purple-500/35 bg-purple-500/10 px-3.5 py-1.5 text-purple-800 dark:text-purple-200">
              3. SEO, Analytics & Automation
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <MagneticButton href="#contact">
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02]">
                Start a Project
                <ArrowRight size={18} />
              </span>
            </MagneticButton>

            <MagneticButton href="#projects">
              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-cyan-700 dark:text-cyan-300 backdrop-blur-xl transition-all hover:bg-cyan-500/20">
                <Briefcase size={16} />
                View My Work
              </span>
            </MagneticButton>

            <MagneticButton href="#audit-tool">
              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-3.5 text-sm font-semibold text-purple-700 dark:text-purple-300 backdrop-blur-xl hover:bg-purple-500/20 transition-all">
                <Sparkles size={16} />
                Free Website Audit
              </span>
            </MagneticButton>
          </div>

          {/* Social Links & Location */}
          <div className="mt-8 flex items-center gap-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-white/40 px-3.5 py-1.5 text-xs text-foreground/60 dark:bg-white/5">
              <MapPin size={13} className="text-cyan-500" />
              {PORTFOLIO_DATA.personalInfo.location}
            </div>

            <div className="flex items-center gap-2.5">
              <MagneticButton
                href={PORTFOLIO_DATA.personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-white/50 text-foreground/75 shadow-sm hover:text-blue-600 dark:bg-white/5 transition-colors">
                  <FaLinkedinIn size={14} />
                  <span className="sr-only">LinkedIn</span>
                </span>
              </MagneticButton>

              <MagneticButton
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-white/50 text-foreground/75 shadow-sm hover:text-foreground dark:bg-white/5 transition-colors">
                  <FaGithub size={14} />
                  <span className="sr-only">GitHub</span>
                </span>
              </MagneticButton>

              <MagneticButton
                href={PORTFOLIO_DATA.personalInfo.resume}
                download="Aradhy_Jain_Resume.pdf"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-white/40 px-3 py-1.5 text-xs font-medium text-foreground/70 hover:text-foreground dark:bg-white/5 transition-colors">
                  <Download size={13} />
                  Resume
                </span>
              </MagneticButton>
            </div>
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

        {/* Right Column: Polished Creator Profile Card with Ambient 3D Backdrop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none flex flex-col items-center justify-start lg:items-end lg:pt-1"
        >
          {/* Subtle Ambient 3D floating effect behind the card on larger displays */}
          <div className="absolute -inset-6 sm:-inset-10 z-0 opacity-25 pointer-events-none hidden md:block overflow-hidden">
            <ThreeCanvas />
          </div>

          <div className="relative z-10 w-full flex justify-center lg:justify-end">
            <CreatorProfileCard />
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
