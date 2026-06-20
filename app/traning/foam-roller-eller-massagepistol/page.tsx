import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  foamRollerEllerMassagepistolComparisonRows,
  foamRollerEllerMassagepistolFaqItems,
  foamRollerEllerMassagepistolPicks,
  foamRollerEllerMassagepistolRelatedLinks,
} from "@/lib/foam-roller-eller-massagepistol";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/foam-roller-eller-massagepistol`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
  { name: "Foam roller eller massagepistol?", href: "/traning/foam-roller-eller-massagepistol" },
];

export const metadata = createSeoMetadata({
  title: "Foam roller eller massagepistol - vad ger bäst återhämtning? | Elins val",
  description:
    "Elin jämför BODYMATE foam roller och Beurer MG 99 massagepistol: enkel återhämtning för stora muskler eller riktad vibration på punkter.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${foamRollerEllerMassagepistolPicks[0].product.image}`,
    width: 1200,
    height: 900,
    alt: foamRollerEllerMassagepistolPicks[0].product.imageAlt,
  },
});

export default function FoamRollerEllerMassagepistolPage() {
  return (
    <DecisionComparisonPage
      h1="Foam roller eller massagepistol?"
      intro="Båda används för återhämtning och stela muskler, men på olika sätt. En foam roller jobbar med din kroppsvikt mot större muskelgrupper, medan en massagepistol ger riktade vibrationer på enskilda punkter."
      badges={["Återhämtning", "Stela muskler", "Hemmabruk"]}
      howToChoose="Välj BODYMATE foam roller om du vill ha ett enkelt och billigt redskap för stora muskelgrupper. Välj Beurer MG 99 massagepistol om du vill ha riktad vibration på enskilda punkter med fler lägen. De kompletterar varandra fint i återhämtningen."
      verdict="Foam rollern får högre poäng som enkel och prisvärd allround-återhämtning för stora muskelgrupper. Massagepistolen är dyrare men ger mer riktad behandling. För de flesta är foam rollern ett tryggt förstaval."
      picks={foamRollerEllerMassagepistolPicks}
      comparisonRows={foamRollerEllerMassagepistolComparisonRows}
      faqItems={foamRollerEllerMassagepistolFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={foamRollerEllerMassagepistolRelatedLinks}
    />
  );
}
