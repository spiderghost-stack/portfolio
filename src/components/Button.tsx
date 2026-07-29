import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type CommonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

// Version <a> : pour les liens (ancres internes, mailto, liens externes GitHub/démo)
type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

// Version <button> : pour les actions réelles (soumission de formulaire, etc.)
type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonProps = LinkButtonProps | NativeButtonProps;

/**
 * Bouton unique qui peut se rendre soit en <a>, soit en <button>, selon la prop `as`.
 * Évite de dupliquer les styles entre les deux usages (liens de nav vs actions de formulaire).
 */
export default function Button(props: ButtonProps) {
  const { variant = "primary", children, ...rest } = props;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-body text-sm font-semibold transition-all duration-200";

  const styles =
    variant === "primary"
      ? // Le bouton primaire garde toujours un texte sombre sur fond accent clair,
        // ce contraste reste valable dans les deux thèmes.
        "bg-accent text-bg hover:bg-accent-glow hover:shadow-[0_0_24px_-4px_theme(colors.accent.DEFAULT)]"
      : "border border-black/15 text-ink-light hover:border-accent/50 hover:text-accent dark:border-white/15 dark:text-ink";

  if (props.as === "a") {
    const { as: _as, ...anchorProps } = rest as LinkButtonProps;
    return (
      <a className={`${base} ${styles}`} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = rest as NativeButtonProps;
  return (
    <button className={`${base} ${styles}`} {...buttonProps}>
      {children}
    </button>
  );
}
