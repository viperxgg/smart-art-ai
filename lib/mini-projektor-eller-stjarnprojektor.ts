import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const projectionDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "mini-projektor", model: "Alwtniet mini-projektor – B0DTP9QJZH, 720p", variant: "Länkad modell med angiven ursprunglig upplösning 1280 × 720. Rubriken anger 4K-stöd, Android 14, Wi-Fi 6, Bluetooth 5.4 och 5 W-högtalare. 4K-stöd gör inte panelen till en 4K-panel. Adapter anges ingå; batteridrift är inte verifierad.", chooseIf: "du vill projicera eget bild- eller videoinnehåll, accepterar 720p och först kan bekräfta att din tänkta källa fungerar med just denna modell. Kontrollera placering, ström och bildyta innan köp.", avoidIf: "du kräver äkta 4K, verifierad dagsljusbild eller garanterat stöd för en viss streamingtjänst. Android och Wi-Fi i rubriken räcker inte som bekräftelse på att ditt innehåll fungerar.", sourceIds: ["PJ1"], merchantVariantVerified: true },
    { productSlug: "stjarnprojektor", model: "Mexllex stjärnprojektor – 12 skivor, B0C1BX79XW", variant: "Den länkade LED-modellen anger tolv motivskivor, manuell fokusjustering och riktbart stativ. Standardavstängning efter fyra timmar anges. Det är motiv från skivor som projiceras, inte filmer från en streamingapp.", chooseIf: "du vill ha dekorativa rymdmotiv på vägg eller tak och uppskattar att byta skiva manuellt. Kontrollera att placeringen ger en bild du kan fokusera och att strömförsörjningen passar.", avoidIf: "du vill visa egna filmer, läsa tydligt i ljuset eller köper den som en bevisad hjälp för sömn eller barns utveckling. Sådana effekter har vi inte verifierat.", sourceIds: ["PJ2"], merchantVariantVerified: true },
  ],
  payMoreWhen: "En dokumenterad funktion behövs: rätt bildkälla, högre faktisk panelupplösning eller ett motivsystem du vill använda. Betala inte extra för 4K i en rubrik eller HD på en motivskiva utan att förstå vad märkningen avser. Dagens pris, bildkvalitet och driftskostnad har inte jämförts.",
  noPurchaseWhen: "Din nuvarande skärm fungerar för film eller den belysning du har redan ger den stämning du vill ha. Ett extra ljusredskap är inte nödvändigt för bättre sömn, och en projektor är inte automatiskt mer praktisk än en skärm.",
  swedishContext: "För film: kontrollera just dina tjänster, exempelvis SVT Play och Netflix, med säljaren och tjänstens aktuella stöd innan köp. Inget av dessa har provats här. Kontrollera nätadapter för svenska uttag, kabelbehov, avstånd till bildytan och möjlighet att mörklägga. Bärbar betyder inte verifierad batteridrift.",
  testing: "Vi har läst och matchat de svenska butikssidorna. Vi har inte projicerat bilder, kört streamingappar, mätt ljusflöde eller fläktljud, kontrollerat färgåtergivning eller testat avstängning. Tillverkaroberoende bild- och sömntester ingår inte i underlaget.",
  limitations: "Produktlistningar är inte laboratorietester. Exakt appstöd, ljusstyrka i ett verkligt rum, elektriska instruktioner och rättigheter till produktbilder återstår. Inga betyg, sömnresultat eller generella barnrumsrekommendationer ges.",
  sources: [
    { id: "PJ1", title: "Amazon.se – Alwtniet 720p mini-projektor", url: "https://www.amazon.se/dp/B0DTP9QJZH", checkedAt: "2026-09-09", supports: "Länkad artikel och angiven 1280 × 720-panel, 4K-stöd, anslutningar, Android, högtalare och adapter. Marknadsförd 8000-lumen-uppgift saknar här en verifierad mätmetod; används inte som jämförbar uppmätt ljusstyrka." },
    { id: "PJ2", title: "Amazon.se – Mexllex med tolv motivskivor", url: "https://www.amazon.se/dp/B0C1BX79XW", checkedAt: "2026-09-09", supports: "Tolv skivor, fokusreglage, riktbart stativ och uppgift om fyra timmars standardavstängning. Sömn-, utvecklings- och tystnadspåståenden är inte vårt testresultat." },
  ],
};

export function getProjectionProductDecision(slug: string): DecisionRecord {
  const options = projectionDecision.options.filter(option => option.productSlug === slug);
  return {
    ...projectionDecision, options,
    payMoreWhen: slug === "stjarnprojektor"
      ? "Motiv, fokusreglage eller avstängningsfunktioner är dokumenterade och har ett värde för dig. Betala inte extra för obestyrkta sömnlöften eller ordet HD på en skiva. Dagens priser och bildkvalitet har inte jämförts."
      : "Högre faktisk panelupplösning, verifierat stöd för din källa eller dokumenterad prestanda behövs. Betala inte för 4K i rubriken om panelen fortfarande är 720p. Dagens priser har inte jämförts.",
    sources: projectionDecision.sources.filter(source => options.some(option => option.sourceIds.includes(source.id))),
    swedishContext: slug === "stjarnprojektor"
      ? "Kontrollera strömförsörjning och adapter för svenska uttag, placering och hur fokus ställs in. Följ bruksanvisningen om ljuskälla, placering och användning. Vi har inte verifierat en lämplig barnrumsinstallation eller att lampan förbättrar sömnen."
      : projectionDecision.swedishContext,
    limitations: slug === "stjarnprojektor"
      ? "Vi har inte verifierat ljudnivå, bildskärpa över en viss takyta eller ljuskällans fullständiga säkerhetsanvisningar. Bilder med verifierad användningsrätt saknas. Marknadsföring för barn är inte vår bedömning av lämplighet."
      : "Appstöd och batteridrift är inte verifierade. Säljarens ljusstyrka är inte ett jämförbart mätresultat utan angiven verifierad metod. Exakt manual och tillåtna produktbilder återstår.",
  };
}

export const projectionGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" }, path: "/halsa/mini-projektor-eller-stjarnprojektor",
  title: "Mini-projektor eller stjärnprojektor – film eller dekorativa motiv?",
  intro: "De löser olika behov. Alwtniet är en videoprojektor med angiven 720p-panel; Mexllex projicerar motiv från tolv skivor. Börja med vad du vill se, inte ord som 4K, HD eller bättre sömn i en annons.",
  decision: projectionDecision, productPaths: ["/halsa/mini-projektor", "/halsa/stjarnprojektor"],
  questions: [
    { question: "Ger 4K-stöd en bild med äkta 4K-detalj?", answer: "Inte med den angivna panelen. Den svenska listningen anger 1280 × 720 som ursprunglig upplösning och 3840 × 2160 som maximalt stödd. Vi bedömer därför inte produkten som en projektor med en 4K-panel." },
    { question: "Fungerar Netflix och SVT Play direkt i Alwtniet?", answer: "Det är inte verifierat här. Vi har varken provat apparna eller bekräftat modellens stöd hos tjänsterna. Kontrollera detta före köp om en viss app är huvudskälet; lovad Android-version är inte tillräckligt underlag." },
    { question: "Kan Mexllex visa mina egna filmer?", answer: "Det beskrivna systemet använder medföljande motivskivor som byts manuellt. Det är inte ett verifierat system för att spela upp dina videofiler eller streamingtjänster." },
    { question: "Är stjärnprojektorn ett bra sömnhjälpmedel för barn?", answer: "Vi har inte underlag för den rekommendationen. Automatiskt avstängningsläge och dekorativa motiv visar inte att en produkt förbättrar sömn eller passar ett visst barns rum. Bedöm den som dekoration och följ produktens anvisningar." },
    { question: "Kan jag jämföra 8000 lumen med andra projektorers ljusstyrka?", answer: "Inte utifrån den här listningen ensam. Vi saknar verifierad mätmetod och eget ljusprov och använder därför inte siffran för att rangordna ljusstyrka eller lova bra bild i dagsljus." },
  ],
  related: [{ href: "/halsa/laslampa-eller-led-list", text: "Behöver du läsljus eller dekorationsljus?" }],
};
