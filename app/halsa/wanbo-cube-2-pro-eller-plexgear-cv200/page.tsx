import { PartnerComparisonPage } from "@/components/PartnerComparisonPage";
import { getPartnerComparison, partnerComparisonMetadata } from "@/lib/partner-comparisons";

// 2026-09-22: Source-led comparison and linked exact variants.
const page = getPartnerComparison("c1");
export const metadata = partnerComparisonMetadata(page);
export const revalidate = 3600;

export default function Page() {
  return <PartnerComparisonPage page={page} />;
}
