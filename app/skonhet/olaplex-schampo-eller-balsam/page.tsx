import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { olaplexWashGuide } from "@/lib/olaplex-schampo-eller-balsam";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${olaplexWashGuide.title} | Elins val`, description: olaplexWashGuide.intro, url: `${siteConfig.url}${olaplexWashGuide.path}` });
export default function OlaplexWashPage() { return <DecisionGuidePage guide={olaplexWashGuide} />; }
