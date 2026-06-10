import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, HeartPulse, Home, Sparkles } from "lucide-react";

import { massagepistolPicks } from "@/lib/massagepistol";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Hälsa | Elins val",
  },
  description:
    "Elins val inom hälsa, återhämtning och vardagsprodukter som är lätta att förstå och faktiskt kan passa in hemma.",
  alternates: {
    canonical: `${siteConfig.url}/halsa`,
  },
};

export default function HalsaHubPage() {
  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-8 text-[#3E2F3A]"
    >
      <div className="mx-auto w-full max-w-5xl">
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
              Elins hälsoval
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] text-[#4B2838] sm:text-7xl">
              Hälsa som känns enkel.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6f5a64]">
              Här samlar Elin produkter för återhämtning, välmående och
              vardagsrutiner. Inte allt som trendar, bara det som känns rimligt
              att faktiskt använda.
            </p>
          </div>

          <Link
            href="/halsa/massagepistol"
            className="group overflow-hidden rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.14)] transition hover:-translate-y-1"
          >
            <div className="flex items-start gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-[#F9E0E3] text-[#B983A6]">
                <HeartPulse size={30} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
                  Guide 2026
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-[#4B2838]">
                  Massagepistol
                </h2>
                <p className="mt-4 text-lg leading-8 text-[#6f5a64]">
                  Två tydliga val: ett tryggt märkesval och ett kraftfullt
                  prisvärt alternativ.
                </p>
                <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D8A7B1] px-5 font-black text-white">
                  Läs Elins guide
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
                Produktkort
              </p>
              <h2 className="mt-2 font-display text-4xl text-[#4B2838]">
                Massagepistoler Elin jämför
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {massagepistolPicks.map((pick) => (
              <Link
                key={pick.product.slug}
                href={pick.path}
                className="group overflow-hidden rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 shadow-[0_28px_80px_rgba(185,131,166,0.12)] transition hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] bg-[#FFF4F5]">
                  <Image
                    src={pick.product.image}
                    alt={pick.product.imageAlt}
                    fill
                    sizes="(max-width: 768px) 92vw, 470px"
                    className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-[#c8919b]/90 px-4 py-2 text-sm font-black text-white backdrop-blur">
                    {pick.badge}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
                    {pick.product.brand}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-[#4B2838]">
                    {pick.product.title}
                  </h3>
                  <p className="mt-4 leading-8 text-[#6f5a64]">
                    {pick.shortBody}
                  </p>
                  <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D8A7B1] px-5 font-black text-white">
                    Se Elins recension
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-white/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F9E0E3] text-[#B983A6]">
              <Sparkles size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-3xl text-[#4B2838]">
                Mindre hype. Mer vardagsnytta.
              </h2>
              <p className="mt-3 text-lg leading-8 text-[#6f5a64]">
                Varje guide ska hjälpa dig förstå vad produkten passar för,
                vem som bör avstå och var du kan läsa mer innan köp.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
