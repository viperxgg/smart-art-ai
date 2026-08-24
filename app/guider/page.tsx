import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Guider – Elins ärliga köpråd | Elins val",
  description:
    'Elins guider: ärliga jämförelser och "värt priset?"-råd som hjälper dig välja rätt.',
  url: `${siteConfig.url}/guider`,
});

const guides = [
  {
    href: "/guider/bagagevag-vart-det",
    title: "Bagagevåg – värt det eller kan du chansa?",
    description:
      "Elin går igenom när en bagagevåg räddar dig från överviktsavgift – och när badrumsvågen hemma räcker.",
  },
  {
    href: "/guider/snail-mucin-vart-hypen",
    title: "Snail mucin – värt hypen?",
    description:
      "Elin går igenom snigelsekret (snail mucin) ärligt – vad det gör för huden och om det virala ryktet håller.",
  },
  {
    href: "/guider/tyst-flakt-sovrum",
    title: "Tyst fläkt för sovrummet – vilken ska du välja?",
    description:
      "Elin jämför tysta fläktar för sovrummet ärligt – nattläge, ljudnivå och när premium är värt det.",
  },
  {
    href: "/guider/flakt-dyr-vs-billig",
    title: "Fläkt: dyr vs billig – värt det?",
    description:
      "Elin jämför en dyr tornfläkt och en billig bordsfläkt ärligt – vad du betalar för och när budget räcker.",
  },
  {
    href: "/guider/dyson-airwrap-eller-varmluftsborste",
    title: "Dyson Airwrap eller varmluftsborste – värt priset?",
    description:
      "Elin går igenom vad du faktiskt får med premiumverktyget och när en prisvärd varmluftsborste räcker.",
  },
  {
    href: "/guider/moroccanoil-vart-priset",
    title: "Moroccanoil hårolja – värt priset?",
    description:
      "Elin går igenom Moroccanoils ingredienser ärligt – varför håroljan ger glans, och om en billigare olja gör samma jobb.",
  },
  {
    href: "/guider/dyr-plattang-eller-budget",
    title: "Dyr plattång eller budget – behöver du den dyra?",
    description:
      "Elin jämför dyra och billiga plattänger ärligt – när premium är värt det, och när en prisvärd plattång räcker.",
  },
  {
    href: "/guider/torrschampo-dyrt-vs-billigt",
    title: "Torrschampo: dyrt vs billigt – värt skillnaden?",
    description:
      "Elin jämför premium- och budgettorrschampo ärligt – vad du betalar extra för och när det billiga räcker.",
  },
  {
    href: "/guider/harinpackning-salongsmarke-vart-det",
    title: "Hårinpackning – är salongsmärket värt det?",
    description:
      "Elin jämför salongs- och budgethårinpackningar ärligt – när den dyrare masken är värd det.",
  },
  {
    href: "/guider/hyaluronsyra-dyrt-vs-budget",
    title: "Hyaluronsyra: dyrt vs budget – värt skillnaden?",
    description:
      "Elin jämför dyra och billiga hyaluronsyra-serum ärligt – vad du betalar för och när ett budgetserum räcker.",
  },
  {
    href: "/guider/niacinamide-10-vs-20",
    title: "Niacinamide 10% vs 20% – behöver du den starka?",
    description:
      "Elin går igenom niacinamide-styrkor ärligt – varför 10% oftast räcker och när mer inte är bättre.",
  },
  {
    href: "/guider/brun-utan-sol-vart-det",
    title: "Brun utan sol – värt det?",
    description:
      "Elin går igenom brun-utan-sol ärligt – vad den gör, vad den INTE gör, och när premium är värt det.",
  },
  {
    href: "/guider/after-sun-eller-fuktkram",
    title: "After sun eller fuktkräm – behöver du båda?",
    description:
      "Elin jämför after sun och fuktkräm ärligt – vad after sun tillför och när en fuktkräm räcker.",
  },
  {
    href: "/guider/jojobaolja-multitalang",
    title: "Jojobaolja – multitalangen värd plats?",
    description:
      "Elin går igenom jojobaolja ärligt – varför en enda olja kan ersätta flera produkter, och var den inte räcker.",
  },
  {
    href: "/guider/kettlebell-mjuk-vs-gjutjarn",
    title: "Mjuk kettlebell vs gjutjärn – värt det golvvänliga?",
    description:
      "Elin jämför mjuk och gjutjärns-kettlebell ärligt – när det golvvänliga är värt en högre peng och när gjutjärn räcker.",
  },
  {
    href: "/guider/dyr-massagepistol-vs-budget",
    title: "Dyr massagepistol eller budget – behöver du premiummärket?",
    description:
      "Elin jämför dyra och billiga massagepistoler ärligt – vad premium ger och när en budgetmodell räcker.",
  },
  {
    href: "/guider/premium-yogamatta-vs-budget",
    title: "Dyr yogamatta eller budget – värd skillnaden?",
    description:
      "Elin jämför premium- och budgetyogamattor ärligt – vad du betalar för och när en prisvärd matta räcker.",
  },
  {
    href: "/guider/traningsband-dyrt-vs-billigt",
    title: "Dyra träningsband vs billiga – värt skillnaden?",
    description:
      "Elin jämför dyra tygband och billiga latexband ärligt – vad du betalar för och när de billiga räcker.",
  },
  {
    href: "/guider/foam-roller-dyr-vs-billig",
    title: "Foam roller: dyr vs billig – värt skillnaden?",
    description:
      "Elin jämför dyra och billiga foam rollers ärligt – vad du betalar extra för och när en enkel rulle räcker.",
  },
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
            Guider
          </p>
          <h1 className="editorial-color-kiss mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
            Guider
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#6f5a64]">
            Ärliga köpråd – vad du faktiskt får och när ett billigare
            alternativ räcker.
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
                Värt priset?
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
