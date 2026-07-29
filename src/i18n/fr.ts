import type { Dictionary } from "./types";

// Dictionnaire français. Sert de référence : c'est la langue dans laquelle
// le contenu a été rédigé à l'origine, donc les autres langues doivent rester
// fidèles à ce texte plutôt que l'inverse.
export const fr: Dictionary = {
  // Navigation
  "nav.accueil": "Accueil",
  "nav.apropos": "À propos",
  "nav.projets": "Projets",
  "nav.competences": "Compétences",
  "nav.graphisme": "Graphisme",
  "nav.blog": "Blog",
  "nav.services": "Services",
  "nav.contact": "Contact",

  // Hero
  "hero.badge": "Disponible pour de nouveaux projets",
  "hero.title": "Roes Nay",
  "hero.subtitle": "Développeur Web Full Stack & Créateur d'expériences numériques",
  "hero.description":
    "Étudiant en Licence 3 de Physique Fondamentale à l'Université d'Abomey-Calavi, passionné par le développement web. Je conçois des applications modernes en combinant logique scientifique, créativité et technologie.",
  "hero.cta.projects": "Découvrir mes projets →",
  "hero.cta.contact": "Me contacter",

  // About
  "about.eyebrow": "À propos",
  "about.title": "Mon parcours",
  "about.item1":
    "Licence de Physique Fondamentale à l'Université d'Abomey-Calavi (Faculté des Sciences et Techniques), actuellement en 3e année",
  "about.item2": "Transition progressive vers le développement web depuis la 1re année de licence",
  "about.item3": "Apprentissage autonome, par la pratique et la documentation",
  "about.item4": "Création de projets personnels concrets",
  "about.quote":
    "\"La rigueur scientifique acquise en physique me permet d'aborder le développement avec une approche logique et structurée.\"",

  // Skills
  "skills.eyebrow": "Compétences",
  "skills.title": "Ce que je maîtrise",
  "skills.description":
    "Un socle technique construit projet après projet, du frontend au backend, jusqu'au mobile.",

  // Portfolio (page unifiée)
  "portfolio.title": "Mes réalisations",
  "portfolio.description":
    "Découvrez mes projets web, articles de blog et créations graphiques.",

  // Projects
  "projects.eyebrow": "Projets récents",
  "projects.title": "Ce que j'ai construit",
  "projects.description":
    "Plus de 10 projets réalisés — voici une sélection des plus significatifs, avec leurs réussites et leurs vraies difficultés.",
  "projects.features": "Fonctionnalités",
  "projects.challenge": "Difficulté rencontrée",
  "projects.github": "GitHub ↗",
  "projects.demo": "Démo ↗",
  "projects.status.deployed": "En ligne",
  "projects.status.code-only": "Code disponible",
  "projects.status.in-progress": "En développement",
  "projects.image-placeholder": "[ capture d'écran à ajouter ]",

  // Timeline
  "timeline.eyebrow": "Parcours",
  "timeline.title": "Étapes clés",

  // Graphisme
  "graphisme.eyebrow": "Graphisme",
  "graphisme.title": "Quelques réalisations visuelles",
  "graphisme.description":
    "En dehors du code, je conçois aussi des identités visuelles et supports graphiques.",
  "graphisme.image-placeholder": "[ visuel à ajouter ]",
  "graphisme.modal.description": "Description",
  "graphisme.tools": "Outils utilisés",
  "graphisme.client": "Client",
  "graphisme.year": "Année",
  "graphisme.close": "Fermer",

  // Services
  "services.eyebrow": "Services",
  "services.title": "Comment je peux aider",

  // Blog
  "blog.eyebrow": "Blog",
  "blog.title": "Articles & Découvertes",
  "blog.description":
    "Réflexions techniques, tutoriels et retours d'expérience sur le développement web.",

  // Contact
  "contact.eyebrow": "Contact",
  "contact.title": "Discutons de votre projet",
  "contact.description":
    "Une question, une opportunité de stage, un projet freelance ? Écrivez-moi directement ci-dessous.",
  "contact.form.name": "Nom",
  "contact.form.name.placeholder": "Votre nom",
  "contact.form.email": "Email",
  "contact.form.email.placeholder": "vous@exemple.com",
  "contact.form.message": "Message",
  "contact.form.message.placeholder": "Votre message...",
  "contact.form.submit": "Envoyer le message",
  "contact.form.submitting": "Envoi en cours...",
  "contact.form.success": "Message envoyé avec succès. Je réponds généralement sous 48h.",
  "contact.form.error.notConfigured":
    "Le formulaire n'est pas encore connecté à Formspree. Remplace FORMSPREE_ENDPOINT dans src/components/ContactForm.tsx.",
  "contact.form.error.generic": "Une erreur est survenue. Réessaie.",
  "contact.form.error.network": "Impossible de contacter le serveur. Vérifie ta connexion et réessaie.",
  "contact.other": "Autres moyens de me joindre",

  // Footer
  "footer.rights": "Tous droits réservés.",
  "footer.builtWith": "Construit avec React, TypeScript & Tailwind CSS",
};
