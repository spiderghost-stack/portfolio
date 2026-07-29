interface SectionHeadingProps {
  eyebrow: string; // petit label au-dessus du titre, ex: "PROJETS RÉCENTS"
  title: string;
  description?: string;
}

/**
 * En-tête de section réutilisé partout : un tiret + label en majuscules (eyebrow),
 * puis un titre en Sora. Reproduit le motif visible dans la maquette de référence
 * ("— 3 PROFILS, 1 VISION", "— PROJETS RÉCENTS"...).
 */
export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl font-bold text-ink-light dark:text-ink md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-light-soft dark:text-ink-soft">{description}</p>
      )}
    </div>
  );
}
