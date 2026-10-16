export interface Project {
  id: number;
  slug: string;
  title: string;
  category:
    | "Websites & Full-Stack"
    | "E-commerce"
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
    title: "Full-Stack Developer | Freelance Web Developer | Digital Solutions & Growth",
    headline: "Turning Ideas Into Digital Experiences.",
    tagline: "Full-Stack • E-commerce • SEO & Growth • Data Analytics • AI",
    mission:
      "I build and improve digital experiences that help businesses establish their online presence, automate workflows, reach customers, and grow.",
    email: "jainaradhy123@gmail.com",
    phone: "+91-7351522153",
    whatsapp: "917351522153",
    linkedin: "https://www.linkedin.com/in/aradhyjain",
    github: "https://github.com/Aradhy20",
    location: "Delhi, India",
    profileImage: "/profile.jpeg",
    resume: "/Aradhy_Jain_Resume.pdf",
    availability: "Available for Freelance & Contract Projects",
  },
  stats: [
    { label: "Client & Web Platforms", value: "8+" },
    { label: "Production & Open Source Builds", value: "15+" },
    { label: "Data Records Processed", value: "25K+" },
  ],
  about:
    "I am a Computer Science graduate and multidisciplinary digital solutions developer. I design, build, and optimize high-performance web applications, e-commerce stores, responsive institutional websites, data dashboards, and intelligent automated tools. From structuring academic journals and handicraft commerce to deploying machine learning pipelines, my approach combines technical craftsmanship with measurable business growth.",
  
  services: [
    {
      id: "web-dev",
      title: "Website Development",
      category: "Full-Stack Engineering",
      iconName: "Globe",
      tagline: "High-performance, responsive websites engineered for conversions & brand authority.",
      description:
        "End-to-end development of custom business websites, corporate portals, institutional platforms, landing pages, and full-stack web applications tailored to your exact business goals.",
      offerings: [
        "Custom Business & Corporate Websites",
        "Institutional & Academic Portals",
        "High-Converting Landing Pages",
        "Responsive Full-Stack Web Applications",
        "Frontend Modernization & Complete Redesigns",
        "API & Headless CMS Architecture",
      ],
      deliverables: [
        "100% responsive cross-device layouts",
        "Clean, maintainable Next.js/React codebase",
        "Sub-second load times & Core Web Vitals optimization",
        "Interactive UI components with smooth animations",
      ],
      representativeProjects: ["DSR College", "Sanmati Journal", "SkyPilot Aviation Academy"],
      ctaLabel: "Discuss Website Project",
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      category: "Digital Commerce",
      iconName: "ShoppingBag",
      tagline: "Engaging online shopping experiences with frictionless product catalogs.",
      description:
        "Building, optimizing, and customizing e-commerce storefronts. From handcrafted home decor catalogs to scalable digital product management, I design shopping flows that convert visitors into repeat customers.",
      offerings: [
        "Custom Online Store Development",
        "Structured Product Catalog & Category Architecture",
        "Product Detail Page UX Optimization",
        "Seamless Cart & Checkout Journeys",
        "Payment Gateway Integration Support",
        "Marketplace & Multi-Channel Listing Support",
      ],
      deliverables: [
        "Mobile-first shopping cart & product grids",
        "Faceted search & filter experiences",
        "Search-engine-friendly product metadata",
        "Secure checkout workflows & order notifications",
      ],
      representativeProjects: ["Paras Metal E-commerce", "Retail Product Catalog"],
      ctaLabel: "Build Your Store",
    },
    {
      id: "seo-growth",
      title: "SEO & Digital Growth",
      category: "Search & Visibility",
      iconName: "TrendingUp",
      tagline: "Drive organic search traffic, increase domain visibility, and outrank competitors.",
      description:
        "Comprehensive technical and on-page SEO strategies that ensure your website is discovered, properly indexed by search engines, and ranked for valuable search intent.",
      offerings: [
        "Comprehensive Technical SEO Audits",
        "On-Page SEO & Keyword Intent Mapping",
        "Google Search Console & Google Analytics 4 Setup",
        "Semantic Schema Markup (JSON-LD)",
        "Core Web Vitals & PageSpeed Performance Tuning",
        "Internal Linking & Information Architecture",
      ],
      deliverables: [
        "Detailed SEO audit & action roadmap",
        "Structured metadata & Open Graph optimization",
        "XML sitemap & robots.txt configuration",
        "Actionable performance improvement reports",
      ],
      representativeProjects: ["Sanmati Research Journal", "DSR College Portal"],
      ctaLabel: "Request SEO Audit",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & Content",
      category: "Brand & Audience",
      iconName: "Megaphone",
      tagline: "Establish a coherent digital presence and engage target customers.",
      description:
        "Strategic digital marketing support combining content calendars, social media visual branding, product descriptions, and organic outreach to elevate your digital footprint.",
      offerings: [
        "Social Media Management & Content Strategy",
        "Editorial & Campaign Calendar Planning",
        "Compelling Product Descriptions & Listing Copy",
        "Digital Brand Presence & Style Consistency",
        "Visual Assets & Social Media Creatives Support",
        "Organic Traffic & Engagement Reporting",
      ],
      deliverables: [
        "Monthly content & publication schedules",
        "High-converting copy for products and landing pages",
        "Consistent brand guidelines across digital channels",
        "Performance review and engagement tracking",
      ],
      representativeProjects: ["Paras Metal Branding", "Jambudweep Digital Platform"],
      ctaLabel: "Plan Campaign",
    },
    {
      id: "analytics-automation",
      title: "Data Analytics & Automation",
      category: "Business Intelligence",
      iconName: "BarChart3",
      tagline: "Turn complex business data into automated workflows and executive insights.",
      description:
        "Transforming raw spreadsheets and databases into automated reporting systems, Power BI dashboards, and custom Python automation scripts that eliminate repetitive manual labor.",
      offerings: [
        "Interactive Power BI & Excel Dashboards",
        "Google Sheets Automated Analytics Systems",
        "Python Workflow Automation Scripts",
        "Data Extraction, Web Scraping & Cleaning",
        "KPI Tracking & Operational Metric Systems",
        "Database Schema Modeling (SQL, PostgreSQL, MySQL)",
      ],
      deliverables: [
        "Automated data refresh pipelines",
        "Executive KPI reporting dashboards",
        "Data quality scripts resolving nulls & duplicates",
        "Technical documentation and handoff training",
      ],
      representativeProjects: ["TMU KPI Dashboard", "HR Strategy Analytics", "MathesisLabs IT Scripts"],
      ctaLabel: "Automate My Data",
    },
    {
      id: "ai-consulting",
      title: "AI & Technical Consulting",
      category: "Intelligent Systems",
      iconName: "Sparkles",
      tagline: "Practical AI integration, NLP workflows, and robust software quality assurance.",
      description:
        "Designing applied AI solutions—such as NLP sentiment analyzers, LLM conversational assistants, intelligent search, and API integrations—with rigorous QA and performance checks.",
      offerings: [
        "Custom NLP & Text Classification Pipelines",
        "LLM & Prompt Engineering Integrations",
        "Conversational AI & Virtual Assistants",
        "Third-Party API Integrations & Webhooks",
        "Cross-Browser QA, Accessibility & Bug Fixing",
        "Ongoing Technical Maintenance & Monitoring",
      ],
      deliverables: [
        "Production-tested NLP & ML models",
        "Secure API endpoints with rate-limiting & validation",
        "Cross-browser and accessibility compliance",
        "System health and maintenance documentation",
      ],
      representativeProjects: ["Mental Health AI", "University Virtual Counselor", "Full-Stack Task Manager"],
      ctaLabel: "Consult on AI / QA",
    },
  ] as FreelanceService[],

  experience: [
    {
      id: 1,
      title: "Data Analyst Intern",
      company: "Teerthanker Mahaveer University",
      period: "Jan 2026 – Present",
      responsibilities: [
        "Conducted exploratory data analysis on institutional datasets using Python (Pandas, Matplotlib), surfacing 8+ actionable insights that supported faculty and administrative decision-making.",
        "Built interactive Power BI dashboards tracking student performance KPIs across 5 departments, reducing manual reporting effort by ~35%.",
        "Cleaned and preprocessed 20,000+ records, identifying and resolving 400+ null/duplicate entries to improve data pipeline consistency.",
        "Collaborated with cross-functional administrative teams to define data requirements and deliver structured weekly analytics reports.",
      ],
    },
    {
      id: 2,
      title: "Web Developer & Platform Manager",
      company: "Sanmati Journal",
      period: "Jan 2026 – Present",
      responsibilities: [
        "Developed and actively managed sanmatijournal.in, an academic publishing platform for peer-reviewed research papers.",
        "Structured journal information architecture, editorial board profiles, and article publication repositories for scholars.",
        "Implemented technical SEO, structured academic metadata, and responsive interfaces to enhance platform discoverability and reader experience.",
      ],
    },
    {
      id: 3,
      title: "IT Developer Intern",
      company: "MathesisLabs Technologies",
      period: "Jun 2025 – Dec 2025",
      responsibilities: [
        "Designed and deployed 5+ Python automation scripts that eliminated repetitive IT workflows, saving ~6 hours of manual effort per week (~40% reduction).",
        "Built backend data processing tools using Python (Requests, BeautifulSoup, Pandas) integrated with REST APIs for live data retrieval and transformation.",
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
      title: "Paras Metal E-commerce Platform",
      category: "E-commerce",
      shortOverview:
        "An artisanal metal handicraft and brass home decor digital commerce platform featuring curated product catalogs and modern shopping journeys.",
      description:
        "Designed and developed a digital commerce experience for Paras Metal, an artisanal manufacturer of handcrafted brass decor, planters, and geometric metal lanterns. The platform elevates traditional craftsmanship through a refined, responsive web storefront, structured catalog filtering, and marketplace-ready listing architecture.",
      problem:
        "Traditional metal handicraft businesses frequently struggle to convey artisanal quality and detailed product specifications through generic social media posts, resulting in high inquiry friction and lost sales.",
      role:
        "E-commerce Web Developer & Digital Solutions Specialist: Designed catalog navigation, product detail layout, responsive mobile shopping flows, and search-optimized product metadata.",
      features: [
        "Structured handicraft catalog with category and material filters (Brass, Copper, Iron)",
        "High-resolution product detail view with material specifications & dimensions",
        "Mobile-first shopping cart drawer and intuitive inquiry / order flows",
        "Search-engine-friendly schema markup for product discoverability",
        "Optimized product listing architecture for marketplace synchronization",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "E-commerce UX", "SEO"],
      images: ["/project_paras_metal.jpg", "/project_saas_dashboard.png"],
      featured: true,
      challengesSolutions: {
        challenge:
          "Balancing high-resolution artisanal imagery of reflective metal finishes with fast initial page load speeds on mobile networks.",
        solution:
          "Implemented progressive Next.js image loading, responsive source sets, and lightweight CSS glassmorphism cards that keep load times under 1.2s.",
      },
      verifiedOutcome:
        "Established a clean, digital brand presence allowing customers and wholesale buyers to explore the complete metalcraft catalog seamlessly.",
    },
    {
      id: 2,
      slug: "dsr-college",
      title: "Dr. Sarvepalli Radhakrishnan College | Teacher Education",
      category: "Business Websites",
      shortOverview:
        "Dedicated teacher education institutional portal in Nalanda, Bihar for B.Ed., D.El.Ed., and Four-Year ITEP programmes with admissions and circulars.",
      description:
        "Built the official institutional website for Dr. Sarvepalli Radhakrishnan College (dsr.college). The web portal organizes teacher education programmes (B.Ed, D.El.Ed, and Four-Year ITEP), faculty directories, student circulars, and transparent admissions criteria within an accessible, responsive layout.",
      problem:
        "Prospective students and regulatory visitors previously lacked a centralized, mobile-responsive repository for academic prospectuses, faculty details, and mandatory institutional disclosures.",
      role:
        "Lead Web Developer: Planned information architecture, designed mobile-friendly layouts, implemented notice boards, and optimized site speed and accessibility.",
      features: [
        "Presentation of Teacher Education Programmes: B.Ed. (1 & 2 Year), D.El.Ed., and Four-Year ITEP",
        "Dedicated Admissions Portal with prospectus download, eligibility guides, and contact helpline",
        "EducationalOrganization Schema.org structured data for authoritative search ranking",
        "High-priority hero LCP image preloading for sub-second mobile rendering",
        "NCTE & institutional transparency disclosures, faculty directory, and student notices",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Technical SEO", "Accessibility"],
      images: ["/project_dsr_college.jpg", "/project_saas_dashboard.png"],
      featured: true,
      liveLink: "https://dsr.college/",
      challengesSolutions: {
        challenge:
          "Ensuring rapid load speeds for rural and mobile students accessing admission guidelines on low-bandwidth connections.",
        solution:
          "Streamlined DOM architecture, eliminated heavy runtime scripts, and optimized assets to achieve fast render times across all mobile browsers.",
      },
      verifiedOutcome:
        "Operating live at dsr.college, providing prospective students and regulatory visitors accessible, fast-loading institutional information.",
    },
    {
      id: 3,
      slug: "sanmati-journal",
      title: "Sanmati Spectrum of Knowledge & Emerging Discourse (ISSN 3108-1819)",
      category: "Academic & Publishing",
      shortOverview:
        "International peer-reviewed multidisciplinary academic research journal (ISSN 3108-1819) indexed with CrossRef DOI, open access, and COPE publication ethics.",
      description:
        "Engineered and maintained sanmatijournal.in, an international peer-reviewed multidisciplinary research journal (ISSN 3108-1819). The platform presents structured journal volumes, research abstracts, author submission guidelines, CrossRef DOI indexing, and editorial oversight.",
      problem:
        "Scholarly journals require rigorous metadata structures, clear archiving by volume/issue, and strict search visibility so indexed papers can be located by academic search engines.",
      role:
        "Platform Web Developer & Manager: Built the digital journal platform, structured publishing archives, and implemented academic metadata and SEO best practices.",
      features: [
        "CrossRef DOI indexing and official ISSN 3108-1819 registration",
        "COPE publication ethics compliant editorial and peer-review workflows",
        "Google Scholar academic citation schema metadata (high-discovery indexing)",
        "Structured archive for research papers, volume issues, and author submission guidelines",
        "Fast, responsive academic reading typography with light/dark reader accessibility",
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Academic SEO", "Information Architecture"],
      images: ["/project_digital_journal.png", "/project_saas_dashboard.png"],
      featured: true,
      liveLink: "https://sanmatijournal.in",
      githubLink: "https://github.com/Aradhy20/sanmati-journal",
      challengesSolutions: {
        challenge:
          "Structuring multi-author academic entries with varying citation formats without cluttering the user interface.",
        solution:
          "Engineered a modular metadata card layout separating abstracts, citation details, and author notes with expandable reading panels.",
      },
      verifiedOutcome:
        "Indexed with CrossRef DOI & ISSN 3108-1819, serving scholars with active research publication indexing at sanmatijournal.in.",
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
        "A flight training academy website featuring an interactive Pilot Eligibility Quiz, flight hour calculator, and course portal.",
      description:
        "Developed an engaging educational portal for an aviation training academy, integrating prospective student quizzes, interactive cost estimation tools, and structured course overviews.",
      problem:
        "Aviation training is complex with strict age, medical, and educational prerequisites that often overwhelm prospective cadets.",
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
        "Small teams often require a lightweight, no-clutter task management system without the bloat and pricing of enterprise Jira setups.",
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
        "Understanding emotional sentiment in community discussions and student feedback requires nuanced NLP beyond simple binary positive/negative scoring.",
      role: "AI & NLP Developer: Data preprocessing, TF-IDF vectorization, model training, and evaluation.",
      features: [
        "Multi-class emotional sentiment classification",
        "Custom text cleaning pipeline removing noise, stop-words, and tokenizing phrases",
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
        "An automated conversational counselor prototype utilizing transformer models and structured prompt frameworks to answer common university queries, admission questions, and student stress points.",
      problem:
        "University support desks face repetitive high-volume queries during admissions seasons, delaying assistance to distressed students.",
      role: "Developer: Implemented conversational dialogue trees, prompt templates, and response validation.",
      features: [
        "Contextual responses for academic queries and campus policies",
        "Empathetic tone conditioning via structured prompt engineering",
        "Fallback routing to human counselors when queries exceed confidence threshold",
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
        "Data-driven exploratory study analyzing employee survey responses and productivity metrics across distributed teams, identifying drivers of engagement, turnover risk, and collaborative health.",
      problem:
        "Remote and hybrid organizations often suffer from unseen employee burnout and disengagement without warning.",
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
        "Local fitness centers struggle with manual pen-and-paper or fragmented spreadsheet records for active memberships and trainer shifts.",
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
        "A classic machine learning classification benchmark implementing multiple supervised algorithms (Decision Trees, KNN, SVM) to predict iris species based on petal and sepal measurements.",
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
      category: "E-commerce & CMS",
      description: "Digital commerce storefronts, catalog architecture, and content management.",
      items: [
        { name: "E-commerce Architecture", level: 88, proficiency: "Advanced", focus: "Product catalogs, cart, checkout" },
        { name: "Product Listing Optimization", level: 90, proficiency: "Advanced", focus: "Copy, attributes, discoverability" },
        { name: "Payment Gateway Integration", level: 82, proficiency: "Proficient", focus: "Stripe / Razorpay workflows" },
        { name: "WordPress & Headless CMS", level: 84, proficiency: "Proficient", focus: "Custom templates, publishing" },
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
        { name: "Social Media Strategy", level: 85, proficiency: "Proficient", focus: "Content calendars, visual branding" },
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
  { name: "About", href: "/#about" },
  { name: "Services", href: "/freelance" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
] as const;
