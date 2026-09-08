import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { moroccanoilValueGuide, salonMaskValueGuide } from "@/lib/harinpackning-eller-harolja";
import { selfTanValueGuide } from "@/lib/self-tan-decision";
import { yogaPriceGuide } from "@/lib/yoga-mat-decision";
import { rollerPriceGuide } from "@/lib/foam-roller-decision";
import { massageGunPriceGuide } from "@/lib/massage-gun-decision";
import { snailValueGuide, hyaluronicValueGuide } from "@/lib/snigelslem-eller-hyaluronsyra";

export const metadata = createSeoMetadata({
  title: "Guider – vilken köpfråga vill du reda ut? | Elins val",
  description:
    "Hitta din köpfråga. Läs om behov, begränsningar och när du kan behålla det du redan har.",
  url: `${siteConfig.url}/guider`,
});

function decisionPreview(guide: DecisionGuide) {
  return { href: guide.path, title: guide.title, description: guide.intro };
}

const guides = [
  {
    href: "/guider/bagagevag-vart-det",
    title: "Bagagevåg – vad behöver du kontrollera före resan?",
    description:
      "Utgå från bagagereglerna och hur du redan väger väskan. En våg är inte en garanti mot avgifter.",
  },
  decisionPreview(snailValueGuide),
  {
    href: "/guider/tyst-flakt-sovrum",
    title: "Vilken fläkt passar ditt sovrum?",
    description:
      "Se modelluppgifter och vad som saknas om ljud och reglage. Vi har inte gjort ett jämförande ljudtest eller utsett en vinnare.",
  },
  {
    href: "/guider/harinpackning",
    title: "Vilken hårmask passar din rutin?",
    description:
      "Jämför sex hårmasker och behandlingar efter användning, variant och begränsningar. Läs tillverkarkällorna och när du kan avstå från köp.",
  },
  {
    href: "/guider/flakt-dyr-vs-billig",
    title: "Fläkt: dyr vs billig – värt det?",
    description:
      "Vilken funktion saknas i fläkten du har? Kontrollera modell, placering och reglage innan du jämför pris.",
  },
  {
    href: "/guider/dyson-airwrap-eller-varmluftsborste",
    title: "Dyson Airwrap eller varmluftsborste – värt priset?",
    description:
      "Börja med hur du vill styla håret och vilka tillbehör du använder. Kontrollera den exakta modellen innan du värderar priset.",
  },
  decisionPreview(moroccanoilValueGuide),
  {
    href: "/guider/dyr-plattang-eller-budget",
    title: "Dyr plattång eller budget – behöver du den dyra?",
    description:
      "Vilka inställningar och vilket format behöver du? Högre pris visar inte ensamt vad ett verktyg tillför.",
  },
  {
    href: "/guider/torrschampo-dyrt-vs-billigt",
    title: "Torrschampo: dyrt vs billigt – värt skillnaden?",
    description:
      "Vad saknar du i torrschampot du använder? Kontrollera formula och användning för de exakta varianterna.",
  },
  decisionPreview(salonMaskValueGuide),
  decisionPreview(hyaluronicValueGuide),
  {
    href: "/guider/niacinamide-10-vs-20",
    title: "Niacinamide 10% eller 20% – vad behöver jämföras?",
    description:
      "Kontrollera exakt formula, användningsråd och underlag. Procenttalet ensamt säger inte vilken produkt som passar dig.",
  },
  decisionPreview(selfTanValueGuide),
  {
    href: "/guider/after-sun-eller-fuktkram",
    title: "After sun eller fuktkräm – behöver du båda?",
    description:
      "Behöver rutinen ytterligare en produkt? Utgå från användning, innehåll och vad den befintliga krämen redan gör för dig.",
  },
  {
    href: "/guider/jojobaolja-multitalang",
    title: "Jojobaolja – vilken uppgift ska den fylla?",
    description:
      "Bestäm användningsområdet innan du lägger till en olja. Utgå inte från att den ersätter flera steg i rutinen.",
  },
  {
    href: "/guider/kettlebell-mjuk-vs-gjutjarn",
    title: "Mjuk kettlebell eller gjutjärn – vad kräver dina övningar?",
    description:
      "Kontrollera vikt, grepp och användningsområde. Beskrivningen mjuk innebär inte en garanti för golvet.",
  },
  decisionPreview(massageGunPriceGuide),
  decisionPreview(yogaPriceGuide),
  {
    href: "/guider/traningsband-dyrt-vs-billigt",
    title: "Dyra träningsband vs billiga – värt skillnaden?",
    description:
      "Börja med bandets längd, material och grepp i den övning du planerar. Pris och antal band bevisar inte att paketet passar.",
  },
  decisionPreview(rollerPriceGuide),
];

// Seasonal gift guides — surfaced here so they are reachable from the hub
// (and get indexed history) well before the Christmas search season ramps up.
const seasonalGuides = [
  {
    href: "/guider/julklapp-till-henne",
    title: "Julklapp till henne",
    description:
      "Elins presenttips till henne – doft, hudvård, sminkspegel och mysiga val i olika prislägen.",
  },
  {
    href: "/guider/julklapp-till-honom",
    title: "Julklapp till honom",
    description:
      "Elins presenttips till honom – grooming och smarta vardagsuppgraderingar som känns genomtänkta.",
  },
  {
    href: "/guider/julklappar-budget-mellan-premium",
    title: "Julklappar i tre prislägen",
    description:
      "Julklappstips i budget, mellan och premium – så hittar du en klapp som känns rätt utan att chansa.",
  },
];

export default function GuidesIndexPage() {
  return (
    <main
      id="content"
      tabIndex={-1}
      className="min-h-screen bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-8 rounded-[2.4rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.12)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Vilket köp funderar du på?
          </p>
          <h1 className="editorial-color-kiss mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
            Guider
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#6f5a64]">
            Börja med ett behov, läs begränsningarna och se när du kan behålla det du redan har. Varje guide behöver bedömas utifrån sina källor och vad som faktiskt har testats.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex h-full flex-col rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] transition hover:-translate-y-1 hover:bg-white"
            >
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
                Inför ditt val
              </p>
              <h2 className="editorial-color-kiss mt-4 font-display text-3xl leading-tight">
                {guide.title}
              </h2>
              <p className="mt-4 leading-8 text-[#6f5a64]">
                {guide.description}
              </p>
              <span className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-[#D8788D] px-5 text-sm font-black text-white shadow-[0_16px_38px_rgba(217,125,145,0.24)]">
                Läs guiden
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-12" aria-labelledby="seasonal-guides-title">
          <h2
            id="seasonal-guides-title"
            className="editorial-color-kiss font-display text-4xl leading-tight"
          >
            Julklappsguider
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-[#6f5a64]">
            Presenttips i olika prislägen – så du kan vara ute i god tid.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {seasonalGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex h-full flex-col rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] transition hover:-translate-y-1 hover:bg-white"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
                  Julklappstips
                </p>
                <h3 className="editorial-color-kiss mt-4 font-display text-3xl leading-tight">
                  {guide.title}
                </h3>
                <p className="mt-4 leading-8 text-[#6f5a64]">
                  {guide.description}
                </p>
                <span className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-[#D8788D] px-5 text-sm font-black text-white shadow-[0_16px_38px_rgba(217,125,145,0.24)]">
                  Läs guiden
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
