import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { indoorAirDecision } from "@/lib/indoor-air-decision";

export const humidifierMethodDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    indoorAirDecision.options[0],
    { productSlug: "beurer-lb200-luftfuktare", model: "Beurer LB 200",
      variant: "Artikel 10069, 3 liter och 220–240 V enligt manualen. Inte LB 300 Plus. Katalogens ASIN B0CB7ZQNYC och aktuell svensk leverans är inte matchade.",
      chooseIf: "du har konstaterat behov av mer fukt och vill använda kall avdunstning med ett utbytbart filter. LB 200 har fuktstyrning och filtertorkning; räkna med både vatten- och filterskötsel.",
      avoidIf: "du vill slippa förbrukningsfilter, avkalkning eller plats runt apparaten. Manualen kräver 30 cm fritt runtom och filterbyte senast efter sex månader, tidigare vid skada eller kraftig smuts.",
      sourceIds: ["B1", "B2"], merchantVariantVerified: false },
  ],
  payMoreWhen: "En dokumenterad skillnad passar din vardag: fuktstyrning, åtkomlig tank eller en skötselrutin du kan följa. Räkna in filter, vatten och rengöring. Synlig dimma, fler liter eller marknadsföring om hygien avgör inte ensamt värdet.",
  noPurchaseWhen: "Du inte har kontrollerat fuktnivån eller redan ser kondens och fuktproblem. En luftfuktare åtgärdar inte orsaken till dålig ventilation eller fuktskada. Mer vatten i luften behöver inte vara rätt åtgärd.",
  swedishContext: indoorAirDecision.swedishContext,
  testing: "Levoits tidigare granskade EU-manual och EPA-råd återanvänds. Vi har läst Beurers modellblad på webben och manualens engelska avsnitt. Vi har inte mätt fukteffekt, ljud, energiförbrukning eller bakteriespridning för dessa modeller.",
  limitations: "Tankvolym och olika tillverkartester ger ingen rättvis effektvinnare. Beurers hygienpåståenden är inte vårt jämförande test. Svensk modellmatchning, filterpris och bildrättigheter återstår. Fuktstyrning ersätter inte kontroll av kondens och skötsel.",
  sources: [
    ...indoorAirDecision.sources.filter(source => ["A1", "A3", "A5"].includes(source.id)),
    { id: "B1", title: "Beurer – LB 200, artikel 10069", url: "https://www.beurer.com/global/p/10069/", checkedAt: "2026-09-09", supports: "Kall avdunstning, trelitersbehållare, fuktstyrning och filtertorkning. Modellens marknadsföringspåståenden om ljud och hygien är inte våra resultat." },
    { id: "B2", title: "Beurer – LB 200 manual, 2023-02-21", url: "https://pim.beurer.com/images/attribut/100.69_LB200_2023-02-21_02_IM1_BEU.pdf", checkedAt: "2026-09-09", supports: "Sidor 20–30: placering, vatten, rengöring, filterbyte och specifikationer. Filterreferens 110.005. Läs hela manualen för ditt exemplar." },
  ],
};

export const humidifierMethodGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" },
  path: "/halsa/ultraljud-eller-evaporativ-luftfuktare",
  title: "Ultraljud eller avdunstning – vilken skötsel passar dig?",
  intro: "Classic 300S använder ultraljud; LB 200 låter vatten avdunsta via ett filter. Börja med ett kontrollerat fuktbehov och jämför skötseln. Synlig dimma är inget mått på hur lämplig apparaten är för ditt rum.",
  decision: humidifierMethodDecision,
  productPaths: ["/halsa/luftfuktare", "/halsa/luftfuktare/beurer-lb200"],
  questions: [
    { question: "Är LB 200 underhållsfri eftersom den använder avdunstning?", answer: "Nej. Manualen beskriver regelbunden rengöring och avkalkning samt filterbyte. Torkfunktionen ersätter inte detta arbete." },
    { question: "Vilket ersättningsfilter ska jag leta efter?", answer: "Den granskade LB 200-manualen anger 110.005. Kontrollera kompatibilitet och aktuellt svenskt pris före köp; vi har inte verifierat ett erbjudande." },
    { question: "Är Levoits större tank bevis för bättre effekt?", answer: "Nej. Sex respektive tre liter beskriver vattenkapacitet. Vi har inte jämfört hur modellerna påverkar samma rum vid samma förhållanden." },
    { question: "Vilken är tystast eller mest hygienisk?", answer: "Det har vi inte testat. Tillverkaruppgifter från olika tester räcker inte för att utse en vinnare här." },
  ],
  related: [
    { href: "/halsa/luftfuktare-guide", text: "Behöver du en luftfuktare?" },
    { href: "/halsa", text: "Fler beslut för vardagen" },
    { href: "/jamforelser", text: "Alla jämförelser" },
  ],
};
export const humidifierOverviewGuide: DecisionGuide = {
  ...humidifierMethodGuide, path: "/halsa/luftfuktare-guide",
  title: "Luftfuktare – finns behovet och tid för skötseln?",
  intro: "Kontrollera fuktnivån innan du väljer apparat. Här jämför vi Classic 300S och LB 200, deras olika teknik och vad som krävs av dig efter köpet.",
  related: [
    { href: humidifierMethodGuide.path, text: "Ultraljud eller avdunstning?" },
    ...humidifierMethodGuide.related.filter(link => link.href !== "/halsa/luftfuktare-guide"),
  ],
};
