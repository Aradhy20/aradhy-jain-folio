import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { SectionViewTracker } from "@/components/SectionViewTracker";
import { AnalyticsNavigationTracker } from "@/components/AnalyticsNavigationTracker";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Chatbot = dynamic(
  () => import("@/components/Chatbot").then((mod) => mod.Chatbot),
  { ssr: false }
);

const WhatsAppPopup = dynamic(
  () => import("@/components/WhatsAppPopup").then((mod) => mod.WhatsAppPopup),
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
    "Portfolio and verified engineering case studies of Aradhy Jain — Web Developer, E-commerce Specialist, and Digital Systems Consultant based in India. Engineering high-performance Next.js websites, multi-channel marketplace operations (Amazon, Flipkart, Meesho), technical SEO, and automation.",
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
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Aradhy Jain — Digital Growth & Web Development",
        url: siteUrl,
        image: `${siteUrl}/creator_card_portrait.jpg`,
        description:
          "I help businesses establish a stronger online presence through responsive websites, e-commerce solutions, marketplace catalogue optimization, technical SEO, digital marketing, and data-driven improvements.",
        provider: {
          "@id": `${siteUrl}/#person`,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "AdministrativeArea",
            name: "Global",
          },
        ],
        serviceType: [
          "Website Development",
          "E-commerce & Marketplace Support",
          "SEO & Website Optimization",
          "Digital Marketing & Analytics",
          "Python, Data & Automation",
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          <Chatbot />
          <WhatsAppPopup />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
