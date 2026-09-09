import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { humidifierMethodGuide } from "@/lib/humidifier-method-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${humidifierMethodGuide.title} | Elins val`, description: humidifierMethodGuide.intro, url: `${siteConfig.url}${humidifierMethodGuide.path}` });
export default function HalsaHumidifierMethodPage() { return <DecisionGuidePage guide={humidifierMethodGuide} />; }
