// 2026-10-04: Approved local price recheck or held-route discovery update; editorial facts and publication state preserved.
// 2026-10-01: Add contextual links to the wave-2 questions; existing decision prose preserved.
// Content refresh 2026-09-29: editorial attribution, method, sourced questions and offer eligibility.
import { SelectedProductPage } from "@/components/SelectedProductPage";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";

const product = getSelectedProduct("kerastase-glaze-drops-45ml");
export const metadata = selectedProductMetadata(product);
export const revalidate = 3600;

export default function Page() {
  return <SelectedProductPage product={product} />;
}
