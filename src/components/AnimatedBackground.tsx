import { motion } from "framer-motion";

/**
 * Fond animé alternatif au 3D, utilisant Framer Motion.
 * Affiche des cercles et particules animées avec des couleurs cyan,
 * inspiré du thème Physique-Chimie sans nécessiter WebGL.
 */
export default function AnimatedBackground() {
  // Génère des particules aléatoires
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-grid bg-grid opacity-40 dark:opacity-60" />

      {/* Cercles orbitaux animés */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border border-accent/20" />
        <div className="absolute inset-[15%] rounded-full border border-accent/15" />
        <div className="absolute inset-[30%] rounded-full border border-accent/10" />
      </motion.div>

      {/* Particules flottantes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sphère centrale pulsante */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-full w-full rounded-full bg-accent/20 blur-2xl" />
      </motion.div>

      {/* Dégradé radial pour adoucir le centre */}
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
