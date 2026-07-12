"use client";

import { ElinCtaButton } from "@/components/elin/ElinCtaButton";
import { ElinHeroDemo } from "@/components/elin/ElinHeroDemo";
import { useElin } from "@/components/elin/ElinProvider";

const capabilityQuestions = [
  "💧 Jag har torr hud – var börjar jag?",
  "💰 Är ett dyrt serum värt det?",
  "🆚 Jämför två produkter åt mig",
  "📋 Bygg en rutin åt mig",
  "💇 Bästa mot frizz?",
  "🏋️ Vilken massagepistol ska jag välja?",
];

export function ElinHomeHero() {
  const { openElin } = useElin();

  return (
    <section
      className="reveal-fade mt-16 border-y border-line py-10 sm:mt-20 sm:py-14 lg:mt-24"
      aria-labelledby="elin-home-hero-title"
    >
      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.78fr)] lg:items-center lg:gap-10">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-rose">
            ✱ Möt Elin – din personliga rådgivare
          </p>
          <h1
            id="elin-home-hero-title"
            className="editorial-color-kiss mt-4 font-display text-[2.75rem] leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl"
          >
            Hej, jag är Elin. Fråga mig vad du ska köpa – och vad du kan skippa.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
            Fråga mig om allt – hudproblem, om något är värt pengarna, en hel rutin,
            bästa mot frizz, eller vad du INTE behöver köpa.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <ElinCtaButton
              size="md"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-wine px-6 text-sm font-black text-bg shadow-[0_18px_46px_rgba(109,60,77,0.3)] transition hover:-translate-y-0.5 hover:bg-wine/90 sm:min-h-14 sm:px-7"
            >
              Fråga Elin
            </ElinCtaButton>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {capabilityQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => openElin(undefined, question)}
                className="min-h-11 max-w-full rounded-full border border-line bg-surface/70 px-4 py-2 text-left text-sm font-bold leading-5 text-ink shadow-[0_12px_30px_rgba(216,120,141,0.1)] transition hover:-translate-y-0.5 hover:bg-surface"
                data-elin-capability-chip={question}
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <ElinHeroDemo />
      </div>
    </section>
  );
}
