// 2026-10-08: Refresh query-led metadata; product facts and price dates unchanged.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { hairDryerGuide as guide } from "@/lib/hair-dryer-decisions";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: "Hårtork – AC9140 eller HC 25 för din rutin?", description: "AC9140 har diffusor och separata reglage; HC 25 har hopfällbart handtag. Välj hårtork efter tillbehör och packning, inte enbart efter wattal.", url: `${siteConfig.url}${guide.path}` });
export default function Page() { return <DecisionGuidePage guide={guide} />; }
