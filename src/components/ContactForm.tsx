import { useState, type FormEvent } from "react";
import Button from "./Button";
import { useLocale } from "../i18n/LocaleContext";

/**
 * URL du endpoint Formspree.
 *
 * ⚠️ À TOI DE COMPLÉTER :
 * 1. Va sur https://formspree.io et crée un compte gratuit (aucune carte bancaire requise).
 * 2. Crée un nouveau formulaire, associe-le à ton email de réception.
 * 3. Formspree te donne une URL du type "https://formspree.io/f/xxxxxxxx".
 * 4. Remplace la valeur ci-dessous par cette URL.
 *
 * Tant que tu n'as pas remplacé cette valeur, le formulaire affichera une erreur claire
 * au lieu d'échouer silencieusement (voir la vérification plus bas dans handleSubmit).
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqjnwy";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { t } = useLocale();
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Garde-fou : si le développeur n'a pas encore remplacé l'URL Formspree,
    // on prévient clairement plutôt que de laisser échouer la requête sans explication.
    if (FORMSPREE_ENDPOINT.includes("REMPLACE_MOI")) {
      setState("error");
      setErrorMessage(t("contact.form.error.notConfigured"));
      return;
    }

    setState("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }, // demande à Formspree une réponse JSON plutôt qu'une redirection HTML
      });

      if (response.ok) {
        setState("success");
        form.reset();
      } else {
        // Formspree renvoie un message d'erreur exploitable dans le JSON de réponse.
        // Ce message spécifique vient directement de leur API et reste en anglais
        // quelle que soit la langue du site : on ne peut pas le traduire nous-mêmes.
        const data = await response.json().catch(() => null);
        setErrorMessage(data?.errors?.[0]?.message ?? t("contact.form.error.generic"));
        setState("error");
      }
    } catch {
      setErrorMessage(t("contact.form.error.network"));
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft"
        >
          {t("contact.form.name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-black/10 bg-bg-light px-4 py-3 text-ink-light placeholder:text-ink-light-soft/40 focus:border-accent focus:outline-none dark:border-white/10 dark:bg-bg dark:text-ink dark:placeholder:text-ink-soft/40"
          placeholder={t("contact.form.name.placeholder")}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft"
        >
          {t("contact.form.email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-black/10 bg-bg-light px-4 py-3 text-ink-light placeholder:text-ink-light-soft/40 focus:border-accent focus:outline-none dark:border-white/10 dark:bg-bg dark:text-ink dark:placeholder:text-ink-soft/40"
          placeholder={t("contact.form.email.placeholder")}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-light-soft dark:text-ink-soft"
        >
          {t("contact.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-black/10 bg-bg-light px-4 py-3 text-ink-light placeholder:text-ink-light-soft/40 focus:border-accent focus:outline-none dark:border-white/10 dark:bg-bg dark:text-ink dark:placeholder:text-ink-soft/40"
          placeholder={t("contact.form.message.placeholder")}
        />
      </div>

      <Button as="button" type="submit" variant="primary" disabled={state === "loading"}>
        {state === "loading" ? t("contact.form.submitting") : t("contact.form.submit")}
      </Button>

      {/* Messages de statut : succès ou erreur, annoncés aux lecteurs d'écran via aria-live */}
      <div aria-live="polite">
        {state === "success" && (
          <p className="text-sm text-emerald-400">{t("contact.form.success")}</p>
        )}
        {state === "error" && <p className="text-sm text-red-400">{errorMessage}</p>}
      </div>
    </form>
  );
}
