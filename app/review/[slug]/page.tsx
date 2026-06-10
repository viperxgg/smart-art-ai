import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";

import { ReviewForm } from "@/components/ReviewForm";
import { getProductBySlug, products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

type ReviewPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ReviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `Lämna kommentar om ${product.title}`,
    description:
      "Lämna en ärlig kommentar om produkten och hjälp andra att förstå om den passar dem.",
    alternates: {
      canonical: `${siteConfig.url}/review/${product.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="app-stage min-h-screen px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 text-sm font-black backdrop-blur"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-white/10">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover"
              />
            </div>
            <div className="mt-5">
              <p className="text-xs font-black uppercase text-[#ff7ab8]">
                Ärlig kommentar
              </p>
              <h1 className="mt-2 text-3xl font-black leading-tight">
                {product.title}
              </h1>
              <p className="mt-3 leading-7 text-white/65">
                Skriv gärna om du faktiskt har testat produkten, eller om du har
                en konkret fråga efter att ha läst Elins produktkoll. Alla
                recensioner granskas manuellt innan publicering.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#161016]/78 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-7">
            <div className="mb-6 rounded-2xl border border-[#47e6a8]/25 bg-[#47e6a8]/10 p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 text-[#47e6a8]" size={22} />
                <div>
                  <h2 className="font-black">Vårt löfte</h2>
                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Vi vill lyfta verkliga åsikter: vad som var bra, vad som var
                    mindre bra och vem produkten faktiskt passar för.
                  </p>
                </div>
              </div>
            </div>

            <ReviewForm
              product={product}
              turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
