"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Globe,
  ShoppingBag,
  TrendingUp,
  Megaphone,
  BarChart3,
  Sparkles,
  Send,
  Loader2,
  MessageSquare,
  Mail,
  ShieldCheck,
  Check,
} from "lucide-react";
import Image from "next/image";
import { useState, FormEvent } from "react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6 text-cyan-400" />,
  ShoppingBag: <ShoppingBag className="h-6 w-6 text-blue-400" />,
  TrendingUp: <TrendingUp className="h-6 w-6 text-purple-400" />,
  Megaphone: <Megaphone className="h-6 w-6 text-pink-400" />,
  BarChart3: <BarChart3 className="h-6 w-6 text-emerald-400" />,
  Sparkles: <Sparkles className="h-6 w-6 text-amber-400" />,
};

interface FormState {
  name: string;
  email: string;
  company: string;
  serviceCategory: string;
  budgetRange: string;
  timeline: string;
  message: string;
  honeypot: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  serviceCategory: "Website Development",
  budgetRange: "Flexible / Discussion",
  timeline: "Within 1 Month",
  message: "",
  honeypot: "",
};

export default function FreelancePage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    success: boolean;
    delivered: boolean;
    message: string;
    directChannels?: {
      email: string;
      mailtoUrl: string;
      whatsappUrl: string;
    };
  } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      setErrorMessage("Please provide a brief description of your project (at least 15 characters).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit project inquiry.");
      }

      setSubmittedData(data);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "An error occurred while submitting. Please try reaching out directly."
      );
    } finally {
      setLoading(false);
    }
  };

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
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/40 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-xl dark:bg-white/5 shadow-md hover:bg-white/70 dark:hover:bg-white/10 transition-colors">
                <ArrowLeft size={16} />
                Return to Portfolio
              </span>
            </MagneticButton>
          </motion.div>

          {/* Hero Banner */}
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-300 shadow-md mb-6">
                <Sparkles size={15} className="text-cyan-400" />
                Freelance & Digital Solutions
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Turning Ideas Into{" "}
                <span className="bg-[linear-gradient(120deg,#06b6d4,#3b82f6,#a855f7)] bg-clip-text text-transparent">
                  High-Impact Digital Solutions
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/75 max-w-xl">
                I partner with business owners, agencies, and startups to build responsive websites, launch e-commerce storefronts, improve search visibility, and automate reporting pipelines.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02]"
                >
                  Start a Project
                  <Send size={15} />
                </a>
                <a
                  href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3.5 text-sm font-semibold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                >
                  <MessageSquare size={16} />
                  WhatsApp Direct
                </a>
              </div>
            </motion.div>

            {/* Showcase Visual Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-[2.5rem] p-2 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20 border border-white/10 overflow-hidden shadow-2xl"
            >
              <Image
                src="/project_paras_metal.jpg"
                alt="Digital Solutions Showcase"
                width={700}
                height={450}
                className="rounded-[2.2rem] w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div>
                  <span className="rounded-full bg-cyan-500/20 border border-cyan-400/30 px-3 py-1 text-xs font-semibold text-cyan-300">
                    Client Commercial Experience
                  </span>
                  <p className="mt-2 text-white font-semibold text-sm sm:text-base">
                    E-commerce, Institutional Web Portals & Custom Automation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Pillars Grid */}
          <div className="mt-28">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="section-kicker">Capabilities & Services</p>
              <h2 className="section-title">Comprehensive Digital Services</h2>
              <p className="section-copy">
                Structured, transparent services delivered with clean code, modern UX, and outcome-oriented execution.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PORTFOLIO_DATA.services.map((service, index) => (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="panel border-border/70 bg-white/45 p-8 shadow-xl backdrop-blur-xl dark:bg-white/5 relative overflow-hidden group rounded-[2.2rem] flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/15 transition-all duration-500" />
                  
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 dark:bg-white/5">
                        {ICON_MAP[service.iconName] || <Sparkles className="h-6 w-6 text-cyan-400" />}
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs font-medium text-cyan-600 dark:text-cyan-400">
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                      {service.description}
                    </p>

                    {/* Offerings list */}
                    <div className="mt-6 pt-5 border-t border-foreground/5 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground/50 mb-3">
                        What I Deliver
                      </p>
                      {service.offerings.slice(0, 4).map((offering) => (
                        <div key={offering} className="flex items-start gap-2.5 text-xs text-foreground/80">
                          <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                          <span>{offering}</span>
                        </div>
                      ))}
                    </div>

                    {/* Representative Projects */}
                    {service.representativeProjects && (
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {service.representativeProjects.map((p) => (
                          <span
                            key={p}
                            className="rounded-md bg-foreground/5 px-2 py-0.5 text-[10px] font-medium text-foreground/60 border border-foreground/5"
                          >
                            Ref: {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Footer */}
                  <div className="mt-8 pt-5 border-t border-foreground/5 flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground/50">Custom Scope</span>
                    <a
                      href="#inquiry-form"
                      onClick={() => setForm((prev) => ({ ...prev, serviceCategory: service.title }))}
                      className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:underline"
                    >
                      {service.ctaLabel} →
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Genuine Client Inquiry Form */}
          <div id="inquiry-form" className="mt-32 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="panel border-border/70 bg-white/50 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl dark:bg-white/5 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">
                  Client Project Inquiry
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Let&apos;s Discuss Your Project
                </h2>
                <p className="text-foreground/70 mt-3 text-sm leading-relaxed">
                  Fill in your project requirements below. The submission will be registered, and you can also connect directly via Email or WhatsApp.
                </p>
              </div>

              {submittedData ? (
                /* Honest Success & Direct Channel View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 sm:p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
                    <Check size={28} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground">Inquiry Successfully Registered!</h3>
                  <p className="mt-2 text-sm text-foreground/80 max-w-lg mx-auto">
                    {submittedData.message}
                  </p>

                  {submittedData.directChannels && (
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                      <a
                        href={submittedData.directChannels.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-transform"
                      >
                        <MessageSquare size={16} />
                        Send via WhatsApp
                      </a>
                      <a
                        href={submittedData.directChannels.mailtoUrl}
                        className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/70 px-6 py-3 text-sm font-semibold text-foreground shadow-md hover:bg-white dark:bg-white/10 dark:hover:bg-white/20 transition-all"
                      >
                        <Mail size={16} />
                        Send via Direct Email
                      </a>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setSubmittedData(null);
                      setForm(initialForm);
                    }}
                    className="mt-6 text-xs text-foreground/60 underline hover:text-foreground"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                /* Interactive Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Spam honeypot hidden field */}
                  <input
                    type="text"
                    name="website_hp"
                    value={form.honeypot}
                    onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMessage && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs font-medium text-red-600 dark:text-red-400">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="field"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="field"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                        Company / Organization (Optional)
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Company or personal brand"
                        className="field"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                        Service Category *
                      </label>
                      <select
                        value={form.serviceCategory}
                        onChange={(e) => setForm({ ...form, serviceCategory: e.target.value })}
                        className="field cursor-pointer"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="E-commerce Solutions">E-commerce Solutions</option>
                        <option value="SEO & Digital Growth">SEO & Digital Growth</option>
                        <option value="Digital Marketing & Content">Digital Marketing & Content</option>
                        <option value="Data Analytics & Automation">Data Analytics & Automation</option>
                        <option value="AI & Technical Consulting">AI & Technical Consulting</option>
                        <option value="Other / Multi-discipline">Other / Multi-discipline</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                        Target Timeline
                      </label>
                      <select
                        value={form.timeline}
                        onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                        className="field cursor-pointer"
                      >
                        <option value="Within 2 Weeks">Within 2 Weeks</option>
                        <option value="Within 1 Month">Within 1 Month</option>
                        <option value="1-3 Months">1-3 Months</option>
                        <option value="Flexible / Discussion">Flexible / Discussion</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                      Project Scope & Goals *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Briefly describe what you're looking to build, optimize, or automate (e.g. e-commerce storefront, institutional portal, SEO audit, or custom dashboard)..."
                      className="field resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-foreground/5">
                    <div className="flex items-center gap-2 text-xs text-foreground/60">
                      <ShieldCheck size={16} className="text-cyan-500" />
                      <span>Direct verification • No unconfirmed promises</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:scale-[1.02] disabled:opacity-60 transition-all"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
