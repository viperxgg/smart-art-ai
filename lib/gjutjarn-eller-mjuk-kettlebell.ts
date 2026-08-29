import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  amazonBasicsKettlebellProduct,
  proironSoftKettlebellProduct,
} from "@/lib/products";

export const gjutjarnEllerMjukKettlebellFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på gjutjärns- och mjuk kettlebell?","answer":"Gjutjärnsklockan är helgjuten i metall med målat, texturerat grepp – tät, kompakt och i princip oförstörbar. Den mjuka har ett vadderat hölje med sandfyllning, vilket gör den tystare och snällare mot golv om den sätts ner hårt. Övningarna är desamma."},{"question":"Vilken är bäst för nybörjare?","answer":"Båda funkar för att lära sig svingar och goblet squats. Är du osäker på tekniken eller tränar på känsligt golv är den mjuka en förlåtande start. Vet du att du kommer vilja gå upp i vikt är gjutjärn i rätt vikt ett köp som håller längre."},{"question":"Kan jag träna med kettlebell i lägenhet?","answer":"Ja – det är precis där den mjuka är som bäst. Den dämpar både ljud och stötar mot golvet, så tidiga morgonpass stör mindre. Med en gjutjärnsklocka i lägenhet vill du ha en rejäl träningsmatta under."},{"question":"Vilken vikt ska jag börja med?","answer":"Ett vanligt riktmärke är att kunna svinga med kontroll: många kommer igång kring de lägre mellanvikterna och går upp när tekniken sitter. Kolla viktstegen på produktsidorna – gjutjärnsserien har fler steg att växa i."}];

export const gjutjarnEllerMjukKettlebellComparisonRows = [["Snabba signaler","Solid gjutjärn; texturerat grepp","Sandfylld; mjukt hölje"],["Känsla","Tät, klassisk järnkänsla","Mjukare, lite större kropp"],["Golv & ljud","Kräver matta eller tåligt golv","Snäll mot parkett, tyst nedsättning"],["Bäst för","Källare, garage, van lyftare","Lägenhet, nybörjare, barn i hemmet"],["Vikter","Flera steg att växa i","Lättare spann, mjukare start"],["Hållbarhet","Tål i princip allt","Höljet ska inte släpas på asfalt"],["Elins poäng","86/100","79/100"]] as const;

export const gjutjarnEllerMjukKettlebellPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: amazonBasicsKettlebellProduct,
    path: "/traning/kettlebell/amazon-basics",
    badge: "Klassikern",
    headline: "Amazon Basics gjutjärn – mest kettlebell för pengarna",
    shortBody: "Välj gjutjärn om du vill ha den klassiska, täta järnkänslan och en klocka som tål år av svingar. Texturerat grepp, flera vikter att växa i och inget som kan gå sönder.",
  },
  {
    product: proironSoftKettlebellProduct,
    path: "/traning/kettlebell/proiron-mjuk",
    badge: "Golvvänlig",
    headline: "PROIRON mjuk – snäll mot golv och tår",
    shortBody: "Välj den mjuka om du tränar i lägenhet eller har känsligt golv. Sandfylld och tystare vid nedsättning – och landar den på en tå slutar det med ett skratt i stället för ett skrik.",
  },
];

export const gjutjarnEllerMjukKettlebellRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/kettlebell/amazon-basics","label":"Gjutjärn","text":"Läs Elins genomgång av Amazon Basics kettlebell."},{"href":"/traning/kettlebell/proiron-mjuk","label":"Mjuk","text":"Läs Elins genomgång av PROIRON mjuk kettlebell."},{"href":"/traning/kettlebell-eller-hantlar","label":"Jämförelse","text":"Kettlebell eller hantlar? Vilket bygger ditt hemmagym bäst."},{"href":"/traning/handledslindor-eller-lyftremmar","label":"Jämförelse","text":"Handledslindor eller lyftremmar? Rätt gymstöd när vikterna ökar."}];
