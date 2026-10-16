import { PORTFOLIO_DATA } from "@/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  GraduationCap,
  Building,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Aradhy Jain",
    };
  }

  return {
    title: `${project.title} | Case Study by Aradhy Jain`,
    description: project.shortOverview || project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.shortOverview || project.description,
      images: [
        {
          url: project.images[0] || "/project_saas_dashboard.png",
          width: 1200,
          height: 630,
          alt: `${project.title} Preview`,
        },
      ],
    },
  };
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const isParas = project.slug === "paras-metal";
  const isSanmati = project.slug === "sanmati-journal";
  const isDsr = project.slug === "dsr-college";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-24 overflow-hidden relative">
        <div className="container relative z-10 max-w-5xl">
          {/* Back to Home & Projects Link */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/50 px-4 py-2 text-xs sm:text-sm font-semibold text-foreground backdrop-blur-xl dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-colors shadow-sm"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>

            <div className="flex items-center gap-2">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-white/50 text-foreground/75 dark:bg-white/5 hover:text-foreground transition-colors"
                  aria-label="View GitHub Repository"
                >
                  <FaGithub size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Hero Banner */}
          <div className="rounded-[2.5rem] border border-cyan-500/30 bg-white/60 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl dark:bg-slate-900/60 relative overflow-hidden">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                {isParas && <ShoppingBag size={13} />}
                {isSanmati && <GraduationCap size={13} />}
                {isDsr && <Building size={13} />}
                Case Study
              </span>

              {isParas && (
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-700 dark:text-amber-300">
                  Amazon · Flipkart · Meesho
                </span>
              )}
              {isSanmati && (
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-700 dark:text-purple-300">
                  ISSN 3108-1819 · CrossRef DOI
                </span>
              )}
              {isDsr && (
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  Live dsr.college · Teacher Education
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mt-3 text-base sm:text-lg font-semibold text-cyan-600 dark:text-cyan-400">
                {project.subtitle}
              </p>
            )}

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/80 max-w-3xl">
              {project.shortOverview}
            </p>

            {/* Quick Specs Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-foreground/10 text-xs">
              <div>
                <p className="text-foreground/50 uppercase font-bold tracking-wider text-[10px]">Client / Domain</p>
                <p className="mt-1 font-semibold text-foreground">{project.category}</p>
              </div>
              <div>
                <p className="text-foreground/50 uppercase font-bold tracking-wider text-[10px]">Role</p>
                <p className="mt-1 font-semibold text-foreground">{project.role.split(":")[0]}</p>
              </div>
              <div>
                <p className="text-foreground/50 uppercase font-bold tracking-wider text-[10px]">Verified Status</p>
                <p className="mt-1 font-semibold text-emerald-600 dark:text-emerald-400">
                  {project.liveLink ? "Active Live Platform" : "Verified Deliverable"}
                </p>
              </div>
              <div>
                <p className="text-foreground/50 uppercase font-bold tracking-wider text-[10px]">Core Stack</p>
                <p className="mt-1 font-semibold text-foreground">{project.techStack.slice(0, 2).join(", ")}</p>
              </div>
            </div>
          </div>

          {/* Primary Visual Showcase */}
          <div className="relative mt-8 aspect-[1.8] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/20 shadow-2xl">
            <Image
              src={project.images[0] || "/project_saas_dashboard.png"}
              alt={`${project.title} Showcase Image`}
              fill
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover"
              priority
            />
          </div>

          {/* Detailed Narrative Sections */}
          <div className="mt-12 space-y-10">
            {/* 1. Project Overview & Business Challenge */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                <AlertCircle size={20} className="text-cyan-500" />
                Business Challenge & Context
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/80">
                {project.problem}
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/75">
                {project.description}
              </p>

              {/* Special Domain Note for Paras Metal */}
              {isParas && (
                <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-xs text-foreground/80 leading-relaxed">
                  <p className="font-bold text-amber-700 dark:text-amber-300 mb-1">
                    Marketplace & Domain Verification Note:
                  </p>
                  Paras Metal manufactures handicraft metal home decor. Operational deliverables focused on establishing structured product catalogs and listing readiness across Amazon India, Flipkart, and Meesho with standardized SKUs and image sets. The domain (http://parasmetal.com) points to a legacy shared Hostinger deployment; all active cataloging workflows and web assets reflect genuine commercial preparation.
                </div>
              )}
            </section>

            {/* 2. My Direct Contribution & Role */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-blue-500" />
                My Direct Role & Responsibilities
              </h2>
              <p className="mt-4 text-sm sm:text-base font-medium text-foreground">
                {project.role}
              </p>

              <div className="mt-6 pt-5 border-t border-foreground/10 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                  Key Tasks Personally Executed:
                </p>
                {project.features.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/80">
                    <CheckCircle2 size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Implementation Details & Technical Decisions */}
            {project.challengesSolutions && (
              <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                  <Sparkles size={20} className="text-purple-500" />
                  Key Implementation Decisions
                </h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                      Technical Challenge
                    </p>
                    <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                      {project.challengesSolutions.challenge}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                      Engineered Solution
                    </p>
                    <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                      {project.challengesSolutions.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-foreground/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground/50 mb-3">
                    Technologies & Tools Utilized:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-xl border border-border/80 bg-foreground/5 px-3 py-1.5 text-xs font-semibold text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* 4. Verified Outcome & Future Roadmap */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                <TrendingUp size={20} className="text-emerald-500" />
                Verified Outcome & Deliverables
              </h2>
              <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-sm text-foreground/90 leading-relaxed">
                {project.verifiedOutcome}
              </div>

              {/* What Could Be Improved Next */}
              <div className="mt-8 pt-6 border-t border-foreground/10">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground/50 mb-3">
                  Planned Next Phases / What Could Be Improved Next:
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-foreground/75">
                  {isParas && (
                    <>
                      <p>• Automated ERP stock-level synchronization across Amazon, Flipkart, and Meesho.</p>
                      <p>• Brand Registry enrollment and Amazon A+ content modules once trademark registration concludes.</p>
                    </>
                  )}
                  {isSanmati && (
                    <>
                      <p>• Automated XML batch deposit pipeline for DOAJ and international indexing repositories.</p>
                      <p>• Online author manuscript review tracking dashboard for peer-review management.</p>
                    </>
                  )}
                  {isDsr && (
                    <>
                      <p>• Integrated online fee payment gateway once banking compliance and merchant IDs are issued.</p>
                      <p>• Interactive campus facilities tour and alumni career outcomes directory.</p>
                    </>
                  )}
                  {!isParas && !isSanmati && !isDsr && (
                    <p>• Progressive enhancements, automated analytics pipelines, and conversion rate optimizations.</p>
                  )}
                </div>
              </div>
            </section>

            {/* 5. Conversion CTA: "Need Something Similar?" */}
            <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#06b6d4,#2563eb)] p-8 sm:p-12 text-white shadow-2xl">
              <div className="max-w-2xl">
                <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                  Work With Me
                </span>
                <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Need Something Similar for Your Business?
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed">
                  Whether you need an institutional website, a multi-channel marketplace catalog, technical SEO improvements, or a custom web platform, I can help you scope and execute it cleanly.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg hover:bg-slate-100 transition-colors"
                  >
                    Discuss Your Project
                    <ArrowRight size={16} />
                  </Link>

                  <a
                    href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsapp}?text=Hi%20Aradhy,%20I%20reviewed%20your%20${encodeURIComponent(
                      project.title
                    )}%20case%20study%20and%20would%20like%20to%20discuss%20a%20similar%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                  >
                    WhatsApp Quick Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
