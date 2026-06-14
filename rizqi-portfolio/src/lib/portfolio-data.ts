import { content } from "./content";
import type { CVData } from "./cv-types";
import type { Lang } from "./content";

/**
 * Extracts CV data from the portfolio content.ts file
 * This is used by the "Gunakan data dari portfolio" button
 */
export function getPortfolioData(lang: Lang): CVData {
  const t = content[lang];

  return {
    profile: {
      fullName: "Rizqi Khamami",
      title:
        lang === "id"
          ? "Penghobi & Praktisi Teknologi"
          : "Technology Hobbyist & Practitioner",
      email: "rizqikhamami13@gmail.com",
      phone: "",
      location: "",
      linkedin: "https://www.linkedin.com/in/rizqi-khamami-475a801b3/",
      github: "https://github.com/Khamami13",
      website: "https://rizqikhamami.vercel.app",
      summary: t.about.bio.join("\n\n"),
      photoUrl: "",
    },
    experiences: t.experience.items.map((item, i) => ({
      id: `exp-${i}`,
      company: "",
      position: item.title,
      startDate: item.year.split("–")[0],
      endDate: item.year.split("–")[1] || "",
      current: item.year.includes("Kini") || item.year.includes("Now"),
      description: item.description,
    })),
    education: [],
    skillCategories: t.skills.categories.map((cat, i) => ({
      id: `skill-${i}`,
      name: cat.name,
      skills: cat.skills,
    })),
    projects: t.projects.items.map((proj, i) => ({
      id: `proj-${i}`,
      title: proj.title,
      description: proj.description,
      tags: proj.tags,
      url: "",
    })),
    certifications: [],
    language: lang,
  };
}
