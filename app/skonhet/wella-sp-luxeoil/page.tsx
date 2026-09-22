// 2026-09-22: Add contextual links to the source-led partner decisions.
// Content refresh 2026-09-22: full product name, first-screen dosage and related oil.
import { SelectedProductPage } from "@/components/SelectedProductPage";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";

const product = getSelectedProduct("wella-sp-luxeoil-100ml");
export const metadata = selectedProductMetadata(product);
export const revalidate = 3600;

export default function Page() {
  return <SelectedProductPage product={product} />;
}
