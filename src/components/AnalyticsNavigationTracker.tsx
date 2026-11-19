"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analytics } from "@/lib/analytics";

export function AnalyticsNavigationTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Initial page load is handled automatically by GoogleAnalytics
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const query = searchParams?.toString();
    const url = pathname + (query ? `?${query}` : "");
    analytics.trackPageView(window.location.origin + url);
  }, [pathname, searchParams]);

  return null;
}
