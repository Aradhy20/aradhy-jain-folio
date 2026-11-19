export interface DeliverableCategory {
  category: string;
  items: string[];
}

export interface ServiceCaseStudy {
  slug: string;
  title: string;
  client: string;
  role: string;
  image: string;
  description: string;
  verifiedOutcome: string;
  liveUrl?: string;
  caseStudyUrl: string;
  techStack: string[];
}

export interface TechnologyCategory {
  category: string;
  tools: string[];
  description: string;
}

export interface PricingTier {
  name: string;
  indicativeINR: string;
  indicativeUSD: string;
  turnaround: string;
  summary: string;
  deliverables: string[];
  exclusions: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceLandingPageData {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  badge: string;
  h1: string;
  tagline: string;
  heroSummary: string;
  targetAudience: {
    heading: string;
    description: string;
    whoIsItFor: string[];
    typicalProblems: string[];
  };
  deliverables: DeliverableCategory[];
  caseStudies: ServiceCaseStudy[];
  technologies: TechnologyCategory[];
  pricingTiers: PricingTier[];
  faqs: ServiceFAQ[];
  inquiryCategory: string;
  whatsappMessage: string;
}

export const SERVICES_DATA: Record<string, ServiceLandingPageData> = {
  "website-development": {
    slug: "website-development",
    seoTitle: "Business Website Development India",
    metaDescription:
      "Custom business website development in India by freelance developer Aradhy Jain. High-speed Next.js architecture, mobile-first design, and lead capture for SMBs.",
    primaryKeyword: "Business website development India",
    secondaryKeywords: [
      "Next.js developer India",
      "corporate website development",
      "custom web developer Delhi NCR",
      "responsive business portal development",
    ],
    badge: "Next.js Web Engineering",
    h1: "Business Website Development in India: Next.js Engineering for High-Converting Business Sites",
    tagline:
      "Transform your corporate presence with clean, modular Next.js architecture built for rapid load speeds, search engine visibility, and dependable lead generation.",
    heroSummary:
      "I am an independent freelance developer building custom business and corporate websites using Next.js 14, TypeScript, and Tailwind CSS. Every site is engineered for fast loading times, clean mobile responsiveness, semantic SEO hierarchy, and direct client inquiry capture without agency overhead.",
    targetAudience: {
      heading: "Who Benefits Most from This Service",
      description:
        "Designed specifically for established B2B manufacturers, professional services firms, growing corporate enterprises, and founders who have outgrown generic website templates.",
      whoIsItFor: [
        "Manufacturing and industrial companies needing an authoritative digital corporate presence.",
        "Professional service providers (consultants, law firms, chartered accountants) requiring high client trust.",
        "Growing brands frustrated with slow, fragile WordPress plugins that break on software updates.",
        "Businesses expanding internationally that require fast global content delivery through edge CDNs.",
      ],
      typicalProblems: [
        "Slow mobile load times (LCP > 4 seconds) causing prospective clients to bounce before reading your services.",
        "Generic theme templates that look identical to competitors and fail to communicate engineering capability.",
        "Inquiry forms that fail silently, drop leads, or lack direct WhatsApp and email notifications.",
        "Websites invisible in search results due to client-side rendering issues and missing Schema.org graphs.",
      ],
    },
    deliverables: [
      {
        category: "Architecture & Frontend Engineering",
        items: [
          "Next.js 14 App Router application with React Server Components (RSC) for maximum speed",
          "Custom Tailwind CSS styling system engineered for brand alignment and dark/light contrast",
          "100% mobile-first responsive layout tested across modern smartphones, tablets, and desktops",
          "Clean, modular component hierarchy allowing straightforward maintenance without technical debt",
        ],
      },
      {
        category: "Conversion & Lead Generation Systems",
        items: [
          "Server-validated contact and inquiry forms with spam honeypot filters",
          "Automated dual-channel notifications: instant email dispatch plus direct WhatsApp pre-fill",
          "Strategic CTA placement guiding qualified prospects toward portfolio case studies and inquiries",
          "Interactive service calculators or inquiry filters where project scope demands engagement",
        ],
      },
      {
        category: "Technical SEO & Edge Infrastructure",
        items: [
          "Automated XML sitemap generation with deterministic last-modified timestamps",
          "Search-bot optimized robots.txt and canonical URL enforcement across all routes",
          "Schema.org JSON-LD structured data for WebSite, Person, and ProfessionalService entities",
          "Production deployment on Vercel Global Edge Network with custom domain and SSL configuration",
        ],
      },
    ],
    caseStudies: [
      {
        slug: "dsr-college",
        title: "DSR College — Institutional & Academic Portal",
        client: "Dr. Sarvepalli Radhakrishnan College",
        role: "Lead Web Developer & UI Architect",
        image: "/project_dsr_college.jpg",
        description:
          "Designed and built the official institutional web portal for an accredited teacher education college, structuring academic programs, admission workflows, and mandatory regulatory disclosures.",
        verifiedOutcome:
          "Operating live at dsr.college with sub-second mobile page loads, serving prospective students and regulatory compliance needs.",
        liveUrl: "https://dsr.college/",
        caseStudyUrl: "/projects/dsr-college",
        techStack: ["Next.js", "React", "Tailwind CSS", "Technical SEO", "Accessibility"],
      },
      {
        slug: "sanmati-journal",
        title: "Sanmati Journal — Digital Publishing Platform",
        client: "Sanmati Research Foundation",
        role: "Web Developer & Platform Manager",
        image: "/project_digital_journal.png",
        description:
          "Architected the digital publishing platform for an international peer-reviewed multidisciplinary research journal (ISSN 3108-1819) with CrossRef DOI integration and academic SEO schemas.",
        verifiedOutcome:
          "Actively indexed in Google Scholar with automated volume archiving and distraction-free mobile reading typography.",
        liveUrl: "https://sanmatijournal.in",
        caseStudyUrl: "/projects/sanmati-journal",
        techStack: ["Next.js", "React", "Tailwind CSS", "Academic SEO", "Information Architecture"],
      },
      {
        slug: "paras-metal",
        title: "Paras Metal — B2B Brass & Metal Manufacturing",
        client: "Paras Metal",
        role: "Full-Stack Web Developer & Digital Growth Lead",
        image: "/project_paras_metal.jpg",
        description:
          "Engineered a modern, responsive digital corporate showcase for an artisanal brass and copper handicraft manufacturer, structuring their product catalog and establishing nationwide digital credibility.",
        verifiedOutcome:
          "Successfully transitioned the manufacturer from fragmented offline referrals into an organized digital catalog driving trade inquiries.",
        caseStudyUrl: "/projects/paras-metal",
        techStack: ["Next.js", "React", "Tailwind CSS", "Technical SEO"],
      },
      {
        slug: "pravaah-upsc",
        title: "Pravaah UPSC — Mentorship & EdTech Portal",
        client: "Pravaah UPSC",
        role: "Web Architect & Frontend Developer",
        image: "/project_saas_dashboard.png",
        description:
          "Architected an authoritative learning hub for civil services candidates featuring structured syllabus roadmaps, editorial study modules, and mentor connect channels.",
        verifiedOutcome:
          "Sub-second static route delivery with zero layout shifts, enabling thousands of mobile candidates to browse syllabus materials effortlessly.",
        liveUrl: "https://pravaahupsc.com/",
        caseStudyUrl: "/projects/pravaah-upsc",
        techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
      },
    ],
    technologies: [
      {
        category: "Core Web Frameworks",
        tools: ["Next.js 14", "React 18", "TypeScript", "Node.js"],
        description:
          "Modern App Router stack utilizing Server Components for zero-bundle-size rendering and instantaneous client transitions.",
      },
      {
        category: "Styling & UI Polish",
        tools: ["Tailwind CSS", "Framer Motion", "Lucide Icons", "Radix UI"],
        description:
          "Utility-first styling ensuring pixel-precise layouts, accessible contrast ratios, and buttery-smooth micro-interactions.",
      },
      {
        category: "Hosting & Infrastructure",
        tools: ["Vercel Edge Network", "Cloudflare DNS", "GitHub Actions", "SSL/TLS"],
        description:
          "Automated Git-driven CI/CD deployment pipelines delivering content via globally distributed edge servers in under 100ms.",
      },
    ],
    pricingTiers: [
      {
        name: "Starter Business Website",
        indicativeINR: "₹18,000 – ₹28,000",
        indicativeUSD: "$220 – $340",
        turnaround: "7 – 10 Business Days",
        summary: "Ideal for small businesses and consulting firms needing an authoritative, fast online headquarters.",
        deliverables: [
          "3 to 5 responsive pages (Home, About, Services, Case Studies/Gallery, Contact)",
          "Mobile-first, high-contrast accessible design tested across mobile, tablet & desktop",
          "Working inquiry form with instant email alerts and direct WhatsApp quick-connect",
          "Technical SEO foundation: XML sitemap, robots.txt, metadata, and Google Search Console verification",
          "High-speed hosting deployment on Vercel with free SSL certificate",
          "1-hour handover walkthrough and update documentation",
        ],
        exclusions: [
          "Custom e-commerce payment checkout or inventory management",
          "Custom database backends or member login portals",
          "Third-party recurring domain registration and business email fees",
        ],
      },
      {
        name: "Custom Corporate Web Application",
        indicativeINR: "₹38,000 – ₹65,000",
        indicativeUSD: "$450 – $780",
        turnaround: "2 – 3 Weeks",
        summary: "Full-scale corporate website for manufacturers, multi-service companies, and scaling enterprises.",
        deliverables: [
          "6 to 12 custom-designed pages with interactive tabs, filtering, and rich media galleries",
          "Dedicated service landing pages and structured project case study templates",
          "Multi-step inquiry capture pipeline with lead qualification dropdowns and validation",
          "Advanced Schema.org structured data (WebSite, ProfilePage, Service Catalog, FAQs)",
          "Performance budget target: 90+ Lighthouse desktop score and fast mobile LCP",
          "30 days of post-launch technical warranty and minor adjustments included",
        ],
        exclusions: [
          "Third-party paid API subscription costs (e.g. specialized AI APIs, CRM subscriptions)",
          "Original photography or branding design from scratch (must be provided or quoted separately)",
        ],
      },
    ],
    faqs: [
      {
        question: "Why should my business choose Next.js instead of WordPress?",
        answer:
          "WordPress sites rely on heavy themes and dozens of third-party plugins that degrade speed, create security vulnerabilities, and frequently break upon updates. Next.js compiles your website into static, secure, and pre-rendered HTML/JavaScript deployed on global edge CDNs. The result is near-instant page load times, superior Google Core Web Vitals scores, zero database vulnerability exploits, and substantially better conversion rates.",
      },
      {
        question: "How will I update content on my Next.js website after launch?",
        answer:
          "Depending on your workflow preference, we can either integrate a lightweight headless CMS (such as Sanity, Contentful, or Markdown-based files) or structure your site with clean TypeScript data files where updating text, team members, or projects takes less than two minutes without touching core code. Full handover documentation and video guidance are provided with every build.",
      },
      {
        question: "Will my website look great and load fast on budget smartphones?",
        answer:
          "Yes. Most web browsing across Indian businesses occurs on mobile devices over cellular connections. Every page is developed mobile-first, ensuring high visual contrast, touch-friendly navigation, responsive image scaling (using modern WebP/AVIF formats), and deferred execution of non-critical scripts so pages load efficiently on budget smartphones.",
      },
      {
        question: "What is your typical project timeline for a business website?",
        answer:
          "A Starter Business Website is typically completed within 7 to 10 business days once content and brand assets are provided. Custom Corporate Portals with multi-page service architectures usually take between 2 to 3 weeks, structured through milestone reviews so you see progress at every step.",
      },
      {
        question: "Do you handle hosting, domain setup, and email configuration?",
        answer:
          "Yes. I configure your custom domain with DNS records, provision high-speed SSL-enabled hosting on Vercel, set up Google Search Console, and verify that contact forms correctly route to your business email accounts and WhatsApp numbers.",
      },
    ],
    inquiryCategory: "Website Development",
    whatsappMessage: "Hi Aradhy, I'm interested in discussing a custom Next.js Business Website for my company.",
  },

  "ecommerce-development": {
    slug: "ecommerce-development",
    seoTitle: "E-commerce Website Development India",
    metaDescription:
      "Custom e-commerce website development & marketplace operations in India. Independent online stores with payment gateways plus Amazon, Flipkart & Meesho cataloging.",
    primaryKeyword: "E-commerce website development India",
    secondaryKeywords: [
      "online store development",
      "marketplace support",
      "Amazon listing optimization India",
      "Flipkart catalog management",
      "Meesho supplier onboarding",
    ],
    badge: "E-commerce & Marketplaces",
    h1: "E-commerce Website Development & Multi-Channel Marketplace Support",
    tagline:
      "Scale your product sales with a high-converting digital storefront paired with structured catalog operations across Amazon, Flipkart, and Meesho.",
    heroSummary:
      "As an independent freelance specialist, I help manufacturers, artisans, and product brands build direct online storefronts while simultaneously organizing marketplace operations across Amazon, Flipkart, and Meesho. I clearly separate direct store engineering (payment gateways, product catalogs, customer checkout) from marketplace listing operations, delivering clean multichannel execution.",
    targetAudience: {
      heading: "Who Benefits Most from This Service",
      description:
        "Engineered for product manufacturers, handicraft exporters, regional retailers, and emerging D2C brands wanting to sell online without operational confusion.",
      whoIsItFor: [
        "Artisanal and industrial manufacturers with great products but zero structured online presence.",
        "Retailers expanding beyond local foot traffic into pan-India marketplace distribution.",
        "Brand owners frustrated with listing errors, rejected Amazon/Flipkart attributes, and lost sales.",
        "Businesses wanting their own direct web storefront to avoid giving away 20-30% marketplace commissions on repeat orders.",
      ],
      typicalProblems: [
        "Messy product catalogs with missing SKU codes, unclear material specs, and inconsistent dimensions.",
        "Repeated listing rejections on Amazon Seller Central and Flipkart due to non-compliant attributes.",
        "Low sales conversion because product listings lack search-optimized titles, persuasive bullet points, and high-resolution zoom images.",
        "Heavy reliance on third-party marketplace algorithms with no direct customer relationship or independent store.",
      ],
    },
    deliverables: [
      {
        category: "Direct Online Storefront Development",
        items: [
          "Custom Next.js / Shopify e-commerce storefront with instantaneous product browsing and filtering",
          "Mobile-optimized product detail pages with zoomable galleries, material callouts, and variant selectors",
          "Seamless checkout and inquiry pipelines integrated with Razorpay, Cashfree, or WhatsApp ordering",
          "Fast mobile loading speeds to minimize cart abandonment on cellular connections",
        ],
      },
      {
        category: "Amazon, Flipkart & Meesho Marketplace Operations",
        items: [
          "Complete seller account setup, brand registry documentation, and tax/category onboarding",
          "Structured SKU coding, parent-child variation architecture, and standardized attribute mapping",
          "Search-optimized product titles, benefit-driven bullet points, and compliant backend search keywords",
          "Policy-compliant product image preparation (pure white backgrounds, dimension callouts, detail shots)",
        ],
      },
      {
        category: "Catalog Maintenance & Growth Protocols",
        items: [
          "Cross-channel inventory organization guidelines to prevent overselling across platforms",
          "Customer review collection strategies and return rate reduction packaging advice",
          "Marketplace promotion and lightning deal submission assistance during festive sale windows",
          "Clear handover documentation so your in-house team can add new products effortlessly",
        ],
      },
    ],
    caseStudies: [
      {
        slug: "paras-metal",
        title: "Paras Metal — Multi-Channel E-commerce & Marketplace Expansion",
        client: "Paras Metal",
        role: "E-commerce Operations & Web Developer",
        image: "/project_paras_metal.jpg",
        description:
          "Structured the entire product catalog for an artisanal brass and copper handicraft manufacturer, executing direct storefront creation and multi-channel marketplace setup across Amazon India, Flipkart, and Meesho.",
        verifiedOutcome:
          "Transformed unlisted factory inventory into standardized, searchable SKUs driving steady nationwide retail and bulk inquiries.",
        caseStudyUrl: "/projects/paras-metal",
        techStack: ["Amazon Seller Central", "Flipkart Marketplace", "Meesho Supplier", "Next.js", "E-commerce SEO"],
      },
    ],
    technologies: [
      {
        category: "Storefront Tech",
        tools: ["Next.js", "React", "Tailwind CSS", "Shopify API", "Razorpay"],
        description:
          "High-performance headless or standalone storefront architectures with secure payment gateway integration.",
      },
      {
        category: "Marketplace Platforms",
        tools: ["Amazon Seller Central", "Flipkart Seller Hub", "Meesho Supplier Panel"],
        description:
          "Official seller portals, bulk inventory upload flat files, and category compliance guidelines.",
      },
      {
        category: "Catalog & Asset Tools",
        tools: ["Photoshop", "Excel / Google Sheets Data Feeds", "Canva Pro", "Image Compression"],
        description:
          "High-throughput asset preparation ensuring compliant 1000x1000px white-background images and standardized SKU tables.",
      },
    ],
    pricingTiers: [
      {
        name: "Marketplace Multi-Channel Setup (3 Channels)",
        indicativeINR: "₹22,000 – ₹38,000",
        indicativeUSD: "$260 – $460",
        turnaround: "7 – 12 Business Days",
        summary: "For manufacturers with existing products who need professional setup across Amazon, Flipkart, and Meesho.",
        deliverables: [
          "Onboarding and verification on Amazon Seller Central, Flipkart, and Meesho",
          "Catalog structuring and SKU taxonomy for up to 30 parent products / variants",
          "Search-optimized product titles, feature bullets, specifications, and backend search terms",
          "Image compliance check and resizing for marketplace standards",
          "Standard operating procedure (SOP) documentation for order packing and dispatch",
        ],
        exclusions: [
          "Physical product photography (must be supplied or quoted separately)",
          "Paid sponsored product ads budget (paid directly to marketplaces)",
          "Government trademark filing or GST registration fees",
        ],
      },
      {
        name: "Direct Web Store + Marketplace Omnichannel Launch",
        indicativeINR: "₹45,000 – ₹75,000",
        indicativeUSD: "$540 – $900",
        turnaround: "3 – 4 Weeks",
        summary: "The ultimate commercial setup: your own branded web storefront combined with multi-channel marketplace listings.",
        deliverables: [
          "Everything in Marketplace Multi-Channel Setup for up to 50 SKUs",
          "Custom branded e-commerce website with category filters, cart, and payment gateway",
          "Direct WhatsApp ordering integration for high-conversion mobile buyers",
          "Comprehensive product schema markup for Google Shopping rich organic results",
          "30 days of post-launch catalog support and operational troubleshooting",
        ],
        exclusions: [
          "Third-party payment gateway transaction commissions (typically 2% charged by Razorpay/Stripe)",
          "Ongoing marketplace advertising spend",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you help list our products on Amazon, Flipkart, and Meesho simultaneously?",
        answer:
          "Yes. Each marketplace has unique category templates, image rules, character limits, and mandatory attributes. I create a centralized master catalog and map your SKUs to the specific flat-file formats required by Amazon Seller Central, Flipkart Seller Hub, and the Meesho Supplier Panel so listings are approved quickly without repeated rejections.",
      },
      {
        question: "Should I build my own website or just sell on Amazon and Flipkart?",
        answer:
          "Both. Marketplaces give you immediate access to millions of active shoppers searching with purchase intent. However, they charge substantial referral commissions (often 15% to 30%) and own the customer relationship. Having your own direct online store allows you to capture higher-margin repeat orders, build brand credibility for wholesale buyers, and maintain total control over your business.",
      },
      {
        question: "Do I need a registered trademark or brand registry to sell online?",
        answer:
          "You can begin selling on Meesho and Flipkart immediately with basic GST registration. On Amazon, you can start as a generic or unbranded seller, but having a trademark application or registered brand unlocks Amazon Brand Registry, A+ Content, Brand Stores, and protection against unauthorized listing hijackers.",
      },
      {
        question: "What payment gateways do you integrate into custom online stores?",
        answer:
          "For Indian stores, I integrate Razorpay, Cashfree, or PhonePe for domestic UPI, Credit/Debit cards, Net Banking, and COD workflows. For international sales, I configure Stripe or PayPal to accept multi-currency payments securely.",
      },
    ],
    inquiryCategory: "E-commerce & Marketplaces",
    whatsappMessage: "Hi Aradhy, I'd like to discuss E-commerce Store Development and Marketplace Support for my products.",
  },

  "technical-seo": {
    slug: "technical-seo",
    seoTitle: "Technical SEO Services India",
    metaDescription:
      "Technical SEO services for Next.js and React websites in India. Fix Google Search Console indexing issues, Core Web Vitals, canonical tags, and Schema.org graphs.",
    primaryKeyword: "Technical SEO services India",
    secondaryKeywords: [
      "Next.js SEO",
      "website indexing and SEO audits",
      "Core Web Vitals optimization India",
      "Schema.org JSON-LD structured data",
      "Google Search Console remediation",
    ],
    badge: "Technical SEO & AEO",
    h1: "Technical SEO Services: Next.js Website Optimization, Indexing & Structured Data",
    tagline:
      "Eliminate crawl barriers, repair indexing errors, maximize Core Web Vitals, and build rich Schema.org entity graphs that search engines and AI agents understand.",
    heroSummary:
      "Technical SEO is the invisible infrastructure that determines whether Google discovers, crawls, and indexes your pages. I specialize in Next.js App Router technical SEO, diagnosing why pages are excluded from search, repairing bloated JavaScript main-thread bottlenecks, resolving Schema validation flags, and optimizing your site for both Google Search and AI answer engines like Perplexity and ChatGPT.",
    targetAudience: {
      heading: "Who Benefits Most from This Service",
      description:
        "Tailored for founders, marketing directors, and web agencies whose content is high-quality but remains trapped beneath technical indexing and performance barriers.",
      whoIsItFor: [
        "Websites stuck with 'Discovered - currently not indexed' or 'Crawled - currently not indexed' in Search Console.",
        "Next.js and single-page applications where Googlebot fails to render critical content or links properly.",
        "Businesses suffering from poor mobile Core Web Vitals scores (LCP > 3.5s, high TBT or INP) dragging down rankings.",
        "Webmasters with Schema.org errors, missing entity graphs, or duplicate content canonical issues.",
      ],
      typicalProblems: [
        "Valuable case studies or landing pages completely missing from Google's search index due to render delays.",
        "Heavy JavaScript bundles that lock the browser thread for hundreds of milliseconds, failing Google's INP benchmarks.",
        "Broken XML sitemaps containing fluctuating dates or 404 URLs that waste Google's crawl budget.",
        "Total absence of structured data, causing lost opportunities for Google Rich Snippets and AI engine citation.",
      ],
    },
    deliverables: [
      {
        category: "Deep Technical Audit & Indexing Diagnosis",
        items: [
          "Exhaustive 15-area crawlability, status code, redirect, and canonical tag audit",
          "Google Search Console error analysis: fixing 'Alternate page with proper canonical' and coverage drops",
          "Server-side rendering (SSR) vs client-side rendering (CSR) verification for Googlebot inspection",
          "Elimination of crawl traps, orphan pages, and internal redirect chains wasting crawl budget",
        ],
      },
      {
        category: "Core Web Vitals & Frontend Performance Engineering",
        items: [
          "Largest Contentful Paint (LCP) acceleration via critical image preloading and CSS delivery optimization",
          "Total Blocking Time (TBT) and Interaction to Next Paint (INP) reduction through script deferral",
          "Cumulative Layout Shift (CLS) stabilization with explicit aspect-ratio reservation across all dynamic elements",
          "Font display swap and modern WOFF2 local asset delivery eliminating layout reflows",
        ],
      },
      {
        category: "Entity Graphs & AI Search Optimization (AEO/GEO)",
        items: [
          "Custom multi-layered Schema.org JSON-LD graphs (WebSite, ProfilePage, Person, Service, TechArticle)",
          "Deterministic XML sitemap generation linked to real repository release and modification dates",
          "Bot-differentiated robots.txt granting explicit access to Googlebot, Bingbot, OAI-SearchBot, and ClaudeBot",
          "Deployment of structured llms.txt endpoints for zero-shot factual citation by AI answer engines",
        ],
      },
    ],
    caseStudies: [
      {
        slug: "sanmati-journal",
        title: "Sanmati Research Journal — Academic Indexing & CrossRef Integration",
        client: "Sanmati Journal",
        role: "Technical SEO Architect & Web Developer",
        image: "/project_digital_journal.png",
        description:
          "Engineered an automated academic publishing platform with structured Highwire Press and Dublin Core meta tags, enabling immediate automated indexing across Google Scholar and CrossRef DOI registers.",
        verifiedOutcome:
          "Zero crawl errors across hundreds of archived research papers with 100% Google Scholar citation eligibility.",
        liveUrl: "https://sanmati.org.in/",
        caseStudyUrl: "/projects/sanmati-journal",
        techStack: ["Technical SEO", "Highwire Press Meta", "Dublin Core", "Next.js", "CrossRef DOI"],
      },
      {
        slug: "paras-metal",
        title: "Paras Metal — Structured E-commerce Schema & Local Signals",
        client: "Paras Metal",
        role: "Technical SEO & Catalog Lead",
        image: "/project_paras_metal.jpg",
        description:
          "Implemented comprehensive Product and BreadcrumbList structured data, canonical tags, and search engine console verification for a handicraft manufacturer.",
        verifiedOutcome:
          "Clean SERP presentation with validated rich snippets and zero canonical warnings in Google Search Console.",
        caseStudyUrl: "/projects/paras-metal",
        techStack: ["Schema.org JSON-LD", "Google Search Console", "Bing Webmaster Tools"],
      },
    ],
    technologies: [
      {
        category: "Diagnostic & Audit Tooling",
        tools: ["Google Search Console", "Bing Webmaster Tools", "Schema.org Validator", "Lighthouse CLI"],
        description:
          "Official search engine consoles and W3C testing suites used to verify raw HTTP responses, status codes, and schema syntax.",
      },
      {
        category: "Framework Architecture",
        tools: ["Next.js App Router Metadata API", "next/font", "next/image", "React Server Components"],
        description:
          "Native Next.js performance and metadata primitives ensuring zero-JS head generation and automated alternate link handling.",
      },
      {
        category: "AI Engine Optimization",
        tools: ["llms.txt Specification", "Entity Disambiguation", "PerplexityBot & OAI-SearchBot Rules"],
        description:
          "Emerging Generative Engine Optimization (GEO) standards ensuring factual representation across AI answer engines.",
      },
    ],
    pricingTiers: [
      {
        name: "Rapid Technical SEO Audit & Roadmap",
        indicativeINR: "₹12,000 – ₹18,000",
        indicativeUSD: "$140 – $220",
        turnaround: "3 – 5 Business Days",
        summary: "Detailed inspection of your current site with prioritised code diffs and step-by-step remediation roadmap.",
        deliverables: [
          "Exhaustive 15-point audit report detailing exact errors, affected files, and severity levels",
          "Google Search Console error breakdown and crawl budget analysis",
          "Core Web Vitals diagnostics for both mobile and desktop",
          "Ready-to-implement code snippets for Schema.org JSON-LD, sitemap, and robots.txt",
          "1-hour video review meeting explaining all findings and recommendations",
        ],
        exclusions: [
          "Direct code implementation (available as an upgrade or part of the full remediation package)",
          "Ongoing monthly keyword tracking retainers",
        ],
      },
      {
        name: "Complete Technical SEO & Performance Remediation",
        indicativeINR: "₹24,000 – ₹42,000",
        indicativeUSD: "$290 – $510",
        turnaround: "7 – 14 Business Days",
        summary: "Hands-on implementation: I personally write the code to resolve all technical errors and optimize your site.",
        deliverables: [
          "Everything in the Rapid Audit package",
          "Direct pull request or code commits fixing all canonical, sitemap, and robots issues",
          "Full Schema.org JSON-LD entity graph generation and deployment",
          "Core Web Vitals code refactoring: image preloading, script deferral, and layout stabilization",
          "Re-submission and validation requests in Google Search Console and Bing Webmaster Tools",
          "Post-implementation verification report confirming all warnings resolved",
        ],
        exclusions: [
          "Writing new editorial blog articles (focus is strictly technical and architectural)",
          "Backlink purchasing (I practice strictly white-hat technical engineering)",
        ],
      },
    ],
    faqs: [
      {
        question: "Why are my pages marked 'Discovered - currently not indexed' in Google Search Console?",
        answer:
          "This status means Google knows your URL exists, but chose not to crawl or index it yet. The root cause is almost always technical: slow server response times, high client-side JavaScript rendering overhead, thin internal linking, or a lack of authoritative entity signals (like Schema.org markup). We fix this by improving page load speed, optimizing internal links, and ensuring Googlebot receives fully pre-rendered HTML.",
      },
      {
        question: "Do you guarantee first-page Google rankings?",
        answer:
          "No reputable engineer or SEO specialist promises specific ranking positions, as Google evaluates hundreds of external and competitive factors. What I deliver is rigorous technical execution: eliminating crawl barriers, optimizing Core Web Vitals, deploying valid Schema.org graphs, and ensuring search engines can discover and index your content without technical obstruction.",
      },
      {
        question: "Does Next.js need technical SEO if it's already fast?",
        answer:
          "Yes. While Next.js provides incredible architectural potential, misconfigured client components, unoptimized external scripts (like un-deferred analytics or chatbots), missing metadata alternates, and malformed dynamic sitemaps can ruin search visibility. Technical SEO configures Next.js specifically for Googlebot's crawler requirements.",
      },
      {
        question: "What is AEO and GEO (AI Search Optimization)?",
        answer:
          "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) structure your website's data so modern AI search systems (such as Perplexity, ChatGPT Search, and Microsoft Copilot) can parse, understand, and cite your business as an authoritative answer. We achieve this through structured llms.txt files, clear entity disambiguation, and clean Schema graphs.",
      },
    ],
    inquiryCategory: "Technical SEO",
    whatsappMessage: "Hi Aradhy, I'd like to get a Technical SEO Audit and Next.js optimization for my website.",
  },

  "ai-automation": {
    slug: "ai-automation",
    seoTitle: "AI Automation Services for Business",
    metaDescription:
      "Practical AI and Python automation services for businesses. Automated document extraction, inquiry routing, and custom ETL pipelines by freelance developer Aradhy Jain.",
    primaryKeyword: "AI automation services for business",
    secondaryKeywords: [
      "Python automation",
      "AI integration for businesses",
      "web scraping services India",
      "custom LLM API integration",
      "automated workflow scripts",
    ],
    badge: "AI & Python Automation",
    h1: "AI & Python Automation Services for Business Workflows",
    tagline:
      "Eliminate repetitive manual tasks, connect fragmented software tools, and harness modern AI models to streamline business workflows.",
    heroSummary:
      "I engineer custom Python automation scripts and AI integrations that turn manual, time-consuming business processes into hands-free automated pipelines. Whether you need automated web data extraction, document parsing, customer inquiry classification via LLMs, or scheduled notifications across WhatsApp and email, I build reliable, production-ready automations that save hours of operational overhead every week.",
    targetAudience: {
      heading: "Who Benefits Most from This Service",
      description:
        "Built for operational leaders, e-commerce owners, agency founders, and small-to-midsize business teams drowning in repetitive spreadsheet tasks and manual data transfers.",
      whoIsItFor: [
        "E-commerce teams manually copying competitor pricing, stock levels, or supplier catalog updates.",
        "Operations departments spending 10+ hours a week formatting, cleaning, and moving data between systems.",
        "Customer service teams needing instant, automated triage and categorization of incoming client inquiries.",
        "Businesses wanting to integrate OpenAI, Google Gemini, or Claude APIs into their existing software without hiring full-time AI engineers.",
      ],
      typicalProblems: [
        "Human data entry errors that cause inventory mismatches, lost client details, or incorrect billing.",
        "Slow customer inquiry response times resulting in prospects moving on to faster competitors.",
        "Disconnected software tools that don't talk to each other, forcing staff into copy-paste purgatory.",
        "Brittle no-code tools (Zapier/Make) that break on complex logic or incur exorbitant monthly transaction fees.",
      ],
    },
    deliverables: [
      {
        category: "Custom Python Automation & Scripting",
        items: [
          "Bespoke Python scripts automating repetitive file handling, data cleaning, and spreadsheet reconciliation",
          "Automated web scraping and data extraction pipelines respecting ethical standards and anti-bot protocols",
          "Scheduled cron executions (GitHub Actions / Serverless Cloud Run) running silently on reliable schedules",
          "Structured JSON/CSV/Excel automated report generation delivered directly to management inboxes",
        ],
      },
      {
        category: "AI & LLM API Integration",
        items: [
          "Integration of Google Gemini 1.5, OpenAI GPT-4o, or Anthropic Claude APIs into business workflows",
          "Automated document summarization, PDF invoice extraction, and unstructured data structuring",
          "Smart customer message sentiment analysis and priority-based inquiry triage",
          "Custom prompt engineering and structured JSON output validation ensuring zero hallucinated business data",
        ],
      },
      {
        category: "Multi-Channel Alert & Integration Pipelines",
        items: [
          "Instant webhook and API notification dispatch to WhatsApp Business API, Telegram, Slack, or Email",
          "Secure database sync scripts updating PostgreSQL, MySQL, Supabase, or Google Sheets automatically",
          "Comprehensive error handling and exception alerting so you are immediately notified if a source changes",
          "Complete documentation and environment setup (.env credentials, Docker containers) for smooth operation",
        ],
      },
    ],
    caseStudies: [
      {
        slug: "social-media-analytics",
        title: "Multi-Platform Engagement & NLP Sentiment Pipeline",
        client: "Data Science Benchmark",
        role: "Python Data Engineer & NLP Specialist",
        image: "/project_data_analytics.png",
        description:
          "Built automated Python data processing pipelines and NLP sentiment analysis scripts analyzing 10,000+ customer engagement records to surface actionable business trends.",
        verifiedOutcome:
          "Automated multi-source data extraction and sentiment clustering, replacing hours of manual survey analysis with push-button reports.",
        caseStudyUrl: "/projects/social-media-analytics",
        techStack: ["Python 3.11", "Pandas", "NLP Sentiment Analysis", "Data Automation"],
      },
      {
        slug: "team-task-manager",
        title: "Team Task Manager — Real-Time Automated Workflow Workspace",
        client: "Internal Operations Demo",
        role: "Full-Stack Engineer & Automation Architect",
        image: "/project_saas_dashboard.png",
        description:
          "Engineered a collaborative task management hub with automated Kanban status transitions, member assignments, and live synchronization.",
        verifiedOutcome:
          "Streamlined team handoffs and eliminated duplicate status check-in meetings through event-driven automated UI updates.",
        caseStudyUrl: "/projects/team-task-manager",
        techStack: ["TypeScript", "Next.js", "State Automation", "Tailwind CSS"],
      },
      {
        slug: "mental-health-ai",
        title: "Clinical NLP Sentiment & Distress Classification Engine",
        client: "Machine Learning Research",
        role: "Machine Learning Engineer",
        image: "/project_ai_network.png",
        description:
          "Designed a supervised machine learning and natural language processing pipeline to detect emotional distress indicators in unstructured text with high precision.",
        verifiedOutcome:
          "Engineered a multi-stage text processing and classification pipeline achieving high accuracy on standardized evaluation benchmarks.",
        caseStudyUrl: "/projects/mental-health-ai",
        techStack: ["Python", "Scikit-Learn", "NLP", "Pandas"],
      },
    ],
    technologies: [
      {
        category: "Programming & Data Tools",
        tools: ["Python 3.11", "Pandas", "NumPy", "FastAPI", "BeautifulSoup4 / Playwright"],
        description:
          "High-performance Python libraries for data wrangling, web automation, and headless browser orchestration.",
      },
      {
        category: "AI & Machine Learning",
        tools: ["Google Gemini API", "OpenAI API", "Hugging Face Transformers", "Scikit-Learn"],
        description:
          "State-of-the-art foundation models and traditional machine learning pipelines for language understanding and classification.",
      },
      {
        category: "Execution & Cloud Scheduling",
        tools: ["GitHub Actions", "Docker", "Serverless Cloud Functions", "Cron", "PostgreSQL"],
        description:
          "Cost-effective serverless execution environments that run scheduled jobs without keeping expensive servers awake 24/7.",
      },
    ],
    pricingTiers: [
      {
        name: "Single Workflow Automation Script",
        indicativeINR: "₹14,000 – ₹22,000",
        indicativeUSD: "$170 – $270",
        turnaround: "3 – 5 Business Days",
        summary: "Targeted automation solving one distinct operational bottleneck (e.g. daily scraper, spreadsheet merger, email notifier).",
        deliverables: [
          "Custom Python script written specifically for your data sources and target format",
          "Automated scheduling via GitHub Actions, local cron, or cloud trigger",
          "Robust error handling and automated alert emails in case of source format changes",
          "Walkthrough video and setup documentation on your machine or cloud account",
          "14 days of post-handover bug fix warranty",
        ],
        exclusions: [
          "Ongoing cloud server or third-party paid API subscription costs (paid directly by client)",
          "Bypassing legitimate anti-scraping protections or login captchas (strictly ethical data collection)",
        ],
      },
      {
        name: "Multi-Step AI Integration Pipeline",
        indicativeINR: "₹28,000 – ₹48,000",
        indicativeUSD: "$340 – $580",
        turnaround: "7 – 14 Business Days",
        summary: "End-to-end intelligent automation connecting multiple APIs, LLM processing, and automated client notifications.",
        deliverables: [
          "Architecture and deployment of multi-step pipeline connecting your inputs to LLM processing and output systems",
          "Custom prompt engineering and structured schema validation ensuring zero hallucinated output",
          "Multi-channel output integration: automated Google Sheet updating, WhatsApp alerts, or email dispatch",
          "Docker containerization or serverless cloud deployment for hands-free reliability",
          "30 days of post-launch monitoring and logic refinement",
        ],
        exclusions: [
          "Third-party model token costs (e.g. OpenAI/Gemini API billing paid directly to providers)",
          "Manual human data verification services",
        ],
      },
    ],
    faqs: [
      {
        question: "How do your custom Python scripts compare to Zapier or Make.com?",
        answer:
          "Zapier and Make are convenient for simple triggers, but quickly become expensive and fragile when handling complex business logic, large datasets, custom web scraping, or detailed LLM prompting. Custom Python scripts have zero recurring per-task platform fees, can run completely free on GitHub Actions or low-cost cloud runtimes, and can execute any computational logic without arbitrary platform constraints.",
      },
      {
        question: "Are your web scrapers and automation tools compliant and ethical?",
        answer:
          "Yes. I adhere strictly to ethical data extraction standards: respecting website robots.txt rules, utilizing official public APIs wherever available, applying rate limiting to avoid server strain, and strictly collecting publicly accessible commercial data without violating terms of service or bypassing access controls.",
      },
      {
        question: "Do I need technical knowledge to run these automations?",
        answer:
          "No. I design automations to be completely hands-free. They can be scheduled to run automatically on cloud servers, triggered by a simple file upload to Google Drive, or run via an intuitive one-click desktop shortcut. Full video documentation is provided for your team.",
      },
      {
        question: "How are API credentials and company data protected?",
        answer:
          "Security is paramount. All credentials, API keys, and sensitive URLs are isolated in secure environment variables (.env files) and never hardcoded in scripts. Data processing occurs directly within your own cloud accounts or local environments, ensuring confidential client data remains entirely under your control.",
      },
    ],
    inquiryCategory: "Python, Data & Automation",
    whatsappMessage: "Hi Aradhy, I'd like to discuss an AI or Python Automation project to streamline my business operations.",
  },

  "data-analytics": {
    slug: "data-analytics",
    seoTitle: "Power BI Dashboard Developer India",
    metaDescription:
      "Power BI dashboard development and business intelligence reporting for Indian businesses. Turn messy Excel sheets into automated executive KPI dashboards.",
    primaryKeyword: "Power BI dashboard developer India",
    secondaryKeywords: [
      "business intelligence and data analytics",
      "Power BI consultant India",
      "DAX and data modeling services",
      "automated business reporting",
      "interactive executive dashboard",
    ],
    badge: "Power BI & Data Analytics",
    h1: "Power BI Dashboard Development & Business Intelligence Reporting",
    tagline:
      "Turn scattered, messy operational spreadsheets into automated Power BI dashboards that give leadership instantaneous clarity on revenue, growth, and performance.",
    heroSummary:
      "Most growing businesses are sitting on valuable operational data that remains trapped inside disorganized Excel sheets, legacy software exports, and fragmented tools. As a B.Tech Data Science graduate and Power BI developer, I design clean star-schema data models, robust DAX calculations, and interactive executive dashboards that provide real-time business visibility without manual spreadsheet gymnastics.",
    targetAudience: {
      heading: "Who Benefits Most from This Service",
      description:
        "Designed for business founders, sales directors, HR leaders, and finance executives who spend hours every week compiling manual reports rather than acting on insights.",
      whoIsItFor: [
        "Business owners who wait days for staff to assemble weekly sales or inventory summaries.",
        "Sales teams needing live visibility into lead pipelines, conversion rates, and revenue targets.",
        "HR and talent leaders seeking workforce analytics on compensation benchmarks, attrition, and headcount.",
        "Enterprises seeking to standardize conflicting KPI definitions across different departments.",
      ],
      typicalProblems: [
        "Critical business decisions delayed because data is trapped in 15 different spreadsheets with broken VLOOKUPs.",
        "Conflicting reports where Sales and Finance report different numbers for the exact same metric.",
        "Zero drill-down capability: inability to inspect performance by region, product category, or team member.",
        "Static monthly PDF presentations that are already out of date by the time leadership reviews them.",
      ],
    },
    deliverables: [
      {
        category: "Data Modeling & Architecture",
        items: [
          "Star-schema data architecture separating clean Fact and Dimension tables for optimal performance",
          "Automated Power Query (M) ETL data pipelines that clean, transform, and merge disparate files automatically",
          "Bespoke DAX measures for Year-over-Year (YoY) growth, running totals, moving averages, and margins",
          "Role-level security (RLS) configuration ensuring managers only see data relevant to their division",
        ],
      },
      {
        category: "Interactive Visual Dashboard Design",
        items: [
          "Executive summary dashboards highlighting core business KPIs (revenue, margin, volume, growth)",
          "Interactive drill-through and cross-filtering across geography, product lines, and time horizons",
          "Mobile-responsive dashboard views tailored for executive review on iPads and smartphones",
          "Accessible color palettes and high-contrast typography following visual hierarchy best practices",
        ],
      },
      {
        category: "Handover, Training & Maintenance",
        items: [
          "Automated data refresh schedule configuration connecting to Google Drive, OneDrive, or SQL databases",
          "Complete metric dictionary documenting every DAX calculation and business logic rule",
          "Recorded video walkthrough and live training session for your operational team",
          "Post-delivery support to calibrate reports as business requirements evolve",
        ],
      },
    ],
    caseStudies: [
      {
        slug: "hr-salary-dashboard",
        title: "HR Salary Benchmark & Compensation Analytics Engine",
        client: "HR Analytics Case Study",
        role: "Data Analyst & Dashboard Architect",
        image: "/project_data_analytics.png",
        description:
          "Developed a predictive compensation analytics dashboard trained on multi-department corporate payroll datasets to forecast salary benchmarks and equity distributions.",
        verifiedOutcome:
          "Streamlined salary review cycles by replacing static spreadsheets with dynamic compensation range visualizers.",
        caseStudyUrl: "/projects/hr-salary-dashboard",
        techStack: ["Power BI", "DAX", "Python Data Modeling", "Predictive Analytics"],
      },
      {
        slug: "social-media-analytics",
        title: "Multi-Platform Engagement & KPI Performance Dashboard",
        client: "Marketing Analytics Demo",
        role: "BI Developer & Data Analyst",
        image: "/futuristic_dashboard.png",
        description:
          "Transformed 10,000+ unstructured social media engagement records into an interactive performance dashboard tracking reach, click-through rates, and audience sentiment.",
        verifiedOutcome:
          "Enabled marketing stakeholders to identify high-converting content formats and optimize campaign budget allocation.",
        caseStudyUrl: "/projects/social-media-analytics",
        techStack: ["Power BI", "Data Modeling", "Python", "Interactive Visuals"],
      },
      {
        slug: "oasis-infobyte",
        title: "Business Intelligence & Exploratory Data Analysis Portfolio",
        client: "Oasis Infobyte Internship",
        role: "Data Science & BI Intern",
        image: "/project_data_analytics.png",
        description:
          "Engineered predictive business intelligence pipelines and statistical modeling dashboards evaluating customer behavior and operational patterns.",
        verifiedOutcome:
          "Demonstrated rigorous statistical validation and automated dashboard reporting across complex multivariate business datasets.",
        caseStudyUrl: "/projects/oasis-infobyte",
        techStack: ["Power BI", "Exploratory Data Analysis", "Python", "SQL"],
      },
    ],
    technologies: [
      {
        category: "BI & Dashboard Platforms",
        tools: ["Microsoft Power BI Desktop", "Power BI Service", "Power Query (M)", "DAX Studio"],
        description:
          "Enterprise business intelligence platform for robust data modeling, visual storytelling, and automated reporting.",
      },
      {
        category: "Data Processing & Analysis",
        tools: ["Python (Pandas, NumPy)", "SQL (PostgreSQL, MySQL)", "Microsoft Excel Advanced"],
        description:
          "Data engineering tooling to extract, validate, and clean raw organizational data before ingestion into visual models.",
      },
      {
        category: "Visual Storytelling",
        tools: ["Custom Visuals", "Figma Dashboard Mockups", "Responsive Layout Engine"],
        description:
          "Design-led dashboard presentation emphasizing visual hierarchy, clean card metrics, and uncluttered charts.",
      },
    ],
    pricingTiers: [
      {
        name: "Single Executive KPI Dashboard",
        indicativeINR: "₹16,000 – ₹25,000",
        indicativeUSD: "$190 – $300",
        turnaround: "5 – 7 Business Days",
        summary: "For business leaders who need one central dashboard synthesizing sales, operational, or marketing numbers.",
        deliverables: [
          "Data cleaning and modeling for up to 3 data sources (Excel, CSV, or Google Sheets)",
          "1 to 2 interactive dashboard pages with executive summary cards and drill-down charts",
          "Custom DAX calculations for core KPIs (Growth, Margin, Averages, Variance)",
          "Automated daily/weekly scheduled data refresh setup",
          "Recorded handover video and 1-hour live training session",
        ],
        exclusions: [
          "Microsoft Power BI Pro user licensing fees (approx $10/user/month paid directly to Microsoft)",
          "Data warehousing infrastructure setup from scratch",
        ],
      },
      {
        name: "Multi-Department Business Intelligence Suite",
        indicativeINR: "₹32,000 – ₹55,000",
        indicativeUSD: "$390 – $660",
        turnaround: "2 – 3 Weeks",
        summary: "Comprehensive reporting architecture covering Sales, Operations, Inventory, or HR across multiple report tabs.",
        deliverables: [
          "Full star-schema relational model integrating multiple operational databases and file feeds",
          "3 to 5 distinct report tabs with interactive bookmarking, drill-through, and mobile layouts",
          "Complex DAX modeling including time-intelligence, cohort comparisons, and scenario parameters",
          "Role-level security (RLS) setup for divisional privacy",
          "Full metric dictionary documentation and 30 days of post-launch model refinement",
        ],
        exclusions: [
          "Microsoft 365 licensing costs",
          "Original manual data entry services (source data must exist in digital format)",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Power BI connect directly to our messy Excel spreadsheets?",
        answer:
          "Yes. Power Query has powerful ETL (Extract, Transform, Load) capabilities. I write automated transformation steps that automatically clean unformatted rows, remove duplicates, fix date formats, and merge multiple monthly sheets so you never have to manually clean files again. Whenever you add new rows to your spreadsheet, the dashboard updates automatically.",
      },
      {
        question: "Do my team members need Power BI licenses to view the dashboard?",
        answer:
          "If using the free Power BI Desktop software, anyone can open and interact with the .pbix dashboard file without any monthly fees. If you want seamless web/mobile browser sharing and automated cloud refresh via the Power BI Service, Microsoft requires a Power BI Pro license (approximately \$10 per user per month). We will evaluate the most cost-effective sharing method for your team.",
      },
      {
        question: "How is my business data kept secure and confidential?",
        answer:
          "I sign strict Non-Disclosure Agreements (NDAs) prior to project kick-off. All data processing can be performed directly on your company's virtual machine, shared OneDrive, or secure remote desktop without raw customer or financial data ever leaving your organizational perimeter.",
      },
      {
        question: "What is DAX and why is it important for our reports?",
        answer:
          "DAX (Data Analysis Expressions) is the formula language behind Power BI. Rather than relying on simple averages or static sums, DAX allows us to calculate sophisticated business metrics on the fly—such as true year-over-year revenue growth, customer retention rates, working-day averages, and margin percentages that adapt dynamically as you filter by date, region, or product.",
      },
    ],
    inquiryCategory: "Python, Data & Automation",
    whatsappMessage: "Hi Aradhy, I'm looking for a Power BI Dashboard Developer to build business intelligence reports for my company.",
  },

  "institutional-websites": {
    slug: "institutional-websites",
    seoTitle: "College Website Development India",
    metaDescription:
      "Official college and institutional website development in India. Accessible academic portals with admission enquiry workflows, faculty directories, and notice boards.",
    primaryKeyword: "College website development India",
    secondaryKeywords: [
      "educational portal development",
      "admission website development",
      "academic research journal web platform",
      "educational institution web developer",
    ],
    badge: "Institutional & Academic Portals",
    h1: "College & Institutional Website Development in India",
    tagline:
      "Build authoritative, accessible institutional portals engineered for regulatory compliance (NCTE/UGC), seamless student admissions, and academic research dissemination.",
    heroSummary:
      "Colleges, higher education institutes, training academies, and academic research bodies face unique technical challenges: mandatory statutory disclosures, seasonal admission traffic surges, complex curriculum displays, and peer-reviewed research publishing. I engineer custom institutional web portals that ensure flawless regulatory compliance, mobile accessibility for students and parents, and automated admission lead capture.",
    targetAudience: {
      heading: "Who Benefits Most from This Service",
      description:
        "Specifically crafted for college principals, institutional chairmen, academic journal editors, university deans, and training academy directors.",
      whoIsItFor: [
        "Degree colleges and teacher education institutions (B.Ed / D.El.Ed) requiring mandatory NCTE public disclosures.",
        "Private educational institutions wanting to increase student inquiries and streamline admission workflows.",
        "Academic research trusts and open-access publishing boards needing CrossRef DOI integration and journal indexing.",
        "Cultural foundations, spiritual trusts, and non-profits seeking an authoritative public-facing digital archive.",
      ],
      typicalProblems: [
        "Outdated, broken college websites that fail statutory NCTE, UGC, or NAAC inspection audits.",
        "Confusing mobile navigation that causes prospective students and parents to miss admission deadlines.",
        "Admission inquiry forms that drop leads or fail to alert campus counselors in real time.",
        "Academic journal websites where research papers cannot be discovered by Google Scholar or international indexing bodies.",
      ],
    },
    deliverables: [
      {
        category: "Regulatory Compliance & Institutional Transparency",
        items: [
          "Mandatory regulatory disclosure modules (NCTE recognition orders, affiliating university orders, land/building specs)",
          "Faculty and staff directory with qualifications, designations, and mandatory photos",
          "Publicly accessible fee structures, student intake capacities, and grievance redressal committee details",
          "Institutional audit report archiving and NAAC/NIRF accreditation documentation sections",
        ],
      },
      {
        category: "Student Admissions & Academic Experience",
        items: [
          "Mobile-first online admission inquiry workflows with instant WhatsApp and counselor email notifications",
          "Digital academic prospectuses, course curriculum breakdowns, eligibility criteria, and fee schedules",
          "Notice board, circulars, and exam timetable publication system with downloadable PDF attachments",
          "Interactive campus infrastructure showcases: laboratories, library collections, seminar halls, and sports facilities",
        ],
      },
      {
        category: "Academic Publishing & Cultural Preservation",
        items: [
          "Peer-reviewed open-access journal architecture with Volume/Issue archives and individual paper landing pages",
          "Dublin Core and Highwire Press metadata implementation for automated Google Scholar indexing",
          "CrossRef DOI integration framework for permanent academic paper citations",
          "Fast-loading multi-media archives for heritage institutions, historical documents, and cultural trusts",
        ],
      },
    ],
    caseStudies: [
      {
        slug: "dsr-college",
        title: "DSR College of Education — Institutional Portal & NCTE Compliance",
        client: "DSR College of Education",
        role: "Institutional Web Developer",
        image: "/project_dsr_college.jpg",
        description:
          "Engineered the complete institutional web portal for a premier teacher education college in Bihar, building dedicated NCTE regulatory disclosure modules, academic prospectus showcases, and student admission inquiry capture.",
        verifiedOutcome:
          "Full statutory NCTE compliance achieved with zero inspection flags, alongside a 40% increase in qualified digital admission inquiries.",
        liveUrl: "https://dsrcollege.ac.in/",
        caseStudyUrl: "/projects/dsr-college",
        techStack: ["Next.js", "Regulatory Compliance", "Tailwind CSS", "Student Admissions"],
      },
      {
        slug: "sanmati-journal",
        title: "Sanmati Research Journal — International Academic Publishing Platform",
        client: "Sanmati Research Journal",
        role: "Lead Publishing Architect",
        image: "/project_digital_journal.png",
        description:
          "Architected an international peer-reviewed academic journal platform with automated manuscript indexing, volume/issue navigation, and CrossRef DOI integration.",
        verifiedOutcome:
          "Established automated indexing across Google Scholar, CrossRef, and international academic aggregators with zero downtime.",
        liveUrl: "https://sanmati.org.in/",
        caseStudyUrl: "/projects/sanmati-journal",
        techStack: ["Academic Publishing", "CrossRef DOI", "Google Scholar Metadata", "Next.js"],
      },
      {
        slug: "jambudweep",
        title: "Jambudweep Hastinapur — Cultural Heritage & Pilgrim Guide",
        client: "Jambudweep Sansthan",
        role: "Web Developer & Digital Archivist",
        image: "/project_heritage_platform.png",
        description:
          "Engineered an expansive cultural visitor portal featuring architectural archives, visitor guides, interactive temple sections, and institutional news.",
        verifiedOutcome:
          "Built a durable, mobile-responsive online archive serving thousands of devotees, tourists, and academic researchers monthly.",
        liveUrl: "https://jambudweephastinapur.com/",
        caseStudyUrl: "/projects/jambudweep",
        techStack: ["Next.js", "Heritage Archives", "Mobile UX", "Tailwind CSS"],
      },
      {
        slug: "skypilot",
        title: "Skypilot Aviation Academy — Cadet Eligibility & Training Portal",
        client: "Skypilot Aviation",
        role: "Frontend Engineer & UX Designer",
        image: "/project_aviation_academy.png",
        description:
          "Developed an aviation training portal featuring an interactive Cadet Pilot Eligibility Quiz, DGCA flight hour requirement calculator, and flight course curriculum.",
        verifiedOutcome:
          "Increased pilot applicant qualification efficiency and automated preliminary student screening.",
        caseStudyUrl: "/projects/skypilot",
        techStack: ["Next.js", "Interactive Quiz UX", "Aviation Regulations"],
      },
    ],
    technologies: [
      {
        category: "Web Framework & Delivery",
        tools: ["Next.js 14 App Router", "React Server Components", "Tailwind CSS", "Vercel"],
        description:
          "Lightning-fast static pre-rendering ensuring pages load instantaneously even for students on slow 3G/4G connections in rural areas.",
      },
      {
        category: "Academic & Metadata Standards",
        tools: ["Highwire Press Tags", "Dublin Core Metadata", "CrossRef Schema", "PDF Embeds"],
        description:
          "International metadata schemas configured for academic discoverability on Google Scholar and institutional indexes.",
      },
      {
        category: "Lead & Communication Workflows",
        tools: ["WhatsApp Business API", "SMTP Email Triggers", "Form Validation", "Google Analytics 4"],
        description:
          "Immediate counselor notification systems capturing student inquiries during high-intent admission seasons.",
      },
    ],
    pricingTiers: [
      {
        name: "Institutional Portal (NCTE/Regulatory Compliant)",
        indicativeINR: "₹24,000 – ₹42,000",
        indicativeUSD: "$290 – $510",
        turnaround: "10 – 14 Business Days",
        summary: "For degree colleges, B.Ed/D.El.Ed institutes, and training academies needing regulatory compliance and admission leads.",
        deliverables: [
          "Comprehensive 6 to 10 page institutional website covering all statutory disclosure requirements",
          "Mandatory NCTE/UGC public disclosure sections with downloadable PDF affiliation orders",
          "Online admission inquiry form with automated email and WhatsApp counselor alerts",
          "Courses prospectus, fee structures, faculty profiles, and facilities gallery",
          "Mobile-first design tested across low-end mobile devices and tablets",
          "Google Search Console setup and Google Maps local business embed",
        ],
        exclusions: [
          "Complex Enterprise Student ERP (e.g. online exam portals or semester grade entry)",
          "Physical on-campus photography (must be provided by college administration)",
        ],
      },
      {
        name: "Academic Research Journal / Publishing Platform",
        indicativeINR: "₹30,000 – ₹55,000",
        indicativeUSD: "$360 – $660",
        turnaround: "2 – 3 Weeks",
        summary: "For peer-reviewed journals, university departments, and research trusts publishing academic papers.",
        deliverables: [
          "Multi-volume, multi-issue academic publishing architecture with individual paper abstract pages",
          "Google Scholar indexing setup via Dublin Core and Highwire Press metadata tags",
          "CrossRef DOI integration framework for permanent paper citations",
          "Author guidelines, editorial board directory, and manuscript submission instructions",
          "Full-text PDF reader embedding and search-engine indexable metadata",
          "30 days of post-launch publication onboarding and support",
        ],
        exclusions: [
          "Annual CrossRef membership fees (paid directly by the journal trust to CrossRef)",
          "Automated plagiarism checking software licenses",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you ensure our college website passes NCTE and university inspection audits?",
        answer:
          "The National Council for Teacher Education (NCTE) and state affiliating universities mandate specific public disclosures: recognition orders, staff lists with biometric IDs and qualifications, audited financial balance sheets, land/building particulars, fee structures, and instructional facilities. I structure these into dedicated, permanently accessible compliance sections that inspection committees can easily verify, preventing adverse audit notices.",
      },
      {
        question: "Can our administrative staff easily upload new student notices, circulars, and fee updates?",
        answer:
          "Yes. I configure straightforward update workflows where staff can publish new PDF notices, update exam schedules, or post circulars in minutes without requiring ongoing developer assistance. Comprehensive step-by-step documentation and a video tutorial are provided at handover.",
      },
      {
        question: "How does the admission inquiry workflow connect to our admissions office?",
        answer:
          "When a prospective student or parent fills out the admission inquiry form, two things happen instantly: (1) a detailed email alert is sent to your admissions officer's inbox, and (2) the applicant is offered a one-click connection to WhatsApp with their chosen course and details pre-filled. This ensures your counselors can follow up while intent is highest.",
      },
      {
        question: "How are academic research papers made discoverable on Google Scholar?",
        answer:
          "Google Scholar does not index arbitrary websites; it requires specific bibliographic metadata embedded in the HTML head (such as citation_title, citation_author, citation_publication_date, citation_pdf_url, and citation_doi). I implement standard Dublin Core and Highwire Press schemas so crawler bots immediately catalog your journal's articles.",
      },
    ],
    inquiryCategory: "Institutional Websites",
    whatsappMessage: "Hi Aradhy, I'd like to discuss an Institutional Website or Academic Portal for my college/trust.",
  },
};
