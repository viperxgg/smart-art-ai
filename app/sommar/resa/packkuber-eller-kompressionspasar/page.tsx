import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  packkuberEllerKompressionspasarComparisonRows,
  packkuberEllerKompressionspasarFaqItems,
  packkuberEllerKompressionspasarPicks,
  packkuberEllerKompressionspasarRelatedLinks,
} from "@/lib/packkuber-eller-kompressionspasar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/sommar/resa/packkuber-eller-kompressionspasar`;

const heroImage = {
  src: "/comparisons/packkuber-eller-kompressionspasar.webp",
  alt: "Packkuber eller kompressionspåsar? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa", href: "/sommar/resa" },
  { name: "Packkuber eller kompressionspåsar?", href: `/sommar/resa/packkuber-eller-kompressionspasar` },
];

export const metadata = createSeoMetadata({
  title: "Packkuber eller kompressionspåsar? | Elins val",
  description: "Packkuber eller kompressionspåsar? Elin jämför ordning i väskan mot maximal platsbesparing så du packar kabinväskan smartast inför resan.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function PackkuberEllerKompressionspasarPage() {
  return (
    <DecisionComparisonPage
      h1={"Packkuber eller kompressionspåsar?"}
      intro={"Packkuber och kompressionspåsar hjälper båda dig att packa smartare, men löser olika saker. Packkuber delar upp kläderna och håller ordning i väskan, medan kompressionspåsar pressar ut luften och sparar mest plats på skrymmande plagg."}
      badges={["Ordning","Spara plats","Resa"]}
      howToChoose={"Välj packkuber om du vill ha ordning och lätt hitta rätt i väskan – en kub för överdelar, en för underdelar och så vidare. Välj kompressionspåsar om du reser med skrymmande plagg som tröjor och jackor och vill pressa ihop dem så mycket som möjligt. Många packar smartast med båda: vardagskläder i kuber och det skrymmande i kompressionspåsar."}
      verdict={"De löser olika problem. Packkuber vinner på ordning och överblick, medan kompressionspåsar vinner på ren platsbesparing för skrymmande kläder. Vill du bara ha en – välj packkuber för korta resor och kompressionspåsar när du behöver klämma in mycket."}
      heroImage={heroImage}
      picks={packkuberEllerKompressionspasarPicks}
      comparisonRows={packkuberEllerKompressionspasarComparisonRows}
      faqItems={packkuberEllerKompressionspasarFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={packkuberEllerKompressionspasarRelatedLinks}
      backHref={"/sommar/resa"}
      backLabel={"Tillbaka till Elins reseval"}
    />
  );
}
