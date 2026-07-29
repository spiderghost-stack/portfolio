import { motion } from "framer-motion";

/**
 * Fond avec effet 3D CSS (sans WebGL).
 * Utilise CSS transform preserve-3d pour créer un effet de profondeur.
 * Compatible avec tous les navigateurs et très performant.
 */
export default function CSS3DBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-grid bg-grid opacity-30 dark:opacity-50" />

      {/* Conteneur 3D avec perspective */}
      <div className="absolute inset-0" style={{ perspective: "1000px" }}>
        {/* Cube 3D en CSS */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Face avant */}
          <div
            className="absolute h-full w-full border border-accent/30"
            style={{
              transform: "translateZ(128px)",
            }}
          />
          {/* Face arrière */}
          <div
            className="absolute h-full w-full border border-accent/20"
            style={{
              transform: "translateZ(-128px) rotateY(180deg)",
            }}
          />
          {/* Face droite */}
          <div
            className="absolute h-full w-full border border-accent/25"
            style={{
              transform: "rotateY(90deg) translateZ(128px)",
            }}
          />
          {/* Face gauche */}
          <div
            className="absolute h-full w-full border border-accent/25"
            style={{
              transform: "rotateY(-90deg) translateZ(128px)",
            }}
          />
          {/* Face haut */}
          <div
            className="absolute h-full w-full border border-accent/20"
            style={{
              transform: "rotateX(90deg) translateZ(128px)",
            }}
          />
          {/* Face bas */}
          <div
            className="absolute h-full w-full border border-accent/20"
            style={{
              transform: "rotateX(-90deg) translateZ(128px)",
            }}
          />
        </motion.div>

        {/* Anneaux orbitaux en CSS 3D */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateX: [0, 360],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="absolute inset-0 rounded-full border-2 border-accent/20"
            style={{
              transform: "rotateX(70deg)",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateY: [0, 360],
            rotateZ: [0, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="absolute inset-0 rounded-full border-2 border-accent/15"
            style={{
              transform: "rotateY(60deg)",
            }}
          />
        </motion.div>
      </div>

      {/* Particules flottantes - réduit de 20 à 10 */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-accent/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Dégradé radial pour lisibilité */}
      <div
        className="absolute inset-0 opacity-100 dark:opacity-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(250,250,250,0) 0%, #FAFAFA 75%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(5,5,5,0) 0%, #050505 75%)",
        }}
      />
    </div>
  );
}
