import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { LocaleProvider } from "./i18n/LocaleContext";
import "./styles/index.css";

// Point d'entrée standard d'une app Vite + React.
// StrictMode aide à repérer les effets de bord douteux en dev (n'a aucun effet en production).
// ThemeProvider gère le mode dark/light, LocaleProvider gère la langue FR/EN.
// L'ordre des deux providers n'a pas d'importance ici, ils sont indépendants.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
