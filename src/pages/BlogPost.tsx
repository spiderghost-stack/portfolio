import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blog";

/**
 * Page d'article de blog individuelle.
 * Affiche le contenu complet d'un article.
 */
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 font-display text-4xl font-bold text-ink-light dark:text-ink">
            Article non trouvé
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <SEO
        title={`${post.title} — Blog de Roes Nay`}
        description={post.excerpt}
        image={post.coverImage}
        article={true}
        keywords={post.tags}
      />
      <div className="relative min-h-screen">
        {/* Background fixe */}
        <div className="fixed inset-0 -z-10 bg-bg-light dark:bg-bg" />

        <div className="relative mx-auto max-w-4xl px-6 py-24">
        {/* Bouton retour */}
        <Link
          to="/#blog"
          className="mb-8 inline-flex items-center gap-2 text-accent transition-colors hover:text-accent-glow"
        >
          <ArrowLeft size={20} />
          Retour au blog
        </Link>

        {/* Image de couverture */}
        {post.coverImage && (
          <div className="mb-8 overflow-hidden rounded-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              loading="lazy"
              className="h-96 w-full object-cover"
            />
          </div>
        )}

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-4 py-1.5 font-mono text-sm text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Titre */}
        <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-ink-light dark:text-ink md:text-5xl">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mb-8 flex items-center gap-6 border-b border-black/10 pb-6 font-mono text-sm text-ink-light-soft dark:border-white/10 dark:text-ink-soft">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {formattedDate}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            {post.readingTime}
          </div>
        </div>

        {/* Contenu de l'article */}
        <article className="prose prose-lg dark:prose-invert prose-headings:font-display prose-a:text-accent prose-code:text-accent max-w-none">
          <p className="lead text-xl text-ink-light-soft dark:text-ink-soft">
            {post.excerpt}
          </p>

          <h2>Introduction</h2>
          <p>
            Cet article est un exemple. Pour ajouter du contenu réel, vous
            pouvez :
          </p>
          <ul>
            <li>Créer des fichiers MDX dans un dossier `content/blog/`</li>
            <li>Utiliser un CMS headless (Contentful, Sanity, etc.)</li>
            <li>Écrire directement en JSX dans cette page</li>
          </ul>

          <h2>Contenu à venir</h2>
          <p>
            En attendant, cette page démontre la structure d'un article de blog
            complet avec :
          </p>
          <ul>
            <li>Une image de couverture</li>
            <li>Des tags</li>
            <li>Des métadonnées (date, temps de lecture)</li>
            <li>Un contenu formaté avec Tailwind Typography</li>
            <li>Un bouton de retour vers la liste d'articles</li>
          </ul>

          <h2>Prochaines étapes</h2>
          <p>
            Vous pouvez maintenant écrire vos articles directement dans le code
            ou configurer un système MDX pour charger des fichiers Markdown.
          </p>
        </article>
      </div>
    </div>
    </>
  );
}
