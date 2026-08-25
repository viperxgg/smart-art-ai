import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  ericFlagViktvastProduct,
  cpSportsBeltProduct,
} from "@/lib/products";

export const tyngdvastEllerLyftarbalteFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på tyngdväst och viktväst?","answer":"Ingen – det är två namn på samma redskap: en väst med vikter som gör kroppen tyngre under träning och promenader. Eric Flags modell finns med justerbar vikt upp till 10 eller 20 kg."},{"question":"Vad ger promenader med tyngdväst?","answer":"Vikten gör att kroppen jobbar hårdare i varje steg – pulsen och energiförbrukningen ökar jämfört med samma promenad utan väst. Börja med låg vikt och öka stegvis så att hållningen hålls bra."},{"question":"När behöver jag ett lyftarbälte?","answer":"Bältet blir relevant när du tränar tunga basövningar som marklyft och knäböj och vill ha hjälp att spänna bålen och hålla tekniken. För lätta vikter och maskinträning klarar sig de flesta utan."},{"question":"Kan jag använda tyngdväst och bälte samtidigt?","answer":"De används i olika situationer – västen under kroppsviktsträning och promenader, bältet under tunga stånglyft – så i praktiken kombineras de sällan i samma övning."}];

export const tyngdvastEllerLyftarbalteComparisonRows = [["Gör vad?","Lägger till vikt på kroppen","Stöttar bålen vid tunga lyft"],["Bäst för","Promenader, armhävningar, pull-ups","Marklyft, knäböj, tung stångträning"],["Träningsstil","Kroppsvikt och vardagsmotion","Styrkelyft och gymträning"],["Justerbarhet","Vikt i steg upp till 10 eller 20 kg","Storlek och åtdragning"],["Nybörjarvänlig","Ja – börja med låg vikt","Ja, men mest relevant när lyften blivit tunga"],["Elins poäng","87/100","74/100"]] as const;

export const tyngdvastEllerLyftarbaltePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: ericFlagViktvastProduct,
    path: "/traning/viktvast",
    badge: "Mer belastning",
    headline: "Eric Flag tyngdväst – gör allt lite tyngre",
    shortBody: "Välj tyngdvästen för promenader och kroppsviktsträning: justerbar vikt, tight passform och omedelbart hårdare armhävningar, utfall och pull-ups.",
  },
  {
    product: cpSportsBeltProduct,
    path: "/traning/lyftarbalte",
    badge: "Mer stöd",
    headline: "C.P. Sports bälte – stöd när det blir tungt",
    shortBody: "Välj lyftarbältet för tunga marklyft och knäböj: det hjälper dig att spänna bålen och hålla tekniken när vikterna på stången växer.",
  },
];

export const tyngdvastEllerLyftarbalteRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/viktvast","label":"Tyngdväst","text":"Läs Elins genomgång av Eric Flags viktväst."},{"href":"/traning/lyftarbalte","label":"Lyftarbälte","text":"Läs Elins genomgång av C.P. Sports bälte."},{"href":"/traning/traningsband","label":"Träningsband","text":"Komplettera hemmaträningen med motståndsband."},{"href":"/traning","label":"Träning","text":"Se alla Elins val för hemmaträning."}];
