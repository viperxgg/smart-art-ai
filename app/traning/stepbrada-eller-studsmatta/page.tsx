import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  stepbradaEllerStudsmattaComparisonRows,
  stepbradaEllerStudsmattaFaqItems,
  stepbradaEllerStudsmattaPicks,
  stepbradaEllerStudsmattaRelatedLinks,
} from "@/lib/stepbrada-eller-studsmatta";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/stepbrada-eller-studsmatta`;

const heroImage = {
  src: "/comparisons/stepbrada-eller-studsmatta.webp",
  alt: "Stepbräda eller studsmatta? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Stepbräda eller studsmatta?", href: `/traning/stepbrada-eller-studsmatta` },
];

export const metadata = createSeoMetadata({
  title: "Stepbräda eller studsmatta? Bäst kondition hemma | Elins val",
  description: "Stepbräda eller studsmatta? Elin jämför justerbar benträning mot skonsam studsträning så du väljer rätt för kondition hemma.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function StepbradaEllerStudsmattaPage() {
  return (
    <DecisionComparisonPage
      h1={"Stepbräda eller studsmatta?"}
      intro={"Stepbräda och studsmatta ger båda pulshöjande konditionsträning hemma, men på olika sätt. En stepbräda tränar puls och ben med upp- och nedsteg i justerbar höjd, medan en fitness-studsmatta ger skonsam, lekfull studsträning som är snäll mot lederna."}
      badges={["Kondition hemma","Steg vs studs","Kul"]}
      howToChoose={"Välj en stepbräda om du vill ha en tydlig, justerbar konditionsträning för ben och puls och gilla step-pass och styrkeövningar med höjd. Välj en studsmatta om du vill ha skonsam, rolig kondition som är snäll mot knän och rygg. Stepbräda för strukturerad benträning, studsmatta för lekfull och ledvänlig puls."}
      verdict={"Båda höjer pulsen hemma. Stepbrädan vinner för justerbar, strukturerad benträning, medan studsmattan vinner för skonsam, kul kondition. Vill du träna ben och styra intensiteten – stepbräda. Vill du skona lederna och ha kul – studsmatta."}
      heroImage={heroImage}
      picks={stepbradaEllerStudsmattaPicks}
      comparisonRows={stepbradaEllerStudsmattaComparisonRows}
      faqItems={stepbradaEllerStudsmattaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={stepbradaEllerStudsmattaRelatedLinks}
      backHref={"/traning"}
      backLabel={"Tillbaka till träning"}
    />
  );
}
