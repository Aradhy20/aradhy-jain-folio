import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ParticlesBackground } from "@/components/ParticlesBackground";

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
  title: "Aradhy Jain | AI Engineer Portfolio",
  description:
    "Premium portfolio of Aradhy Jain, an AI Engineer and NLP Specialist focused on LLMs, prompt engineering, and building intelligent data-driven applications.",
  keywords: [
    "Aradhy Jain",
    "AI Engineer Portfolio",
    "Python",
    "SQL",
    "Power BI",
    "NLP",
    "Machine Learning",
  ],
  metadataBase: new URL("https://portfolio.vercel.app"),
  openGraph: {
    title: "Aradhy Jain | AI Engineer Portfolio",
    description:
      "Building intelligent AI systems and NLP solutions with LLMs, prompt engineering, and advanced data analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aradhy Jain | AI Engineer Portfolio",
    description:
      "Building intelligent AI systems and NLP solutions with LLMs, prompt engineering, and advanced data analytics.",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
