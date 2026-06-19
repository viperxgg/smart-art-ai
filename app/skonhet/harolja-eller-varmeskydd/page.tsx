import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  haroljaEllerVarmeskyddComparisonRows,
  haroljaEllerVarmeskyddFaqItems,
  haroljaEllerVarmeskyddPicks,
  haroljaEllerVarmeskyddRelatedLinks,
} from "@/lib/harolja-eller-varmeskydd";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/harolja-eller-varmeskydd`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Hårolja eller värmeskydd?", href: "/skonhet/harolja-eller-varmeskydd" },
];

export const metadata = createSeoMetadata({
  title: "Hårolja eller värmeskydd - vad behöver ditt sommarhår? | Elins val",
  description:
    "Elin jämför Moroccanoil hårolja och L'Oréal Elvital värmeskydd: glans och mjukhet eller skydd före värmestyling.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${haroljaEllerVarmeskyddPicks[1].product.image}`,
    width: 1200,
    height: 900,
    alt: haroljaEllerVarmeskyddPicks[1].product.imageAlt,
  },
});

export default function HaroljaEllerVarmeskyddPage() {
  return (
    <DecisionComparisonPage
      h1="Hårolja eller värmeskydd?"
      intro="De löser olika problem. Värmeskydd skyddar håret vid föning, plattång och locktång. Hårolja vårdar, ger glans och tämjer torrt eller solslitet hår."
      badges={["Skyddar vid värme", "Glans & mjukhet", "Sommarvård"]}
      howToChoose="Prioritera L'Oréal Elvital Dream Length om du värmestylar ofta. Prioritera Moroccanoil Treatment om håret främst känns torrt, frissigt eller soltrött. Många använder båda: värmeskydd före styling och hårolja efteråt."
      verdict="Det här är inte en vinnare-tar-allt-jämförelse. Värmeskyddet har högre poäng och är viktigast när värmeverktyg används. Håroljan är det bättre komplementet för mjukhet, glans och finish i torrt sommarhår."
      picks={haroljaEllerVarmeskyddPicks}
      comparisonRows={haroljaEllerVarmeskyddComparisonRows}
      faqItems={haroljaEllerVarmeskyddFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={haroljaEllerVarmeskyddRelatedLinks}
    />
  );
}
