import { getPosts } from "@/lib/blog";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Calendar, User, ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  
  return {
    title: `${t("title")} | SmartArt AI`,
    description: t("meta_description"),
  };
}

export default async function BlogListingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  const posts = await getPosts(locale);

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative px-4 mb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[12px] font-bold uppercase tracking-[0.4em] mb-8 font-mono">
            <Terminal className="w-3 h-3" />
            Blog
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            {t("title")}
          </h1>
          <p className="text-white/60 text-xl font-light font-mono tracking-wide max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/${locale}/blog/${post.slug}`}
              className="group block"
            >
              <article className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-cyan-400" />
                </div>
                
                <div className="flex flex-wrap items-center gap-6 mb-8 text-[11px] font-mono uppercase tracking-widest text-white/40">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </div>
                  <div className="px-2 py-0.5 rounded-sm bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                    {post.category}
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-white/60 text-lg font-light leading-relaxed mb-8 max-w-2xl">
                  {post.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[11px] border-b border-white/20 pb-1 group-hover:border-cyan-400/50 transition-colors">
                  {t("read_more")}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
