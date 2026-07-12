import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { PriceTierBadge } from "@/components/PriceTierBadge";
import type { Product } from "@/lib/products";

type AmazonCtaProps = {
  href: string;
  product?: Product;
  className?: string;
  panel?: boolean;
};

export function AmazonCta({ href, product, className = "", panel = false }: AmazonCtaProps) {
  const button = (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-wine px-6 text-base font-black text-bg shadow-[0_18px_42px_rgba(109,60,77,0.3)] transition hover:-translate-y-0.5 hover:bg-wine/90 sm:text-lg"
    >
      Se aktuellt pris på Amazon
      <ArrowUpRight size={20} aria-hidden="true" />
    </a>
  );

  if (!panel) {
    return (
      <div className={className}>
        {button}
        {product ? (
          <div className="mt-3">
            <PriceTierBadge product={product} />
          </div>
        ) : null}
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          Priset visas inte här eftersom Amazon kan ändra pris och lagerstatus.
        </p>
      </div>
    );
  }

  return (
    <section
      className={`reveal-fade rounded-[2rem] border border-line bg-rose/8 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8 ${className}`}
    >
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose/15 text-wine">
          <ShieldCheck size={24} aria-hidden="true" />
        </span>
        <div className="w-full">
          <h2 className="editorial-color-kiss font-display text-3xl">
            Se produkten
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-soft">
            Kontrollera alltid aktuell information på Amazon innan köp.
          </p>
          <div className="mt-7">{button}</div>
          {product ? (
            <div className="mt-4">
              <PriceTierBadge product={product} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
