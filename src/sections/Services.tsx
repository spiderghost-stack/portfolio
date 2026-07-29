import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/services";
import { useLocale } from "../i18n/LocaleContext";

export default function Services() {
  const { t } = useLocale();

  return (
    <Section id="services">
      <SectionHeading eyebrow={t("services.eyebrow")} title={t("services.title")} />

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-black/10 bg-bg-light-soft p-6 dark:border-white/10 dark:bg-bg-soft"
          >
            <h3 className="mb-2 font-display text-lg font-semibold text-ink-light dark:text-ink">
              {service.title}
            </h3>
            <p className="mb-4 text-sm text-ink-light-soft dark:text-ink-soft">
              {service.description}
            </p>
            <ul className="space-y-1">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-ink-light-soft dark:text-ink-soft"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
