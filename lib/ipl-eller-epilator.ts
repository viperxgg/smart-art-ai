import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  braunIplPro5Product,
  braunSilkEpil9Product,
} from "@/lib/products";

export const iplEllerEpilatorFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på IPL och epilator?","answer":"IPL använder ljuspulser för att gradvis minska hårväxten över flera behandlingar. En epilator drar mekaniskt upp håret med roten varje gång, så du blir slät i veckor direkt men håret växer tillbaka."},{"question":"Vilken ger mest långvarigt resultat?","answer":"IPL kan ge det mest långvariga resultatet eftersom målet är att minska hårväxten på sikt. Det kräver dock regelbundna behandlingar under några månader innan du ser tydlig effekt."},{"question":"Passar IPL alla?","answer":"IPL fungerar bäst på ljus hud med mörkare hår, eftersom ljuset riktar in sig på pigmentet i håret. Kolla tillverkarens hud- och hårfärgsguide innan du väljer IPL."},{"question":"Vilken är snabbast att komma igång med?","answer":"Epilatorn ger resultat direkt utan väntetid. IPL kräver att du kör en kur under några månader innan du ser att hårväxten minskar."}];

export const iplEllerEpilatorComparisonRows = [["Snabba signaler","Ljuspulser; minskar hårväxt på sikt","Drar upp håret med roten; slät i veckor"],["Resultat","Gradvis minskning över månader","Direkt, håller i veckor"],["Tid att se effekt","Efter flera behandlingar","Genast"],["Passar bäst","Ljus hud med mörkare hår","De flesta hud- och hårtyper"],["Underhåll","Regelbundna kurer först, sen sällan","Var tredje–fjärde vecka"],["Känsla","Milda ljuspulser","Lite känsla, särskilt i början"],["Elins poäng","86/100","88/100"]] as const;

export const iplEllerEpilatorPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: braunIplPro5Product,
    path: "/skonhet/ipl-harborttagning",
    badge: "Minskar hårväxten",
    headline: "Braun IPL Pro 5 – långsiktigt resultat",
    shortBody: "Välj IPL om du vill minska hårväxten på sikt. Med regelbundna behandlingar under några månader upplever många att håret blir glesare och tunnare.",
  },
  {
    product: braunSilkEpil9Product,
    path: "/skonhet/epilator/braun-silk-epil-9",
    badge: "Slät direkt",
    headline: "Braun Silk-épil 9 – slät i veckor",
    shortBody: "Välj epilatorn om du vill ha ett resultat direkt som håller i veckor. Den drar upp håret med roten, utan väntetid på en längre kur.",
  },
];

export const iplEllerEpilatorRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/rakapparat-dam","label":"Rakapparat","text":"Vill du ha snabbt och enkelt? Se Elins val av rakapparat för dam."},{"href":"/skonhet/ipl-harborttagning","label":"IPL","text":"Läs Elins recension av Braun IPL Pro 5."},{"href":"/skonhet/epilator/braun-silk-epil-9","label":"Epilator","text":"Läs Elins recension av Braun Silk-épil 9."},{"href":"/skonhet/epilator-eller-rakhyvel","label":"Jämförelse","text":"Epilator eller rakhyvel? Se den jämförelsen."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hårborttagningsval."}];
