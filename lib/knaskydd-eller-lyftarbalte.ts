import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  rehbandKneeProduct,
  cpSportsBeltProduct,
} from "@/lib/products";

export const knaskyddEllerLyftarbalteFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad gör 5 mm neopren i ett knäskydd?","answer":"Tjockleken ger både värme och en stadig, omslutande känsla runt knät – 5 mm är standarden för styrketräning. Värmen gör att många upplever knäna som smidigare genom passet."},{"question":"När i ett pass används lyftarbältet?","answer":"Främst i de tyngsta seten av marklyft och knäböj – inte genom hela passet. Du spänner bålen mot bältet i lyftet och lossar det mellan seten."},{"question":"Behöver nybörjare knäskydd eller bälte?","answer":"Oftast inte från start. Båda är redskap som gör mest nytta när vikterna börjar bli tunga – lär dig tekniken först, och lägg till stöd när dina lyft faktiskt kräver det."},{"question":"Vilken storlek ska man välja på knäskydd?","answer":"Rehbands skydd ska sitta tajt utan att skära av – mät runt knät och följ storleksguiden noga. För löst ger inget stöd, för trångt stör cirkulationen under längre pass."}];

export const knaskyddEllerLyftarbalteComparisonRows = [["Stöttar","Knäna","Bålen och lyftpositionen"],["Bäst i","Knäböj, utfall, benpass","Marklyft och tunga böj"],["Känsla","Värme och omslutande stöd","Fast tryck att spänna emot"],["När","Genom hela passet","De tyngsta seten"],["Nybörjarbehov","Först när vikterna ökar","Först nära tyngre max"],["Elins poäng","74/100","74/100"]] as const;

export const knaskyddEllerLyftarbaltePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: rehbandKneeProduct,
    path: "/traning/knaskydd",
    badge: "För knäna",
    headline: "Rehband RX 5 mm – värme och stöd i böjen",
    shortBody: "Välj knäskydden när det är knäna som känns i knäböj och utfall: 5 mm neopren ger värme och en stadig, omslutande känsla genom hela benpasset.",
  },
  {
    product: cpSportsBeltProduct,
    path: "/traning/lyftarbalte",
    badge: "För bålen",
    headline: "C.P. Sports T9 – något att spänna emot",
    shortBody: "Välj bältet när marklyft och böj blir tunga: ett justerbart bälte ger bålen något att pressa emot så du håller positionen i de tyngsta seten.",
  },
];

export const knaskyddEllerLyftarbalteRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/knaskydd","label":"Knäskydd","text":"Läs Elins genomgång av Rehband RX 5 mm."},{"href":"/traning/lyftarbalte","label":"Lyftarbälte","text":"Läs Elins genomgång av C.P. Sports T9."},{"href":"/traning/tyngdvast-eller-lyftarbalte","label":"Jämförelse","text":"Tyngdväst eller lyftarbälte – vilket lyfter din träning?"},{"href":"/traning/kettlebell","label":"Kettlebell","text":"Mångsidig styrka och kondition hemma."}];
