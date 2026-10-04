// 2026-10-04: Title and description aligned to the observed search intent; body and H1 preserved.
// 2026-10-01: Add contextual links to the wave-2 questions; existing decision prose preserved.
// Content refresh 2026-09-29: reviewed merchant paths and source link attributes.
// 2026-09-22: Add contextual links to the source-led partner decisions.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { hairProtectionGuide } from "@/lib/harolja-eller-varmeskydd";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: "Hårolja med värmeskydd eller separat spray?", description: "Hårolja med värmeskydd eller separat spray? Jämför Moroccanoil Original och Heat Slayer utifrån funktion, anvisningar och begränsningar.", url: `${siteConfig.url}${hairProtectionGuide.path}` });
export default function Page() { return <><WebPageJsonLd path={hairProtectionGuide.path} name={hairProtectionGuide.title} publishedAt="2026-06-19" /><DecisionGuidePage guide={hairProtectionGuide} /></>; }
