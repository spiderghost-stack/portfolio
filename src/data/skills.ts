import type { SkillGroup } from "../types";

// Compétences groupées par domaine, telles que définies dans le cahier des charges.
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "API REST" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "Firebase" },
    ],
  },
  {
    title: "Outils",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Figma" },
    ],
  },
];
