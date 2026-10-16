"use client";

import { PORTFOLIO_DATA, Project } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  BookOpen,
  ShoppingBag,
  GraduationCap,
  Building,
  CheckCircle2,
  Layers,
  ArrowRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ProjectCaseStudyModal } from "@/components/ProjectCaseStudyModal";

const TECHNICAL_CATEGORIES = [
  "All Technical Work",
  "Websites & Full-Stack",
  "Data Analytics & Dashboards",
  "AI & Automation",
] as const;

type TechFilterCategory = (typeof TECHNICAL_CATEGORIES)[number];

// Flagship Proof Card Component (Paras Metal, Sanmati Journal, DSR College)
function FlagshipCaseStudyCard({
  project,
  index,
  onOpenModal,
}: {
  project: Project;
  index: number;
  onOpenModal: (p: Project) => void;
}) {
  const thumbnail = project.images?.[0] || "/project_saas_dashboard.png";
  const isParas = project.slug === "paras-metal";
  const isSanmati = project.slug === "sanmati-journal";
  const isDsr = project.slug === "dsr-college";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-cyan-500/30 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 shadow-[0_20px_50px_rgba(6,182,212,0.1)] backdrop-blur-2xl hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(6,182,212,0.18)] transition-all duration-300"
    >
      {/* Top Subtle Aura */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(6,182,212,0.15),transparent)] opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div>
        {/* Top Badges & Channels */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
              {isParas && <ShoppingBag size={13} className="text-cyan-500" />}
              {isSanmati && <GraduationCap size={13} className="text-cyan-500" />}
              {isDsr && <Building size={13} className="text-cyan-500" />}
              Proof Point 0{index + 1}
            </span>

            {isParas && (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-bold text-amber-700 dark:text-amber-300">
                Amazon · Flipkart · Meesho
              </span>
            )}
            {isSanmati && (
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-[11px] font-bold text-purple-700 dark:text-purple-300">
                ISSN 3108-1819 · CrossRef
              </span>
            )}
            {isDsr && (
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                Live dsr.college · NCTE
              </span>
            )}
          </div>

          {/* External links */}
          <div className="flex items-center gap-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                aria-label={`Visit live website for ${project.title}`}
              >
                <span>Live Site</span>
                <ExternalLink size={13} />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground/70 hover:text-foreground transition-colors"
                aria-label={`GitHub source for ${project.title}`}
              >
                <FaGithub size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Thumbnail Showcase */}
        <div
          onClick={() => onOpenModal(project)}
          className="relative mt-6 aspect-[1.7] w-full cursor-pointer overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/20 shadow-inner group/img"
        >
          <Image
            src={thumbnail}
            alt={`${project.title} Preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          {/* Hover Case Study Prompt */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-slate-950/45 backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-xs font-bold text-white shadow-xl">
              <BookOpen size={15} />
              Read Full Case Study
            </span>
          </div>

          {/* Bottom Overlay Label */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
            <span className="font-semibold drop-shadow">{project.subtitle || project.category}</span>
          </div>
        </div>

        {/* Title & Short Overview */}
        <h3
          onClick={() => onOpenModal(project)}
          className="mt-6 text-2xl font-bold tracking-tight text-foreground cursor-pointer transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
        >
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-foreground/75">
          {project.shortOverview}
        </p>

        {/* Commercial Highlights Checklist */}
        <div className="mt-5 space-y-2 pt-4 border-t border-foreground/5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Key Verified Work & Deliverables
          </p>
          {project.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 text-xs text-foreground/80">
              <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer & Case Study Actions */}
      <div className="mt-6 pt-5 border-t border-foreground/5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border/60 bg-foreground/[0.03] px-2.5 py-1 text-[11px] font-medium text-foreground/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenModal(project)}
            className="text-xs font-semibold text-foreground/60 hover:text-foreground transition-colors px-2 py-1"
          >
            Quick View
          </button>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 transition-colors"
          >
            <span>Case Study</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// Secondary Technical Project Card Component
function TechnicalProjectCard({
  project,
  index,
  onOpenModal,
}: {
  project: Project;
  index: number;
  onOpenModal: (p: Project) => void;
}) {
  const thumbnail = project.images?.[0] || "/project_saas_dashboard.png";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.25) }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-border/70 bg-white/45 dark:bg-white/5 p-6 shadow-md backdrop-blur-xl hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-lg border border-border/60 bg-foreground/5 px-2.5 py-1 text-[11px] font-semibold text-foreground/70">
            {project.category}
          </span>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground/60 hover:text-foreground transition-colors"
              aria-label={`${project.title} GitHub repo`}
            >
              <FaGithub size={13} />
            </a>
          )}
        </div>

        <div
          onClick={() => onOpenModal(project)}
          className="relative mt-4 aspect-[1.7] w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-slate-950/20 shadow-inner group/img"
        >
          <Image
            src={thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/20 group-hover/img:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
            <span className="rounded-full bg-cyan-500 px-3 py-1 text-[11px] font-bold text-white shadow">
              Case Study
            </span>
          </div>
        </div>

        <h4
          onClick={() => onOpenModal(project)}
          className="mt-4 text-lg font-bold text-foreground cursor-pointer transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
        >
          {project.title}
        </h4>

        <p className="mt-2 text-xs leading-relaxed text-foreground/70 line-clamp-2">
          {project.shortOverview || project.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-foreground/5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {project.techStack.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded bg-foreground/5 px-2 py-0.5 text-[10px] font-medium text-foreground/60"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
        >
          Details <ArrowUpRight size={13} />
        </button>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTechCategory, setActiveTechCategory] =
    useState<TechFilterCategory>("All Technical Work");

  // The 3 Flagship Commercial Proof Points
  const flagshipProjects = useMemo(() => {
    return PORTFOLIO_DATA.projects.slice(0, 3);
  }, []);

  // Broader engineering, data, and AI projects
  const technicalProjects = useMemo(() => {
    const secondary = PORTFOLIO_DATA.projects.slice(3);
    if (activeTechCategory === "All Technical Work") {
      return secondary;
    }
    if (activeTechCategory === "Websites & Full-Stack") {
      return secondary.filter(
        (p) =>
          p.category === "Websites & Full-Stack" ||
          p.category === "Business Websites"
      );
    }
    if (activeTechCategory === "Data Analytics & Dashboards") {
      return secondary.filter(
        (p) => p.category === "Data Analytics & Dashboards"
      );
    }
    if (activeTechCategory === "AI & Automation") {
      return secondary.filter((p) => p.category === "AI & Automation");
    }
    return secondary;
  }, [activeTechCategory]);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="container">
        {/* Flagship Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300 mb-4">
            <Sparkles size={14} className="text-cyan-400" />
            Client Proof & Verified Deliverables
          </div>
          <h2 className="section-title">
            Featured Commercial Proof Points
          </h2>
          <p className="section-copy">
            Proven commercial deliverables across e-commerce operations, marketplace cataloging, academic publishing platforms, and high-performance institutional websites.
          </p>
        </motion.div>

        {/* 3 Flagship Proof Points Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {flagshipProjects.map((project, index) => (
            <FlagshipCaseStudyCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Callout Banner between sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2rem] border border-border/70 bg-white/40 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-lg font-bold text-foreground">
              Have a similar business, storefront, or institutional website need?
            </h4>
            <p className="text-sm text-foreground/70 mt-1">
              I handle end-to-end delivery: information architecture, custom design, catalog setup, and search visibility.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-6 py-3 text-sm font-semibold text-white shadow-md hover:scale-[1.02] transition-transform"
          >
            Start Your Project
            <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Section Divider: Broader Engineering */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-white/40 px-3.5 py-1 text-xs font-semibold text-foreground/70 dark:bg-white/5 mb-3">
              <Layers size={13} className="text-cyan-500" />
              Full-Stack & Systems Depth
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Broader Engineering, Dashboards & Applied AI
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Beyond commercial websites and marketplace operations, explore full-stack applications, interactive data dashboards, and AI research prototypes.
            </p>
          </div>

          {/* Technical Categories Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {TECHNICAL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTechCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTechCategory === cat
                    ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/25"
                    : "border border-border/70 bg-white/40 text-foreground/70 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Technical Projects Grid */}
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {technicalProjects.map((project, index) => (
                <TechnicalProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpenModal={(p) => setSelectedProject(p)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
