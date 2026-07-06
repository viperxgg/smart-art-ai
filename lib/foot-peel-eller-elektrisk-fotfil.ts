import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  plantifiqueFootPeelProduct,
  vxdoirkElektriskFotfilProduct,
} from "@/lib/products";

export const footPeelEllerElektriskFotfilFaqItems: DecisionComparisonFaqItem[] = [{"question":"Hur funkar en foot peel mask?","answer":"Du har fötterna i maskerna en stund, och under den kommande en till två veckorna flagnar torr hud av av sig själv, vilket lämnar mjukare fötter. Ryck aldrig i huden – låt den flagna naturligt."},{"question":"Gör en foot peel att fötterna ser konstiga ut ett tag?","answer":"Ja, under flagningsperioden kan fötterna se lite skalande ut. Därför är det smart att göra den ett par veckor innan du ska visa fötterna, till exempel inför sommaren."},{"question":"Vilken ger snabbast resultat?","answer":"Den elektriska fotfilen, eftersom den filar bort hård hud direkt på några minuter utan flagningsperiod. Foot peel-masken ger ett djupare men långsammare resultat."},{"question":"Kan jag använda båda?","answer":"Ja, ett vanligt upplägg är att göra en foot peel inför sommaren för ett djupare resultat och sedan underhålla med den elektriska fotfilen då och då."}];

export const footPeelEllerElektriskFotfilComparisonRows = [["Snabba signaler","Huden flagnar av sig själv över tid","Filar bort hård hud direkt"],["Resultat","Djupare, jämnare","Snabbt och kontrollerat"],["Tid","Flagnar under 1–2 veckor","Klart på några minuter"],["Flagningsperiod?","Ja – planera i tid","Nej"],["Underhåll","Några gånger per säsong","Lite då och då"],["Bäst inför","Sommaren, med framförhållning","Snabb koll innan sandalerna"],["Elins poäng","86/100","84/100"]] as const;

export const footPeelEllerElektriskFotfilPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: plantifiqueFootPeelProduct,
    path: "/skonhet/foot-peel-mask",
    badge: "Djupare resultat",
    headline: "Plantifique foot peel mask – fötterna flagnar rena",
    shortBody: "Välj foot peel mask om du vill ha ett djupare resultat. Torr hud flagnar av av sig själv under en till två veckor och lämnar mjukare fötter. Planera i tid.",
  },
  {
    product: vxdoirkElektriskFotfilProduct,
    path: "/skonhet/elektrisk-fotfil",
    badge: "Direkt & kontrollerat",
    headline: "VXDOIRK elektrisk fotfil – fila bort direkt",
    shortBody: "Välj den elektriska fotfilen om du vill ta bort hård hud direkt och underhålla då och då. Du styr själv och slipper flagningsperiod.",
  },
];

export const footPeelEllerElektriskFotfilRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/foot-peel-mask","label":"Foot peel","text":"Läs Elins recension av Plantifique foot peel mask."},{"href":"/skonhet/elektrisk-fotfil","label":"Elektrisk fotfil","text":"Läs Elins recension av VXDOIRK elektrisk fotfil."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins fotvårdsval."},{"href":"/sommar","label":"Sommar","text":"Fler av Elins sommarfixar."}];
