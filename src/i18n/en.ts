import type { Dictionary } from "./types";

// Dictionnaire anglais. Les clés doivent rester strictement identiques à celles
// de fr.ts : si tu ajoutes un texte, ajoute la clé dans les DEUX fichiers.
export const en: Dictionary = {
  // Navigation
  "nav.accueil": "Home",
  "nav.apropos": "About",
  "nav.projets": "Projects",
  "nav.competences": "Skills",
  "nav.graphisme": "Design",
  "nav.blog": "Blog",
  "nav.services": "Services",
  "nav.contact": "Contact",

  // Hero
  "hero.badge": "Available for new projects",
  "hero.title": "Roes Nay",
  "hero.subtitle": "Full Stack Web Developer & Digital Experience Creator",
  "hero.description":
    "Third-year Physics student at the University of Abomey-Calavi, passionate about web development. I build modern applications by combining scientific rigor, creativity, and technology.",
  "hero.cta.projects": "See my projects →",
  "hero.cta.contact": "Get in touch",

  // About
  "about.eyebrow": "About",
  "about.title": "My journey",
  "about.item1":
    "Bachelor's degree in Fundamental Physics at the University of Abomey-Calavi (Faculty of Sciences and Technology), currently in 3rd year",
  "about.item2": "Gradual shift toward web development since 1st year of university",
  "about.item3": "Self-taught, through practice and documentation",
  "about.item4": "Building concrete personal projects",
  "about.quote":
    "\"The scientific rigor I gained in physics helps me approach development with a logical, structured mindset.\"",

  // Skills
  "skills.eyebrow": "Skills",
  "skills.title": "What I work with",
  "skills.description":
    "A technical foundation built project after project, from frontend to backend, and mobile.",

  // Portfolio (unified page)
  "portfolio.title": "My Work",
  "portfolio.description":
    "Explore my web projects, blog articles, and graphic creations.",

  // Projects
  "projects.eyebrow": "Recent projects",
  "projects.title": "What I've built",
  "projects.description":
    "10+ projects completed — here's a selection of the most significant ones, with their wins and real challenges.",
  "projects.features": "Features",
  "projects.challenge": "Challenge faced",
  "projects.github": "GitHub ↗",
  "projects.demo": "Live demo ↗",
  "projects.status.deployed": "Live",
  "projects.status.code-only": "Code available",
  "projects.status.in-progress": "In progress",
  "projects.image-placeholder": "[ screenshot to add ]",

  // Timeline
  "timeline.eyebrow": "Journey",
  "timeline.title": "Key milestones",

  // Graphisme
  "graphisme.eyebrow": "Design",
  "graphisme.title": "A few visual projects",
  "graphisme.description":
    "Besides code, I also design visual identities and graphic assets.",
  "graphisme.image-placeholder": "[ visual to add ]",
  "graphisme.modal.description": "Description",
  "graphisme.tools": "Tools used",
  "graphisme.client": "Client",
  "graphisme.year": "Year",
  "graphisme.close": "Close",

  // Services
  "services.eyebrow": "Services",
  "services.title": "How I can help",

  // Blog
  "blog.eyebrow": "Blog",
  "blog.title": "Articles & Insights",
  "blog.description":
    "Technical thoughts, tutorials, and learnings about web development.",

  // Contact
  "contact.eyebrow": "Contact",
  "contact.title": "Let's talk about your project",
  "contact.description":
    "A question, an internship opportunity, a freelance project? Write to me directly below.",
  "contact.form.name": "Name",
  "contact.form.name.placeholder": "Your name",
  "contact.form.email": "Email",
  "contact.form.email.placeholder": "you@example.com",
  "contact.form.message": "Message",
  "contact.form.message.placeholder": "Your message...",
  "contact.form.submit": "Send message",
  "contact.form.submitting": "Sending...",
  "contact.form.success": "Message sent successfully. I usually reply within 48h.",
  "contact.form.error.notConfigured":
    "The form isn't connected to Formspree yet. Replace FORMSPREE_ENDPOINT in src/components/ContactForm.tsx.",
  "contact.form.error.generic": "Something went wrong. Please try again.",
  "contact.form.error.network": "Couldn't reach the server. Check your connection and try again.",
  "contact.other": "Other ways to reach me",

  // Footer
  "footer.rights": "All rights reserved.",
  "footer.builtWith": "Built with React, TypeScript & Tailwind CSS",
};
