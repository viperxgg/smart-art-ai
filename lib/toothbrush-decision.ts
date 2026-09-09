import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const toothbrushDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "oralb-tandborste", model: "Oral-B iO 5S – iO Series 5",
      variant: "Katalogreferens B0B5V7RNX3. Underlaget beskriver iO Series 5; exakt S-handelspaket, medföljande huvuden och svensk laddare är inte verifierade.",
      chooseIf: "du vill ha iO-systemets trycksignal och appstöd men inte behöver iO 6:s interaktiva display.",
      avoidIf: "du väljer den för att få ett annat och billigare borsthuvudssystem än iO 6. Båda använder iO-huvuden.",
      sourceIds: ["D1"], merchantVariantVerified: false },
    { productSlug: "oralb-io6", model: "Oral-B iO Series 6",
      variant: "Katalogreferens B0B4SGMNZT. Serieuppgifter används; aktuell svensk generation, färg, programuppsättning, laddare och antal medföljande huvuden måste matchas separat.",
      chooseIf: "displayens återkoppling är något du vill läsa på handtaget och använda i vardagen.",
      avoidIf: "din nuvarande borste fungerar och du inte saknar displayen. Fler funktioner bevisar inte bättre resultat för dig.",
      sourceIds: ["D1"], merchantVariantVerified: false },
    { productSlug: "philips-sonicare-5300", model: "Philips Sonicare 5300 – referens HX7101/01",
      variant: "Vi granskar HX7101/01, inte automatiskt HX7101/03 eller HX7108/02. Katalogens ASIN B0DCGK4MT7 är ännu inte verifierat mot ett aktuellt svenskt erbjudande.",
      chooseIf: "du vill jämföra två intensiteter, tryckvarning genom vibration och en påminnelse om borsthuvudbyte. Kontrollera att handtagets form passar ditt grepp.",
      avoidIf: "du förutsätter att ett resefodral ingår eller att fler rörelser per minut bevisar bättre rengöring än iO. Referenssidans paketlista anger handtag, borsthuvud och laddare, inget resefodral.",
      sourceIds: ["D2", "D3"], merchantVariantVerified: false },
  ],
  payMoreWhen: "En dokumenterad funktion hjälper din faktiska rutin, exempelvis återkoppling du använder. Räkna separat på handtag, medföljande huvuden och framtida påfyllning. iO 5 och iO 6 delar huvudsystem; utan aktuella jämförbara paketpriser går det inte att utse billigast över tid.",
  noPurchaseWhen: "Din nuvarande borste fungerar och passar din teknik. 1177 beskriver både vanlig tandborste och eltandborste som alternativ; vid svårigheter kan tandvården hjälpa dig välja. En ny display ersätter inte en fungerande rutin.",
  swedishContext: "Utgå från 1177:s råd om fluoridtandkräm, mjuk borste och rengöring mellan tänderna. Tillverkarkällorna för funktioner är brittiska och amerikanska; priser, paket och laddare därifrån är inte svenska erbjudanden. Kontrollera huvudkompatibilitet och laddning för exakt artikel.",
  testing: "Vi har inte mätt plack, ljud, batteritid eller komfort och inte provat apparna. Modelluppgifter kommer från tillverkarna. Ingen märkesvinnare för tandhälsa, vitare tänder eller skonsamhet utses.",
  limitations: "Serieuppgifter bevisar inte varje äldre eller nyare handelspaket. Fotot av iO 6 är en krediterad referensbild; det verifierar inte aktuellt erbjudande. Övriga produktbilder, handelspaket och personlig lämplighet är inte verifierade. Produktjämförelsen ersätter inte tandvårdens råd vid besvär, implantat eller särskilda behov.",
  sources: [
    { id: "D1", title: "Oral-B – skillnader inom iO-serien", url: "https://oralb.com/en-us/oral-health/why-oral-b/electric-toothbrushes/which-oral-b-io-electric-toothbrush-is-right-for-you", checkedAt: "2026-09-09", supports: "Tillverkarguide uppdaterad augusti 2026: iO-huvudens kompatibilitet, trycksignal, appstöd och display. Amerikanska priser, program och paket överförs inte till svenska artiklar." },
    { id: "D2", title: "Philips – HX7101/01 modell och innehåll", url: "https://www.philips.co.uk/shop/UK_Garment_Care_Essentials/personal-care/electric-toothbrushes/sonicare-rechargeable-toothbrush/p/HX7101_01", checkedAt: "2026-09-09", supports: "Två intensiteter, vibrationsvarning, huvudbytespåminnelse och angivet paketinnehåll. Ingen svensk lager- eller priskontroll." },
    { id: "D3", title: "Philips – stöd och tillbehör för HX7101/01", url: "https://www.philips.co.uk/c-p/HX7101_01/5300-rechargeable-sonic-toothbrush/support", checkedAt: "2026-09-09", supports: "Modellspecifik support och kompatibla reservdelar. Ett tillbehör som listas separat bevisar inte att det ingår i kartongen." },
    { id: "D4", title: "1177 – så håller du tänderna rena", url: "https://www.1177.se/liv--halsa/tandhalsa/sa-haller-du-tanderna-rena/", checkedAt: "2026-09-09", supports: "Oberoende råd om tandborste, fluoridtandkräm, mellanrum och hjälp från tandvården. Inget godkännande av de tre modellerna." },
  ],
};

const paths = ["/halsa/eltandborste", "/halsa/eltandborste/oralb-io6", "/halsa/eltandborste/sonicare-5300"];
export const toothbrushOverviewGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" }, path: "/halsa/eltandborste-guide",
  title: "Eltandborste – vilken återkoppling behöver du faktiskt?",
  intro: "Jämför iO 5S, iO 6 och Sonicare 5300 efter grepp, återkoppling, huvudsystem och paketinnehåll. Att behålla en fungerande borste är också ett val.",
  decision: toothbrushDecision, productPaths: paths,
  questions: [
    { question: "Har iO 5 billigare huvuden än iO 6?", answer: "De använder samma iO-huvudsystem. Jämför pris per kompatibelt huvud och hur många som ingår, inte en påstådd skillnad mellan två system." },
    { question: "Ingår ett resefodral till Sonicare 5300?", answer: "Det beror på artikel och paket. HX7101/01-sidans lista innehåller inget resefodral. En bild eller en annan 5300-variant räcker inte som bevis." },
    { question: "Måste jag använda en app?", answer: "Välj efter reglagen och återkopplingen du vill använda. Vi har inte testat apparna och ger inget mervärde åt en funktion du inte behöver." },
    { question: "Vilken rengör bäst?", answer: "Vi saknar ett eget jämförande test av dessa exemplar. Följ tandvårdens råd om teknik och lämplig borste; fler program eller ett högre pris är inte vårt belägg för bättre resultat." },
  ],
  related: [{ href: "/halsa/oral-b-eller-sonicare", text: "iO 6 eller Sonicare 5300?" }, { href: "/halsa/oralb-io6-vart-priset", text: "När tillför iO 6 något utöver iO 5?" }],
};
export const toothbrushBrandGuide: DecisionGuide = {
  ...toothbrushOverviewGuide, path: "/halsa/oral-b-eller-sonicare",
  title: "iO 6 eller Sonicare 5300 – display eller vibrationsvarning?",
  intro: "Jämför hur borsten ger återkoppling och vad rätt borsthuvuden och paket kostar. Vi jämför namngivna modeller, inte ett löfte om att ett märke ger friskare tänder.",
  decision: { ...toothbrushDecision, options: toothbrushDecision.options.slice(1) }, productPaths: paths.slice(1),
  related: [{ href: "/halsa/eltandborste-guide", text: "Alla tre alternativ och när du kan avstå" }, { href: "/halsa/oralb-io6-vart-priset", text: "iO 5 eller iO 6?" }],
};
export const toothbrushUpgradeGuide: DecisionGuide = {
  ...toothbrushOverviewGuide, path: "/halsa/oralb-io6-vart-priset",
  title: "Är iO 6 värd ett högre pris än iO 5?",
  intro: "Båda tillhör iO-systemet. Betala för en skillnad du kommer att använda, inte för ett påstått billigare borsthuvudssystem eller en obestyrkt rengöringsvinst.",
  decision: { ...toothbrushDecision, options: toothbrushDecision.options.slice(0,2), sources: toothbrushDecision.sources.filter(source => ["D1","D4"].includes(source.id)) }, productPaths: paths.slice(0,2),
  questions: toothbrushOverviewGuide.questions.filter(item => !item.question.includes("Sonicare")),
  related: [{ href: "/halsa/eltandborste-guide", text: "Jämför även Sonicare 5300" }],
};
