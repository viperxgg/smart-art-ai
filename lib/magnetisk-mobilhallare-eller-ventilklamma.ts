import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  lamicallMobilhallareBilProduct,
  blukarMobilhallareProduct,
} from "@/lib/products";

export const magnetiskMobilhallareEllerVentilklammaFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vilken mobilhållare är bäst i bilen?","answer":"Den som passar din mobil. Har du iPhone med MagSafe eller ett magnetskal är den magnetiska hållaren smidigast – en hand räcker. Utan magnet är klämhållaren det enkla valet som funkar direkt."},{"question":"Funkar magnethållare med Android?","answer":"Ja, men bara med ett magnetskal eller en klisterring på mobilen. Utan magnet fäster mobilen inte alls – då är en klämhållare som Blukar enklare."},{"question":"Sitter mobilen säkert på gropig väg?","answer":"Båda håller stadigt enligt köparna: Lamicall med 20 N52-magneter och Blukar med triangelgrepp runt mobilen. Med tungt skal utan magnet är klämman det säkrare valet."},{"question":"Skymmer de ventilationen?","answer":"Båda fäster i ventilationsgallret och täcker en ventil – det är priset för den perfekta placeringen i synlinjen. På sommarkörning: rikta en annan ventil mot dig."}];

export const magnetiskMobilhallareEllerVentilklammaComparisonRows = [["Snabba signaler","Magnet; en hand; kräver MagSafe/ring","Klämma; passar alla mobiler direkt"],["Sätta dit mobilen","Släpp den mot magneten – klart","Kläm fast – ett handgrepp till"],["Ta loss mobilen","Dra loss med en hand","En-knapps-release med en hand"],["Mobilkrav","iPhone MagSafe eller magnetring/skal","Alla mobiler 4,0–7,0 tum"],["Delad familjebil","Alla behöver magnet","Funkar för alla direkt"],["Prisläge","Mellan","Budget"],["Elins poäng","86/100","85/100"]] as const;

export const magnetiskMobilhallareEllerVentilklammaPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: lamicallMobilhallareBilProduct,
    path: "/sommar/resa/mobilhallare",
    badge: "Smidigast",
    headline: "Lamicall MagSafe – mobilen på plats med en hand",
    shortBody: "Välj magneten om du har MagSafe. 20 N52-magneter håller mobilen stadigt och du sätter dit och tar loss den med en hand.",
  },
  {
    product: blukarMobilhallareProduct,
    path: "/sommar/resa/mobilhallare-ventil",
    badge: "Passar alla",
    headline: "Blukar klämhållare – funkar med alla mobiler",
    shortBody: "Välj klämman om mobilen saknar magnet. Triangelgrepp, en-knapps-release och 360° rotation – inga tillbehör krävs.",
  },
];

export const magnetiskMobilhallareEllerVentilklammaRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/sommar/resa/mobilhallare","label":"MagSafe","text":"Läs Elins genomgång av Lamicall magnethållare."},{"href":"/sommar/resa/mobilhallare-ventil","label":"Klämma","text":"Läs Elins genomgång av Blukar klämhållare."},{"href":"/sommar/resa/billaddare","label":"Billaddare","text":"Ladda mobilen medan du navigerar."},{"href":"/sommar/resa","label":"Resa","text":"Se alla Elins val för resan."}];
