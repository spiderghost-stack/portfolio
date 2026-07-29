import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  keywords?: string[];
}

/**
 * Composant SEO pour gérer les métadonnées de chaque page.
 * Gère le titre, description, Open Graph, Twitter Cards, etc.
 */
export default function SEO({
  title = "Roes Nay - Développeur Web Full Stack",
  description = "Étudiant en Physique et développeur web passionné. Je crée des applications web modernes avec React, TypeScript et Tailwind CSS.",
  image = "/images/profile/photo.jpeg",
  article = false,
  keywords = [
    "développeur web",
    "full stack",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "portfolio",
    "Bénin",
    "Abomey-Calavi",
  ],
}: SEOProps) {
  const location = useLocation();
  const siteUrl = "https://roesnay.com"; // TODO: Remplacer par votre vrai domaine
  const currentUrl = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // Titre de la page
    document.title = title;

    // Description
    updateMetaTag("name", "description", description);

    // Keywords
    updateMetaTag("name", "keywords", keywords.join(", "));

    // Open Graph (Facebook, LinkedIn)
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", `${siteUrl}${image}`);
    updateMetaTag("property", "og:url", currentUrl);
    updateMetaTag("property", "og:type", article ? "article" : "website");
    updateMetaTag("property", "og:site_name", "Roes Nay Portfolio");

    // Twitter Cards
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", `${siteUrl}${image}`);

    // Métadonnées supplémentaires
    updateMetaTag("name", "author", "N. G. Roesnay Scharaf-Dine WENON");
    updateMetaTag("name", "robots", "index, follow");
    updateMetaTag("name", "language", "French");
  }, [title, description, image, article, currentUrl, keywords]);

  return null;
}

/**
 * Fonction utilitaire pour mettre à jour ou créer une balise meta
 */
function updateMetaTag(attr: string, key: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}
