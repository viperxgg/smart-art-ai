import { getPostBySlug, blogPosts } from "@/lib/blog";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Terminal } from "lucide-react";

// Generate static params for all posts and all locales
export async function generateStaticParams() {
  const locales = ["sv", "en"];
  const params: any[] = [];
  
  blogPosts.forEach(post => {
    locales.forEach(locale => {
      params.push({ slug: post.slug, locale });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale);
  
  if (!post) return {};

  return {
    title: `${post.metaTitle} | SmartArt AI`,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale);
  const t = await getTranslations({ locale, namespace: "Blog" });

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-[#050505] pt-32 pb-32">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Back Link */}
        <Link 
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("back_to_blog")}
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-6 mb-8 text-[11px] font-mono uppercase tracking-widest text-white/40">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              {t("published_at")} {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
            {post.title}
          </h1>
          
          <div className="h-1 w-20 bg-cyan-400/50 rounded-full" />
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.split('\n').map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return <div key={i} className="h-6" />;
            
            // Header 2
            if (trimmed.startsWith('## ')) {
              return <h2 key={i} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 tracking-tight">{trimmed.replace('## ', '')}</h2>;
            }
            
            // Bullets
            if (trimmed.startsWith('- ')) {
              return (
                <li key={i} className="flex items-start gap-4 text-white/70 mb-4 list-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                  <span className="text-lg leading-relaxed font-light">{trimmed.replace('- ', '')}</span>
                </li>
              );
            }

            // Simple Paragraph
            return <p key={i} className="text-white/70 text-lg leading-relaxed font-light mb-6">{trimmed}</p>;
          })}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-white/5">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                <Terminal className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-bold tracking-tight">SmartArt AI Intelligens</p>
                <p className="text-white/40 text-xs font-mono uppercase tracking-widest">{t("author")}</p>
              </div>
            </div>
            <Link 
              href={`/${locale}#final-cta`}
              className="px-8 py-4 rounded-full bg-white text-black font-black uppercase tracking-widest text-[11px] hover:scale-105 active:scale-95 transition-all"
            >
              Starta ditt projekt
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
