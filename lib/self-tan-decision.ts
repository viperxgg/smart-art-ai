import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const selfTanDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [{
    productSlug: "st-tropez-self-tan-express",
    model: "St.Tropez Express Bronzing Mousse, 200 ml",
    variant: "Tillverkarens brittiska sida för Express Bronzing Mousse 200 ml. Inte Express Mist, Tropical Colada eller Dark Whipped Mousse. Svensk förpackning och katalogens ASIN B00KSS3MJ0 är ännu inte matchade.",
    chooseIf: "du vill kunna välja när du sköljer av produkten: tillverkaren anger en, två eller tre timmar för olika färgdjup. Du kan planera in applicering med handske och dusch.",
    avoidIf: "du vill ha en parfymfri formula, slippa avsköljning eller behöver slutresultatet färdigt efter en timme. Ingredienslistan innehåller Parfum; färgen fortsätter utvecklas under åtta timmar enligt instruktionen.",
    sourceIds: ["T1"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Ett verifierat användningssätt passar dig bättre och du faktiskt kommer att använda produkten. Vi har inte jämfört pris, doft, nyans eller jämnhet mot billigare produkter och kan inte motivera merpriset med ett bättre resultat.",
  noPurchaseWhen: "Du inte vill ändra hudens färg eller redan har en produkt som fungerar. En ny nyans eller ett dyrare varumärke är inget behov i sig.",
  swedishContext: "Källan är brittisk. Kontrollera Express-varianten, 200 ml och instruktionen på förpackningen som säljs till dig i Sverige. Räkna in frakt och eventuell appliceringshandske; vi har inte verifierat att handske ingår.",
  testing: "Vi har läst tillverkarens ingredienser, användningssteg och FAQ. Vi har inte applicerat moussen, jämfört hudtoner eller mätt hållbarhet, lukt och färgöverföring.",
  limitations: "En timme avser tid före avsköljning för den ljusare nyansen, inte ett löfte om färdig färg. Tillverkaren anger att produkterna saknar solfilter; välj inte moussen som solskydd. Bildrättigheter och exakt butiksvariant återstår.",
  sources: [
    { id: "T1", title: "St.Tropez UK – Express Bronzing Mousse 200 ml", url: "https://sttropeztan.com/uk/product/st-tropez-express-bronzing-mousse-200ml/", checkedAt: "2026-09-08", supports: "200 ml, parfym i ingredienslistan, handske och avsköljning efter 1–3 timmar; färgutveckling under åtta timmar. Inget oberoende bevis för jämnare färg eller bättre värde." },
    { id: "T2", title: "St.Tropez UK – vanliga frågor", url: "https://sttropeztan.com/uk/faqs/", checkedAt: "2026-09-08", supports: "Tillverkaren anger att produkterna saknar solfilter. FAQ skiljer Express från andra seriers användning; den verifierar inte svensk butik eller vår katalogvariant." },
  ],
};

export const selfTanValueGuide: DecisionGuide = {
  path: "/guider/brun-utan-sol-vart-det",
  title: "Brun utan sol – passar stegen dig före priset?",
  intro: "St.Tropez Express kräver tid för applicering, avsköljning och färgutveckling. Här ser du vad instruktionen innebär och vad vi inte vet om ett eventuellt merpris.",
  decision: selfTanDecision,
  productPaths: ["/skonhet/brun-utan-sol"],
  questions: [
    { question: "Är färgen färdig efter en timme?", answer: "Inte enligt hela instruktionen. En timme är tid till avsköljning för den ljusare nyansen; färgen fortsätter därefter utvecklas under åtta timmar." },
    { question: "Ger premium ett jämnare resultat?", answer: "Det har vi inte visat. Vi saknar jämförande test och aktuella totalpriser. Varumärke och kundbetyg räcker inte för att lova en bättre nyans eller enklare applicering." },
    { question: "Behöver jag köpa till en handske?", answer: "Tillverkaren instruerar applicering med handske. Kontrollera om du redan har en lämplig och om den ingår i erbjudandet; vår katalog verifierar inget paket med tillbehör." },
    { question: "Ersätter moussen solskydd?", answer: "Nej. St.Tropez anger i sin FAQ att produkterna saknar solfilter. Färgen är inte ett mått på UV-skydd." },
  ],
  related: [{ href: "/skonhet", text: "Fler frågor inför ditt hudvårdsval" }],
};
