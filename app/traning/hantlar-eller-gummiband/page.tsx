import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  hantlarEllerGummibandComparisonRows,
  hantlarEllerGummibandFaqItems,
  hantlarEllerGummibandPicks,
  hantlarEllerGummibandRelatedLinks,
} from "@/lib/hantlar-eller-gummiband";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/hantlar-eller-gummiband`;

const heroImage = {
  src: "/comparisons/hantlar-eller-gummiband.webp",
  alt: "Hantlar eller gummiband? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Hantlar eller gummiband?", href: `/traning/hantlar-eller-gummiband` },
];

export const metadata = createSeoMetadata({
  title: "Hantlar eller gummiband? Bäst för hemmaträning | Elins val",
  description: "Hantlar eller gummiband? Elin jämför fast, ökbar vikt mot följsamt, platssnålt motstånd så du väljer rätt för att komma igång med styrka hemma.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function HantlarEllerGummibandPage() {
  return (
    <DecisionComparisonPage
      h1={"Hantlar eller gummiband?"}
      intro={"Hantlar och gummiband är två av de vanligaste sätten att komma igång med styrketräning hemma, men de känns olika. Hantlar ger ett fast, tydligt motstånd som är lätt att öka i steg, medan gummiband ger ett följsamt motstånd som är skonsamt mot lederna och tar nästan ingen plats."}
      badges={["Hemmaträning","Fast vikt vs följsamt","Nybörjare"]}
      howToChoose={"Välj hantlar om du vill ha ett tydligt, mätbart motstånd och gilla känslan av att lyfta en fast vikt – lätt att följa progression. Välj gummiband om du vill ha något som tar minimal plats, är skonsamt mot lederna och lätt att ta med, perfekt för mindre utrymmen och resa. Många börjar med band och kompletterar med hantlar."}
      verdict={"Båda funkar för att komma igång. Hantlar vinner för tydligt, ökbart motstånd och känslan av riktig vikt, medan gummiband vinner för plats, pris och skonsamhet. Har du ont om plats – band. Vill du bygga tydlig styrka – hantlar."}
      heroImage={heroImage}
      picks={hantlarEllerGummibandPicks}
      comparisonRows={hantlarEllerGummibandComparisonRows}
      faqItems={hantlarEllerGummibandFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={hantlarEllerGummibandRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
