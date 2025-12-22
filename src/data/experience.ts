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
      date: "Jan 2025 – Present",
      title: "Researcher",
      company: "SCU - IOT Research Lab",
      description:
        "Conducted literature review and replication of networking research papers on XDP and \
        Flow pattern analysis, validating and extending experimental WiFi 7 testbed performance \
        through method implementation and comparative analysis.",
      // manager: "N/A",
      // companyUrl: "https://www.scu.edu/frugalhub"
    },{
      date: "Mar 2025 – Present",
      title: "Teaching Assistant",
      company: "Santa Clara University",
      description:
        "TA for CSEN 11L (Advanced Programming), 79L (OOP), 146L (Computer Networks), and 266 (AI), leading lab \
        sessions, grading assignments, and holding weekly office hours.",
      // manager: "N/A",
      // companyUrl: "https://www.scu.edu/frugalhub"
    },
    {
      date: "Aug 2024 – Dec 2024",
      title: "Software Engineer",
      company: "Teksolve IT",
      description:
        "implemented a scalable ETL pipeline for a stealth-mode startup client, integrating multiple data sources into a \
        Snowflake data warehouse for downstream analytics.",
      // manager: "N/A",
      // companyUrl: "https://www.scu.edu/frugalhub"
    },
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
