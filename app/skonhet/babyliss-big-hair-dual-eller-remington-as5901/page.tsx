import { PartnerComparisonPage } from "@/components/PartnerComparisonPage";
import { getPartnerComparison, partnerComparisonMetadata } from "@/lib/partner-comparisons";
// 2026-09-22: Source-led comparison in canonical partner records.
const page = getPartnerComparison("c9");
export const metadata = partnerComparisonMetadata(page);
export const revalidate = 3600;
export default function Page() { return <PartnerComparisonPage page={page} />; }
