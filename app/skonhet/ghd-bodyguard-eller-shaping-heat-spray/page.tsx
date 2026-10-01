// 2026-10-01: Add contextual links to the wave-2 questions; existing decision prose preserved.
// 2026-10-01: Source-led wave-2 question; local draft, publication not recorded.
import { PartnerComparisonPage } from "@/components/PartnerComparisonPage";
import { getPartnerComparison, partnerComparisonMetadata } from "@/lib/partner-comparisons";
const page = getPartnerComparison("wave2-c1");
export const revalidate = 3600;
export const metadata = partnerComparisonMetadata(page);
export default function Page() { return <PartnerComparisonPage page={page} />; }
