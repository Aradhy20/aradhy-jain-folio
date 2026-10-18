"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { Mail, Phone, Send, ShieldCheck, Check, Loader2, MessageSquare } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  budgetRange: string;
  timeline: string;
  message: string;
  honeypot: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  service: "Starter Business Website",
  budgetRange: "Flexible / Discussion",
  timeline: "Within 1 Month",
  message: "",
  honeypot: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedResponse, setSubmittedResponse] = useState<{
    message: string;
    directChannels?: {
      email: string;
      mailtoUrl: string;
      whatsappUrl: string;
    };
  } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMsg("");

    if (!form.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      setErrorMsg("Please add a bit more detail (at least 15 characters) so I can understand your project needs.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          serviceCategory: form.service,
          budgetRange: form.budgetRange,
          timeline: form.timeline,
          message: form.message,
          honeypot: form.honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit project inquiry.");
      }

      setSubmittedResponse(data);
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to submit. Please reach out directly via Email or WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">
            Project Inquiry & Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Have a Project in Mind?
          </h2>
          <p className="mt-3 text-base text-foreground/75 leading-relaxed">
            Tell me what you are building, improving, or trying to solve. I’ll review your requirements and discuss the next steps.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Column: Direct Contact Info & Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="panel flex flex-col justify-between p-8 sm:p-10 rounded-[2.2rem]"
          >
            <div>
              <p className="section-kicker !text-left">Direct Communication</p>
              <h3 className="text-2xl font-bold text-foreground !text-left mt-1">
                Reach Out Directly
              </h3>
              <p className="section-copy !mx-0 !text-left mt-3">
                Whether you need a new website, marketplace listing support, technical SEO, or reporting automation, I reply personally within 24 hours.
              </p>
            </div>

            <div className="mt-8 space-y-3.5">
              <a
                href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background/65 p-4 transition-transform hover:-translate-y-0.5 dark:bg-slate-950/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-foreground/50">Direct Email</p>
                  <p className="font-semibold text-sm text-foreground">{PORTFOLIO_DATA.personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
                className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background/65 p-4 transition-transform hover:-translate-y-0.5 dark:bg-slate-950/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-foreground/50">Phone / Call</p>
                  <p className="font-semibold text-sm text-foreground">{PORTFOLIO_DATA.personalInfo.phone}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">Instant WhatsApp</p>
                  <p className="font-semibold text-sm text-foreground">Message Directly (+91-7351522153)</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-xs text-foreground/70">
              <ShieldCheck size={18} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>Transparent scoping • Prompt replies directly from Aradhy Jain</span>
            </div>
          </motion.div>

          {/* Right Column: Genuine Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="panel p-8 sm:p-10 rounded-[2.2rem]"
          >
            {submittedResponse ? (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
                  <Check size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Thank you for your inquiry!</h3>
                <p className="text-sm text-foreground/75 max-w-md mx-auto">
                  {submittedResponse.message}
                </p>

                {submittedResponse.directChannels && (
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={submittedResponse.directChannels.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:scale-105 transition-transform"
                    >
                      <MessageSquare size={14} />
                      Open WhatsApp Chat
                    </a>
                    <a
                      href={submittedResponse.directChannels.mailtoUrl}
                      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/60 px-5 py-2.5 text-xs font-semibold text-foreground shadow-sm hover:bg-white dark:bg-white/10"
                    >
                      <Mail size={14} />
                      Open Email App
                    </a>
                  </div>
                )}

                <button
                  onClick={() => {
                    setSubmittedResponse(null);
                    setForm(initialState);
                  }}
                  className="mt-6 text-xs text-foreground/60 underline hover:text-foreground"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for bot spam */}
                <input
                  type="text"
                  name="website_hp"
                  value={form.honeypot}
                  onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {errorMsg && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs font-medium text-red-600 dark:text-red-400">
                    {errorMsg}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="field"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. rahul@business.com"
                      className="field"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">
                      Business / Company Name <span className="text-foreground/40 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g. Acme Handicrafts"
                      className="field"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="field cursor-pointer"
                    >
                      <option value="Starter Business Website">Starter Business Website (₹18k–₹28k)</option>
                      <option value="Custom Business Website & Portal">Custom Business Website & Portal (₹38k–₹75k)</option>
                      <option value="E-commerce & Marketplace Storefront">E-commerce & Marketplace Storefront (₹32k–₹65k)</option>
                      <option value="Technical SEO & Website Optimization">Technical SEO & Website Optimization (₹16k–₹32k)</option>
                      <option value="Monthly Website Maintenance & Analytics">Monthly Website Maintenance & Analytics (₹8k–₹18k/mo)</option>
                      <option value="General Inquiry / Custom Consultation">General Inquiry / Custom Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">
                      Approximate Budget <span className="text-foreground/40 font-normal">(Optional)</span>
                    </label>
                    <select
                      value={form.budgetRange}
                      onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                      className="field cursor-pointer"
                    >
                      <option value="Flexible / Discussion">Flexible / Discussion</option>
                      <option value="₹18,000 – ₹30,000 / $220 – $360">₹18,000 – ₹30,000 ($220 – $360)</option>
                      <option value="₹30,000 – ₹60,000 / $360 – $720">₹30,000 – ₹60,000 ($360 – $720)</option>
                      <option value="₹60,000 – ₹1,20,000 / $720 – $1,450">₹60,000 – ₹1,20,000 ($720 – $1,450)</option>
                      <option value="Custom Enterprise / Retainer">Custom Enterprise / Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">
                      Target Timeline <span className="text-foreground/40 font-normal">(Optional)</span>
                    </label>
                    <select
                      value={form.timeline}
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      className="field cursor-pointer"
                    >
                      <option value="Within 2-3 Weeks (Urgent)">Within 2-3 Weeks (Urgent)</option>
                      <option value="Within 1 Month (Standard)">Within 1 Month (Standard)</option>
                      <option value="1-2 Months (Phased)">1-2 Months (Phased)</option>
                      <option value="Flexible / Exploratory">Flexible / Exploratory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">
                    Project Description *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about what you are building, improving, or trying to solve..."
                    className="field resize-none"
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] p-3.5 text-xs text-foreground/75">
                  <input
                    type="checkbox"
                    id="contact-privacy-consent"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-border text-cyan-600 focus:ring-cyan-500 cursor-pointer"
                  />
                  <label htmlFor="contact-privacy-consent" className="cursor-pointer leading-relaxed">
                    I agree that my information may be used to review and respond to this project inquiry in accordance with the{" "}
                    <Link href="/privacy" className="text-cyan-600 dark:text-cyan-400 font-semibold underline hover:text-cyan-500">
                      Privacy Policy
                    </Link>
                    . No spam, no marketing distribution, no data sales.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#06b6d4,#2563eb)] p-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting Inquiry...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Start a Project / Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
