import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { indoorAirDecision } from "@/lib/indoor-air-decision";

export const purifierModelDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    indoorAirDecision.options[1],
    { productSlug: "philips-600-luftrenare", model: "Philips 600i AC0650/10",
      variant: "ASIN B0BX49FQF8 kopplas till AC0650/10 i Amazons franska katalog. Aktuell svensk leverans är inte verifierad. Inte automatiskt /20 eller den renoverade R1-varianten.",
      chooseIf: "du vill jämföra en luftrenare med Air+-styrning och filterfamiljen FY0611. Den har även knappar för driftlägen. Kontrollera rätt filter och tillräcklig kapacitet vid den hastighet du tänker använda.",
      avoidIf: "du saknar plats för 20 cm fritt runt apparaten och 30 cm ovanför, eller vill tvätta filtret för fortsatt användning. EU-manualen anger att filtret inte är tvättbart eller återanvändbart.",
      sourceIds: ["P1", "P2", "P3"], merchantVariantVerified: false },
  ],
  payMoreWhen: "Dokumenterad kapacitet vid en användbar ljudnivå, tillgängliga ersättningsfilter eller reglage löser ditt behov. Båda modellerna har appstöd; en app ensam gör inte Levoit till vinnare. Vi har inte jämförbara aktuella totalpriser.",
  noPurchaseWhen: "Du inte vet vilken förorening du försöker minska, eller när åtgärder vid källan och fungerande ventilation räcker. En luftrenare ersätter inte utredning av fuktskada eller ventilation.",
  swedishContext: "Kontrollera exakt modell, EU-adapter och rätt filter i svensk leverans. AC0650:s EU-manual anger 2,4 GHz Wi-Fi för anslutningen. Vi har inte provat apparna eller verifierat svensk filterkostnad. Vid problem i bostaden gäller kontaktvägarna i Folkhälsomyndighetens källa nedan.",
  testing: "Levoits tidigare granskade Core 200S-underlag och myndighetskällor återanvänds. Philips aktuella EU-manual har lästs via tillverkarens support. Vi har inte mätt partiklar, ljud, energi eller symtom med dessa produkter.",
  limitations: "Ingen jämförande kapacitets- eller hälsovinnare utses. Rumsarea utan driftläge och testvillkor är otillräckligt. Philips-manualen säger att apparaten inte avlägsnar kolmonoxid eller radon. Svensk butiksmatchning, bilder och filterpriser återstår.",
  sources: [
    ...indoorAirDecision.sources.filter(source => ["A2", "A4", "A5"].includes(source.id)),
    { id: "P1", title: "Philips/Versuni – AC0650 EU-manual", url: "https://dam.versuni.com/m/e7abd3aa41f5cb3/original/AC0650_UM_EU_EN.pdf", checkedAt: "2026-09-09", supports: "Sidor 2–8: Air+, Wi-Fi, fritt utrymme, filterfamilj och att filtret inte är tvättbart. Länkad av modellsupporten; ingen egen prestandamätning." },
    { id: "P2", title: "Philips – support för AC0650/10", url: "https://www.philips.sa/en/c-p/AC0650_10/600i-series-air-purifier/support", checkedAt: "2026-09-09", supports: "Tillverkarens modellsupport med EU-manual och filterreferens FY0611/30. Regional supportsida är inte ett svenskt erbjudande." },
    { id: "P3", title: "Amazon Frankrike – ASIN och modellidentitet", url: "https://www.amazon.fr/Philips-Purificateur-Ultra-silencieux-AC0650-10/dp/B0BX49FQF8", checkedAt: "2026-09-09", supports: "Indexerad katalog kopplar B0BX49FQF8 till AC0650/10. Äldre kataloguppgift; styrker inte svensk lagerstatus, pris eller aktuell säljare." },
  ],
};

export const purifierComparisonGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" }, path: "/halsa/levoit-eller-philips-luftrenare",
  title: "Core 200S eller AC0650/10 – vilket filter och vilken styrning?",
  intro: "Levoit Core 200S och Philips AC0650/10 har båda appstöd. Börja med partiklarna du vill minska, kapaciteten du behöver och kostnaden för rätt ersättningsfilter, inte bara märket.",
  decision: purifierModelDecision,
  productPaths: ["/halsa/luftrenare", "/halsa/luftrenare/philips-600"],
  questions: [
    { question: "Är det bara Levoit som har app?", answer: "Nej. Core 200S använder VeSync och AC0650 använder Air+. Vi har inte testat apparnas funktion eller tillgänglighet på din telefon." },
    { question: "Kan jag tvätta Philips-filtret i stället för att byta?", answer: "Nej. EU-manualen skiljer ytrengöring från filterbyte och anger att filtret inte är tvättbart eller återanvändbart. Följ instruktionerna för ditt exemplar." },
    { question: "Vilket filter hör till vilken modell?", answer: "Underlaget anger Core 200S-RF för Levoit och FY0611/30 i Philips modellsupport. Kontrollera kompatibiliteten i erbjudandet; filter till en liknande modell är inte automatiskt rätt." },
    { question: "Vilken ger bäst luft i hela bostaden?", answer: "Det kan vi inte avgöra. Vi har inget gemensamt test av modellerna, och portabla luftrenare ersätter inte ventilation eller åtgärder vid föroreningskällan." },
  ],
  related: [
    { href: "/halsa/luftrenare-guide", text: "Behöver du en luftrenare?" },
    { href: "/halsa", text: "Fler beslut för vardagen" },
    { href: "/jamforelser", text: "Alla jämförelser" },
  ],
};
export const purifierOverviewGuide: DecisionGuide = {
  ...purifierComparisonGuide, path: "/halsa/luftrenare-guide",
  title: "Luftrenare – vad behöver du filtrera och underhålla?",
  intro: "Ta reda på problemet innan du köper. Här jämför vi två namngivna modeller och deras filter och reglage, med tydliga gränser för vad en luftrenare kan ersätta.",
  related: [{ href: purifierComparisonGuide.path, text: "Levoit Core 200S eller Philips AC0650/10?" }, ...purifierComparisonGuide.related.filter(link => link.href !== "/halsa/luftrenare-guide")],
};
