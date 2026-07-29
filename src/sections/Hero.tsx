import { motion } from "framer-motion";
import Button from "../components/Button";
import TypewriterText from "../components/TypewriterText";
import { useLocale } from "../i18n/LocaleContext";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen w-full items-center justify-center px-6 pt-24"
    >

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          {/* Texte sans boutons - vient en premier sur mobile */}
          <div className="order-1 flex-1 text-center md:order-1 md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:border-white/10 dark:bg-white/5 dark:text-ink-soft"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {t("hero.badge")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-display text-3xl font-bold leading-tight text-ink-light sm:text-4xl md:text-5xl dark:text-ink"
            >
              <TypewriterText
                text="N. G. Roesnay Scharaf-Dine WENON"
                speed={80}
                delay={500}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 font-display text-lg font-semibold text-accent sm:text-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 text-ink-light-soft dark:text-ink-soft"
            >
              {t("hero.description")}
            </motion.p>

            {/* Boutons visibles seulement sur desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden flex-col gap-4 sm:flex-row md:flex md:justify-start"
            >
              <Button as="a" href="#projets" variant="primary">
                {t("hero.cta.projects")}
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                {t("hero.cta.contact")}
              </Button>
            </motion.div>
          </div>

          {/* Photo de profil - vient en second sur mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-2 flex-shrink-0 md:order-2"
            style={{ perspective: "1000px" }}
          >
            <div
              className="group relative h-80 w-72 overflow-hidden rounded-2xl shadow-2xl md:h-[28rem] md:w-96"
              style={{
                transform: "rotateY(0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Effet d'écran incurvé - ombres sur les bords */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/40 via-black/10 to-transparent" />

              {/* Reflets lumineux des bords courbés */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/15 to-transparent opacity-60" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/15 to-transparent opacity-60" />

              <img
                src="/images/profile/photo.jpeg"
                alt="N. G. Roesnay Scharaf-Dine WENON"
                className="h-full w-full object-cover object-top"
                style={{ transform: "translateZ(0)" }}
              />

              {/* Lueur externe au hover */}
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent/30 via-transparent to-accent/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </motion.div>

          {/* Boutons visibles seulement sur mobile - viennent après la photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-3 flex w-full flex-col gap-4 md:hidden"
          >
            <Button as="a" href="#projets" variant="primary">
              {t("hero.cta.projects")}
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              {t("hero.cta.contact")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
