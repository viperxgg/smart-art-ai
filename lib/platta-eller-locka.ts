import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { curlingMethodDecision } from "@/lib/heatless-lockar-eller-locktang";

export const straightOrCurlDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "remington-s8540-plattang", model: "Remington S8540 Keratin Protect",
    variant: "S8540 enligt tillverkarens länkade manual och EU-sida. Den svenska sidans rubrik säger S8450 men brödtexten S8540; vi behandlar inte dessa beteckningar som utbytbara. REMINGTON_S8540 i katalogen är inget verifierat ASIN. Butikens exemplar och kontakt är inte matchade.",
    chooseIf: "du främst vill räta ut håret med en plattång och vill kunna välja temperatur och låsa inställningen. S8540 har 110 mm långa flytande plattor enligt manualen. Vi har inte visat att den också ger de lockar du önskar.",
    avoidIf: "du främst söker en locktång, vill styla vått hår eller tolkar Keratin Protect som en behandling som gör värme riskfri. Manualen kräver rent, torrt och utrett hår och varnar för spår av nötter; kontrollera detta om det är relevant för dig.",
    sourceIds: ["R1", "R2", "R3"], merchantVariantVerified: false,
  }, curlingMethodDecision.options[1]],
  payMoreWhen: "Ett verktyg tillför den stylingfunktion du saknar. Temperaturval och lås kan vara praktiska, men vi har inte jämfört finish, tidsåtgång eller livslängd. Ett högre maxgradtal är inte ett mått på bättre resultat och motiverar inte ensamt ett högre pris.",
  noPurchaseWhen: "Det du redan har ger frisyren du vill ha. Köp inte en andra tång enbart för att en generell guide kallar den mer mångsidig; börja med den funktion du faktiskt saknar.",
  swedishContext: "Kontrollera S8540 på kartong och märkplåt, inte bara seriens namn. Den svenska källans motstridiga modellrubrik redovisas ovan. Rätt kontakt, aktuella villkor och butikens paket måste fortfarande verifieras. BaByliss-underlaget är en manual hos Elon, inte ett lagerbesked.",
  testing: "Vi har granskat produktsidor och bruksanvisningar. Vi har inte provat uträtning, lockar, hårskador, grepp eller nybörjarvänlighet. Ingen av modellerna är visad som tryggast eller enklast för de flesta.",
  limitations: "S8540 har nio lägen mellan 150 och 230 °C. PRO+ väljer 185 °C; det är inget personligt temperaturrecept. Manualen anger att börja lägre, inte värma apparaten med plattorna låsta och stänga av och dra ur efter användning. Uppvärmningstid är inte total stylingtid. Bildrättigheter och butiksmatchning är inte klara.",
  sources: [
    { id: "R1", title: "Remington Sverige – Keratin Protect", url: "https://se.remington-europe.com/produkter/keratin-protect-plattang", checkedAt: "2026-09-09", supports: "S8540 i brödtexten men S8450 i rubriken. Skillnaden redovisas och modellen kontrolleras även i EU-sidan och manualen; resultatlöften är inte våra tester." },
    { id: "R2", title: "Remington EU – S8540", url: "https://eu.remington-europe.com/products/s8540-keratin-protect-straightener", checkedAt: "2026-09-09", supports: "Modellbeteckning S8540 och nio temperaturlägen. Keratin/mandelolja är tillverkarens beläggningsbeskrivning, inte bevis på reparerat hår." },
    { id: "R3", title: "Remington – S8540 bruksanvisning (PDF)", url: "https://cdn-img.remington-europe.com/manager/remington-europe_com/User%20Manuals/EU/aw17/S8540_IB_INT_T22-0004894.pdf", checkedAt: "2026-09-09", supports: "110 mm plattor, nio lägen, PRO+ 185 °C, temperaturlås, torrt utrett hår och varning för nötspår. Följ fullständig manual för användning och förvaring; inga egna mätningar." },
    ...curlingMethodDecision.sources.filter(source => source.id === "C2"),
  ],
};

export const straightOrCurlGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/platta-eller-locka",
  title: "Platta eller locka – vilken funktion saknas i din rutin?",
  intro: "Jämför Remington S8540 för uträtning med BaByliss C325E för manuell inrullning. Vi har inte visat att plattången ersätter locktången eller att en av dem passar de flesta.",
  decision: straightOrCurlDecision, productPaths: ["/skonhet/plattang/remington-s8540", "/skonhet/locktang/babyliss-c325e"],
  questions: [
    { question: "Kan S8540 ersätta en locktång?", answer: "Vi har inget modelltest som visar att S8540 ger samma lockresultat som C325E. Den granskade manualen beskriver uträtning. Köp den för en verifierad funktion, inte för ett generellt löfte om att alla plattänger gör allt." },
    { question: "Är PRO+ den lägsta temperaturen?", answer: "Nej. PRO+ väljer 185 °C medan S8540:s temperaturintervall börjar vid 150 °C. Namnet innebär inte att 185 °C är lämpligast för varje person eller garanterar skadefri styling." },
    { question: "Är det S8450 eller S8540?", answer: "Den svenska webbsidans rubrik skiljer sig från texten. Den länkade manualen och EU-sidan gäller S8540, modellen vi granskar. Kontrollera därför modellnumret på varan innan köp." },
  ],
  related: [{ href: "/skonhet/locktang", text: "Manuell eller automatisk inrullning?" }, { href: "/skonhet/heatless-lockar-eller-locktang", text: "Vill du undvika ett uppvärmt verktyg?" }],
};
