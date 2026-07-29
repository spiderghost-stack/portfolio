# Portfolio — Roes Nay

Portfolio personnel développé avec React, Vite, TypeScript et Tailwind CSS.

## 🚀 Aperçu rapide (sans installation)

Le fichier **`preview.html`** à la racine du projet peut être ouvert directement
dans n'importe quel navigateur (y compris sur téléphone) pour voir un aperçu du
design, avec le mode dark/light et FR/EN fonctionnels. Ce n'est **pas** le vrai
projet : c'est une version simplifiée en HTML/CSS/JS pur, sans React, sans
animations, et avec un formulaire de contact non connecté. Elle sert uniquement
à visualiser rapidement le rendu.

Le vrai projet (celui à utiliser pour le développement et le déploiement) est
dans le dossier `src/`.

## 🛠️ Installation (à faire sur un ordinateur)

Prérequis : [Node.js](https://nodejs.org) version 18 ou supérieure.

```bash
# 1. Se placer dans le dossier du projet
cd portfolio-roesnay

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`.

## 📁 Structure du projet

```
src/
├── assets/images/       → Tes images (captures de projets, visuels graphisme)
├── components/          → Composants réutilisables (Button, Badge, ProjectCard...)
├── context/              → Contexte du thème dark/light
├── data/                 → Contenu du site (projets, compétences, services...)
├── i18n/                 → Système de traduction FR/EN (dictionnaires + contexte)
├── sections/              → Les grandes sections de la page (Hero, About, Projects...)
├── styles/               → CSS global
├── types/                 → Types TypeScript partagés
├── App.tsx                → Assemble toutes les sections
└── main.tsx                → Point d'entrée de l'application
```

Chaque fichier est commenté pour expliquer son rôle et les décisions prises.

## ✅ Ce qui est fonctionnel

- **Mode dark/light** : bouton dans la navbar, préférence sauvegardée automatiquement.
- **FR/EN** : bouton dans la navbar. Les labels de l'interface (titres, boutons,
  formulaire) sont traduits. **Le contenu des projets reste en français** — voir
  la note dans `src/components/ProjectCard.tsx` si tu veux l'étendre.
- **Formulaire de contact** : connecté à [Formspree](https://formspree.io)
  (gratuit, sans backend à héberger). **Tu dois compléter une URL avant que
  ça fonctionne** — voir ci-dessous.

## ⚠️ À compléter avant mise en ligne

### 1. Formulaire de contact (obligatoire pour qu'il fonctionne)

Dans `src/components/ContactForm.tsx`, ligne ~16 :

```ts
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REMPLACE_MOI";
```

1. Crée un compte gratuit sur [formspree.io](https://formspree.io)
2. Crée un nouveau formulaire relié à ton email
3. Remplace l'URL par celle que Formspree te donne

Tant que ce n'est pas fait, le formulaire affiche un message d'erreur clair
plutôt que d'échouer silencieusement.

### 2. Liens de contact

Dans `src/sections/Contact.tsx` :
```ts
const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/spiderghost-stack" }, // déjà bon
  { label: "LinkedIn", href: "https://linkedin.com/in/REMPLACE_MOI" }, // à compléter
  { label: "Email", href: "mailto:REMPLACE_MOI@exemple.com" }, // à compléter
];
```

### 3. Images

- **Captures d'écran des projets** : ajoute-les dans `src/assets/images/projects/`
  puis renseigne `imagePath` dans `src/data/projects.ts` pour chaque projet.
- **Visuels graphisme** : ajoute-les dans `src/assets/images/graphisme/` puis
  renseigne `imagePath` dans `src/data/graphisme.ts`.
- **Photo de profil** : à intégrer dans le Hero selon ce que tu préfères
  (composition originale, comme mentionné dans le cahier des charges).

### 4. Repos GitHub

Vérifie que les liens `githubUrl` dans `src/data/projects.ts` pointent vers
des repos **publics**. Si un repo est privé, soit tu le rends public, soit tu
retires le lien de la fiche projet correspondante.

## 🌍 Déploiement

Le cahier des charges prévoyait Vercel ; tu as ensuite précisé vouloir Render
pour la messagerie (gratuit). Les deux fonctionnent bien avec ce projet :

- **Vercel** : connecte le repo GitHub, Vercel détecte Vite automatiquement.
- **Render** (Static Site) : build command `npm run build`, publish directory `dist`.

## 🔜 Prochaines étapes prévues

- Éléments 3D avec Three.js / React Three Fiber dans le Hero
- Section Blog (probablement en MDX statique, pour rester gratuit)

## 🧩 Note sur la traduction du contenu des projets

Actuellement, `data/projects.ts` ne contient que du texte français. Si tu veux
que les descriptions, fonctionnalités et difficultés des projets soient aussi
traduites en anglais, il faudra ajouter des champs comme `shortDescriptionEn`,
`featuresEn`, `challengeEn` au type `Project` (dans `src/types/index.ts`) et
les renseigner pour chaque projet.
