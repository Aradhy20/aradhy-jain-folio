import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileQuickContactBar } from "@/components/MobileQuickContactBar";
import { ServiceInquiryForm } from "@/components/services/ServiceInquiryForm";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  MapPin,
  Building,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  HelpCircle,
  FileCheck,
} from "lucide-react";
import Link from "next/link";
import { serializeJsonLd } from "@/lib/jsonLd";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app";
const pageUrl = `${siteUrl}/freelance-web-developer-noida`;

export const metadata: Metadata = {
  title: "Freelance Web Developer in Noida",
  description:
    "Independent freelance web developer in Noida & Delhi NCR. High-performance Next.js business websites, e-commerce stores, and SEO for local companies.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Freelance Web Developer in Noida | Aradhy Jain",
    description:
      "Independent freelance web developer in Noida & Delhi NCR. High-performance Next.js business websites, e-commerce stores, and SEO for local companies.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: "/creator_card_portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Freelance Web Developer in Noida — Aradhy Jain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Developer in Noida | Aradhy Jain",
    description:
      "Independent freelance web developer in Noida & Delhi NCR. High-performance Next.js business websites, e-commerce stores, and SEO for local companies.",
    images: ["/creator_card_portrait.jpg"],
  },
};

export default function FreelanceNoidaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: "Freelance Web Development in Noida",
        description:
          "Independent freelance web development, custom Next.js websites, e-commerce storefronts, and technical SEO for businesses in Noida, Greater Noida, and Delhi NCR.",
        provider: {
          "@id": `${siteUrl}/#person`,
        },
        serviceType: "Freelance Web Development",
        areaServed: [
          { "@type": "City", name: "Noida" },
          { "@type": "AdministrativeArea", name: "Delhi NCR" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Freelance Web Development Services Noida",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Small Business Website Development",
                description: "Custom responsive business websites for companies in Noida and Delhi NCR.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "E-commerce Website & Marketplace Setup",
                description: "Online storefronts and catalog integration for manufacturers and retailers.",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
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
            name: "Hire Freelance Developer",
            item: `${siteUrl}/freelance`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Freelance Web Developer Noida",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Business ke liye website banwani hai? Project start karne ke liye kya details chahiye?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Website start karne ke liye aapko primarily 3 cheezein chahiye: (1) Aapka business overview aur target customers, (2) Jo pages aapko chahiye (jaise Home, Services, About, Contact), aur (3) Content ya logo agar available hai. Agar content ready nahi hai, toh planning ke dauran hum structure define kar lete hain. Aap direct WhatsApp ya inquiry form ke through connect kar sakte hain.",
            },
          },
          {
            "@type": "Question",
            name: "Do you meet in person in Noida or work remotely?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "I am based in and serve Noida and Delhi NCR. Most project collaboration is handled remotely via Google Meet, email, and WhatsApp, which keeps costs transparent, eliminates agency travel markups, and allows fast milestone reviews on staging links.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a business website cost for a Noida company?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A clean Starter Business Website typically ranges between ₹15,000 and ₹28,000, while a custom corporate or multi-page platform ranges between ₹30,000 and ₹65,000 depending on scope, page count, and custom workflows.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground pt-32 pb-24 selection:bg-cyan-500/20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="container max-w-5xl px-4 pb-16">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-foreground/60 mb-6"
          >
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/freelance" className="hover:text-cyan-400 transition-colors">
              Freelance
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Noida</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-6">
            <MapPin className="h-3.5 w-3.5" />
            Noida &amp; Delhi NCR · Independent Web Developer
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-6">
            Freelance Web Developer for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Noida Businesses
            </span>
          </h1>

          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-3xl mb-8">
            I am an independent freelance web developer serving businesses across Noida, Greater Noida, and Delhi NCR.
            I build modern, high-speed business websites, e-commerce storefronts, and specialized web portals using Next.js 14 and Tailwind CSS.
            Work directly with the engineer building your site—with transparent milestone billing and zero agency overhead.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3.5 text-xs sm:text-sm font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Request a Project Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/917351522153?text=Hi%20Aradhy%2C%20I'm%20a%20business%20in%20Noida%20looking%20for%20a%20freelance%20web%20developer."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              Chat on WhatsApp Directly
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-foreground/60 border-t border-border/60 pt-4">
            <span>• Direct communication with Aradhy Jain</span>
            <span>• Defined milestone deliverables</span>
            <span>• Clean Next.js source code ownership</span>
            <span>• Full remote delivery with video walkthroughs</span>
          </div>
        </section>

        {/* Business Types Served in Noida & Delhi NCR */}
        <section className="container max-w-5xl px-4 py-12 border-t border-border/60">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Businesses &amp; Use Cases Served
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 mt-2">
              Tailored web development for local manufacturers, corporate consultancies, retailers, and educational institutes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm">
              <Building className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-sm font-bold text-foreground mb-2">Manufacturers &amp; B2B Exporters</h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Structured digital product catalogs and corporate showcases that convert prospective buyers into trade inquiries.
              </p>
              <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-cyan-400">
                <Link href="/services/website-development" className="hover:underline">B2B Website Service →</Link>
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm">
              <ShoppingBag className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-sm font-bold text-foreground mb-2">Retailers &amp; D2C Brands</h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Direct online web stores with Indian payment gateway integration (Razorpay/Cashfree) plus Amazon and Flipkart listing setup.
              </p>
              <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-cyan-400">
                <Link href="/services/ecommerce-development" className="hover:underline">E-commerce Service →</Link>
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm">
              <Briefcase className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-sm font-bold text-foreground mb-2">Professional Services &amp; Startups</h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Authoritative online presence for consultants, chartered accountants, and tech founders requiring high client trust.
              </p>
              <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-cyan-400">
                <Link href="/services/technical-seo" className="hover:underline">Technical SEO Service →</Link>
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm">
              <GraduationCap className="h-8 w-8 text-emerald-400 mb-4" />
              <h3 className="text-sm font-bold text-foreground mb-2">Colleges &amp; Training Institutes</h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Accessible institutional portals featuring prospectus downloads, admission enquiry capture, and notice bulletins.
              </p>
              <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-cyan-400">
                <Link href="/services/institutional-websites" className="hover:underline">Institutional Portals →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Local Buyer's Project Checklist */}
        <section className="container max-w-5xl px-4 py-12 border-t border-border/60">
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/10 p-6 sm:p-10 backdrop-blur-sm">
            <div className="max-w-2xl mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                <FileCheck className="h-4 w-4" /> Local Buyer&apos;s Checklist
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                What to Prepare Before Requesting a Website Quote
              </h2>
              <p className="text-xs sm:text-sm text-foreground/75 mt-1">
                Having these 4 items ready helps you receive an accurate, milestone-based proposal within 24 hours:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm text-foreground/80">
              <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/50 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">1. Core Objective &amp; Audience</p>
                  <p className="text-foreground/70 mt-1">Is the site primarily for capturing B2B inquiry leads, direct online payment checkout, or institutional authority?</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/50 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">2. Page Structure &amp; Features</p>
                  <p className="text-foreground/70 mt-1">Estimated page count (e.g., Home, Services, About, Contact, Catalog) and required features like WhatsApp chat or contact forms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/50 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">3. Brand Assets &amp; Content</p>
                  <p className="text-foreground/70 mt-1">Logo files, product/factory photos, or draft text. (If content is not ready, we define page outlines together).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/50 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">4. Launch Timeline &amp; Budget</p>
                  <p className="text-foreground/70 mt-1">Your target launch date and preferred budget tier so the technical scope can be aligned realistically.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Case Studies */}
        <section className="container max-w-5xl px-4 py-12 border-t border-border/60">
          <div className="max-w-2xl mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Verified Project Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 mt-1">
              Real projects shipped with clean architecture, verifiable results, and live demonstrations:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">E-commerce &amp; Catalog</span>
                <h3 className="text-base font-bold text-foreground mt-1 mb-2">Paras Metal</h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                  Transformed artisanal brass handicraft inventory into a structured product catalog with multi-channel operations across Amazon, Flipkart, and Meesho.
                </p>
              </div>
              <Link
                href="/projects/paras-metal"
                className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline"
              >
                Read Case Study →
              </Link>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Institutional Portal</span>
                <h3 className="text-base font-bold text-foreground mt-1 mb-2">DSR College</h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                  Built the official institutional portal (dsr.college) for a recognized teacher training college with prospectus downloads and admission enquiry workflows.
                </p>
              </div>
              <Link
                href="/projects/dsr-college"
                className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline"
              >
                Read Case Study →
              </Link>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Academic Publishing</span>
                <h3 className="text-base font-bold text-foreground mt-1 mb-2">Sanmati Journal</h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                  Engineered the digital publishing platform (sanmatijournal.in) for an international peer-reviewed journal with CrossRef DOI indexing and academic SEO.
                </p>
              </div>
              <Link
                href="/projects/sanmati-journal"
                className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline"
              >
                Read Case Study →
              </Link>
            </div>
          </div>
        </section>

        {/* Indicative Pricing Guidance */}
        <section className="container max-w-5xl px-4 py-12 border-t border-border/60">
          <div className="max-w-2xl mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Transparent Indicative Pricing
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 mt-1">
              Fixed, milestone-based quotes without surprise monthly hosting markups or agency overhead:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm">
              <h3 className="text-base font-bold text-foreground">Starter Business Website</h3>
              <div className="mt-3 text-2xl font-extrabold text-cyan-400">₹15,000 – ₹28,000</div>
              <p className="text-xs text-foreground/60 mt-1">Typical turnaround: 7–10 days</p>
              <ul className="mt-4 space-y-2 text-xs text-foreground/75">
                <li className="flex items-center gap-2">✓ 3 to 5 responsive pages</li>
                <li className="flex items-center gap-2">✓ Mobile-first Next.js architecture</li>
                <li className="flex items-center gap-2">✓ Working inquiry form &amp; WhatsApp</li>
                <li className="flex items-center gap-2">✓ Basic technical SEO setup</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-cyan-500/40 bg-cyan-950/20 p-6 backdrop-blur-sm relative">
              <span className="absolute -top-3 right-4 rounded-full bg-cyan-500 px-3 py-0.5 text-[10px] font-bold text-black uppercase tracking-wider">
                Most Popular
              </span>
              <h3 className="text-base font-bold text-foreground">Custom Corporate Portal</h3>
              <div className="mt-3 text-2xl font-extrabold text-cyan-400">₹30,000 – ₹65,000</div>
              <p className="text-xs text-foreground/60 mt-1">Typical turnaround: 2–3 weeks</p>
              <ul className="mt-4 space-y-2 text-xs text-foreground/75">
                <li className="flex items-center gap-2">✓ 6 to 12 custom pages &amp; galleries</li>
                <li className="flex items-center gap-2">✓ Dedicated service landing pages</li>
                <li className="flex items-center gap-2">✓ Lead qualification workflows</li>
                <li className="flex items-center gap-2">✓ Full Schema.org entity metadata</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm">
              <h3 className="text-base font-bold text-foreground">E-commerce &amp; Catalog</h3>
              <div className="mt-3 text-2xl font-extrabold text-cyan-400">₹45,000 – ₹1,20,000</div>
              <p className="text-xs text-foreground/60 mt-1">Typical turnaround: 3–4 weeks</p>
              <ul className="mt-4 space-y-2 text-xs text-foreground/75">
                <li className="flex items-center gap-2">✓ Online store with payment gateway</li>
                <li className="flex items-center gap-2">✓ Structured product catalog &amp; SKUs</li>
                <li className="flex items-center gap-2">✓ Amazon / Flipkart onboarding support</li>
                <li className="flex items-center gap-2">✓ Fast mobile checkout experience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="container max-w-5xl px-4 py-12 border-t border-border/60">
          <div className="max-w-2xl mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <HelpCircle className="h-4 w-4" /> Frequently Asked Questions
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Questions from Local Noida Businesses
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-border/70 bg-card/40 p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">
                Business ke liye website banwani hai? Project start karne ke liye kya details chahiye?
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                Website start karne ke liye aapko primarily 3 cheezein chahiye: (1) Aapka business overview aur target customers, (2) Jo pages aapko chahiye (jaise Home, Services, About, Contact, Gallery), aur (3) Logo aur content agar available hai. Agar content ready nahi hai, toh planning phase mein structure hum finalize kar lenge. Aap niche diye inquiry form ko submit kar sakte hain ya directly WhatsApp par connect kar sakte hain.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card/40 p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">
                Do you meet in person in Noida or work remotely?
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                I am based in and serve Noida and Delhi NCR. Project execution is handled remotely via Google Meet, email, and WhatsApp. This structure keeps development agile, eliminates agency overhead costs, and allows you to review interactive milestone previews on staging URLs from anywhere.
              </p>
            </div>

            <div className="rounded-xl border border-border/70 bg-card/40 p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">
                How do I start a project with you?
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                Simply share your requirements via the form below or on WhatsApp. Within 24 hours, I review your project scope and provide a clear milestone breakdown, timeline, and fixed price quote.
              </p>
            </div>
          </div>
        </section>

        {/* Client Inquiry Form Section */}
        <section id="inquiry" className="container max-w-4xl px-4 py-12 border-t border-border/60">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Discuss Your Noida Website Project
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 mt-2">
              Fill in your project requirements below to receive a direct milestone quote within 24 hours.
            </p>
          </div>

          <ServiceInquiryForm
            defaultCategory="Website Development"
            whatsappMessage="Hi Aradhy, I'm a business in Noida looking for freelance web development services."
          />
        </section>
      </main>
      <Footer />
      <MobileQuickContactBar />
    </>
  );
}
