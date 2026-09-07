export type NavItem = {
  label: string;
  href: string;
};

export type Social = {
  label: string;
  handle: string;
  href: string;
};

export const site = {
  name: "Gaurav Kakde",
  initials: "GK",
  role: "Data Analyst · Data Engineer · ML",
  heroRole: "Data Analyst / Data Engineer",
  tagline:
    "Final-year B.Tech (AI & DS) building data pipelines, dashboards and machine-learning models with Python, SQL, Power BI and ETL — turning raw data into confident business decisions.",
  about:
    "I'm a final-year B.Tech (Artificial Intelligence & Data Science) student specialized in data analytics, data engineering and machine learning. Through internships at Springer Capital and EduSkill plus hands-on projects, I've automated ETL workflows, analyzed patient and marketing datasets, and built predictive models that produce real business insight — and I'm looking to do exactly that as a Data Analyst or Data Engineer.",
  email: "kakdegaurav876@gmail.com",
  phone: "+91 84464 74273",
  phoneHref: "tel:+918446474273",
  location: "Nagpur, India",
  timezone: "Asia/Kolkata",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gauravkakde.dev",
  available: true,
  resumeUrl: "/resume.pdf",
  keywords: [
    "Python",
    "SQL",
    "Power BI",
    "ETL",
    "Data Engineering",
    "Machine Learning",
    "scikit-learn",
    "Pandas",
    "Streamlit",
    "Docker",
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Credentials", href: "#credentials" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socials: [
    {
      label: "GitHub",
      handle: "@phoenix845",
      href: "https://github.com/phoenix845",
    },
    {
      label: "LinkedIn",
      handle: "in/gaurav-kakde-57235b312",
      href: "https://www.linkedin.com/in/gaurav-kakde-57235b312/",
    },
  ] satisfies Social[],
};

export const summaryStats = [
  { value: 7, suffix: "", label: "Datasets integrated in ETL" },
  { value: 299, suffix: "+", label: "Patient records analyzed" },
  { value: 68, suffix: "%", label: "Survival rate identified" },
  { value: 2, suffix: "", label: "Hackathon podiums" },
];

export type Certification = {
  title: string;
  issuer: string;
  period: string;
  file: string;
};

export const certifications: Certification[] = [
  {
    title: "Data Analytics & Visualization Job Simulation",
    issuer: "Accenture · Forage",
    period: "Jun 2025",
    file: "/certificates/accenture-data-analytics.pdf",
  },
  {
    title: "Cohort 10",
    issuer: "K.D.K. College of Engineering, Nagpur",
    period: "2024–25",
    file: "/certificates/cohort-10.pdf",
  },
  {
    title: "DSA Workshop — Arrays & LinkedList",
    issuer: "Certificate of completion",
    period: "Jun 2024",
    file: "/certificates/dsa.pdf",
  },
  {
    title: "Green Skills & AI (Skills4Future)",
    issuer: "Edunet Foundation",
    period: "Jul 2025",
    file: "/certificates/edunet-foundation.pdf",
  },
  {
    title: "Data Analytics Program",
    issuer: "Lumenore",
    period: "Oct 2025",
    file: "/certificates/lumenore.pdf",
  },
  {
    title: "Generative AI Literacy",
    issuer: "Nasscom IT-ITeS SSC",
    period: "Dec 2025",
    file: "/certificates/nasscom-genai.pdf",
  },
  {
    title: "Power BI Dashboards",
    issuer: "Power BI training",
    period: "Oct 2024",
    file: "/certificates/power-bi-oct2024.pdf",
  },
  {
    title: "Master SQL Fundamentals in 90 Minutes",
    issuer: "WsCube Tech",
    period: "Sep 2024",
    file: "/certificates/sql.pdf",
  },
  {
    title: "Young Turks 25 — Round 1",
    issuer: "Quiz round · 95.95",
    period: "Sep 2025",
    file: "/certificates/young-turks25.pdf",
  },
  {
    title: "Excellence — Daily Quiz, Engineering Series",
    issuer: "Unstop · 26th rank",
    period: "Aug 2025",
    file: "/certificates/unstop-excellence.pdf",
  },
];

export type Achievement = {
  title: string;
  detail: string;
  meta: string;
  file?: string;
};

export const achievements: Achievement[] = [
  {
    title: "1st Place — TechAlpha Hackathon",
    meta: "PCE Nagpur · 2026",
    detail: "Won among 100+ teams, building HireGuard AI in a 24-hour sprint.",
    file: "/certificates/techalpha-pce.jpg",
  },
  {
    title: "2nd Place — Hack Day Hackathon",
    meta: "SSIT · 2026",
    detail: "Built an innovative solution judged against competitive teams.",
    file: "/certificates/hack-day-ssit.jpg",
  },
  {
    title: "Event Head — FOR-AIM",
    meta: "KDK College · 2025-26",
    detail: "Leading the college's AI & DS committee; active NSS member (2024-26).",
  },
];