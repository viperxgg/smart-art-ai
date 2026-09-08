import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { hairMaskDecision, hairMaskProductPaths } from "@/lib/hair-mask-decision";

export const harinpackning: DecisionGuide = {
  path: "/guider/harinpackning",
  title: "Vilken hårmask passar din rutin?",
  intro: "Behöver du en mask efter schampo, en behandling före tvätt eller en leave-in? Här jämför vi sex namngivna produkter efter användning och begränsningar. Börja med det du saknar i din nuvarande rutin. Listan är inte ett testresultat eller en rangordning.",
  decision: hairMaskDecision,
  productPaths: hairMaskProductPaths,
  questions: [
    { question: "Varför utser ni ingen bäst i test?", answer: "Vi har tillverkaruppgifter men inget jämförande användartest. Kundbetyg från olika listningar, versioner och tidpunkter kan inte ensamma motivera en vinnare. Därför beskriver vi villkor för valet i stället." },
    { question: "Behöver jag både Olaplex och en mask?", answer: "Inte automatiskt. PLUS används före schampo enligt Olaplex; flera masker här används efter. Två olika steg är inte i sig ett skäl att köpa båda. Utgå från ett konkret behov som din befintliga rutin inte fyller." },
    { question: "Ska alla masker användas lika länge eller lika ofta?", answer: "Nej. Moroccanoil anger 5–7 minuter för Intense Hydrating, L’Oréal 3–5 för Thick Hair och Wella fem för Fusion. Olaplex PLUS anger tre minuter före schampo. Garniers lästa svenska sida anger tre användningssätt men ingen exakt tid. Följ instruktionen på rätt förpackning, inte en generell veckoregel." },
    { question: "Kan en mask ersätta balsam eller vara leave-in?", answer: "Det beror på produkten. Moroccanoils FAQ säger att balsam inte behövs efter Intense Hydrating Mask. Garnier anger balsam, hårkur och leave-in som tre användningssätt för Pineapple. Det gör inte de andra maskerna lämpliga att lämna kvar i håret." },
    { question: "När kan jag avstå från en ny produkt?", answer: "När det du har redan fungerar. En längre rutin och en större burk är inte mål i sig. Om du vill prova något nytt, välj efter användningssätt, förpackningens innehåll och ett tydligt behov – inte en gissad diagnos utifrån ett hårstrå." },
  ],
  related: [
    { href: "/skonhet/olaplex-eller-harinpackning", text: "Behandling före eller mask efter schampo?" },
    { href: "/skonhet/harolja-eller-varmeskydd", text: "Hårolja eller värmeskydd?" },
  ],
};
