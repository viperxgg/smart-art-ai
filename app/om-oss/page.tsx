import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om oss | Elins val",
  description:
    "Elins val samlar personligt utvalda produkter från TikTok-flödet med enkel, ärlig och vardagsnära produktkoll.",
  alternates: {
    canonical: `${siteConfig.url}/om-oss`,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F7] px-4 py-8 text-[#3E2F3A]">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.1)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-[#D8788D]">
            Om Elins val
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none text-[#4B2838] md:text-7xl">
            Inte allt. Bara det som fastnar.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#5f4a54]">
            Elins val är en personlig produktkoll för saker som syns i
            TikTok-flödet, men där vi vill skala ner det till det viktigaste:
            varför produkten känns intressant, när den passar och vad som är bra
            att veta innan man klickar vidare.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#5f4a54]">
            Elin är Smart Art AIs redaktionella röst. Hon testar inte produkterna
            fysiskt – hon går igenom hundratals verkliga omdömen,
            specifikationer och TikTok-reaktioner och ger dig en ärlig,
            filtrerad sammanfattning. Vår community av riktiga användare
            kompletterar med sina egna omdömen.
          </p>
          <p className="mt-5 rounded-3xl border border-[#F1D8DD] bg-[#FFF4F5] p-5 leading-7 text-[#6f5a64]">
            <strong>Annons och affiliatelänkar:</strong> Smart Art AI kan få
            provision när du klickar vidare och handlar via vissa Amazon-länkar.
            Det kostar inte extra för dig, och vi försöker alltid skilja tydligt
            mellan vårt redaktionella urval, Amazon-köparnas omdömen och
            kommentarer från vår egen community.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#FFF4F5] p-5">
              <Heart className="text-[#B983A6]" size={24} aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl text-[#4B2838]">
                Personligt urval
              </h2>
              <p className="mt-2 leading-7 text-[#6f5a64]">
                Produkter väljs för att de verkar användbara i vardagen, inte
                för att fylla en lång lista.
              </p>
            </div>
            <div className="rounded-3xl bg-[#FFF4F5] p-5">
              <Sparkles
                className="text-[#B983A6]"
                size={24}
                aria-hidden="true"
              />
              <h2 className="mt-4 font-display text-2xl text-[#4B2838]">
                Enkel produktkoll
              </h2>
              <p className="mt-2 leading-7 text-[#6f5a64]">
                Vi lyfter både det som känns smart och det som är bra att
                dubbelkolla.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
