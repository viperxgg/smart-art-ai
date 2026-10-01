// 2026-10-01: Add contextual links to the wave-2 questions; existing decision prose preserved.
// 2026-10-01: Source-led wave-2 question; existing URL preserved where applicable.
import { SelectedProductPage } from "@/components/SelectedProductPage";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";
const product = getSelectedProduct("olaplex-no7-bonding-oil-30ml");
export const revalidate = 3600;
export const metadata = selectedProductMetadata(product);
export default function Page() { return <SelectedProductPage product={product} />; }
