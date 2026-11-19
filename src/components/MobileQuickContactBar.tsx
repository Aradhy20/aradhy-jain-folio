"use client";

import { MessageSquare, Calendar } from "lucide-react";
import { analytics } from "@/lib/analytics";

interface MobileQuickContactBarProps {
  whatsappNumber?: string;
}

export function MobileQuickContactBar({
  whatsappNumber = "917351522153",
}: MobileQuickContactBarProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Aradhy, I would like to book a free consultation and discuss a project for my business."
  )}`;

  const handleConsultationClick = () => {
    analytics.trackConsultationClick("mobile_sticky_bar", "Book Free Consultation");
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const selectElement = document.getElementById("contact-service") as HTMLSelectElement | null;
      if (selectElement) {
        selectElement.value = "Free 20-Min Project Consultation";
      }
      const nameInput = document.getElementById("contact-name") as HTMLInputElement | null;
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    }
  };

  return (
    <aside
      aria-label="Quick mobile contact bar"
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-background/95 backdrop-blur-xl border-t border-border/80 p-2.5 px-3 shadow-[0_-10px_35px_rgba(0,0,0,0.2)] pb-[calc(env(safe-area-inset-bottom,0px)+10px)]"
    >
      <div className="flex items-center justify-between gap-2 mb-1.5 px-1">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Guaranteed personal response within 24 hours
        </span>
        <span className="text-[10px] text-foreground/50 font-medium">India &amp; Global</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => analytics.trackWhatsAppClick("mobile_sticky_bar")}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-2.5 text-xs font-bold text-white shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare className="h-4 w-4 shrink-0" />
          <span>WhatsApp Chat</span>
        </a>

        <button
          type="button"
          onClick={handleConsultationClick}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2.5 text-xs font-bold text-white shadow-md shadow-cyan-500/20 active:scale-95 transition-transform"
        >
          <Calendar className="h-4 w-4 shrink-0" />
          <span>Free Consultation</span>
        </button>
      </div>
    </aside>
  );
}
