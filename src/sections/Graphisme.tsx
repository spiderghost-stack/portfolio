import { Link } from "react-router-dom";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { graphismePieces } from "../data/graphisme";
import { useLocale } from "../i18n/LocaleContext";

/**
 * Section Graphisme avec vignettes cliquables.
 * Cliquer sur une vignette ouvre une page complète avec l'image en grand
 * et toutes les informations (description, outils, client, année).
 */
export default function Graphisme() {
  const { t } = useLocale();

  return (
    <Section id="graphisme" soft>
      <SectionHeading
        eyebrow={t("graphisme.eyebrow")}
        title={t("graphisme.title")}
        description={t("graphisme.description")}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {graphismePieces.map((piece) => (
          <Link
            key={piece.id}
            to={`/graphisme/${piece.id}`}
            className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-xl border border-black/10 bg-bg-light transition-all hover:scale-[1.02] hover:border-accent/50 dark:border-white/10 dark:bg-bg"
          >
            {/* Image */}
            {piece.imagePath ? (
              <img
                src={piece.imagePath}
                alt={piece.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] text-ink-light-soft/40 dark:text-ink-soft/40">
                {t("graphisme.image-placeholder")}
              </span>
            )}

            {/* Overlay avec dégradé pour la lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

            {/* Informations */}
            <div className="relative z-10 p-4">
              <p className="mb-1 font-body text-sm font-semibold text-white">
                {piece.title}
              </p>
              <p className="font-mono text-xs text-white/80">{piece.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
