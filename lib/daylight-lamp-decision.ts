import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const daylightLampDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "beurer-tl30-dagsljuslampa", model: "Beurer TL 30",
      variant: "Artikel 60805. Katalogens ASIN B00MOIWOAK är inte matchat mot aktuell svensk leverans. Den länkade manualen från juli 2026 gäller TL 30; kontrollera manualrevisionen för ditt exemplar.",
      chooseIf: "du söker enkel knappstyrning och en ljusyta på 12 × 20 cm. TL 30 har stöd och nätadapter; tillverkarens manual listar även en förvaringspåse. Kontrollera först att lampans avsedda användning passar dig.",
      avoidIf: "du behöver inbyggd visning av användningstid, flera färgtemperaturer eller batteridrift. Produkten drivs via nätadapter; ett litet format gör den inte sladdlös.",
      sourceIds: ["L1", "L2"], merchantVariantVerified: false,
    },
    {
      productSlug: "beurer-tl35-dagsljuslampa", model: "Beurer TL 35",
      variant: "Artikel 10065. Inte TL 30 eller TL 45 Perfect Day. Katalogens ASIN B0CJ3C6ZV1 och aktuellt svenskt paket är inte matchade.",
      chooseIf: "du faktiskt vill använda fyra dimmernivåer, timer eller olika färgtemperaturer. Beurer anger en ljusyta på 14 × 20 cm. Fler reglage är en praktisk skillnad, inte bevis för bättre behandlingseffekt.",
      avoidIf: "du bara behöver enkel av/på-styrning eller förväntar dig samma ljusmängd i alla lägen. Manualen skiljer Therapy, Active och Relax åt; namnet 10 000 lux gäller inte alla inställningar och avstånd.",
      sourceIds: ["L3", "L4"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Timer, dimmer eller färgval löser ett behov som du kan beskriva före köp. Antal kundomdömen och högre modellnummer visar inte att en lampa fungerar bättre för dig. Vi har inte jämfört aktuella totalpriser eller behandlingsresultat.",
  noPurchaseWhen: "Du redan har en lämplig lampa som fungerar för den avsedda användningen eller inte vet vad ett byte ska tillföra. Ihållande nedstämdhet eller sömnproblem ska inte bli en anledning att välja behandling enbart från en produktjämförelse.",
  swedishContext: "Kontrollera adapter, begriplig bruksanvisning och rätt modell i den svenska leveransen. Båda manualerna listar kontraindikationer, bland annat ljuskänslighet och ljuskänsliggörande läkemedel. Läs dem före användning och fråga vården vid osäkerhet. Här ges inget individuellt behandlingsschema.",
  testing: "Vi har läst Beurers produktsidor och de engelska manualerna daterade 2026-07-22. Vi har inte mätt ljusstyrka, flimmer eller stabilitet, och inte testat effekter på humör, sömn eller ork. Tillverkarnas siffror är inte våra mätningar.",
  limitations: "Beurer anger 10 000 lux vid cirka 10 cm för TL 30 och cirka 13 cm för TL 35 i Therapy-läget. Det säger inte att de ger samma exponering på ett normalt skrivbordsavstånd. TL 35:s vikt skiljer mellan produktsida och manual, så ingen viktvinnare utses. Bilder och erbjudanden återstår att verifiera.",
  sources: [
    { id: "L1", title: "Beurer – TL 30, artikel 60805", url: "https://www.beurer.com/global/p/60805/", checkedAt: "2026-09-09", supports: "Knappstyrning, ljusyta, nätadapter och modellbunden ljusuppgift. Ingen svensk lager- eller paketverifiering." },
    { id: "L2", title: "Beurer – TL 30, manual 2026-07-22", url: "https://res.cloudinary.com/beurer/image/upload/v1787031225/stibo-live/60805_TL30G_2026-07-22_10_IM2_BEU_EN_MDR.pdf", checkedAt: "2026-09-09", supports: "Sidor 3–6: paket, avsedd användning, begränsningar och specifikation. Läs hela manualen före användning." },
    { id: "L3", title: "Beurer – TL 35, artikel 10065", url: "https://www.beurer.com/global/p/10065/", checkedAt: "2026-09-09", supports: "Ljusyta, dimmer, timer och tre färgtemperaturer. Sidans nettovikt 540 g avviker från manualens cirka 520 g." },
    { id: "L4", title: "Beurer – TL 35, manual 2026-07-22", url: "https://res.cloudinary.com/beurer/image/upload/v1787031174/stibo-live/10065_TL35_2026-07-22_05_IM2_BEU_MDR_EN.pdf", checkedAt: "2026-09-09", supports: "Sidor 4–7: kontraindikationer, reglage samt skilda ljuslägen och mätavstånd. Ingen jämförande klinisk studie." },
  ],
};

export const daylightLampGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" },
  path: "/halsa/beurer-tl30-eller-tl35",
  title: "TL 30 eller TL 35 – behöver du fler ljusreglage?",
  intro: "TL 30 har enkel knappstyrning. TL 35 lägger till timer, dimmer och färgval. Börja med vilka funktioner och vilken placering du behöver; fler omdömen är inte ett behandlingstest.",
  decision: daylightLampDecision,
  productPaths: ["/halsa/dagsljuslampa/beurer-tl30", "/halsa/dagsljuslampa/beurer-tl35"],
  questions: [
    { question: "Betyder 10 000 lux att de är likvärdiga?", answer: "Nej. Värdet gäller ett bestämt avstånd och, för TL 35, Therapy-läget. Vi har ingen gemensam mätning eller studie som visar samma resultat. Kontrollera manualens placering i stället för att jämföra bara rubriksiffran." },
    { question: "Är TL 30 sladdlös eftersom den är liten?", answer: "Nej, den är nätansluten. Kontrollera att det finns ett lämpligt uttag där du vill använda den och att rätt adapter ingår i erbjudandet." },
    { question: "Gör timern i TL 35 ett personligt schema åt mig?", answer: "Nej. Ett reglage är inte en individuell rekommendation om tid eller ljusexponering. Följ modellens fullständiga instruktioner och bedöm lämpligheten med vården om du är osäker." },
    { question: "Vilken står stadigast och ger bäst effekt?", answer: "Det har vi inte testat. Vi jämför dokumenterade funktioner, inte kundbetyg som bevis för stabilitet, humör eller sömnresultat." },
  ],
  related: [
    { href: "/halsa/dagsljuslampa", text: "Fler frågor om dagsljuslampor" },
    { href: "/halsa/morka-morgnar", text: "Ljus och rutiner på morgonen" },
    { href: "/halsa/wake-up-light-eller-solnedgangslampa", text: "Ljus för väckning eller stämning?" },
    { href: "/halsa", text: "Fler beslut för vardagen" },
  ],
};

export const daylightLampOverviewGuide: DecisionGuide = {
  ...daylightLampGuide,
  path: "/halsa/dagsljuslampa",
  title: "Dagsljuslampa – vad behöver du kontrollera före köp?",
  intro: "Börja med avsedd användning, placering och modellens instruktioner. Här jämför vi Beurer TL 30 och TL 35 utifrån dokumenterade funktioner, inte kundbetyg eller löften om hur du kommer att må.",
  related: [
    { href: daylightLampGuide.path, text: "TL 30 eller TL 35 – vilka reglage behöver du?" },
    ...daylightLampGuide.related.filter(link => link.href !== "/halsa/dagsljuslampa"),
    { href: "/jamforelser", text: "Fler jämförelser" },
  ],
};
