import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skillGroups } from "../data/skills";
import { useLocale } from "../i18n/LocaleContext";

export default function Skills() {
  const { t } = useLocale();

  return (
    <Section id="competences">
      <SectionHeading
        eyebrow={t("skills.eyebrow")}
        title={t("skills.title")}
        description={t("skills.description")}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </div>
    </Section>
  );
}
