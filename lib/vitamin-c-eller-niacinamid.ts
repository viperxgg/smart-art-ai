import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  larochePosayVitaminC10Product,
  inkeyNiacinamideSerumProduct,
} from "@/lib/products";

export const vitaminCEllerNiacinamidFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på vitamin C och niacinamid?","answer":"Vitamin C är mest känt för att ge lyster och en jämnare, piggare hudton. Niacinamid är en mildare allrounder som uppskattas för att hjälpa huden att kännas balanserad och mindre glansig."},{"question":"Vilket serum ska jag börja med?","answer":"Vill du främst ha glow är vitamin C ett bra första steg. Vill du ha något milt och balanserande, eller har lite känsligare hud, är niacinamid en snäll start. Börja med ett serum i taget."},{"question":"Kan jag använda båda?","answer":"Ja, många använder vitamin C på morgonen för lyster och niacinamid vid ett annat tillfälle. Inför nya serum ett i taget så du ser hur huden reagerar."},{"question":"När på dygnet passar de?","answer":"Vitamin C används ofta på morgonen för en piggare hy. Niacinamid är flexibelt och fungerar både morgon och kväll. Använd alltid en fuktkräm ovanpå."}];

export const vitaminCEllerNiacinamidComparisonRows = [["Snabba signaler","Lyster och piggare hudton","Balanserar och lugnar; allround"],["Bäst för","Glow och jämnare ton","Glansig eller ojämn hud"],["När på dygnet","Ofta morgon","Morgon eller kväll"],["Känsla","Fräsch, piggande","Mild och skonsam"],["Nybörjarvänligt","Bra – börja varsamt","Mycket – väldigt mild"],["Kan kombineras","Ja, vid olika tider","Ja"],["Elins poäng","88/100","86/100"]] as const;

export const vitaminCEllerNiacinamidPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: larochePosayVitaminC10Product,
    path: "/skonhet/vitamin-c-serum",
    badge: "Ger lyster",
    headline: "La Roche-Posay Vitamin C10 – glow och jämnare ton",
    shortBody: "Välj vitamin C om du vill ha mer lyster och en piggare hudton. Det är ett populärt morgonserum för glow och en jämnare, fräschare hud.",
  },
  {
    product: inkeyNiacinamideSerumProduct,
    path: "/skonhet/niacinamide-serum",
    badge: "Balanserar",
    headline: "The INKEY List niacinamid – mild allrounder",
    shortBody: "Välj niacinamid om du vill ha en mild allrounder som hjälper huden att kännas balanserad och mindre glansig. Skonsam och lätt att gilla.",
  },
];

export const vitaminCEllerNiacinamidRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/azelainsyra-serum","label":"Azelainsyra","text":"Mot rodnad och märken: Elins val av azelainsyra-serum."},{"href":"/skonhet/vitamin-c-serum","label":"Vitamin C","text":"Läs Elins recension av La Roche-Posay Vitamin C10."},{"href":"/skonhet/niacinamide-serum","label":"Niacinamid","text":"Läs Elins recension av INKEY niacinamid."},{"href":"/skonhet/cerave-eller-cetaphil","label":"Rengöring","text":"CeraVe eller Cetaphil? Se den jämförelsen."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hudvårdsval."}];
