interface BadgeProps {
  children: string;
  variant?: "default" | "accent";
}

/**
 * Petite pastille utilisée pour les technologies (ex: "React", "Node.js")
 * et pour certains statuts. Police monospace pour rappeler visuellement
 * qu'il s'agit d'un élément "technique" (cf. cahier des charges §5, section Code).
 */
export default function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "border-accent/40 bg-accent/10 text-accent"
      : "border-black/10 bg-black/5 text-ink-light-soft dark:border-white/10 dark:bg-white/5 dark:text-ink-soft";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs ${styles}`}
    >
      {children}
    </span>
  );
}
