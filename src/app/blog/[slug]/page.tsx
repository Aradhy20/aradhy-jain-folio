import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/data/blogData";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  ExternalLink,
  AlertCircle,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serializeJsonLd } from "@/lib/jsonLd";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = BLOG_POSTS[params.slug];
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.targetAudience,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = BLOG_POSTS[params.slug];
  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        isPartOf: {
          "@id": `${siteUrl}/blog#collection`,
        },
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": postUrl,
        },
        author: {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          name: post.author.name,
          url: `${siteUrl}/#person`,
        },
        publisher: {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          name: post.author.name,
        },
        image: `${siteUrl}${post.coverImage}`,
        articleSection: post.category,
        keywords: post.targetAudience.join(", "),
        inLanguage: "en-US",
        citation: post.externalReferences.map((ref) => ref.url),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${postUrl}#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
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

        <article className="container max-w-4xl px-4">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-foreground/60 mb-6"
          >
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground/80 truncate max-w-xs">{post.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-foreground/60 mb-4">
              <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 font-medium text-cyan-400">
                {post.category}
              </span>
              <span className="text-border">•</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                Published: {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-border">•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.2] mb-6">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed mb-6 font-normal">
              {post.excerpt}
            </p>

            {/* Author Meta */}
            <div className="flex items-center justify-between border-y border-border/70 py-4">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full border border-cyan-500/40 object-cover"
                />
                <div>
                  <p className="text-xs font-bold text-foreground">{post.author.name}</p>
                  <p className="text-[11px] text-foreground/60">{post.author.role}</p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-foreground/60">
                <span>Cluster:</span>
                <span className="font-medium text-cyan-400">{post.cluster}</span>
              </div>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <section className="mb-10 rounded-2xl border border-cyan-500/30 bg-cyan-950/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 mb-3.5">
              <CheckCircle2 className="h-4 w-4" /> Key Takeaways for Decision Makers
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/80">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Table of Contents */}
          <section className="mb-12 rounded-xl border border-border/80 bg-background/50 p-5 backdrop-blur-sm">
            <h2 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-3">
              Table of Contents
            </h2>
            <nav className="grid gap-2 text-xs sm:text-sm">
              {post.tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-foreground/75 hover:text-cyan-400 transition-colors py-0.5"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </section>

          {/* Article Body Content */}
          <div className="space-y-12 text-sm sm:text-base text-foreground/85 leading-relaxed">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground border-b border-border/50 pb-2">
                  {section.heading}
                </h2>

                {section.subheading && (
                  <p className="text-xs sm:text-sm font-medium text-cyan-400/90 -mt-2">
                    {section.subheading}
                  </p>
                )}

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed text-foreground/80">
                    {p}
                  </p>
                ))}

                {/* Callout Box */}
                {section.callout && (
                  <div
                    className={`rounded-xl border p-4 text-xs sm:text-sm ${
                      section.callout.type === "warning"
                        ? "border-amber-500/30 bg-amber-950/10 text-amber-200"
                        : section.callout.type === "tip"
                        ? "border-emerald-500/30 bg-emerald-950/10 text-emerald-200"
                        : "border-cyan-500/30 bg-cyan-950/10 text-cyan-200"
                    }`}
                  >
                    <p className="font-bold mb-1 flex items-center gap-1.5">
                      <AlertCircle className="h-4 w-4" />
                      {section.callout.title}
                    </p>
                    <p className="leading-relaxed opacity-90">{section.callout.text}</p>
                  </div>
                )}

                {/* Structured Table */}
                {section.table && (
                  <div className="my-6 overflow-x-auto rounded-xl border border-border/80 bg-background/60">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-secondary/50 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-foreground/70 border-b border-border/80">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-3 px-4">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-foreground/[0.02] transition-colors">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3 px-4 ${
                                  cIdx === 0
                                    ? "font-semibold text-foreground"
                                    : "text-foreground/80"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Key Points */}
                {section.keyPoints && (
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground/80 pl-2">
                    {section.keyPoints.map((point, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Checklist */}
                {section.checklist && (
                  <div className="rounded-xl border border-border/80 bg-secondary/20 p-5 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">
                      Practical Implementation Checklist:
                    </p>
                    {section.checklist.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-foreground/85">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Verified Case Study Section */}
          <section className="my-12 rounded-2xl border border-border/80 bg-background/50 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <Briefcase className="h-4 w-4" /> Verified Case Studies Mentioned
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
              Real-World Applications from Our Portfolio
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {post.relatedCaseStudies.map((cs) => (
                <div
                  key={cs.slug}
                  className="rounded-xl border border-border/70 bg-secondary/30 p-4 transition-colors hover:border-cyan-500/40"
                >
                  <p className="text-xs font-semibold text-cyan-400 mb-1">{cs.client}</p>
                  <h4 className="text-sm font-bold text-foreground mb-1.5">{cs.title}</h4>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-3">{cs.outcome}</p>
                  <Link
                    href={`/projects/${cs.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline"
                  >
                    View Project Case Study <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Related Core Services Section */}
          <section className="my-10 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-background to-blue-950/20 p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              Recommended Services for This Architecture
            </h3>
            <p className="text-xs sm:text-sm text-foreground/70 mb-6">
              Need assistance implementing this technology for your business? Explore our specialized packages:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {post.relatedServices.map((service) => (
                <div
                  key={service.href}
                  className="rounded-xl border border-border/70 bg-background/60 p-4 backdrop-blur-sm"
                >
                  <h4 className="text-sm font-bold text-foreground mb-1 text-cyan-400">
                    {service.title}
                  </h4>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-foreground/90 hover:text-cyan-400"
                  >
                    View Service Deliverables &amp; Scope <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* External Citations & Official References */}
          {post.externalReferences.length > 0 && (
            <section className="my-10 border-t border-border/60 pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-3 flex items-center gap-1.5">
                <ExternalLink className="h-3.5 w-3.5" /> Official Documentation &amp; Citations
              </p>
              <ul className="space-y-2 text-xs text-foreground/70">
                {post.externalReferences.map((ref, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-foreground/40">•</span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      {ref.title}
                      <span className="text-foreground/50">({ref.publisher})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Author Bio Box */}
          <div className="my-10 rounded-2xl border border-border/80 bg-background/60 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={72}
              height={72}
              className="rounded-full border-2 border-cyan-500/40 object-cover shrink-0"
            />
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                Written by
              </p>
              <h4 className="text-base font-bold text-foreground mb-1">{post.author.name}</h4>
              <p className="text-xs text-foreground/60 mb-2">{post.author.role}</p>
              <p className="text-xs text-foreground/75 leading-relaxed">{post.author.bio}</p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between border-t border-border/70 pt-6 text-xs font-semibold">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Articles
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500 px-4 py-2 text-black hover:bg-cyan-400 transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" /> Book a Free Project Consultation
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
