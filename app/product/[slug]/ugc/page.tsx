import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle, PlayCircle } from "lucide-react";
import { notFound } from "next/navigation";

import { genericProductPages, getListedProductBySlug } from "@/lib/products";
import { siteConfig } from "@/lib/site";

type ProductUgcPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductUgcPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getListedProductBySlug(slug);

  if (!product) {
    return {};
  }

  const title = `UGC-klipp | ${product.title}`;
  const description =
    "Korta praktiska videor som visar hur produkten kan användas i vardagen innan kunden går vidare till Amazon.";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/product/${product.slug}/ugc`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/product/${product.slug}/ugc`,
      siteName: siteConfig.name,
      type: "video.other",
      images: product.ugcVideos[0]
        ? [
            {
              url: `${siteConfig.url}${product.ugcVideos[0].poster}`,
              width: 720,
              height: 1280,
              alt: product.ugcVideos[0].title,
            },
          ]
        : [
            {
              url: `${siteConfig.url}${product.image}`,
              width: 1200,
              height: 900,
              alt: product.imageAlt,
            },
          ],
    },
  };
}

export async function generateStaticParams() {
  return genericProductPages.map((product) => ({ slug: product.slug }));
}

export default async function ProductUgcPage({ params }: ProductUgcPageProps) {
  const { slug } = await params;
  const product = getListedProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main id="content" className="app-stage min-h-screen px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href={`/product/${product.slug}`}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 text-sm font-black backdrop-blur"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Tillbaka till produkten
        </Link>

        <section className="ugc-page-card mt-8">
          <p className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white/10 px-4 text-sm font-black text-[#ff7ab8]">
            <PlayCircle size={17} aria-hidden="true" />
            UGC-klipp
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black leading-[1.02] md:text-6xl">
                Se produkten i vardagen.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/68">
                Korta klipp som visar hur {product.title.toLowerCase()} kan
                användas i praktiken. Enkel vy för mobilen, utan extra steg.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-action"
              >
                Se på Amazon
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <Link href={`/review/${product.slug}`} className="secondary-action">
                Kommentera
                <MessageCircle size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {product.ugcVideos.length > 0 ? (
          <section className="mt-6 grid gap-5 lg:grid-cols-3">
            {product.ugcVideos.map((video, index) => (
              <article
                key={video.src}
                className="ugc-video-card reveal-fade"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="ugc-video-frame">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    className="ugc-video"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-black uppercase text-[#ff7ab8]">
                    Klipp {index + 1}
                  </p>
                  <h2 className="mt-1 text-2xl font-black leading-tight text-white">
                    {video.title}
                  </h2>
                  <p className="mt-2 text-sm font-black leading-6 text-white/80">
                    {video.hook}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {video.note}
                  </p>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="ugc-video-card mt-6">
            <p className="text-xs font-black uppercase text-[#ff7ab8]">
              Kommer snart
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-white">
              UGC-klipp läggs till när videorna är klara.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/65">
              Produkten är upplagd först, så videodelen kan fyllas på med riktiga
              användarklipp utan att ändra sidans struktur.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
