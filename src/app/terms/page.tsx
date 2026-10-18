import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, ShieldCheck, DollarSign } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Aradhy Jain Freelance Services",
  description:
    "Terms of Service and commercial engagement standards for Aradhy Jain's web development, e-commerce, and digital consulting services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfServicePage() {
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
              <FileText size={14} className="text-cyan-500" />
              Commercial Engagement Guidelines
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm sm:text-base text-foreground/75 leading-relaxed">
              Last Updated: {lastUpdated}. These terms outline the transparent working standards, payment milestone structure, intellectual property rights, and third-party cost policies for freelance web development and digital consulting engagements.
            </p>
          </div>

          {/* Terms Content Sections */}
          <div className="mt-12 space-y-10">
            {/* 1. Engagement & Scope */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-cyan-500" />
                1. Project Scoping & Proposals
              </h2>
              <div className="mt-4 space-y-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>
                  All client work begins with a structured Discovery discussion followed by an itemized written proposal detailing exact deliverables, technical architecture, estimated timelines, revision counts, and milestone costs.
                </p>
                <p>
                  Any features, integrations, or redesign requests that fall outside the agreed written proposal scope are treated as scope additions and will be quoted transparently before execution.
                </p>
              </div>
            </section>

            {/* 2. Indicative Pricing & Milestones */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                <DollarSign size={20} className="text-emerald-500" />
                2. Pricing & Milestone Payment Structure
              </h2>
              <div className="mt-4 space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>
                  Prices displayed on this website are indicative starting estimates intended for client budgeting. Fixed project fees are locked in upon signing the project scope agreement.
                </p>
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 text-sm space-y-2">
                  <p className="font-bold text-foreground">Standard 3-Stage Milestone Payment Schedule:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-foreground/75 text-xs sm:text-sm">
                    <li><strong className="text-foreground">Deposit Milestone (40%):</strong> Due upon proposal sign-off to initiate discovery, wireframing, and development environment setup.</li>
                    <li><strong className="text-foreground">Staging Review Milestone (40%):</strong> Due upon completion of primary pages and deployment to a private, interactive staging preview.</li>
                    <li><strong className="text-foreground">Final Launch & Handover (20%):</strong> Due upon final QA approval, custom domain point, Google Search Console connection, and admin handover.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Revisions & Approvals */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                3. Revision Policy
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/80">
                Each service package includes a designated number of revision rounds (typically 2 to 3 rounds depending on package tier). Revisions cover layout refinements, typographical tweaks, color adjustments, and minor copy fixes within the agreed scope. Fundamental architectural pivots or complete rewrites after wireframe sign-off will be quoted as separate milestone phases.
              </p>
            </section>

            {/* 4. Third-Party Costs & Direct Ownership */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                4. Third-Party Services & Zero-Markup Policy
              </h2>
              <div className="mt-4 space-y-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>
                  To ensure complete long-term autonomy and business continuity, all recurring third-party subscriptions are held directly in the client&apos;s name with zero middleman markup:
                </p>
                <div className="space-y-2 pt-2">
                  {[
                    "Domain name registrations (GoDaddy, Namecheap, Google Domains) are purchased directly by the client.",
                    "Cloud hosting, database tiers, or SSL services (Vercel, AWS, Hostinger) are billed directly to the client's billing account.",
                    "Payment gateway processing fees (Razorpay, Cashfree, Stripe) are charged directly per transaction by the payment provider.",
                    "Marketplace seller account fees, referral percentages, and advertising budgets (Amazon, Flipkart, Meesho) are handled within the client's direct seller portal.",
                  ].map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/80">
                      <CheckCircle2 size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Intellectual Property & Code Ownership */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                5. Intellectual Property & Source Code Ownership
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/80">
                Upon settlement of the final project invoice, 100% of the custom source code, documentation, catalog templates, and design assets created specifically for your project transfer entirely to you. You maintain full ownership to modify, host, or transfer the code without ongoing licensing fees or vendor lock-in.
              </p>
            </section>

            {/* 6. Post-Launch Warranty */}
            <section className="panel border-border/70 bg-white/50 p-8 sm:p-10 shadow-lg backdrop-blur-xl dark:bg-slate-900/40 rounded-[2.2rem]">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                6. 30-Day Post-Launch Support & Warranty
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/80">
                Every custom website and portal deliverable includes a 30-day post-launch warranty window. If any technical defect, responsive layout bug, or broken link arises from the agreed project scope, it will be rectified promptly at zero additional cost.
              </p>
            </section>

            {/* 7. Contact for Proposals */}
            <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#06b6d4,#2563eb)] p-8 sm:p-12 text-white shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ready to Initiate a Project Proposal?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed max-w-xl">
                Let&apos;s evaluate your project requirements with clear scoping, transparent pricing, and defined deliverables.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-md hover:bg-slate-100 transition-colors"
                >
                  Start Project Inquiry
                </Link>
                <Link
                  href="/#brief-builder"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  Generate Project Brief
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
