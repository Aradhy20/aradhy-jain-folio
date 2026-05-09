"use client";

import { Navbar } from "@/components/layout/Navbar";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Database, LayoutDashboard, Sparkles } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  {
    title: "Futuristic Data Analytics & BI",
    icon: <LayoutDashboard className="h-6 w-6 text-cyan-500" />,
    description: "Automated business intelligence pipelines designed to turn raw corporate data into intuitive, high-impact decisions.",
    tools: ["Power BI Dashboards", "Google Sheets Dashboards", "KPI Trackers", "Excel Automation"],
    price: "Starting at $350",
  },
  {
    title: "Database Modeling & Backend Systems",
    icon: <Database className="h-6 w-6 text-blue-500" />,
    description: "Robust data warehousing solutions and structured schemas engineered for speed, scalability, and zero downtime.",
    tools: ["PostgreSQL", "MySQL Schema Design", "MongoDB Clusters", "ETL Data Pipelines"],
    price: "Starting at $500",
  },
  {
    title: "AI & Machine Learning Solutions",
    icon: <Sparkles className="h-6 w-6 text-purple-500" />,
    description: "Intelligent, high-end NLP models and predictive systems tailored to automate operations and identify text patterns.",
    tools: ["Python Predictors", "Transformers & NLP", "Prompt Engineering", "Custom Algorithms"],
    price: "Starting at $750",
  },
];

export default function FreelancePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-24 overflow-hidden relative">
        <div className="container relative z-10">
          
          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <MagneticButton href="/">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/40 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-xl dark:bg-white/5 shadow-md">
                <ArrowLeft size={16} />
                Return Home
              </span>
            </MagneticButton>
          </motion.div>

          {/* Hero Banner with AI Generated Graphic */}
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-700 shadow-lg shadow-purple-500/10 dark:text-purple-200 mb-6">
                <Sparkles size={16} className="animate-spin" />
                Available for Freelance & Consultation
              </div>
              <h1 className="text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                Let&apos;s Build Something{" "}
                <span className="bg-[linear-gradient(120deg,#06b6d4,#3b82f6,#a855f7)] bg-clip-text text-transparent">
                  Exceptional
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-foreground/70 max-w-xl">
                Partner with me to build scalable databases, high-performance predictive AI engines, or automated Google Sheets and Power BI dashboards that streamline your business workflows.
              </p>
            </motion.div>

            {/* Premium AI Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative group rounded-[2.5rem] p-2 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20 border border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Image
                src="/futuristic_dashboard.png"
                alt="Futuristic Holographic Dashboard"
                width={600}
                height={600}
                className="rounded-[2.2rem] w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </motion.div>
          </div>

          {/* Services Section */}
          <div className="mt-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-semibold tracking-tight">Tailored Technical Solutions</h2>
              <p className="text-foreground/60 mt-3">Futuristic analytics and scalable systems built with production-grade quality.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {SERVICES.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="panel border-border/70 bg-white/45 p-8 shadow-xl backdrop-blur-xl dark:bg-white/5 relative overflow-hidden group rounded-[2rem] transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_20px_40px_rgba(6,182,212,0.12)]"
                >
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/15 transition-all duration-500" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 dark:bg-white/5">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-foreground/60">{service.description}</p>
                  
                  <div className="mt-6 pt-6 border-t border-foreground/5 space-y-2.5">
                    {service.tools.map((tool) => (
                      <div key={tool} className="flex items-center gap-2.5 text-xs text-foreground/75 font-medium">
                        <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/50">Investment</span>
                    <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">{service.price}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Interactive Project Consultation Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 max-w-4xl mx-auto panel border-border/70 bg-white/45 p-8 sm:p-12 shadow-2xl backdrop-blur-xl dark:bg-white/5 rounded-[2.5rem] relative overflow-hidden group"
          >
            <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Initiate Your Project</h2>
              <p className="text-foreground/60 mt-2 text-sm">Briefly pitch your project requirements below, and I&apos;ll get back to you with a direct strategy plan within 24 hours.</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Consultation project details submitted successfully! Aradhy Jain will reach out to you within 24 hours.");
              }}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="client-name" className="block text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-2">Your Name</label>
                  <input
                    id="client-name"
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/30 dark:bg-white/5 p-4 text-sm font-medium text-foreground outline-none transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 placeholder-foreground/35"
                  />
                </div>
                <div>
                  <label htmlFor="client-email" className="block text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-2">Email Address</label>
                  <input
                    id="client-email"
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-white/10 bg-white/30 dark:bg-white/5 p-4 text-sm font-medium text-foreground outline-none transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 placeholder-foreground/35"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project-type" className="block text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-2">Project Classification</label>
                <select
                  id="project-type"
                  className="w-full rounded-2xl border border-white/10 bg-white/30 dark:bg-white/5 p-4 text-sm font-medium text-foreground outline-none transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10"
                >
                  <option value="analytics" className="dark:bg-slate-950 text-foreground">Data Analytics & Dashboards (Power BI / Sheets)</option>
                  <option value="database" className="dark:bg-slate-950 text-foreground">Database Schema & Models (MySQL / PostgreSQL / Mongo)</option>
                  <option value="ai-ml" className="dark:bg-slate-950 text-foreground">Custom AI & Machine Learning Integrations</option>
                  <option value="other" className="dark:bg-slate-950 text-foreground">Other Custom Automation Strategy</option>
                </select>
              </div>

              <div>
                <label htmlFor="project-desc" className="block text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-2">Project Blueprint</label>
                <textarea
                  id="project-desc"
                  required
                  rows={4}
                  placeholder="Tell me about your dataset, objectives, or current pipeline..."
                  className="w-full rounded-2xl border border-white/10 bg-white/30 dark:bg-white/5 p-4 text-sm font-medium text-foreground outline-none transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 placeholder-foreground/35 resize-none"
                />
              </div>

              <div className="text-center pt-2">
                <MagneticButton className="w-full sm:w-auto">
                  <span className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#3b82f6)] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20">
                    Deploy Project Pitch
                  </span>
                </MagneticButton>
              </div>
            </form>
          </motion.div>

        </div>
      </main>
    </>
  );
}
