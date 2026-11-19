import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Web Development & Digital Growth Services",
  description:
    "Hire Aradhy Jain for custom website development, e-commerce storefronts, marketplace catalog optimization (Amazon, Flipkart, Meesho), technical SEO, and automated reporting. Transparent milestones & zero hosting markup.",
  alternates: {
    canonical: "/freelance",
  },
  openGraph: {
    title: "Freelance Web Development & Digital Growth Services | Aradhy Jain",
    description:
      "Custom responsive websites, e-commerce solutions, marketplace operations (Amazon, Flipkart, Meesho), and technical SEO. Transparent pricing and verified deliverables.",
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
      "Custom responsive websites, e-commerce solutions, marketplace operations (Amazon, Flipkart, Meesho), and technical SEO. Transparent pricing and verified deliverables.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
