import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  powerbankEllerVaggladdareComparisonRows,
  powerbankEllerVaggladdareFaqItems,
  powerbankEllerVaggladdarePicks,
  powerbankEllerVaggladdareRelatedLinks,
} from "@/lib/powerbank-eller-vaggladdare";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/sommar/resa/powerbank-eller-vaggladdare`;

const heroImage = {
  src: "/comparisons/powerbank-eller-vaggladdare.webp",
  alt: "Powerbank eller väggladdare? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa", href: "/sommar/resa" },
  { name: "Powerbank eller väggladdare?", href: `/sommar/resa/powerbank-eller-vaggladdare` },
];

export const metadata = createSeoMetadata({
  title: "Powerbank eller väggladdare? | Elins val",
  description: "Powerbank eller väggladdare på resan? Elin jämför ström på språng mot snabb laddning vid uttaget så du väljer rätt för flyget, festivalen eller hotellrummet.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function PowerbankEllerVaggladdarePage() {
  return (
    <DecisionComparisonPage
      h1={"Powerbank eller väggladdare?"}
      intro={"Powerbank och väggladdare löser samma sak – att hålla mobilen laddad på resan – men på olika sätt. En powerbank ger dig ström när det inte finns något uttag, medan en väggladdare laddar snabbt och kan ersätta flera laddare när du väl har ett uttag."}
      badges={["Ström på språng","Ladda flera","Resa"]}
      howToChoose={"Välj en powerbank om du ofta är borta från uttag – på festivalen, flyget eller långa dagar ute. Välj en väggladdare om du mest laddar på hotellrummet eller hemma och vill ha snabb laddning för både mobil och laptop i ett litet format. Många reser med båda: väggladdaren laddar allt på kvällen, powerbanken räddar dagen."}
      verdict={"Det beror på var du är. Powerbanken vinner när du behöver ström utan uttag, medan väggladdaren är smartast för snabb laddning av flera enheter när du har ett uttag. Har du plats för en av dem i väskan – välj efter hur din resdag ser ut."}
      heroImage={heroImage}
      picks={powerbankEllerVaggladdarePicks}
      comparisonRows={powerbankEllerVaggladdareComparisonRows}
      faqItems={powerbankEllerVaggladdareFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={powerbankEllerVaggladdareRelatedLinks}
      backHref={"/sommar/resa"}
      backLabel={"Tillbaka till Elins reseval"}
    />
  );
}
