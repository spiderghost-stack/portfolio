import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import CodeBackground from "./CodeBackground";
import { codeSnippets } from "../data/blogCodeSnippets";
import type { BlogPost } from "../types";

interface BlogCardProps {
  post: BlogPost;
}

/**
 * Carte d'article de blog avec animation au scroll.
 * Affiche l'image de couverture, le titre, l'excerpt, la date et les tags.
 */
export default function BlogCard({ post }: BlogCardProps) {
  // Formater la date en français
  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link to={`/blog/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-black/10 bg-bg-light-soft transition-all hover:border-accent/40 hover:shadow-xl dark:border-white/10 dark:bg-bg-soft"
      >
      {/* Fond avec code stylisé */}
      <div className="relative h-48 overflow-hidden">
        {post.codeLanguage && codeSnippets[post.id] ? (
          <CodeBackground
            code={codeSnippets[post.id]}
            language={post.codeLanguage}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-black/5 dark:bg-white/5">
            <span className="font-mono text-xs text-ink-light-soft/50 dark:text-ink-soft/50">
              [ code snippet ]
            </span>
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Titre */}
        <h3 className="mb-3 font-display text-xl font-bold text-ink-light transition-colors group-hover:text-accent dark:text-ink">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-light-soft dark:text-ink-soft">
          {post.excerpt}
        </p>

        {/* Meta informations */}
        <div className="flex items-center gap-4 border-t border-black/10 pt-4 font-mono text-xs text-ink-light-soft dark:border-white/10 dark:text-ink-soft">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            {formattedDate}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readingTime}
          </div>
        </div>

        {/* Lien "Lire la suite" */}
        <div className="mt-4">
          <span className="inline-flex items-center font-semibold text-accent transition-all group-hover:gap-2">
            Lire la suite
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
      </motion.article>
    </Link>
  );
}
