import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { trampolineRopeDecision } from "@/lib/home-cardio-decisions";

export const trampolineRopeGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" }, path: "/traning/studsmatta-eller-hopprep",
  title: "Studsmatta eller hopprep – vad ryms under träning och efteråt?",
  intro: "Ett rep går lättare att packa undan, men kräver ändå fri yta när det roterar. En 102 cm-studsmatta behöver plats även mellan passen. Välj efter rörelsen och bostaden, inte ett obestyrkt löfte om maximal effekt på minimal yta.",
  decision: trampolineRopeDecision, productPaths: ["/traning/studsmatta", "/traning/hopprep"],
  questions: [
    { question: "Är PORTENTUM-repet 2,7 eller 2,8 meter?", answer: "Listningen anger båda. Vi har inte mätt det och kan inte avgöra den användbara längden från texten ensam. Bekräfta måttet om längdskillnaden påverkar om repet passar dig." },
    { question: "Tar hopprep nästan ingen plats?", answer: "Det gäller förvaring, inte själva hoppningen. Repet behöver fri passage runt kroppen och över huvudet. Kontrollera även lampor, möbler och andra hinder." },
    { question: "Är studsmattan tyst nog för en lägenhet?", answer: "Vi har inte mätt ljud eller vibrationer i bostäder. Gummifötter och leverantörens ord om låg ljudnivå bevisar inte hur grannarna påverkas." },
    { question: "Vilket redskap förbränner flest kalorier?", answer: "Vi har inget produktjämförande underlag som ger ett tillförlitligt svar. Vi jämför format och praktiska krav och lovar inte ett visst resultat eller att du orkar längre." },
  ],
  related: [{ href: "/traning/stepbrada-eller-studsmatta", text: "Behöver du en fast plattform i stället?" }],
};
