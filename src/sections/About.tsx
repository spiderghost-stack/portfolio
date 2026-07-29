import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { useLocale } from "../i18n/LocaleContext";

export default function About() {
  const { t } = useLocale();

  // Clés des 4 points du parcours : on les mappe pour rester DRY plutôt que
  // de répéter 4 fois un <li> presque identique.
  const parcoursKeys = ["about.item1", "about.item2", "about.item3", "about.item4"];

  return (
    <Section id="a-propos" soft>
      <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} />

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <ul className="space-y-4">
            {parcoursKeys.map((key) => (
              <li key={key} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-ink-light-soft dark:text-ink-soft">{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <blockquote className="border-l-2 border-accent pl-6 font-display text-xl italic text-ink-light dark:text-ink">
            {t("about.quote")}
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
