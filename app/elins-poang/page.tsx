import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { createSeoMetadata } from "@/lib/metadata";
import { scoreWeights } from "@/lib/scores";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Så sätter vi Elins poäng | Elins val",
  description:
    "Metoden bakom Elins poäng: värde, prestanda, om produkten håller löftet och hur beprövad den är.",
  url: `${siteConfig.url}/elins-poang`,
});

const rows = [
  {
    label: "Värde för pengarna",
    points: scoreWeights.value,
    text: "Hur mycket praktisk nytta produkten verkar ge i relation till alternativen. Vi visar aldrig hårdkodade priser, utan väger värde utifrån positionering, specifikationer och synliga köpsignaler.",
  },
  {
    label: "Prestanda & funktioner",
    points: scoreWeights.performance,
    text: "Om produkten har rätt funktioner för sitt användningsområde, utan att onödiga detaljer får väga tyngre än vardagsnytta.",
  },
  {
    label: "Håller vad den lovar",
    points: scoreWeights.promise,
    text: "Hur väl produktens löfte stöds av specifikationer, återkommande köparomdömen och kända caveats.",
  },
  {
    label: "Beprövad/populär",
    points: scoreWeights.proven,
    text: "Hur mycket socialt bevis som finns: antal omdömen, etablerat varumärke, bestseller-signaler och långsiktig trovärdighet.",
  },
];

const tiers = [
  ["90-100", "Utmärkt", "Starkt val med få tydliga kompromisser."],
  ["75-89", "Bra", "Rekommenderbart, men med caveats som spelar roll."],
  ["60-74", "Helt okej", "Kan passa rätt person, men är inte ett självklart förstaval."],
  ["0-59", "Rekommenderas inte", "För svagt värde eller för stora frågetecken."],
] as const;

export default function ElinsScoreMethodPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F7] px-4 py-8 text-[#3E2F3A]">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-10 rounded-[2.4rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.1)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-[#D8788D]">
            Metod
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none text-[#4B2838] md:text-7xl">
            Så sätter vi Elins poäng
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#5f4a54]">
            Elins poäng är en redaktionell analys, inte ett kundbetyg och inte
            ett testbetyg. Elin jämför specifikationer, köpsignaler, synliga
            Amazon-omdömen och tydliga nackdelar för att hitta produkter som är
            värda pengarna för rätt person.
          </p>
          <p className="mt-5 rounded-3xl border border-[#F1D8DD] bg-[#FFF4F5] p-5 leading-7 text-[#6f5a64]">
            Låga poäng är möjliga. En produkt kan vara populär men ändå tappa
            poäng om värdet är svagt, om kompromissen är stor eller om den bara
            passar ett smalt användningsfall.
          </p>
        </section>

        <section className="mt-8 grid gap-4">
          {rows.map((row) => (
            <article
              key={row.label}
              className="rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_20px_60px_rgba(185,131,166,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-3xl text-[#4B2838]">
                  {row.label}
                </h2>
                <span className="rounded-full bg-[#FFF4F5] px-4 py-2 text-sm font-black text-[#9E5E73]">
                  /{row.points}
                </span>
              </div>
              <p className="mt-3 leading-7 text-[#6f5a64]">{row.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_20px_60px_rgba(185,131,166,0.08)] md:p-8">
          <h2 className="font-display text-4xl text-[#4B2838]">Nivåer</h2>
          <div className="mt-5 grid gap-3">
            {tiers.map(([range, label, text]) => (
              <div
                key={range}
                className="grid gap-2 rounded-2xl bg-[#FFF4F5] p-4 sm:grid-cols-[7rem_10rem_1fr] sm:items-center"
              >
                <p className="font-black text-[#9E5E73]">{range}</p>
                <p className="font-display text-2xl text-[#4B2838]">{label}</p>
                <p className="leading-7 text-[#6f5a64]">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
