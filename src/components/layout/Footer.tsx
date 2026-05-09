import { PORTFOLIO_DATA } from "@/data";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container flex flex-col items-center justify-between gap-5 py-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-foreground/80">
            {PORTFOLIO_DATA.personalInfo.name}
          </p>
          <p className="text-sm text-foreground/55">
            © {currentYear} All rights reserved. Designed to impress in under five seconds.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/40 text-foreground/70 transition-all hover:-translate-y-0.5 hover:text-blue-600 dark:bg-white/5"
          >
            <FaLinkedinIn size={16} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={PORTFOLIO_DATA.personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/40 text-foreground/70 transition-all hover:-translate-y-0.5 hover:text-foreground dark:bg-white/5"
          >
            <FaGithub size={16} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/40 text-foreground/70 transition-all hover:-translate-y-0.5 hover:text-cyan-600 dark:bg-white/5"
          >
            <Mail size={18} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
