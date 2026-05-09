"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const getProjectImages = (title: string, techStack: readonly string[]): string[] => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes("jambudweep") || titleLower.includes("journal")) {
    return ["/project_digital_journal.png", "/project_saas_dashboard.png"];
  }
  if (titleLower.includes("aviation") || titleLower.includes("flight") || titleLower.includes("skypilot")) {
    return ["/project_aviation_academy.png", "/project_saas_dashboard.png"];
  }
  if (titleLower.includes("gym") || titleLower.includes("hospital")) {
    return ["/project_health_system.png", "/project_saas_dashboard.png"];
  }

  const stackStr = techStack.join(" ").toLowerCase();
  if (
    stackStr.includes("nlp") ||
    stackStr.includes("transformers") ||
    stackStr.includes("machine learning") ||
    stackStr.includes("classification")
  ) {
    return ["/project_ai_network.png", "/project_data_analytics.png"];
  }
  if (
    stackStr.includes("analytics") ||
    stackStr.includes("visualization") ||
    stackStr.includes("predictive")
  ) {
    return ["/project_data_analytics.png", "/project_saas_dashboard.png"];
  }
  return ["/project_saas_dashboard.png", "/project_data_analytics.png"];
};

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: readonly string[];
  githubLink: string;
  liveLink?: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const images = getProjectImages(project.title, project.techStack);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative card-hover overflow-hidden rounded-[2rem] border border-border/70 bg-white/55 p-6 shadow-xl backdrop-blur-xl dark:bg-white/5 flex flex-col justify-between"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(34,211,238,0.16),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="rounded-2xl border border-white/10 bg-background/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:bg-slate-950/45 dark:text-cyan-300">
              Case Study
            </div>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground/65 transition-all hover:rotate-6 hover:text-foreground dark:bg-slate-950/45"
            >
              <FaGithub size={18} />
              <span className="sr-only">{project.title} GitHub</span>
            </a>
          </div>

          {/* Stateful Multi-Image Sliding Carousel Container */}
          <div className="relative mt-5 aspect-[1.55] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/5 shadow-inner group/carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImgIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={images[currentImgIndex]}
                  alt={`${project.title} Preview ${currentImgIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />

            {/* Left & Right Interactive Control Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-slate-950/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-slate-950/80"
              aria-label="Previous Image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-slate-950/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-slate-950/80"
              aria-label="Next Image"
            >
              <ChevronRight size={16} />
            </button>

            {/* Micro Slider Dot Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImgIndex ? "w-4 bg-cyan-400" : "w-1.5 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-foreground/68">
            {project.description}
          </p>
        </div>

        <div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/68 dark:bg-slate-950/45"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100"
            >
              View on GitHub
              <ArrowUpRight size={16} />
            </a>
            {"liveLink" in project && project.liveLink && (
              <a
                href={project.liveLink as string}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-200"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Selected builds across AI, analytics, and systems.</h2>
          <p className="section-copy">
            Each project is presented with a product mindset: clear purpose, measurable
            utility, and a polished interface that feels intentional.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
