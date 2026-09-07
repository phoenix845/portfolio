export type Project = {
  slug: string;
  title: string;
  index: string;
  tagline: string;
  summary: string;
  year: string;
  role: string[];
  stack: string[];
  accent: string;
  gradient: string;
  featured?: boolean;
  cover: {
    kind: "line" | "bars" | "area";
    headline: string;
    sub: string;
  };
  overview: string[];
  approach: string[];
  outcomes: { value: string; label: string }[];
  next?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    slug: "rain-forecast-app",
    index: "01",
    title: "Rain Forecast App",
    tagline: "Predict tomorrow's rain from today's weather",
    summary:
      "A Streamlit app that predicts rain for the next day using today's weather data and a trained Random Forest classifier.",
    year: "2025",
    role: ["Machine Learning", "Data App", "Streamlit"],
    stack: ["Python", "Streamlit", "scikit-learn", "pandas"],
    accent: "#d6ff3f",
    gradient:
      "radial-gradient(120% 120% at 20% 10%, rgb(214 255 63 / 0.16), transparent 55%), radial-gradient(100% 100% at 85% 85%, rgb(56 189 248 / 0.14), transparent 60%)",
    featured: true,
    cover: {
      kind: "line",
      headline: "Rain?",
      sub: "Random Forest · tomorrow's forecast",
    },
    source: "https://github.com/phoenix845/rain_forecasting_app",
    overview: [
      "Rain Forecast App is an end-to-end machine learning project: a trained Random Forest classifier exposed through an interactive Streamlit interface.",
      "Users pick today's weather observations and get an immediate tomorrow-rains prediction, with visualisations that make the model's reasoning legible.",
    ],
    approach: [
      "Cleaned and feature-engineered historical weather data with pandas before training the Random Forest classifier.",
      "Trained and tuned the model with scikit-learn, keeping the pipeline simple enough to run anywhere.",
      "Wrapped everything in an interactive Streamlit app with real-time inputs and on-screen visualisations of the data.",
    ],
    outcomes: [
      { value: "RF", label: "Random Forest classifier" },
      { value: "Streamlit", label: "Interactive predictions" },
      { value: "Today", label: "Data in, tomorrow out" },
    ],
  },
  {
    slug: "springer-etl-pipeline",
    index: "02",
    title: "Springer Capital — ETL Pipeline",
    tagline: "Automated ETL for investment reporting",
    summary:
      "Production-minded ETL automation integrating 7 datasets, Dockerised for reliable deployment and documented for cross-functional teams — delivered during my Data Engineer Internship at Springer Capital.",
    year: "2025 — 26",
    role: ["Data Engineer Intern", "ETL Automation", "Data Reporting"],
    stack: ["Python", "ETL", "Docker", "SQL"],
    accent: "#38bdf8",
    gradient:
      "radial-gradient(120% 120% at 75% 15%, rgb(56 189 248 / 0.18), transparent 60%), radial-gradient(100% 100% at 15% 90%, rgb(167 139 250 / 0.16), transparent 55%)",
    featured: true,
    cover: {
      kind: "bars",
      headline: "7",
      sub: "datasets · one automated pipeline",
    },
    source: "https://github.com/phoenix845/springer-referral-data-engineering",
    overview: [
      "As a Data Engineer Intern at Springer Capital Investments, I owned the ETL layer behind validated, reporting-ready investment data. The pipeline integrates seven datasets end to end and ships in Docker so the whole team can run it identically.",
      "The work went beyond moving data — it standardised how reporting consumes it. Every stage runs validation and profiling, and a business-oriented data dictionary gives cross-functional teams a single source of truth.",
    ],
    approach: [
      "Automated the ETL workflow in Python, integrating 7 datasets into clean, validated output for reporting.",
      "Embedded data profiling and validation early in the flow so quality issues surface before they reach stakeholders.",
      "Containerised the pipeline with Docker to make deployment reliable and runs reproducible on any machine.",
      "Wrote a business-oriented data dictionary so analysts and PMs understand the data field-by-field.",
    ],
    outcomes: [
      { value: "7", label: "Datasets integrated" },
      { value: "Docker", label: "Reproducible deploys" },
      { value: "100%", label: "Validated reporting" },
    ],
  },
  {
    slug: "heart-disease-dashboard",
    index: "03",
    title: "Heart Disease Dashboard",
    tagline: "Survival trends, made explorable",
    summary:
      "An interactive Power BI dashboard analysing 299 patient records, surfacing survival trends and the health factors behind them.",
    year: "2025",
    role: ["Data Analysis", "Power BI", "Data Viz"],
    stack: ["Power BI", "DAX", "Power Query"],
    accent: "#a78bfa",
    gradient:
      "radial-gradient(120% 120% at 15% 20%, rgb(167 139 250 / 0.18), transparent 60%), radial-gradient(100% 100% at 85% 90%, rgb(214 255 63 / 0.12), transparent 55%)",
    featured: true,
    cover: {
      kind: "area",
      headline: "67.89%",
      sub: "survival · 299 records",
    },
    source: "https://github.com/phoenix845/Heart-Disease-Analysis-Dashboard",
    overview: [
      "A Power BI dashboard that turns heart-disease survival data into an explorable story: who's at risk, what factors matter, and how they interact.",
      "Built over 299 patient records, it identifies survival rates and the major health risk factors behind them.",
    ],
    approach: [
      "Analysed the patient dataset and found a 67.89% survival rate across the cohort.",
      "Modelled the data with Power Query and built DAX measures for survival and risk metrics.",
      "Designed the report around exploration — slicers and cross-filtering so users can slice by any health factor.",
    ],
    outcomes: [
      { value: "299", label: "Patient records" },
      { value: "67.89%", label: "Survival rate" },
      { value: "DAX", label: "Dashboards & queries" },
    ],
  },
  {
    slug: "netflix-data-exploration",
    index: "04",
    title: "Netflix Data Exploration",
    tagline: "EDA on 8.8k titles",
    summary:
      "An exploratory analysis of the Netflix catalogue using Python, pandas and Seaborn to surface genre, rating and popularity insights.",
    year: "2025",
    role: ["Data Analysis", "EDA", "Visualisation"],
    stack: ["Python", "pandas", "Seaborn", "Jupyter"],
    accent: "#ff8a5c",
    gradient:
      "radial-gradient(120% 120% at 75% 25%, rgb(255 138 92 / 0.2), transparent 60%), radial-gradient(100% 100% at 20% 95%, rgb(56 189 248 / 0.12), transparent 55%)",
    featured: true,
    cover: {
      kind: "line",
      headline: "8.8k",
      sub: "titles · genre & rating EDA",
    },
    source: "https://github.com/phoenix845/netflix-data-exploration",
    overview: [
      "A classic-but-careful EDA of the Netflix movie dataset: cleaning, transformation and visual insight with pandas and Seaborn.",
      "The notebook walks through genre distribution, ratings and popularity trends — the kind of analysis that turns raw data into a story.",
    ],
    approach: [
      "Loaded and cleaned the dataset with pandas, handling missing values and normalising types.",
      "Used Seaborn to reveal distributions across genres, ratings and release periods.",
      "Drew conclusions from the visualisations and documented them inline with the code.",
    ],
    outcomes: [
      { value: "8.8k", label: "Titles explored" },
      { value: "pandas", label: "Clean & transform" },
      { value: "Seaborn", label: "Visual insights" },
    ],
  },
  {
    slug: "credora-decision-tree",
    index: "05",
    title: "Credora Decision Tree",
    tagline: "Predicting purchase behaviour",
    summary:
      "A decision-tree model predicting customer purchase behaviour on the UCI Bank Marketing dataset — built as a data-science screening task for Credora.",
    year: "2025",
    role: ["Data Science", "Classification", "Machine Learning"],
    stack: ["Python", "scikit-learn", "Jupyter"],
    accent: "#f472b6",
    gradient:
      "radial-gradient(120% 120% at 75% 25%, rgb(244 114 182 / 0.2), transparent 60%), radial-gradient(100% 100% at 20% 95%, rgb(56 189 248 / 0.12), transparent 55%)",
    featured: true,
    cover: {
      kind: "bars",
      headline: "Buy?",
      sub: "decision tree · bank data",
    },
    source: "https://github.com/phoenix845/credora-task03-decision-tree",
    overview: [
      "A supervised-learning task from Credora's data-science screening: build a decision-tree classifier on the UCI Bank Marketing dataset.",
      "The focus was a clean, well-commented pipeline — preparation, training, evaluation and interpretation of the tree.",
    ],
    approach: [
      "Preprocessed the bank marketing data, encoding categorical features for the classifier.",
      "Trained and evaluated a scikit-learn decision tree, reading performance from classification metrics.",
      "Documented the tree's structure so the model's decisions stay interpretable.",
    ],
    outcomes: [
      { value: "DT", label: "Decision-tree classifier" },
      { value: "UCI", label: "Bank marketing data" },
      { value: "Credora", label: "DS internship task" },
    ],
  },
  {
    slug: "hireguard-ai",
    index: "06",
    title: "HireGuard AI",
    tagline: "AI-led candidate verification & interviews",
    summary:
      "An AI recruitment platform whose agentic orchestrator — Resume, Employment, Tech and Risk agents — verifies candidates, runs adaptive AI interviews and scores integrity before you interview.",
    year: "2026",
    role: ["Full Stack", "Multi-Agent AI", "GenAI"],
    stack: ["React 19", "Node.js", "Express", "MongoDB", "OpenAI"],
    accent: "#34d399",
    gradient:
      "radial-gradient(120% 120% at 75% 15%, rgb(52 211 153 / 0.18), transparent 60%), radial-gradient(100% 100% at 15% 90%, rgb(56 189 248 / 0.14), transparent 55%)",
    featured: true,
    cover: {
      kind: "line",
      headline: "Agents",
      sub: "multi-agent · AI recruitment",
    },
    source: "https://github.com/phoenix845/HireGuard-AI",
    overview: [
      "HireGuard AI is an AI-powered recruitment platform built around an agentic orchestrator: four specialised agents run in tandem to evaluate a candidate before you ever hop on a call.",
      "The Resume, Employment, Tech and Risk agents extract and cross-verify data from PDF resumes, analyse career progression, reference GitHub activity for technical depth, and synthesise a final integrity and risk score.",
    ],
    approach: [
      "Orchestrated four specialised AI agents — Resume Intelligence, Employment Verification, Technical Intelligence and Risk Assessment — that run in tandem and feed a final integrity score.",
      "Built adaptive AI-led interviews that adjust questions in real time based on candidate responses.",
      "Parsed and cross-verified PDF resumes automatically, flagging discrepancies and potential red flags in professional history.",
      "Shipped a glassmorphic, responsive dashboard (React 19, Framer Motion, Tailwind) with live analytics and failure-trend analysis, backed by an Express + MongoDB API.",
    ],
    outcomes: [
      { value: "4", label: "Specialised agents" },
      { value: "Real-time", label: "Integrity scoring" },
      { value: "MERN", label: "Full-stack platform" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectIndex(position: number) {
  const index = (position + projects.length - 1) % projects.length;
  return projects[index];
}

export function getAdjacentProject(slug: string) {
  const position = projects.findIndex((project) => project.slug === slug);
  return getProjectIndex(position);
}