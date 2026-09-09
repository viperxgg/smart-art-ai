import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { soundEnvironmentDecision } from "@/lib/sound-environment-decisions";

export const earplugsNoiseGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" }, path: "/halsa/oronproppar-eller-white-noise",
  title: "Öronproppar eller white noise – mindre ljud eller ett bakgrundsljud?",
  intro: "Loop Quiet 2 dämpar det du hör; Magicteam tillför ljud i rummet. Utgå från vad som stör och om du vill ha något i öronen eller en apparat som också hörs av andra. Ingen av metoderna garanterar bättre sömn.",
  decision: soundEnvironmentDecision, productPaths: ["/halsa/oronproppar", "/halsa/white-noise"],
  questions: [
    { question: "Betyder 24 dB SNR alltid 24 dB mindre snarkljud?", answer: "Nej. Värdet bygger på laboratoriemätning och är inte ett personligt resultat för varje ljudkälla. Rätt storlek, tätning och användning påverkar vad du hör. Vi har inte testat snarkning eller din passform." },
    { question: "Tar Magicteam bort bullret från grannarna?", answer: "Den tillför bakgrundsljud i rummet. Det är inte samma sak som att sänka ljudet från källan, och vi har inte visat att den maskerar just din störning." },
    { question: "Kan jag använda Magicteam utan strömkabel på resan?", answer: "Det är inte verifierat. Rubriken anger nät eller USB, men ett separat fält säger uppladdningsbar. Kontrollera batteri, kabel och adapter innan du väljer den för användning utan uttag." },
    { question: "Är 32 volymsteg samma sak som 32 decibel?", answer: "Nej. Antalet steg säger inget om ljudnivån vid örat eller kudden. Vi har inte mätt detta och anger ingen garanterat säker placering eller volyminställning." },
    { question: "Behöver jag köpa båda?", answer: "Vi har inget underlag som visar att kombinationen passar dig bättre. Börja med den konkreta störningen, behåll det som fungerar och undvik att lägga till ljud eller prylar utan ett tydligt behov." },
  ],
  related: [{ href: "/halsa/sovmask-eller-white-noise", text: "Är det ljus snarare än ljud som stör?" }],
};
