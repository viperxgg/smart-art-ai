// 2026-10-01: Add contextual links to the wave-2 questions; existing decision prose preserved.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { leaveInOilGuide } from "@/lib/leave-in-eller-harolja";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${leaveInOilGuide.title} | Elins val`, description: leaveInOilGuide.intro, url: `${siteConfig.url}${leaveInOilGuide.path}` });
export default function LeaveInOilPage() { return <DecisionGuidePage guide={leaveInOilGuide} />; }
