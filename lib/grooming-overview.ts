import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { groomingDecision } from "@/lib/grooming-decision";
import { shaverDecision } from "@/lib/shaver-decision";
export const groomingOverview: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" },
  path: "/skonhet/grooming",
  title: "Grooming – vilket moment behöver du hjälp med?",
  intro: "Vill du behålla en skägglängd, forma stubb eller raka ansiktet? Börja med det du saknar i din rutin. Här finns underlag för tre Philips-modeller. Skäggolja, nästrimmer och hårklippare är ännu inte tillräckligt granskade för en rekommendation.",
  decision: {
    reviewedAt: "2026-09-09",
    options: [...groomingDecision.options, shaverDecision.options[0]],
    payMoreWhen: "Det extra verktyget löser ett konkret moment som din befintliga utrustning inte klarar. Ett längdvred, stubbkammar och roterande rakhuvuden fyller olika uppgifter. Vi har ingen kostnadsjämförelse som gör en av modellerna till det mest ekonomiska valet.",
    noPurchaseWhen: "Rutinen du har fungerar. Börja inte med ett komplett groomingpaket när du bara saknar en funktion. Skäggolja eller en extra trimmer behöver inte läggas till av vana.",
    swedishContext: "Läs hela modellnumret och kontrollera vad det svenska paketet innehåller. Kammar, laddningslösning och ersättningshuvuden kan skilja mellan närliggande modeller. Aktuella erbjudanden är inte matchade.",
    testing: "Detta är en sammanställning av dokumenterade modelluppgifter från våra två jämförelser. Vi har inte utfört egen rakning eller provat hudkomfort, livslängd eller kostnad över tid.",
    limitations: "Tre av de sex produkterna i den här guiden saknar ännu tillräckligt granskat underlag: L’Oréal skäggolja, WINSEA nästrimmer och Remington hårklippare. Länkarna nedan finns kvar för orientering och innebär ingen rekommendation. Bilder och butiksmatchning återstår även för Philips-modellerna.",
    sources: [...groomingDecision.sources, ...shaverDecision.sources.filter(source => source.id !== "G1")],
  },
  productPaths: ["/skonhet/grooming/oneblade-360", "/skonhet/grooming/philips-skaggtrimmer", "/skonhet/grooming/philips-rakapparat"],
  questions: [
    { question: "Vilket verktyg ersätter alla de andra?", answer: "Vi har inte belägg för ett sådant universalval. Välj först vad du vill göra: hålla skägglängd, forma kanter eller raka ansiktet. Behåll fungerande utrustning när den redan löser uppgiften." },
    { question: "Är alla sex produkter rekommenderade?", answer: "Nej. Vi har dokumenterade modelluppgifter för de tre Philips-verktygen, med begränsningar. Skäggoljan, nästrimmern och hårklipparen är inte tillräckligt granskade för att vi ska rekommendera ett köp." },
    { question: "Vilken passar bäst som present?", answer: "Fråga först vilket moment mottagaren vill lösa och vad personen redan använder. Vi har inga belägg för att en rakapparat är en uppskattad present för alla, eller att ett extra verktyg behövs." },
  ],
  related: [
    { href: "/skonhet/oneblade-eller-skaggtrimmer", text: "Kanter eller längdkontroll?" },
    { href: "/skonhet/rakapparat-eller-oneblade", text: "Raka ansiktet eller forma stubb?" },
    { href: "/skonhet/grooming/skaggolja", text: "L’Oréal skäggolja – underlag återstår" },
    { href: "/skonhet/grooming/nasharstrimmer", text: "WINSEA nästrimmer – underlag återstår" },
    { href: "/skonhet/grooming/remington-harklippare", text: "Remington hårklippare – underlag återstår" },
  ],
};
