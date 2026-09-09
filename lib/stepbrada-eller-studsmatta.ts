import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { stepTrampolineDecision } from "@/lib/home-cardio-decisions";

export const stepTrampolineGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" }, path: "/traning/stepbrada-eller-studsmatta",
  title: "Stepbräda eller studsmatta – fast plattform eller fjädrande yta?",
  intro: "Utgå från passet och utrymmet hemma. Reebok Step ger en upphöjd fast plattform; DH FitLife 102 cm ger en fjädrande yta med handtag. Vi har inte underlag för att utse den ena som skonsammast för dina leder.",
  decision: stepTrampolineDecision, productPaths: ["/traning/stepbrada", "/traning/studsmatta"],
  questions: [
    { question: "Kan jag använda Reeboks 120 kg-gräns för den länkade brädan?", answer: "Inte utifrån vår kontroll. Butikstabellen anger 110 kg medan Reeboks aktuella sida anger 120 kg. Bekräfta revision och manual för den levererade brädan i stället för att välja den högsta siffran." },
    { question: "Är studsmattan bevisat skonsammare för knän och rygg?", answer: "Vi har inte jämförande tester för de här produkterna som styrker det. En fjädrande yta räcker inte för att bedöma om en viss rörelse passar dig." },
    { question: "Ingår skyddsnät med DH FitLife?", answer: "Det är inte bekräftat för det länkade paketet. Tillverkarens text nämner nät, men den svenska listningen gör inte det tydligt. Köp inte med nätet som förutsättning utan att innehållet har klargjorts." },
    { question: "Räcker det att mäta produktens golvyta?", answer: "Nej. Lägg även märke till den fria ytan för rörelsen och höjden ovanför dig. Kontrollera monterings- och användningsanvisningar samt platsen för förvaring." },
  ],
  related: [{ href: "/traning/studsmatta-eller-hopprep", text: "Studsmatta eller hopprep – vad ryms hemma?" }],
};
