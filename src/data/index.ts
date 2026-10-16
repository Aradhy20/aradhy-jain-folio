export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
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

export interface FreelanceService {
  id: string;
  title: string;
  category: string;
  targetAudience: string;
  iconName: string;
  tagline: string;
  description: string;
  offerings: string[];
  deliverables: string[];
  representativeProjects: string[];
  ctaLabel: string;
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
    positioning: "Web Development, E-commerce & Digital Growth Partner",
    title: "Web Development, E-commerce & Digital Growth Partner",
    headline: "Websites That Perform. E-commerce That Sells.",
    tagline: "Website Development • E-commerce & Marketplaces • SEO • Digital Marketing • Analytics",
    mission:
      "I help businesses build their online presence, launch and improve e-commerce experiences, optimize marketplace listings (Amazon · Flipkart · Meesho), and strengthen their digital visibility through development, SEO, content, and analytics.",
    email: "jainaradhy123@gmail.com",
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
      "Automation & Analytics",
    ],
  },
  stats: [
    { label: "Commercial Platforms & Stores", value: "8+" },
    { label: "Marketplace Listing Catalogues", value: "3 Channels" },
    { label: "Production & Open Source Builds", value: "15+" },
  ],
  about:
    "I partner with business owners, manufacturers, institutions, and founders as an end-to-end digital growth specialist. My work bridges custom website engineering, e-commerce storefronts, marketplace catalog operations (Amazon, Flipkart, Meesho), technical SEO, and automated reporting. By combining technical precision with commercial usability, I help businesses establish an authoritative digital presence, streamline sales operations, and scale reliably.",
  
  services: [
    {
      id: "website-dev",
      title: "Website Design & Development",
      category: "Web Engineering",
      targetAudience: "Small businesses, educational institutions, consultants, publishers & startups",
      iconName: "Globe",
      tagline: "High-performance, modern business websites engineered for customer trust & conversions.",
      description:
        "Building tailored business websites, corporate portals, academic platforms, landing pages, and responsive web applications with sub-second speeds and mobile-first design.",
      offerings: [
        "Custom Business & Corporate Websites",
        "Institutional & Academic Web Portals",
        "High-Converting Landing Pages",
        "Responsive Mobile-First Redesigns",
        "Ongoing Website Maintenance, Hosting & Security Checks",
        "Content Management (WordPress / Headless CMS / Next.js)",
      ],
      deliverables: [
        "100% responsive cross-device layout (Mobile, Tablet, Desktop)",
        "Clean, maintainable Next.js/React codebase with sub-second load times",
        "Accessible navigation with clear customer conversion pathways",
        "Complete technical setup, domain linking, and SSL deployment",
      ],
      representativeProjects: ["DSR College", "Sanmati Journal", "SkyPilot Aviation Academy"],
      ctaLabel: "Discuss Website Project",
    },
    {
      id: "ecommerce-marketplaces",
      title: "E-commerce & Marketplace Operations",
      category: "Digital Commerce",
      targetAudience: "Manufacturers, handicraft brands, retail businesses & online merchants",
      iconName: "ShoppingBag",
      tagline: "Turn your product line into an organized, high-selling online catalog across marketplaces.",
      description:
        "End-to-end e-commerce and marketplace catalog operations. From launching custom storefronts to optimizing product listings on Amazon, Flipkart, and Meesho with search-ready descriptions and organized SKU structures.",
      offerings: [
        "Amazon, Flipkart & Meesho Listing Creation & Catalog Setup",
        "High-Converting Product Titles, Bullet Points & SEO Copy",
        "SKU Architecture, Pricing Strategy & Attribute Standardization",
        "Listing Photography Guidance, Infographics & Image Creatives",
        "Custom E-commerce Storefront Development (Shopify / Next.js)",
        "Cross-Platform Product Inventory & Data Consistency",
      ],
      deliverables: [
        "Marketplace-ready product spreadsheets and live listings",
        "Keyword-rich titles and feature bullets compliant with marketplace policies",
        "Faceted catalog navigation and mobile shopping checkout flows",
        "Structured product metadata for Google Shopping discovery",
      ],
      representativeProjects: ["Paras Metal (Amazon, Flipkart, Meesho)", "Artisanal Home Decor Store"],
      ctaLabel: "Optimize Store & Listings",
    },
    {
      id: "seo-growth",
      title: "SEO & Website Performance Improvement",
      category: "Search & Visibility",
      targetAudience: "Businesses with an existing website that needs more traffic, speed, and better ranking",
      iconName: "TrendingUp",
      tagline: "Outrank competitors and turn organic search traffic into qualified buyer inquiries.",
      description:
        "Comprehensive technical and on-page SEO services. I diagnose crawling issues, optimize metadata, implement schema markup, fix Core Web Vitals speed bottlenecks, and establish Google Search Console visibility.",
      offerings: [
        "Comprehensive Technical SEO Audits & Action Roadmaps",
        "On-Page SEO, Keyword Research & Title/Meta Optimization",
        "Google Search Console & Google Analytics 4 Setup & Diagnostics",
        "Core Web Vitals Speed Optimization (LCP, CLS, INP)",
        "JSON-LD Schema Markup (Organization, Product, Academic)",
        "Internal Linking & Site Architecture Refactoring",
      ],
      deliverables: [
        "Prioritized audit report detailing technical fixes and growth opportunities",
        "Optimized metadata, canonical tags, and Open Graph previews",
        "XML sitemaps and indexing coverage verification",
        "Noticeable speed and Core Web Vitals improvements",
      ],
      representativeProjects: ["Sanmati Research Journal (ISSN 3108-1819)", "DSR College Institutional Portal"],
      ctaLabel: "Request SEO Audit",
    },
    {
      id: "marketing-analytics",
      title: "Digital Marketing & Analytics Automation",
      category: "Growth & Automation",
      targetAudience: "Businesses needing consistent online marketing, creatives, and reporting clarity",
      iconName: "Megaphone",
      tagline: "Coherent social presence, creative assets, and automated executive dashboards.",
      description:
        "Connecting your online presence with practical customer acquisition. Social media content strategy, product creatives, automated Power BI/Excel dashboards, and Python scripts that eliminate manual reporting.",
      offerings: [
        "Social Media Content Planning & Brand Creatives",
        "E-commerce Product Promotional Graphics & Creatives",
        "Interactive Power BI & Google Sheets Dashboards",
        "Python Workflow Automation Scripts & Web Scraping",
        "KPI Tracking for Inquiries, Orders, and Website Performance",
        "Reporting Automation Eliminating Repetitive Manual Work",
      ],
      deliverables: [
        "Monthly content schedules and high-impact social assets",
        "Automated dashboard reports tracking commercial KPIs",
        "Custom data cleaning scripts saving weekly manual hours",
        "Clear monthly performance summary and actionable recommendations",
      ],
      representativeProjects: ["Paras Metal Branding", "TMU KPI Dashboard", "MathesisLabs IT Scripts"],
      ctaLabel: "Automate Marketing & Data",
    },
  ] as FreelanceService[],

  experience: [
    {
      id: 1,
      title: "Web Developer & Platform Manager",
      company: "Sanmati Journal",
      period: "Jan 2026 – Present",
      responsibilities: [
        "Developed and actively managed sanmatijournal.in, an academic research publishing platform registered with ISSN 3108-1819.",
        "Structured journal information architecture, editorial board profiles, and article publication archives for scholars.",
        "Implemented technical SEO, structured academic citation metadata (Google Scholar), and responsive reader-friendly interfaces.",
      ],
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "Teerthanker Mahaveer University",
      period: "Jan 2026 – Present",
      responsibilities: [
        "Conducted exploratory data analysis on institutional datasets using Python (Pandas, Matplotlib), surfacing 8+ actionable insights.",
        "Built interactive Power BI dashboards tracking student performance KPIs across 5 departments, reducing manual reporting effort by ~35%.",
        "Cleaned and preprocessed 20,000+ records, resolving 400+ null/duplicate entries to improve reporting consistency.",
        "Collaborated with cross-functional administrative teams to deliver structured weekly analytics reports.",
      ],
    },
    {
      id: 3,
      title: "IT Developer Intern",
      company: "MathesisLabs Technologies",
      period: "Jun 2025 – Dec 2025",
      responsibilities: [
        "Designed and deployed 5+ Python automation scripts that eliminated repetitive IT workflows, saving ~6 hours of manual effort per week (~40% reduction).",
        "Built backend data processing tools using Python (Requests, BeautifulSoup, Pandas) integrated with REST APIs for live data retrieval.",
        "Contributed to internal analytics pipeline improvements, achieving a ~20% faster data ingestion cycle for reporting systems.",
        "Documented all automation workflows and maintained a technical knowledge base used by 10+ team members.",
      ],
    },
    {
      id: 4,
      title: "Data Analyst Intern",
      company: "Trainity / Cognifyz / Oasis",
      period: "Nov 2024 – Mar 2025",
      responsibilities: [
        "Completed 3 end-to-end data analysis projects across finance, restaurant, and retail domains using Python and Excel.",
        "Applied statistical analysis, data cleaning, and visualization techniques (Matplotlib, Seaborn) to derive business-relevant findings.",
        "Delivered structured analytical reports simulating real-world analyst deliverables to communicate findings clearly to stakeholders.",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      slug: "paras-metal",
      title: "Paras Metal — E-commerce & Marketplace Operations",
      subtitle: "Multi-Channel Retail: Direct Web Storefront, Amazon, Flipkart & Meesho Catalog Management",
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
      issuer: "Google",
      date: "Completed",
      skills: ["Data Analysis", "SQL", "R Programming", "Tableau", "Data Ethics"],
    },
    {
      id: 2,
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      date: "Completed",
      skills: ["Data Analytics", "Data Visualization", "Process Improvement"],
    },
    {
      id: 3,
      title: "Python (Basics)",
      issuer: "HackerRank",
      date: "Completed",
      skills: ["Problem Solving", "Algorithm Design", "Scripting"],
    },
    {
      id: 4,
      title: "Data Analytics and Reporting",
      issuer: "Trainity / Oasis",
      date: "Completed",
      skills: ["Excel Modeling", "Business Intelligence", "KPI Tracking"],
    },
    {
      id: 5,
      title: "Statistics using R and Python",
      issuer: "Cognifyz / TMU",
      date: "Completed",
      skills: ["Statistical Modeling", "Hypothesis Testing", "Exploratory Analysis"],
    },
    {
      id: 6,
      title: "Design Thinking",
      issuer: "Deloitte",
      date: "Completed",
      skills: ["User-Centric Design", "Ideation Workflows", "Problem Refinement"],
    },
  ],
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/#hero" },
  { name: "Projects", href: "/#projects" },
  { name: "Services", href: "/#services" },
  { name: "Audit Tool", href: "/#audit-tool" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
] as const;
