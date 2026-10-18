export type ProjectWorkType =
  | "Commercial Client Work"
  | "Independent Client Work"
  | "Academic Platform"
  | "Academic Industry Project"
  | "Academic Research Prototype"
  | "Engineering Demonstration"
  | "Internship Deliverable"
  | "Academic Benchmark";

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  workType: ProjectWorkType;
  category:
    | "Websites & Full-Stack"
    | "E-commerce & Marketplaces"
    | "Academic & Publishing"
    | "Business Websites"
    | "SEO & Digital Growth"
    | "Data Analytics & Dashboards"
    | "AI & Automation";
  description: string;
  shortOverview: string;
  problem: string;
  role: string;
  features: string[];
  marketplaceChannels?: string[];
  techStack: string[];
  images: string[];
  featured: boolean;
  githubLink?: string;
  liveLink?: string;
  challengesSolutions?: {
    challenge: string;
    solution: string;
  };
  verifiedOutcome?: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  pillar: "Website Development" | "E-commerce & Marketplaces" | "SEO, Analytics & Automation";
  categoryBadge: string;
  targetAudience: string;
  iconName: string;
  tagline: string;
  description: string;
  indicativePriceINR: string;
  indicativePriceUSD: string;
  estimatedTimeline: string;
  revisionLimit: string;
  deliverables: string[];
  explicitExclusions: string[];
  representativeProjects: string[];
  ctaLabel: string;
}

export type FreelanceService = ServicePackage;

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  proficiency: "Advanced" | "Proficient" | "Practical";
  focus?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  items: SkillItem[];
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Aradhy Jain",
    positioning: "Web Developer, E-commerce & Digital Growth Specialist",
    title: "Web Developer, E-commerce & Digital Growth Specialist",
    headline: "I Build Websites, E-commerce Experiences & Digital Systems That Help Businesses Grow.",
    tagline: "Web Development • E-commerce & Marketplaces • Technical SEO • Digital Marketing • Analytics",
    mission:
      "I help businesses establish a stronger online presence through responsive websites, e-commerce solutions, marketplace catalogue optimization, technical SEO, digital marketing, and data-driven improvements.",
    email: "jainaradhy01@gmail.com",
    phone: "+91-7351522153",
    whatsapp: "917351522153",
    linkedin: "https://www.linkedin.com/in/aradhyjain",
    github: "https://github.com/Aradhy20",
    location: "Delhi, India",
    profileImage: "/profile.jpeg",
    resume: "/Aradhy_Jain_Resume.pdf",
    availability: "Available for Client Projects & Consultations",
    serviceBadges: [
      "Website Development",
      "E-commerce Storefronts",
      "Amazon · Flipkart · Meesho",
      "Technical SEO",
      "Digital Marketing",
      "Python, Data & Automation",
    ],
  },
  stats: [
    { label: "Commercial Platforms & Stores", value: "8+" },
    { label: "Marketplace Listing Catalogues", value: "3 Channels" },
    { label: "Production & Open Source Builds", value: "15+" },
  ],
  about:
    "I am an IT professional with a B.Tech in Computer Science (Data Science) from Teerthanker Mahaveer University. I work with business owners, manufacturers, institutions, and founders as a Web Developer, E-commerce & Digital Growth Specialist. My practical experience spans custom website engineering, multi-channel marketplace catalog operations (Amazon, Flipkart, Meesho), technical SEO, digital marketing, and data analytics. I combine technical precision with commercial usability to help businesses establish an authoritative digital presence, streamline sales operations, and scale reliably.",
  
  whyWorkWithMe: [
    {
      title: "Technical Implementation + Digital-Business Understanding",
      description:
        "I connect technical development to practical business tasks—ensuring your website, e-commerce catalog, or portal genuinely drives inquiries, customer trust, and sales.",
      icon: "Briefcase",
    },
    {
      title: "Clear Communication & Defined Deliverables",
      description:
        "You always know what is being built, why it matters, and when it will be delivered. Clear milestones, prompt updates, and transparent scoping without confusion.",
      icon: "MessageSquare",
    },
    {
      title: "Responsive, Maintainable Website Development",
      description:
        "Clean, modern architecture built with Next.js, React, and semantic HTML/CSS that your team can maintain and scale without fragile workarounds.",
      icon: "Layout",
    },
    {
      title: "Attention to SEO, Usability & Performance",
      description:
        "Every page is structured with mobile-first responsiveness, accessible navigation, schema metadata, and sub-second Core Web Vitals speed from day one.",
      icon: "Gauge",
    },
    {
      title: "Transparent Workflow with Honest Milestones",
      description:
        "Realistic delivery schedules, honest technical scoping, and verified proof points. No inflated claims—just reliable, professional follow-through.",
      icon: "ShieldCheck",
    },
  ],

  workingProcess: [
    {
      step: "01",
      title: "Discovery",
      tagline: "Understanding the Business & Goals",
      description:
        "We discuss your business model, target audience, existing digital presence, and primary objectives to establish a clear foundation.",
    },
    {
      step: "02",
      title: "Scope",
      tagline: "Defining Deliverables & Dependencies",
      description:
        "I map out the exact deliverables, technical architecture, timeline milestones, and required assets so there are no surprises.",
    },
    {
      step: "03",
      title: "Design",
      tagline: "Creating & Reviewing Visual Direction",
      description:
        "Wireframing and designing responsive, high-contrast layouts tailored to your brand identity, usability, and conversion goals.",
    },
    {
      step: "04",
      title: "Development",
      tagline: "Implementing Approved Scope",
      description:
        "Developing the platform using clean Next.js/React, semantic markup, fast database/API integrations, and responsive components.",
    },
    {
      step: "05",
      title: "Quality Assurance",
      tagline: "Testing Functionality, SEO Basics & Performance",
      description:
        "Rigorous cross-browser, mobile viewport, accessibility (WCAG), Core Web Vitals, and technical SEO verification before going live.",
    },
    {
      step: "06",
      title: "Launch & Support",
      tagline: "Deploying & Handing Over Documentation",
      description:
        "Deploying to production, verifying domain and SSL settings, setting up Google Search Console, and providing complete handover documentation.",
    },
  ],

  services: [
    {
      id: "starter-website",
      title: "Starter Business Website",
      pillar: "Website Development",
      categoryBadge: "Quick Launch",
      targetAudience: "Small businesses, local practitioners, consultants, and founders needing an immediate, credible web presence",
      iconName: "Globe",
      tagline: "Clean, responsive business website launched in 7–10 days with zero technical stress.",
      description:
        "An authoritative, mobile-responsive online headquarters establishing your credibility, service showcase, contact forms, and Google Search Console visibility.",
      indicativePriceINR: "₹18,000 – ₹28,000",
      indicativePriceUSD: "$220 – $340",
      estimatedTimeline: "7 – 10 Business Days",
      revisionLimit: "2 rounds of layout and copy revisions included",
      deliverables: [
        "3 to 5 responsive pages (Home, About, Services, Case Studies/Gallery, Contact)",
        "Mobile-first, high-contrast accessible design tested on mobile, tablet & desktop",
        "Working inquiry form with instant email alerts and direct WhatsApp quick-connect",
        "Technical SEO foundation: XML sitemap, robots.txt, metadata, and Search Console setup",
        "High-speed hosting deployment (Vercel / Netlify / Hostinger) with SSL encryption",
        "1-hour handover walkthrough and documentation for future content updates",
      ],
      explicitExclusions: [
        "E-commerce cart, payment gateways, and inventory systems (see E-commerce package)",
        "Custom database backends or member login portals",
        "Third-party recurring domain registration and hosting fees (paid directly to providers)",
        "Professional photography and brand identity design from scratch",
      ],
      representativeProjects: ["DSR College (dsr.college)", "Jambudweep Platform"],
      ctaLabel: "Discuss Starter Website",
    },
    {
      id: "custom-business-website",
      title: "Custom Business Website & Portal",
      pillar: "Website Development",
      categoryBadge: "Bespoke Architecture",
      targetAudience: "Growing enterprises, educational institutions, research publishers, and professional firms",
      iconName: "Layers",
      tagline: "Bespoke digital architecture tailored to conversions, institutional compliance & speed.",
      description:
        "Full-stack custom platform engineered with Next.js/React. Designed for complex content structures, academic/compliance workflows, and sub-second Core Web Vitals speeds.",
      indicativePriceINR: "₹38,000 – ₹75,000",
      indicativePriceUSD: "$460 – $920",
      estimatedTimeline: "3 – 4 Weeks",
      revisionLimit: "3 structured milestone review rounds",
      deliverables: [
        "Up to 10–15 bespoke responsive pages with custom UI component architecture",
        "Dynamic content sections (Notices, Announcements, Course Catalogs, or Archives)",
        "Comprehensive Technical SEO: Schema.org JSON-LD (Organization, EducationalOrganization, Article)",
        "Preloaded hero assets and speed optimization achieving sub-second mobile LCP",
        "Prospectus downloads, multi-step inquiry forms, or payment gateway integration",
        "Staging preview environment, deployment walkthrough, and 30-day post-launch warranty",
      ],
      explicitExclusions: [
        "Multi-channel marketplace catalog operations (see E-commerce package)",
        "Payment gateway merchant processing fees (Cashfree / Razorpay billed by provider)",
        "Third-party server/database hosting subscriptions",
      ],
      representativeProjects: ["Sanmati Journal (sanmatijournal.in)", "DSR College (dsr.college)"],
      ctaLabel: "Discuss Custom Portal",
    },
    {
      id: "ecommerce-storefronts",
      title: "E-commerce & Marketplace Storefront",
      pillar: "E-commerce & Marketplaces",
      categoryBadge: "Commerce Operations",
      targetAudience: "Artisanal manufacturers, handicraft exporters, retailers, and online D2C brands",
      iconName: "ShoppingBag",
      tagline: "Turn raw inventory into discoverable products on Amazon, Flipkart, Meesho & web.",
      description:
        "Full-spectrum commerce operations combining multi-channel marketplace listing architecture with an optimized direct-to-consumer digital storefront.",
      indicativePriceINR: "₹32,000 – ₹65,000",
      indicativePriceUSD: "$390 – $800",
      estimatedTimeline: "2 – 3 Weeks",
      revisionLimit: "2 rounds of catalog copy & keyword refinement",
      deliverables: [
        "Master product catalog architecture: SKU hierarchies, dimensions, materials, and attributes",
        "Marketplace onboarding & listing templates prepared for Amazon Seller Central, Flipkart, and Meesho",
        "Keyword-rich, policy-compliant product titles (under 200 chars) and benefit-driven bullet points",
        "Listing image planning and dimensional compliance guidelines per marketplace requirements",
        "Direct online product catalog storefront with category filters and mobile inquiry/checkout flow",
        "Inventory syncing guidelines and order dispatch operating workflow",
      ],
      explicitExclusions: [
        "Marketplace advertising budgets (PPC ad spend managed separately)",
        "Marketplace platform commission, referral, and closing fees",
        "Physical product warehousing, packaging, and courier shipping operations",
        "Government trademark registration fees (Brand Registry setup provided once registered)",
      ],
      representativeProjects: ["Paras Metal (Amazon, Flipkart, Meesho)"],
      ctaLabel: "Discuss E-commerce & Storefront",
    },
    {
      id: "technical-seo-optimization",
      title: "Technical SEO & Website Optimization",
      pillar: "SEO, Analytics & Automation",
      categoryBadge: "Search Visibility",
      targetAudience: "Businesses with an existing website that needs more organic search traffic, indexing & speed",
      iconName: "TrendingUp",
      tagline: "Fix crawl errors, implement JSON-LD schemas, and speed up Core Web Vitals.",
      description:
        "Code-level remediation and search engine optimization. I diagnose crawl issues, configure Google Search Console, resolve mobile performance bottlenecks, and implement structured data.",
      indicativePriceINR: "₹16,000 – ₹32,000",
      indicativePriceUSD: "$190 – $390",
      estimatedTimeline: "1 – 2 Weeks",
      revisionLimit: "2 post-remediation validation audits",
      deliverables: [
        "Exhaustive technical SEO audit report identifying crawl errors, status codes, and index barriers",
        "Code-level implementation of JSON-LD structured data (Product, LocalBusiness, FAQ, Breadcrumb)",
        "Title, meta description, and heading hierarchy (h1-h3) optimization across key landing pages",
        "Core Web Vitals tuning: image WebP conversion, font preloading, layout shift (CLS) fixes, and LCP reduction",
        "Google Search Console configuration: XML sitemap submission, canonical verification, and crawl error resolution",
        "Executive Before/After measurement report detailing technical health improvements",
      ],
      explicitExclusions: [
        "Purchasing third-party backlinks or private blog networks (PBNs)",
        "Guaranteed #1 Google ranking promises (unethical and contrary to search engine policies)",
        "Full website re-platforming or redesign",
      ],
      representativeProjects: ["Sanmati Journal Citation SEO", "DSR College Speed Tuning"],
      ctaLabel: "Discuss SEO & Optimization",
    },
    {
      id: "maintenance-analytics",
      title: "Monthly Website Maintenance & Analytics",
      pillar: "SEO, Analytics & Automation",
      categoryBadge: "Monthly Retainer",
      targetAudience: "Businesses requiring reliable monthly uptime, security, content updates & KPI reporting",
      iconName: "BarChart3",
      tagline: "Keep your website secure, blazing fast, and informed with automated monthly reporting.",
      description:
        "A proactive monthly technical partnership. Regular security and framework updates, automated uptime monitoring, minor content edits, and executive analytics reports.",
      indicativePriceINR: "₹8,000 – ₹18,000 / month",
      indicativePriceUSD: "$100 – $220 / month",
      estimatedTimeline: "Monthly Ongoing Retainer (Cancel anytime with 15-day notice)",
      revisionLimit: "Up to 5 hours of included technical/content tweaks per month",
      deliverables: [
        "Continuous uptime, SSL certificate status, and security monitoring",
        "Framework, dependency, and security patch updates (Next.js/React/Node)",
        "Monthly performance and Core Web Vitals health check",
        "Up to 5 hours of monthly content updates, banner changes, or new product listings",
        "Automated executive dashboard report (traffic trends, inquiry counts, top search queries)",
        "Priority WhatsApp & email support with 12-hour response window for critical issues",
      ],
      explicitExclusions: [
        "Building brand-new multi-page sections or major architectural redesigns (discounted add-on available)",
        "Handling customer service inquiries on behalf of the business",
        "Third-party API overage costs or external SaaS fees",
      ],
      representativeProjects: ["Sanmati Journal Maintenance", "Paras Metal Retainer"],
      ctaLabel: "Discuss Maintenance Retainer",
    },
  ] as ServicePackage[],

  experience: [
    {
      id: 1,
      title: "Associate – Robotics Data Annotation",
      company: "Tech Mahindra",
      period: "June 2026 – Present",
      type: "Formal Employment",
      responsibilities: [
        "Annotated and labeled human and robotic actions in image and video datasets following project guidelines to support AI and Computer Vision model training.",
        "Performed quality checks and validated annotated data to ensure high accuracy, consistency, and compliance with project standards.",
      ],
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "Teerthanker Mahaveer University",
      period: "January 2026 – March 2026",
      type: "University Internship",
      responsibilities: [
        "Analyzed 5000+ records using Python and SQL to generate actionable institutional insights.",
        "Performed data cleaning, exploratory data analysis (EDA), and statistical analysis across operational datasets.",
        "Developed interactive Power BI dashboards improving reporting efficiency by 35%.",
        "Optimized SQL queries for automated data extraction and administrative reporting.",
      ],
    },
    {
      id: 3,
      title: "Web Developer & Digital Growth Partner",
      company: "Freelance Practice",
      period: "2025 – Present",
      type: "Independent Freelance Practice",
      responsibilities: [
        "Engineered full-stack academic web platform sanmatijournal.in (ISSN 3108-1819) with responsive UI, article archives, and Google Scholar citation schemas.",
        "Built institutional web portal for DSR College (dsr.college) featuring teacher education programmes (B.Ed., D.El.Ed., ITEP) with measured fast server response (~457ms TTFB).",
        "Structured multi-channel e-commerce operations, SKU architecture, and listing workflows for Paras Metal across Meesho, Amazon, and Flipkart.",
      ],
    },
    {
      id: 4,
      title: "IT Developer Intern",
      company: "MathesisLabs Technologies Pvt Ltd",
      period: "June 2025 – December 2025",
      type: "Industry Internship",
      responsibilities: [
        "Built Python automation scripts reducing manual processing time by 30%.",
        "Designed ETL pipelines for efficient data integration.",
        "Improved backend performance and scalability.",
      ],
    },
    {
      id: 5,
      title: "Data Analyst Intern",
      company: "Trainity / Cognifyz / Oasis Infobyte",
      period: "November 2024 – March 2025",
      type: "Virtual Internship Training",
      responsibilities: [
        "Completed project-based virtual data analytics internships across Trainity, Cognifyz Technologies, and Oasis Infobyte.",
        "Performed data cleaning, exploratory data analysis (EDA), and trend identification on real-world datasets using Python and Excel.",
        "Built analytical dashboards and visualizations to communicate quantitative patterns clearly.",
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: 1,
      slug: "paras-metal",
      title: "Paras Metal — E-commerce & Marketplace Operations",
      subtitle: "Multi-Channel Retail: Direct Web Storefront, Amazon, Flipkart & Meesho Catalog Management",
      workType: "Commercial Client Work",
      category: "E-commerce & Marketplaces",
      shortOverview:
        "Full-spectrum e-commerce solution for an artisanal brass and copper handicraft manufacturer, encompassing product catalog architecture, marketplace listing workflows (Amazon, Flipkart, Meesho), and optimized product content.",
      description:
        "Paras Metal manufactures handcrafted brass vases, copper planters, and geometric metal home decor. As their digital growth partner, I developed their digital storefront and structured their marketplace operations across Amazon, Flipkart, and Meesho. The project involved cataloging raw inventory, writing search-optimized product titles and bullet points, organizing SKU hierarchies, creating compliant listing image sets, and standardizing product attributes across all sales channels.",
      problem:
        "The manufacturer operated strictly offline and through casual social media inquiries without organized product listings, SKU codes, or structured marketplace presence, missing out on retail demand and wholesale buyers nationwide.",
      role:
        "E-commerce Web Developer & Marketplace Operations Lead: Built the digital catalog interface, organized SKU structures, wrote keyword-optimized product copy, and executed multi-channel listing setup across Amazon, Flipkart, and Meesho.",
      features: [
        "Multi-channel catalog setup for Amazon, Flipkart, and Meesho marketplaces",
        "Keyword-rich, policy-compliant product titles, feature bullets, and descriptions",
        "Standardized SKU coding, product attributes (dimensions, material, finish, care instructions)",
        "Curated product photography sets with zoom views and material callouts",
        "Direct-to-consumer responsive web storefront with category and material filtering",
        "Cross-platform inventory and pricing synchronization guidelines",
      ],
      marketplaceChannels: ["Amazon India", "Flipkart", "Meesho", "Direct Web Store"],
      techStack: ["E-commerce UX", "Amazon Seller Central", "Flipkart Marketplace", "Meesho Supplier", "Next.js", "Tailwind CSS", "SEO"],
      images: ["/project_paras_metal.jpg", "/project_saas_dashboard.png"],
      featured: true,
      challengesSolutions: {
        challenge:
          "Marketplaces have strict, differing image dimension, title length, and attribute requirements, making bulk cataloging error-prone.",
        solution:
          "Created a centralized master product data sheet with automated validation rules that exported channel-specific listing formats for Amazon, Flipkart, and Meesho.",
      },
      verifiedOutcome:
        "Transformed unorganized handicraft inventory into a structured commercial product line with active listings on Amazon, Flipkart, and Meesho, establishing a credible digital brand.",
    },
    {
      id: 2,
      slug: "sanmati-journal",
      title: "Sanmati Spectrum of Knowledge — Academic Publishing Portal",
      subtitle: "Peer-Reviewed Multidisciplinary Research Journal (ISSN 3108-1819 & CrossRef DOI)",
      workType: "Commercial Client Work",
      category: "Academic & Publishing",
      shortOverview:
        "Scholarly publication platform streamlining research paper discovery, CrossRef DOI indexing, editorial review documentation, and Google Scholar citations.",
      description:
        "Developed and actively manage sanmatijournal.in, the digital publishing platform for an international peer-reviewed multidisciplinary research journal (ISSN 3108-1819). The platform presents structured journal volumes, research abstracts, author submission guidelines, CrossRef DOI indexing, and editorial oversight.",
      problem:
        "Academic journals require strict metadata standards, clear issue-by-issue archiving, and precise bibliographic indexing so published papers are discovered and cited in academic search engines.",
      role:
        "Web Developer & Platform Manager: Architected the digital journal platform, structured paper archives, and implemented academic metadata schemas (Google Scholar) and technical SEO.",
      features: [
        "CrossRef DOI indexing and official ISSN 3108-1819 accreditation integration",
        "COPE publication ethics compliant editorial and peer-review workflows",
        "Google Scholar citation schema metadata for academic search visibility",
        "Volume and issue archives with downloadable research abstracts and author guidelines",
        "Fast-loading, distraction-free reading typography with light/dark theme support",
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Academic SEO", "Information Architecture"],
      images: ["/project_digital_journal.png", "/project_saas_dashboard.png"],
      featured: true,
      liveLink: "https://sanmatijournal.in",
      githubLink: "https://github.com/Aradhy20/sanmati-journal",
      challengesSolutions: {
        challenge:
          "Structuring multi-author academic entries with varying citation formats without creating visual clutter.",
        solution:
          "Engineered modular metadata cards separating abstracts, author affiliations, and citation strings with expandable reading panels.",
      },
      verifiedOutcome:
        "Actively operating as the official publishing portal for Sanmati Journal, indexed with ISSN 3108-1819 and CrossRef DOI, supporting researchers globally.",
    },
    {
      id: 3,
      slug: "dsr-college",
      title: "Dr. Sarvepalli Radhakrishnan College — Institutional Portal",
      subtitle: "Authoritative Academic & Teacher Education Web Portal (dsr.college)",
      workType: "Commercial Client Work",
      category: "Business Websites",
      shortOverview:
        "High-trust institutional web platform for a recognized teacher education college in Nalanda, Bihar, featuring academic programme details, admissions workflows, and regulatory disclosures.",
      description:
        "Designed and built the official institutional website for Dr. Sarvepalli Radhakrishnan College (dsr.college). The web portal organizes teacher education programmes (B.Ed., D.El.Ed., and Four-Year ITEP), student admissions guidelines, prospectus downloads, faculty directories, and mandatory institutional disclosures within a high-contrast, accessible layout.",
      problem:
        "Prospective applicants and regulatory accreditation teams lacked a central, mobile-responsive source of truth for admission criteria, fee structures, faculty credentials, and NCTE compliance notifications.",
      role:
        "Lead Web Developer & UI Architect: Structured site information architecture, built mobile-first responsive layouts, integrated prospectus download pipelines, and achieved sub-second Core Web Vitals speeds.",
      features: [
        "Comprehensive teacher education curriculum guides (B.Ed., D.El.Ed., Four-Year ITEP)",
        "Admissions Portal with prospectus downloads, eligibility self-check, and helpline",
        "Institutional EducationalOrganization Schema.org structured data for Google ranking",
        "High-priority hero LCP image preloading ensuring fast mobile rendering on rural networks",
        "Dynamic notices and circulars bulletin board for administrative announcements",
        "WCAG-aligned contrast, clear typography hierarchy, and accessible navigation",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Technical SEO", "Accessibility"],
      images: ["/project_dsr_college.jpg", "/project_saas_dashboard.png"],
      featured: true,
      liveLink: "https://dsr.college/",
      challengesSolutions: {
        challenge:
          "Ensuring instant load times for prospective rural students accessing admission prospectuses on limited mobile bandwidth.",
        solution:
          "Implemented lightweight vanilla DOM components, optimized WebP graphics, and preloaded critical LCP assets, achieving sub-second load times.",
      },
      verifiedOutcome:
        "Operating live at dsr.college, serving thousands of prospective students and meeting all institutional transparency requirements.",
    },
    {
      id: 4,
      slug: "jambudweep",
      title: "Jambudweep Digital Platform",
      workType: "Independent Client Work",
      category: "Websites & Full-Stack",
      shortOverview:
        "A cultural and spiritual heritage platform featuring interactive visitor sections, historical archives, and event updates.",
      description:
        "A comprehensive digital presence developed for the historical and spiritual center Jambudweep, featuring custom landing layouts, leadership profiles, photo galleries, and visitor guidance.",
      problem:
        "Heritage centers need to welcome thousands of visitors with accurate visiting hours, historical context, and facility details in an approachable mobile format.",
      role: "Frontend Developer: Engineered responsive layouts, navigation systems, and interactive media showcases.",
      features: [
        "Interactive visitor guide and facility navigation",
        "Leadership and scholar profile showcase",
        "High-performance media gallery with responsive image grids",
        "Event notifications and visiting guidelines",
      ],
      techStack: ["JavaScript", "Tailwind CSS", "Node.js", "Responsive UI"],
      images: ["/project_heritage_platform.png", "/project_saas_dashboard.png"],
      featured: false,
      githubLink: "https://github.com/Aradhy20/jain-mandir-website",
      verifiedOutcome:
        "Delivered a polished digital presence that simplifies visitor planning and celebrates cultural heritage.",
    },
    {
      id: 5,
      slug: "skypilot",
      title: "SkyPilot Aviation Academy",
      workType: "Engineering Demonstration",
      category: "Websites & Full-Stack",
      shortOverview:
        "An educational portal featuring an interactive Cadet Pilot Eligibility Quiz, flight hour calculator, and course guides.",
      description:
        "Developed an engaging educational portal for an aviation training academy, integrating prospective student quizzes, interactive cost estimation tools, and structured course overviews.",
      problem:
        "Aviation training has strict age, medical, and educational prerequisites that often confuse prospective cadets.",
      role: "Web Developer & UI Designer: Implemented interactive qualification quizzes, fee calculators, and course guides.",
      features: [
        "Step-by-step Cadet Pilot Eligibility Quiz",
        "Interactive flight training cost and timeline calculator",
        "Course breakdown for Private & Commercial Pilot Licenses (PPL/CPL)",
        "Mobile-optimized lead capture and consultation forms",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Interactive Tools", "Responsive UI"],
      images: ["/project_aviation_academy.png", "/project_saas_dashboard.png"],
      featured: false,
      githubLink: "https://github.com/Aradhy20/sky-pilot-academy-website",
      verifiedOutcome:
        "Increased prospective cadet engagement through transparent eligibility self-assessments.",
    },
    {
      id: 6,
      slug: "team-task-manager",
      title: "Full-Stack Team Task Manager",
      workType: "Engineering Demonstration",
      category: "Websites & Full-Stack",
      shortOverview:
        "A real-time workspace for task coordination and team collaboration with interactive Kanban boards and live status tracking.",
      description:
        "Full-stack team productivity application built with React and Node.js. Features responsive Kanban task boards, priority filtering, status transitions, and user task assignments.",
      problem:
        "Small teams often require a lightweight, no-clutter task management system without enterprise bloat.",
      role: "Full-Stack Developer: Built the complete frontend UI, backend REST APIs, data schema, and cloud deployment.",
      features: [
        "Interactive Kanban board with status drag/move workflows",
        "Priority tags, due date tracking, and task filtering",
        "REST API endpoints with structured JSON responses",
        "Hosted live on Railway with zero-downtime deployment",
      ],
      techStack: ["JavaScript", "React", "Node.js", "Express", "Tailwind CSS", "Railway"],
      images: ["/project_saas_dashboard.png", "/project_data_analytics.png"],
      featured: false,
      githubLink: "https://github.com/Aradhy20/Team-Task-Manager-Full-Stack-",
      liveLink: "https://teamtask-manager-assesment-production.up.railway.app",
      verifiedOutcome:
        "Deployed and fully operational as an assessment benchmark project with real-time state management.",
    },
    {
      id: 7,
      slug: "mental-health-ai",
      title: "Mental Health AI & Sentiment Analysis",
      workType: "Academic Research Prototype",
      category: "AI & Automation",
      shortOverview:
        "An NLP-driven analytical framework identifying emotional nuances, sentiment signals, and support indicators in text data.",
      description:
        "Engineered an applied NLP classification pipeline analyzing natural language statements to identify sentiment severity, emotional markers, and early support triggers using Scikit-learn and Pandas.",
      problem:
        "Understanding emotional sentiment in community discussions and student feedback requires nuanced NLP beyond simple binary scoring.",
      role: "AI & NLP Developer: Data preprocessing, TF-IDF vectorization, model training, and evaluation.",
      features: [
        "Multi-class emotional sentiment classification",
        "Custom text cleaning pipeline removing noise and tokenizing phrases",
        "Confusion matrix and precision-recall performance analysis",
        "Exportable Python inference script for batch analysis",
      ],
      techStack: ["Python", "NLP", "Scikit-learn", "Pandas", "Matplotlib"],
      images: ["/project_ai_network.png", "/project_data_analytics.png"],
      featured: false,
      githubLink: "https://github.com/Aradhy20/mental-heath-ai",
      verifiedOutcome:
        "Achieved strong classification accuracy across validation datasets and created reproducible research notebooks.",
    },
    {
      id: 8,
      slug: "virtual-counselor",
      title: "University Virtual Counselor",
      workType: "Engineering Demonstration",
      category: "AI & Automation",
      shortOverview:
        "A conversational AI assistant providing empathetic student onboarding support, course advice, and university guidance.",
      description:
        "An automated conversational counselor prototype utilizing transformer models and structured prompt frameworks to answer common university queries and student FAQs.",
      problem:
        "University support desks face repetitive high-volume queries during admissions seasons, delaying assistance to students.",
      role: "Developer: Implemented conversational dialogue trees, prompt templates, and response validation.",
      features: [
        "Contextual responses for academic queries and campus policies",
        "Empathetic tone conditioning via structured prompt engineering",
        "Fallback routing to human staff when queries exceed confidence threshold",
      ],
      techStack: ["Python", "Transformers", "NLP", "Prompt Engineering"],
      images: ["/project_ai_network.png", "/project_saas_dashboard.png"],
      featured: false,
      githubLink: "https://github.com/Aradhy20/University-virtual-Counselor",
      verifiedOutcome:
        "Demonstrated automated resolution of standard student FAQs while maintaining a supportive conversational persona.",
    },
    {
      id: 9,
      slug: "hr-salary-dashboard",
      title: "HR Salary Dashboard & Predictive Modeling",
      workType: "Academic Industry Project",
      category: "Data Analytics & Dashboards",
      shortOverview:
        "A predictive compensation analytics engine trained on corporate payroll datasets to forecast salary benchmarks and equity.",
      description:
        "Built during the TCS-iON RIO project, this analytics tool trains regression models on corporate compensation datasets to predict salary ranges based on tenure, experience, and role KPIs.",
      problem:
        "HR departments require objective compensation benchmarking to prevent pay disparity and improve workforce retention.",
      role: "Data Analyst & ML Developer: Data preprocessing, exploratory data analysis, regression modeling, and reporting.",
      features: [
        "Supervised regression models predicting salary ranges with high R² accuracy",
        "Exploratory analysis surfacing tenure and skill premium correlations",
        "Executive summary dashboards with key hiring cost metrics",
      ],
      techStack: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Analytics"],
      images: ["/project_data_analytics.png", "/project_saas_dashboard.png"],
      featured: false,
      githubLink: "https://github.com/Aradhy20/TCS-iON-RIO-125-HR-Salary-Dashboard---Train-the-Dataset-and-Predict-Salary",
      verifiedOutcome:
        "Completed as an accredited TCS-iON RIO practical industry project with formal verification.",
    },
    {
      id: 10,
      slug: "hr-talent-strategy",
      title: "HR Talent Strategy Analysis",
      workType: "Academic Industry Project",
      category: "Data Analytics & Dashboards",
      shortOverview:
        "A talent engagement and workforce retention analysis for geographically dispersed remote and hybrid teams.",
      description:
        "Data-driven exploratory study analyzing employee survey responses and productivity metrics across distributed teams, identifying drivers of engagement and collaborative health.",
      problem:
        "Remote and hybrid organizations often suffer from unseen employee turnover risks without actionable data.",
      role: "Data Analyst: Conducted statistical testing, factor correlation, and deployed the interactive web report.",
      features: [
        "Correlation analysis between geographical dispersion and project cycle times",
        "Turnover risk scoring model identifying at-risk employee clusters",
        "Interactive analytical report deployed on Vercel",
      ],
      techStack: ["Python", "Jupyter Notebook", "Pandas", "Data Analytics", "Vercel"],
      images: ["/project_data_analytics.png", "/project_saas_dashboard.png"],
      featured: false,
      githubLink: "https://github.com/Aradhy20/Aradhy20-HR-Strategy-Analysis-on-Talent-Engagement-for-geographically-dispersed-resources",
      liveLink: "https://aradhy20-hr-strategy-analysis-git-8ebbd1-aardhy-jains-projects.vercel.app",
      verifiedOutcome:
        "Delivered an actionable workforce report with deployed visualization access on Vercel.",
    },
    {
      id: 11,
      slug: "gym-management",
      title: "Gym Management System",
      workType: "Engineering Demonstration",
      category: "Websites & Full-Stack",
      shortOverview:
        "An active membership, workout schedule, and trainer booking management application with relational database models.",
      description:
        "A full-stack fitness club administration console managing client memberships, personal training schedules, and subscription renewals with clean UI states.",
      problem:
        "Local fitness centers struggle with manual or fragmented spreadsheet records for active memberships and trainer shifts.",
      role: "Full-Stack Developer: Designed relational tables, CRUD operations, and responsive dashboard interface.",
      features: [
        "Member profile creation and subscription status tracking",
        "Trainer booking and schedule conflict detection",
        "Financial summary of monthly membership dues",
      ],
      techStack: ["JavaScript", "React", "Node.js", "CSS3", "Database Modeling"],
      images: ["/project_health_system.png", "/project_saas_dashboard.png"],
      featured: false,
      githubLink: "https://github.com/Aradhy20/gym-management",
      verifiedOutcome:
        "Built a reliable operational tool demonstrating structured CRUD state handling and database relations.",
    },
    {
      id: 12,
      slug: "hospital-management",
      title: "Hospital Management System",
      workType: "Engineering Demonstration",
      category: "Websites & Full-Stack",
      shortOverview:
        "A patient intake, treatment scheduling, and operational administration console featuring structured clinical models.",
      description:
        "An administrative healthcare management portal managing patient registration, doctor appointments, and department allocation with strict data integrity.",
      problem:
        "Healthcare clinics need dependable, straightforward patient record lookup without complicated multi-screen workflows.",
      role: "Developer: Implemented intake forms, scheduling logic, and doctor appointment matching.",
      features: [
        "Patient digital registration and medical history logs",
        "Doctor appointment scheduling by department",
        "Billing and prescription record management",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Database Modeling"],
      images: ["/project_health_system.png", "/project_saas_dashboard.png"],
      featured: false,
      githubLink: "https://github.com/Aradhy20/Hospital-management-system",
      verifiedOutcome:
        "Developed a structured administrative prototype adhering to clean relational schemas.",
    },
    {
      id: 13,
      slug: "oasis-infobyte",
      title: "Oasis Infobyte Analytics Projects",
      workType: "Internship Deliverable",
      category: "Data Analytics & Dashboards",
      shortOverview:
        "A curated series of exploratory data analytics, statistical modeling, and data visualization deliverables.",
      description:
        "Completed during the Oasis Infobyte internship, encompassing customer segmentation, sales trend discovery, and statistical reporting across real-world datasets.",
      problem: "Extracting actionable business patterns from raw, unstructured transactional datasets.",
      role: "Data Analyst Intern: Exploratory analysis, feature engineering, and visualization reporting.",
      features: [
        "Automated null value and outlier detection workflows",
        "Comparative sales analysis across regional territories",
        "Polished visualizations using Seaborn and Matplotlib",
      ],
      techStack: ["Python", "Jupyter Notebook", "Pandas", "Seaborn", "Data Visualization"],
      images: ["/project_data_analytics.png", "/project_botany_ml.png"],
      featured: false,
      githubLink: "https://github.com/Aradhy20/Data-Analytics-projects-with-Oasis-Infobyte",
      verifiedOutcome:
        "Demonstrated practical data analyst competencies during certified industry internship.",
    },
    {
      id: 14,
      slug: "iris-classification",
      title: "Iris Flower Classification",
      workType: "Academic Benchmark",
      category: "AI & Automation",
      shortOverview:
        "A foundational supervised machine learning model classifying plant species using multivariate floral features.",
      description:
        "A classic machine learning classification benchmark implementing multiple supervised algorithms to predict iris species based on petal and sepal measurements.",
      problem: "Evaluating classifier precision, recall, and decision boundaries on multivariate feature spaces.",
      role: "ML Developer: Feature exploration, model training, cross-validation, and metrics comparison.",
      features: [
        "Pairplot feature distribution and clustering analysis",
        "Cross-validation comparison across 4 classification models",
        "Documented reproducible Jupyter notebook",
      ],
      techStack: ["Python", "Scikit-learn", "Jupyter Notebook", "Machine Learning"],
      images: ["/project_botany_ml.png", "/project_ai_network.png"],
      featured: false,
      githubLink: "https://github.com/Aradhy20/Iris-Flower-Classification",
      verifiedOutcome:
        "Established core machine learning foundations with high cross-validated test accuracy.",
    },
  ] as Project[],

  skills: [
    {
      category: "Frontend Development",
      description: "Modern, component-driven web interfaces built with high visual polish and fast load times.",
      items: [
        { name: "React", level: 90, proficiency: "Advanced", focus: "Component architecture, hooks, state" },
        { name: "Next.js 14", level: 92, proficiency: "Advanced", focus: "App Router, SSR, Server Components" },
        { name: "TypeScript", level: 88, proficiency: "Advanced", focus: "Strict typing, generics, interfaces" },
        { name: "JavaScript (ES6+)", level: 94, proficiency: "Advanced", focus: "Async/await, DOM, modular code" },
        { name: "Tailwind CSS", level: 95, proficiency: "Advanced", focus: "Design systems, responsive utilities" },
        { name: "HTML5 / CSS3", level: 95, proficiency: "Advanced", focus: "Semantic markup, modern layouts" },
      ],
    },
    {
      category: "E-commerce & Marketplaces",
      description: "Storefronts, marketplace operations on Amazon, Flipkart & Meesho, and catalog management.",
      items: [
        { name: "Amazon Seller Central", level: 90, proficiency: "Advanced", focus: "Listing creation, bulk templates, bullet copy" },
        { name: "Flipkart Marketplace", level: 88, proficiency: "Advanced", focus: "Cataloging, SKU attributes, image compliance" },
        { name: "Meesho Supplier Panel", level: 88, proficiency: "Advanced", focus: "Product uploads, pricing slabs, descriptions" },
        { name: "Catalog Architecture", level: 92, proficiency: "Advanced", focus: "SKU hierarchy, attribute standardization" },
        { name: "Product Listing SEO", level: 94, proficiency: "Advanced", focus: "Keyword-rich titles, search terms, bullet points" },
      ],
    },
    {
      category: "Backend Development",
      description: "Server-side architectures, RESTful APIs, and secure application backends.",
      items: [
        { name: "Node.js", level: 86, proficiency: "Advanced", focus: "Runtime architecture, asynchronous I/O" },
        { name: "Express.js", level: 85, proficiency: "Proficient", focus: "REST API routing, middleware, auth" },
        { name: "Python (FastAPI / Flask)", level: 88, proficiency: "Advanced", focus: "Data APIs, microservices" },
        { name: "RESTful API Design", level: 90, proficiency: "Advanced", focus: "CRUD endpoints, status codes, JSON" },
      ],
    },
    {
      category: "Databases & APIs",
      description: "Scalable relational and NoSQL databases designed for data integrity.",
      items: [
        { name: "PostgreSQL", level: 86, proficiency: "Proficient", focus: "Relational modeling, indexing, joins" },
        { name: "MySQL", level: 88, proficiency: "Advanced", focus: "Schema design, query optimization" },
        { name: "MongoDB", level: 82, proficiency: "Proficient", focus: "Document modeling, aggregation" },
        { name: "SQL Query Tuning", level: 90, proficiency: "Advanced", focus: "Complex joins, grouping, subqueries" },
      ],
    },
    {
      category: "SEO & Digital Marketing",
      description: "Search engine visibility, performance optimization, and audience growth.",
      items: [
        { name: "Technical SEO Auditing", level: 92, proficiency: "Advanced", focus: "Crawling, indexing, canonicals" },
        { name: "On-Page SEO Optimization", level: 94, proficiency: "Advanced", focus: "Metadata, heading hierarchy, keywords" },
        { name: "Google Search Console & GA4", level: 88, proficiency: "Advanced", focus: "Traffic tracking, index coverage" },
        { name: "Core Web Vitals Tuning", level: 90, proficiency: "Advanced", focus: "LCP, CLS, INP speed optimization" },
        { name: "Social Media Creatives", level: 85, proficiency: "Proficient", focus: "Content calendars, visual branding" },
      ],
    },
    {
      category: "Analytics & Reporting",
      description: "Executive dashboards and business intelligence systems transforming raw data.",
      items: [
        { name: "Power BI", level: 88, proficiency: "Advanced", focus: "DAX formulas, KPI cards, visual reports" },
        { name: "Advanced Excel", level: 92, proficiency: "Advanced", focus: "Pivot tables, VLOOKUP/XLOOKUP, macros" },
        { name: "Google Sheets Dashboards", level: 90, proficiency: "Advanced", focus: "Automated queries, live syncing" },
        { name: "KPI & Metric Design", level: 88, proficiency: "Advanced", focus: "Operational efficiency, conversion rates" },
      ],
    },
    {
      category: "Python & Automation",
      description: "Workflow automation, web scraping, and high-speed data cleaning pipelines.",
      items: [
        { name: "Python", level: 92, proficiency: "Advanced", focus: "Object-oriented scripting, automation" },
        { name: "Pandas & NumPy", level: 90, proficiency: "Advanced", focus: "Data wrangling, cleaning, transformation" },
        { name: "BeautifulSoup & Requests", level: 88, proficiency: "Advanced", focus: "Web scraping, data extraction" },
        { name: "Workflow Automation Scripts", level: 91, proficiency: "Advanced", focus: "Scheduled tasks, file processing" },
      ],
    },
    {
      category: "AI & Machine Learning",
      description: "Applied natural language processing, transformer pipelines, and generative workflows.",
      items: [
        { name: "Scikit-learn", level: 82, proficiency: "Proficient", focus: "Classification, regression, clustering" },
        { name: "NLP & Sentiment Analysis", level: 86, proficiency: "Advanced", focus: "TF-IDF, tokenization, text mining" },
        { name: "Transformers (HuggingFace)", level: 83, proficiency: "Proficient", focus: "Pretrained models, text inference" },
        { name: "Prompt Engineering & LLMs", level: 92, proficiency: "Advanced", focus: "System prompts, structured outputs" },
      ],
    },
    {
      category: "Tools & Deployment",
      description: "Version control, modern developer tooling, and cloud deployment platforms.",
      items: [
        { name: "Git & GitHub", level: 90, proficiency: "Advanced", focus: "Branching, PRs, version control" },
        { name: "Vercel & Railway", level: 88, proficiency: "Advanced", focus: "Continuous deployment, environments" },
        { name: "Postman", level: 86, proficiency: "Proficient", focus: "API endpoint testing, collections" },
        { name: "Figma (UI/UX)", level: 82, proficiency: "Proficient", focus: "Wireframing, design specs, tokens" },
      ],
    },
  ] as SkillGroup[],

  certifications: [
    {
      id: 1,
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      date: "Verified",
      skills: ["Data Analysis", "SQL", "R Programming", "Tableau", "Data Ethics"],
      verificationUrl: "https://www.coursera.org/professional-certificates/google-data-analytics",
      credentialNote: "Professional 8-course credential covering data cleaning, analysis, SQL pipelines, and Tableau visualizations.",
    },
    {
      id: 2,
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia / Forage",
      date: "Verified",
      skills: ["Data Analytics", "Data Visualization", "Process Improvement"],
      verificationUrl: "https://www.theforage.com/simulations/deloitte-au/data-analytics",
      credentialNote: "Practical simulation delivering client data insights, dashboard wireframing, and stakeholder presentations.",
    },
    {
      id: 3,
      title: "Python (Basics)",
      issuer: "HackerRank",
      date: "Verified",
      skills: ["Problem Solving", "Algorithm Design", "Scripting"],
      verificationUrl: "https://www.hackerrank.com/certificates",
      credentialNote: "Validated technical competency in core Python data structures, algorithms, and modular scripting.",
    },
    {
      id: 4,
      title: "Data Analytics and Reporting",
      issuer: "Trainity / Oasis Infobyte",
      date: "Completed",
      skills: ["Excel Modeling", "Business Intelligence", "KPI Tracking"],
      credentialNote: "Hands-on data cleaning, exploratory data analysis (EDA), and executive reporting across real-world business datasets.",
    },
    {
      id: 5,
      title: "Statistics using R and Python",
      issuer: "Cognifyz / TMU",
      date: "Completed",
      skills: ["Statistical Modeling", "Hypothesis Testing", "Exploratory Analysis"],
      credentialNote: "Practical statistical distribution modeling, hypothesis testing, and exploratory correlation discovery.",
    },
    {
      id: 6,
      title: "Design Thinking",
      issuer: "Deloitte / TMU",
      date: "Completed",
      skills: ["User-Centric Design", "Ideation Workflows", "Problem Refinement"],
      credentialNote: "Applied human-centered UI/UX problem definition, user journey mapping, and prototype iteration.",
    },
  ],

  clientOnboardingProcess: [
    {
      step: "01",
      title: "Discovery & Requirements Alignment",
      duration: "Days 1–2",
      description:
        "We discuss your business model, target audience, technical specifications, and primary conversion objectives. You share any existing assets, logos, copy, or competitor references.",
      deliverable: "Consolidated Project Discovery Summary & Technical Scope Outline",
    },
    {
      step: "02",
      title: "Transparent Proposal & Milestone Agreement",
      duration: "Days 2–3",
      description:
        "I provide a clear proposal with defined deliverables, estimated timelines, revision limits, explicit exclusions, and fixed milestone payment terms. No hidden charges.",
      deliverable: "Mutual Scope Agreement, Milestone Schedule & Staging Environment Setup",
    },
    {
      step: "03",
      title: "Information Architecture & Wireframe Review",
      duration: "Week 1",
      description:
        "Mapping user journeys, sitemap hierarchy, page wireframes, and catalog schemas. We align on visual direction and content hierarchy before code implementation.",
      deliverable: "Approved Responsive Layout Wireframes & Content Outline",
    },
    {
      step: "04",
      title: "Clean Next.js/React Development & Catalog Setup",
      duration: "Weeks 2–3",
      description:
        "Developing the platform using clean Next.js/React, semantic HTML5, high-contrast accessible UI, and sub-second asset pipelines. For e-commerce, master SKU templates are formatted.",
      deliverable: "Working Staging Platform & Marketplace Product Catalogs for Client Review",
    },
    {
      step: "05",
      title: "Cross-Device QA, SEO & Core Web Vitals Testing",
      duration: "Week 3–4",
      description:
        "Rigorous verification across mobile viewports, tablet screens, desktop browsers, WCAG contrast standards, Schema.org structured data, and Core Web Vitals speed tests.",
      deliverable: "Quality Assurance Checklist & Performance Verification Report",
    },
    {
      step: "06",
      title: "Production Launch, Handover & 30-Day Support",
      duration: "Launch Day + 30 Days",
      description:
        "Pointing custom domains, configuring SSL certificates, connecting Google Search Console, and providing complete administrative documentation. Includes 30 days of post-launch warranty.",
      deliverable: "Live Production Platform, Admin Credentials Handover & 30-Day Support Window",
    },
  ],

  pricingNotice:
    "All displayed pricing is indicative and intended for initial budgeting. Exact quotes are finalized after evaluating specific scope, required integrations, catalog volume, and content readiness.",

  costTransparencyNotice:
    "Third-party expenses—such as domain registration, production cloud hosting, payment gateway processing fees (Cashfree/Razorpay), marketplace seller referral fees, and external SaaS subscriptions—are billed directly by the respective providers with zero markup from Aradhy Jain.",
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/#hero" },
  { name: "Services & Pricing", href: "/#services" },
  { name: "Case Studies", href: "/#projects" },
  { name: "Audit & Brief", href: "/#audit-tool" },
  { name: "Process", href: "/#process" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
] as const;
