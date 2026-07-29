import type { BlogPost } from "../types";

/**
 * Articles de blog - exemples de départ.
 *
 * Pour ajouter un nouvel article :
 * 1. Ajoute une entrée ici avec les métadonnées
 * 2. Le contenu complet peut être géré avec MDX plus tard
 */
export const blogPosts: BlogPost[] = [
  {
    id: "react-hooks-2026",
    slug: "comprendre-react-hooks-2026",
    title: "Comprendre les React Hooks en 2026",
    excerpt:
      "Un guide complet sur les hooks React : useState, useEffect, useContext et les hooks personnalisés. Exemples pratiques et bonnes pratiques.",
    date: "2026-07-15",
    readingTime: "8 min",
    tags: ["React", "JavaScript", "Hooks"],
    codeLanguage: "react",
  },
  {
    id: "typescript-tips",
    slug: "astuces-typescript-productivite",
    title: "5 astuces TypeScript pour augmenter votre productivité",
    excerpt:
      "Découvrez des techniques TypeScript avancées pour écrire du code plus sûr et plus maintenable : types utilitaires, generics, et plus.",
    date: "2026-07-10",
    readingTime: "6 min",
    tags: ["TypeScript", "Développement"],
    codeLanguage: "typescript",
  },
  {
    id: "tailwind-dark-mode",
    slug: "implementer-dark-mode-tailwind",
    title: "Implémenter un Dark Mode avec Tailwind CSS",
    excerpt:
      "Guide pas à pas pour ajouter un mode sombre à votre application React avec Tailwind CSS. Sauvegarde de la préférence utilisateur incluse.",
    date: "2026-07-05",
    readingTime: "10 min",
    tags: ["Tailwind CSS", "CSS", "UX"],
    codeLanguage: "css",
  },
];
