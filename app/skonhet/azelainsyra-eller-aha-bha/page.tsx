import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { acidSerumOrTonerGuide as guide } from "@/lib/azelainsyra-eller-aha-bha";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function AcidSerumOrTonerPage() { return <DecisionGuidePage guide={guide} />; }
