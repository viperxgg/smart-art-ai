// 2026-10-08: Refresh query-led metadata; product facts and price dates unchanged.
// 2026-10-04: Approved local price recheck or held-route discovery update; editorial facts and publication state preserved.
// 2026-10-01: Add contextual links to the wave-2 questions; existing decision prose preserved.
// Content refresh 2026-09-29: reviewed merchant paths and source link attributes.
// 2026-09-22: Add contextual links to the source-led partner decisions.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { airStylerOrStraightenerGuide as guide } from "@/lib/varmluftsborste-eller-plattang";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: "AS126E formar med luft och tillbehör efter förtorkning. S8540 använder plattor på helt torrt hår. Välj verktyg efter momentet du saknar i din rutin.", url: `${siteConfig.url}${guide.path}` });
export default function Page() { return <><WebPageJsonLd path={guide.path} name={guide.title} publishedAt="2026-06-19" /><DecisionGuidePage guide={guide} /></>; }
