import { Suspense, lazy, useState, useEffect } from "react";
import GridBackground from "./GridBackground";

// Lazy load du composant 3D pour améliorer le temps de chargement initial
const Hero3D = lazy(() => import("./Hero3D"));

/**
 * Wrapper avec fallback pour le composant 3D.
 * Détecte si l'appareil peut supporter WebGL et affiche soit
 * la version 3D soit le GridBackground classique.
 */
export default function Hero3DWrapper() {
  const [use3D, setUse3D] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifie le support WebGL
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    // Détecte si l'utilisateur préfère réduire les animations
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Active le 3D uniquement si WebGL est supporté ET que l'utilisateur
    // n'a pas demandé de réduire les animations
    if (gl && !prefersReducedMotion) {
      setUse3D(true);
    }

    setLoading(false);
  }, []);

  // Pendant le chargement initial, affiche le GridBackground
  if (loading) {
    return <GridBackground />;
  }

  // Si le 3D n'est pas supporté, utilise le GridBackground
  if (!use3D) {
    return <GridBackground />;
  }

  // Sinon, charge le composant 3D avec un fallback pendant le chargement
  return (
    <Suspense fallback={<GridBackground />}>
      <Hero3D />
    </Suspense>
  );
}
