# Ongoing SEO, Core Web Vitals & AI Search Maintenance Plan

**Project:** Aradhy Jain Portfolio  
**Target Domain:** `https://aradhy-jain-portfolio.vercel.app/`  
**Review Cycle:** Weekly Diagnostics & Monthly Strategic Review  

---

## 1. Weekly Maintenance Routine (15 Minutes)

### A. Google Search Console & Bing Health Check
- [ ] **Indexing Status:** Check **Pages** tab for unexpected 404s, 5xx server errors, or redirect loops.
- [ ] **Performance Monitor:** Review click-through rates (CTR) and average ranking position for brand keywords ("Aradhy Jain", "Aradhy Jain Web Developer").
- [ ] **Search Queries:** Identify newly ranking impressions and long-tail commercial queries (e.g., "marketplace cataloging expert india", "Next.js freelance developer").

### B. Live Uptime & Endpoint Verification
- [ ] Verify `https://aradhy-jain-portfolio.vercel.app/` responds with `HTTP 200`.
- [ ] Verify `https://aradhy-jain-portfolio.vercel.app/robots.txt` is accessible and valid.
- [ ] Verify `https://aradhy-jain-portfolio.vercel.app/sitemap.xml` returns valid XML.
- [ ] Verify `https://aradhy-jain-portfolio.vercel.app/google80fa28b362283c56.html` returns `HTTP 200` to prevent accidental de-verification.

### C. GA4 Realtime & Conversion Integrity
- [ ] Verify active users are recorded in GA4 Realtime report.
- [ ] Verify conversion events (`contact_form_submit`, `click_whatsapp`, `click_email`, `resume_download`) fire without payload errors.

---

## 2. Monthly Maintenance Routine (45 Minutes)

### A. Core Web Vitals Audit (Google PageSpeed Insights)
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/) for both Mobile and Desktop.
- [ ] **Largest Contentful Paint (LCP):** Target $\le 2.5\text{s}$. If LCP increases, inspect hero image formats or Three.js loading.
- [ ] **Interaction to Next Paint (INP):** Target $\le 200\text{ms}$. Ensure main-thread JavaScript tasks remain lightweight.
- [ ] **Cumulative Layout Shift (CLS):** Target $\le 0.1$. Confirm all dynamic images have explicit aspect ratios.

### B. Schema & Rich Results Validation
- [ ] Run homepage and a project page through [Google Rich Results Test](https://search.google.com/test/rich-results).
- [ ] Ensure `Person`, `ProfilePage`, `WebSite`, and `TechArticle` schemas pass with zero critical errors.

### C. Sitemaps & New Content Updates
- [ ] Whenever a new client project or case study is completed:
  1. Add verified data to `PORTFOLIO_DATA.projects` in `src/data/index.ts`.
  2. Set explicit `lastModified` ISO timestamp.
  3. Run `npm run build` to pre-render the static page.
  4. Deploy to Vercel and request immediate URL indexing in Google Search Console.

---

## 3. Off-Page & Authority Building Guidelines (White-Hat Only)

### A. Professional Profile Consistency
Maintain consistent name, professional title, and canonical website link across:
- **GitHub:** Link to `https://aradhy-jain-portfolio.vercel.app/` in profile bio and repository descriptions.
- **LinkedIn:** Feature `https://aradhy-jain-portfolio.vercel.app/` in contact info and featured portfolio section.
- **Client Platforms:** When launching client websites (with client permission), include a discreet footer colophon:  
  *“Crafted by [Aradhy Jain](https://aradhy-jain-portfolio.vercel.app/)”*.

### B. Prohibited Practices (Google Anti-Spam Compliance)
- ❌ **Never purchase backlinks** or participate in private blog networks (PBNs).
- ❌ **Never spam forum comments or social media groups** with automated links.
- ❌ **Never publish AI-generated keyword-stuffed thin articles** or doorway pages.
- ❌ **Never use deceptive review or star-rating schema** for non-existent public reviews.
