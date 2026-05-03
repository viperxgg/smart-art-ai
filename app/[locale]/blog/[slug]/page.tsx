import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import BlogBody from "@/components/blog/BlogBody";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import {
  buildMetadata,
  getArticleSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/seo";
import { getAbsoluteUrl, getLocalizedHref, siteConfig, type AppLocale } from "@/lib/site";

export async function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale);

  if (!post) {
    return {};
  }

  return buildMetadata({
    locale,
    pathname: "/blog/[slug]",
    params: { slug },
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.tags],
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, locale, 3);
  const copy = {
    backToBlog: locale === "sv" ? "Till bloggen" : "Back to blog",
    relatedTitle: locale === "sv" ? "Relaterade artiklar" : "Related articles",
    readMore: locale === "sv" ? "Läs mer" : "Read more",
  };

  const articleUrl = getAbsoluteUrl("/blog/[slug]", locale, { slug });
  const publishedLabel = new Date(post.date).toLocaleDateString(locale === "sv" ? "sv-SE" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          getArticleSchema({
            locale,
            title: post.title,
            description: post.metaDescription,
            datePublished: post.date,
            pathname: "/blog/[slug]",
            slug,
          }),
          getFaqSchema(post.faq),
          getBreadcrumbSchema([
            {
              name: locale === "sv" ? "Start" : "Home",
              url: getAbsoluteUrl("/", locale),
            },
            {
              name: locale === "sv" ? "Blogg" : "Blog",
              url: getAbsoluteUrl("/blog", locale),
            },
            {
              name: post.title,
              url: articleUrl,
            },
          ]),
        ]}
      />

      <main className="sai-page">
        <section className="sai-hero">
          <div className="sai-container-narrow">
            <Link
              href={getLocalizedHref("/blog", locale)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {copy.backToBlog}
            </Link>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              <span className="sai-chip text-xs">{post.category}</span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-3.5 w-3.5" />
                {publishedLabel}
              </span>
              <span className="inline-flex items-center gap-2 text-[var(--accent-primary)]">
                <Clock3 className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl md:leading-[0.98]">
              {post.title}
            </h1>
            <p className="sai-copy-lg mt-6">{post.excerpt}</p>
          </div>
        </section>

        <article className="sai-section">
          <div className="sai-container-narrow">
            <div className="mb-12 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <div key={tag} className="sai-chip text-sm">
                  <Tag className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            <BlogBody
              locale={locale}
              slug={slug}
              sections={post.sections}
              faqTitle={post.faqTitle}
              faq={post.faq}
              cta={post.cta}
            />
          </div>
        </article>

        {relatedPosts.length > 0 ? (
          <section className="sai-section-soft">
            <div className="sai-container-narrow">
              <p className="sai-eyebrow mb-10">{copy.relatedTitle}</p>
              <div className="grid gap-4 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={getLocalizedHref("/blog/[slug]", locale, { slug: relatedPost.slug })}
                    className="sai-card sai-card-hover p-5"
                  >
                    <p className="sai-eyebrow text-[var(--text-muted)]">{relatedPost.category}</p>
                    <h2 className="sai-title-md mt-4">{relatedPost.title}</h2>
                    <p className="mt-3 leading-7 text-[var(--text-muted)]">{relatedPost.excerpt}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-white">
                      <span>{copy.readMore}</span>
                      <ArrowLeft className="h-4 w-4 rotate-180 text-[var(--accent-primary)]" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
