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
  title: "Hårolja med värmeskydd? Så väljer du | Elins val",
  description:
    "Hårolja med värmeskydd? Elin visar när du ska välja hårolja, när värmeskydd räcker och varför många använder båda.",
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
      h1="Hårolja med värmeskydd?"
      intro="Hårolja med värmeskydd låter som en genväg, men de löser olika problem. Värmeskydd används före föning, plattång och locktång, medan hårolja ger glans, mjukhet och finish efteråt."
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
