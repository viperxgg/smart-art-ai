import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  proironNeopreneDumbbellsProduct,
  elvireMinibandProduct,
} from "@/lib/products";

export const hantlarEllerGummibandFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på hantlar och gummiband?","answer":"Hantlar ger ett fast, tydligt motstånd som är lätt att mäta och öka i steg. Gummiband ger ett följsamt motstånd som ökar ju mer du sträcker dem, är skonsamt mot lederna och tar nästan ingen plats."},{"question":"Vilket är bäst för nybörjare?","answer":"Både funkar för nybörjare. Gummiband är skonsamma och lätta att börja med, medan hantlar ger en tydligare känsla av att lyfta vikt. Många börjar med band och kompletterar med hantlar när de vill ha mer."},{"question":"Vilket tar minst plats?","answer":"Gummiband tar klart minst plats och väger nästan inget, vilket gör dem perfekta för små lägenheter och att ta med på resan. Hantlar kräver mer förvaring."},{"question":"Kan jag bygga styrka med bara gummiband?","answer":"Ja, gummiband ger ett fullgott motstånd och räcker långt för styrka och muskeluthållighet, särskilt som nybörjare. Vill du lyfta tyngre och mäta progression tydligt är hantlar ett bra nästa steg."}];

export const hantlarEllerGummibandComparisonRows = [["Snabba signaler","Fast, tydligt motstånd; ökbart","Följsamt motstånd; skonsamt och platssnålt"],["Progression","Lätt att öka i steg","Fler nivåer men mindre exakt"],["Plats","Tar plats och väger","Tar nästan ingen plats"],["Skonsamt mot leder","Beror på övning","Ja – mjukt motstånd"],["Ta med på resa","Nej – tungt","Ja – väger nästan inget"],["Bäst för","Tydlig styrkeuppbyggnad","Små ytor, resa, rehab"],["Elins poäng","86/100","84/100"]] as const;

export const hantlarEllerGummibandPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: proironNeopreneDumbbellsProduct,
    path: "/traning/hantlar/proiron-neopren",
    badge: "Tydlig vikt",
    headline: "PROIRON neoprenhantlar – fast, ökbart motstånd",
    shortBody: "Välj hantlar om du vill ha ett tydligt, mätbart motstånd. De är lätta att greppa och gör det enkelt att följa progression och öka i steg.",
  },
  {
    product: elvireMinibandProduct,
    path: "/traning/miniband",
    badge: "Platssnålt",
    headline: "Elvire miniband – följsamt och skonsamt",
    shortBody: "Välj gummiband om du vill ha något som tar minimal plats och är skonsamt mot lederna. Lätt att ta med och perfekt för mindre utrymmen och resa.",
  },
];

export const hantlarEllerGummibandRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/hantlar/proiron-neopren","label":"Hantlar","text":"Läs Elins recension av PROIRON neoprenhantlar."},{"href":"/traning/miniband","label":"Gummiband","text":"Läs Elins recension av Elvire miniband."},{"href":"/traning","label":"Träning","text":"Se alla Elins val för hemmaträning."}];
