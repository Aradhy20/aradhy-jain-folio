import type { Metadata } from "next";
import { serializeJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Hire a Freelance Web Developer in India",
  description:
    "Hire Aradhy Jain, an independent freelance web developer based in Noida/Delhi NCR serving businesses across India and remotely. Custom Next.js websites, e-commerce, and technical SEO.",
  alternates: {
    canonical: "/freelance",
  },
  openGraph: {
    title: "Freelance Web Development & Digital Growth Services | Aradhy Jain",
    description:
      "Hire Aradhy Jain for custom Next.js websites, e-commerce stores, marketplace cataloging, technical SEO, and automation with transparent milestone pricing.",
    url: "/freelance",
    type: "website",
    images: [
      {
        url: "/creator_card_portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Aradhy Jain — Freelance Web Developer & Digital Growth Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Development & Digital Growth Services | Aradhy Jain",
    description:
      "Hire Aradhy Jain for custom Next.js websites, e-commerce stores, marketplace cataloging, technical SEO, and automation with transparent milestone pricing.",
    images: ["/creator_card_portrait.jpg"],
  },
};

export default function FreelanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/freelance/#breadcrumb`,
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
        "name": "Freelance Services",
        "item": `${siteUrl}/freelance`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
