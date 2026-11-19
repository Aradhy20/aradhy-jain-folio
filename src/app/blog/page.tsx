import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS, CONTENT_CALENDAR, TOPIC_CLUSTERS, BLOG_AUTHOR } from "@/data/blogData";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serializeJsonLd } from "@/lib/jsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering & Growth Blog | Technical Guides for Business Owners & Founders",
  description:
    "Practical, in-depth guides on website development costs in India, Next.js vs WordPress architecture, technical SEO, e-commerce, and AI automation by Aradhy Jain.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Engineering & Growth Blog | Aradhy Jain",
    description:
      "Practical guides on website development costs in India, Next.js architecture, technical SEO, e-commerce, and business automation.",
    url: "/blog",
    siteName: "Aradhy Jain Portfolio",
    type: "website",
    images: [
      {
        url: "/creator_card_portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Aradhy Jain Editorial Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & Growth Blog | Aradhy Jain",
    description:
      "Practical guides on website development costs in India, Next.js architecture, technical SEO, e-commerce, and business automation.",
    images: ["/creator_card_portrait.jpg"],
  },
};

export default function BlogHubPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app";
  const publishedPosts = Object.values(BLOG_POSTS);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/blog#collection`,
        url: `${siteUrl}/blog`,
        name: "Engineering & Digital Growth Blog | Aradhy Jain",
        description:
          "Practical, in-depth technical guides for business owners, startup founders, and technical decision makers.",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/blog#breadcrumb`,
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
            name: "Blog",
            item: `${siteUrl}/blog`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground pt-28 pb-20 selection:bg-cyan-500/20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="container max-w-5xl px-4 pt-4 pb-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-foreground/60 mb-6"
          >
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Blog</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-400 mb-4">
            <BookOpen className="h-3.5 w-3.5" />
            Editorial Knowledge Base &amp; Technical Guides
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-4">
            Practical Guides for Building, Scaling &amp; Ranking{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Modern Digital Systems
            </span>
          </h1>

          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-3xl mb-8">
            Transparent, zero-fluff engineering insights for business owners, startup founders,
            e-commerce sellers, and educational institutions in India and worldwide. Real pricing breakdowns,
            architectural benchmarks, and technical search strategies.
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-background/50 p-3.5 max-w-lg backdrop-blur-sm">
            <Image
              src={BLOG_AUTHOR.avatar}
              alt={BLOG_AUTHOR.name}
              width={44}
              height={44}
              className="rounded-full border border-cyan-500/30 object-cover"
            />
            <div>
              <p className="text-xs font-semibold text-foreground">
                Written &amp; Curated by {BLOG_AUTHOR.name}
              </p>
              <p className="text-[11px] text-foreground/65">
                Web Developer, E-commerce Specialist &amp; Technical SEO Engineer
              </p>
            </div>
          </div>
        </section>

        {/* Published Articles Grid */}
        <section className="container max-w-5xl px-4 py-8 border-t border-border/60">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Featured Guides &amp; Practical Analysis
              </h2>
              <p className="text-xs sm:text-sm text-foreground/65 mt-1">
                Deep dives into real costs, architecture decisions, and search indexing mechanics.
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-cyan-500 dark:text-cyan-400">
              <CheckCircle2 className="h-3.5 w-3.5" /> Reviewed for Accuracy
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {publishedPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-foreground/60 mb-3.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-0.5 font-medium text-cyan-400">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  {/* Target Audience Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.targetAudience.slice(0, 3).map((aud) => (
                      <span
                        key={aud}
                        className="rounded-md border border-border/70 bg-secondary/50 px-2 py-0.5 text-[11px] text-foreground/70"
                      >
                        {aud}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform"
                  >
                    Read Complete Guide <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Topic Clusters Section */}
        <section className="container max-w-5xl px-4 py-12 border-t border-border/60">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
              <Layers className="h-5 w-5 text-cyan-400" /> Topic Clusters &amp; Architecture Map
            </h2>
            <p className="text-xs sm:text-sm text-foreground/65 mt-1">
              How our editorial topics connect directly to core services and verified case studies.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOPIC_CLUSTERS.map((cluster) => (
              <div
                key={cluster.name}
                className="rounded-xl border border-border/70 bg-background/40 p-5 backdrop-blur-sm"
              >
                <h3 className="text-sm font-bold text-foreground mb-1.5 text-cyan-400">
                  {cluster.name}
                </h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-3.5">
                  {cluster.description}
                </p>
                <Link
                  href={cluster.primaryService}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-foreground/80 hover:text-cyan-400 transition-colors"
                >
                  Explore Pillar Service <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Content Calendar & Publishing Schedule */}
        <section className="container max-w-5xl px-4 py-12 border-t border-border/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 mb-2">
                <Sparkles className="h-3.5 w-3.5" /> Editorial Calendar (2025–2026)
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                All 10 Core Editorial Topics
              </h2>
              <p className="text-xs sm:text-sm text-foreground/65 mt-1">
                Carefully planned, high-intent technical articles addressing customer questions without AI fluff.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 font-semibold text-emerald-400">
                2 Drafts Complete
              </span>
              <span className="rounded-full bg-blue-500/10 border border-blue-500/30 px-3 py-1 font-semibold text-blue-400">
                8 In Production
              </span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border/80 bg-background/40">
            <table className="w-full text-left text-xs text-foreground/80">
              <thead className="bg-secondary/40 text-[11px] font-semibold uppercase tracking-wider text-foreground/70 border-b border-border/80">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Article Title &amp; Topic</th>
                  <th className="py-3 px-4">Cluster</th>
                  <th className="py-3 px-4">Search Intent</th>
                  <th className="py-3 px-4">Target Keyword</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {CONTENT_CALENDAR.map((item) => (
                  <tr key={item.id} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-mono text-foreground/50">{item.id}</td>
                    <td className="py-3.5 px-4 font-medium text-foreground">
                      {item.status === "Draft Ready for Review" ? (
                        <Link
                          href={`/blog/${item.slug}`}
                          className="hover:text-cyan-400 transition-colors font-semibold"
                        >
                          {item.title} →
                        </Link>
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-foreground/65">{item.cluster}</td>
                    <td className="py-3.5 px-4">
                      <span className="rounded bg-secondary/80 px-2 py-0.5 text-[11px] font-medium text-foreground/80">
                        {item.searchIntent}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-cyan-400/90">
                      {item.primaryKeyword}
                    </td>
                    <td className="py-3.5 px-4">
                      {item.status === "Draft Ready for Review" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" /> Draft Ready
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 border border-blue-500/30 px-2.5 py-0.5 text-[11px] font-medium text-blue-400">
                          <Clock className="h-3 w-3" /> Planned
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="container max-w-5xl px-4 py-8">
          <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-background to-blue-950/20 p-8 text-center sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
              Need Help Building or Scaling Your Web Platform?
            </h2>
            <p className="text-xs sm:text-sm text-foreground/75 max-w-2xl mx-auto leading-relaxed mb-6">
              Skip the agency markups and template bloat. Work directly with a full-stack engineer and technical SEO specialist for your next website, marketplace integration, or automation project.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/freelance"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-xs font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                View Freelance Packages &amp; Pricing <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-xs font-semibold text-foreground transition-colors hover:border-cyan-500/50"
              >
                Browse All Services Directory
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
