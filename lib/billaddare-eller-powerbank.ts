import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  iniuBilladdareProduct,
  ankerZoloPowerbankProduct,
} from "@/lib/products";

export const billaddareEllerPowerbankFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på billaddare och powerbank?","answer":"En billaddare sitter i bilens 12V-uttag och laddar mobilen medan du kör. En powerbank har ett eget batteri och ger ström även när du är borta från bilen och saknar uttag."},{"question":"Vilken är bäst på road trip?","answer":"Har du en lång bilresa räcker ofta en billaddare för att hålla mobilen laddad medan du kör. Ska du sen vara ute på stranden eller vandra kompletterar en powerbank bra."},{"question":"Behöver jag båda?","answer":"Många har en billaddare fast i bilen och en powerbank i väskan. Då är mobilen laddad både under körningen och när du lämnat bilen."},{"question":"Får jag ta powerbanken i flyget?","answer":"Powerbanks ska tas med i handbagaget och får inte checkas in. En billaddare har inga sådana begränsningar. Kolla alltid ditt flygbolags aktuella regler."}];

export const billaddareEllerPowerbankComparisonRows = [["Snabba signaler","Sitter i 12V-uttaget; laddar medan du kör","Eget batteri; ström även utan uttag"],["Bäst för","Laddning i bilen på road tripen","Utflykter borta från uttag"],["Kräver bil/uttag?","Ja – bilens uttag","Nej"],["Vikt & plats","Liten, sitter fast i bilen","Tyngre – ett laddat batteri väger"],["Räcker när bilen står","Nej","Ja"],["I flyget","Behövs inte","Ska med i handbagaget"],["Elins poäng","86/100","84/100"]] as const;

export const billaddareEllerPowerbankPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: iniuBilladdareProduct,
    path: "/sommar/resa/billaddare",
    badge: "Snabbt i bilen",
    headline: "INIU billaddare – ström medan du kör",
    shortBody: "Välj billaddaren om du mest laddar medan du kör. Den sitter i 12V-uttaget och laddar mobilen snabbt så navigeringen inte tar slut på batteriet.",
  },
  {
    product: ankerZoloPowerbankProduct,
    path: "/sommar/resa/powerbank",
    badge: "Ström överallt",
    headline: "Anker Zolo powerbank – ladda utan uttag",
    shortBody: "Välj powerbanken om du behöver ström även borta från bilen. Med inbyggda kablar håller den mobilen igång på stranden, vandringen eller festivalen.",
  },
];

export const billaddareEllerPowerbankRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/sommar/resa/billaddare","label":"Billaddare","text":"Läs Elins recension av INIU billaddare."},{"href":"/sommar/resa/powerbank","label":"Powerbank","text":"Läs Elins recension av Anker Zolo powerbank."},{"href":"/sommar/resa/powerbank-eller-vaggladdare","label":"Jämförelse","text":"Powerbank eller väggladdare? Se den jämförelsen."},{"href":"/sommar/resa","label":"Resa","text":"Se alla Elins smarta reseprylar."}];
