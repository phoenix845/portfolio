export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  current?: boolean;
  certificate?: { label: string; href: string };
};

export const experience: ExperienceEntry[] = [
  {
    role: "Data Engineer Intern",
    company: "Springer Capital Investments LLC",
    period: "Dec 2025 — Mar 2026",
    location: "Remote",
    summary:
      "Built and automated ETL workflows on real investment data, improving deployment reliability and the quality of cross-team reporting.",
    highlights: [
      "Automated ETL workflows in Python, integrating 7 datasets into validated, reporting-ready output.",
      "Improved deployment reliability with Docker and containerised the pipeline for reproducible runs.",
      "Standardised documentation with a business-oriented data dictionary used by cross-functional teams.",
    ],
    certificate: {
      label: "View internship certificate",
      href: "/certificates/springer-completion-letter.pdf",
    },
  },
  {
    role: "Data Science Intern",
    company: "Credora",
    period: "Jul 2025 — Aug 2025",
    location: "Remote",
    summary:
      "Completed screening and skill-building tasks across data science, IRROs and fintech — writing models, exploring real-world finance data and documenting reproducible pipelines.",
    highlights: [
      "Trained and tuned a decision-tree classifier on the UCI Bank Marketing dataset to predict customer purchase behaviour.",
      "Explored real-world finance/IRRO datasets with Python and delivered clean, reproducible Jupyter notebooks.",
      "Documented pipelines end-to-end so results and methodology stayed easy to verify.",
    ],
    certificate: {
      label: "View internship certificate",
      href: "/certificates/gaurav-credora-nov2025.pdf",
    },
  },
  {
    role: "Data Analytics Virtual Intern",
    company: "EduSkill Foundation",
    period: "Oct 2024 — Dec 2024",
    location: "Remote",
    summary:
      "Delivered end-to-end analytics for a virtual internship — cleaning data, digging out insights and presenting them to stakeholders.",
    highlights: [
      "Performed data cleaning, analysis and visualization with Python and SQL to surface business insights.",
      "Built interactive dashboards and reports that communicated key metrics to stakeholders.",
    ],
    certificate: {
      label: "View certificate — Cohort 10",
      href: "/certificates/cohort-10.pdf",
    },
  },
  {
    role: "B.Tech in Artificial Intelligence & Data Science",
    company: "KDK College of Engineering, Nagpur",
    period: "2023 — 2027",
    location: "Nagpur, India",
    summary:
      "Final-year student with a 7.05 CGPA, specialising in data analytics, data engineering and machine learning. Active in campus leadership and hackathons.",
    highlights: [
      "Event Head of FOR-AIM (2025-26) and member of NSS at KDK College (2024-26).",
      "1st place among 100+ teams at TechAlpha Hackathon PCE 2026 for HireGuard AI, and 2nd place at Hack Day SSIT 2026.",
    ],
    current: true,
  },
];