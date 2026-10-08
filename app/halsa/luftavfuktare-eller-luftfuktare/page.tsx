// 2026-10-08: Refresh query-led metadata and contextual links; product facts and price dates unchanged.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { dehumidifierHumidifierGuide as guide } from "@/lib/dehumidifier-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: "Luftavfuktare eller luftfuktare – vad behöver du?", description: "En luftavfuktare tar bort fukt, en luftfuktare tillför den. Kontrollera luftfuktighet och orsak först; här ser du modellernas begränsningar.", url: siteConfig.url + guide.path });
export default function AirDecisionPage() { return <DecisionGuidePage guide={guide} />; }
