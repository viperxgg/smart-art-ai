import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  snigelslemEllerHyaluronsyraComparisonRows,
  snigelslemEllerHyaluronsyraFaqItems,
  snigelslemEllerHyaluronsyraPicks,
  snigelslemEllerHyaluronsyraRelatedLinks,
} from "@/lib/snigelslem-eller-hyaluronsyra";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/snigelslem-eller-hyaluronsyra`;

const heroImage = {
  src: "/comparisons/snigelslem-eller-hyaluronsyra.webp",
  alt: "Snigelslem eller hyaluronsyra? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Snigelslem eller hyaluronsyra?", href: `/skonhet/snigelslem-eller-hyaluronsyra` },
];

export const metadata = createSeoMetadata({
  title: "Snigelslem eller hyaluronsyra? Bästa fukten | Elins val",
  description: "Snigelslem eller hyaluronsyra? Elin jämför närande K-beauty-fukt mot en lätt hyaluronsyra-boost så du väljer rätt återfuktning för din hud.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function SnigelslemEllerHyaluronsyraPage() {
  return (
    <DecisionComparisonPage
      h1={"Snigelslem eller hyaluronsyra?"}
      intro={"Snigelslem (snail mucin) och hyaluronsyra är två populära återfuktande favoriter, men känns lite olika på huden. Snigelslem ger en mjuk, närande och lite geggig fukt som huden suger åt sig, medan hyaluronsyra är en lätt fuktbomb som drar åt sig och binder vatten i huden."}
      badges={["Återfuktning","Närande vs lätt","K-beauty"]}
      howToChoose={"Välj snigelslem om du vill ha en närande, mjukgörande fukt och gillar den lite geggiga känslan som huden suger upp – populärt för torr, trött hud. Välj hyaluronsyra om du vill ha en lätt, snabbt insugen fuktboost som fungerar bra under fuktkräm. Många lagrar faktiskt hyaluronsyra först och snigelslem ovanpå."}
      verdict={"Båda är snälla fuktgivare. Snigelslem vinner för en närande, mjukgörande känsla, medan hyaluronsyra vinner för en lätt, snabb fuktboost. Vill du bara ha en – välj snigelslem för torr hud och hyaluronsyra om du vill ha något lätt under kräm."}
      heroImage={heroImage}
      picks={snigelslemEllerHyaluronsyraPicks}
      comparisonRows={snigelslemEllerHyaluronsyraComparisonRows}
      faqItems={snigelslemEllerHyaluronsyraFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={snigelslemEllerHyaluronsyraRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
