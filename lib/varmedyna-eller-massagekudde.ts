import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  beurerHeatingPadProduct,
  renphoMassagePillowProduct,
} from "@/lib/products";

export const varmedynaEllerMassagekuddeFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på värmedyna och massagekudde?","answer":"En värmedyna sprider mjuk värme som hjälper spända muskler att slappna av. En massagekudde knådar aktivt med roterande noder och bearbetar spända punkter, ofta med värme som tillägg."},{"question":"Vilken är bäst för en spänd nacke?","answer":"Vill du bara varva ner och mjuka upp med värme är en värmedyna skön. Behöver nacken mer bearbetning på spända punkter ger en massagekudde en kraftigare, knådande känsla."},{"question":"Har massagekudden också värme?","answer":"Många massagekuddar har en värmefunktion som tillägg till knådningen. Är det främst värme du vill ha räcker dock en värmedyna, som är enklare och billigare."},{"question":"Kan jag använda dem varje dag?","answer":"Ja, båda går bra att använda regelbundet för avslappning. Med massagekudden, börja med kortare pass och lyssna på kroppen så det känns skönt, inte överdrivet."}];

export const varmedynaEllerMassagekuddeComparisonRows = [["Snabba signaler","Sprider mjuk värme; avslappnande","Knådar med roterande noder; aktiv"],["Typ","Passiv värme","Aktiv massage"],["Bäst för","Lugn och nedvarvning","Bearbeta spända muskler"],["Känsla","Mjuk och skön","Kraftigare knådning"],["Har värme?","Ja – huvudfunktion","Ofta som tillägg"],["När","Kväll och avkoppling","Efter stel dag eller träning"],["Elins poäng","84/100","86/100"]] as const;

export const varmedynaEllerMassagekuddePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: beurerHeatingPadProduct,
    path: "/halsa/varmedyna",
    badge: "Mjuk värme",
    headline: "Beurer värmedyna – avslappnande värme",
    shortBody: "Välj värmedynan om du gillar mjuk, avslappnande värme mot en spänd nacke eller rygg. Enkel att luta sig mot för lugn och nedvarvning.",
  },
  {
    product: renphoMassagePillowProduct,
    path: "/halsa/massagekudde",
    badge: "Aktiv knådning",
    headline: "RENPHO massagekudde – knådar spända punkter",
    shortBody: "Välj massagekudden om du vill ha en aktiv, knådande massage. De roterande noderna jobbar på spända punkter i nacke och rygg, ofta med värme också.",
  },
];

export const varmedynaEllerMassagekuddeRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/varmedyna","label":"Värmedyna","text":"Läs Elins recension av Beurer värmedyna."},{"href":"/halsa/massagekudde","label":"Massagekudde","text":"Läs Elins recension av RENPHO massagekudde."},{"href":"/halsa/massagepistol-eller-spikmatta","label":"Jämförelse","text":"Massagepistol eller spikmatta? Se den jämförelsen."},{"href":"/halsa","label":"Hälsa","text":"Se alla Elins val för återhämtning."}];
