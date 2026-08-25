import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  azelainsyraEllerAhaBhaComparisonRows,
  azelainsyraEllerAhaBhaFaqItems,
  azelainsyraEllerAhaBhaPicks,
  azelainsyraEllerAhaBhaRelatedLinks,
} from "@/lib/azelainsyra-eller-aha-bha";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/azelainsyra-eller-aha-bha`;

const heroImage = {
  src: "/comparisons/azelainsyra-eller-aha-bha.webp",
  alt: "Azelainsyra eller AHA/BHA? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Azelainsyra eller AHA/BHA?", href: `/skonhet/azelainsyra-eller-aha-bha` },
];

export const metadata = createSeoMetadata({
  title: "Azelainsyra eller AHA/BHA? Så exfolierar du rätt | Elins val",
  description: "Mild azelainsyra eller klassisk AHA/BHA-toner? Elin jämför Anua och COSRX – vilken aktiv som passar känslig hy och vem som får bäst effekt. (Annons)",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function AzelainsyraEllerAhaBhaPage() {
  return (
    <DecisionComparisonPage
      h1={"Azelainsyra eller AHA/BHA?"}
      intro={"Båda hör till hudvårdens \"aktiva\" – men de jobbar helt olika. Azelainsyra är den milda multitalangen som passar även känslig och rodnadsbenägen hy, medan en AHA/BHA-toner är klassisk exfoliering som gör hudytan slätare och porerna renare. Elin jämför Anuas azelainsyra-serum med COSRX omtyckta toner så du väljer rätt aktiv för din hud."}
      badges={["Aktiva","Känslig hy","Jämnare hudton"]}
      howToChoose={"Välj azelainsyra om din hud är känslig eller rodnadsbenägen och du vill ha en mild aktiv som jämnar ut hudtonen utan att svida – Anuas serum kombinerar 10 procent azelainsyra med hyaluron, vilket gör den snäll nog för många att använda dagligen. Välj AHA/BHA-tonern om din hud tål mer och du främst vill ha slätare hudyta och renare porer – den används några kvällar i veckan, inte varje dag. Nybörjare på aktiva ingredienser börjar tryggast med azelainsyra."}
      verdict={"Ingen dubblett – två olika verktyg. Azelainsyran är det snälla vardagsvalet för känslig hy som vill ha jämnare ton, och COSRX-tonern är den effektivare ytputsaren för hud som tål exfoliering. Vill du så småningom använda båda: azelainsyra dagligen, tonern ett par kvällar i veckan – men aldrig samma kväll som du börjar."}
      heroImage={heroImage}
      picks={azelainsyraEllerAhaBhaPicks}
      comparisonRows={azelainsyraEllerAhaBhaComparisonRows}
      faqItems={azelainsyraEllerAhaBhaFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={azelainsyraEllerAhaBhaRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
