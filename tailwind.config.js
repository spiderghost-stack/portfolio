/** @type {import('tailwindcss').Config} */
export default {
  // "class" : le mode sombre s'active en ajoutant la classe "dark" sur <html>,
  // ce qui permet un bouton toggle contrôlé par l'utilisateur (plutôt que de suivre
  // uniquement la préférence système avec la stratégie "media").
  darkMode: "class",
  // On scanne index.html + tous les fichiers source pour générer uniquement les classes utilisées.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palette sombre imposée par le cahier des charges (thème par défaut).
        bg: {
          DEFAULT: "#050505", // fond principal
          soft: "#101010", // fond secondaire (cartes, sections alternées)
        },
        ink: {
          DEFAULT: "#FFFFFF", // texte principal
          soft: "#A0A0A0", // texte secondaire
        },
        // Palette claire, utilisée quand la classe "dark" est absente de <html>.
        // Choisie pour rester cohérente avec l'accent cyan (qui reste lisible sur fond clair
        // en passant sur sa variante "dim", plus saturée/foncée pour garder le contraste).
        "bg-light": {
          DEFAULT: "#FAFAFA", // équivalent clair de bg.DEFAULT -> classe "bg-bg-light"
          soft: "#F0F0F0", // équivalent clair de bg.soft -> classe "bg-bg-light-soft"
        },
        "ink-light": {
          DEFAULT: "#0A0A0A",
          soft: "#5A5A5A",
        },
        // Couleur accent : cyan signal, cohérente avec le profil physique-chimie
        // (spectre / oscilloscope) et avec la maquette de référence fournie.
        accent: {
          DEFAULT: "#00D9FF",
          dim: "#00A8C7", // variante plus sombre pour les états hover/pressed, et pour le mode clair
          glow: "#5CEFFF", // variante plus claire pour les halos lumineux
        },
      },
      fontFamily: {
        // Titres : Sora (600/700) — chargée dans index.html via Google Fonts
        display: ["Sora", "sans-serif"],
        // Texte courant : Manrope (400/500/600)
        body: ["Manrope", "sans-serif"],
        // Extraits de code / éléments techniques : JetBrains Mono
        mono: ["JetBrains Mono", "monospace"],
      },
      // Grille de fond façon "papier millimétré" utilisée dans le hero (signature visuelle)
      backgroundImage: {
        grid: "linear-gradient(rgba(0,217,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        blink: "blink 1s steps(2, start) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
