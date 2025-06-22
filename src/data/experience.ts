export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [

    {
      date: "Jul 2023 – Aug 2024",
      title: "Software Engineer",
      company: "Frugal Innovation Hub",
      description:
        "Built a product for a healthcare startup that drove 5000+ user signups.",
      // manager: "N/A",
      // companyUrl: "https://www.scu.edu/frugalhub"
    },
    {
      date: "Summer 2022",
      title: "Machine Learning Engineer",
      company: "KLA Tencor",
      description:
        "Developed ML microservice to automate case labeling; boosted accuracy by 8% for stakeholder reports.",
      // manager: "N/A",
      // companyUrl: "https://www.kla.com"
    },
    {
      date: "2019–2021",
      title: "Software Engineer - ML",
      company: "Vint Media",
      description:
        "Built recommender systems improving AOV by 20%; led churn prediction (82% precision); optimized Spark+Kafka pipelines for 550GB data; containerized services with Docker + K8s.",
      // manager: "N/A",
      // companyUrl: "https://vintmedia.in"
    }
];
