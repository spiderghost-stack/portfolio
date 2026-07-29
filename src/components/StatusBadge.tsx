import type { ProjectStatus } from "../types";
import { useLocale } from "../i18n/LocaleContext";

// Couleur du point associée à chaque statut (indépendante de la langue).
const STATUS_DOT_COLOR: Record<ProjectStatus, string> = {
  deployed: "bg-emerald-400",
  "code-only": "bg-ink-soft",
  "in-progress": "bg-amber-400",
};

// Clé de traduction associée à chaque statut.
const STATUS_LABEL_KEY: Record<ProjectStatus, string> = {
  deployed: "projects.status.deployed",
  "code-only": "projects.status.code-only",
  "in-progress": "projects.status.in-progress",
};

interface StatusBadgeProps {
  status: ProjectStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { t } = useLocale();

  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-ink-light-soft dark:text-ink-soft">
      <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT_COLOR[status]}`} />
      {t(STATUS_LABEL_KEY[status])}
    </span>
  );
}
