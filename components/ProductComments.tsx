import { MessageCircle, Star } from "lucide-react";

import type { Product } from "@/lib/products";
import type { ApprovedProductReview } from "@/lib/reviews/reviews";
import { ReviewForm } from "./ReviewForm";

type ProductCommentsProps = {
  product: Product;
  reviews: ApprovedProductReview[];
  turnstileSiteKey?: string;
};

function formatReviewDate(date: string) {
  return new Intl.DateTimeFormat("sv-SE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export function ProductComments({
  product,
  reviews,
  turnstileSiteKey,
}: ProductCommentsProps) {
  return (
    <section
      id="recensioner"
      className="rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
            Community
          </p>
          <h2 className="mt-2 font-display text-3xl leading-tight text-[#4B2838]">
            Recensioner från våra besökare
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#6f5a64]">
            Recensionerna är inskickade av besökare. Vi kräver bekräftelse på
            egen erfarenhet och granskar varje recension manuellt innan den
            publiceras.
          </p>
        </div>
        <a
          href="#skriv-recension"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#E1A5B0] bg-white/72 px-5 font-black text-[#9E5E73] transition hover:bg-[#FFF4F5]"
        >
          <MessageCircle size={17} aria-hidden="true" />
          Skriv en recension
        </a>
      </div>

      {reviews.length > 0 ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-[1.35rem] border border-[#F1D8DD] bg-[#FFF4F5] p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-black text-[#4B2838]">
                    {review.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-[#9a7884]">
                    {review.publicAlias} · {formatReviewDate(review.createdAt)}
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-[#F9DDE2] px-3 py-1 text-sm font-black text-[#9E5E73]">
                  <Star size={15} fill="currentColor" aria-hidden="true" />
                  {review.rating}/5
                </div>
              </div>
              <p className="mt-4 leading-7 text-[#6f5a64]">{review.body}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-5 flex gap-4 rounded-[1.35rem] border border-[#F1D8DD] bg-[#FFF4F5] p-5 text-[#D8788D]">
          <MessageCircle className="mt-1 shrink-0" size={22} aria-hidden="true" />
          <div>
            <h3 className="font-black text-[#4B2838]">
              Inga godkända recensioner än.
            </h3>
            <p className="mt-2 leading-7 text-[#6f5a64]">
              De första riktiga besökarrecensionerna visas här efter manuell
              granskning. Vi publicerar inte påhittade omdömen.
            </p>
          </div>
        </div>
      )}

      <div
        id="skriv-recension"
        className="mt-7 rounded-[1.6rem] border border-[#F1D8DD] bg-[#FFF9F7] p-5"
      >
        <h3 className="font-display text-2xl text-[#4B2838]">
          Dela din ärliga åsikt
        </h3>
        <p className="mt-2 leading-7 text-[#6f5a64]">
          Din recension sparas som pending och publiceras först efter manuell
          granskning hos oss.
        </p>
        <div className="mt-5">
          <ReviewForm product={product} turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </section>
  );
}
