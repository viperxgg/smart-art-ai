import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  iplEllerEpilatorComparisonRows,
  iplEllerEpilatorFaqItems,
  iplEllerEpilatorPicks,
  iplEllerEpilatorRelatedLinks,
} from "@/lib/ipl-eller-epilator";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/ipl-eller-epilator`;

const heroImage = {
  src: "/comparisons/ipl-eller-epilator.webp",
  alt: "IPL eller epilator? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "IPL eller epilator?", href: `/skonhet/ipl-eller-epilator` },
];

export const metadata = createSeoMetadata({
  title: "IPL eller epilator? Vilken hårborttagning passar dig | Elins val",
  description: "IPL eller epilator? Elin jämför minskad hårväxt på sikt mot slät hud i veckor direkt så du väljer rätt metod för hårborttagning hemma.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function IplEllerEpilatorPage() {
  return (
    <DecisionComparisonPage
      h1={"IPL eller epilator?"}
      intro={"IPL och epilator tar båda bort hår mer långvarigt än rakning, men fungerar helt olika. IPL använder ljuspulser för att med tiden minska hårväxten, medan en epilator drar upp håret med roten varje gång så du är slät i veckor."}
      badges={["Långvarig hårborttagning","Ljus vs mekaniskt","Skönhet"]}
      howToChoose={"Välj IPL om du är beredd att köra regelbundna behandlingar under några månader och vill se hårväxten minska med tiden. Välj en epilator om du vill ha ett resultat direkt som håller i veckor, utan väntetid, och inte har något emot lite känsla i början. IPL passar bäst på ljus hud med mörkare hår."}
      verdict={"Det handlar om tidsperspektiv. IPL vinner om du vill investera i minskad hårväxt på sikt, medan epilatorn vinner om du vill vara slät i veckor direkt utan en längre kur. Kolla att IPL passar din hud- och hårfärg innan du väljer."}
      heroImage={heroImage}
      picks={iplEllerEpilatorPicks}
      comparisonRows={iplEllerEpilatorComparisonRows}
      faqItems={iplEllerEpilatorFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={iplEllerEpilatorRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
