// Content refresh 2026-09-22: first-screen cosmetic definition and related skin step.
import { SelectedProductPage } from "@/components/SelectedProductPage";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";

const product = getSelectedProduct("la-roche-posay-cicaplast-b5-100ml");
export const metadata = selectedProductMetadata(product);
export const revalidate = 3600;

export default function Page() {
  return <SelectedProductPage product={product} sizeNotice={<section aria-labelledby="storlekar" className="mt-8 rounded-2xl border border-line bg-surface p-6">
      <h2 id="storlekar" className="font-display text-2xl font-bold">40 ml eller 100 ml?</h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">Bilderna och Lyko-priset i den här guiden gäller 100 ml. Den mindre tuben på 40 ml är en separat förpackning. Vi har inget kontrollerat pris för 40 ml att jämföra med här.</p>
    </section>} />;
}
