"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

export function SectionViewTracker() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const sections = ["projects", "services", "about", "contact"];
    const viewedSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && !viewedSections.has(id)) {
              viewedSections.add(id);
              analytics.trackSectionView(id);
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
