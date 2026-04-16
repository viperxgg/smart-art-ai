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
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/${locale}/blog/${post.slug}`}
              className="group block"
            >
              <article className="p-8 md:p-16 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:border-cyan-400/20 hover:bg-white/[0.03] transition-all duration-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <ArrowRight className="w-8 h-8 text-cyan-400" />
                </div>
                
                <div className="flex flex-wrap items-center gap-8 mb-12 text-[11px] font-mono uppercase tracking-[0.2em] text-white/30">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 italic">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400/60 font-black">
                    <Terminal className="w-3.5 h-3.5" />
                    {post.readingTime}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">
                    <span className="w-8 h-px bg-cyan-400/30" />
                    {post.category}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter group-hover:text-cyan-400 transition-colors leading-[0.9]">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-xl font-light leading-relaxed max-w-2xl font-mono italic">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-12 inline-flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-[10px] bg-white/5 px-6 py-3 rounded-full group-hover:bg-cyan-400 group-hover:text-black transition-all">
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
