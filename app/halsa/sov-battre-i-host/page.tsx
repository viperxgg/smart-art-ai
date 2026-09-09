import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { sleepEnvironmentGuide } from "@/lib/sleep-environment-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${sleepEnvironmentGuide.title} | Elins val`, description: sleepEnvironmentGuide.intro, url: `${siteConfig.url}${sleepEnvironmentGuide.path}` });
export default function HalsaSovBattreIHostPage() { return <DecisionGuidePage guide={sleepEnvironmentGuide} />; }
