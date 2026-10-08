// 2026-10-08: Refresh query-led metadata and contextual links; product facts and price dates unchanged.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { facialBodyGuide as guide } from "@/lib/ansiktstrimmer-eller-rakapparat-dam";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: "Ansiktstrimmer dam eller rakapparat – vad behöver du?", description: "BRR454/00 är för ansiktshår. BRL159/00 är ett set för kropp och ansikte. Välj efter området du vill raka och vilka tillbehör du faktiskt behöver.", url: `${siteConfig.url}${guide.path}` });
export default function Page() { return <DecisionGuidePage guide={guide} />; }
