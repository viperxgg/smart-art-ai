import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  mideaFz10FlaktProduct,
  xiaomiStandingFanProduct,
} from "@/lib/products";

export const tornflaktEllerBordsflaktFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på tornfläkt och bordsfläkt?","answer":"En tornfläkt är hög och smal, oscillerar och sprider luften brett för att svalka ett helt rum. En bordsfläkt är liten och ger en riktad luftström precis där du sitter, och är lätt att flytta."},{"question":"Vilken svalkar hela sovrummet bäst?","answer":"Tornfläkten, eftersom den oscillerar och sprider luften brett över rummet. En bordsfläkt svalkar mest dig själv och når inte hela rummet på samma sätt."},{"question":"Vilken är tystast?","answer":"Tornfläktar är ofta byggda för tystare gång, vilket gör dem populära i sovrummet. Ljudnivån varierar dock mellan modeller och hur högt du kör fläkten."},{"question":"Vilken tar minst plats?","answer":"En bordsfläkt tar minst plats och får plats på skrivbordet eller en hylla. En tornfläkt står på golvet men tar liten golvyta tack vare den smala formen."}];

export const tornflaktEllerBordsflaktComparisonRows = [["Snabba signaler","Hög och smal; oscillerar; hela rummet","Liten och riktad; sval luft där du sitter"],["Bäst för","Svalka sovrum och vardagsrum","Punktkyla vid skrivbord och säng"],["Luftspridning","Brett, oscillerande","Riktad mot dig"],["Placering","Golv, tar liten yta","Bord, hylla – lätt att flytta"],["Ljud","Ofta tystare","Beror på modell och läge"],["Prisläge","Mellan","Budget"],["Elins poäng","86/100","84/100"]] as const;

export const tornflaktEllerBordsflaktPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: mideaFz10FlaktProduct,
    path: "/halsa/flakt/midea-fz10",
    badge: "Hela rummet",
    headline: "Midea FZ10 tornfläkt – sprider svalkan brett",
    shortBody: "Välj tornfläkten om du vill svalka hela rummet. Den oscillerar och sprider luften brett, och den höga, smala formen tar liten golvyta.",
  },
  {
    product: xiaomiStandingFanProduct,
    path: "/halsa/bordsflakt",
    badge: "Riktad svalka",
    headline: "Xiaomi bordsfläkt – sval luft där du sitter",
    shortBody: "Välj bordsfläkten om du mest vill ha sval luft riktad mot dig själv. Den är liten, lätt att flytta och ger snabb punktkyla vid skrivbordet.",
  },
];

export const tornflaktEllerBordsflaktRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/flakt/midea-fz10","label":"Tornfläkt","text":"Läs Elins recension av Midea FZ10 tornfläkt."},{"href":"/halsa/bordsflakt","label":"Bordsfläkt","text":"Läs Elins recension av Xiaomi bordsfläkt."},{"href":"/halsa/dreo-cruiser-pro-eller-honeywell-ht900e","label":"Fläkt-jämförelse","text":"Dreo eller Honeywell? Se den jämförelsen."},{"href":"/halsa/flakt","label":"Fläkt","text":"Se alla Elins fläktar för sommaren."}];
