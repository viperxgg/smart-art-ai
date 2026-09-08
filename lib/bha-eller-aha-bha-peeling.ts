import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const peelingDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "paulas-choice-2-bha", model: "Paula’s Choice Skin Perfecting 2% BHA Liquid Exfoliant, 30 ml",
    variant: "Flytande exfoliering som lämnas kvar. Den svenska sidan listar 30, 118 och 236 ml men öppnades med XL vald; priset där är inte verifierat för 30 ml. ASIN B07PQSRXR6 är inte matchad mot aktuell butiksvara.",
    chooseIf: "du vill ha ett steg som lämnas kvar efter rengöring, utan separat verkningstid och avsköljning. Märket anger introduktion varannan dag med uppsikt över hudens reaktion samt SPF 30+ i morgonrutinen.",
    avoidIf: "du vill ha en avsköljbar mask eller antar att 2% garanterar rätt styrka för dig. Vid salicylatallergi hänvisar märkets instruktion till läkare före användning.",
    sourceIds: ["B1"], merchantVariantVerified: false,
  }, {
    productSlug: "purest-aha-bha-peeling", model: "The Purest Solutions AHA & BHA Red Peeling Serum, 30 ml",
    variant: "Den röda flytande peelingen, inte enzympulvret eller 8 ml-varianten. Märkets kollektionssida anger 10% AHA och 2% BHA. Katalogens ASIN B08K5H5451 är inte matchad mot svensk förpackning.",
    chooseIf: "du föredrar en separat avsköljbar behandling och kan följa instruktionen: helt torr, rengjord hud, undvik ögonområdet och skölj rikligt efter 10 minuter. Märket anger två gånger i veckan med minst tre dagar mellan gångerna.",
    avoidIf: "du tänker använda den som ett serum över natten eller öka frekvensen fritt. Märket riktar produkten till icke-känslig blandad/fet hud och säger att irritation ska leda till avbruten användning och kontakt med hudläkare.",
    sourceIds: ["B2", "B3"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Användningssättet faktiskt passar din rutin och du kan kontrollera totalpriset för samma volym. Vi har ingen jämförande mätning som visar bättre resultat med fler syror eller högre pris. En större flaska är inte automatiskt en besparing om den blir oanvänd.",
  noPurchaseWhen: "Din rutin fungerar eller du redan har en exfolierande produkt som fyller behovet. Köp inte båda för att täcka två namn på syror: båda innehåller BHA enligt märkena, och vi har inte utvärderat en kombinationsrutin.",
  swedishContext: "Paula’s Choice har en svensk produktsida med flera storlekar. The Purest-källan är märkets internationella sida; svensk leveransvariant och instruktion är inte matchade. Aktuella totalpriser, lager och bildrättigheter för katalogprodukterna återstår att kontrollera.",
  testing: "Vi har läst märkenas produktuppgifter och instruktioner, inte testat produkterna på huden. Vi har inte jämfört porer, hudton, irritation eller användning över tid. Marknadsförda resultat är inte våra egna observationer.",
  limitations: "Syrornas procenttal kan inte ensamma rangordna dessa olika formulor och kontakttider. Jämförelsen väljer inte behandling för akne eller andra hudbesvär. Läs anvisningarna på din exakta förpackning innan användning.",
  sources: [
    { id: "B1", title: "Paula’s Choice Sverige – Skin Perfecting BHA", url: "https://www.paulaschoice.se/sv/skin-perfecting-bha-liquid-exfoliant/2012.html", checkedAt: "2026-09-09", supports: "2% salicylsyra, storleksval, leave-on-anvisning och råd om introduktion, solskydd och salicylatallergi. XL-sidans pris har inte använts som pris för 30 ml." },
    { id: "B2", title: "The Purest Solutions – Red Peeling Serum 30 ml", url: "https://thepurestsolutions.com/en/products/cilt-tonu-esitleyici-kirmizi-peeling-cilt-serumu-30ml", checkedAt: "2026-09-09", supports: "Torr hud, avsköljning efter 10 minuter, användningsintervall och begränsningar. Märket anger också test på liten hudyta före användning och solskydd från användningsstart; detta är ingen garanti mot reaktion." },
    { id: "B3", title: "The Purest Solutions – peeling-sortiment", url: "https://thepurestsolutions.com/en/collections/peelingler", checkedAt: "2026-09-09", supports: "Deklarationen 10% AHA + 2% BHA för den röda peelingen samt separata 30 ml-, 8 ml- och pulverprodukter. Ingen oberoende effektjämförelse." },
  ],
};

export const leaveOnOrRinseGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/bha-eller-aha-bha-peeling",
  title: "BHA eller röd peeling – lämna kvar eller skölja av?",
  intro: "Den praktiska skillnaden kommer först: Paula’s Choice lämnas kvar, medan The Purest Solutions ska sköljas av efter angiven tid. Välj utifrån hela produkten och rutinen, inte flest syror på etiketten.",
  decision: peelingDecision,
  productPaths: ["/skonhet/bha-exfoliant", "/skonhet/ansiktspeeling"],
  questions: [
    { question: "Ska båda sköljas av?", answer: "Nej. Paula’s Choice anger att produkten lämnas kvar. The Purest Solutions anger avsköljning efter 10 minuter och att ögonområdet undviks. Namnet serum betyder alltså inte att den röda peelingen ska sitta kvar över natten." },
    { question: "Kan jag använda samma schema för båda?", answer: "Nej. Produkterna har olika instruktioner och kontakttid. Vi ger inget gemensamt schema eller råd att trappa upp den röda peelingen utöver märkets intervall." },
    { question: "Är fler syror bättre för pengarna?", answer: "Det har vi inte belägg för. Jämför en formula du faktiskt behöver, användningen och totalpriset för rätt storlek. Vi utser ingen effektvinnare utifrån procenttal." },
    { question: "Visar irritation att produkten fungerar?", answer: "Vi använder inte irritation som bevis på önskad effekt. Följ förpackningens instruktioner. The Purest Solutions anger att avbryta och kontakta hudläkare om irritation uppstår." },
  ],
  related: [{ href: "/skonhet/azelainsyra-eller-aha-bha", text: "Anua eller COSRX – vad skiljer rutinen?" }, { href: "/skonhet/cicaplast-b5-eller-cetaphil", text: "Behöver du snarare en fuktkräm?" }],
};
