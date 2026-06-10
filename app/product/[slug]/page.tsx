import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Dumbbell,
  Heart,
  Home,
  Share2,
  Sparkles,
  TriangleAlert,
  Zap,
} from "lucide-react";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { ProductComments } from "@/components/ProductComments";
import { TrustReviewLayers } from "@/components/TrustReviewLayers";
import { getListedProductBySlug, products, type Product } from "@/lib/products";
import {
  getApprovedReviewAggregate,
  getApprovedReviews,
  type ReviewAggregate,
} from "@/lib/reviews/reviews";
import { siteConfig } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ProductStory = {
  imageLabel: string;
  elinThought: string;
  reasons: {
    icon: typeof Zap;
    label: string;
    text: string;
  }[];
  moments: {
    icon: typeof Dumbbell;
    label: string;
  }[];
  cautions: string[];
};

function getProductStory(): ProductStory {
  return {
    imageLabel: "Hemmaträning",
    elinThought:
      "Den är intressant eftersom den gör hemmaträning enklare utan att kräva stora redskap.",
    reasons: [
      {
        icon: Zap,
        label: "Enkel",
        text: "Lätt att börja med även när man bara har några minuter.",
      },
      {
        icon: Home,
        label: "Tar lite plats",
        text: "Får plats hemma, i väskan eller i träningshörnan.",
      },
      {
        icon: Sparkles,
        label: "Fyra nivåer",
        text: "Du kan byta motstånd när övningen känns för lätt.",
      },
    ],
    moments: [
      { icon: Home, label: "Hemmet" },
      { icon: Dumbbell, label: "Gymmet" },
      { icon: Sparkles, label: "Morgonpasset" },
    ],
    cautions: [
      "Inte samma känsla som tung gymutrustning.",
      "Latex passar inte alla.",
    ],
  };
}

function getAmazonQuotes(product: Product) {
  if (product.slug === "traningsband-4-nivaer") {
    return [
      {
        text: "Träningsband av hög kvalitet med olika styrkor.",
        attribution: "Amazon-köpare",
      },
      {
        text: "Som alla andra band, fast billigare.",
        attribution: "Amazon-köpare",
      },
    ];
  }

  return [];
}

function buildProductSchema(
  product: Product,
  reviewAggregate: ReviewAggregate | null,
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    brand: { "@type": "Brand", name: product.brand },
    sku: product.asin,
    image: `${siteConfig.url}${product.image}`,
    description: product.summary,
    offers: {
      "@type": "Offer",
      url: product.amazonUrl,
      priceCurrency: "SEK",
    },
  };

  if (reviewAggregate) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: reviewAggregate.average,
      reviewCount: reviewAggregate.count,
      bestRating: "5",
      worstRating: "1",
    };
  }

  return schema;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getListedProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.title} | Elins val`,
    description: product.summary,
    alternates: {
      canonical: `${siteConfig.url}/product/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Elins val`,
      description: product.summary,
      url: `${siteConfig.url}/product/${product.slug}`,
      siteName: siteConfig.name,
      type: "article",
      images: [
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
  return products.map((product) => ({ slug: product.slug }));
}

export const revalidate = 300;

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getListedProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const story = getProductStory();
  const [approvedReviews, approvedReviewAggregate] = await Promise.all([
    getApprovedReviews(product.slug),
    getApprovedReviewAggregate(product.slug),
  ]);
  const productSchema = buildProductSchema(product, approvedReviewAggregate);
  const galleryImages =
    product.images.length > 0
      ? product.images
      : [{ src: product.image, alt: product.imageAlt, label: story.imageLabel }];

  return (
    <main
      id="content"
      className="min-h-screen max-w-full overflow-hidden bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
    >
      <JsonLd data={productSchema} />
      <div className="mx-0 w-full max-w-[22rem] min-w-0 sm:mx-auto sm:max-w-6xl">
        <header className="flex min-w-0 items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex min-h-11 min-w-0 items-center gap-2 rounded-full px-1 text-sm font-semibold text-[#6b4755] transition hover:text-[#B983A6]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span className="truncate">Tillbaka till Elins val</span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="grid min-h-10 min-w-10 place-items-center rounded-full border border-[#E9CDD3] bg-white/62 text-[#6b4755] shadow-[0_14px_36px_rgba(185,131,166,0.12)] sm:min-h-12 sm:min-w-12"
              aria-label="Spara i Elins val"
            >
              <Heart size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="grid min-h-10 min-w-10 place-items-center rounded-full border border-[#E9CDD3] bg-white/62 text-[#6b4755] shadow-[0_14px_36px_rgba(185,131,166,0.12)] sm:min-h-12 sm:min-w-12"
              aria-label="Dela produkten"
            >
              <Share2 size={20} aria-hidden="true" />
            </button>
          </div>
        </header>

        <section className="mt-7 grid min-w-0 gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2rem] border border-[#E9CDD3] bg-[#F6F0EC] shadow-[0_30px_90px_rgba(185,131,166,0.14)]">
            <ProductImageGallery images={galleryImages} />
          </div>

          <article className="min-w-0 rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_30px_90px_rgba(185,131,166,0.1)] backdrop-blur md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#D8788D]">
              Elins produktkoll
            </p>
            <h1 className="mt-4 break-words font-display text-[2.45rem] leading-[1.04] tracking-[-0.025em] text-[#4B2838] md:text-[4rem] md:tracking-[-0.035em]">
              {product.title}
            </h1>
            <p className="mt-5 break-words text-lg leading-8 text-[#5f4a54] md:text-xl md:leading-9">
              {product.summary}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#F6F0EC] px-5 py-3 text-sm font-bold text-[#6b4755]">
                ASIN {product.asin}
              </span>
              <span className="rounded-full bg-[#F6F0EC] px-5 py-3 text-sm font-bold text-[#6b4755]">
                Se aktuellt pris på Amazon
              </span>
              <span className="rounded-full bg-[#F6F0EC] px-5 py-3 text-sm font-bold text-[#6b4755]">
                Amazon.se
              </span>
            </div>

            <a
              href={product.amazonUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="mt-8 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D8788D] to-[#EAA3AD] px-6 text-lg font-black text-white shadow-[0_20px_48px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5"
            >
              Se på Amazon
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
            <p className="mt-3 text-center text-xs font-semibold leading-5 text-[#8a6e78]">
              Annons · Den här sidan innehåller reklamlänkar. Vi kan få
              ersättning om du köper via länken.
            </p>
          </article>
        </section>

        <section className="mt-6 min-w-0 rounded-[2rem] border border-[#F1D8DD] bg-[#F9E9E9]/82 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-center">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-white/65 text-5xl shadow-[0_18px_42px_rgba(185,131,166,0.12)]">
              👩🏻
            </div>
            <div>
              <p className="font-display text-2xl italic text-[#7b4656]">
                Elins redaktionella tanke:
              </p>
              <blockquote className="mt-3 break-words text-[1.65rem] font-black leading-snug text-[#3E2F3A] md:text-3xl">
                {story.elinThought}
              </blockquote>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/68 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="font-display text-3xl leading-tight text-[#4B2838]">
              Varför den hamnade på Elins lista
            </h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-3">
              {story.reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div key={reason.label} className="text-center">
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#F9E0E3] text-[#9E5E73]">
                      <Icon size={26} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-black text-[#4B2838]">
                      {reason.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#6f5a64]">
                      {reason.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/68 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="font-display text-3xl leading-tight text-[#4B2838]">
              När passar den?
            </h2>
            <div className="mt-6 grid gap-3">
              {story.moments.map((moment) => {
                const Icon = moment.icon;

                return (
                  <div
                    key={moment.label}
                    className="flex min-h-14 items-center gap-4 rounded-2xl bg-[#FFF4F5] px-4 text-[#5f4a54]"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F9DDE2] text-[#B983A6]">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="font-bold">{moment.label}</span>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        <section className="mt-6 rounded-[2rem] border border-[#F1D8DD] bg-white/68 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="font-display text-3xl leading-tight text-[#4B2838]">
            Inte perfekt, men bra att veta
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {story.cautions.map((caution) => (
              <div
                key={caution}
                className="flex min-h-14 items-center gap-4 rounded-2xl bg-[#FFF4F5] px-4 text-[#5f4a54]"
              >
                <TriangleAlert
                  className="shrink-0 text-[#D8788D]"
                  size={22}
                  aria-hidden="true"
                />
                <span className="font-semibold">{caution}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <TrustReviewLayers
            editorialVerdict={product.evaluation.verdict}
            amazonSummary={product.amazonReviewSignal.ratingSummary}
            amazonQuotes={getAmazonQuotes(product)}
            reviewHref="#recensioner"
          />
        </section>

        <section className="mt-6">
          <ProductComments
            product={product}
            reviews={approvedReviews}
            turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          />
        </section>
      </div>
    </main>
  );
}
