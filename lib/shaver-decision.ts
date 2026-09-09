import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { groomingDecision } from "@/lib/grooming-decision";
export const shaverDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "philips-rakapparat-5000", model: "Philips Shaver 5000 S5466/18",
    variant: "S5466/18 med ComfortTech och SmartClick-trimmer. Inte S5588 eller renoverad S5466/18R1. Aktuellt butikspaket är inte matchat.",
    chooseIf: "du vill använda roterande rakhuvuden för ansiktet och en separat klicktrimmer för mustasch och polisonger. Modellen är avsedd för våt- och torrakning.",
    avoidIf: "ditt främsta behov är att behålla en bestämd stubb- eller skägglängd med kam. Precisionstrimmern ska inte förväxlas med ett längdvred. Vi har inte visat att den rakar närmare eller ger mindre irritation än OneBlade.",
    sourceIds: ["R1", "R2"], merchantVariantVerified: false,
  }, groomingDecision.options[0]],
  payMoreWhen: "Du faktiskt saknar roterande rakhuvuden i din rutin och föredrar deras arbetssätt. Våt användning ensam skiljer inte alternativen åt. Ett högre pris bevisar inte bättre hudkomfort; jämför även framtida kostnad för rätt ersättningshuvuden eller blad.",
  noPurchaseWhen: "Din nuvarande rakapparat eller trimmer ger det resultat du vill ha. Kontrollera rengöring och rätt ersättningsdel innan du ersätter en fungerande apparat.",
  swedishContext: "Kontrollera hela modellnumret, laddare, kontakt och tillbehör i säljarens paket. Philips anger SH30 som ersättningshuvud för S5466/18; välj inte reservdel bara efter namnet Series 5000. Svenskt totalpris och aktuell butiksmatchning återstår.",
  testing: "Vi har granskat Philips svenska modell- och butiksuppgifter, inte rakat oss med produkterna. Ingen egen jämförelse av raknärhet, ljud, batteri eller hudkomfort. Kundbetyg för andra modeller används inte som resultat för dessa två.",
  limitations: "Philips anger upp till 50 minuters drift efter en timmes laddning för S5466/18 samt öppning av rakhuvudet för sköljning. Det är tillverkaruppgifter, inte våra mätningar. Följ bruksanvisningen. Bildrättigheter, faktiska bladkostnader och aktuella erbjudanden är inte verifierade.",
  sources: [
    { id: "R1", title: "Philips Sverige – S5466/18", url: "https://www.philips.se/c-p/S5466_18/shaver-series-5000-rakapparat-foer-vat-och-torrakning", checkedAt: "2026-09-09", supports: "Modell, ComfortTech-huvuden, våt/torr användning och klicktrimmer för mustasch/polisonger. Inget eget komforttest." },
    { id: "R2", title: "Philips Shop Sverige – specifikation för S5466/18", url: "https://www.philips.se/shop/SE_Klarna/personvard/ansikte-rakapparater/shaver-series-5000-rakapparat-foer-vat-och-torrakning/p/S5466_18", checkedAt: "2026-09-09", supports: "Tillverkarens drift- och laddningstid, rengöring och SH30-reservhuvud. Pris och lagerstatus används inte som verifierat erbjudande." },
    groomingDecision.sources[0],
  ],
};
export const shaverGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" },
  path: "/skonhet/rakapparat-eller-oneblade",
  title: "Rakapparat eller OneBlade – raka ansiktet eller forma stubb?",
  intro: "S5466/18 har roterande rakhuvuden och en klicktrimmer. QP2834/31 har ett hybridblad och stubbkammar. Välj efter det moment du behöver, inte ett obekräftat löfte om slätare eller skonsammare rakning.",
  decision: shaverDecision,
  productPaths: ["/skonhet/grooming/philips-rakapparat", "/skonhet/grooming/oneblade-360"],
  related: [{ href: "/skonhet/oneblade-eller-skaggtrimmer", text: "Behöver du fler skägglängder?" }],
  questions: [
    { question: "Vilken rakar närmast?", answer: "Vi har inte jämfört raknärheten på samma personer och utser ingen vinnare. Här jämförs dokumenterade funktioner; tillverkarens komfortord är inte ett oberoende test." },
    { question: "Är våtrakning skälet att välja S5466/18?", answer: "Båda modellerna anges för våt och torr användning. Välj inte den ena enbart av det skälet. Följ respektive modells instruktioner." },
    { question: "Passar alla Series 5000-rakhuvuden?", answer: "Utgå från modellnumret. Philips anger SH30 för S5466/18; Series 5000 omfattar olika modeller och är inte tillräcklig information för att välja reservhuvud." },
  ],
};
