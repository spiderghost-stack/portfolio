import type { Project } from "../types";

/**
 * Liste des projets du portfolio.
 *
 * IMPORTANT (à toi de compléter) :
 * - Les champs `githubUrl` sont pré-remplis avec les noms de repos que tu as donnés.
 *   Vérifie que les URLs correspondent bien à tes repos (certains sont peut-être privés :
 *   dans ce cas, soit tu les rends publics, soit tu retires le lien GitHub de la fiche).
 * - Les champs `imagePath` sont vides : ajoute tes propres captures d'écran dans
 *   src/assets/images/projects/ puis remplace la valeur (ex: "/src/assets/images/projects/le-peniel.png").
 * - Le champ `demoUrl` de FAST CONNECT est vide car pas encore déployé : à ajouter dès que
 *   tu as choisi où l'héberger.
 */
export const projects: Project[] = [
  {
    id: "le-peniel-delivery",
    name: "Le Peniel Delivery",
    shortDescription:
      "Application mobile de livraison : les clients commandent, les administrateurs gèrent les commandes et suivent la livraison en temps réel.",
    techStack: ["React Native", "Expo", "Firebase", "react-native-maps"],
    features: [
      "Authentification des utilisateurs",
      "Gestion des commandes côté client et côté admin",
      "Suivi de commande en temps réel sur une carte",
      "Interface d'administration dédiée",
    ],
    challenge:
      "Le suivi de commande sur la carte (react-native-maps) plantait l'application dès que le client appuyait sur \"Suivre ma commande\" — un crash immédiat, sans message clair. Il a fallu six itérations pour stabiliser le composant. À ça s'ajoutaient des temps de build interminables à chaque test, ce qui rendait chaque cycle de correction plus long que prévu.",
    status: "code-only",
    imagePath: "/images/projects/le peniel.png",
  },
  {
    id: "fast-connect",
    name: "FAST CONNECT",
    shortDescription:
      "Site vitrine pour la Faculté des Sciences et Techniques (FAST) de l'Université d'Abomey-Calavi : présentation, actualités et informations pratiques, avec d'autres fonctionnalités encore en développement.",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    features: [
      "Présentation de la faculté",
      "Fil d'actualités",
      "Frise chronologique de l'histoire de la FAST",
      "Interface d'administration (en cours de fiabilisation)",
    ],
    challenge:
      "La frise chronologique de l'histoire de la FAST s'est révélée plus capricieuse que prévu : au lancement du serveur, l'affichage se désorganisait complètement, ce qui a demandé plusieurs allers-retours pour la stabiliser. Le site public est responsive, mais l'interface d'administration ne l'est pas encore vraiment sur mobile — un chantier restant avant la mise en ligne.",
    status: "in-progress",
    imagePath: "/images/projects/fast-connect.png",
    demoUrl: "https://fast-connect.onrender.com/",
  },
  {
    id: "mindlog",
    name: "MindLog",
    shortDescription:
      "Blog personnel pour publier des articles et découvertes techniques, avec upload d'images géré sans dépendre d'un service de stockage payant.",
    techStack: ["React", "TypeScript"],
    features: [
      "Rédaction et publication d'articles",
      "Upload d'images intégré à l'article",
      "Interface de lecture simple et rapide",
    ],
    challenge:
      "L'upload d'images a été le point le plus long à résoudre : le stockage Firebase impliquait un coût que je voulais éviter. Après plusieurs heures de recherche, la solution retenue a été de convertir les images en base64 pour les stocker directement, sans service tiers payant.",
    status: "in-progress",
    imagePath: "/images/projects/mindlog.png",
    githubUrl: "https://github.com/spiderghost-stack/blog",
    demoUrl: "https://mindlog-zgzb.onrender.com",
  },
  {
    id: "freelanceflow",
    name: "FreelanceFlow",
    shortDescription:
      "SaaS de gestion pour freelances : suivi du chiffre d'affaires, création de clients et de factures, téléchargement de devis, relances automatiques.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Gestion des clients et des factures",
      "Génération et téléchargement de devis",
      "Suivi du chiffre d'affaires",
      "Relance par message des clients en cas d'impayé",
    ],
    challenge:
      "Deux points ont demandé le plus d'attention : un mauvais découpage des routes API qui a fait perdre du temps à déboguer, et les statistiques du tableau de bord qui se réinitialisaient de façon inattendue dès qu'un bug était corrigé ailleurs dans l'app — un effet de bord qu'il a fallu isoler. La responsivité est également repassée par plusieurs cycles de correction à chaque nouvelle fonctionnalité ajoutée.",
    status: "in-progress",
    imagePath: "/images/projects/freelanceflow.png",
  },
  {
    id: "nebulis",
    name: "Nébulis",
    shortDescription:
      "Application météo moderne affichant les données météorologiques en temps réel via l'API OpenWeather, avec interface intuitive et recherche par ville.",
    techStack: ["React", "OpenWeather API"],
    features: [
      "Recherche de la météo par ville",
      "Affichage de la température, humidité, pression et vent",
      "Localisation actuelle",
      "Interface moderne et responsive",
    ],
    challenge:
      "Projet marqué par un accident de parcours : après plusieurs sessions de débogage frustrantes, le dossier local du projet a été supprimé par erreur. Heureusement, un push antérieur sur GitHub avait déjà sauvegardé le code, ce qui a permis de tout récupérer.",
    status: "code-only",
    imagePath: "/images/projects/recupmeteo.png",
  },
];
