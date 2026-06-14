export interface CVProfile {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
  summary: string;
  photoUrl: string;
}

export interface CVExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface CVEducation {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface CVSkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface CVProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export interface CVCertification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface CVData {
  profile: CVProfile;
  experiences: CVExperience[];
  education: CVEducation[];
  skillCategories: CVSkillCategory[];
  projects: CVProject[];
  certifications: CVCertification[];
  language: "id" | "en";
}

export const defaultCVData: CVData = {
  profile: {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    website: "",
    summary: "",
    photoUrl: "",
  },
  experiences: [],
  education: [],
  skillCategories: [],
  projects: [],
  certifications: [],
  language: "id",
};

export type TemplateType = "modern" | "classic" | "minimal";
