# Schema.org Structured Data Validation Report

**Project:** Aradhy Jain Portfolio  
**Target Domain:** `https://aradhy-jain-portfolio.vercel.app/`  
**Repository:** `https://github.com/Aradhy20/aradhy-jain-folio`  
**Framework:** Next.js 14.2.16 (App Router)  
**Date:** November 19, 2026  
**Status:** Validated & Compliant (Schema.org / Google Rich Results Standards)

---

## Executive Summary

During Schema.org markup validation, the `ProfessionalService` entity originally present in `src/app/layout.tsx` was flagged as invalid. In the Schema.org specification:
- `ProfessionalService` is a subtype of `LocalBusiness` / `Organization`.
- Properties `provider` and `serviceType` are not supported directly on `ProfessionalService` (or `Organization`), as organizations are providers, not services themselves.
- Modeling an individual independent freelancer as an autonomous corporate organization created entity ambiguity between the `Person` entity and the `ProfessionalService` entity.

To resolve these errors cleanly and maintain schema integrity:
1. **Invalid `ProfessionalService` Removed:** Replaced with the canonical individual freelancer pattern: `Person` ➔ `hasOfferCatalog` ➔ `OfferCatalog` ➔ `itemListElement: [Offer]` with each `itemOffered` defined as a valid `Service`.
2. **Top-Level Graph Disambiguation:** Connected `WebSite`, `ProfilePage`, and `Person` via deterministic `@id` URI fragments.
3. **Project Case Study Article Schema Normalized:** Updated `TechArticle` / `CreativeWork` schemas on `/projects/[slug]` to reference the root author `#person` and `#website` by ID, removed hardcoded placeholder dates (`datePublished: "2026-01-01"`), and assigned unique `@id`s to all `BreadcrumbList` instances.
4. **Honest Representation:** Zero artificial ratings, zero fake aggregate reviews, zero speculative pricing guarantees.

---

## Entity Relationship Architecture

The validated graph forms a single, unambiguous knowledge tree:

```
[WebSite: #website]
  └── publisher ───────► [Person: #person] ◄────── author ────── [TechArticle: /projects/[slug]/#article]
                            │                                     │
[ProfilePage: #profilepage] │                                     └── isPartOf ──► [WebSite: #website]
  ├── isPartOf ─────────────┘
  └── mainEntity ───────────► [hasOfferCatalog: #offercatalog]
                                │
                                ├── [Offer 1: #offer-website-development]
                                │     └── itemOffered: Service (#service-website-development)
                                ├── [Offer 2: #offer-ecommerce-marketplace]
                                │     └── itemOffered: Service (#service-ecommerce-marketplace)
                                ├── [Offer 3: #offer-technical-seo]
                                │     └── itemOffered: Service (#service-technical-seo)
                                ├── [Offer 4: #offer-digital-marketing]
                                │     └── itemOffered: Service (#service-digital-marketing)
                                └── [Offer 5: #offer-python-automation]
                                      └── itemOffered: Service (#service-python-automation)
```

---

## Detailed Entity Specifications

### 1. Root Entity: `WebSite` (`src/app/layout.tsx`)
```json
{
  "@type": "WebSite",
  "@id": "https://aradhy-jain-portfolio.vercel.app/#website",
  "url": "https://aradhy-jain-portfolio.vercel.app",
  "name": "Aradhy Jain Portfolio",
  "description": "Official portfolio, technical engineering case studies, and digital services of Aradhy Jain.",
  "publisher": {
    "@id": "https://aradhy-jain-portfolio.vercel.app/#person"
  },
  "inLanguage": "en-US"
}
```

### 2. Root Entity: `ProfilePage` (`src/app/layout.tsx`)
```json
{
  "@type": "ProfilePage",
  "@id": "https://aradhy-jain-portfolio.vercel.app/#profilepage",
  "url": "https://aradhy-jain-portfolio.vercel.app",
  "name": "Aradhy Jain — Professional Profile & Case Studies",
  "isPartOf": {
    "@id": "https://aradhy-jain-portfolio.vercel.app/#website"
  },
  "mainEntity": {
    "@id": "https://aradhy-jain-portfolio.vercel.app/#person"
  }
}
```

### 3. Root Entity: `Person` with `OfferCatalog` (`src/app/layout.tsx`)
```json
{
  "@type": "Person",
  "@id": "https://aradhy-jain-portfolio.vercel.app/#person",
  "name": "Aradhy Jain",
  "url": "https://aradhy-jain-portfolio.vercel.app",
  "jobTitle": "Web Developer & Digital Growth Consultant",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "@id": "https://aradhy-jain-portfolio.vercel.app/#offercatalog",
    "name": "Freelance Digital Services & Engineering Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "@id": "https://aradhy-jain-portfolio.vercel.app/#offer-website-development",
        "itemOffered": {
          "@type": "Service",
          "@id": "https://aradhy-jain-portfolio.vercel.app/#service-website-development",
          "name": "Website Development",
          "description": "Custom corporate websites, institutional portals, and high-performance web applications built with Next.js, React, and TypeScript.",
          "serviceType": "Website Development",
          "provider": { "@id": "https://aradhy-jain-portfolio.vercel.app/#person" },
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "AdministrativeArea", "name": "Global" }
          ]
        }
      },
      {
        "@type": "Offer",
        "@id": "https://aradhy-jain-portfolio.vercel.app/#offer-ecommerce-marketplace",
        "itemOffered": {
          "@type": "Service",
          "@id": "https://aradhy-jain-portfolio.vercel.app/#service-ecommerce-marketplace",
          "name": "E-commerce & Marketplace Support",
          "description": "End-to-end e-commerce solutions, marketplace cataloging, and listing operations across Amazon, Flipkart, and Meesho.",
          "serviceType": "E-commerce & Marketplace Operations",
          "provider": { "@id": "https://aradhy-jain-portfolio.vercel.app/#person" },
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "AdministrativeArea", "name": "Global" }
          ]
        }
      },
      {
        "@type": "Offer",
        "@id": "https://aradhy-jain-portfolio.vercel.app/#offer-technical-seo",
        "itemOffered": {
          "@type": "Service",
          "@id": "https://aradhy-jain-portfolio.vercel.app/#service-technical-seo",
          "name": "Technical SEO & Website Optimization",
          "description": "Core Web Vitals speed tuning, structured data JSON-LD implementation, crawl error remediation, and search visibility optimization.",
          "serviceType": "Technical SEO & Website Optimization",
          "provider": { "@id": "https://aradhy-jain-portfolio.vercel.app/#person" },
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "AdministrativeArea", "name": "Global" }
          ]
        }
      },
      {
        "@type": "Offer",
        "@id": "https://aradhy-jain-portfolio.vercel.app/#offer-digital-marketing",
        "itemOffered": {
          "@type": "Service",
          "@id": "https://aradhy-jain-portfolio.vercel.app/#service-digital-marketing",
          "name": "Digital Marketing & Analytics",
          "description": "Digital growth strategy, conversion tracking, Google Analytics 4 implementation, and performance optimization.",
          "serviceType": "Digital Marketing & Analytics",
          "provider": { "@id": "https://aradhy-jain-portfolio.vercel.app/#person" },
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "AdministrativeArea", "name": "Global" }
          ]
        }
      },
      {
        "@type": "Offer",
        "@id": "https://aradhy-jain-portfolio.vercel.app/#offer-python-automation",
        "itemOffered": {
          "@type": "Service",
          "@id": "https://aradhy-jain-portfolio.vercel.app/#service-python-automation",
          "name": "Python, Data & Automation",
          "description": "Automated ETL pipelines, reporting workflows, data cleaning, and business intelligence dashboards using Python and SQL.",
          "serviceType": "Python, Data & Automation",
          "provider": { "@id": "https://aradhy-jain-portfolio.vercel.app/#person" },
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "AdministrativeArea", "name": "Global" }
          ]
        }
      }
    ]
  }
}
```

---

## Case Study Article Schema Remediation

On `/projects/[slug]` (`src/app/projects/[slug]/page.tsx`):
1. **Author Reference:** Replaced inline disconnected `Person` object with clean pointer `{ "@id": "${siteUrl}/#person" }`.
2. **Publisher Reference:** Replaced inline disconnected `Person` object with `{ "@id": "${siteUrl}/#person" }`.
3. **Site Association:** Added `"isPartOf": { "@id": "${siteUrl}/#website" }`.
4. **Purged Misleading Dates:** Removed hardcoded `"datePublished": "2026-01-01"`. Schema now only includes real timestamps when explicitly available.
5. **Breadcrumb ID Uniqueness:** Assigned explicit `@id: "${siteUrl}/projects/${project.slug}/#breadcrumb"` ensuring zero ID collisions.

---

## Validation Results

Running programmatic verification on built Next.js static output:
- **Root Index (`/`):** Validated. Graph contains 3 top-level entities (`WebSite`, `ProfilePage`, `Person`), with 1 `OfferCatalog` containing 5 `Offer` items, each referencing a valid `Service`. 0 Schema.org errors.
- **Case Studies (`/projects/paras-metal`):** Validated. 2 JSON-LD scripts present. Top-level graph from layout + scoped `TechArticle` / `BreadcrumbList`. Both link cleanly to `#person` and `#website`. 0 dangling references.
- **Freelance Page (`/freelance`):** Validated. Scoped `BreadcrumbList` with `@id: .../#breadcrumb`.
