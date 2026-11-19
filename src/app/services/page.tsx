import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SERVICES_DATA } from "@/data/servicesData";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe,
  ShoppingBag,
  TrendingUp,
  Bot,
  BarChart3,
  Building2,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "Professional Services | Web Development, E-commerce, SEO & Automation",
  description:
    "Explore Aradhy Jain's 6 core digital engineering services: Next.js business websites, e-commerce, technical SEO, AI automation, Power BI analytics, and institutional portals.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Professional Services | Web Development, E-commerce, SEO & Automation | Aradhy Jain",
    description:
      "Explore Aradhy Jain's 6 core digital engineering services: Next.js business websites, e-commerce, technical SEO, AI automation, Power BI analytics, and institutional portals.",
    url: `${siteUrl}/services`,
    type: "website",
    images: [
      {
        url: "/creator_card_portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Aradhy Jain — Professional Services Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Services | Web Development, E-commerce, SEO & Automation | Aradhy Jain",
    description:
      "Explore Aradhy Jain's 6 core digital engineering services: Next.js business websites, e-commerce, technical SEO, AI automation, Power BI analytics, and institutional portals.",
    images: ["/creator_card_portrait.jpg"],
  },
};

const ICON_MAP: Record<string, React.ReactNode> = {
  "website-development": <Globe className="h-6 w-6 text-cyan-400" />,
  "ecommerce-development": <ShoppingBag className="h-6 w-6 text-blue-400" />,
  "technical-seo": <TrendingUp className="h-6 w-6 text-purple-400" />,
  "ai-automation": <Bot className="h-6 w-6 text-amber-400" />,
  "data-analytics": <BarChart3 className="h-6 w-6 text-emerald-400" />,
  "institutional-websites": <Building2 className="h-6 w-6 text-rose-400" />,
};

export default function ServicesDirectoryPage() {
  const servicesList = Object.values(SERVICES_DATA);

  const servicesDirectoryJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteUrl}/services`,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/services/#itemlist`,
        name: "Digital Growth & Engineering Services by Aradhy Jain",
        description: "Six specialized services for businesses, manufacturers, and institutions.",
        itemListElement: servicesList.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.h1,
          url: `${siteUrl}/services/${service.slug}`,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(servicesDirectoryJsonLd) }}
      />
      <Navbar />

      <main className="min-h-screen bg-background text-foreground pt-24 pb-20 selection:bg-cyan-500/20">
        {/* Breadcrumbs */}
        <div className="container max-w-6xl px-4 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-foreground/60">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-medium">Services Directory</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container max-w-6xl px-4 pt-6 pb-16">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Commercial Service Pillars</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight text-foreground">
              Specialized Web Engineering, Marketplace Operations &amp; Digital Growth
            </h1>

            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              I partner directly with business owners, manufacturers, academic institutions, and growing brands. Each service is built on production-grade architecture, transparent milestone pricing, and measurable commercial results.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/freelance"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform"
              >
                <span>View Packaged Scopes &amp; Pricing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-6 py-3 text-sm font-semibold text-foreground hover:bg-background transition-colors"
              >
                Explore Verified Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container max-w-6xl px-4 py-12 border-t border-border/60">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Six Core Service Capabilities
            </h2>
            <p className="mt-2 text-sm text-foreground/70">
              Select any capability below for an in-depth breakdown of deliverables, target audiences, real client case studies, and transparent pricing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service) => (
              <div
                key={service.slug}
                className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-6 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border/80">
                      {ICON_MAP[service.slug] || <Sparkles className="h-6 w-6 text-cyan-400" />}
                    </div>
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-cyan-400 transition-colors">
                    <Link href={`/services/${service.slug}`} className="hover:underline">
                      {service.primaryKeyword}
                    </Link>
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {service.metaDescription}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-foreground/50">
                      Core Deliverables:
                    </p>
                    <ul className="space-y-1.5 text-xs text-foreground/75">
                      {service.deliverables[0]?.items.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="text-xs text-foreground/60">
                    <span className="font-semibold text-foreground">
                      {service.pricingTiers[0]?.indicativeINR.split("–")[0]}
                    </span>
                    {" starting"}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Trust & Process Section */}
        <section className="container max-w-6xl px-4 py-16 border-t border-border/60">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 via-background to-blue-950/20 p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ready to Upgrade Your Digital Infrastructure?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-foreground/75 leading-relaxed">
              Whether you need a custom Next.js website, full marketplace onboarding for your catalog, or deep technical SEO remediation, let&apos;s map out a clear plan.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/freelance"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg hover:scale-[1.02] transition-transform"
              >
                <span>Browse Milestone Packages</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/917351522153?text=Hi%20Aradhy,%20I'd%20like%20to%20discuss%20a%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-7 py-3 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
