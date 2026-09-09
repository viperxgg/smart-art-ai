import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { sunsetLightDecision } from "@/lib/sunset-light-decision";
import { getProjectionProductDecision } from "@/lib/mini-projektor-eller-stjarnprojektor";

const stars = getProjectionProductDecision("stjarnprojektor");
export const sunsetStarsDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [sunsetLightDecision.options[0], stars.options[0]],
  payMoreWhen: "Du vill ha ett dokumenterat reglage eller motivsystem: fjärrstyrda färger hos Aniepaa, eller utbytbara motivskivor hos Mexllex. Välj utifrån vad du använder; vi har inte jämfört dagens priser eller visat bättre färgåtergivning hos någon av dem.",
  noPurchaseWhen: "Din nuvarande lampa redan ger den stämning du vill ha. Inget av redskapen är ett nödvändigt sömnköp, och du behöver inte två dekorationslampor för samma hörna.",
  swedishContext: "Planera strömkälla, kabelräckvidd och ytan du vill lysa upp. Kontrollera adapter och bruksanvisning för den beställda varianten. Bedöm dem som dekoration; vi har inte verifierat lämplighet i ett visst barns rum.",
  testing: "Vi har kontrollerat de två länkade butikssidorna. Vi har inte jämfört ljuskvalitet, flimmer, motorljud, avstängning eller sömn. Källorna styrker beskrivna funktioner, inte hur produkterna upplevs i ditt rum.",
  limitations: "Aniepaa är inte bara stilla ljus: även dynamiska lägen anges. Mexllex använder skivor med motiv, inte egna videofiler. Fullständiga ström- och säkerhetsanvisningar samt godkända produktbilder återstår. Ingen generell barnrums- eller sömnrekommendation ges.",
  sources: [...sunsetLightDecision.sources, ...stars.sources],
};

export const sunsetStarsGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" }, path: "/halsa/solnedgangslampa-eller-stjarnprojektor",
  title: "Solnedgångslampa eller stjärnprojektor – färgat ljus eller motivskivor?",
  intro: "Aniepaa ger en riktbar färgad ljusyta med fjärrkontroll; Mexllex projicerar motiv från tolv skivor. Välj vilken effekt du faktiskt vill använda och kontrollera ström och placering först.",
  decision: sunsetStarsDecision, productPaths: ["/halsa/solnedgangslampa", "/halsa/stjarnprojektor"],
  questions: [
    { question: "Är solnedgångslampan alltid ett stilla, varmt ljus?", answer: "Nej. Den länkade varianten anger 24 fasta färger och fyra dynamiska lägen, inklusive blinkläge. Välj ett fast läge om det är det du vill ha; namnet beskriver inte alla lampans lägen." },
    { question: "Ingår allt jag behöver för att ansluta Aniepaa?", answer: "USB-kabel anges ingå, men vi har inte verifierat nätadapter eller fullständiga strömkrav. Bekräfta vad som krävs och vad paketet innehåller före köp." },
    { question: "Kan jag använda någon av dem som läslampa?", answer: "Vi har inte verifierat belysning på boksidan eller arbetsytan. En färgad vägg eller projicerad stjärnbild är inte underlag för att rekommendera dem som läsljus." },
    { question: "Vilken hjälper barn att somna snabbare?", answer: "Det kan vi inte avgöra från produktsidorna. Motiv, färger och timer visar inte en verifierad sömneffekt. Vi rekommenderar inte någon av dem som sömnbehandling eller som generellt lämplig i barnrum." },
  ],
  related: [{ href: "/halsa/mini-projektor-eller-stjarnprojektor", text: "Vill du visa film i stället för dekorativa motiv?" }, { href: "/halsa/wake-up-light-eller-solnedgangslampa", text: "Behöver du en väckningsfunktion?" }],
};
