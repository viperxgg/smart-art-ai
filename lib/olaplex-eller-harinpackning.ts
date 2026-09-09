import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { olaplexMaskDecision } from "@/lib/hair-mask-decision";

export const olaplexEllerHarinpackningFaqItems: DecisionGuide["questions"] = [
  { question: "Är Olaplex bättre än en vanlig hårinpackning?", answer: "Vi har inte jämförande testdata som visar det. PLUS är en behandling före schampo, medan Thick Hair-masken används efter. Båda tillverkarna beskriver vårdande och reparerande effekter. Vi kan inte reducera skillnaden till att bara den ena reparerar." },
  { question: "Gäller tre minuter även gamla No.3?", answer: "Den lästa instruktionen gäller N°.3 PLUS Complete Repair Treatment. Blanda inte ihop den med äldre No.3 Hair Perfector. Följ instruktionen på den flaska du faktiskt har." },
  { question: "Behöver jag båda?", answer: "Inte automatiskt. Ett extra steg behöver fylla ett behov som din nuvarande rutin inte löser. Att en produkt används före schampo och en annan efter är inte bevis för att du behöver köpa båda." },
  { question: "Vilken Absolut Repair-mask jämför ni?", answer: "Masque Thick Hair som sköljs ur, inte Gold Masque eller Molecular. Den svenska tillverkarsidan beskriver 500 ml och listar 250 ml separat. Vår äldre butikslänk för 250 ml är inte verifierad mot exakt variant." },
];

export const treatmentMaskGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/olaplex-eller-harinpackning",
  title: "Behandling före tvätt eller mask efteråt – vad behöver du?",
  intro: "N°.3 PLUS och Absolut Repair Thick Hair används i olika steg. Behåll det som fungerar; olika användning är inget skäl att automatiskt köpa båda.",
  decision: olaplexMaskDecision, productPaths: ["/skonhet/olaplex-no3", "/skonhet/harinpackning"],
  questions: olaplexEllerHarinpackningFaqItems,
  related: [{"href": "/guider/harinpackning", "text": "Fler hårmasker och när du kan avstå"}, {"href": "/skonhet/olaplex-schampo-eller-balsam", "text": "Vilken funktion saknas i tvättrutinen?"}],
};
