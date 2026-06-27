"use client";

import { useElin } from "@/components/elin/ElinProvider";

const exampleQuestions = [
  "Var börjar jag med min hud?",
  "Är en dyr massagepistol värt det?",
  "Billigare alternativ till ett serum?",
];

export function ElinHomeHero() {
  const { openElin } = useElin();

  return (
    <section
      className="mt-8 border-y border-[#F1D8DD] py-10 sm:mt-10 sm:py-14"
      aria-labelledby="elin-home-hero-title"
    >
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
          ✱ Möt Elin – din personliga rådgivare
        </p>
        <h1
          id="elin-home-hero-title"
          className="editorial-color-kiss mt-4 font-display text-[2.75rem] leading-[1.02] tracking-normal text-[#4B2838] sm:text-6xl lg:text-7xl"
        >
          Hej, jag är Elin. Fråga mig vad du ska köpa – och vad du kan skippa.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#6f5a64] sm:text-lg sm:leading-8">
          Din ärliga rådgivare för hud, hår, träning och hälsa. Jag jämför hela
          sortimentet, hittar det som passar dig och din budget – och säger till när du
          inte behöver köpa något alls.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => openElin()}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D8788D] px-6 text-sm font-black text-[#FFF9F7] shadow-[0_18px_46px_rgba(216,120,141,0.24)] transition hover:-translate-y-0.5 hover:bg-[#c96b80] sm:min-h-14 sm:px-7"
          >
            💬 Fråga Elin
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {exampleQuestions.map((question) => (
            <button
              key={question}
              type="button"
              onClick={() => openElin(undefined, question)}
              className="min-h-10 rounded-full border border-[#F1D8DD] bg-white/70 px-4 text-left text-sm font-bold text-[#4B2838] shadow-[0_12px_30px_rgba(216,120,141,0.1)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
