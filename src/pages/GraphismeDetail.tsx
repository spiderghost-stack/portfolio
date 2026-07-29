import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Palette } from "lucide-react";
import { graphismePieces } from "../data/graphisme";
import { useLocale } from "../i18n/LocaleContext";

/**
 * Page de détail d'une réalisation graphique.
 * Affiche l'image en grand format avec toutes les informations.
 */
export default function GraphismeDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLocale();
  const piece = graphismePieces.find((p) => p.id === id);

  if (!piece) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 font-display text-4xl font-bold text-ink-light dark:text-ink">
            Réalisation non trouvée
          </h1>
          <Link
            to="/#graphisme"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <ArrowLeft size={20} />
            Retour au portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Background fixe */}
      <div className="fixed inset-0 -z-10 bg-bg-light dark:bg-bg" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        {/* Bouton retour */}
        <Link
          to="/#graphisme"
          className="mb-8 inline-flex items-center gap-2 text-accent transition-colors hover:text-accent-glow"
        >
          <ArrowLeft size={20} />
          Retour au portfolio
        </Link>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Image grande */}
          <div className="overflow-hidden rounded-2xl border-2 border-accent/30 bg-bg-light-soft shadow-2xl dark:bg-bg-soft">
            {piece.imagePath ? (
              <img
                src={piece.imagePath}
                alt={piece.title}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="flex h-96 items-center justify-center">
                <span className="font-mono text-sm text-ink-light-soft/40 dark:text-ink-soft/40">
                  [ image à ajouter ]
                </span>
              </div>
            )}
          </div>

          {/* Informations */}
          <div className="flex flex-col justify-center">
            {/* Catégorie */}
            <div className="mb-4 inline-flex items-center gap-2 text-accent">
              <Palette size={20} />
              <span className="font-mono text-sm uppercase tracking-wider">
                {piece.category}
              </span>
            </div>

            {/* Titre */}
            <h1 className="mb-6 font-display text-4xl font-bold text-ink-light dark:text-ink md:text-5xl">
              {piece.title}
            </h1>

            {/* Description */}
            {piece.description && (
              <div className="mb-6">
                <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft">
                  {t("graphisme.modal.description")}
                </h2>
                <p className="leading-relaxed text-ink-light-soft dark:text-ink-soft">
                  {piece.description}
                </p>
              </div>
            )}

            {/* Outils */}
            {piece.tools && piece.tools.length > 0 && (
              <div className="mb-6">
                <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft">
                  {t("graphisme.tools")}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {piece.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-sm text-accent"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Meta informations */}
            <div className="space-y-4 border-t border-black/10 pt-6 dark:border-white/10">
              {piece.client && (
                <div>
                  <h3 className="mb-1 font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft">
                    {t("graphisme.client")}
                  </h3>
                  <p className="text-ink-light dark:text-ink">{piece.client}</p>
                </div>
              )}

              {piece.year && (
                <div className="flex items-center gap-2 text-ink-light-soft dark:text-ink-soft">
                  <Calendar size={16} />
                  <span>{piece.year}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
