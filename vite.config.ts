import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuration Vite minimale : on utilise juste le plugin React (JSX + Fast Refresh).
// Pas besoin de plugin supplémentaire pour Tailwind, il passe par PostCSS classiquement.
export default defineConfig({
  plugins: [react()],
});
