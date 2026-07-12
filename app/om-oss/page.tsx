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
    <main className="min-h-screen bg-bg px-4 py-8 text-ink">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-ink-soft transition hover:text-wine"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <article className="rounded-[2.4rem] border border-line bg-surface/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.1)] md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-rose">
              Om Elin
            </p>
            <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-none md:text-7xl">
              Jag letar efter{" "}
              <span className="text-mid">värde</span> i{" "}
              <span className="text-violet">bruset</span>.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink">
              Elin är guiden bakom Elins val: en röst som jämför{" "}
              <span className="font-semibold text-mid">produkter</span>,
              köpsignaler och{" "}
              <span className="editorial-soft-mark font-semibold">
                tusentals verkliga omdömen
              </span>{" "}
              för att hitta det som faktiskt verkar värt pengarna.
            </p>
            <p className="mt-5 text-lg leading-8 text-ink">
              Målet är inte att lista allt. Målet är att göra valet{" "}
              <span className="font-semibold text-violet">lugnare</span>:
              varför något är intressant, vem det passar, vilken kompromiss som
              finns och när ett{" "}
              <span className="font-semibold text-mid">
                billigare eller enklare
              </span>{" "}
              alternativ räcker.
            </p>
            <p className="mt-5 rounded-3xl border border-line bg-rose/8 p-5 leading-7 text-ink-soft">
              <strong>Annons och transparens:</strong> Elins val kan få provision
              om du handlar via vissa Amazon-länkar. Det kostar inte extra för
              dig. Betald placering styr inte urvalet, och affiliatelänkar märks
              som Annons.
            </p>
          </article>

          <aside className="rounded-[2.4rem] border border-line bg-rose/8 p-6 shadow-[0_30px_90px_rgba(185,131,166,0.1)]">
            <div className="flex h-full min-h-[22rem] flex-col justify-between rounded-[2rem] bg-surface/58 p-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-rose">
                  Elins löfte
                </p>
                <h2 className="editorial-color-kiss mt-3 font-display text-4xl leading-tight">
                  Hellre ett tydligt nej än en lång lista.
                </h2>
              </div>
              <div className="mt-8 grid gap-3">
                {[
                  {
                    text: "Värde före hype.",
                    className: "border-rose/30 bg-rose/8 text-wine",
                  },
                  {
                    text: "Caveats innan klick.",
                    className: "border-violet/25 bg-violet/8 text-violet",
                  },
                  {
                    text: "Annons märks tydligt.",
                    className: "border-gold/35 bg-gold/12 text-[#755b35]",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className={`rounded-2xl border px-4 py-3 font-black ${item.className}`}
                  >
                    {item.text}
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
                className="rounded-[2rem] border border-line bg-surface/72 p-6 shadow-[0_20px_60px_rgba(185,131,166,0.08)]"
              >
                <Icon className="text-wine" size={24} aria-hidden="true" />
                <h2 className="editorial-color-kiss mt-4 font-display text-2xl">
                  {item.title}
                </h2>
                <p className="mt-2 leading-7 text-ink-soft">{item.text}</p>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
