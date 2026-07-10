import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  g5PilatesringProduct,
  bodymateYogablockProduct,
} from "@/lib/products";

export const pilatesringEllerYogablockFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på pilatesring och yogablock?","answer":"En pilatesring ger ett lätt motstånd du pressar mot, vilket aktiverar musklerna mer i pilates- och bålövningar. Ett yogablock ger stöd och höjd så du håller balansen och når golvet i yoga och stretch."},{"question":"Vilket passar pilates bäst?","answer":"Pilatesringen är gjord för pilates och lägger till motstånd i övningarna. Ett yogablock kan också användas, men det ger stöd snarare än motstånd."},{"question":"Är de nybörjarvänliga?","answer":"Ja, båda är nybörjarvänliga och tar liten plats. Ringen hjälper dig känna musklerna jobba, och blocket gör svårare positioner mer tillgängliga."},{"question":"Behöver jag båda?","answer":"Inte nödvändigtvis – det beror på om du mest gör pilates eller yoga. Gör du båda är de ett billigt och platssnålt komplement som täcker olika behov."}];

export const pilatesringEllerYogablockComparisonRows = [["Snabba signaler","Lätt motstånd att pressa mot","Ger stöd och höjd"],["Bäst för","Pilates och bålövningar","Yoga och stretch"],["Typ av hjälp","Aktiverar muskler mer","Stabilitet och räckvidd"],["Nivå","Nybörjarvänligt","Nybörjarvänligt"],["Plats","Litet – hänger undan","Litet block"],["Träningsstil","Aktiv muskelkänsla","Lugn och stödjande"],["Elins poäng","84/100","84/100"]] as const;

export const pilatesringEllerYogablockPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: g5PilatesringProduct,
    path: "/traning/pilatesring",
    badge: "Lätt motstånd",
    headline: "G5 pilatesring – aktivera musklerna mer",
    shortBody: "Välj pilatesringen om du vill lägga till motstånd i pilates- och bålövningar. Du pressar mot ringen och känner hur lår, bål och armar jobbar mer.",
  },
  {
    product: bodymateYogablockProduct,
    path: "/traning/yogablock",
    badge: "Stöd & stabilitet",
    headline: "BODYMATE yogablock – stöd i yoga och stretch",
    shortBody: "Välj yogablocket om du vill ha stöd och stabilitet i yoga. Det hjälper dig nå golvet och hålla balansen i positioner där du annars inte når.",
  },
];

export const pilatesringEllerYogablockRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/balansplatta","label":"Balansplatta","text":"Träna balans och core: Elins val av balansplatta."},{"href":"/traning/pilatesring","label":"Pilatesring","text":"Läs Elins recension av G5 pilatesring."},{"href":"/traning/yogablock","label":"Yogablock","text":"Läs Elins recension av BODYMATE yogablock."},{"href":"/traning/yogablock-eller-yogabalte","label":"Jämförelse","text":"Yogablock eller yogabälte? Se den jämförelsen."},{"href":"/traning","label":"Träning","text":"Se alla Elins val för yoga och pilates."}];
