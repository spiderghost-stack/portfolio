export type Locale = "fr" | "en";

// Structure d'un dictionnaire de traduction : un objet à plat, clé -> texte.
// On reste volontairement simple (pas d'imbrication profonde) pour que ce soit
// facile à relire et à compléter, y compris depuis un téléphone.
export type Dictionary = Record<string, string>;
