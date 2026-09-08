import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { harinpackning } from "@/lib/bast-i-test/harinpackning";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${harinpackning.title} | Elins val`,
  description: "Jämför sex hårmasker och behandlingar efter användning, exakt variant och begränsningar. Tillverkarkällor och när du kan avstå från köp.",
  url: `${siteConfig.url}${harinpackning.path}`,
});

export default function HarinpackningPage() {
  return <DecisionGuidePage guide={harinpackning} />;
}
