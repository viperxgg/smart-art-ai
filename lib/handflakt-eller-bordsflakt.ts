import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  jisulifeHandfanProduct,
  xiaomiStandingFanProduct,
} from "@/lib/products";

export const handflaktEllerBordsflaktFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på handfläkt och bordsfläkt?","answer":"En handfläkt är liten och laddningsbar så du kan ta med den ut och få svalka på språng. En bordsfläkt står still och ger en stadigare, ofta starkare luftström där du sitter."},{"question":"Vilken är bäst för festival?","answer":"Handfläkten, eftersom den ryms i väskan och laddas via USB så du kan svalka dig var du än är. En bordsfläkt kräver en plats att stå på och passar bättre hemma."},{"question":"Håller handfläkten laddningen en hel dag?","answer":"Det beror på modell och hur högt du kör den. Ladda den full innan du går ut och kör på ett lägre läge så räcker batteriet längre under dagen."},{"question":"Vilken ger starkast svalka?","answer":"En bordsfläkt ger oftast en starkare och stadigare luftström eftersom den är större. Handfläkten ger en personlig, riktad svalka som räcker gott när du är på språng."}];

export const handflaktEllerBordsflaktComparisonRows = [["Snabba signaler","Liten och laddningsbar; ta med ut","Står still; stadig luftström på plats"],["Bäst för","Festival, buss, stan – på språng","Skrivbord och säng hemma"],["Ström","Laddningsbar via USB","Vägg eller USB beroende på modell"],["Styrka","Personlig, riktad svalka","Oftast starkare luftström"],["Plats","Ryms i väskan","Står på bord eller hylla"],["Prisläge","Budget","Budget–mellan"],["Elins poäng","84/100","84/100"]] as const;

export const handflaktEllerBordsflaktPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: jisulifeHandfanProduct,
    path: "/halsa/handflakt",
    badge: "Ta med ut",
    headline: "JISULIFE handfläkt – svalka på språng",
    shortBody: "Välj handfläkten om du vill ha svalka utomhus. Den är liten, laddningsbar och ryms i väskan – perfekt på festivalen, bussen eller en varm promenad.",
  },
  {
    product: xiaomiStandingFanProduct,
    path: "/halsa/bordsflakt",
    badge: "Stadig på plats",
    headline: "Xiaomi bordsfläkt – sval luft där du sitter",
    shortBody: "Välj bordsfläkten om du mest vill ha en stadig, lite starkare luftström hemma eller på jobbet. Den står still och svalkar dig vid skrivbordet eller sängen.",
  },
];

export const handflaktEllerBordsflaktRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/handflakt","label":"Handfläkt","text":"Läs Elins recension av JISULIFE handfläkt."},{"href":"/halsa/bordsflakt","label":"Bordsfläkt","text":"Läs Elins recension av Xiaomi bordsfläkt."},{"href":"/halsa/tornflakt-eller-bordsflakt","label":"Jämförelse","text":"Tornfläkt eller bordsfläkt? Se den jämförelsen."},{"href":"/halsa/flakt","label":"Fläkt","text":"Se alla Elins fläktar för sommaren."}];
