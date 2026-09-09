import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { airStylerDecision } from "@/lib/air-styler-decisions";
import { hairDryerDecision } from "@/lib/hair-dryer-decisions";

export const airStylerOrDryerDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [airStylerDecision.options[0], hairDryerDecision.options[0]],
  payMoreWhen: "Du faktiskt behöver borsten på apparaten, ett plattningstillbehör eller en diffusor. Börja med arbetsmomentet som saknas. Vi har inte visat att ett av paketen sparar tid eller ger bättre resultat på alla hårtyper.",
  noPurchaseWhen: "Din befintliga fön och borste redan löser uppgiften. Köp inte båda automatiskt: AS126E:s förtorkning måste räknas in, men innebär inte i sig att du behöver köpa ytterligare en fön.",
  swedishContext: "Jämför AS126E med just AC9140 och kontrollera hela paketet hos säljaren. AC9140-manualens rundborste ingår inte bland tillbehören. Stickkontakt, lager och aktuella svenska erbjudanden är inte verifierade.",
  testing: "Vi har jämfört tillverkarnas dokumentation, inte torkat eller stylat hår med apparaterna. Vi rangordnar inte snabbhet, skonsamhet, frizz eller livslängd.",
  limitations: "AS126E-manualen börjar med ungefär 80 procent torrt hår. AC9140:s vanliga torkning börjar efter att överskottsvatten kramats ur; dess Style Shot har separat förberedelse och höjer värmen. Följ rätt manual. Bildrättigheter och butiksmatchning är inte klara.",
  sources: [airStylerDecision.sources[0], ...hairDryerDecision.sources.filter(source => ["D1", "D2"].includes(source.id))],
};
export const airStylerOrDryerGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/varmluftsborste-eller-fon",
  title: "Varmluftsborste eller fön – vilket arbetsmoment vill du ändra?",
  intro: "AS126E samlar borstning och luftstyling efter förtorkning. AC9140 har koncentratorer och diffusor, men borsten hålls separat. Jämför grepp och tillbehör innan du räknar med en tidsvinst.",
  decision: airStylerOrDryerDecision,
  productPaths: ["/skonhet/varmluftsborste/babyliss-as126e", "/skonhet/hartork/remington-proluxe-ac9140"],
  questions: [
    { question: "Ersätter AS126E hela torkningen?", answer: "Dess manual utgår från att håret är ungefär 80 procent torrt inför styling och beskriver ett munstycke för överskottsfukt. Räkna in förberedelsen; vi har inte mätt hela rutinens tidsåtgång." },
    { question: "Ingår en borste till AC9140?", answer: "Manualen listar två koncentratorer och en diffusor. Rundborsten som nämns i stylinginstruktionen ingår inte. Använd en lämplig borste du redan har om den fungerar för dig." },
  ],
  related: [{ href: "/skonhet/hartork", text: "Behöver du diffusor eller vikbart handtag?" }, { href: "/skonhet/varmluftsborste", text: "Vilka borsttillbehör behöver du?" }],
};
