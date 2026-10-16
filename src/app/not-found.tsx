import Link from "next/link";
import { Home, Briefcase, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 py-24 text-foreground">
      <div className="max-w-md w-full text-center panel rounded-[2.5rem] p-8 sm:p-12 border border-border/80 shadow-2xl backdrop-blur-2xl">
        <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          Error 404
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
          The page you are looking for doesn&apos;t exist, was moved, or has an updated link.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02]"
          >
            <Home size={16} />
            Return to Homepage
          </Link>

          <Link
            href="/#projects"
            className="flex items-center justify-center gap-2 rounded-full border border-border/80 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-cyan-500/50"
          >
            <Briefcase size={16} />
            View Selected Case Studies
          </Link>

          <Link
            href="/#contact"
            className="flex items-center justify-center gap-2 rounded-full border border-border/80 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-cyan-500/50"
          >
            <Mail size={16} />
            Contact Aradhy Jain
          </Link>
        </div>
      </div>
    </main>
  );
}
