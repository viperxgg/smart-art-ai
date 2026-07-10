import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  cosrxSnailEssenceProduct,
  minimalistHyaluronsyraSerumProduct,
} from "@/lib/products";

export const snigelslemEllerHyaluronsyraFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på snigelslem och hyaluronsyra?","answer":"Snigelslem (snail mucin) ger en närande, mjukgörande fukt med en lite geggig känsla som huden suger åt sig. Hyaluronsyra är en lätt fuktboost som snabbt sugs in och binder vatten i huden."},{"question":"Vilken är bäst för torr hud?","answer":"Snigelslem upplevs ofta som mer närande och mjukgörande, vilket passar torr och trött hud. Hyaluronsyra ger en lätt fuktboost men behöver oftast en fuktkräm ovanpå för att låsa in fukten."},{"question":"Kan jag använda båda?","answer":"Ja, en vanlig rutin är att lägga hyaluronsyra på lätt fuktig hud först och snigelslem ovanpå, och avsluta med fuktkräm. Inför en produkt i taget så du ser hur huden trivs."},{"question":"Hur använder jag hyaluronsyra rätt?","answer":"Applicera hyaluronsyra på lätt fuktig hud och lås sedan in fukten med en fuktkräm. På helt torr hud kan den kännas mindre effektiv."}];

export const snigelslemEllerHyaluronsyraComparisonRows = [["Snabba signaler","Närande, mjukgörande, lite geggig","Lätt fuktbomb; suger in snabbt"],["Bäst för","Torr, trött hud","Alla hudtyper, under kräm"],["Känsla","Fyllig och närande","Lätt och snabb"],["Konsistens","Geléaktig essens","Lätt serum"],["Använd","Efter rengöring, morgon/kväll","På lätt fuktig hud, före kräm"],["Nybörjarvänligt","Ja","Ja"],["Elins poäng","88/100","86/100"]] as const;

export const snigelslemEllerHyaluronsyraPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: cosrxSnailEssenceProduct,
    path: "/skonhet/snail-mucin-essence",
    badge: "Närande fukt",
    headline: "COSRX snigelslem – mjukgörande och närande",
    shortBody: "Välj snigelslem om du vill ha en närande, mjukgörande fukt. Den lite geggiga essensen suger huden åt sig och är populär för torr, trött hud.",
  },
  {
    product: minimalistHyaluronsyraSerumProduct,
    path: "/skonhet/hyaluronsyra-serum",
    badge: "Lätt fuktboost",
    headline: "Minimalist hyaluronsyra – lätt och snabb fukt",
    shortBody: "Välj hyaluronsyra om du vill ha en lätt fuktbomb som suger in snabbt. Den binder vatten i huden och fungerar bra under fuktkräm.",
  },
];

export const snigelslemEllerHyaluronsyraRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/centella-serum","label":"Centella","text":"Lugnar känslig hud: Elins val av centella-serum."},{"href":"/skonhet/snail-mucin-essence","label":"Snigelslem","text":"Läs Elins recension av COSRX snigelslem-essens."},{"href":"/skonhet/hyaluronsyra-serum","label":"Hyaluronsyra","text":"Läs Elins recension av Minimalist hyaluronsyra."},{"href":"/skonhet/vitamin-c-eller-niacinamid","label":"Serum","text":"Vitamin C eller niacinamid? Se den jämförelsen."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hudvårdsval."}];
