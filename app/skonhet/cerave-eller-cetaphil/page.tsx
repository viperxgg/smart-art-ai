import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  ceraveEllerCetaphilComparisonRows,
  ceraveEllerCetaphilFaqItems,
  ceraveEllerCetaphilPicks,
  ceraveEllerCetaphilRelatedLinks,
} from "@/lib/cerave-eller-cetaphil";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/cerave-eller-cetaphil`;

const heroImage = {
  src: "/comparisons/cerave-eller-cetaphil.webp",
  alt: "CeraVe eller Cetaphil? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "CeraVe eller Cetaphil?", href: `/skonhet/cerave-eller-cetaphil` },
];

export const metadata = createSeoMetadata({
  title: "CeraVe eller Cetaphil – torr eller känslig hud? | Elins val",
  description: "CeraVe eller Cetaphil? CeraVe återfuktar med ceramider, Cetaphil är mildare för känslig hud. Elin jämför båda och säger vilken som passar din hudtyp.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function CeraveEllerCetaphilPage() {
  return (
    <DecisionComparisonPage
      h1={"CeraVe eller Cetaphil?"}
      intro={"CeraVe och Cetaphil är två av de mest köpta milda ansiktsrengöringarna – båda skonsamma nog för daglig användning, men med lite olika känsla. CeraVe innehåller ceramider och hyaluronsyra för en mer återfuktande rengöring, medan Cetaphil är extra mild och basic för känslig hud."}
      badges={["Mild rengöring","Känslig hud","Vardag"]}
      howToChoose={"Välj CeraVe om du har torr eller normal hud och vill att rengöringen också ska återfukta, tack vare ceramider och hyaluronsyra. Välj Cetaphil om du har känslig eller lättirriterad hud och vill ha en så mild och avskalad rengöring som möjligt. Båda passar för daglig användning morgon och kväll."}
      verdict={"Två trygga val för olika hud. CeraVe får ett litet försprång för torr hud tack vare de återfuktande ceramiderna, medan Cetaphil är förstahandsvalet för dig med känslig, reaktiv hud som vill hålla det så enkelt som möjligt."}
      heroImage={heroImage}
      picks={ceraveEllerCetaphilPicks}
      comparisonRows={ceraveEllerCetaphilComparisonRows}
      faqItems={ceraveEllerCetaphilFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={ceraveEllerCetaphilRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
