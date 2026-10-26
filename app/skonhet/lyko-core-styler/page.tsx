// Content refresh 2026-09-29: editorial attribution, method, sourced questions and offer eligibility.
import { SelectedProductPage } from "@/components/SelectedProductPage";
import { CoreStylerDecision } from "@/components/CoreStylerDecision";
import { getSelectedProduct, selectedProductMetadata } from "@/lib/selected-products";

// 2026-09-22: Source-led decision guide in canonical records.
const product = getSelectedProduct("lyko-core-styler");
export const metadata = selectedProductMetadata(product);
export const revalidate = 3600;

export default function Page() {
  return <SelectedProductPage product={{ ...product, heading: "By Lyko Core Styler", answer: "För dig som vill föna, borsta och forma lockar med samma handtag. Två 30 mm-cylindrar ger olika lockriktning." }} primaryAction={<CoreStylerDecision />} />;
}
