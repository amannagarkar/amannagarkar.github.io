export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—Present",
    institution: "Santa Clara University",
    degree: "Ph.D. in Computer Science",
    advisor: "Affiliated with the SCU IOT Research Lab. Advisor - Dr. Behnam Dezfouli",
  },{
    year: "2021—2023",
    institution: "Santa Clara University",
    degree: "M.S. in Computer Science",
    // advisor: "Prof. Behnam Dezfouli",
  },
  {
    year: "2015-2019",
    institution: "University of Pune",
    degree: "B.E. in Computer Science and Engineering",
    // thesis: "Voice Approaches to Manage Enterprises",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
