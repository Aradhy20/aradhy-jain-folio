"use client";

import { PORTFOLIO_DATA, Project } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, BookOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState, useMemo } from "react";
import { ProjectCaseStudyModal } from "@/components/ProjectCaseStudyModal";

const CATEGORIES = [
  "All Projects",
  "Websites & Full-Stack",
  "E-commerce",
  "Academic & Publishing",
  "Business Websites",
  "Data Analytics & Dashboards",
  "AI & Automation",
] as const;

type FilterCategory = (typeof CATEGORIES)[number];

function ProjectCard({
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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] border transition-all duration-300 ${
        project.featured
          ? "border-cyan-500/35 bg-white/60 dark:bg-slate-900/40 shadow-[0_20px_50px_rgba(6,182,212,0.12)]"
          : "border-border/70 bg-white/45 dark:bg-white/5 shadow-lg"
      } p-6 backdrop-blur-xl hover:-translate-y-1.5 hover:shadow-2xl`}
    >
      {/* Top Banner Gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(6,182,212,0.12),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

      <div>
        {/* Category & Links Header */}
        <div className="flex items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2">
            <span className="rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-xl border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-[11px] font-bold text-purple-600 dark:text-purple-300">
                <Sparkles size={12} />
                Featured
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground/70 transition-all hover:scale-105 hover:text-foreground dark:bg-slate-950/50"
                aria-label={`${project.title} GitHub repository`}
              >
                <FaGithub size={15} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 transition-all hover:scale-105 hover:bg-cyan-500/20"
                aria-label={`${project.title} live website`}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Thumbnail Image Container */}
        <div
          onClick={() => onOpenModal(project)}
          className="relative mt-5 aspect-[1.6] w-full cursor-pointer overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/20 shadow-inner group/img"
        >
          <Image
            src={thumbnail}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-80" />
          
          {/* Overlay CTA */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
              <BookOpen size={14} />
              Read Case Study
            </span>
          </div>
        </div>

        {/* Project Title */}
        <h3
          onClick={() => onOpenModal(project)}
          className="mt-5 text-xl sm:text-2xl font-bold tracking-tight text-foreground cursor-pointer transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
        >
          {project.title}
        </h3>

        {/* Short Overview */}
        <p className="mt-2.5 text-sm leading-relaxed text-foreground/70 line-clamp-3">
          {project.shortOverview || project.description}
        </p>
      </div>

      {/* Tech Stack & Action Footer */}
      <div className="mt-6 pt-4 border-t border-foreground/5">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border/60 bg-foreground/[0.03] px-2.5 py-1 text-[11px] font-medium text-foreground/75"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded-lg border border-border/60 bg-foreground/[0.03] px-2 py-1 text-[11px] font-medium text-foreground/50">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100"
          >
            <span>View Case Study</span>
            <ArrowUpRight size={15} />
          </button>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Visit Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return PORTFOLIO_DATA.projects;
    }
    return PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-kicker">Portfolio & Case Studies</p>
          <h2 className="section-title">Verified Web, Commerce & Data Systems</h2>
          <p className="section-copy">
            Explore live commercial platforms, institutional portals, and intelligent software delivered with measurable results.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/25"
                  : "border border-border/70 bg-white/40 text-foreground/70 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenModal={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
