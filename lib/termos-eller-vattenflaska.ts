import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  stanleyClassicProduct,
  twsoulWaterBottleProduct,
} from "@/lib/products";

export const termosEllerVattenflaskaFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på en termos och en motiverande vattenflaska?","answer":"En isolerad termos håller drycken kall eller varm i timmar tack vare dubbla väggar. En motiverande vattenflaska har tidsmarkeringar som hjälper dig dricka jämnt och mer under dagen, men isolerar inte lika bra."},{"question":"Vilken håller vattnet kallt längst?","answer":"Termosen, tack vare den dubbelväggade konstruktionen. En vanlig motivationsflaska håller inte kylan lika länge, men fyller sitt syfte att påminna dig att dricka."},{"question":"Hjälper en motivationsflaska verkligen?","answer":"Många upplever att tidsmarkeringarna gör det lättare att komma ihåg att dricka jämnt över dagen. Det är ett enkelt knep för dig som vill öka ditt vattenintag."},{"question":"Kan jag ha båda?","answer":"Ja, en vanlig lösning är en termos för utflykter och när du vill hålla temperaturen, och en motivationsflaska på skrivbordet eller på gymmet för att dricka mer i vardagen."}];

export const termosEllerVattenflaskaComparisonRows = [["Snabba signaler","Dubbla väggar; håller temperatur","Tidsmarkeringar; peppar dig att dricka"],["Bäst för","Kall/varm dryck länge","Dricka mer vatten över dagen"],["Håller kallt/varmt","Ja, i timmar","Mindre isolering"],["Motiverar","Nej","Ja – tydliga mål på flaskan"],["Vardag/utflykt","Utflykt och länge borta","Skrivbord och gym"],["Vikt","Tyngre","Lättare"],["Elins poäng","88/100","84/100"]] as const;

export const termosEllerVattenflaskaPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: stanleyClassicProduct,
    path: "/halsa/termos",
    badge: "Håller temperatur",
    headline: "Stanley termos – kallt eller varmt i timmar",
    shortBody: "Välj termosen om du vill hålla drycken kall eller varm länge. De dubbla väggarna gör att iskallt vatten eller varmt kaffe håller sig i timmar.",
  },
  {
    product: twsoulWaterBottleProduct,
    path: "/halsa/motiverande-vattenflaska",
    badge: "Peppar dig dricka",
    headline: "TWSOUL motiverande vattenflaska – drick mer",
    shortBody: "Välj motivationsflaskan om ditt mål är att dricka mer vatten. Tidsmarkeringarna hjälper dig att dricka jämnt över dagen och hålla koll.",
  },
];

export const termosEllerVattenflaskaRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/termos","label":"Termos","text":"Läs Elins recension av Stanley termos."},{"href":"/halsa/motiverande-vattenflaska","label":"Vattenflaska","text":"Läs Elins recension av TWSOUL motiverande vattenflaska."},{"href":"/halsa","label":"Hälsa","text":"Se alla Elins val för vardag och hälsa."}];
