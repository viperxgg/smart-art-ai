import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  rosmarinoljaEllerScalpScrubComparisonRows,
  rosmarinoljaEllerScalpScrubFaqItems,
  rosmarinoljaEllerScalpScrubPicks,
  rosmarinoljaEllerScalpScrubRelatedLinks,
} from "@/lib/rosmarinolja-eller-scalp-scrub";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/rosmarinolja-eller-scalp-scrub`;

const heroImage = {
  src: "/comparisons/rosmarinolja-eller-scalp-scrub.webp",
  alt: "Rosmarinolja eller scalp scrub? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Rosmarinolja eller scalp scrub?", href: `/skonhet/rosmarinolja-eller-scalp-scrub` },
];

export const metadata = createSeoMetadata({
  title: "Rosmarinolja eller scalp scrub? Vårda hårbotten | Elins val",
  description: "Rosmarinolja eller scalp scrub? Elin jämför att vårda och massera hårbotten mot att exfoliera och rengöra den så du väljer rätt för håret.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function RosmarinoljaEllerScalpScrubPage() {
  return (
    <DecisionComparisonPage
      h1={"Rosmarinolja eller scalp scrub?"}
      intro={"Rosmarinolja och scalp scrub är två populära sätt att pyssla om hårbotten, men de gör olika saker. Rosmarinolja masserar du in för att pyssla om hårbotten och ge håret liv, medan en scalp scrub exfolierar hårbotten och tar bort produktrester och flagor för en renare känsla."}
      badges={["Hårbotten","Vårda vs rengöra","Hår"]}
      howToChoose={"Välj rosmarinolja om du vill massera in en omtyckt olja i hårbotten som en del av din hårrutin och gilla en avslappnande massage. Välj en scalp scrub om hårbotten känns fet, kladdig eller full av produktrester och du vill exfoliera för en renare, fräschare känsla. Många exfolierar med scrub ibland och masserar in rosmarinolja däremellan."}
      verdict={"De kompletterar varandra. Rosmarinoljan vinner för att pyssla om och massera hårbotten, medan scalp scrub vinner för att exfoliera och fräscha upp. Vårda och massera – rosmarinolja. Rengöra och exfoliera – scalp scrub."}
      heroImage={heroImage}
      picks={rosmarinoljaEllerScalpScrubPicks}
      comparisonRows={rosmarinoljaEllerScalpScrubComparisonRows}
      faqItems={rosmarinoljaEllerScalpScrubFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={rosmarinoljaEllerScalpScrubRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
