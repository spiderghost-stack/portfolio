import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data/blog";
import { useLocale } from "../i18n/LocaleContext";

/**
 * Section Blog : affiche les derniers articles publiés.
 * Pour l'instant, affiche simplement les cartes d'articles.
 * Plus tard, on pourra ajouter un système de routing pour lire
 * les articles complets avec MDX.
 */
export default function Blog() {
  const { t } = useLocale();

  return (
    <Section id="blog">
      <SectionHeading
        eyebrow={t("blog.eyebrow")}
        title={t("blog.title")}
        description={t("blog.description")}
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
}
