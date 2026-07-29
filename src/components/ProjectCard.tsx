import { motion } from "framer-motion";
import type { Project } from "../types";
import Badge from "./Badge";
import StatusBadge from "./StatusBadge";
import { useLocale } from "../i18n/LocaleContext";

interface ProjectCardProps {
  project: Project;
}

/**
 * NOTE IMPORTANTE sur la traduction :
 * Les LABELS de l'interface (Fonctionnalités, Difficulté rencontrée, GitHub, Démo...)
 * sont traduits via t(). En revanche, le CONTENU des projets (nom, description,
 * fonctionnalités, difficulté) reste en français dans data/projects.ts : le traduire
 * proprement demanderait de dupliquer tout ce texte en anglais, ce qui n'a pas été
 * demandé. Si tu veux une vraie version anglaise du contenu des projets, on peut
 * ajouter des champs `shortDescriptionEn`, `featuresEn`, etc. dans le type Project.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLocale();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-bg-light-soft transition-colors hover:border-accent/40 dark:border-white/10 dark:bg-bg-soft"
    >
      <div className="flex h-48 items-center justify-center bg-black/[0.03] dark:bg-white/[0.03]">
        {project.imagePath ? (
          <img
            src={project.imagePath}
            alt={`${project.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-mono text-xs text-ink-light-soft/50 dark:text-ink-soft/50">
            {t("projects.image-placeholder")}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink-light dark:text-ink">
            {project.name}
          </h3>
          <StatusBadge status={project.status} />
        </div>

        <p className="mb-4 text-sm text-ink-light-soft dark:text-ink-soft">
          {project.shortDescription}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="accent">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mb-4">
          <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft">
            {t("projects.features")}
          </h4>
          <ul className="space-y-1">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-ink-light-soft dark:text-ink-soft"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft">
            {t("projects.challenge")}
          </h4>
          <p className="text-sm leading-relaxed text-ink-light-soft dark:text-ink-soft">
            {project.challenge}
          </p>
        </div>

        <div className="mt-auto flex gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ink-light-soft transition-colors hover:text-accent dark:text-ink-soft"
            >
              {t("projects.github")}
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent transition-colors hover:text-accent-glow"
            >
              {t("projects.demo")}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
