import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { moisturizerDecision } from "@/lib/cicaplast-b5-eller-cetaphil";

export const aftersunDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [
    { productSlug: "nivea-sun-after-sun-lotion", model: "NIVEA SUN After Sun Moisture Lotion", variant: "Svensk sida: 200 ml, artikel 80464-06802-26. Inte matchad mot katalogens ASIN B000RO5EXC.", chooseIf: "du föredrar lotion efter sol och den aktuella ingredienslistan passar dina önskemål. Tillverkaren anger normal hud.", avoidIf: "du söker en produkt utan parfym eller Alcohol Denat.; båda finns i den svenska ingredienslistan. Undvik kontakt med ögonen enligt tillverkaren.", sourceIds: ["A1"], merchantVariantVerified: false },
    { productSlug: "naissance-aloe-vera-gel", model: "Naissance Aloe Vera Gel N° 707", variant: "Tillverkarens EU-sida: 250 ml, N° 707. Inte varianten med sjögräs N° 708. Katalogens ASIN B00ENFL7CS är inte matchad.", chooseIf: "du föredrar en gel och har kontrollerat formulan på just förpackningen. Tillverkaren anger bland annat vatten, aloeextrakt och glycerin.", avoidIf: "du vill ha enbart aloe från bladet eller behöver garanterad frånvaro av allergenspår. Detta är en blandad formula; tillverkaren lämnar ingen sådan allergengaranti.", sourceIds: ["A2"], merchantVariantVerified: false },
  ],
  payMoreWhen: "Konsistens eller förpackning passar ditt användningssätt bättre. Vi har inga jämförande hudtester eller aktuella totalpriser som motiverar en dyrare produkt enbart för ordet after sun.",
  noPurchaseWhen: "Du redan har en hudlotion som fungerar för dig. 1177 nämner fuktgivande hudlotion som ett sätt att lindra efter sol; det kräver inte ett särskilt after sun-märke.",
  swedishContext: "Vid solskada hänvisar vi till 1177: pausa solandet och sök vårdråd vid svåra besvär eller större områden med blåsor. Köpvalet ersätter inte vårdbedömning. Svensk butiksvariant och leveranskostnad är inte verifierade.",
  testing: "Vi har läst tillverkaruppgifter och 1177, inte testat produkterna på hud. Upplevd svalka, absorption och återfuktning är inte jämförda av oss.",
  limitations: "Vi utser ingen vinnare och lovar inte läkning eller att solskador kan göras ogjorda. Produkterna väljs inte som UV-skydd. Bildrättigheter och butiksvarianter återstår.",
  sources: [
    { id: "A1", title: "NIVEA Sverige – After Sun Moisture Lotion", url: "https://www.nivea.se/produkter/after-sun-moisture-lotion-40058084797190068.html", checkedAt: "2026-09-08", supports: "200 ml, artikelnummer, normal hud och ingredienslista. Innehåller parfym och Alcohol Denat. Ingen jämförelse med Naissance." },
    { id: "A2", title: "Naissance EU – Aloe Vera Gel N° 707", url: "https://eu.naissance.com/products/aloe-vera-gel", checkedAt: "2026-09-08", supports: "250 ml och blandad formula; ingen garanti mot allergenspår. Inte bevis för att gelen passar alla eller är bättre än lotion." },
    { id: "A3", title: "1177 – Solskador på huden", url: "https://www.1177.se/olyckor--skador/brannskador-och-koldskador/solskador-pa-huden", checkedAt: "2026-09-08", supports: "Råd om lindring och när vård behövs. Uppdaterad 2024-05-27. Bedömer inte de jämförda märkena." },
  ],
};

export const aftersunGuide: DecisionGuide = {
  path: "/skonhet/aftersun-eller-aloe-vera", parent: { name: "Skönhet", href: "/skonhet" },
  title: "Aftersun eller aloe vera – behöver du något nytt?",
  intro: "Utgå från hudvården du redan har. Här jämför vi en namngiven lotion och en gel utifrån formula och användning, utan att lova att någon reparerar solskador.",
  decision: aftersunDecision, productPaths: ["/skonhet/aftersun", "/skonhet/aloe-vera-gel"],
  questions: [
    { question: "Är Naissance ren aloe vera?", answer: "Nej, N° 707 är en formulerad gel med flera ingredienser. Namnet aloe vera säger inte i sig hur din hud reagerar." },
    { question: "Behöver jag båda produkterna?", answer: "Vi ser inget underlag för ett generellt dubbelköp. Välj utifrån ett behov som din befintliga hudvård inte fyller." },
    { question: "Vilken svalkar bäst?", answer: "Det har vi inte testat. Tillverkarbeskrivningar och kundbetyg ersätter inte en jämförelse på hud." },
  ],
  related: [{ href: "/guider/after-sun-eller-fuktkram", text: "Räcker krämen du redan har?" }],
};

export const aftersunOrMoisturizerGuide: DecisionGuide = {
  path: "/guider/after-sun-eller-fuktkram",
  title: "After sun eller fuktkräm – behöver du båda?",
  intro: "En extra flaska är inget självklart behov. Jämför din befintliga lotion med det du saknar; här är NIVEA och Cetaphil två konkreta exempel, inte representanter för alla krämer.",
  decision: {
    ...aftersunDecision,
    options: [aftersunDecision.options[0], moisturizerDecision.options[1]],
    sources: [aftersunDecision.sources[0], aftersunDecision.sources[2], moisturizerDecision.sources[1]],
    testing: "Vi har läst svenska tillverkaruppgifter och 1177, inte jämfört NIVEA och Cetaphil på hud efter sol. Produktkategorin ensam visar inte vilket resultat du får.",
    limitations: "1177 rekommenderar inget av dessa märken. Vi kan inte säga att de ger samma lindring eller att någon är bättre. Varken denna jämförelse eller krämerna ersätter solskydd eller vårdråd. Butiksvarianter och bildrättigheter återstår.",
  },
  productPaths: ["/skonhet/aftersun", "/skonhet/fuktkram"],
  questions: [
    { question: "Är after sun nödvändigt?", answer: "Inte enbart för att du varit i solen. Utgå från ett konkret behov och vad du redan har; vi rekommenderar inte ett extra köp som standard." },
    { question: "Betyder större burk bättre värde?", answer: "Inte automatiskt. Kontrollera formulan och vad du faktiskt använder upp. Cetaphils svenska 250 g är inte matchad mot katalogens 453 g." },
    { question: "Var finns råd om solskador?", answer: "Läs 1177-källan i beslutsunderlaget. Vid osäkerhet kan du ringa 1177 för bedömning; våra produktjämförelser bedömer inte symtom." },
  ],
  related: [{ href: "/skonhet/aftersun-eller-aloe-vera", text: "Jämför lotion med Naissance gel" }],
};
