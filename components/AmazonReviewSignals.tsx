import { AlertTriangle, CheckCircle2, Star } from "lucide-react";

import type { AmazonReviewSignal } from "@/lib/products";

export function AmazonReviewSignals({
  signal,
}: {
  signal: AmazonReviewSignal;
}) {
  return (
    <section className="review-signal-panel">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase text-[#ff7ab8]">
            Kundsignaler
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-white">
            Vad recensionerna antyder
          </h2>
          <p className="mt-3 leading-7 text-white/62">
            Recensionerna används som signaler, inte som färdig säljtext. Poängen
            är att se både det som verkar starkt och det som är värt att
            dubbelkolla.
          </p>
        </div>
        <a
          href={signal.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rating-badge"
        >
          <Star size={16} fill="currentColor" aria-hidden="true" />
          {signal.ratingSummary}
        </a>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="signal-column">
          <h3 className="flex items-center gap-2 font-black text-white">
            <CheckCircle2 size={18} className="text-[#47e6a8]" />
            Styrkor som nämns
          </h3>
          <ul className="mt-4 space-y-3">
            {signal.highlights.map((item) => (
              <li key={item} className="text-sm leading-6 text-white/68">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="signal-column">
          <h3 className="flex items-center gap-2 font-black text-white">
            <AlertTriangle size={18} className="text-[#ffd166]" />
            Saker att kontrollera
          </h3>
          <ul className="mt-4 space-y-3">
            {signal.cautions.map((item) => (
              <li key={item} className="text-sm leading-6 text-white/68">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-5 text-xs leading-5 text-white/42">
        Källa: {signal.sourceLabel}. Texten här är en kort sammanfattning av
        synliga recensionsteman, inte kopierade recensioner.
      </p>
    </section>
  );
}
