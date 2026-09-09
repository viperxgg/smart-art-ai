import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { sleepEnvironmentDecision } from "@/lib/sleep-environment-decision";

export const maskNoiseDecision: DecisionRecord = {
  ...sleepEnvironmentDecision,
  options: sleepEnvironmentDecision.options.slice(0, 2),
  sources: sleepEnvironmentDecision.sources.filter(source => source.id !== "E1"),
  payMoreWhen: "Justerbara kåpor löser ett konkret passformsproblem med din nuvarande mask. Magicteams listning beskriver volym- och timerreglage; batteridrift är inte bekräftad. Ett större antal ljud är inte bevis för att du sover bättre.",
  noPurchaseWhen: "En befintlig gardin eller mask redan räcker, eller du kan minska störningen utan en ny apparat. Köp inte båda bara för att ljus och ljud nämns tillsammans.",
  testing: "Vi har läst Mantas originalproduktsida och 1177:s vuxeninformation. Vi har inte testat maskens passform, ljudmaskering eller sömnresultat. Magicteams svenska ASIN har nu matchats; funktionerna är fortfarande säljaruppgifter.",
  limitations: "Mantas justeringar är dokumenterade. Magicteams svarta variant, 40 ljud och timer är beskrivna i den matchade listningen; batteri och fullständig manual är inte verifierade. Ingen jämförande vinnare eller kombinationseffekt kan styrkas; bilder och svenska erbjudanden återstår.",
};

export const mantaMaskDecision: DecisionRecord = {
  ...maskNoiseDecision,
  options: [maskNoiseDecision.options[0]],
  sources: maskNoiseDecision.sources.filter(source => !["N1", "N2"].includes(source.id)),
  payMoreWhen: "Du behöver kunna justera kåpornas läge och remmens spänning eftersom en enklare mask inte passar. Behåll din befintliga mask om den redan fungerar; vi har ingen prisjämförelse som visar att ett byte lönar sig.",
  noPurchaseWhen: "Du redan kan avskärma ljuset på ett sätt som fungerar, eller när det som stör inte är ljuset. En dyrare mask är inte i sig ett svar på sömnsvårigheter.",
  swedishContext: "Kontrollera originalmodellen och vilken variant som levereras i det svenska erbjudandet. ASIN och paket är inte matchade. 1177 rekommenderar att söka hjälp om sömnbesvär inte förbättras trots förändringar; sidan är ingen behandling eller individuell bedömning.",
  testing: "Vi har läst Mantas produktsida och 1177:s information. Vi har inte testat ljusläckage, tryck, komfort i sidoläge, hållbarhet eller sömn. Tillverkarens ord om full mörkläggning är inte vår mätning.",
  limitations: "Modellens justeringsmöjligheter är dokumenterade, men passformen varierar och vi garanterar inte ett personligt resultat. Svenska erbjudanden, ASIN-matchning och bildrättigheter återstår.",
};

export const maskNoiseGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" },
  path: "/halsa/sovmask-eller-white-noise",
  title: "Sovmask eller ljudmaskin – vad är det som stör?",
  intro: "Mantas originalmask har justerbara kåpor och rem. Magicteams svarta variant har enligt den matchade listningen ljud-, volym- och timerreglage. Jämför behovet och kontrollera begränsningarna innan du köper något nytt.",
  decision: maskNoiseDecision,
  productPaths: ["/halsa/sovmask", "/halsa/white-noise"],
  questions: [
    { question: "Är masken garanterat tryckfri och helt mörk?", answer: "Det är tillverkarens marknadsföring, inte en garanti från våra tester. Kontrollera passformen i den ställning du brukar sova i; kåporna och remmen kan justeras." },
    { question: "Tar Magicteam bort bullret?", answer: "Vi har inget verifierat test som visar det. Att lägga till bakgrundsljud är inte samma sak som att minska ljudkällan. De beskrivna reglagen har inte provats här." },
    { question: "Har Magicteam timer och 40 ljud?", answer: "Den matchade svarta varianten anger 40 ljud, 32 volymsteg och timer för 1/2/3 timmar eller kontinuerlig drift. Vi har inte funktionstestat detta; uppgifterna bevisar inte ett sömnresultat." },
    { question: "Är kombinationen bättre än en produkt?", answer: "Det har vi inte visat. Utgå från en konkret störning och behåll det som fungerar i stället för att automatiskt lägga till fler produkter." },
  ],
  related: [
    { href: "/halsa/sovmask", text: "Manta original – passar den dig?" },
    { href: "/halsa/white-noise", text: "Magicteam – funktioner och strömfrågor" },
    { href: "/halsa/sov-battre-i-host", text: "Sovmiljö: ljus, ljud och tyngd" },
    { href: "/halsa", text: "Fler beslut för vardagen" },
  ],
};
