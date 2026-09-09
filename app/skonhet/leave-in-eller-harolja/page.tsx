import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { leaveInOilGuide } from "@/lib/leave-in-eller-harolja";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${leaveInOilGuide.title} | Elins val`, description: leaveInOilGuide.intro, url: `${siteConfig.url}${leaveInOilGuide.path}` });
export default function LeaveInOilPage() { return <DecisionGuidePage guide={leaveInOilGuide} />; }
