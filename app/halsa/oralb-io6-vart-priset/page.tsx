// 2026-10-08: Refresh query-led metadata; product facts and price dates unchanged.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { toothbrushUpgradeGuide } from "@/lib/toothbrush-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: "Oral-B iO 6 eller iO 5 – är iO 6 värd mer?", description: "iO 6 har en display, medan iO 5 och iO 6 delar borsthuvudssystem. Välj efter återkopplingen du vill använda och kontrollera det svenska paketet.", url: `${siteConfig.url}${toothbrushUpgradeGuide.path}` });
export default function ToothbrushGuidePage() { return <DecisionGuidePage guide={toothbrushUpgradeGuide} />; }
