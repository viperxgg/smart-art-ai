import { SelectedProductPage } from "@/components/SelectedProductPage";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";
// 2026-09-22: Extend the existing PLUS intent; do not create a competing URL.
const product = getSelectedProduct("olaplex-no3-plus");
export const revalidate = 3600;
export const metadata = selectedProductMetadata(product);
export default function Page() { return <SelectedProductPage product={product} />; }
