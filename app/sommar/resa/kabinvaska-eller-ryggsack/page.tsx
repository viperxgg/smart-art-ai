import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { cabinOrBackpackGuide as guide } from "@/lib/kabinvaska-eller-ryggsack";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({ title: guide.title + " | Elins val", description: guide.intro, url: siteConfig.url + guide.path });
export default function CabinOrBackpackPage() { return <DecisionGuidePage guide={guide} />; }
