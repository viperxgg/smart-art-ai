import { getPostBySlug, getRelatedPosts, blogPosts } from "@/lib/blog";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Terminal, Clock, Tag, ArrowRight, Share2, ChevronRight, Smartphone, Monitor, ScanLine, Search } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { PricingTable } from "@/components/sections/PricingTable";
import BlogBody from "@/components/blog/BlogBody";

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
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale);
  const relatedPosts = await getRelatedPosts(slug, locale, 2);
  const t = await getTranslations({ locale, namespace: "Blog" });
  const tNav = await getTranslations({ locale, namespace: "Navigation" });

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-cyan-500/30">
      {/* 1. ARTICLE HERO SECTION */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-white/5">
         {/* Atmospheric Background Components */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl px-4 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full opacity-30" />
         </div>

         <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs / Back Link */}
            <div className="flex items-center gap-4 mb-16">
               <Link 
                 href={`/${locale}/blog`}
                 className="group flex items-center gap-2 text-white/40 hover:text-white transition-all font-mono text-[10px] uppercase tracking-[0.3em]"
               >
                 <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                 {t("back_to_blog")}
               </Link>
               <span className="w-1 h-1 rounded-full bg-white/20" />
               <span className="text-cyan-400/60 font-mono text-[10px] uppercase tracking-[0.3em] truncate max-w-[200px] md:max-w-none">
                 {post.category}
               </span>
            </div>

            {/* Article Headings */}
            <div className="space-y-8">
               <div className="flex flex-wrap items-center gap-6 text-white/40 font-mono text-[11px] uppercase tracking-widest">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 uppercase italic">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString(locale === 'sv' ? 'sv-SE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </div>
               </div>

               <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] lg:max-w-4xl">
                 {post.title}
               </h1>

               <p className="text-white/50 text-xl font-light font-mono leading-relaxed max-w-3xl italic">
                 {post.excerpt}
               </p>
            </div>
         </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-16 relative">
          
          {/* Left Sidebar (Desktop Only) */}
          <aside className="hidden lg:block w-32 shrink-0 pt-4">
            <div className="sticky top-40 flex flex-col gap-8">
               <div className="h-px w-8 bg-cyan-400/30" />
               <button className="p-3 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-cyan-400 transition-all">
                 <Share2 className="w-4 h-4" />
               </button>
            </div>
          </aside>

          {/* Article Body */}
          <div className="flex-1">
            <div className="max-w-2xl">
               <div className="markdown-content">
                  <BlogBody content={post.content} locale={locale} />
               </div>

               {/* Article Tags */}
               <div className="mt-20 pt-12 border-t border-white/5">
                  <div className="flex flex-wrap gap-3">
                     {post.tags?.map((tag, i) => (
                       <div key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] uppercase font-mono tracking-widest flex items-center gap-2">
                          <Tag className="w-3 h-3 text-cyan-400/50" />
                          {tag}
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED POSTS SECTION */}
      {relatedPosts.length > 0 && (
        <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-2xl font-mono text-cyan-400/60 uppercase tracking-[0.4em] mb-16">
               More Insights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rPost) => (
                <Link key={rPost.slug} href={`/${locale}/blog/${rPost.slug}`} className="group">
                  <div className="p-8 rounded-[2rem] glass-panel border-white/5 group-hover:border-cyan-400/30 transition-all h-full flex flex-col gap-6">
                    <div className="flex justify-between items-center text-[10px] font-mono text-white/30 tracking-widest uppercase">
                       <span>{rPost.date}</span>
                       <span className="px-2 py-0.5 border border-white/10 rounded-sm italic">{rPost.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                      {rPost.title}
                    </h3>
                    <div className="mt-auto flex items-center gap-2 text-white/60 text-[10px] font-mono uppercase tracking-widest pt-4">
                      {t("read_more")}
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Persistent Back to Blog Floating Button (Mobile only) */}
      <div className="md:hidden fixed bottom-8 right-6 z-50">
        <Link 
          href={`/${locale}/blog`}
          className="w-14 h-14 rounded-full bg-cyan-500 text-black flex items-center justify-center shadow-lg hover:scale-110 active:scale-90 transition-all"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>
    </main>
  );
}
