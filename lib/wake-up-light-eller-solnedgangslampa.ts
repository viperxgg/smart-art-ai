import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { morningLightDecision, morningLightGuide } from "@/lib/morning-light-decision";

export const wakeUpSunsetDecision: DecisionRecord = {
  ...morningLightDecision,
  options: morningLightDecision.options.slice(1),
  sources: morningLightDecision.sources.filter(source => ["P1", "P2", "S1", "S2"].includes(source.id)),
  swedishContext: "Philips svenska support markerar HF3651/01 som utgången. Kontrollera modellnumret och rätt nätadapter hos säljaren; andra SmartSleep-modeller kan ha andra funktioner. Aniepaas USB-lampa och reglage har matchats mot butikssidan; nätadapter och fullständig manual återstår.",
  testing: "Vi har läst Philips modellblad och svenska support. Vi har inte jämfört faktisk väckning, sömn, ljudnivå eller färgåtergivning. Aniepaas läsbara butikssida beskriver färgreglage och tillbehör; de har inte provats.",
  limitations: "Philips funktioner är dokumenterade, men svenskt erbjudande är inte matchat. Aniepaas fullständiga strömkrav och manual återstår. Detta är en jämförelse av köpbehov och dokumenterade reglage, inte ett jämförande effekttest. Bilder återstår också.",
};

export const philipsWakeDecision: DecisionRecord = {
  ...wakeUpSunsetDecision,
  options: [wakeUpSunsetDecision.options[0]],
  sources: wakeUpSunsetDecision.sources.filter(source => !["S1", "S2"].includes(source.id)),
  payMoreWhen: "Två alarmtider eller kombinationen av ljus och valbara ljud är funktioner du faktiskt behöver. Betala inte extra för ett löfte om bättre sömn eller mobilstyrning som denna modell inte erbjuder.",
  noPurchaseWhen: "Din nuvarande väckarklocka fungerar och du inte behöver lägga till ljus eller fler alarmval. Ihållande sömnproblem ska inte avgöras av ett produktköp på den här sidan.",
  swedishContext: "Philips svenska support markerar HF3651/01 som utgången. Det avgör inte lagret hos alla återförsäljare. Kontrollera att erbjudandet gäller /01-varianten, att rätt nätadapter ingår och att modellens fullständiga instruktioner finns tillgängliga.",
  testing: "Vi har läst tillverkarens modellblad och svenska supportsida. Vi har inte testat väckning, ljud, ljus, användbarhet eller sömnresultat. Funktioner från andra Philips-modeller används inte som bevis här.",
  limitations: "Äldre modellblad beskriver funktionerna, inte dagens pris eller skick. ASIN B074TP48WY är inte matchat mot svensk leverans. Bildrättigheter och erbjudande återstår. Ingen individuell effekt eller behandlingsrekommendation ges.",
};

export const wakeUpSunsetGuide: DecisionGuide = {
  ...morningLightGuide,
  path: "/halsa/wake-up-light-eller-solnedgangslampa",
  title: "Ljusväckning eller dekorationsljus – vad behöver du?",
  intro: "Philips HF3651/01 har dokumenterade alarm- och ljusreglage. Aniepaa har enligt den matchade butikssidan färgval och fjärrkontroll, men ingen verifierad alarmfunktion. Börja med ditt behov och köp inte båda bara för att de marknadsförs för olika tider på dagen.",
  decision: wakeUpSunsetDecision,
  productPaths: ["/halsa/wake-up-light", "/halsa/solnedgangslampa"],
  related: [
    { href: "/halsa/wake-up-light", text: "Philips HF3651/01 – funktioner och begränsningar" },
    { href: "/halsa/solnedgangslampa", text: "Aniepaa – färgval, USB och återstående frågor" },
    { href: "/halsa/morka-morgnar", text: "Jämför med dagsljuslampa" },
    { href: "/halsa", text: "Fler beslut för vardagen" },
  ],
};
