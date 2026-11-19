import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { serializeJsonLd } from "@/lib/jsonLd";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID, CLARITY_PROJECT_ID, GTM_CONTAINER_ID } from "@/lib/analytics";
import Script from "next/script";
import { SectionViewTracker } from "@/components/SectionViewTracker";
import { AnalyticsNavigationTracker } from "@/components/AnalyticsNavigationTracker";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { DeferredInteractiveWidgets } from "@/components/DeferredInteractiveWidgets";

const ParticlesBackground = dynamic(
  () => import("@/components/ParticlesBackground").then((mod) => mod.ParticlesBackground),
  { ssr: false }
);

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aradhy Jain | Web Developer, E-commerce & Digital Growth Specialist",
    template: "%s | Aradhy Jain",
  },
  description:
    "Aradhy Jain is a web developer in India building Next.js websites, e-commerce stores, marketplace solutions, and technical SEO and automation systems.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aradhy Jain | Web Developer, E-commerce & Digital Growth Specialist",
    description:
      "Engineering Websites, E-commerce Experiences & Digital Systems That Help Businesses Grow. Verified case studies: Paras Metal, Sanmati Journal, DSR College, and Pravaah UPSC.",
    url: "/",
    siteName: "Aradhy Jain Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/creator_card_portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Aradhy Jain — Web Developer & Digital Growth Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aradhy Jain | Web Developer, E-commerce & Digital Growth Specialist",
    description:
      "Engineering Websites, E-commerce Experiences & Digital Systems That Help Businesses Grow. Verified case studies: Paras Metal, Sanmati Journal, DSR College, and Pravaah UPSC.",
    images: ["/creator_card_portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "dGd6wgpc-PRWKzlt6iIg4Vx-XctikxGPd_6Q8-qoiIc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Aradhy Jain Portfolio",
        description:
          "Official portfolio, technical engineering case studies, and digital services of Aradhy Jain.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: "Aradhy Jain — Professional Profile & Case Studies",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Aradhy Jain",
        jobTitle: "Web Developer, E-commerce & Digital Growth Specialist",
        url: siteUrl,
        image: `${siteUrl}/creator_card_portrait.jpg`,
        email: "jainaradhy123@gmail.com",
        telephone: "+91-7351522153",
        sameAs: [
          "https://github.com/Aradhy20",
          "https://www.linkedin.com/in/aradhyjain",
        ],
        knowsAbout: [
          "Website Development",
          "Next.js Development",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "E-commerce Operations",
          "Marketplace Catalogue Optimization",
          "Amazon Seller Central",
          "Flipkart Marketplace",
          "Meesho Supplier Operations",
          "Technical SEO",
          "Core Web Vitals Optimization",
          "Python Automation",
          "Business Intelligence Dashboards",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Teerthanker Mahaveer University",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": `${siteUrl}/#offercatalog`,
          name: "Freelance Digital Services & Engineering Catalog",
          itemListElement: [
            {
              "@type": "Offer",
              "@id": `${siteUrl}/#offer-website-development`,
              url: `${siteUrl}/services/website-development`,
              itemOffered: {
                "@type": "Service",
                "@id": `${siteUrl}/#service-website-development`,
                name: "Website Development",
                description:
                  "Custom corporate websites, institutional portals, and high-performance web applications built with Next.js, React, and TypeScript.",
                serviceType: "Website Development",
                url: `${siteUrl}/services/website-development`,
                provider: {
                  "@id": `${siteUrl}/#person`,
                },
                areaServed: [
                  { "@type": "Country", "name": "India" },
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "United Arab Emirates" },
                  { "@type": "AdministrativeArea", "name": "Global" },
                ],
              },
            },
            {
              "@type": "Offer",
              "@id": `${siteUrl}/#offer-ecommerce-marketplace`,
              url: `${siteUrl}/services/ecommerce-development`,
              itemOffered: {
                "@type": "Service",
                "@id": `${siteUrl}/#service-ecommerce-marketplace`,
                name: "E-commerce & Marketplace Support",
                description:
                  "End-to-end e-commerce solutions, marketplace cataloging, and listing operations across Amazon, Flipkart, and Meesho.",
                serviceType: "E-commerce & Marketplace Operations",
                url: `${siteUrl}/services/ecommerce-development`,
                provider: {
                  "@id": `${siteUrl}/#person`,
                },
                areaServed: [
                  { "@type": "Country", "name": "India" },
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "United Arab Emirates" },
                  { "@type": "AdministrativeArea", "name": "Global" },
                ],
              },
            },
            {
              "@type": "Offer",
              "@id": `${siteUrl}/#offer-technical-seo`,
              url: `${siteUrl}/services/technical-seo`,
              itemOffered: {
                "@type": "Service",
                "@id": `${siteUrl}/#service-technical-seo`,
                name: "Technical SEO & Website Optimization",
                description:
                  "Core Web Vitals speed tuning, structured data JSON-LD implementation, crawl error remediation, and search visibility optimization.",
                serviceType: "Technical SEO & Website Optimization",
                url: `${siteUrl}/services/technical-seo`,
                provider: {
                  "@id": `${siteUrl}/#person`,
                },
                areaServed: [
                  { "@type": "Country", "name": "India" },
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "United Arab Emirates" },
                  { "@type": "AdministrativeArea", "name": "Global" },
                ],
              },
            },
            {
              "@type": "Offer",
              "@id": `${siteUrl}/#offer-ai-automation`,
              url: `${siteUrl}/services/ai-automation`,
              itemOffered: {
                "@type": "Service",
                "@id": `${siteUrl}/#service-ai-automation`,
                name: "AI & Python Automation",
                description:
                  "Automated ETL pipelines, web scraping, API workflows, and LLM integrations designed to eliminate operational overhead.",
                serviceType: "AI & Python Automation",
                url: `${siteUrl}/services/ai-automation`,
                provider: {
                  "@id": `${siteUrl}/#person`,
                },
                areaServed: [
                  { "@type": "Country", "name": "India" },
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "United Arab Emirates" },
                  { "@type": "AdministrativeArea", "name": "Global" },
                ],
              },
            },
            {
              "@type": "Offer",
              "@id": `${siteUrl}/#offer-data-analytics`,
              url: `${siteUrl}/services/data-analytics`,
              itemOffered: {
                "@type": "Service",
                "@id": `${siteUrl}/#service-data-analytics`,
                name: "Power BI & Data Analytics",
                description:
                  "Interactive executive KPI dashboards, star-schema data modeling, DAX measures, and automated reporting systems.",
                serviceType: "Power BI & Data Analytics",
                url: `${siteUrl}/services/data-analytics`,
                provider: {
                  "@id": `${siteUrl}/#person`,
                },
                areaServed: [
                  { "@type": "Country", "name": "India" },
                  { "@type": "Country", "name": "United States" },
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "United Arab Emirates" },
                  { "@type": "AdministrativeArea", "name": "Global" },
                ],
              },
            },
            {
              "@type": "Offer",
              "@id": `${siteUrl}/#offer-institutional-websites`,
              url: `${siteUrl}/services/institutional-websites`,
              itemOffered: {
                "@type": "Service",
                "@id": `${siteUrl}/#service-institutional-websites`,
                name: "Institutional & College Website Development",
                description:
                  "Mandatory regulatory compliance disclosures (NCTE/UGC), academic prospectus portals, and student admission workflows.",
                serviceType: "Institutional & College Website Development",
                url: `${siteUrl}/services/institutional-websites`,
                provider: {
                  "@id": `${siteUrl}/#person`,
                },
                areaServed: [
                  { "@type": "Country", "name": "India" },
                  { "@type": "AdministrativeArea", "name": "Global" },
                ],
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <AnalyticsNavigationTracker />
          </Suspense>
          <SectionViewTracker />
          <ParticlesBackground />
          {children}
          <DeferredInteractiveWidgets />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId={GTM_CONTAINER_ID} />
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `,
        }}
      />
    </html>
  );
}
