import { motion } from "framer-motion";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { timeline } from "../data/timeline";
import { useLocale } from "../i18n/LocaleContext";

export default function Timeline() {
  const { t } = useLocale();

  return (
    <Section id="parcours">
      <SectionHeading eyebrow={t("timeline.eyebrow")} title={t("timeline.title")} />

      <div className="relative border-l border-black/10 pl-8 dark:border-white/10">
        {timeline.map((step, index) => (
          <motion.div
            key={step.year}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pb-10 last:pb-0"
          >
            {/* Point sur la ligne verticale */}
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="mb-1 block font-mono text-sm text-accent">{step.year}</span>
            <h3 className="mb-1 font-display text-lg font-semibold text-ink-light dark:text-ink">
              {step.title}
            </h3>
            <p className="text-ink-light-soft dark:text-ink-soft">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
