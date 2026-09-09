import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { aromaHumidityGuide } from "@/lib/aromdiffuser-eller-luftfuktare";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Aromdiffuser eller luftfuktare – doft eller fukt? | Elins val",
  description: "Kontrollera behovet innan köp. Classic 300S har en separat aromadyna; SALKING-modellen återstår att matcha. Läs källor och begränsningar.",
  url: `${siteConfig.url}${aromaHumidityGuide.path}`,
});

export default function AromdiffuserEllerLuftfuktarePage() {
  return <DecisionGuidePage guide={aromaHumidityGuide} />;
}
