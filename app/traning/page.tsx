import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Dumbbell, Heart, Home } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { createSeoMetadata } from "@/lib/metadata";
import { featuredProduct } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Träning hemma | Elins val",
  description:
    "Elins val inom enkel hemmaträning: produkter som tar lite plats, är lätta att förstå och faktiskt passar i vardagen.",
  url: `${siteConfig.url}/traning`,
  image: {
    url: `${siteConfig.url}${featuredProduct.image}`,
    width: 1024,
    height: 1024,
    alt: featuredProduct.imageAlt,
  },
});

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export default function TraningHubPage() {
  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-8 text-[#3E2F3A]"
    >
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <Home size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
              Elins träningsval
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] text-[#4B2838] sm:text-7xl">
              Träning som får plats hemma.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6f5a64]">
              Här samlar Elin produkter som gör hemmaträning mindre krånglig:
              enkla att använda, lätta att förvara och tydliga nog att förstå på
              några sekunder.
            </p>
          </div>

          <Link
            href="/traning/traningsband-naturlatex"
            className="group overflow-hidden rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 shadow-[0_28px_80px_rgba(185,131,166,0.14)] transition hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#F6F0EC]">
              <Image
                src={featuredProduct.image}
                alt={featuredProduct.imageAlt}
                fill
                sizes="(max-width: 768px) 92vw, 520px"
                className="object-cover transition duration-500 group-hover:scale-[1.025]"
                priority
              />
              <span className="absolute left-5 top-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#D8A7B1]/95 px-5 text-sm font-black text-white">
                <Heart size={16} fill="currentColor" aria-hidden="true" />
                Elin valde
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
                {featuredProduct.brand}
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-[#4B2838]">
                Träningsband i naturlatex
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#6f5a64]">
                Fyra motståndsnivåer för uppvärmning, hemmaträning, rehab och
                tyngre övningar.
              </p>
              <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D8A7B1] px-5 font-black text-white">
                Läs Elins genomgång
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-white/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F9E0E3] text-[#B983A6]">
              <Dumbbell size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-3xl text-[#4B2838]">
                Mindre utrustning. Mer rörelse.
              </h2>
              <p className="mt-3 text-lg leading-8 text-[#6f5a64]">
                Fokus här är inte extrema gymprylar, utan saker som faktiskt kan
                bli använda även när vardagen är full.
              </p>
            </div>
          </div>
        </section>

        <RelatedLinks
          links={[
            {
              href: "/halsa/massagepistol",
              label: "Återhämtning",
              text: "Jämför två massagepistoler för hemmabruk och återhämtning.",
            },
            {
              href: "/halsa",
              label: "Hälsa",
              text: "Se fler produkter inom hälsa, välmående och vardagsrutiner.",
            },
          ]}
        />
      </div>
    </main>
  );
}
