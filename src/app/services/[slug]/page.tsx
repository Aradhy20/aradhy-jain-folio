import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SERVICES_DATA, ServiceLandingPageData } from "@/data/servicesData";
import { ServiceInquiryForm } from "@/components/services/ServiceInquiryForm";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Zap,
  HelpCircle,
  Code2,
  Layers,
  Clock,
  Briefcase,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serializeJsonLd } from "@/lib/jsonLd";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = SERVICES_DATA[params.slug];
  if (!service) {
    return {
      title: "Service Not Found | Aradhy Jain",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app";
  const canonicalUrl = `${siteUrl}/services/${service.slug}`;
  const ogImage = service.caseStudies[0]?.image || "/creator_card_portrait.jpg";

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${service.h1} — Aradhy Jain`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.metaDescription,
      images: [ogImage],
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const service: ServiceLandingPageData | undefined = SERVICES_DATA[params.slug];

  if (!service) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app";
  const canonicalUrl = `${siteUrl}/services/${service.slug}`;

  // Sibling services for internal linking
  const siblingServices = Object.values(SERVICES_DATA).filter(
    (s) => s.slug !== service.slug
  );

  // Structured Data: Schema.org Graph
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}/#service`,
        "name": service.h1,
        "serviceType": service.primaryKeyword,
        "description": service.metaDescription,
        "provider": {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          "name": "Aradhy Jain",
          "url": siteUrl,
          "jobTitle": "Web Developer, E-commerce & Digital Growth Specialist",
        },
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "AdministrativeArea", "name": "Global" },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${service.badge} Pricing & Scope Tiers`,
          "itemListElement": service.pricingTiers.map((tier) => ({
            "@type": "Offer",
            "name": tier.name,
            "description": tier.summary,
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "description": `${tier.indicativeINR} (${tier.indicativeUSD})`,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}/#faq`,
        "mainEntity": service.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${siteUrl}/services`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.badge,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  };

  const whatsappDirectUrl = `https://wa.me/917351522153?text=${encodeURIComponent(
    service.whatsappMessage
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schemaJsonLd) }}
      />
      <Navbar />

      <main className="min-h-screen bg-background text-foreground pt-24 pb-20 selection:bg-cyan-500/20">
        {/* Breadcrumb Navigation */}
        <div className="container max-w-6xl px-4 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-foreground/60">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-medium truncate">{service.badge}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container max-w-6xl px-4 pt-6 pb-16">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{service.badge}</span>
              <span className="text-foreground/40">•</span>
              <span className="text-foreground/80">{service.primaryKeyword}</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15] text-foreground">
              {service.h1}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-cyan-500 dark:text-cyan-400 leading-snug">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              {service.heroSummary}
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform"
              >
                <Zap className="h-4 w-4" />
                Request Project Scope &amp; Quote
              </a>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp Direct Discussion
              </a>
            </div>

            {/* Key Service Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-border/60">
              <div>
                <p className="text-xs uppercase tracking-wider text-foreground/50 font-medium">Turnaround</p>
                <p className="text-sm font-semibold text-foreground mt-0.5">Rapid Milestones (7-14 Days)</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-foreground/50 font-medium">Pricing Model</p>
                <p className="text-sm font-semibold text-foreground mt-0.5">Transparent Milestone-Based</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs uppercase tracking-wider text-foreground/50 font-medium">Code Quality</p>
                <p className="text-sm font-semibold text-foreground mt-0.5">Zero Bloat · Production Ready</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Target Audience & Problems */}
        <section className="container max-w-6xl px-4 py-12 border-t border-border/60">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Target Audience &amp; Real-World Business Problems Solved
            </h2>
            <p className="mt-2 text-sm sm:text-base text-foreground/70">
              {service.targetAudience.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/80 bg-card/50 p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                Who Benefits Most from This Service
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                {service.targetAudience.whoIsItFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card/50 p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <XCircle className="h-5 w-5 text-rose-400" />
                Critical Operational Bottlenecks We Eliminate
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                {service.targetAudience.typicalProblems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Detailed Scope & Deliverables */}
        <section className="container max-w-6xl px-4 py-12 border-t border-border/60">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Comprehensive Scope &amp; Exact Deliverables
            </h2>
            <p className="mt-2 text-sm sm:text-base text-foreground/70">
              Every project comes with clear milestones, defined deliverables, and zero hidden assumptions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {service.deliverables.map((category, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-card/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-4 font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/75">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Genuine Portfolio Case Studies */}
        <section className="container max-w-6xl px-4 py-12 border-t border-border/60">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <Briefcase className="h-3.5 w-3.5" />
              <span>Real-World Proof</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Verified Case Studies &amp; Demonstrable Outcomes
            </h2>
            <p className="mt-2 text-sm sm:text-base text-foreground/70">
              Review live client implementations and engineering prototypes delivered under this exact service domain.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.caseStudies.map((project, idx) => (
              <div
                key={idx}
                className="group flex flex-col rounded-2xl border border-border/80 bg-card/60 overflow-hidden shadow-lg transition-all hover:border-cyan-500/40 hover:shadow-cyan-500/10"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} — Aradhy Jain`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur-md border border-white/10">
                    {project.client}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-foreground/60 font-medium mt-1">
                      Role: {project.role}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-border/60">
                    <div className="rounded-lg bg-cyan-500/10 p-2.5 text-xs text-cyan-300">
                      <strong>Verified Result:</strong> {project.verifiedOutcome}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-full bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <Link
                        href={project.caseStudyUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                      >
                        Read Full Case Study <ArrowRight className="h-3 w-3" />
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-foreground/60 hover:text-foreground ml-auto"
                        >
                          Live Site <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Technology & Implementation Details */}
        <section className="container max-w-6xl px-4 py-12 border-t border-border/60">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <Code2 className="h-3.5 w-3.5" />
              <span>Engineering Stack</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Technology Architecture &amp; Implementation Details
            </h2>
            <p className="mt-2 text-sm sm:text-base text-foreground/70">
              Chosen for speed, developer maintainability, security, and long-term cost efficiency.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {service.technologies.map((techGroup, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-card/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-cyan-400" />
                    {techGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {techGroup.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-1 text-xs font-semibold text-cyan-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {techGroup.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Transparent Pricing Guidance */}
        <section className="container max-w-6xl px-4 py-12 border-t border-border/60">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Transparent Pricing Guidance &amp; Scope
            </h2>
            <p className="mt-2 text-sm sm:text-base text-foreground/70">
              Clear milestone-based budgets with defined inclusions and explicit exclusions so there are never surprises.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {service.pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                      <Clock className="h-3 w-3" />
                      {tier.turnaround}
                    </span>
                  </div>

                  <div className="my-4 pb-4 border-b border-border/60">
                    <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
                      {tier.indicativeINR}
                    </div>
                    <div className="text-sm font-medium text-foreground/60">
                      Indicative International: {tier.indicativeUSD}
                    </div>
                  </div>

                  <p className="text-sm text-foreground/80 mb-6">{tier.summary}</p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                        Included Deliverables:
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-foreground/75">
                        {tier.deliverables.map((inc, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                        Explicit Exclusions:
                      </p>
                      <ul className="space-y-1.5 text-xs text-foreground/60">
                        {tier.exclusions.map((exc, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2">
                            <XCircle className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                            <span>{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/60">
                  <a
                    href="#inquiry"
                    className="block w-full text-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 py-2.5 text-sm font-semibold text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                  >
                    Select {tier.name} Scope
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions */}
        <section className="container max-w-6xl px-4 py-12 border-t border-border/60">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Buyer Questions</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-foreground/70">
              Clear answers to the most common technical and operational questions before starting.
            </p>
          </div>

          <div className="grid gap-4 max-w-4xl">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-card/50 p-6 transition-colors hover:border-cyan-500/30"
              >
                <h3 className="text-base font-bold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Lead Inquiry Form & WhatsApp */}
        <section id="inquiry" className="container max-w-6xl px-4 py-12 border-t border-border/60">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Start Your Project with Aradhy Jain
            </h2>
            <p className="mt-2 text-sm sm:text-base text-foreground/70">
              Fill out the form below or chat on WhatsApp to discuss your timeline, scope, and milestone budget.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ServiceInquiryForm
              defaultCategory={service.inquiryCategory}
              whatsappMessage={service.whatsappMessage}
            />
          </div>
        </section>

        {/* Section 8: Sibling Service Exploration & Internal Links */}
        <section className="container max-w-6xl px-4 py-12 border-t border-border/60">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              Explore Related Digital Growth Services
            </h2>
            <p className="mt-1 text-sm text-foreground/60">
              Connect your web presence with high-converting e-commerce, marketplace cataloging, and automation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siblingServices.map((sibling, idx) => (
              <Link
                key={idx}
                href={`/services/${sibling.slug}`}
                className="group rounded-2xl border border-border/70 bg-card/40 p-5 transition-all hover:border-cyan-500/40 hover:bg-card/70"
              >
                <span className="text-xs font-semibold text-cyan-400">
                  {sibling.badge}
                </span>
                <h3 className="text-sm font-bold text-foreground mt-1 group-hover:text-cyan-300 transition-colors">
                  {sibling.primaryKeyword}
                </h3>
                <p className="text-xs text-foreground/60 mt-2 line-clamp-2">
                  {sibling.metaDescription}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore service</span> <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4 text-xs text-foreground/60">
            <div className="flex items-center gap-4">
              <Link href="/freelance" className="hover:text-cyan-400 underline">
                All Freelance Packages
              </Link>
              <Link href="/#projects" className="hover:text-cyan-400 underline">
                All Case Studies
              </Link>
              <Link href="/#contact" className="hover:text-cyan-400 underline">
                Direct Contact
              </Link>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <span>Back to All Services Directory</span> <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
