export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    items: ["Python", "SQL", "MySQL", "PostgreSQL", "MongoDB", "Jupyter Notebook"],
  },
  {
    category: "Data & ML",
    items: ["pandas", "NumPy", "scikit-learn", "Machine Learning", "EDA", "GenAI"],
  },
  {
    category: "Data Engineering",
    items: ["ETL pipelines", "Docker", "Power BI", "Excel", "Data profiling", "Streamlit"],
  },
  {
    category: "Professional",
    items: ["Problem-solving", "Communication", "Teamwork", "Git / GitHub", "VS Code"],
  },
];

export const toolMarquee = [
  "Python",
  "SQL",
  "Power BI",
  "pandas",
  "NumPy",
  "scikit-learn",
  "Streamlit",
  "Docker",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Excel",
  "ETL",
  "EDA",
  "Git",
  "Machine Learning",
];