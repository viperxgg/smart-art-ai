import { getPriceTierDisplay } from "@/lib/price-tier";
import type { Product } from "@/lib/products";

type PriceTierBadgeProps = {
  product: Product;
  className?: string;
  showContext?: boolean;
};

const explanation = "Relativ prisnivå – se aktuellt pris på Amazon.";

export function PriceTierBadge({
  product,
  className = "",
  showContext = false,
}: PriceTierBadgeProps) {
  const tier = getPriceTierDisplay(product);

  return (
    <span
      className={`inline-flex min-h-9 max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-line bg-surface/76 px-3 py-1.5 text-xs font-black text-wine shadow-[0_10px_24px_rgba(216,120,141,0.1)] ${className}`}
      title={explanation}
      aria-label={`${tier.label}. ${explanation}`}
    >
      <span aria-hidden="true">{tier.icon}</span>
      <span>{tier.label}</span>
      {showContext ? (
        <span className="font-bold normal-case text-ink-soft">
          · Se aktuellt pris på Amazon
        </span>
      ) : null}
    </span>
  );
}
