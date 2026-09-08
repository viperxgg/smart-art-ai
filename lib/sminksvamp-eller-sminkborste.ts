import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const makeupToolDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "real-techniques-svamp", model: "Real Techniques Miracle Complexion Sponge, 2-pack",
    variant: "Två Miracle Complexion-svampar, inte svamp plus puder-puff eller concealersvamp. Märket anger latexfritt skum. ASIN B00QPNVC0I är inte matchad mot aktuellt svenskt paket.",
    chooseIf: "du bara saknar en svamp för flytande eller krämig makeup och inte behöver fler borstar. Märket anger fuktad användning: plan sida för applicering, rundade sidor för utjämning och spets för mindre områden.",
    avoidIf: "du redan har den svamp som ingår i Everyday Essentials och inte behöver extra exemplar. Köp inte tvåpacket enbart för ett löfte om mer naturlig finish; vi har inte jämfört resultat eller produktåtgång.",
    sourceIds: ["T1"], merchantVariantVerified: false,
  }, {
    productSlug: "real-techniques-borstar", model: "Real Techniques Everyday Essentials, 4 borstar och 1 svamp",
    variant: "RT 400 Blush, 300 Deluxe Crease, 402 Setting och 200 Expert Face samt en Miracle Complexion Sponge. Fem verktyg totalt, inte fem borstar. ASIN B07FTXBNVL är inte matchad mot aktuell svensk förpackning.",
    chooseIf: "du saknar flera av dessa borstfunktioner för ansikte, ögon och puder, och också vill ha svampen som ingår. Borstarna har syntetiska strån enligt tillverkaren; kontrollera vilka verktyg din egen makeup faktiskt behöver.",
    avoidIf: "du bara behöver en foundationborste eller en ersättningssvamp. Ett set blir inte bättre värde av fler delar om de flesta förblir oanvända. Vi har inte visat snabbare applicering eller mindre foundationåtgång.",
    sourceIds: ["T2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Flera verktyg som du saknar ingår och totalpriset är lägre än för de delar du faktiskt skulle köpa separat. Vi har inte verifierat aktuella priser eller beräknat besparingen. Finishen beror också på makeup och arbetssätt, inte bara verktygets kategori.",
  noPurchaseWhen: "Dina befintliga verktyg fungerar och kan rengöras enligt sina instruktioner. Du behöver inte köpa tvåpacket samtidigt med setet av gammal vana: setet innehåller redan en svamp.",
  swedishContext: "Källorna är tillverkarens amerikanska produktsidor. Kontrollera innehåll och skötselanvisning på det svenska paketet; liknande paket kan innehålla andra delar. Svenskt lager, frakt, totalpris och bildrättigheter återstår att verifiera.",
  testing: "Vi har läst innehåll, material och skötselråd, inte provat finish, mjukhet, rengöring eller hållbarhet. Ingen uppmätt vinnare för täckning, snabbhet eller produktåtgång finns här.",
  limitations: "Märket ger olika bytesintervall: tvåpacket säger 30 dagar, setet 30 användningar. Vi gör inte om detta till ett gemensamt livslängdslöfte; kontrollera din förpackning. Det finns inget underlag här för att rengöring gör en utsliten svamp som ny.",
  sources: [
    { id: "T1", title: "Real Techniques – Miracle Complexion Sponge, 2 Count", url: "https://realtechniques.com/products/miracle-complexion-sponge-2-count", checkedAt: "2026-09-09", supports: "Två svampar, latexfritt skum, fuktad användning för flytande/krämig makeup. Skötsel: skölj efter varje gång, rengör grundligt veckovis, lufttorka väl och förvara torrt; sidan anger byte efter 30 dagar." },
    { id: "T2", title: "Real Techniques – Everyday Essentials", url: "https://realtechniques.com/products/everyday-essentials-kit-with-1-miracle-complexion-sponge", checkedAt: "2026-09-09", supports: "Fyra namngivna borstar med syntetiska strån plus en svamp. Märket anger veckovis borstrengöring och byte av svampen efter 30 användningar. Paketets huvudlista används; sidans generella FAQ om andra set är inte innehållet i detta paket." },
  ],
};

export const spongeOrBrushGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/sminksvamp-eller-sminkborste",
  title: "Sminksvamp eller borstset – vilka delar saknar du?",
  intro: "Everyday Essentials innehåller redan en Miracle Complexion Sponge. Jämför ett tvåpack ersättningssvampar med ett set om fyra borstar och en svamp, och köp bara de funktioner du saknar.",
  decision: makeupToolDecision, productPaths: ["/skonhet/sminksvamp", "/skonhet/sminkborstar"],
  questions: [
    { question: "Behöver jag köpa en svamp till borstsetet?", answer: "En Miracle Complexion Sponge ingår redan i det granskade Everyday Essentials-paketet. Ett separat tvåpack tillför extra exemplar, inte en ny typ av verktyg. Kontrollera alltid paketets lista." },
    { question: "Sparar borsten foundation jämfört med svampen?", answer: "Det har vi inte mätt eller hittat ett direkt jämförande underlag för. Vi räknar därför inte hem setets pris med en antagen besparing i foundation." },
    { question: "Hur ska svampen rengöras?", answer: "Tillverkaren anger sköljning med ljummet vatten efter användning, grundligare rengöring varje vecka och full lufttorkning med god ventilation. Förvara torrt och följ anvisningarna på just ditt paket." },
    { question: "Hur ofta ska svampen bytas?", answer: "De lästa sidorna skiljer sig: 30 dagar för tvåpacket och 30 användningar för setet. Det är tillverkarens råd, inte vår uppmätta livslängd. Vi presenterar inte den ena uppgiften som om båda sidor säger samma sak." },
  ],
  related: [{ href: "/skonhet/bronzing-drops", text: "Kontrollera vad du vill applicera" }, { href: "/skonhet", text: "Fler produktval inom skönhet" }],
};
