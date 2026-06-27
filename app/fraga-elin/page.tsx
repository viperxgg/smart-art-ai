import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { FragaElinChat } from "./FragaElinChat";

export const metadata = createSeoMetadata({
  title: "Fråga Elin – ärlig AI-hudvårdsrådgivare | Elins val",
  description:
    "Beskriv din hudvårdsfråga och låt Elin jämföra Hudvård-produkterna ärligt, utan att pusha köp i onödan.",
  url: `${siteConfig.url}/fraga-elin`,
  type: "website",
});

export default function FragaElinPage() {
  return <FragaElinChat />;
}
