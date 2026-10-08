// 2026-10-08: Refresh query-led metadata and contextual links; product facts and price dates unchanged.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { acidSerumOrTonerGuide as guide } from "@/lib/azelainsyra-eller-aha-bha";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: "Azelainsyra eller AHA/BHA – Anua eller COSRX?", description: "Anua är ett serum; COSRX är en toner som appliceras med rondell. Jämför formulor och anvisningar innan du lägger till ett steg i hudvården.", url: `${siteConfig.url}${guide.path}` });
export default function AcidSerumOrTonerPage() { return <DecisionGuidePage guide={guide} />; }
