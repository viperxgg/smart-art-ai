import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { leaveOnOrRinseGuide as guide } from "@/lib/bha-eller-aha-bha-peeling";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function LeaveOnOrRinsePage() { return <DecisionGuidePage guide={guide} />; }
