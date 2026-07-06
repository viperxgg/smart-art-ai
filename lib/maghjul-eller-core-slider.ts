import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  amonaxAbWheelProduct,
  gorillaSlidersProduct,
} from "@/lib/products";

export const maghjulEllerCoreSliderFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på maghjul och core slider?","answer":"Ett maghjul rullas ut och in för en intensiv, tydlig magövning. Core sliders är små tallrikar du glider med på golvet för mjukare och mer varierade övningar för bål, ben och helkropp."},{"question":"Vilket är bäst för nybörjare?","answer":"Core sliders är lättare att börja med eftersom du själv styr hur långt du glider och kan hålla övningarna mjuka. Maghjulet är mer krävande och passar bäst när du har lite grundstyrka i bålen."},{"question":"Vilket ger tuffast magträning?","answer":"Maghjulet ger en väldigt intensiv magövning eftersom hela bålen jobbar när du rullar ut. Börja med korta utrullningar och öka gradvis för att skona ryggen."},{"question":"Tar de mycket plats?","answer":"Nej, båda tar minimalt med plats. Core sliders är två små tallrikar, och maghjulet rullar du undan i en låda eller garderob."}];

export const maghjulEllerCoreSliderComparisonRows = [["Snabba signaler","Rulla ut/in; intensiv magövning","Glid på golvet; mångsidiga bålövningar"],["Fokus","Mage och bål, tydligt","Bål, ben och helkropp"],["Nivå","Utmanande – kräver grundstyrka","Kan börja mjukare"],["Variation","Mest en övning","Många övningar"],["Plats","Litet – rullar undan","Väldigt litet – två tallrikar"],["Nybörjarvänligt","Mindre – börja försiktigt","Ja – anpassningsbart"],["Elins poäng","84/100","84/100"]] as const;

export const maghjulEllerCoreSliderPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: amonaxAbWheelProduct,
    path: "/traning/maghjul",
    badge: "Intensivt",
    headline: "Amonax maghjul – tuff, tydlig magövning",
    shortBody: "Välj maghjulet om du vill ha en intensiv magövning. Du rullar ut och in och utmanar bålen rejält – effektivt när du redan har lite grundstyrka.",
  },
  {
    product: gorillaSlidersProduct,
    path: "/traning/core-slider",
    badge: "Mångsidigt",
    headline: "Gorilla core sliders – glid för bål och helkropp",
    shortBody: "Välj core sliders om du vill ha mjukare, varierade övningar för bål, ben och helkropp. Du glider på golvet och kan anpassa svårighetsgraden själv.",
  },
];

export const maghjulEllerCoreSliderRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/maghjul","label":"Maghjul","text":"Läs Elins recension av Amonax maghjul."},{"href":"/traning/core-slider","label":"Core slider","text":"Läs Elins recension av Gorilla core sliders."},{"href":"/traning","label":"Träning","text":"Se alla Elins val för hemmaträning."}];
