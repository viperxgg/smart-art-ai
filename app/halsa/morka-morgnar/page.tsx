import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { morningLightGuide } from "@/lib/morning-light-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${morningLightGuide.title} | Elins val`, description: morningLightGuide.intro, url: `${siteConfig.url}${morningLightGuide.path}` });
export default function HalsaMorkaMorgnarPage() { return <DecisionGuidePage guide={morningLightGuide} />; }
