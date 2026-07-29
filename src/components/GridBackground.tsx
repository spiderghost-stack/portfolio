/**
 * Fond en grille discrète, inspiré du papier millimétré / de l'oscilloscope.
 * C'est la "signature visuelle" du hero : un clin d'œil au profil Physique-Chimie
 * plutôt qu'un simple décor 3D générique. Un halo radial adoucit le centre pour
 * ne pas distraire de la lecture du texte.
 */
export default function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid bg-grid opacity-40 dark:opacity-60" />
      {/* Halo radial : la couleur de fin doit correspondre au fond de la page pour un
          fondu invisible. On superpose deux dégradés (clair et sombre) et on bascule
          leur opacité selon le thème actif, plutôt que de coder une seule couleur en dur. */}
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
