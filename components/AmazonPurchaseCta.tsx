import { AffiliateCaption } from "@/components/AffiliateCaption";
import type { Product } from "@/lib/products";

type AmazonPurchaseCtaProps = {
  product: Product;
  className?: string;
};

type AmazonPurchaseLinksProps = {
  products: readonly Product[];
  className?: string;
};

export function AmazonPurchaseCta({
  product,
  className = "",
}: AmazonPurchaseCtaProps) {
  return (
    <span className={`inline-flex flex-col items-stretch text-center ${className}`}>
      <a
        href={product.amazonUrl}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-wine px-6 py-3 text-center font-bold text-white transition hover:opacity-90"
      >
        Köp {product.brand} på Amazon
      </a>
      <AffiliateCaption className="mt-2" />
    </span>
  );
}

export function AmazonPurchaseLinks({
  products,
  className = "",
}: AmazonPurchaseLinksProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {products.map((product) => (
        <AmazonPurchaseCta key={product.slug} product={product} />
      ))}
    </div>
  );
}
