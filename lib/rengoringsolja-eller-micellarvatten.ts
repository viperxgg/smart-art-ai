import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  someByMiCleansingOilProduct,
  biodermaSensibioProduct,
} from "@/lib/products";

export const rengoringsoljaEllerMicellarvattenFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på rengöringsolja och micellärvatten?","answer":"En rengöringsolja löser upp även tungt och vattenfast smink och sköljs sedan av. Micellärvatten torkar bort lättare smink och smuts med en bomullspad utan att du behöver skölja."},{"question":"Vilken tar bort vattenfast mascara bäst?","answer":"Rengöringsoljan, eftersom olja löser upp vattenfast smink och solkräm mer effektivt. Micellärvatten klarar lättare smink men kan kämpa med riktigt vattenfasta produkter."},{"question":"Vilken är bäst för känslig hud?","answer":"Micellärvatten som Bioderma Sensibio är väldigt skonsamt och populärt för känslig hud. En mild rengöringsolja fungerar också bra, men skölj av ordentligt efteråt."},{"question":"Kan jag använda båda?","answer":"Ja, en klassisk dubbelrengöring är rengöringsolja först för att lösa upp smink, följt av en mild rengöring. Micellärvatten är smidigt för snabbrengöring eller på morgonen."}];

export const rengoringsoljaEllerMicellarvattenComparisonRows = [["Snabba signaler","Löser upp mycket/vattenfast smink; sköljs av","Torkar bort lättare smink; ingen sköljning"],["Bäst för","Mycket smink, solkräm, vattenfast","Lätta dagar och känslig hud"],["Sköljs av?","Ja","Nej – torka med pad"],["Skonsamt","Ja, för de flesta","Ja, särskilt för känslig hud"],["Som del av rutin","Steg 1 i dubbelrengöring","Snabbrengöring eller morgon"],["Snabbhet","Tar en stund","Mycket snabbt"],["Elins poäng","86/100","86/100"]] as const;

export const rengoringsoljaEllerMicellarvattenPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: someByMiCleansingOilProduct,
    path: "/skonhet/rengoringsolja",
    badge: "Löser upp allt",
    headline: "SOME BY MI rengöringsolja – tar bort även vattenfast",
    shortBody: "Välj rengöringsoljan om du använder mycket smink, vattenfast mascara eller solkräm. Den löser upp allt effektivt och sköljs av – perfekt första steg på kvällen.",
  },
  {
    product: biodermaSensibioProduct,
    path: "/skonhet/micellart-vatten",
    badge: "Snabbt & skonsamt",
    headline: "Bioderma Sensibio micellärvatten – snabb rengöring",
    shortBody: "Välj micellärvatten om du vill ha något snabbt och skonsamt. Du torkar bort lättare smink med en bomullspad utan att skölja – skönt för känslig hud.",
  },
];

export const rengoringsoljaEllerMicellarvattenRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/rengoringsolja","label":"Rengöringsolja","text":"Läs Elins recension av SOME BY MI rengöringsolja."},{"href":"/skonhet/micellart-vatten","label":"Micellärvatten","text":"Läs Elins recension av Bioderma Sensibio."},{"href":"/skonhet/cerave-eller-cetaphil","label":"Jämförelse","text":"CeraVe eller Cetaphil? Se den jämförelsen."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hudvårdsval."}];
