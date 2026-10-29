export type SocialLink = {
  label: string;
  href: string;
  icon?: "github" | "linkedin" | "mail";
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  detailDescription: string;
  repoUrl: string;
  liveUrl?: string;
  image: string;
  tags: string[];
  developmentChallenges: string;
  potentialImprovements: string[];
};

export type EducationEntry = {
  institution: string;
  qualification: string;
  startDate: string;
  endDate: string;
  image: string;
  imageAlt: string;
  grade?: string;
  status: "currently-pursuing" | "completed";
};

export type Certification = {
  name: string;
  organization: string;
  issueDate?: string;
  credentialUrl?: string;
  image?: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type PublicationEntry = {
  title: string;
  venue: string;
  date?: string;
  link?: string;
};
