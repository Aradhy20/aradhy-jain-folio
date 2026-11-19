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
 * Dispatches an event to Google Analytics 4 (gtag.js) and dataLayer.
 * Strictly filters out any potential Personally Identifiable Information (PII)
 * such as names, emails, phone numbers, passwords, and message contents.
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
      "clientname",
      "user_name",
      "user_email",
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

  // Safe developer inspection log
  if (process.env.NODE_ENV !== "production") {
    console.log(`[GA4 Event] ${eventName}`, safeParams);
  }

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, safeParams);
    } catch {
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

  // 3. Email Click (GA4 standard click event)
  trackEmailClick: (location: string) => {
    trackEvent("email_click", {
      click_location: location,
    });
  },

  // 4. WhatsApp Click (High-intent conversion event)
  trackWhatsAppClick: (location: string) => {
    trackEvent("whatsapp_click", {
      click_location: location,
    });
  },

  // 5. Consultation Click (Free 20-min consultation CTA)
  trackConsultationClick: (location: string, label: string = "Book a Free Consultation") => {
    trackEvent("consultation_click", {
      click_location: location,
      cta_label: label,
    });
  },

  // 6. Form Start (Fires when user begins typing or focuses in inquiry form)
  trackFormStart: (formName: string) => {
    trackEvent("form_start", {
      form_name: formName,
    });
  },

  // 7. Form Submit (Fires when user attempts to submit the inquiry form)
  trackFormSubmit: (formName: string, serviceCategory?: string) => {
    trackEvent("form_submit", {
      form_name: formName,
      service_category: serviceCategory,
    });
  },

  // 8. Generate Lead (Primary conversion event upon successful inquiry response)
  trackGenerateLead: (metadata?: {
    serviceCategory?: string;
    budgetRange?: string;
    timeline?: string;
    formSource?: string;
  }) => {
    trackEvent("generate_lead", {
      service_category: metadata?.serviceCategory,
      budget_range: metadata?.budgetRange,
      timeline: metadata?.timeline,
      form_source: metadata?.formSource || "website_inquiry",
      currency: "INR",
    });
  },

  // 9. Case Study / Project Click
  trackProjectCaseStudyClick: (
    projectTitle: string,
    projectSlug: string,
    clickType: "case_study" | "live_site" | "github" = "case_study"
  ) => {
    trackEvent("project_case_study_click", {
      project_title: projectTitle,
      project_slug: projectSlug,
      click_type: clickType,
    });
  },

  // Backward compatibility alias methods
  trackContactFormSubmit: (metadata?: {
    serviceCategory?: string;
    budgetRange?: string;
    timeline?: string;
  }) => {
    trackEvent("generate_lead", {
      service_category: metadata?.serviceCategory,
      budget_range: metadata?.budgetRange,
      timeline: metadata?.timeline,
      status: "success",
    });
    trackEvent("contact_form_submit", {
      service_category: metadata?.serviceCategory,
      budget_range: metadata?.budgetRange,
      timeline: metadata?.timeline,
      status: "success",
    });
  },

  trackResumeDownload: (location: string) => {
    trackEvent("resume_download", {
      file_name: "Aradhy_Jain_Resume.pdf",
      click_location: location,
    });
  },

  trackProjectView: (
    projectTitle: string,
    projectSlug: string,
    action: "case_study_page" | "modal_view" | "live_site"
  ) => {
    trackEvent("project_case_study_click", {
      project_title: projectTitle,
      project_slug: projectSlug,
      click_type: action,
    });
    trackEvent("project_view", {
      project_title: projectTitle,
      project_slug: projectSlug,
      action_type: action,
    });
  },

  trackContactCtaClick: (ctaLabel: string, ctaLocation: string) => {
    trackEvent("contact_cta_click", {
      cta_label: ctaLabel,
      cta_location: ctaLocation,
    });
    if (ctaLabel.toLowerCase().includes("consultation")) {
      trackEvent("consultation_click", {
        click_location: ctaLocation,
        cta_label: ctaLabel,
      });
    }
  },
};
