import SEO from "../components/SEO";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Timeline from "../sections/Timeline";
import Graphisme from "../sections/Graphisme";
import Blog from "../sections/Blog";
import Services from "../sections/Services";
import Contact from "../sections/Contact";

/**
 * Page d'accueil contenant toutes les sections du portfolio
 */
export default function Home() {
  return (
    <>
      <SEO
        title="Roes Nay — Développeur Web Full Stack & Créateur d'Expériences Digitales"
        description="Portfolio de N. G. Roesnay Scharaf-Dine WENON, étudiant en Physique à l'Université d'Abomey-Calavi et développeur web full stack. Découvrez mes projets React, TypeScript, et mes créations graphiques."
        keywords={[
          "développeur web",
          "full stack",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "portfolio",
          "Bénin",
          "Abomey-Calavi",
          "graphisme",
          "design",
        ]}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Graphisme />
        <Blog />
        <Services />
        <Contact />
      </main>
    </>
  );
}
