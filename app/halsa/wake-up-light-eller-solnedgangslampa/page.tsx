import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { wakeUpSunsetGuide } from "@/lib/wake-up-light-eller-solnedgangslampa";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${wakeUpSunsetGuide.title} | Elins val`, description: wakeUpSunsetGuide.intro, url: `${siteConfig.url}${wakeUpSunsetGuide.path}` });
export default function WakeUpLightEllerSolnedgangslampaPage() { return <DecisionGuidePage guide={wakeUpSunsetGuide} />; }
