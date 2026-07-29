import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CSS3DBackground from "./components/CSS3DBackground";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPost from "./pages/BlogPost";
import GraphismeDetail from "./pages/GraphismeDetail";

/**
 * Composant racine avec routing React Router.
 * - Route "/" : Page d'accueil
 * - Route "/portfolio" : Page portfolio unifiée (Projets/Blog/Graphisme)
 * - Route "/blog/:slug" : Page d'article individuelle
 * - Route "/graphisme/:id" : Page de détail graphisme
 */
export default function App() {
  return (
    <BrowserRouter>
      {/* Animation 3D en fond de toute la page */}
      <div className="fixed inset-0 z-0">
        <CSS3DBackground />
      </div>

      {/* Contenu au-dessus de l'animation */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/graphisme/:id" element={<GraphismeDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
