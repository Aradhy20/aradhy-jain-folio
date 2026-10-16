import { LoadingScreen } from "@/components/LoadingScreen";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { CommercialServices } from "@/components/sections/CommercialServices";
import { ClientLeadTools } from "@/components/sections/ClientLeadTools";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { Certifications } from "@/components/sections/Certifications";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { CursorGlow } from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
      <LoadingScreen />
      <CursorGlow />

      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.14),transparent_24%)] dark:bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.16),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(148,163,184,0.08)_46%,transparent)]" />
      </div>

      <Navbar />

      <div className="relative">
        {/* 1. Attention: Headline, Positioning, 3D Hero */}
        <Hero />

        {/* 2. Proof: Paras Metal, Sanmati Journal, DSR College & Case Studies */}
        <Projects />

        {/* 3. Service Selection: Focused Commercial Offerings */}
        <CommercialServices />

        {/* 4. AI Lead Generation Tools: Website Audit & Brief Assistant */}
        <ClientLeadTools />

        {/* 5. Trust & Background */}
        <About />
        <Experience />
        <Skills />
        <DashboardSection />
        <Certifications />
        <Blog />

        {/* 6. Conversion: Inquiry Form & Direct Channels */}
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
