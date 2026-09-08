import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { curlingMethodDecision } from "@/lib/heatless-lockar-eller-locktang";

export const manualOrAutoCurlingDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [curlingMethodDecision.options[1], {
    productSlug: "tymo-curlpro-locktang", model: "TYMO CURLPRO",
    variant: "CURLPRO, inte CURLPRO PLUS eller den sladdlösa CURLGO. Produktsidan har Essential/Premium och olika kontaktval. Vilket paket katalogen avser är inte fastställt; TYMO_CURLPRO är ingen verifierad ASIN-kod. Butikens kontakt och innehåll återstår att matcha.",
    chooseIf: "du vill att en motor sköter inrullningen och accepterar att själv dela upp, placera och släppa ut varje hårslinga. Manualen kräver torrt, utrett hår. Automatiken ersätter alltså ett handgrepp, inte hela arbetet.",
    avoidIf: "du förväntar dig att håret aldrig kan fastna, att värmen inte kan skada eller att alla lockar håller i sju dagar. Manualen beskriver hur trassel hanteras. Vi har inte testat dessa resultat eller att apparaten är enklare för just dina händer och ditt hår.",
    sourceIds: ["T1", "T2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Den automatiska inrullningen är en funktion du faktiskt saknar och rätt kontakt och paket ingår. Vi har inte verifierat prisdifferens, snabbare helfrisyr eller längre hållbarhet på lockarna. Fler säkerhetsfunktioner är inte ett bevis på riskfri användning.",
  noPurchaseWhen: "Din befintliga lockmetod fungerar, eller du inte vill använda uppvärmda verktyg. En motor är inte i sig skäl att byta ut en fungerande tång. Jämförelsen med ett set utan värme finns längre ned.",
  swedishContext: "TYMO anger 100–240 V, men spänningsområdet bevisar inte att rätt stickkontakt medföljer. Kontrollera exakt kontakt, märkplåt, paket och svensk säljares instruktioner. BaByliss-manualen finns på svenska hos Elon; inget aktuellt butikserbjudande är verifierat.",
  testing: "Vi har läst tillverkarnas produktuppgifter och manualer, inte använt verktygen. Ingen jämförelse av grepp, tidsåtgång, fastnat hår, brännskydd eller lockarnas hållbarhet är utförd här.",
  limitations: "CURLPRO har enligt underlaget 160, 185 och 210 °C och startar på 185 °C. Det är inställningar, inte en rekommendation för allt hår. Manualen beskriver att stänga av och försiktigt frigöra hår sektion för sektion vid trassel. Dess avstängning efter tio minuters inaktivitet ersätter inte avstängning efter användning. Bildrättigheter och butiksmatchning är öppna.",
  sources: [
    ...curlingMethodDecision.sources.filter(source => source.id === "C2"),
    { id: "T1", title: "TYMO – CURLPRO produktsida", url: "https://tymobeauty.com/products/tymo-curlpro", checkedAt: "2026-09-09", supports: "Automatisk inrullning, paket-/kontaktval och 100–240 V. Sidans löften om aldrig trassel och långvariga lockar är inte våra testresultat; inga lager- eller rabattuppgifter återges." },
    { id: "T2", title: "TYMO CURLPRO – tillverkarmanual hos Amazon (PDF)", url: "https://m.media-amazon.com/images/I/91SwB9f3KoL.pdf", checkedAt: "2026-09-09", supports: "Torrt utrett hår, små sektioner, manuell placering, temperaturerna och startläget. Åtgärd vid trassel samt tio minuters inaktivitet före automatisk avstängning. Detta är dokumenterade funktioner, inte egen säkerhetsprovning." },
  ],
};

export const manualOrAutoCurlingGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/locktang",
  title: "Manuell eller automatisk locktång – vilket handarbete vill du slippa?",
  intro: "BaByliss C325E kräver att du rullar upp slingan. TYMO CURLPRO sköter inrullningen med motor, men du placerar fortfarande håret. Välj funktion efter din rutin, inte efter löften om att slippa all teknik.",
  decision: manualOrAutoCurlingDecision,
  productPaths: ["/skonhet/locktang/babyliss-c325e", "/skonhet/locktang/tymo-curlpro"],
  questions: [
    { question: "Kan håret fastna trots anti-tangle?", answer: "Ja, manualen innehåller en instruktion för det fallet. Använd torrt, utrett hår och små sektioner enligt anvisningen. Om det trasslar: stäng av och frigör försiktigt sektionerna enligt manualen. Vi återger inte marknadsföringens aldrig-löfte som en garanti." },
    { question: "Är automatisk styling helt utan teknik?", answer: "Nej. Motorn rullar in, men du delar upp och placerar håret och tar ut slingan. Vi har inte visat vilken modell som går snabbast eller känns enklast för en viss person." },
    { question: "Passar CURLPRO direkt i ett svenskt uttag?", answer: "Det måste kontrolleras för den köpta varianten. Tillverkarens 100–240 V anger spänningsområde, inte vilken stickkontakt paketet innehåller. Vi har inte matchat ett svenskt erbjudande." },
  ],
  related: [{ href: "/skonhet/heatless-lockar-eller-locktang", text: "Vill du forma håret utan en uppvärmd tång?" }, { href: "/skonhet", text: "Fler produktval inom skönhet" }],
};
