import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Chatbot } from "@/components/Chatbot";
import { WhatsAppPopup } from "@/components/WhatsAppPopup";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
  title: "Aradhy Jain | Full-Stack Developer & Freelance Digital Solutions",
  description:
    "Full-Stack Web Developer, E-commerce Specialist, and Digital Solutions Provider. I build high-performance websites, online storefronts, SEO strategies, data dashboards, and automated AI systems.",
  keywords: [
    "Aradhy Jain",
    "Full-Stack Developer",
    "Freelance Web Developer",
    "E-commerce Developer",
    "Next.js Developer",
    "React Developer",
    "Technical SEO",
    "Data Analytics",
    "Power BI",
    "Python Automation",
    "AI & Machine Learning",
  ],
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  openGraph: {
    title: "Aradhy Jain | Full-Stack Developer & Freelance Digital Solutions",
    description:
      "Turning ideas into high-impact digital experiences. Full-stack websites, e-commerce storefronts, analytics dashboards, and automation systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aradhy Jain | Full-Stack Developer & Freelance Digital Solutions",
    description:
      "Turning ideas into high-impact digital experiences. Full-stack websites, e-commerce storefronts, analytics dashboards, and automation systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
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
