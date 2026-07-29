import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useLocale } from "../i18n/LocaleContext";

export default function Projects() {
  const { t } = useLocale();

  return (
    <Section id="projets" soft>
      <SectionHeading
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        description={t("projects.description")}
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
