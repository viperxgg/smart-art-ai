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
      </div>
    </main>
  );
}
