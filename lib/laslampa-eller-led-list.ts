import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  gritinReadingLightProduct,
  goveeNeonRopeProduct,
} from "@/lib/products";

export const laslampaEllerLedListFaqItems: DecisionComparisonFaqItem[] = [{"question":"Räcker en LED-list som läsljus?","answer":"Nej, en LED-list ger spritt stämningsljus – mysigt för rummet men för svagt och ojämnt för att läsa bekvämt. För läsning behöver du riktat ljus nära boken, vilket är exakt vad en klämbar läslampa ger."},{"question":"Hur länge håller batteriet i en uppladdningsbar läslampa?","answer":"Gritins läslampa laddas via USB och klarar många läskvällar per laddning beroende på ljusläge – köpare lyfter ofta batteritiden som en av favoritdetaljerna. Lägre ljusstyrka ger längre tid."},{"question":"Kan man styra Govee-listen utan appen?","answer":"Appen är hjärtat i Govee-upplevelsen: färger, scener, schema och ljusstyrka. Väl konfigurerad kan den följa schema automatiskt, så du behöver inte öppna appen varje kväll."},{"question":"Vilken passar bäst i sovrummet?","answer":"För sängläsning: läslampan, eftersom den inte väcker någon bredvid. För mjukt kvällsljus innan sömn kan LED-listen på låg värme också vara skön – många kombinerar båda i samma rum."}];

export const laslampaEllerLedListComparisonRows = [["Typ av ljus","Riktat uppgiftsljus","Mjukt stämningsljus"],["Bäst för","Läsning, handarbete, sängläge","Mysfaktor, TV-vägg, fönster"],["Placering","Klämfäste – bok, sänggavel, skrivbord","Formas och fästs längs väggar och möbler"],["Ström","Uppladdningsbart batteri","Elanslutning + appstyrning"],["Stör sovande partner","Nej – riktat och avbländat","Kan lysa upp hela rummet"],["Elins poäng","90/100","83/100"]] as const;

export const laslampaEllerLedListPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: gritinReadingLightProduct,
    path: "/halsa/laslampa",
    badge: "Uppgiftsljus",
    headline: "Gritin läslampa – ljuset som följer boken",
    shortBody: "Välj läslampan när du ska läsa, virka eller jobba: klämfäste, uppladdningsbar och flera ljuslägen som inte stör den som sover bredvid.",
  },
  {
    product: goveeNeonRopeProduct,
    path: "/halsa/led-list",
    badge: "Stämningsljus",
    headline: "Govee Neon Rope – rummets mjuka lyster",
    shortBody: "Välj LED-listen när rummet ska kännas mysigt: formbart neonljus som styrs i appen med färger, scener och schema.",
  },
];

export const laslampaEllerLedListRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/laslampa","label":"Läslampa","text":"Läs Elins genomgång av Gritins läslampa."},{"href":"/halsa/led-list","label":"LED-list","text":"Läs Elins genomgång av Govee Neon Rope."},{"href":"/halsa/morka-morgnar","label":"Guide","text":"Mörka morgnar: ljus, väckning och kvällsro."},{"href":"/halsa/solnedgangslampa","label":"Kvällsljus","text":"Solnedgångslampan för mjuka kvällar."}];
