import { useLocale } from "../i18n/LocaleContext";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-bg-light py-8 transition-colors duration-300 dark:border-white/10 dark:bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-6 text-sm text-ink-light-soft dark:text-ink-soft">
        <p>
          © {year} Roes Nay. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
