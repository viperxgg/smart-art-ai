import { SelectedProductPage } from "@/components/SelectedProductPage";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";

// 2026-09-22: Source-led decision guide in canonical records.
// 2026-09-29: Product-name title and H1 retain the dry-hair question.
const product = getSelectedProduct("ghd-rise");
export const metadata = selectedProductMetadata(product);
export const revalidate = 3600;

export default function Page() {
  return <SelectedProductPage product={product} />;
}
