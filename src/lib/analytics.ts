export const GTM_ID = "GTM-57JWHC7B";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dispatches an event to Google Tag Manager dataLayer and gtag.js if available.
 * Strips any potential PII (emails, names, phone numbers, message bodies).
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

  // Push to GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...safeParams,
  });

  // Call gtag if initialized
  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, safeParams);
    } catch {
      // Ignore if gtag is not ready
    }
  }
}

export const analytics = {
  // Page / Section Impression Tracking
  trackSectionView: (sectionName: string) => {
    trackEvent("section_view", {
      section_name: sectionName,
    });
  },

  // Conversions
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

  trackEmailClick: (location: string) => {
    trackEvent("email_click", {
      click_location: location,
    });
  },

  trackWhatsAppClick: (location: string) => {
    trackEvent("whatsapp_click", {
      click_location: location,
    });
  },

  trackResumeDownload: (location: string) => {
    trackEvent("resume_download", {
      file_name: "Aradhy_Jain_Resume.pdf",
      click_location: location,
    });
  },

  trackProjectClick: (
    projectTitle: string,
    projectSlug: string,
    action: "view_case_study" | "quick_view" | "live_site" | "github"
  ) => {
    trackEvent("project_case_study_click", {
      project_title: projectTitle,
      project_slug: projectSlug,
      action_type: action,
    });
  },

  trackCtaClick: (ctaLabel: string, ctaLocation: string) => {
    trackEvent("portfolio_cta_click", {
      cta_label: ctaLabel,
      cta_location: ctaLocation,
    });
  },
};
