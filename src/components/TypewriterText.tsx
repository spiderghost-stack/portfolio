import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number; // vitesse en millisecondes par caractère
  className?: string;
  delay?: number; // délai avant de commencer
}

/**
 * Effet Typewriter : le texte s'écrit caractère par caractère
 * avec un curseur clignotant.
 */
export default function TypewriterText({
  text,
  speed = 100,
  className = "",
  delay = 0,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Délai initial avant de commencer
    const initialDelay = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        setIsComplete(true);
      }
    }, delay);

    return () => clearTimeout(initialDelay);
  }, [currentIndex, text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-[2px] animate-pulse bg-accent ml-1">|</span>
      )}
    </span>
  );
}
