import Link from "next/link";
import { ArrowLeft, Heart, ShieldCheck, Sparkles } from "lucide-react";

import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Om Elin | Elins val",
  description:
    "Elin letar efter produkter som faktiskt är värda pengarna, jämför recensioner och visar både styrkor och caveats.",
  url: `${siteConfig.url}/om-oss`,
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F7] px-4 py-8 text-[#3E2F3A]">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <article className="rounded-[2.4rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.1)] md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#D8788D]">
              Om Elin
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none text-[#4B2838] md:text-7xl">
              Jag letar efter värde i bruset.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#5f4a54]">
              Elin är guiden bakom Elins val: en röst som jämför produkter,
              köpsignaler och tusentals verkliga omdömen för att hitta det som
              faktiskt verkar värt pengarna.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#5f4a54]">
              Målet är inte att lista allt. Målet är att göra valet lugnare:
              varför något är intressant, vem det passar, vilken kompromiss som
              finns och när ett billigare eller enklare alternativ räcker.
            </p>
            <p className="mt-5 rounded-3xl border border-[#F1D8DD] bg-[#FFF4F5] p-5 leading-7 text-[#6f5a64]">
              <strong>Annons och transparens:</strong> Elins val kan få provision
              om du handlar via vissa Amazon-länkar. Det kostar inte extra för
              dig. Betald placering styr inte urvalet, och affiliatelänkar märks
              som Annons.
            </p>
          </article>

          <aside className="rounded-[2.4rem] border border-[#F1D8DD] bg-[#FFF4F5] p-6 shadow-[0_30px_90px_rgba(185,131,166,0.1)]">
            <div className="flex h-full min-h-[22rem] flex-col justify-between rounded-[2rem] bg-white/58 p-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
                  Elins löfte
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-[#4B2838]">
                  Hellre ett tydligt nej än en lång lista.
                </h2>
              </div>
              <div className="mt-8 grid gap-3">
                {[
                  "Värde före hype.",
                  "Caveats innan klick.",
                  "Annons märks tydligt.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#F1D8DD] bg-[#FFF9F7] px-4 py-3 font-black text-[#6f3f4d]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Heart,
              title: "Värde först",
              text: "Elin väljer efter nytta, prisvärdhet och tydlig användning, inte efter hype.",
            },
            {
              icon: Sparkles,
              title: "Tre lager",
              text: "Redaktionellt urval, Amazon-köparnas signaler och vår community hålls isär.",
            },
            {
              icon: ShieldCheck,
              title: "Ärlig caveat",
              text: "Varje rekommendation ska ha minst en sak du bör känna till innan du klickar vidare.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_20px_60px_rgba(185,131,166,0.08)]"
              >
                <Icon className="text-[#B983A6]" size={24} aria-hidden="true" />
                <h2 className="mt-4 font-display text-2xl text-[#4B2838]">
                  {item.title}
                </h2>
                <p className="mt-2 leading-7 text-[#6f5a64]">{item.text}</p>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
