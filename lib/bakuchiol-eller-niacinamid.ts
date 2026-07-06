import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  celdyqueBakuchiolProduct,
  inkeyNiacinamideSerumProduct,
} from "@/lib/products";

export const bakuchiolEllerNiacinamidFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på bakuchiol och niacinamid?","answer":"Bakuchiol är en mild, växtbaserad ingrediens som ger huden ett slätare, jämnare intryck. Niacinamid är en allround-favorit som hjälper huden att kännas balanserad och mindre glansig. Båda är skonsamma."},{"question":"Vilket är skonsammast?","answer":"Båda är milda och passar de flesta, även känsligare hud. Bakuchiol marknadsförs ofta som ett extra skonsamt alternativ, medan niacinamid är väldigt lätt att tolerera i låga halter."},{"question":"Kan jag använda båda?","answer":"Ja, de går bra att kombinera. Många lägger niacinamid tidigt i rutinen och bakuchiol efter. Inför en ny produkt i taget så du ser hur huden reagerar."},{"question":"När på dygnet ska jag använda dem?","answer":"Båda fungerar morgon och kväll. Avsluta alltid med en fuktkräm och sköt din vanliga dagrutin."}];

export const bakuchiolEllerNiacinamidComparisonRows = [["Snabba signaler","Mild, växtbaserad; slätare intryck","Allround; balanserar och lugnar"],["Bäst för","Slätare, jämnare uttryck","Glansig eller ojämn hud"],["Skonsamhet","Väldigt skonsamt","Väldigt skonsamt"],["När","Morgon eller kväll","Morgon eller kväll"],["Nybörjarvänligt","Ja","Ja"],["Kan kombineras","Ja","Ja"],["Elins poäng","84/100","86/100"]] as const;

export const bakuchiolEllerNiacinamidPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: celdyqueBakuchiolProduct,
    path: "/skonhet/bakuchiol-serum",
    badge: "Skonsamt & slätande",
    headline: "CELDYQUE bakuchiol – mild och växtbaserad",
    shortBody: "Välj bakuchiol om du vill ha en mild, växtbaserad ingrediens som ger huden ett slätare, jämnare intryck. Skonsam nog att använda även på kvällen.",
  },
  {
    product: inkeyNiacinamideSerumProduct,
    path: "/skonhet/niacinamide-serum",
    badge: "Balanserar",
    headline: "The INKEY List niacinamid – allround-favorit",
    shortBody: "Välj niacinamid om du vill ha en allrounder som hjälper huden att kännas balanserad och mindre glansig. Mild och lätt att lägga in i rutinen.",
  },
];

export const bakuchiolEllerNiacinamidRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/bakuchiol-serum","label":"Bakuchiol","text":"Läs Elins recension av CELDYQUE bakuchiol."},{"href":"/skonhet/niacinamide-serum","label":"Niacinamid","text":"Läs Elins recension av INKEY niacinamid."},{"href":"/skonhet/vitamin-c-eller-niacinamid","label":"Jämförelse","text":"Vitamin C eller niacinamid? Se den jämförelsen."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hudvårdsval."}];
