// 2026-10-01: Add contextual links to the wave-2 questions; existing decision prose preserved.
// Content refresh 2026-09-29: editorial attribution, method, sourced questions and offer eligibility.
// 2026-09-22: Add contextual links to the source-led partner decisions.
import { SelectedProductPage } from "@/components/SelectedProductPage";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";

const product = getSelectedProduct("redken-acidic-bonding-leave-in-150ml");
export const metadata = selectedProductMetadata(product);
export const revalidate = 3600;

export default function Page() {
  return <SelectedProductPage product={product} />;
}
