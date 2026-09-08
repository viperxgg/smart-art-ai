import type { DecisionComparisonFaqItem, DecisionComparisonPick, DecisionComparisonRelatedLink } from "@/lib/decision-comparison";
import type { DecisionRecord } from "@/lib/decision-record";
import { ceraveHydratingCleanserProduct, cetaphilGentleCleanserProduct } from "@/lib/products";

export const ceraveEllerCetaphilDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [
    {
      productSlug: "cerave-hydrating-cleanser",
      model: "CeraVe Hydrating Cleanser",
      variant: "Svensk formula enligt tillverkaren, F.I.L. D214629/4. Butikens 236 ml-variant är inte matchad i denna granskning.",
      chooseIf: "du söker en parfymfri rengöring som tillverkaren anger för normal till torr hud, även för kroppen.",
      avoidIf: "du redan har en rengöring som fungerar och endast vill byta för att ingrediensnamnen låter mer avancerade.",
      sourceIds: ["C1"],
      merchantVariantVerified: false,
    },
    {
      productSlug: "cetaphil-gentle-cleanser",
      model: "Cetaphil Gentle Skin Cleanser",
      variant: "Svensk formula FIL.1747. Butikens 460 ml-variant är inte matchad i denna granskning.",
      chooseIf: "du vill jämföra en rengöring som tillverkaren anger för normal, känslig eller torr hud och formulan passar dina tidigare erfarenheter.",
      avoidIf: "du väljer den enbart för att du fått intrycket att den bevisligen är mildare än CeraVe. Vårt underlag visar inte det.",
      sourceIds: ["C2"],
      merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Betala mer först när du kan peka på en skillnad du själv behöver. Vi har inget jämförande test som visar att den dyrare av dessa två ger bättre resultat. Jämför samma formula och pris per 100 ml, inklusive frakt, innan du bedömer värdet.",
  noPurchaseWhen: "Din nuvarande rengöring gör det du behöver och du är nöjd med den. Du behöver inte båda bara för att de har olika ingredienser.",
  swedishContext: "Källorna gäller de svenska produktsidorna. Kontrollera produktnamn, innehållsförteckning och volym på den faktiska förpackningen; ett liknande namn hos en butik räcker inte för att matcha formulan. Vi har inte verifierat lager eller dagspris.",
  testing: "Vi har läst tillverkarnas produktuppgifter. Vi har inte provat produkterna på hud, mätt rengöringsförmåga eller gjort ett jämförande irritationstest.",
  limitations: "Ingredienslistor visar innehåll, inte vilken produkt din hud föredrar. Råden om köp och avstående är redaktionella slutsatser. Ingen vinnare eller numerisk poäng utses. Butikslänkarna i denna jämförelse visas först när rätt variant har kontrollerats.",
  sources: [
    { id: "C1", title: "CeraVe Sverige – Hydrating Cleanser", url: "https://www.cerave.se/alla-produkter/hydrating-cleanser", checkedAt: "2026-09-08", supports: "Tillverkaruppgifter om målgrupp, parfymfri formula, ceramider och hyaluronsyra samt aktuell ingredienslista. Tillverkaren anger att innehållet kan uppdateras." },
    { id: "C2", title: "Cetaphil Sverige – Gentle Skin Cleanser", url: "https://www.cetaphil.se/hudrengoring/gentle-skin-cleanser/3499320014396.html", checkedAt: "2026-09-08", supports: "Tillverkaruppgifter om målgrupp och formulan med glycerin, niacinamid och pantenol. Källan jämför inte effekten med CeraVe." },
  ],
};

export const ceraveEllerCetaphilFaqItems: DecisionComparisonFaqItem[] = [
  { question: "Är Cetaphil mildare än CeraVe?", answer: "Det kan vi inte fastställa från de två tillverkarsidorna. Vi har inget eget jämförande test och utser därför ingen vinnare för känslig hud." },
  { question: "Behöver jag båda rengöringarna?", answer: "Inte om en redan fyller ditt behov. Olika ingredienser är i sig inget skäl att köpa ytterligare en rengöring." },
  { question: "Hur jämför jag priset?", answer: "Kontrollera samma formula och volym, räkna pris per 100 ml och inkludera frakt. Vi visar inget aktuellt pris eftersom det inte har verifierats." },
];
export const ceraveEllerCetaphilComparisonRows = [
  ["Produkt", "Hydrating Cleanser", "Gentle Skin Cleanser"],
  ["Ingredienser som skiljer", "Ceramider och hyaluronsyra", "Niacinamid och pantenol"],
  ["Formula i granskningen", "D214629/4", "FIL.1747"],
  ["Butiksvariant verifierad?", "Nej", "Nej"],
  ["Eget jämförande test?", "Nej", "Nej"],
] as const;
export const ceraveEllerCetaphilPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  { product: ceraveHydratingCleanserProduct, path: "/skonhet/cerave-rengoring", badge: "Hydrating Cleanser", headline: "CeraVe Hydrating Cleanser", shortBody: "Läs vidare om produkten. Matchning av butiksvariant återstår; jämförelsens källor och begränsningar står ovan." },
  { product: cetaphilGentleCleanserProduct, path: "/skonhet/cetaphil-rengoring", badge: "Gentle Skin Cleanser", headline: "Cetaphil Gentle Skin Cleanser", shortBody: "Läs vidare om produkten. Matchning av butiksvariant återstår; jämförelsens källor och begränsningar står ovan." },
];
export const ceraveEllerCetaphilRelatedLinks: DecisionComparisonRelatedLink[] = [
  { href: "/skonhet", label: "Skönhet", text: "Fler jämförelser inom skönhet." },
  { href: "/om-oss", label: "Om oss", text: "Redaktion och finansiering." },
];
