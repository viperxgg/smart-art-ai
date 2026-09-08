import Link from "next/link";
import { Dumbbell, Home } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { CategoryComparisonSections } from "@/components/CategoryComparisonSections";
import { CategoryProductSections } from "@/components/CategoryProductSections";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Träning hemma | Elins val",
  description:
    "Jämför redskap efter övningar, utrymme och begränsningar. Läs när din nuvarande utrustning räcker.",
  url: `${siteConfig.url}/traning`,
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
      tabIndex={-1}
      className="min-h-screen bg-bg px-4 py-8 text-ink"
    >
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto w-full max-w-5xl pb-24">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-ink-soft transition hover:text-wine"
        >
          <Home size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-11 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
              Träning hemma
            </p>
            <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              Vilka redskap behöver dina övningar?
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-ink-soft">
              Börja med övningarna du vill göra och utrymmet du har.
              Jämför belastning och begränsningar innan du lägger till
              något i utrustningen.
            </p>
          </div>

          <Link href="/traning/hantlar-eller-gummiband" className="group rounded-[2.2rem] border border-line bg-surface/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.14)] transition hover:-translate-y-1">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">Börja med en jämförelse</p>
            <h2 className="editorial-color-kiss mt-3 font-display text-4xl leading-tight">Hantlar eller miniband – vad passar övningen?</h2>
            <p className="mt-4 text-lg leading-8 text-ink-soft">Se de exakta redskapen, vad de inte ersätter och när du kan avstå från ett köp.</p>
            <span className="mt-6 inline-flex min-h-12 items-center rounded-full bg-wine px-5 font-black text-bg">Läs beslutsunderlaget</span>
          </Link>
        </section>

        <section className="reveal-fade mt-12 rounded-[2rem] border border-line bg-surface/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose/15 text-wine">
              <Dumbbell size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-3xl">
                Mindre utrustning. Mer rörelse.
              </h2>
              <p className="mt-3 text-lg leading-8 text-ink-soft">
                Behåll redskap som redan fungerar för dina övningar.
                Mer utrustning är inte ett mål i sig.
              </p>
            </div>
          </div>
        </section>

        <CategoryProductSections categorySlug="traning" />
        <CategoryComparisonSections categorySlug="traning" />

        <RelatedLinks
          links={[
            {
              href: "/traning/traningsband",
              label: "Träningsband",
              text: "Jämför långa band i naturlatex med korta loop-band för ben och rumpa.",
            },
            {
              href: "/traning/foam-roller",
              label: "Foam roller",
              text: "Jämför en enkel slät rulle med ett komplett återhämtningsset.",
            },
            {
              href: "/traning/yogamatta",
              label: "Yogamatta",
              text: "Jämför tjocklek, material och vad vi vet om golvkontakt.",
            },
            {
              href: "/traning/hantlar",
              label: "Hantlar",
              text: "Jämför ett enkelt par neoprenhantlar med ett komplett set.",
            },
            {
              href: "/traning/kettlebell",
              label: "Kettlebell",
              text: "Jämför gjutjärn mot mjuk kettlebell för hemmaträning.",
            },
            {
              href: "/halsa/massagepistol",
              label: "Återhämtning",
              text: "Jämför två massagepistoler för hemmabruk och återhämtning.",
            },
            {
              href: "/halsa",
              label: "Hälsa & livsstil",
              text: "Se fler produkter inom återhämtning, smart hem och vardagskänsla.",
            },
          ]}
        />
      </div>
    </main>
  );
}
