import { PORTFOLIO_DATA } from "@/data";
import { Mail, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-10 border-b border-foreground/10 text-xs sm:text-sm">
          {/* Column 1: Identity & Positioning */}
          <div className="space-y-3">
            <p className="text-base font-bold text-foreground">
              {PORTFOLIO_DATA.personalInfo.name}
            </p>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Professional Web Development, E-commerce Operations, Marketplace Cataloging & Technical SEO partner for growing businesses and institutions.
            </p>
            <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400">
              Delhi NCR, India · Available Worldwide
            </p>
          </div>

          {/* Column 2: Client Solutions & Packages */}
          <div className="space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">
              Services & Pricing
            </p>
            <ul className="space-y-2 text-foreground/75">
              <li>
                <Link href="/#services" className="hover:text-cyan-500 transition-colors">
                  Starter Business Website (₹18k+)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-cyan-500 transition-colors">
                  Custom Business Portal (₹38k+)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-cyan-500 transition-colors">
                  E-commerce & Marketplace Storefronts
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-cyan-500 transition-colors">
                  Technical SEO & Optimization
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-cyan-500 transition-colors">
                  Monthly Retainer & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Tools & Case Studies */}
          <div className="space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">
              Work & Tools
            </p>
            <ul className="space-y-2 text-foreground/75">
              <li>
                <Link href="/projects/paras-metal" className="hover:text-cyan-500 transition-colors">
                  Paras Metal (Marketplace Catalog)
                </Link>
              </li>
              <li>
                <Link href="/projects/sanmati-journal" className="hover:text-cyan-500 transition-colors">
                  Sanmati Journal (Publishing Portal)
                </Link>
              </li>
              <li>
                <Link href="/projects/dsr-college" className="hover:text-cyan-500 transition-colors">
                  DSR College (Institutional Website)
                </Link>
              </li>
              <li>
                <Link href="/#brief-builder" className="hover:text-cyan-500 transition-colors">
                  Project Brief & Proposal Generator
                </Link>
              </li>
              <li>
                <Link href="/#audit-tool" className="hover:text-cyan-500 transition-colors">
                  Free Live Website Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Direct Channels */}
          <div className="space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">
              Legal & Direct Connect
            </p>
            <ul className="space-y-2 text-foreground/75">
              <li>
                <Link href="/privacy" className="hover:text-cyan-500 transition-colors">
                  Privacy Policy (DPDP Compliant)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-500 transition-colors">
                  Terms of Service & Cost Transparency
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${PORTFOLIO_DATA.personalInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare size={13} className="text-emerald-500" />
                  <span>WhatsApp (+91-7351522153)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                  className="hover:text-cyan-500 transition-colors flex items-center gap-1.5"
                >
                  <Mail size={13} className="text-cyan-500" />
                  <span>{PORTFOLIO_DATA.personalInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-foreground/55 text-center md:text-left">
            © {currentYear} Aradhy Jain. All rights reserved. Zero-markup hosting policy · Indicative quotes based on validated scope.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-white/40 text-foreground/70 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:bg-white/5"
            >
              <FaLinkedinIn size={14} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-white/40 text-foreground/70 transition-all hover:-translate-y-0.5 hover:text-foreground dark:bg-white/5"
            >
              <FaGithub size={14} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-white/40 text-foreground/70 transition-all hover:-translate-y-0.5 hover:text-cyan-600 dark:bg-white/5"
            >
              <Mail size={15} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
