"use client";

import { PORTFOLIO_DATA } from "@/data";
import { motion } from "framer-motion";
import { Bookmark, Check, MessageSquare } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CreatorProfileCardProps {
  className?: string;
}

export function CreatorProfileCard({ className = "" }: CreatorProfileCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Check persisted bookmark state on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("aradhy_creator_card_saved");
      if (saved === "true") {
        setIsBookmarked(true);
      }
    } catch {
      // Ignore localStorage restrictions if any
    }
  }, []);

  const handleBookmarkToggle = async () => {
    const nextState = !isBookmarked;
    setIsBookmarked(nextState);

    try {
      localStorage.setItem("aradhy_creator_card_saved", String(nextState));
    } catch {
      // Ignore
    }

    // Copy contact link or details to clipboard as a helpful utility
    const profileUrl = typeof window !== "undefined" ? window.location.origin : "https://aradhyjain.vercel.app";
    const shareText = `Aradhy Jain — Web Developer, E-commerce & Digital Growth Specialist\nEmail: ${PORTFOLIO_DATA.personalInfo.email}\nPortfolio: ${profileUrl}`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareText);
        setToastMessage(nextState ? "Profile Bookmarked & Contact Copied!" : "Bookmark Removed");
      } else {
        setToastMessage(nextState ? "Profile Bookmarked!" : "Bookmark Removed");
      }
    } catch {
      setToastMessage(nextState ? "Profile Bookmarked!" : "Bookmark Removed");
    }

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2800);
  };

  return (
    <div
      className={`relative w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] mx-auto select-none ${className}`}
    >
      {/* Outer Card Glow Halo */}
      <div className="absolute -inset-1 rounded-[36px] bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.35),_transparent_70%)] opacity-70 blur-xl pointer-events-none" />

      {/* Main Card Surface */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="relative rounded-[32px] border border-cyan-500/25 bg-[#060913] p-2.5 sm:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(6,182,212,0.12)] backdrop-blur-2xl overflow-hidden group transition-all duration-300"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,_rgba(6,182,212,0.14),_transparent_55%)]" />

        {/* Top Header Bar */}
        <div className="relative z-30 flex items-center justify-between px-3.5 pt-2 pb-2">
          {/* Top-Left: "Contact" Link */}
          <a
            href="#contact"
            className="group/contact inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-300 backdrop-blur-md transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Contact</span>
            <span className="text-[10px] text-cyan-400 transition-transform group-hover/contact:translate-x-0.5">
              →
            </span>
          </a>

          {/* Top-Right: Glowing Turquoise Dot Accent */}
          <div className="flex items-center gap-2" title="Available for Client Projects">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-cyan-400/80 hidden sm:inline-block">
              Available
            </span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            </span>
          </div>
        </div>

        {/* Portrait & Interaction Canvas */}
        <div className="relative mt-1 aspect-[1/1.28] w-full overflow-hidden rounded-[24px] bg-[#03060f]">
          {/* Creator Portrait Image */}
          <Image
            src="/creator_card_portrait.jpg"
            alt="Aradhy Jain — Web Developer, E-commerce & Digital Growth Specialist"
            fill
            sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, 360px"
            priority
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Circular Bookmark / Save Button (Overlapping upper-right of portrait area) */}
          <button
            type="button"
            onClick={handleBookmarkToggle}
            aria-label={isBookmarked ? "Remove bookmark" : "Save Aradhy's profile and copy contact"}
            title={isBookmarked ? "Profile Saved" : "Bookmark Profile & Copy Contact"}
            className="absolute top-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white shadow-2xl backdrop-blur-xl transition-all duration-200 hover:scale-110 hover:border-cyan-400/60 hover:bg-black/65 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-95"
          >
            {isBookmarked ? (
              <Bookmark className="h-5 w-5 fill-cyan-400 text-cyan-400 transition-colors" />
            ) : (
              <Bookmark className="h-5 w-5 text-white/90 transition-colors group-hover:text-cyan-300" />
            )}
          </button>

          {/* Toast Notification for Bookmark / Copy Action */}
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute top-16 right-4 z-40 flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-[#070b16]/95 px-3 py-2 text-xs font-semibold text-cyan-300 shadow-2xl backdrop-blur-md"
            >
              <Check size={14} className="text-emerald-400" />
              <span>{toastMessage}</span>
            </motion.div>
          )}

          {/* Subtle Bottom Ambient Gradient Overlay for Text Readability */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060913] via-[#060913]/60 to-transparent" />

          {/* Bottom Card Identity Details */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 drop-shadow-[0_2px_8px_rgba(6,182,212,0.8)]">
                  Aradhy Jain
                </p>
                <h3 className="mt-0.5 text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                  Web Developer
                </h3>
                <p className="text-[11px] text-slate-300/85 leading-tight mt-0.5">
                  E-commerce & Digital Growth Specialist
                </p>
              </div>

              {/* Quick Inquiry CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/15 px-3 py-1.5 text-[11px] font-semibold text-cyan-300 shadow-sm backdrop-blur-md transition-all hover:bg-cyan-500/25 hover:scale-105 active:scale-95"
              >
                <MessageSquare size={12} />
                <span>Hire</span>
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Bottom Glow Accent Line */}
        <div className="mt-2 flex items-center justify-center px-4 py-1">
          <div className="h-[2px] w-20 rounded-full bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent transition-all duration-500 group-hover:w-36 group-hover:via-cyan-400" />
        </div>
      </motion.div>
    </div>
  );
}
