import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Lock, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Aradhy Jain Freelance Services",
  description:
    "Privacy Policy for Aradhy Jain's web development, e-commerce, and digital growth services. Compliant with Indian DPDP guidelines and global best practices.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 18, 2026";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-24 overflow-hidden relative">
        <div className="container relative z-10 max-w-4xl">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/50 px-4 py-2 text-xs sm:text-sm font-semibold text-foreground backdrop-blur-xl dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-colors shadow-sm"
            >
              <ArrowLeft size={16} />
              Return to Homepage
            </Link>
          </div>

          {/* Header Banner */}
          <div className="rounded-[2.5rem] border border-cyan-500/30 bg-white/60 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl dark:bg-slate-900/60 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 mb-4">
              <ShieldCheck size={14} className="text-cyan-500" />
              Data Protection & Privacy
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm sm:text-base text-foreground/75 leading-relaxed">
              Last Updated: {lastUpdated}. I take data privacy seriously and adhere to the Digital Personal Data Protection Act (DPDP Act, India) principles alongside international data privacy standards.
            </p>
          </div>

          {/* Privacy Content Sections */}
          <div className="mt-12 space-y-10">
            {/* Section 1: Overview & Controller */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                <Lock size={20} className="text-cyan-500" />
                1. Data Controller & Scope
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/80">
                This Privacy Policy applies to personal data collected through the portfolio website{" "}
                <strong className="text-foreground">https://aradhy-jain-folio.vercel.app</strong> and direct client communications managed by:
              </p>
              <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-sm text-foreground/80 space-y-1">
                <p><strong className="text-foreground">Individual Freelance Practitioner:</strong> Aradhy Jain</p>
                <p><strong className="text-foreground">Location:</strong> Delhi NCR, India</p>
                <p><strong className="text-foreground">Direct Contact:</strong> jainaradhy01@gmail.com · +91-7351522153</p>
              </div>
            </section>

            {/* Section 2: Data Collected */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                2. Information Collected
              </h2>
              <div className="mt-4 space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground">A. Project Inquiry Details</h3>
                  <p className="mt-1 text-sm text-foreground/75">
                    When you submit an inquiry form or project proposal brief, I collect your full name, business email address, optional company or organization name, preferred service package, target timeline, budget estimate, and project description.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">B. Free Website Audit Tool</h3>
                  <p className="mt-1 text-sm text-foreground/75">
                    When you run the Free Website Audit tool, our server performs a real-time HTTP fetch against the publicly available URL you provide to inspect response latency, HTTP headers, and open SEO tags. We enforce strict Server-Side Request Forgery (SSRF) restrictions. We do not inspect, log, or access any private network addresses, internal endpoints, or confidential server assets.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">C. Analytics & Technical Metrics</h3>
                  <p className="mt-1 text-sm text-foreground/75">
                    We use privacy-friendly performance telemetry (Vercel Speed Insights and Analytics) to monitor page load times, Core Web Vitals, and aggregate traffic patterns. No intrusive cross-site tracking cookies or marketing profiling cookies are employed.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: How Information is Used */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                3. Purpose of Processing & Use of Data
              </h2>
              <div className="mt-4 space-y-3">
                {[
                  "Evaluating project feasibility and preparing transparent, itemized service proposals.",
                  "Direct business communication via email, phone, or WhatsApp regarding your project inquiry.",
                  "Executing agreed-upon website development, e-commerce cataloging, SEO optimization, or maintenance tasks.",
                  "Delivering project milestone updates, staging environment access, and final handover deliverables.",
                  "Zero spam, zero cold-marketing newsletters, and zero resale of client contact information.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/80">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Data Sharing & Third-Party Platforms */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                4. Third-Party Services & Infrastructure
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/80">
                I do not sell, rent, or trade your personal data. Infrastructure providers utilized to deliver services include:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-foreground/75">
                <li><strong className="text-foreground">Vercel Inc.:</strong> Hosting platform providing SSL encryption and edge function delivery.</li>
                <li><strong className="text-foreground">Google Workspace / Gmail:</strong> Secure TLS-encrypted email notifications for project inquiries.</li>
                <li><strong className="text-foreground">WhatsApp (Meta Platforms):</strong> Client-initiated quick inquiry messaging subject to end-to-end encryption.</li>
              </ul>
            </section>

            {/* Section 5: Client Rights & Data Removal */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                5. Your Rights & Data Erasure
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/80">
                Under the Indian DPDP Act and international standards, you have the right to request a copy of the personal information retained about you or request its immediate deletion from inquiry logs.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:jainaradhy01@gmail.com?subject=Data%20Privacy%20Request"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:scale-[1.02] transition-transform"
                >
                  <Mail size={15} />
                  Email Privacy Request (jainaradhy01@gmail.com)
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
