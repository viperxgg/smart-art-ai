import { getPostBySlug, getRelatedPosts, blogPosts } from "@/lib/blog";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Share2,
  ChevronRight,
  Smartphone,
  Monitor,
  ScanLine,
  Search,
} from "lucide-react";
import { PricingTable } from "@/components/sections/PricingTable";
import InlineDemoLeadForm from "@/components/blog/InlineDemoLeadForm";

// Generate static params for all posts and all locales
export async function generateStaticParams() {
  const locales = ["sv", "en"];
  const params: any[] = [];

  blogPosts.forEach((post) => {
    locales.forEach((locale) => {
      params.push({ slug: post.slug, locale });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale);

  if (!post) return {};

  return {
    title: `${post.metaTitle} | SmartArt AI`,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale);
  const relatedPosts = await getRelatedPosts(slug, locale, 2);
  const t = await getTranslations({ locale, namespace: "Blog" });

  if (!post) notFound();

  const shouldRenderInlineDemoForm = (line: string) => {
    const normalizedLine = line.normalize("NFKD");
    return (
      slug === "scandinavian-digital-menu" &&
      (normalizedLine.includes("Boka din demo idag") ||
        normalizedLine.includes("Book your demo today"))
    );
  };

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-cyan-500/30">
      <section className="relative overflow-hidden border-b border-white/5 pt-40 pb-20">
        <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-7xl -translate-x-1/2 px-4">
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 opacity-50 blur-[150px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 opacity-30 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="mb-16 flex items-center gap-4">
            <Link
              href={`/${locale}/blog`}
              className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 transition-all hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              {t("back_to_blog")}
            </Link>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="max-w-[200px] truncate font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400/60 md:max-w-none">
              {post.category}
            </span>
          </div>

          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-white/40">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 uppercase italic">
                <User className="h-3 w-3" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                {new Date(post.date).toLocaleDateString(
                  locale === "sv" ? "sv-SE" : "en-US",
                  { year: "numeric", month: "long", day: "numeric" },
                )}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" />
                {post.readingTime}
              </div>
            </div>

            <h1 className="text-4xl leading-[0.9] font-black tracking-tighter text-white md:text-7xl lg:max-w-4xl">
              {post.title}
            </h1>

            <p className="max-w-3xl font-mono text-xl leading-relaxed font-light italic text-white/50">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="relative mx-auto flex max-w-4xl flex-col gap-16 lg:flex-row">
          <aside className="hidden w-32 shrink-0 pt-4 lg:block">
            <div className="sticky top-40 flex flex-col gap-8">
              <div className="h-px w-8 bg-cyan-400/30" />
              <button className="rounded-full border border-white/10 bg-white/5 p-3 text-white/40 transition-all hover:text-cyan-400">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </aside>

          <div className="flex-1">
            <div className="max-w-2xl">
              <div className="article-content rich-text space-y-8 text-lg leading-relaxed font-light text-white/80">
                {post.content.split("\n").map((line, i) => {
                  const trimmed = line.trim();
                  if (!trimmed) return <div key={i} className="h-4" />;

                  if (trimmed.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="flex items-center gap-4 border-b border-white/5 pt-12 pb-4 text-3xl font-black tracking-tight text-white"
                      >
                        <span className="h-8 w-1.5 rounded-full bg-cyan-400" />
                        {trimmed.replace("## ", "")}
                      </h2>
                    );
                  }

                  if (trimmed.startsWith("### ")) {
                    return (
                      <h3
                        key={i}
                        className="pt-8 text-xl font-bold tracking-wide text-cyan-400"
                      >
                        {trimmed.replace("### ", "")}
                      </h3>
                    );
                  }

                  if (trimmed.startsWith("- ")) {
                    return (
                      <li
                        key={i}
                        className="group mb-2 flex list-none items-start gap-4 text-white/70"
                      >
                        <div className="mt-3 h-2 w-2 shrink-0 rounded-full border border-cyan-400 transition-colors group-hover:bg-cyan-400" />
                        <span className="flex-1 font-mono text-[16px] leading-relaxed italic">
                          {trimmed.replace("- ", "")}
                        </span>
                      </li>
                    );
                  }

                  if (shouldRenderInlineDemoForm(trimmed)) {
                    return (
                      <div key={i} className="pt-8">
                        <InlineDemoLeadForm />
                      </div>
                    );
                  }

                  if (trimmed.startsWith("ðŸ‘‰")) {
                    const text = trimmed.replace("ðŸ‘‰", "").trim();
                    return (
                      <div key={i} className="flex justify-center py-12">
                        <div className="rounded-full border border-white/10 bg-white/[0.03] px-10 py-5 text-lg font-semibold text-white/80">
                          {text}
                        </div>
                      </div>
                    );
                  }

                  if (trimmed.startsWith("âœ”")) {
                    return (
                      <li
                        key={i}
                        className="group mb-4 flex list-none items-start gap-4 text-cyan-400"
                      >
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10">
                          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                        </div>
                        <span className="flex-1 font-mono text-[17px] leading-relaxed font-medium italic text-white/90">
                          {trimmed.replace("âœ”", "").trim()}
                        </span>
                      </li>
                    );
                  }

                  if (/^\d+\./.test(trimmed)) {
                    const parts = trimmed.split(".");
                    const num = parts[0];
                    const text = parts.slice(1).join(".");
                    return (
                      <div
                        key={i}
                        className="group flex gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-cyan-400/30"
                      >
                        <span className="font-mono text-2xl font-black text-cyan-400/40">
                          {num.padStart(2, "0")}
                        </span>
                        <span className="font-light italic text-white/70">
                          {text}
                        </span>
                      </div>
                    );
                  }

                  if (trimmed.includes("[AUTOMATION_VIDEO]")) {
                    return (
                      <div key={i} className="flex flex-col items-center py-12">
                        <div className="w-full max-w-[800px]">
                          <h2 className="mb-4 text-2xl font-black tracking-tight text-white md:text-3xl">
                            {locale === "sv"
                              ? "SÃ¥ fungerar automatisering i praktiken"
                              : "How automation works in practice"}
                          </h2>
                          <p className="mb-8 font-mono text-base font-light italic text-white/50">
                            {locale === "sv"
                              ? "En enkel visuell genomgÃ¥ng av hur ett automatised flÃ¶de kan spara tid i ett fÃ¶retag."
                              : "A simple visual walkthrough of how an automated flow can save time in a business."}
                          </p>
                          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                            <video
                              src="/explainer.mp4"
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="none"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (trimmed.includes("[PRICING_TABLE]")) {
                    return <PricingTable key={i} locale={locale} />;
                  }

                  if (trimmed.includes("[LIVE_DEMO]")) {
                    const guestUrl =
                      "https://codex-delta-liart.vercel.app/menu/nord-table?table=12";
                    const staffUrl = "https://codex-delta-liart.vercel.app/admin";
                    const kitchenUrl =
                      "https://codex-delta-liart.vercel.app/kitchen";
                    const qrSize = "180x180";

                    return (
                      <div key={i} className="space-y-12 py-20">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                          <div className="group relative flex flex-col items-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 text-center transition-all hover:border-cyan-500/30">
                            <div className="absolute top-0 right-0 p-4">
                              <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-cyan-400 animate-pulse">
                                <div className="h-1 w-1 rounded-full bg-cyan-400" />
                                Live Menu
                              </div>
                            </div>

                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-cyan-500/10">
                              <Smartphone className="h-7 w-7 text-cyan-400" />
                            </div>

                            <h4 className="mb-2 text-lg font-black uppercase tracking-tighter text-white italic">
                              {locale === "sv" ? "GÃ¤stens Meny" : "Guest Menu"}
                            </h4>
                            <p className="mb-8 h-8 font-mono text-xs text-white/40">
                              {locale === "sv"
                                ? "Skanna fÃ¶r att bestÃ¤lla direkt frÃ¥n bordet."
                                : "Scan to order directly from the table."}
                            </p>

                            <div className="relative mb-8 flex items-center justify-center rounded-2xl bg-white p-5 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                              <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(guestUrl)}`}
                                alt="Guest Menu QR"
                                className="h-28 w-28 grayscale transition-all duration-700 hover:grayscale-0"
                              />
                              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-white/95 opacity-0 transition-opacity group-hover:opacity-100">
                                <ScanLine className="h-8 w-8 animate-bounce text-cyan-500" />
                              </div>
                            </div>

                            <a
                              href={guestUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 transition-all hover:bg-white hover:text-black"
                            >
                              {locale === "sv" ? "Ã–ppna meny" : "Open Menu"}
                            </a>
                          </div>

                          <div className="group relative flex flex-col items-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 text-center transition-all hover:border-purple-500/30">
                            <div className="absolute top-0 right-0 p-4">
                              <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-purple-400 animate-pulse">
                                <div className="h-1 w-1 rounded-full bg-purple-400" />
                                Admin
                              </div>
                            </div>

                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-purple-500/10">
                              <Monitor className="h-7 w-7 text-purple-400" />
                            </div>

                            <h4 className="mb-2 text-lg font-black uppercase tracking-tighter text-white italic">
                              {locale === "sv" ? "Administration" : "Admin Panel"}
                            </h4>
                            <p className="mb-8 h-8 font-mono text-xs text-white/40">
                              {locale === "sv"
                                ? "Hantera bord och se notifieringar."
                                : "Manage tables and see notifications."}
                            </p>

                            <div className="relative mb-8 flex items-center justify-center rounded-2xl bg-white p-5 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                              <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(staffUrl)}`}
                                alt="Admin Dashboard QR"
                                className="h-28 w-28 grayscale transition-all duration-700 hover:grayscale-0"
                              />
                              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-white/95 opacity-0 transition-opacity group-hover:opacity-100">
                                <ScanLine className="h-8 w-8 animate-bounce text-purple-500" />
                              </div>
                            </div>

                            <a
                              href={staffUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 transition-all hover:bg-purple-500 hover:text-white"
                            >
                              {locale === "sv" ? "Ã–ppna Admin" : "Open Admin"}
                            </a>
                          </div>

                          <div className="group relative flex flex-col items-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 text-center transition-all hover:border-amber-500/30">
                            <div className="absolute top-0 right-0 p-4">
                              <div className="flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-amber-500 animate-pulse">
                                <div className="h-1 w-1 rounded-full bg-amber-500" />
                                Kitchen
                              </div>
                            </div>

                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-amber-500/10">
                              <ScanLine className="h-7 w-7 text-amber-500" />
                            </div>

                            <h4 className="mb-2 text-lg font-black uppercase tracking-tighter text-white italic">
                              {locale === "sv" ? "KÃ¶kssystem (KDS)" : "Kitchen (KDS)"}
                            </h4>
                            <p className="mb-8 h-8 font-mono text-xs text-white/40">
                              {locale === "sv"
                                ? "Se inkommande ordrar i realtid."
                                : "Watch incoming orders arrive live."}
                            </p>

                            <div className="relative mb-8 flex items-center justify-center rounded-2xl bg-white p-5 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                              <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data=${encodeURIComponent(kitchenUrl)}`}
                                alt="Kitchen KDS QR"
                                className="h-28 w-28 grayscale transition-all duration-700 hover:grayscale-0"
                              />
                              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-white/95 opacity-0 transition-opacity group-hover:opacity-100">
                                <ScanLine className="h-8 w-8 animate-bounce text-amber-500" />
                              </div>
                            </div>

                            <a
                              href={kitchenUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 transition-all hover:bg-amber-500 hover:text-white"
                            >
                              {locale === "sv" ? "Ã–ppna KDS" : "Open KDS"}
                            </a>
                          </div>
                        </div>

                        <div className="flex flex-col items-center gap-6 rounded-4xl border border-white/5 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-amber-500/5 p-8 text-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                            <Search className="h-5 w-5 text-white/40" />
                          </div>
                          <p className="max-w-2xl font-mono text-[12px] leading-relaxed text-white/40 italic">
                            {locale === "sv"
                              ? "Strategiskt tips: Skicka en bestÃ¤llning frÃ¥n GÃ¤stens Meny och se hur den omedelbart dyker upp pÃ¥ KÃ¶ksskÃ¤rmen, samtidigt som dÃ¶rrklockan ringer i Administrationen."
                              : "Strategic Tip: Send an order from the Guest Menu and watch it instantly appear on the Kitchen Screen, while the notification bell rings in Administration."}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <p
                      key={i}
                      className="font-mono leading-loose tracking-tight text-white/70 antialiased"
                    >
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              <div className="mt-20 border-t border-white/5 pt-12">
                <div className="flex flex-wrap gap-3">
                  {post.tags?.map((tag, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white/40"
                    >
                      <Tag className="h-3 w-3 text-cyan-400/50" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="relative overflow-hidden border-t border-white/5 px-6 py-32">
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="mb-16 font-mono text-2xl uppercase tracking-[0.4em] text-cyan-400/60">
              More Insights
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedPosts.map((rPost) => (
                <Link key={rPost.slug} href={`/${locale}/blog/${rPost.slug}`} className="group">
                  <div className="glass-panel flex h-full flex-col gap-6 rounded-[2rem] border border-white/5 p-8 transition-all group-hover:border-cyan-400/30">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/30">
                      <span>{rPost.date}</span>
                      <span className="rounded-sm border border-white/10 px-2 py-0.5 italic">
                        {rPost.category}
                      </span>
                    </div>
                    <h3 className="text-xl leading-tight font-bold text-white transition-colors group-hover:text-cyan-400">
                      {rPost.title}
                    </h3>
                    <div className="mt-auto flex items-center gap-2 pt-4 font-mono text-[10px] uppercase tracking-widest text-white/60">
                      {t("read_more")}
                      <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="fixed right-6 bottom-8 z-50 md:hidden">
        <Link
          href={`/${locale}/blog`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-black shadow-lg transition-all hover:scale-110 active:scale-90"
        >
          <ArrowLeft className="h-6 w-6" />
        </Link>
      </div>
    </main>
  );
}
