import { useEffect } from "react";
import { X } from "lucide-react";
import type { GraphismePiece } from "../types";
import { useLocale } from "../i18n/LocaleContext";

interface GraphismeModalProps {
  piece: GraphismePiece | null;
  onClose: () => void;
}

/**
 * Modal pour afficher une pièce de graphisme en grand format
 * avec sa description complète.
 */
export default function GraphismeModal({ piece, onClose }: GraphismeModalProps) {
  const { t } = useLocale();

  // Ferme le modal avec la touche Échap
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (piece) {
      document.addEventListener("keydown", handleEscape);
      // Empêche le scroll de la page en arrière-plan
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [piece, onClose]);

  if (!piece) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-bg-light shadow-2xl dark:bg-bg md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          aria-label={t("graphisme.close")}
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="flex flex-1 items-center justify-center overflow-hidden bg-black/5 p-8 dark:bg-white/5">
          {piece.imagePath ? (
            <img
              src={piece.imagePath}
              alt={piece.title}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-mono text-sm text-ink-light-soft/40 dark:text-ink-soft/40">
                {t("graphisme.image-placeholder")}
              </span>
            </div>
          )}
        </div>

        {/* Informations */}
        <div className="flex w-full flex-col justify-between p-6 md:w-80 md:p-8">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
              {piece.category}
            </p>
            <h3 className="mb-4 font-display text-2xl font-bold text-ink-light dark:text-ink">
              {piece.title}
            </h3>

            {piece.description && (
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft">
                  {t("graphisme.modal.description")}
                </h4>
                <p className="leading-relaxed text-ink-light-soft dark:text-ink-soft">
                  {piece.description}
                </p>
              </div>
            )}

            {piece.tools && piece.tools.length > 0 && (
              <div className="mt-6 space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft">
                  {t("graphisme.tools")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {piece.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-black/10 bg-black/5 px-3 py-1 font-mono text-xs text-ink-light dark:border-white/10 dark:bg-white/5 dark:text-ink"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {piece.client && (
              <div className="mt-6">
                <h4 className="mb-1 font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft">
                  {t("graphisme.client")}
                </h4>
                <p className="text-ink-light dark:text-ink">{piece.client}</p>
              </div>
            )}

            {piece.year && (
              <div className="mt-4">
                <h4 className="mb-1 font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft">
                  {t("graphisme.year")}
                </h4>
                <p className="text-ink-light dark:text-ink">{piece.year}</p>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-dim"
          >
            {t("graphisme.close")}
          </button>
        </div>
      </div>
    </div>
  );
}
