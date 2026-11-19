export const GA_MEASUREMENT_ID = "G-QDMZLRNP6B";
export const CLARITY_PROJECT_ID = "zfwie8vxkv";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Dispatches an event to Google Analytics 4 (gtag.js).
 * Strictly filters out any potential Personally Identifiable Information (PII).
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | null | undefined>
) {
  if (typeof window === "undefined") return;

  const safeParams: Record<string, unknown> = {};
  if (params) {
    const disallowedKeys = [
      "email",
      "name",
      "phone",
      "telephone",
      "mobile",
      "message",
      "company",
      "address",
      "password",
      "token",
    ];
    for (const [key, value] of Object.entries(params)) {
      if (
        !disallowedKeys.includes(key.toLowerCase()) &&
        value !== undefined &&
        value !== null
      ) {
        safeParams[key] = value;
      }
    }
  }

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, safeParams);
    } catch {
      // Fallback
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...safeParams });
    }
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...safeParams });
  }
}

export const analytics = {
  // 1. Page View (for client-side App Router transitions)
  trackPageView: (url: string, title?: string) => {
    trackEvent("page_view", {
      page_location: url,
      page_title: title || (typeof document !== "undefined" ? document.title : undefined),
    });
  },

  // 2. Scroll (section visibility)
  trackScroll: (sectionName: string) => {
    trackEvent("scroll", {
      section_name: sectionName,
    });
  },

  // 3. Click Email
  trackEmailClick: (location: string) => {
    trackEvent("click_email", {
      click_location: location,
    });
  },

  // 4. Click WhatsApp
  trackWhatsAppClick: (location: string) => {
    trackEvent("click_whatsapp", {
      click_location: location,
    });
  },

  // 5. Contact Form Submit (success only)
  trackContactFormSubmit: (metadata?: {
    serviceCategory?: string;
    budgetRange?: string;
    timeline?: string;
  }) => {
    trackEvent("contact_form_submit", {
      service_category: metadata?.serviceCategory,
      budget_range: metadata?.budgetRange,
      timeline: metadata?.timeline,
      status: "success",
    });
  },

  // 6. Resume Download
  trackResumeDownload: (location: string) => {
    trackEvent("resume_download", {
      file_name: "Aradhy_Jain_Resume.pdf",
      click_location: location,
    });
  },

  // 7. Project View
  trackProjectView: (
    projectTitle: string,
    projectSlug: string,
    action: "case_study_page" | "modal_view" | "live_site"
  ) => {
    trackEvent("project_view", {
      project_title: projectTitle,
      project_slug: projectSlug,
      action_type: action,
    });
  },

  // 8. Contact CTA Click
  trackContactCtaClick: (ctaLabel: string, ctaLocation: string) => {
    trackEvent("contact_cta_click", {
      cta_label: ctaLabel,
      cta_location: ctaLocation,
    });
  },
};
