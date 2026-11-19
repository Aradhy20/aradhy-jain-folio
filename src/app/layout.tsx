import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Chatbot } from "@/components/Chatbot";
import { WhatsAppPopup } from "@/components/WhatsAppPopup";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { GTM_ID } from "@/lib/analytics";
import { SectionViewTracker } from "@/components/SectionViewTracker";

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
  title: "Aradhy Jain | Web Developer, E-commerce & Digital Growth Specialist",
  description:
    "I help businesses establish a stronger online presence through responsive websites, e-commerce solutions, marketplace catalogue optimization, technical SEO, digital marketing, and data-driven improvements.",
  keywords: [
    "Aradhy Jain",
    "Web Developer",
    "E-commerce Specialist",
    "Marketplace Catalogue Optimization",
    "Technical SEO",
    "Digital Growth",
    "Next.js Developer",
    "React Developer",
    "Python Automation",
    "Business Analytics",
    "Freelance Web Developer India",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aradhy Jain | Web Developer, E-commerce & Digital Growth Specialist",
    description:
      "I Build Websites, E-commerce Experiences & Digital Systems That Help Businesses Grow. Real case studies: Paras Metal, Sanmati Journal, and DSR College.",
    url: "/",
    siteName: "Aradhy Jain Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aradhy Jain | Web Developer, E-commerce & Digital Growth Specialist",
    description:
      "I Build Websites, E-commerce Experiences & Digital Systems That Help Businesses Grow. Real case studies: Paras Metal, Sanmati Journal, and DSR College.",
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
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Aradhy Jain",
        jobTitle: "Web Developer, E-commerce & Digital Growth Specialist",
        url: siteUrl,
        email: "jainaradhy123@gmail.com",
        telephone: "+91-7351522153",
        sameAs: [
          "https://github.com/Aradhy20",
          "https://www.linkedin.com/in/aradhyjain",
        ],
        knowsAbout: [
          "Website Development",
          "E-commerce Operations",
          "Marketplace Optimization",
          "Amazon & Flipkart Listing Support",
          "Technical SEO",
          "AI & Robotics Data Annotation",
          "Python Automation",
          "Business Intelligence Dashboards",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Teerthanker Mahaveer University",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Aradhy Jain — Digital Growth & Web Development",
        url: siteUrl,
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SectionViewTracker />
          <ParticlesBackground />
          {children}
          <Chatbot />
          <WhatsAppPopup />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
