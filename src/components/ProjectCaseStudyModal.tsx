"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, AlertCircle, Wrench, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Project } from "@/data";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2.5rem] border border-white/15 bg-background/95 p-6 shadow-2xl backdrop-blur-2xl dark:bg-slate-950/95 sm:p-10 z-10 custom-scrollbar"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-foreground/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                {project.category}
              </span>
              {project.featured && (
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-300">
                  Featured Showcase
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close case study modal"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/70 transition-all hover:bg-white/10 hover:text-foreground hover:scale-105"
            >
              <X size={20} />
            </button>
          </div>

          {/* Title & Headline */}
          <div className="mt-6">
            <h2 id="case-study-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {project.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-foreground/75">
              {project.shortOverview}
            </p>
          </div>

          {/* Project Preview Image */}
          {project.images && project.images[0] && (
            <div className="relative mt-8 aspect-[1.8] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-xl">
              <Image
                src={project.images[0]}
                alt={`${project.title} detailed visual preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Structured Case Study Sections */}
          <div className="mt-10 space-y-8">
            {/* Context & Description */}
            <div className="rounded-2xl border border-foreground/5 bg-foreground/[0.02] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Context & Project Scope
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground/80 sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Problem & Role Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-red-500/15 bg-red-500/5 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400">
                  <AlertCircle size={18} />
                  <span>The Problem & Need</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-foreground/75">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-500/15 bg-cyan-500/5 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  <Wrench size={18} />
                  <span>My Role & Contributions</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-foreground/75">
                  {project.role}
                </p>
              </div>
            </div>

            {/* Key Features Implemented */}
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Features Actually Implemented
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-foreground/5 bg-foreground/[0.02] p-3.5 text-xs sm:text-sm text-foreground/80"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">
                Technology Stack & Methods
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-foreground/10 bg-foreground/5 px-3.5 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Solution (if available) */}
            {project.challengesSolutions && (
              <div className="rounded-2xl border border-purple-500/15 bg-purple-500/5 p-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-300">
                  Engineering Challenge & Solution
                </h4>
                <div className="mt-3 space-y-2 text-sm leading-6 text-foreground/75">
                  <p>
                    <strong className="text-foreground">Challenge: </strong>
                    {project.challengesSolutions.challenge}
                  </p>
                  <p>
                    <strong className="text-foreground">Solution: </strong>
                    {project.challengesSolutions.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Verified Outcome */}
            {project.verifiedOutcome && (
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  Verified Result
                </h4>
                <p className="mt-2 text-sm leading-6 text-foreground/80">
                  {project.verifiedOutcome}
                </p>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-6">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
                >
                  Visit Live Website
                  <ExternalLink size={16} />
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/10 px-6 py-3 text-sm font-semibold text-foreground shadow-md backdrop-blur-md transition-all hover:bg-white/20 hover:scale-[1.02] dark:bg-white/5"
                >
                  <FaGithub size={16} />
                  View GitHub Code
                </a>
              )}
            </div>

            <a
              href="/freelance"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Discuss a similar project
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
