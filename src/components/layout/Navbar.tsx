"use client";

import { NAV_LINKS, PORTFOLIO_DATA } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all md:px-6 ${
          isScrolled
            ? "border-white/15 bg-background/80 shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur-2xl dark:bg-slate-950/70"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#hero" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold shadow-lg backdrop-blur-xl dark:bg-white/5">
            AJ
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide">{PORTFOLIO_DATA.personalInfo.name}</p>
            <p className="text-xs text-foreground/60">AI Engineer Portfolio</p>
          </div>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {mounted ? (
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-foreground/80 transition-all hover:scale-[1.03] hover:text-foreground dark:bg-white/5"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          ) : null}

          <button
            type="button"
            aria-label="Open navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-foreground/80 transition-colors hover:text-foreground md:hidden dark:bg-white/5"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-white/15 bg-background/90 p-4 shadow-2xl backdrop-blur-2xl md:hidden dark:bg-slate-950/90"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/75 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
