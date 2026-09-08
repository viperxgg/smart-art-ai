import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { dehumidifierHumidifierGuide as guide } from "@/lib/dehumidifier-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title + " | Elins val", description: guide.intro, url: siteConfig.url + guide.path });
export default function AirDecisionPage() { return <DecisionGuidePage guide={guide} />; }
