import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { hairStylingDecision } from "@/lib/hair-styling-decision";

export const leaveInOilDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "cantu-leave-in-conditioner", model: "Cantu Shea Butter Leave-In Conditioning Repair Cream – Classics",
      variant: "Classics med sheasmör, inte Argan Oil, Natural Hair-krämen eller en mist. Katalogens 453 g/ASIN B00449W12S är inte matchat mot aktuell svensk förpackning eller ingredienslista.",
      chooseIf: "du söker en kräm som lämnas kvar i håret och vill jämföra tillverkarens alternativ för torrt, skadat eller grovt hår. Anvisningen beskriver applicering i fuktigt hår utan ursköljning.",
      avoidIf: "du förväntar dig en lätt spray eller en garanti mot att håret känns tungt. Vi har inte testat känslan, doseringen i ditt hår eller värmeskydd för ett visst verktyg.",
      sourceIds: ["C1"], merchantVariantVerified: false },
    hairStylingDecision.options[0],
  ],
  payMoreWhen: "En verifierad skillnad i formula eller användning fyller ett behov du faktiskt har. Kräm och oljeberikad finish kan överlappa; du behöver inte köpa båda. Jämför exakt variant, totalpris och använd mängd. Gram i en burk och milliliter i en flaska ger inte ensamma en rättvis kostnad per användning.",
  noPurchaseWhen: "Ditt befintliga balsam eller din stylingprodukt redan gör håret så hanterbart som du önskar. Lägg inte till två steg bara för att kategorierna kallas leave-in och hårolja.",
  swedishContext: "Moroccanoil stöds av en svensk tillverkarsida; Cantu-underlaget gäller den internationella Classics-sidan. Kontrollera fullständigt namn, storlek, innehåll och instruktion på förpackningen du får i Sverige. Vi har inte matchat aktuella butikserbjudanden.",
  testing: "Vi har inte jämfört mjukhet, utredning, glans, friss eller hur tungt håret känns. Tillverkarnas beskrivningar visar avsedd användning, inte att någon produkt passar bäst för alla med torrt hår.",
  limitations: "Cantu-sidan ger inte en matchad svensk ingredienslista. Vi gör därför inget påstående om att den lokala varianten är silikonfri, parfymfri eller identisk med andra Cantu-krämer. Bilder och erbjudanden återstår att verifiera. Vi lovar inte att någon av produkterna ersätter ett uttryckligt värmeskydd.",
  sources: [
    { id: "C1", title: "Cantu – Classics Leave-In Conditioning Repair Cream", url: "https://www.cantubeauty.com/products/classics/leave-in-conditioning-repair-cream/", checkedAt: "2026-09-09", supports: "Sheasmörsvarianten, tillverkarens målgrupp och användning i fuktigt hår utan ursköljning. Ingen svensk förpacknings- eller effektkontroll." },
    { ...hairStylingDecision.sources[0], checkedAt: "2026-09-09" },
  ],
};

export const leaveInOilGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/leave-in-eller-harolja",
  title: "Cantu-kräm eller Moroccanoil Original – behöver du ett extra steg?",
  intro: "Båda lämnas kvar i håret. Jämför den exakta formulan och hur du vill använda den; leave-in betyder inte automatiskt lättare känsla eller bättre utredning.",
  decision: leaveInOilDecision, productPaths: ["/skonhet/leave-in-conditioner", "/skonhet/harolja"],
  questions: [
    { question: "Är Moroccanoil också en leave-in?", answer: "Ja. Original lämnas kvar och kan enligt tillverkaren användas i handdukstorkat eller torrt hår. Skillnaden här är alltså inte att bara krämen får vara kvar i håret." },
    { question: "Är Cantu alltid lättare än oljan?", answer: "Det vet vi inte. Den granskade Cantu-produkten är en kräm, inte en spray. Vi har inget test som jämför tyngd eller känsla mellan dessa två i olika hårtyper." },
    { question: "Måste jag använda båda?", answer: "Nej. Börja med vad du redan har och vad som saknas. Vi ger ingen generell rekommendation att lägga kräm och olja ovanpå varandra." },
    { question: "Är Moroccanoil ren arganolja?", answer: "Nej. Original-sidans formula MOT01 listar bland annat silikoner, arganolja och parfym. Pure Argan Oil är en annan produkt. Förpackningens aktuella lista gäller." },
  ],
  related: [{ href: "/skonhet/harolja-eller-varmeskydd", text: "Finish eller uttryckligt värmeskydd?" }, { href: "/skonhet/olaplex-schampo-eller-balsam", text: "Vilken funktion saknas i tvättrutinen?" }],
};
