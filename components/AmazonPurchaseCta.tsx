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
    <a
      href={product.amazonUrl}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-wine px-6 py-3 text-center font-bold text-white transition hover:opacity-90 ${className}`}
    >
      Köp {product.brand} på Amazon
    </a>
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
