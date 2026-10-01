// 2026-10-01: Add contextual links to the wave-2 questions; existing decision prose preserved.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { snailOrHyaluronicGuide as guide } from "@/lib/snigelslem-eller-hyaluronsyra";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function SnailOrHyaluronicPage() { return <DecisionGuidePage guide={guide} />; }
