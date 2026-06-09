import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BatteryCharging,
  BriefcaseBusiness,
  Dumbbell,
  Heart,
  Home,
  Share2,
  Sparkles,
  TriangleAlert,
  Zap,
} from "lucide-react";
import { notFound } from "next/navigation";

import { ProductComments } from "@/components/ProductComments";
import { getProductBySlug, products, type Product } from "@/lib/products";
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

function getProductStory(product: Product): ProductStory {
  if (product.slug === "ninja-blast-portable-blender") {
    return {
      imageLabel: "I köket",
      elinThought:
        "Jag gillar den här eftersom jag kan göra en smoothie på två minuter innan jobbet och slippa stressa.",
      reasons: [
        {
          icon: Zap,
          label: "Snabb",
          text: "Mixa, drick och gå vidare utan att ta fram en stor mixer.",
        },
        {
          icon: BriefcaseBusiness,
          label: "Lätt att ta med",
          text: "Bägaren följer med i väskan, till kontoret eller efter träningen.",
        },
        {
          icon: BatteryCharging,
          label: "Batteridriven",
          text: "USB-C-laddning gör den mer flexibel i vardagen.",
        },
      ],
      moments: [
        { icon: Dumbbell, label: "Gymmet" },
        { icon: BriefcaseBusiness, label: "Kontoret" },
        { icon: Sparkles, label: "Morgonrutinen" },
      ],
      cautions: [
        "Inte för stora mängder.",
        "Klarar inte allt fryst utan vätska.",
      ],
    };
  }

  return {
    imageLabel: "Hemmaträning",
    elinThought:
      "Jag gillar den här eftersom den gör det lättare att träna hemma utan att köpa stora saker.",
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

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

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

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const story = getProductStory(product);
  const heroImage = product.images[0] ?? {
    src: product.image,
    alt: product.imageAlt,
    label: story.imageLabel,
  };

  return (
    <main
      id="content"
      className="min-h-screen max-w-full overflow-hidden bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
    >
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
            <div className="relative aspect-[4/5] min-h-[28rem] sm:aspect-[5/4] lg:h-full lg:min-h-[40rem]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="(max-width: 768px) 92vw, 560px"
                className="object-cover"
              />
              <span className="absolute left-5 top-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#D8A7B1]/95 px-5 text-sm font-black text-white shadow-[0_14px_34px_rgba(122,72,88,0.18)]">
                <Home size={16} aria-hidden="true" />
                {heroImage.label || story.imageLabel}
              </span>
            </div>
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
                ca {product.price}
              </span>
              <span className="rounded-full bg-[#F6F0EC] px-5 py-3 text-sm font-bold text-[#6b4755]">
                Amazon.se
              </span>
            </div>

            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D8788D] to-[#EAA3AD] px-6 text-lg font-black text-white shadow-[0_20px_48px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5"
            >
              Se på Amazon
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
          </article>
        </section>

        <section className="mt-6 min-w-0 rounded-[2rem] border border-[#F1D8DD] bg-[#F9E9E9]/82 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-center">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-white/65 text-5xl shadow-[0_18px_42px_rgba(185,131,166,0.12)]">
              👩🏻
            </div>
            <div>
              <p className="font-display text-2xl italic text-[#7b4656]">
                Elin tänkte:
              </p>
              <blockquote className="mt-3 break-words text-[1.65rem] font-black leading-snug text-[#3E2F3A] md:text-3xl">
                “{story.elinThought}”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/68 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
            <h2 className="font-display text-3xl leading-tight text-[#4B2838]">
              Varför Elin valde den
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

        {product.comments.length > 0 ? (
          <section className="mt-6">
            <ProductComments product={product} />
          </section>
        ) : null}
      </div>
    </main>
  );
}
