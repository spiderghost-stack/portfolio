import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLocale } from "../i18n/LocaleContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale, t } = useLocale();

  // Liens de navigation construits avec t() : recalculés à chaque changement de langue.
  const navLinks = [
    { label: t("nav.accueil"), href: "/" },
    { label: t("nav.apropos"), href: "/#a-propos" },
    { label: t("nav.projets"), href: "/portfolio" },
    { label: t("nav.competences"), href: "/#competences" },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-bg-light/90 backdrop-blur-md dark:border-white/10 dark:bg-bg/90"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#accueil" className="font-display text-lg font-bold text-ink-light dark:text-ink">
          Roes<span className="text-accent">.</span>Nay
        </a>

        {/* Navigation desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-ink-light-soft transition-colors hover:text-accent dark:text-ink-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Bascule de langue : affiche la langue vers laquelle on va basculer */}
          <button
            onClick={toggleLocale}
            aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
            className="flex h-9 items-center justify-center rounded-full border border-black/10 px-3 font-mono text-xs font-medium text-ink-light transition-colors hover:border-accent/50 hover:text-accent dark:border-white/10 dark:text-ink"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>

          {/* Bascule de thème : icône soleil en mode sombre (pour passer au clair),
              icône lune en mode clair (pour passer au sombre). */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink-light transition-colors hover:border-accent/50 hover:text-accent dark:border-white/10 dark:text-ink"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Bouton hamburger, visible uniquement en mobile */}
          <button
            className="flex h-9 w-9 items-center justify-center text-ink-light dark:text-ink md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-black/10 bg-bg-light px-6 py-4 dark:border-white/10 dark:bg-bg md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 font-body text-ink-light-soft transition-colors hover:text-accent dark:text-ink-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
