// Statut de déploiement d'un projet : sert à afficher le bon badge (En ligne / Code seulement / En cours)
export type ProjectStatus = "deployed" | "code-only" | "in-progress";

// Structure d'un projet du portfolio.
// Le champ "challenge" contient une difficulté réellement rencontrée : c'est ce qui rend
// la fiche crédible plutôt que générique, donc on ne l'invente jamais, on le garde fidèle
// à ce que le développeur a rapporté.
export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  techStack: string[];
  features: string[];
  challenge: string; // Difficulté rencontrée, racontée simplement
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  // Chemin vers une image de couverture. Optionnel : si absente, on affiche un placeholder.
  imagePath?: string;
}

// Une compétence individuelle affichée sous forme de "pill" dans les cartes de compétences
export interface Skill {
  name: string;
}

// Un groupe de compétences (Frontend, Backend, Mobile, Outils...)
export interface SkillGroup {
  title: string;
  skills: Skill[];
}

// Une étape de la timeline de parcours
export interface TimelineStep {
  year: string;
  title: string;
  description: string;
}

// Un service proposé (section Services)
export interface Service {
  title: string;
  description: string;
  items: string[];
}

// Une réalisation graphique (section Graphisme).
// Les champs description, tools, client et year sont optionnels et s'affichent
// uniquement dans le modal de détail.
export interface GraphismePiece {
  id: string;
  title: string;
  category: string; // ex : "Identité visuelle", "Support commercial"
  imagePath?: string; // chemin vers l'image
  description?: string; // description complète du projet
  tools?: string[]; // outils utilisés (Photoshop, Illustrator, etc.)
  client?: string; // nom du client
  year?: string; // année de réalisation
}

// Un article de blog
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string; // court résumé de l'article
  date: string; // format YYYY-MM-DD
  readingTime: string; // ex: "5 min"
  tags: string[]; // catégories/tags de l'article
  coverImage?: string; // image de couverture
  slug: string; // URL de l'article (ex: "mon-premier-article")
  codeLanguage?: "react" | "typescript" | "css"; // langage pour le fond de code
}
