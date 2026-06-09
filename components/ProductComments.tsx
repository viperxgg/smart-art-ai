import Link from "next/link";
import { MessageCircle, Star } from "lucide-react";

import type { Product } from "@/lib/products";

export function ProductComments({ product }: { product: Product }) {
  return (
    <section className="comments-panel">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div>
          <p className="text-xs font-black uppercase text-[#ff7ab8]">
            Röster från besökare
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-white">
            Vad andra faktiskt tycker
          </h2>
        </div>
        <Link href={`/review/${product.slug}`} className="comment-mini-button">
          <MessageCircle size={17} aria-hidden="true" />
          Kommentera
        </Link>
      </div>

      {product.comments.length > 0 ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {product.comments.map((comment) => (
            <article key={comment.id} className="comment-card">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-black text-white">{comment.name}</h3>
                  <p className="mt-1 text-xs font-bold text-white/45">
                    {comment.context} · {comment.date}
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-[#ffd166]/12 px-3 py-1 text-sm font-black text-[#ffd166]">
                  <Star size={15} fill="currentColor" aria-hidden="true" />
                  {comment.rating}/5
                </div>
              </div>
              <p className="mt-4 leading-7 text-white/68">{comment.text}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="comment-empty mt-5">
          <MessageCircle size={22} aria-hidden="true" />
          <div>
            <h3 className="font-black text-white">
              Inga publicerade kommentarer än.
            </h3>
            <p className="mt-2 leading-7 text-white/62">
              De första riktiga kommentarerna visas här efter manuell granskning.
              Vi publicerar inte påhittade omdömen.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
