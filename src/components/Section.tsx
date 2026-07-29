import type { ReactNode } from "react";

interface SectionProps {
  id: string; // utilisé pour les ancres de navigation (#projets, #contact...)
  children: ReactNode;
  className?: string;
  soft?: boolean; // si true, applique le fond secondaire (#101010) pour alterner visuellement les sections
}

/**
 * Wrapper générique qui uniformise :
 * - le padding vertical entre sections,
 * - la largeur max du contenu,
 * - l'alternance de fond (clair/sombre) pour rythmer la page sans ajouter de bordures.
 *
 * Les fonds sont semi-transparents pour laisser voir l'animation 3D en arrière-plan.
 */
export default function Section({ id, children, className = "", soft = false }: SectionProps) {
  const bgClass = soft
    ? "bg-bg-light-soft/80 dark:bg-bg-soft/80 backdrop-blur-sm"
    : "bg-bg-light/70 dark:bg-bg/70 backdrop-blur-sm";

  return (
    <section id={id} className={`w-full ${bgClass} py-20 transition-colors duration-300 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
