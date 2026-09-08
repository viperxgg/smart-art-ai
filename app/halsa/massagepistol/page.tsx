import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { massageGunGuide as guide } from "@/lib/massage-gun-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({ title: guide.title + " | Elins val", description: guide.intro, url: siteConfig.url + guide.path });
export default function Page() { return <DecisionGuidePage guide={guide} />; }
