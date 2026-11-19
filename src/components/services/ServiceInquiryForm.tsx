"use client";

import { useState, FormEvent } from "react";
import { Send, Loader2, CheckCircle2, MessageSquare, Mail } from "lucide-react";
import { analytics } from "@/lib/analytics";
import Link from "next/link";

interface ServiceInquiryFormProps {
  defaultCategory: string;
  whatsappMessage: string;
}

export function ServiceInquiryForm({
  defaultCategory,
  whatsappMessage,
}: ServiceInquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    serviceCategory: defaultCategory,
    budgetRange: "Flexible / Discussion",
    timeline: "Within 2-3 Weeks",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);
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

  const handleInputInteraction = () => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      analytics.trackFormStart(`service_page_${defaultCategory.toLowerCase().replace(/\s+/g, "_")}`);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      setErrorMessage("Please provide a project description of at least 15 characters.");
      return;
    }

    setLoading(true);
    analytics.trackFormSubmit(`service_page_${defaultCategory.toLowerCase().replace(/\s+/g, "_")}`, form.serviceCategory);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSubmittedData(data);
      analytics.trackGenerateLead({
        serviceCategory: form.serviceCategory,
        budgetRange: form.budgetRange,
        timeline: form.timeline,
        formSource: `service_page_${defaultCategory.toLowerCase().replace(/\s+/g, "_")}`,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please reach out directly.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/917351522153?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="rounded-2xl border border-border/80 bg-card/60 p-6 md:p-8 backdrop-blur-xl shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground">
          Request a Scope &amp; Milestone Quote
        </h3>
        <p className="mt-1 text-sm text-foreground/70">
          Share your project details below. Aradhy Jain responds directly within 24 hours with an actionable roadmap and milestone pricing.
        </p>
      </div>

      {submittedData ? (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400 mb-3" />
          <h4 className="text-lg font-bold text-emerald-300">
            Inquiry Successfully Received!
          </h4>
          <p className="mt-2 text-sm text-foreground/80 max-w-md mx-auto">
            {submittedData.message}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackWhatsAppClick("service_inquiry_confirmation")}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              <MessageSquare className="h-4 w-4" />
              Chat on WhatsApp Now
            </a>
            <a
              href="mailto:jainaradhy123@gmail.com"
              onClick={() => analytics.trackEmailClick("service_inquiry_confirmation")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-background"
            >
              <Mail className="h-4 w-4" />
              Email Direct: jainaradhy123@gmail.com
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field for bot protection */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              value={form.honeypot}
              onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-foreground/80 mb-1">
                Your Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onFocus={handleInputInteraction}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Ramesh Sharma"
                className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground/80 mb-1">
                Email Address <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onFocus={handleInputInteraction}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-foreground/80 mb-1">
                Company / Organization
              </label>
              <input
                type="text"
                value={form.company}
                onFocus={handleInputInteraction}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="e.g. Acme Enterprises"
                className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground/80 mb-1">
                Service Category
              </label>
              <input
                type="text"
                readOnly
                value={form.serviceCategory}
                className="w-full rounded-xl border border-border/80 bg-muted/40 px-4 py-2.5 text-sm text-foreground/90 font-medium cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-foreground/80 mb-1">
                Budget Scope (Indicative)
              </label>
              <select
                value={form.budgetRange}
                onFocus={handleInputInteraction}
                onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
              >
                <option value="Flexible / Discussion">Flexible / Open for discussion</option>
                <option value="₹15,000 – ₹30,000 (~$200 – $360 USD)">₹15,000 – ₹30,000 (~$200 – $360 USD)</option>
                <option value="₹30,000 – ₹60,000 (~$360 – $720 USD)">₹30,000 – ₹60,000 (~$360 – $720 USD)</option>
                <option value="₹60,000 – ₹1,20,000 (~$720 – $1,450 USD)">₹60,000 – ₹1,20,000 (~$720 – $1,450 USD)</option>
                <option value="₹1,20,000+ ($1,450+ USD / Retainer)">₹1,20,000+ ($1,450+ USD / Retainer)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground/80 mb-1">
                Target Timeline
              </label>
              <select
                value={form.timeline}
                onFocus={handleInputInteraction}
                onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
              >
                <option value="Urgent (< 2 Weeks)">Urgent / Within 2 Weeks</option>
                <option value="Within 2-3 Weeks (Standard)">Standard (2 to 3 Weeks)</option>
                <option value="Within 1 Month">Within 1 Month</option>
                <option value="Planning Phase">Planning / Future Quarter</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-foreground/80 mb-1">
              Project Description &amp; Scope <span className="text-rose-400">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onFocus={handleInputInteraction}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your current website or workflow, target goals, and any specific requirements..."
              className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] p-3.5 text-xs text-foreground/75">
            <input
              type="checkbox"
              id="service-privacy-consent"
              required
              className="mt-0.5 h-4 w-4 rounded border-border text-cyan-600 focus:ring-cyan-500 cursor-pointer"
            />
            <label htmlFor="service-privacy-consent" className="cursor-pointer leading-relaxed">
              I agree that my information may be used to review and respond to this project inquiry in accordance with the{" "}
              <Link href="/privacy" className="text-cyan-600 dark:text-cyan-400 font-semibold underline hover:text-cyan-500">
                Privacy Policy
              </Link>
              . No spam, no marketing distribution, no data sales.
            </label>
          </div>

          {errorMessage && (
            <p className="text-xs font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg p-2.5">
              {errorMessage}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending Inquiry...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit Project Inquiry
                </>
              )}
            </button>
            <span className="text-xs text-foreground/50 hidden sm:inline">or</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackWhatsAppClick("service_page_inquiry")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              Chat on WhatsApp Directly
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
