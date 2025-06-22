export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Aman. P. Nagarkar",
  title: "Ph.D. Candidate",
  institution: "Santa Clara University",
  // Note that links work in the description
  description:
    "I'm a first-year PhD candidate working at the intersection of networks and machine learning. My research focuses on developing robust, interpretable systems that can reason about cause and effect in complex environments.",
  email: "anagarkar [at] scu [dot] edu",
  // imageUrl:
    // "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // googleScholarUrl: "",
  githubUsername: "amannagarkar",
  linkedinUsername: "aman-nagarkar",
  funDescription: "I love cars.",
  // twitterUsername: "janesmith",
  blogUrl: "https://amannagarkar.medium.com",
  // cvUrl: "https://",
  institutionUrl: "https://www.scu.edu",
  // altName: "",
  // secretDescription: "I love cars.",
};
