import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  narweyHangandeNecessarProduct,
  traxentaNecessarProduct,
} from "@/lib/products";

export const hangandeEllerGenomskinligNecessarFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på en hängande och en genomskinlig necessär?","answer":"En hängande necessär hänger du på en krok så du når allt utan att rota, vilket är skönt på trånga hotellbadrum. En genomskinlig necessär låter dig se innehållet direkt, vilket är smidigt i säkerhetskontrollen."},{"question":"Vilken är bäst för flyget?","answer":"En liten genomskinlig necessär är smidigast i säkerhetskontrollen eftersom personalen och du själv ser innehållet. Kolla alltid flygplatsens aktuella regler för vätskor i handbagage, eftersom de varierar och kan ändras."},{"question":"Kan jag ha båda?","answer":"Ja, många reser med en hängande necessär för det mesta och en liten genomskinlig för vätskorna som ska genom säkerhetskontrollen. Då får du både ordning på plats och smidighet i kontrollen."},{"question":"Vilken rymmer mest?","answer":"Den hängande necessären är rymligast och passar för en hel resas toalettsaker, men blir ganska stor fullpackad. Den genomskinliga är mindre och gjord för att organisera smått."}];

export const hangandeEllerGenomskinligNecessarComparisonRows = [["Snabba signaler","Hängs på krok; nå allt utan att rota","Genomskinlig; se innehållet direkt"],["Bäst för","Ordning på hotellbadrummet","Säkerhetskontroll och smått"],["Storlek","Rymlig, blir stor fullpackad","Mindre, för smått"],["Ser du innehållet?","Delvis, via fack","Ja – helt genomskinlig"],["Antal","En necessär","Set med flera storlekar"],["Bäst tillsammans","Ja – för det mesta","Ja – för vätskorna"],["Elins poäng","88/100","85/100"]] as const;

export const hangandeEllerGenomskinligNecessarPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: narweyHangandeNecessarProduct,
    path: "/sommar/resa/hangande-necessar",
    badge: "Mest ordning",
    headline: "Narwey hängande necessär – häng och nå allt",
    shortBody: "Välj den hängande necessären om du vill ha ordning på hotellbadrummet. Häng den på en krok och nå toalettsaker och smått utan att rota i väskan.",
  },
  {
    product: traxentaNecessarProduct,
    path: "/sommar/resa/necessar",
    badge: "Smidig i kontrollen",
    headline: "Traxenta genomskinlig necessär – se innehållet direkt",
    shortBody: "Välj den genomskinliga necessären om du vill se innehållet direkt. Den är smidig att plocka fram i säkerhetskontrollen och lätt att hålla ordning i.",
  },
];

export const hangandeEllerGenomskinligNecessarRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/sommar/resa/hangande-necessar","label":"Hängande","text":"Läs Elins recension av Narwey hängande necessär."},{"href":"/sommar/resa/necessar","label":"Genomskinlig","text":"Läs Elins recension av Traxenta genomskinlig necessär."},{"href":"/sommar/resa/reseflaskor","label":"Reseflaskor","text":"Fyll egna produkter i läcksäkra silikonflaskor."},{"href":"/sommar/resa","label":"Resa","text":"Se alla Elins smarta reseprylar."}];
