import Link from "next/link";
import { MessageCircle, Quote, ShieldCheck, Star } from "lucide-react";

type AmazonQuote = {
  text: string;
  attribution: string;
};

type TrustReviewLayersProps = {
  editorialVerdict: string;
  amazonSummary: string;
  amazonQuotes?: AmazonQuote[];
  reviewHref?: string;
};

export function TrustReviewLayers({
  editorialVerdict,
  amazonSummary,
  amazonQuotes = [],
  reviewHref = "#recensioner",
}: TrustReviewLayersProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#F9DDE2] text-[#B983A6]">
            <ShieldCheck size={21} aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
              Redaktionellt urval
            </p>
            <h2 className="font-display text-3xl text-[#4B2838]">Elins val</h2>
          </div>
        </div>
        <p className="mt-5 leading-8 text-[#6f5a64]">{editorialVerdict}</p>
      </article>

      <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#F9DDE2] text-[#B983A6]">
            <Star size={21} aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
              Amazon
            </p>
            <h2 className="font-display text-3xl text-[#4B2838]">
              Vad Amazon-köparna säger
            </h2>
          </div>
        </div>
        <p className="mt-5 leading-8 text-[#6f5a64]">{amazonSummary}</p>
        {amazonQuotes.length > 0 ? (
          <div className="mt-5 space-y-3">
            {amazonQuotes.map((quote) => (
              <blockquote
                key={`${quote.attribution}-${quote.text}`}
                className="rounded-2xl bg-[#FFF4F5] p-4"
              >
                <Quote
                  className="text-[#D8788D]"
                  size={18}
                  aria-hidden="true"
                />
                <p className="mt-2 font-bold leading-6 text-[#4B2838]">
                  “{quote.text}”
                </p>
                <footer className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-[#9a7884]">
                  {quote.attribution}
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <p className="mt-5 rounded-2xl bg-[#FFF4F5] p-4 text-sm leading-6 text-[#6f5a64]">
            Inga korta Amazon-citat publicerade än. Vi lägger bara till citat
            när källan är tydlig.
          </p>
        )}
      </article>

      <article className="rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#F9DDE2] text-[#B983A6]">
            <MessageCircle size={21} aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
              Riktiga läsare
            </p>
            <h2 className="font-display text-3xl text-[#4B2838]">
              Vår community
            </h2>
          </div>
        </div>
        <p className="mt-5 leading-8 text-[#6f5a64]">
          Har du provat den? Bli först med att dela din ärliga åsikt.
        </p>
        <Link
          href={reviewHref}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#E1A5B0] bg-white/72 px-5 font-black text-[#9E5E73] transition hover:bg-[#FFF4F5]"
        >
          Skriv en recension
          <MessageCircle size={18} aria-hidden="true" />
        </Link>
      </article>
    </section>
  );
}
