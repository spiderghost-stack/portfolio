import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Locale } from "./types";
import { fr } from "./fr";
import { en } from "./en";

interface LocaleContextValue {
  locale: Locale;
  toggleLocale: () => void;
  /** Fonction de traduction : t("hero.title") renvoie le texte dans la langue active. */
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const STORAGE_KEY = "roesnay-portfolio-locale";

// Regroupe les deux dictionnaires pour un accès simple par code de langue.
const DICTIONARIES = { fr, en };

/**
 * Détermine la langue initiale :
 * 1. Si l'utilisateur a déjà choisi une langue (stockée), on la respecte.
 * 2. Sinon, on regarde la langue du navigateur : si elle commence par "fr", on part en français.
 * 3. Par défaut, le site est en français (langue d'origine du contenu).
 */
function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "fr";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en") return stored;

  const browserLang = window.navigator.language.toLowerCase();
  return browserLang.startsWith("fr") ? "fr" : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    // Met à jour l'attribut lang de la page, utile pour l'accessibilité et le SEO.
    document.documentElement.lang = locale;
  }, [locale]);

  function toggleLocale() {
    setLocale((current) => (current === "fr" ? "en" : "fr"));
  }

  function t(key: string): string {
    const dictionary = DICTIONARIES[locale];
    const value = dictionary[key];
    if (value === undefined) {
      // Si une clé manque dans un dictionnaire (oubli lors d'un ajout de contenu),
      // on affiche la clé elle-même plutôt qu'une chaîne vide : ça reste visible
      // et facile à repérer en cours de développement.
      console.warn(`[i18n] Clé de traduction manquante : "${key}" (langue: ${locale})`);
      return key;
    }
    return value;
  }

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

/**
 * Hook d'accès à la langue et à la fonction de traduction.
 * Doit être utilisé à l'intérieur d'un <LocaleProvider>.
 */
export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale doit être utilisé à l'intérieur d'un <LocaleProvider>");
  }
  return context;
}
