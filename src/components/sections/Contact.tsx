"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { Mail, Phone, Send, ShieldCheck } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const params = new URLSearchParams({
      subject: `Portfolio enquiry from ${form.name || "a recruiter"}`,
      body: `${form.message || "Hi Aradhy, I'd like to connect."}\n\nFrom: ${form.name || "Anonymous"}\nEmail: ${form.email || "Not provided"}`,
    });

    return `mailto:${PORTFOLIO_DATA.personalInfo.email}?${params.toString()}`;
  }, [form.email, form.message, form.name]);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please use a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please share a short message.";
    if (form.message.trim() && form.message.trim().length < 20) {
      nextErrors.message = "Please add a bit more detail so I can respond usefully.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setIsSubmitted(false);
      return;
    }

    window.location.href = mailtoHref;
    setIsSubmitted(true);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="panel flex flex-col justify-between p-8 sm:p-10"
          >
            <div>
              <p className="section-kicker !text-left">Contact</p>
              <h2 className="section-title !text-left">Let’s Work Together 🚀</h2>
              <p className="section-copy !mx-0 !text-left">
                Open to internships, analytical collaborations, freelance dashboard work,
                and AI/NLP conversations that lead to meaningful products.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                className="flex items-center gap-4 rounded-[1.5rem] border border-border/70 bg-background/65 p-4 transition-transform hover:-translate-y-0.5 dark:bg-slate-950/35"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/55">Email</p>
                  <p className="font-medium text-foreground">{PORTFOLIO_DATA.personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
                className="flex items-center gap-4 rounded-[1.5rem] border border-border/70 bg-background/65 p-4 transition-transform hover:-translate-y-0.5 dark:bg-slate-950/35"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-700 dark:text-blue-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/55">Phone</p>
                  <p className="font-medium text-foreground">{PORTFOLIO_DATA.personalInfo.phone}</p>
                </div>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-[1.5rem] border border-emerald-500/15 bg-emerald-500/10 p-4 text-sm text-foreground/72">
              <ShieldCheck size={18} className="text-emerald-600 dark:text-emerald-300" />
              Fast reply flow with client-side validation and recruiter-friendly contact UX.
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="panel p-8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Name"
                value={form.name}
                error={errors.name}
                onChange={(value) => setForm((current) => ({ ...current, name: value }))}
                placeholder="Your name"
              />
              <Field
                id="email"
                label="Email"
                value={form.email}
                error={errors.email}
                onChange={(value) => setForm((current) => ({ ...current, email: value }))}
                placeholder="you@example.com"
                type="email"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground/75">
                Message
              </label>
              <textarea
                id="message"
                rows={7}
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                placeholder="Tell me about the role, project, or idea you have in mind."
                className={`field resize-none ${errors.message ? "border-red-400/60 focus:ring-red-400/30" : ""}`}
              />
              {errors.message ? (
                <p className="mt-2 text-sm text-red-500">{errors.message}</p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#0891b2,#2563eb)] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.28)] transition-transform hover:-translate-y-0.5"
              >
                Send Message
                <Send size={18} />
              </button>

              <p className="text-sm text-foreground/55">
                {isSubmitted
                  ? "Your email app should open with a pre-filled message."
                  : "Your message opens directly in your default email client."}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
};

function Field({
  id,
  label,
  value,
  error,
  placeholder,
  type = "text",
  onChange,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground/75">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`field ${error ? "border-red-400/60 focus:ring-red-400/30" : ""}`}
      />
      {error ? <p className="mt-2 text-sm text-red-500">{error}</p> : null}
    </div>
  );
}
