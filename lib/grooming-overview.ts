import { beardOilDecision } from "@/lib/beard-oil-decision";
import { hairClipperDecision } from "@/lib/hair-clipper-decision";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { groomingDecision } from "@/lib/grooming-decision";
import { shaverDecision } from "@/lib/shaver-decision";
export const groomingOverview: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" },
  path: "/skonhet/grooming",
  title: "Grooming – vilket moment behöver du hjälp med?",
  intro: "Vill du behålla en skägglängd, forma stubb eller raka ansiktet? Börja med det du saknar i din rutin. Här finns underlag för tre Philips-modeller och Remington HC5035 för hemmaklippning. Även Barber Club-skäggoljans användning är granskad, med reservation för aktuell formula. WINSEA nästrimmer saknar tillräckligt granskat underlag.",
  decision: {
    reviewedAt: "2026-09-09",
    options: [...groomingDecision.options, shaverDecision.options[0], ...hairClipperDecision.options, ...beardOilDecision.options],
    payMoreWhen: "Den extra produkten löser ett konkret moment som din befintliga utrustning inte klarar. Ett längdvred, stubbkammar och roterande rakhuvuden fyller olika uppgifter. Vi har ingen kostnadsjämförelse som gör en av modellerna till det mest ekonomiska valet.",
    noPurchaseWhen: "Rutinen du har fungerar. Börja inte med ett komplett groomingpaket när du bara saknar en funktion. Skäggolja eller en extra trimmer behöver inte läggas till av vana.",
    swedishContext: "Läs hela modellnumret och kontrollera vad det svenska paketet innehåller. Kammar, laddningslösning och ersättningshuvuden kan skilja mellan närliggande modeller. Aktuella erbjudanden är inte matchade.",
    testing: "Detta är en sammanställning av dokumenterade modelluppgifter från jämförelserna, HC5035-manualen och skäggoljans tillverkarsidor. Vi har inte utfört egen rakning eller provat hudkomfort, livslängd eller kostnad över tid.",
    limitations: "WINSEA nästrimmer saknar tillräckligt granskat underlag. Dess länk finns kvar för orientering och innebär ingen rekommendation. Skäggoljans aktuella svenska ingredienslista behöver kontrolleras på förpackningen. Bilder och butiksmatchning återstår även för de granskade modellerna.",
    sources: [...groomingDecision.sources, ...shaverDecision.sources.filter(source => source.id !== "G1"), ...hairClipperDecision.sources, ...beardOilDecision.sources],
  },
  productPaths: ["/skonhet/grooming/oneblade-360", "/skonhet/grooming/philips-skaggtrimmer", "/skonhet/grooming/philips-rakapparat", "/skonhet/grooming/remington-harklippare", "/skonhet/grooming/skaggolja"],
  questions: [
    { question: "Behöver jag en särskild skäggolja?", answer: "Inte om din rutin redan fungerar. Barber Club-oljan är avsedd att mjukgöra och forma längre skägg; vi har inte visat någon effekt på skäggtillväxt. Kontrollera doft och ingredienser på flaskan." },
    { question: "Kan jag skölja HC5035-bladen?", answer: "Den svenska manualen säger att bladsetet ska borstas utan vatten eller rengöringsmedel. Stäng av och dra ur kontakten först. Följ manualen framför produktsidans formulering om tvätt." },
    { question: "Vilket verktyg ersätter alla de andra?", answer: "Vi har inte belägg för ett sådant universalval. Välj först vad du vill göra: hålla skägglängd, forma kanter eller raka ansiktet. Behåll fungerande utrustning när den redan löser uppgiften." },
    { question: "Är alla sex produkter rekommenderade?", answer: "Nej. Vi har dokumenterade modelluppgifter för de tre Philips-verktygen och HC5035, med begränsningar. Skäggoljans användning är granskad, men aktuell formula behöver matchas. WINSEA nästrimmer saknar ännu tillräckligt underlag." },
    { question: "Vilken passar bäst som present?", answer: "Fråga först vilket moment mottagaren vill lösa och vad personen redan använder. Vi har inga belägg för att en rakapparat är en uppskattad present för alla, eller att ett extra verktyg behövs." },
  ],
  related: [
    { href: "/skonhet/oneblade-eller-skaggtrimmer", text: "Kanter eller längdkontroll?" },
    { href: "/skonhet/rakapparat-eller-oneblade", text: "Raka ansiktet eller forma stubb?" },
    { href: "/skonhet/grooming/nasharstrimmer", text: "WINSEA nästrimmer – underlag återstår" },
  ],
};
