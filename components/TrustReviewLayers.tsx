import type { CSSProperties } from "react";
import Link from "next/link";
import { MessageCircle, Quote, Star } from "lucide-react";

import { formatRatingSummary } from "@/lib/ratings";

type AmazonQuote = {
  text: string;
  attribution: string;
};

type TrustReviewLayersProps = {
  amazonSummary: string;
  ratingCheckedAt?: string;
  amazonQuotes?: AmazonQuote[];
  reviewHref?: string;
};

export function TrustReviewLayers({
  amazonSummary,
  ratingCheckedAt,
  amazonQuotes = [],
  reviewHref = "#recensioner",
}: TrustReviewLayersProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <article className="reveal-fade rounded-[2rem] border border-line bg-surface/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-rose/15 text-wine">
            <Star size={21} aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-rose">
              Amazon
            </p>
            <h2 className="editorial-color-kiss font-display text-3xl">
              Vad Amazon-köparna säger
            </h2>
          </div>
        </div>
        <p className="mt-5 leading-8 text-ink-soft">
          {formatRatingSummary(amazonSummary, ratingCheckedAt)}
        </p>
        {amazonQuotes.length > 0 ? (
          <div className="mt-5 space-y-3">
            {amazonQuotes.map((quote) => (
              <blockquote
                key={`${quote.attribution}-${quote.text}`}
                className="rounded-2xl bg-rose/8 p-4"
              >
                <Quote
                  className="text-rose"
                  size={18}
                  aria-hidden="true"
                />
                <p className="mt-2 font-bold leading-6 text-ink">
                  “{quote.text}”
                </p>
                <footer className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-ink-soft">
                  {quote.attribution}
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <p className="mt-5 rounded-2xl bg-rose/8 p-4 text-sm leading-6 text-ink-soft">
            Inga korta Amazon-citat publicerade än. Vi lägger bara till citat
            när källan är tydlig.
          </p>
        )}
      </article>

      <article className="reveal-fade rounded-[2rem] border border-line bg-surface/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]" style={{ "--i": 1 } as CSSProperties}>
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-rose/15 text-wine">
            <MessageCircle size={21} aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-rose">
              Riktiga läsare
            </p>
            <h2 className="editorial-color-kiss font-display text-3xl">
              Vår community
            </h2>
          </div>
        </div>
        <p className="mt-5 leading-8 text-ink-soft">
          Har du provat den? Bli först med att dela din ärliga åsikt.
        </p>
        <Link
          href={reviewHref}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-rose/45 bg-surface/72 px-5 font-black text-wine transition hover:bg-rose/8"
        >
          Skriv en recension
          <MessageCircle size={18} aria-hidden="true" />
        </Link>
      </article>
    </section>
  );
}
