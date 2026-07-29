interface CodeBackgroundProps {
  code: string;
  language: "react" | "typescript" | "css";
}

/**
 * Fond avec du code stylisé pour les cartes de blog.
 * Affiche des lignes de code en arrière-plan avec effet flou.
 */
export default function CodeBackground({ code }: CodeBackgroundProps) {
  const lines = code.split("\n");

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-black/95 to-black/80">
      <div className="absolute inset-0 opacity-60">
        <pre className="font-mono text-[11px] leading-relaxed text-white/80 md:text-sm">
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line}
            </div>
          ))}
        </pre>
      </div>

      {/* Overlay avec dégradé pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>
  );
}
