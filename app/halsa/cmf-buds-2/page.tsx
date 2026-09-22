import { SelectedProductPage } from "@/components/SelectedProductPage";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";

// 2026-09-22: Kjell price reverified in shared product and merchant records.
const product = getSelectedProduct("cmf-buds-2-dark-grey");
export const metadata = selectedProductMetadata(product);
export const revalidate = 3600;

export default function Page() {
  return <SelectedProductPage product={product} />;
}
