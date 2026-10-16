"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { Mail, Phone, Send, ShieldCheck, Check, Loader2, MessageSquare } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  category: string;
  message: string;
  honeypot: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  category: "General Inquiry",
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
      setErrorMsg("Please add a bit more detail (at least 15 characters) so I can understand your need.");
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
          serviceCategory: form.category,
          message: form.message,
          honeypot: form.honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
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
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="panel flex flex-col justify-between p-8 sm:p-10 rounded-[2.2rem]"
          >
            <div>
              <p className="section-kicker !text-left">Get In Touch</p>
              <h2 className="section-title !text-left">Let’s Discuss Your Next Project</h2>
              <p className="section-copy !mx-0 !text-left mt-4">
                Open to freelance web development, e-commerce stores, institutional portals, SEO audits, and custom data automation. Let&apos;s build something impactful together.
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
                  <p className="text-xs text-foreground/50">Email Directly</p>
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
                  <p className="text-xs text-foreground/50">Direct Phone / Call</p>
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
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">Instant Chat</p>
                  <p className="font-semibold text-sm text-foreground">Message on WhatsApp</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-xs text-foreground/70">
              <ShieldCheck size={18} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>Transparent communication • Direct replies from Aradhy Jain</span>
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
                <h3 className="text-xl font-bold text-foreground">Thank you for your message!</h3>
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
              <form onSubmit={handleSubmit} className="space-y-5">
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

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="field"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      className="field"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                      Topic / Service
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="field cursor-pointer"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="E-commerce Solutions">E-commerce Solutions</option>
                      <option value="SEO & Performance">SEO & Performance</option>
                      <option value="Data & Dashboards">Data & Dashboards</option>
                      <option value="AI / Automation">AI / Automation</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                    Message / Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about what you're looking to achieve..."
                    className="field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:scale-[1.01] disabled:opacity-60 transition-all"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Message</span>
                      <Send size={16} />
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
