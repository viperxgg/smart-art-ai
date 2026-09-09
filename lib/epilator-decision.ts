import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { epilatorRazorDecision } from "@/lib/epilator-eller-rakhyvel";

export const epilatorDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "panasonic-es-ey30-epilator", model: "Panasonic ES-EY30",
    variant: "ES-EY30 enligt svensk modellbeskrivning. Inte ES-EY30A med rakhuvud. Säljarens fullständiga variantkod och paket är inte verifierade.",
    chooseIf: "du vill epilera och inte behöver ett extra rakhuvud i paketet. Panasonic anger dubbla skivor med 60 pincetter, rörligt huvud och våt/torr användning.",
    avoidIf: "du behöver raka i stället för att dra ut håret, eller vill använda apparaten i ansiktet. Handboken utesluter bland annat ansikte och lår och kräver precisionskåpan för armhålor/bikinilinje. Läs hela områdesguiden före användning.",
    sourceIds: ["P1", "P2"], merchantVariantVerified: false,
  }, epilatorRazorDecision.options[0]],
  payMoreWhen: "Rätt paket innehåller ett rakhuvud eller annat tillbehör som du faktiskt behöver. Braun 9-041 anges med rakhuvud och trimkam; ES-EY30 är inte samma paket som ES-EY30A. Fler pincetter bevisar inte bättre resultat eller mindre smärta. Vi har inte verifierat prisordningen.",
  noPurchaseWhen: "Din epilator eller hyvel redan fungerar. Ett nytt modellnummer, fler pincetter eller en påstådd topplacering räcker inte som skäl att byta. Hårborttagning är valfritt.",
  swedishContext: "Kontrollera modellens hela suffix, rätt nätadapter och innehåll hos säljaren. Panasonics svenska handbok säger att apparaten inte kan användas under laddning. Braun-underlaget kommer från en annan marknad; svensk laddare och paket återstår att matcha.",
  testing: "Vi har läst Panasonics svenska produktsida och delar av den svenska handboken samt Brauns modellbeskrivning. Ingen egen epilering, ljudmätning eller jämförelse på samma personer. Vi utser ingen testvinnare och använder inte obestyrkta köparcitat.",
  limitations: "Handboken omfattar flera Panasonic-modeller; rak-, fotvårds- och skrubbtillbehör gäller inte automatiskt ES-EY30. Rengör enligt rätt instruktion, frånkopplad från nätet. Epilering kan ge obehag och är inte permanent. Vi har inte verifierat bilder, erbjudanden, livslängd eller vilken modell som är tystast.",
  sources: [
    { id: "P1", title: "Panasonic Sverige – ES-EY30", url: "https://www.panasonic.com/se/consumer/personvard/epilatorer/es-ey30.html", checkedAt: "2026-09-09", supports: "60 pincetter, dubbla skivor, rörligt huvud, våt/torr användning och angivna tillbehör. Ingen marknadsledar- eller prisjämförelse." },
    { id: "P2", title: "Panasonic – svensk handbok, ES-EY-serien", url: "https://tda.panasonic-europe-service.com/docs/1524940880-6011-7CD23AF6CA67C5081BBB5FD0E4B153ECBC5AEF0E/tsn3/data/ALL/ESEY90/OI/1017367/ES970WEY903503.pdf", checkedAt: "2026-09-09", supports: "Sidor 200 och 202–206: områdesbegränsningar, precisionskåpa för ES-EY30, laddning, rengöring och vilka andra modeller som har rakhuvud. Läs hela säkerhetsavsnittet före användning." },
    ...epilatorRazorDecision.sources.filter(source => ["E1", "E2"].includes(source.id)),
  ],
};
export const epilatorGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" },
  path: "/skonhet/epilator",
  title: "Vilken epilator passar – och behöver du också ett rakhuvud?",
  intro: "Panasonic ES-EY30 och Braun Silk-épil 9-041 erbjuder våt och torr epilering. Börja med vilka områden och tillbehör du behöver. Antalet pincetter räcker inte för att utse en vinnare.",
  decision: epilatorDecision,
  productPaths: ["/skonhet/epilator/panasonic-es-ey30", "/skonhet/epilator/braun-silk-epil-9"],
  related: [{ href: "/skonhet/epilator-eller-rakhyvel", text: "Är epilering rätt metod för dig?" }],
  questions: [
    { question: "Är 60 pincetter bättre än 40?", answer: "Det är en skillnad i konstruktion, inte ett bevis på bättre resultat. Vi har inte jämfört antal passeringar, smärta eller tidsåtgång på samma personer." },
    { question: "Ingår rakhuvud i ES-EY30?", answer: "Det ingår inte i den svenska modellbeskrivning vi granskat. Handboken skiljer ES-EY30 från ES-EY30A, där rakhuvud anges. Kontrollera hela modellkoden; bilder och tillbehör för serien räcker inte." },
    { question: "Vilken är bäst i test?", answer: "Vi har inte utfört ett jämförande produkttest och kallar ingen av dem bäst i test. Underlaget här hjälper dig bedöma funktion och begränsningar, inte en uppmätt vinnare." },
  ],
};
