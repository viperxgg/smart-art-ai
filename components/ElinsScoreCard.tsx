import type { EditorialScore } from "@/lib/scores";
import { scoreWeights } from "@/lib/scores";

type ElinsScoreCardProps = {
  score: EditorialScore;
  className?: string;
};

const scoreRows = [
  {
    key: "value",
    label: "💰 Värde för pengarna",
    max: scoreWeights.value,
  },
  {
    key: "performance",
    label: "⚡ Prestanda & funktioner",
    max: scoreWeights.performance,
  },
  {
    key: "promise",
    label: "✅ Håller vad det lovar",
    max: scoreWeights.promise,
  },
  {
    key: "proven",
    label: "🔥 Beprövad/populär",
    max: scoreWeights.proven,
  },
] as const;

export function ElinsScoreCard({ score, className = "" }: ElinsScoreCardProps) {
  return (
    <section
      className={`rounded-[2rem] border border-[#F1D8DD] bg-white/76 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8 ${className}`}
      aria-labelledby="elins-poang-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Elins poäng
          </p>
          <h2
            id="elins-poang-heading"
            className="mt-2 font-display text-3xl text-[#4B2838]"
          >
            Elins poäng
          </h2>
        </div>
        <p className="rounded-full bg-gradient-to-r from-[#D8788D] to-[#EAA3AD] px-5 py-3 text-lg font-black text-white shadow-[0_18px_42px_rgba(216,120,141,0.22)]">
          🎯 {score.total}/100
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        {scoreRows.map((row) => {
          const value = score[row.key];
          const width = `${Math.round((value / row.max) * 100)}%`;

          return (
            <div key={row.key}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-bold text-[#4B2838]">{row.label}</p>
                <p className="shrink-0 text-sm font-black text-[#9E5E73]">
                  {value}/{row.max}
                </p>
              </div>
              <div
                className="mt-2 h-3 overflow-hidden rounded-full bg-[#F9E0E3]"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#D8788D] to-[#EAA3AD]"
                  style={{ width }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 rounded-2xl bg-[#FFF4F5] p-4 text-lg font-black leading-8 text-[#4B2838]">
        🎯 Elins poäng: {score.total}/100 — “{score.verdict}”
      </p>

      <details className="mt-4 rounded-2xl border border-[#F1D8DD] bg-[#FFF9F7] p-4 text-sm leading-7 text-[#6f5a64]">
        <summary className="cursor-pointer font-black text-[#9E5E73]">
          Så bedömer Elin
        </summary>
        <p className="mt-3">
          Poängen är Elins redaktionella helhetsbedömning (av 100), baserad på
          värde för pengarna, prestanda, hur väl produkten håller vad den lovar
          enligt omdömen, och hur beprövad den är. Det är vår bedömning – inte
          ett kundbetyg.
        </p>
      </details>
    </section>
  );
}
