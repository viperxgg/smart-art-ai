import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  cabinMaxAnodeKabinvaska,
  taygeerKabinryggsack,
} from "@/lib/products";

export const kabinvaskaEllerRyggsackFaqItems: DecisionComparisonFaqItem[] = [{"question":"Kabinväska eller ryggsäck som handbagage?","answer":"Kabinväskan rullar smidigt och skyddar innehållet i hårt skal, medan ryggsäcken rymmer mer och gör händerna fria. Vill du rulla och skydda väljer du väskan; vill du bära och packa mer väljer du ryggsäcken."},{"question":"Vilken rymmer mest?","answer":"Kabinryggsäcken – Taygeer rymmer 44 liter och öppnas helt som en resväska, mot cirka 21 liter i den underseat-stora hardcasen. Ryggsäcken tar alltså mer, men allt bärs på ryggen."},{"question":"Vilken är bäst för Ryanair?","answer":"Båda finns i kabinmått, men kontrollera alltid ditt flygbolags aktuella regler. En 40x30x20 cm hardcase ryms ofta gratis under stolen, medan en 55x40x20 cm ryggsäck kan kräva Priority eller större handbagage."},{"question":"Är en ryggsäck jobbigare att bära?","answer":"En fullpackad 44L rider på axlar och rygg, vilket blir tyngre på långa promenader än att rulla en väska. Spänn höft- och bröstremmarna så avlastas axlarna."}];

export const kabinvaskaEllerRyggsackComparisonRows = [["Snabba signaler","Hårt skal; hjul; lås","44L; öppnas helt; handsfree"],["Bäst för","Rulla & skydda innehållet","Bära, röra sig till fots"],["Kapacitet","Cirka 21 liter (underseat)","44 liter"],["Rör sig i trappor/kullersten","Kan behöva bäras","Smidigt på ryggen"],["Skydd av innehåll","Hårt skal + lås","Mjukt, mer utsatt"],["Händerna fria","Nej – du drar den","Ja"],["Elins poäng","82/100","83/100"]] as const;

export const kabinvaskaEllerRyggsackPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: cabinMaxAnodeKabinvaska,
    path: "/sommar/resa/kabinvaska",
    badge: "Rullar & skyddar",
    headline: "Cabin Max Anode – lätt hardcase på hjul",
    shortBody: "Välj väskan om du vill rulla bagaget och skydda innehållet i hårt skal. Lätt (2 kg), fyra hjul och kombinationslås i exakt kabinstorlek.",
  },
  {
    product: taygeerKabinryggsack,
    path: "/sommar/resa/resryggsack",
    badge: "Rymlig & handsfree",
    headline: "Taygeer kabinryggsäck 44L – händerna fria",
    shortBody: "Välj ryggsäcken om du vill ha händerna fria och packa mer. 44 liter, öppnas som en resväska och smidig i trappor och trånga tåg.",
  },
];

export const kabinvaskaEllerRyggsackRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/sommar/resa/kabinvaska","label":"Kabinväska","text":"Läs Elins genomgång av Cabin Max Anode."},{"href":"/sommar/resa/resryggsack","label":"Kabinryggsäck","text":"Läs Elins genomgång av Taygeer 44L."},{"href":"/sommar/resa","label":"Resa","text":"Se alla Elins val för resan och stranden."}];
