export const siteConfig = {
  name: "Ankita Kumari",
  title: "Backend & Cloud Engineer",
  tagline: "Building scalable cloud-native systems.",
  email: "aankitak91@gmail.com",
  phone: "+91 8809366345",
  links: {
    linkedin: "https://www.linkedin.com/in/ankita-kumari-165038251",
    github: "https://github.com/aankiata",
    portfolio: "#",
  },
  resumePdf: "/resume/Ankita_Kumari_Resume.pdf",
  summary:
    "Backend Engineer building scalable cloud-native applications using Java, Spring Boot, and AWS. Experienced designing REST APIs and microservices, automating deployments with Jenkins and Terraform, and optimizing SQL-backed systems.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Resume", href: "#resume" },
  { label: "Labs", href: "#labs" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  "Built cloud-native backend processing 5,000+ resumes",
  "Deployed applications using AWS, Jenkins & Terraform",
  "Designed REST APIs with Spring Boot microservices",
  "Research experience in NLP and speech analysis",
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "SQL", "JavaScript", "TypeScript"],
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "REST APIs", "Microservices", "React"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda)", "Docker", "Jenkins", "Terraform", "CI/CD"],
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    category: "Analytics & Tools",
    items: ["MySQL", "Firebase", "Git", "Postman"],
    color: "from-violet-500/20 to-purple-500/20",
  },
];

export const certifications = [
  "AWS Academy – ML Foundations",
  "Oracle Certified Foundation",
];

export type CaseStudySection = {
  title: string;
  content: string;
  bullets?: string[];
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  gradient: string;
  accent: string;
  metrics: { label: string; value: string }[];
  caseStudy: CaseStudySection[];
};

export const projects: Project[] = [
  {
    id: "ai-resume-sorter",
    title: "AI Resume Sorter",
    subtitle: "Microservices · NLP · AWS · CI/CD",
    description:
      "Engineered a microservices backend with NLP-based candidate ranking that processed 5,000+ resumes, deployed on AWS via automated Jenkins/Terraform pipelines.",
    tech: [
      "Java",
      "Spring Boot",
      "Python",
      "NLP",
      "React",
      "TypeScript",
      "AWS",
      "Jenkins",
      "Terraform",
      "JUnit",
    ],
    gradient: "from-[#6D4AFF] via-[#375DFF] to-[#07091B]",
    accent: "#6D4AFF",
    metrics: [
      { label: "Resumes Processed", value: "5,000+" },
      { label: "Screening Reduction", value: "~60%" },
      { label: "Architecture", value: "Microservices" },
    ],
    caseStudy: [
      {
        title: "Problem",
        content:
          "HR teams were overwhelmed by manual resume screening at scale. Existing tools lacked intelligent ranking and couldn't integrate with cloud-native deployment workflows.",
        bullets: [
          "Manual screening bottleneck for high-volume hiring",
          "No semantic understanding of candidate fit",
          "Fragmented deployment and scaling concerns",
        ],
      },
      {
        title: "Research",
        content:
          "Evaluated NLP pipelines for resume parsing, entity extraction, and semantic similarity scoring. Benchmarked Spring Boot microservices against monolithic alternatives for throughput and maintainability.",
        bullets: [
          "Compared TF-IDF vs embedding-based ranking models",
          "Studied async job queue patterns for batch processing",
          "Analyzed AWS cost/performance for Lambda vs EC2 workloads",
        ],
      },
      {
        title: "Design",
        content:
          "Architected a multi-service backend with dedicated services for ingestion, NLP processing, ranking, and API gateway — connected via REST and async messaging.",
        bullets: [
          "Resume Ingestion Service → S3 storage",
          "NLP Engine Service → Python microservice",
          "Ranking Service → Spring Boot REST API",
          "React dashboard for recruiter workflows",
        ],
      },
      {
        title: "Solution",
        content:
          "Built end-to-end pipeline with Jenkins CI/CD and Terraform IaC. Implemented asynchronous filtering for scalability and JUnit test coverage across services.",
        bullets: [
          "Terraform-managed AWS infrastructure (EC2, S3, Lambda)",
          "Jenkins pipelines for automated build & deploy",
          "NLP-based candidate scoring with configurable thresholds",
          "React + TypeScript frontend for review workflows",
        ],
      },
      {
        title: "Final Screens",
        content:
          "Delivered a polished recruiter dashboard with ranked candidate lists, filter controls, and batch upload — wrapped in responsive web mockups.",
      },
      {
        title: "Results",
        content:
          "Reduced manual screening effort by ~60% and improved scalability with asynchronous filtering. System handles 5,000+ resumes with consistent ranking quality.",
        bullets: [
          "60% reduction in manual screening time",
          "5,000+ resumes processed reliably",
          "Fully automated AWS deployment pipeline",
        ],
      },
    ],
  },
  {
    id: "smart-finance-advisor",
    title: "Smart Finance Advisor",
    subtitle: "Rule-based AI · Data Analysis · MySQL",
    description:
      "Built a rule-based financial recommendation engine analyzing 1,000+ records to improve user savings by ~15%, with Excel dashboards and MySQL-backed KPI analysis.",
    tech: ["Python", "Spring Boot", "SQL", "Excel", "Data Analysis", "Rule-based AI"],
    gradient: "from-[#375DFF] via-[#6D4AFF] to-[#07091B]",
    accent: "#375DFF",
    metrics: [
      { label: "Records Analyzed", value: "1,000+" },
      { label: "Savings Improvement", value: "~15%" },
      { label: "Backend", value: "Spring Boot + MySQL" },
    ],
    caseStudy: [
      {
        title: "Problem",
        content:
          "Users lacked actionable, personalized financial guidance. Generic advice didn't account for individual spending patterns and savings goals.",
      },
      {
        title: "Research",
        content:
          "Analyzed 1,000+ financial records to identify spending patterns, savings gaps, and KPIs that correlate with improved financial outcomes.",
        bullets: [
          "Categorized expense types and frequency patterns",
          "Identified high-impact savings opportunities",
          "Defined rule thresholds from historical data",
        ],
      },
      {
        title: "Design",
        content:
          "Designed a rule-based recommendation engine with Spring Boot API layer, MySQL data store, and Excel dashboards for stakeholder reporting.",
      },
      {
        title: "Solution",
        content:
          "Implemented Python analysis scripts feeding a Spring Boot backend with SQL-backed KPI queries. Built Excel dashboards for visual financial tracking.",
      },
      {
        title: "Final Screens",
        content:
          "Dashboard views showing savings trends, recommendation cards, and KPI breakdowns — presented in clean data visualization layouts.",
      },
      {
        title: "Results",
        content:
          "Achieved ~15% improvement in user savings through data-driven, personalized recommendations backed by 1,000+ analyzed records.",
      },
    ],
  },
  {
    id: "voiceshield-ai",
    title: "VoiceShield AI",
    subtitle: "Research · NLP · Speech Analysis · IEEE",
    description:
      "IEEE-style research on real-time voice threat detection — NLP, speech emotion recognition, scam detection, speaker verification, and multimodal AI-based threat analysis.",
    tech: ["NLP", "Speech Analysis", "Python", "Machine Learning", "Multimodal AI"],
    gradient: "from-[#6D4AFF] via-[#375DFF] to-[#1a1035]",
    accent: "#6D4AFF",
    metrics: [
      { label: "Publication", value: "IEEE-style" },
      { label: "Focus", value: "Voice Threat Detection" },
      { label: "Mentor", value: "K. Ishwarya" },
    ],
    caseStudy: [
      {
        title: "Problem",
        content:
          "Voice-based scams and impersonation attacks are rising. Existing systems lack real-time multimodal threat detection combining speech, emotion, and speaker identity.",
      },
      {
        title: "Research",
        content:
          "Conducted literature review on speech emotion recognition, speaker verification, and NLP-based scam pattern detection under faculty mentor K. Ishwarya.",
        bullets: [
          "Speech emotion recognition for distress detection",
          "Speaker verification against known profiles",
          "NLP analysis of conversational scam indicators",
        ],
      },
      {
        title: "Design",
        content:
          "Proposed a multimodal architecture combining audio feature extraction, emotion classification, speaker embedding comparison, and text-level threat scoring.",
      },
      {
        title: "Solution",
        content:
          "Developed a real-time monitoring framework with layered detection: acoustic analysis → emotion scoring → speaker verification → NLP threat classification.",
      },
      {
        title: "Final Screens",
        content:
          "Research documentation with architecture diagrams, evaluation metrics, and threat detection pipeline visualizations.",
      },
      {
        title: "Results",
        content:
          "Published IEEE-style research demonstrating feasibility of real-time voice threat detection using multimodal AI approaches.",
      },
    ],
  },
];

export const experience = [
  {
    role: "Software Development Intern",
    company: "SAIL (Steel Authority of India Limited)",
    location: "India",
    period: "Internship",
    highlights: [
      "Improved application usability by 30% and reduced user interaction steps by 25%",
      "Collaborated in an Agile/Scrum environment to deliver production-ready features",
    ],
  },
  {
    role: "Committee Head – CSI Committee",
    company: "Aaruush, SRM University",
    location: "Chennai, India",
    period: "Leadership",
    highlights: [
      "Managed digital strategy and social media for events with 5,000+ attendees",
      "Led sales, sponsorship acquisition, and budget planning",
    ],
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  school: "SRM Institute of Science and Technology",
  period: "2022 – 2026",
  cgpa: "8.04",
  coursework: [
    "Data Structures & Algorithms",
    "DBMS",
    "Operating Systems",
    "AI",
    "Machine Learning",
    "Cloud Computing",
    "DevOps",
    "Full Stack Development",
  ],
};

export const labs = [
  {
    title: "Cloud Architecture Playground",
    description: "Interactive AWS service topology explorer with Terraform snippets.",
    status: "Coming Soon",
  },
  {
    title: "API Design Sandbox",
    description: "Spring Boot REST API patterns with live OpenAPI documentation.",
    status: "In Progress",
  },
  {
    title: "NLP Pipeline Lab",
    description: "Resume parsing and semantic ranking experiments with Python.",
    status: "Active",
  },
];

export const blogPosts = [
  {
    title: "Building Microservices with Spring Boot on AWS",
    excerpt: "Lessons from deploying a production-grade resume processing pipeline.",
    date: "Coming Soon",
    readTime: "8 min",
  },
  {
    title: "Terraform + Jenkins: Zero-Downtime Deployments",
    excerpt: "How I automated infrastructure and CI/CD for cloud-native backends.",
    date: "Coming Soon",
    readTime: "6 min",
  },
  {
    title: "NLP for HR: Ranking Candidates at Scale",
    excerpt: "Architecture decisions behind processing 5,000+ resumes efficiently.",
    date: "Coming Soon",
    readTime: "10 min",
  },
];
