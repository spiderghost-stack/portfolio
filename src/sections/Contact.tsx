import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { useLocale } from "../i18n/LocaleContext";

// Liens sociaux et de contact direct.
// À COMPLÉTER : remplace les valeurs LinkedIn et email par les tiennes.
const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/spiderghost-stack" },
  { label: "Reddit", href: "https://www.reddit.com/u/roesnay/s/QkUQx6RByU" },
  { label: "Email", href: "mailto:gwladferson@gmail.com" },
];

export default function Contact() {
  const { t } = useLocale();

  return (
    <Section id="contact" soft>
      <SectionHeading
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        description={t("contact.description")}
      />

      <div className="grid gap-12 md:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-ink-light dark:text-ink">
              {t("contact.other")}
            </h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-body text-ink-light-soft transition-colors hover:text-accent dark:text-ink-soft"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
