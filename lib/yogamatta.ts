import {
  prosourcefitYogaMatProduct,
  yogatiTpeYogaMatProduct,
  type Product,
} from "@/lib/products";

export type YogamattaQuote = {
  text: string;
  attribution: string;
};

export type YogamattaPick = {
  product: Product;
  path: string;
  badge: string;
  headline: string;
  shortBody: string;
  valueHook: string;
  valueStatement: string;
  passFor: string[];
  caution: string;
  verdict: string;
  amazonSummary: string;
  amazonQuotes: YogamattaQuote[];
  comparisonNote: string;
  comparisonCta: string;
  comparisonHref: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const yogamattaFaqItems = [{"question":"Vilken har bäst grepp?","answer":"Det vet vi inte. Båda marknadsförs med grepp, men vi saknar jämförbara tester på torrt och fuktigt underlag. Varken 6 mm, TPE eller pris räcker för att utse en vinnare."},{"question":"Är mer dämpning alltid bättre?","answer":"Nej. ProsourceFits guide beskriver att mer dämpning kan ge mindre stabilitet i stående positioner. Utgå från övningen och din upplevelse av underlaget, inte bara antal millimeter."},{"question":"Hur sköter jag mattan?","answer":"För ProsourceFit anger tillverkaren avtorkning med våt trasa eller svamp och ordentlig torkning, inte maskintvätt. Överför inte detta automatiskt till YOGATI; följ skötselråden för den variant du faktiskt har."},{"question":"Behöver jag en ny matta för att börja yoga?","answer":"Inte om underlaget du redan använder fungerar för dina övningar. Beskriv först vad som saknas innan du jämför ett köp."}];

export const yogamattaComparisonRows = [["Tillverkarvariant","13 mm, NBR","Blå matta, 6 mm"],["Mått","Cirka 180 × 61 cm","183 × 61 cm"],["Grepp jämfört i test","Nej","Nej"],["Butiksvariant verifierad","Nej","Nej"]] as const;

export const yogamattaPicks: YogamattaPick[] = [
  {
    product: prosourcefitYogaMatProduct,
    path: "/traning/yogamatta/prosourcefit-13mm",
    badge: "Källbaserad genomgång",
    headline: "ProsourceFit Extra Thick Yoga and Pilates Mat – 13 mm",
    shortBody:
      "du söker extra dämpning vid golvövningar och accepterar ett mjukare underlag. Tillverkaren beskriver denna avvägning för sin tjocka matta.",
    valueHook: "Kontrollera behov och variant.",
    valueStatement:
      "½-tumsvarianten i NBR, cirka 180 × 61 cm. Tillverkaren säljer även 25 mm; blanda inte ihop dem. Vår katalogs ASIN B00FY0GW08 är inte matchad mot aktuell svensk butiksvariant.",
    passFor: ["du söker extra dämpning vid golvövningar och accepterar ett mjukare underlag. Tillverkaren beskriver denna avvägning för sin tjocka matta."],
    caution:
      "du prioriterar fast golvkontakt i stående balansövningar. Mer skum kan göra underlaget mindre stabilt; tjockast är inte automatiskt bäst.",
    verdict: "Ingen jämförande vinnare utses.",
    amazonSummary:
      "Aktuella kundbetyg är inte verifierade.",
    amazonQuotes: [],
    comparisonNote:
      "Jämför funktion och begränsningar före köp.",
    comparisonCta: "Jämför mattorna",
    comparisonHref: "/traning/yogamatta",
    reviewSectionId: "prosourcefit-yogamatta-recensioner",
    reviewFormId: "prosourcefit-yogamatta-skriv-recension",
    targetKeyword: "prosourcefit yogamatta",
    metaTitle: "ProsourceFit Extra Thick Yoga and Pilates Mat – 13 mm | Elins val",
    metaDescription:
      "ProsourceFit 13 mm: mått, NBR och avvägningen mellan dämpning och golvkontakt. Läs källorna och vad som återstår att verifiera före köp.",
  },
  {
    product: yogatiTpeYogaMatProduct,
    path: "/traning/yogamatta/yogati-tpe",
    badge: "Källbaserad genomgång",
    headline: "YOGATI Tapis Bleu – 6 mm",
    shortBody:
      "du söker en 6 mm-matta med markeringslinjer och först kan bekräfta att butiken säljer just den dokumenterade varianten.",
    valueHook: "Kontrollera behov och variant.",
    valueStatement:
      "Den blå mattan på varumärkets franska sida: 183 × 61 cm, 800 g och bärrem. TPE-materialet och kopplingen till katalogens ASIN B07ML1VMPD är inte styrkta i de lästa källorna.",
    passFor: ["du söker en 6 mm-matta med markeringslinjer och först kan bekräfta att butiken säljer just den dokumenterade varianten."],
    caution:
      "du behöver bevisat grepp med svettiga händer eller väljer efter ett löfte om att aldrig glida. Vi har inget sådant test och kan inte utse den till greppvinnare.",
    verdict: "Ingen jämförande vinnare utses.",
    amazonSummary: "Aktuella kundbetyg är inte verifierade.",
    amazonQuotes: [],
    comparisonNote:
      "Jämför funktion och begränsningar före köp.",
    comparisonCta: "Jämför mattorna",
    comparisonHref: "/traning/yogamatta",
    reviewSectionId: "yogati-tpe-yogamatta-recensioner",
    reviewFormId: "yogati-tpe-yogamatta-skriv-recension",
    targetKeyword: "yogati yogamatta",
    metaTitle: "YOGATI Tapis Bleu – 6 mm | Elins val",
    metaDescription:
      "YOGATI blå 6 mm-matta: mått och markeringslinjer enligt tillverkaren. Grepp, material och svensk butiksvariant är inte jämförande verifierade.",
  },
];

export function getOtherYogamattaPick(productSlug: string) {
  return yogamattaPicks.find((pick) => pick.product.slug !== productSlug);
}
