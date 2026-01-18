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
    "I'm a Second-year PhD candidate working at the intersection of networks and machine learning. My research focuses on a intersection of hardware, software and networking. I am particularly interested in the design and implementation of networked systems that leverage machine learning to improve performance, reliability, and security. My work involves developing novel algorithms and architectures that can adapt to dynamic network conditions and optimize resource utilizationf.",
  email: "anagarkar [at] scu [dot] edu",
  imageUrl:
    "src/app/headshot.jpeg",
  // googleScholarUrl: "",
  githubUsername: "amannagarkar",
  linkedinUsername: "aman-nagarkar",
  funDescription: "Love cars.",
  // twitterUsername: "janesmith",
  blogUrl: "https://amannagarkar.medium.com",
  // cvUrl: "https://",
  institutionUrl: "https://www.scu.edu",
  // altName: "",
  // secretDescription: "I love cars.",
};
