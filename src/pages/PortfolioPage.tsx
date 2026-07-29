import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import { projects } from "../data/projects";
import { blogPosts } from "../data/blog";
import { graphismePieces } from "../data/graphisme";
import { useLocale } from "../i18n/LocaleContext";

type Category = "projets" | "blog" | "graphisme";

/**
 * Page Portfolio unifiée avec 3 catégories.
 * L'utilisateur peut choisir entre Projets, Blog, ou Graphisme.
 */
export default function PortfolioPage() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState<Category>("projets");

  const categories = [
    { id: "projets" as Category, label: t("nav.projets") },
    { id: "blog" as Category, label: t("nav.blog") },
    { id: "graphisme" as Category, label: t("nav.graphisme") },
  ];

  return (
    <>
      <SEO
        title="Mes Réalisations — Portfolio de Roes Nay"
        description="Découvrez mes projets web, articles de blog techniques et créations graphiques. React, TypeScript, design et développement full stack."
        keywords={[
          "projets web",
          "portfolio développeur",
          "React projects",
          "blog technique",
          "graphisme",
          "design",
          "full stack",
        ]}
      />
      <div className="min-h-screen py-24">
        <Section id="portfolio">
          {/* Bouton retour */}
          <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-accent transition-colors hover:text-accent-glow"
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>
        <SectionHeading
          eyebrow="Portfolio"
          title={t("portfolio.title")}
          description={t("portfolio.description")}
        />

        {/* Onglets de filtrage */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-3 font-semibold transition-all ${
                activeCategory === category.id
                  ? "bg-accent text-white shadow-lg"
                  : "border border-black/10 bg-bg-light-soft text-ink-light-soft hover:border-accent/50 dark:border-white/10 dark:bg-bg-soft dark:text-ink-soft"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Contenu selon la catégorie active */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* PROJETS */}
          {activeCategory === "projets" && (
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {/* BLOG */}
          {activeCategory === "blog" && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {/* GRAPHISME */}
          {activeCategory === "graphisme" && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {graphismePieces.map((piece) => (
                <Link
                  key={piece.id}
                  to={`/graphisme/${piece.id}`}
                  className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-xl border border-black/10 bg-bg-light transition-all hover:scale-[1.02] hover:border-accent/50 dark:border-white/10 dark:bg-bg"
                >
                  {piece.imagePath ? (
                    <img
                      src={piece.imagePath}
                      alt={piece.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] text-ink-light-soft/40 dark:text-ink-soft/40">
                      [ image à ajouter ]
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10 p-4">
                    <p className="mb-1 font-body text-sm font-semibold text-white">
                      {piece.title}
                    </p>
                    <p className="font-mono text-xs text-white/80">{piece.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </Section>
    </div>
    </>
  );
}
