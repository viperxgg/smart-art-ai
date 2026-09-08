import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { makeupCleansingGuide as guide } from "@/lib/rengoringsolja-eller-micellarvatten";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title + " | Elins val", description: guide.intro, url: siteConfig.url + guide.path });
export default function MakeupCleansingPage() { return <DecisionGuidePage guide={guide} />; }
