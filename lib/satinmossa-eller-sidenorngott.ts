import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const nightHairDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "cantu-satin-bonnet", model: "Cantu satinmössa",
    variant: "Katalogen säger Satin Nightcap. Underlaget gäller Satin Bonnet Classic, one size; ASIN B0B4SKR9TN är inte matchad mot denna variant. Tie Bonnet, Braid Bonnet och duschmössa är andra modeller. Fiberinnehåll och exakt passform är inte verifierade.",
    chooseIf: "du vill samla håret i en mössa under natten och är bekväm med något på huvudet. Classic träs på enligt Cantu. Kontrollera först att just mössans utrymme och kant passar dig; one size är ingen uppmätt passformsgaranti.",
    avoidIf: "du vill slippa bära en mössa, behöver en verifierad sidenprodukt eller förväntar dig att den säkert sitter kvar hela natten. Vi har inte provat komfort, hur den håller sig på plats eller hur frisyren ser ut på morgonen.",
    sourceIds: ["N1"], merchantVariantVerified: false,
  }, {
    productSlug: "silkesorngott-mullbarssilke", model: "TOWNSSILK örngott, 19 momme",
    variant: "Märkets tyska sida anger 100 % mullbärssilke, dold dragkedja och två örngott; 40 × 60 cm finns som storleksval. ASIN B0792378YQ, färg och paketantal i katalogens erbjudande är inte matchade. Tvåpackets pris får inte tillskrivas ett enstaka örngott.",
    chooseIf: "du föredrar att byta ytan på kudden framför att bära en mössa, och det valda örngottet passar din kudde. Mät kudden först. Tillverkaren rekommenderar handtvätt, vilket behöver fungera i din vardag.",
    avoidIf: "du behöver ett örngott i ett annat mått, vill följa en tvättrutin som etiketten inte tillåter eller köper för utlovad hudförbättring. Vi har inte verifierat bättre hud, mindre hårbrott eller bättre sömn med denna produkt.",
    sourceIds: ["N2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Rätt mått, verifierat material och en skötsel du accepterar är värda skillnaden för dig. Jämför samma storlek och antal. Vi har inte visat att silke ger bättre resultat än en mössa eller att fler momme automatiskt gör ett köp mer prisvärt.",
  noPurchaseWhen: "Du redan sover bekvämt och din nuvarande rutin fungerar för håret. Du behöver inte köpa både mössa och örngott för att en jämförelse visar två alternativ.",
  swedishContext: "Mät din egen kudde; 40 × 60 cm passar inte varje kudde. Underlaget är brittiskt och tyskt, inte en verifierad svensk leverans. Kontrollera paketantal, mått, fiberetikett, tvättråd, frakt och totalpris hos säljaren.",
  testing: "Vi har läst modell-, material- och skötseluppgifter. Vi har inte sovit med produkterna, mätt friktion eller testat hårbrott, hud, passform eller hållbarhet. Ingen vinnare för friss eller känslig hud är fastställd.",
  limitations: "Tillverkarnas resultatpåståenden är inte våra testresultat. Cantu-sidans satinuppgift fastställer inte silkesinnehåll. TOWNSSILKs certifieringspåstående har inte kontrollerats mot ett certifikat för denna variant. Exakt butiksmatchning och rättigheter till produktbilder återstår.",
  sources: [
    { id: "N1", title: "Cantu UK – Satin Bonnet Classic", url: "https://www.cantubeauty.co.uk/products/cantu-satin-bonnet-classic/", checkedAt: "2026-09-09", supports: "Modellnamn, satin, one size och påträdning för nattbruk. Inget verifierat fiberinnehåll, huvudmått eller oberoende resultatmått i underlaget." },
    { id: "N2", title: "TOWNSSILK – 19 momme, dragkedja, 2 stycken", url: "https://townssilk.de/products/19-momme-seide-kissenbezug-zipped", checkedAt: "2026-09-09", supports: "Tillverkaruppgifter: 100 % mullbärssilke, tvåpack och flera mått inklusive 40 × 60 cm. Handtvätt rekommenderas, högst 30 °C, sidenmedel, inget blekmedel eller urvridning, plantorkning i skugga. Följ varans etikett." },
  ],
};

export const bonnetOrPillowcaseGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/satinmossa-eller-sidenorngott",
  title: "Satinmössa eller sidenörngott – vilken rutin passar dig?",
  intro: "Vill du samla håret i en mössa eller låta det ligga fritt på kudden? Börja med komfort, rätt modell och tvättråd; vi har inte visat att något av alternativen ger bättre hud eller mindre hårbrott.",
  decision: nightHairDecision, productPaths: ["/skonhet/satinmossa", "/skonhet/silkesorngott"],
  questions: [
    { question: "Är satinmössan gjord av silke?", answer: "Det är inte verifierat för denna Cantu-variant. Satin beskriver en väv, inte i sig vilken fiber den består av. Läs materialetiketten i stället för att anta att satin och silke är samma sak." },
    { question: "Vilken ger minst friss?", answer: "Vi saknar ett direkt jämförande test av dessa produkter. Vi väljer därför inte en vinnare för friss, hårbrott eller hud och lovar inte skydd hela natten." },
    { question: "Passar örngottet min kudde?", answer: "Mät kudden och jämför med den valda varianten. Katalogen avser 40 × 60 cm; märkets sida erbjuder flera mått. Att ett mått finns på sidan bevisar inte att butikslänken leder till det." },
    { question: "Behöver jag köpa båda?", answer: "Inte för att de visas tillsammans. Utgå från ett konkret problem med din nuvarande rutin. Mössa och örngott påverkar hur du använder produkten på olika sätt; två köp är ingen dokumenterad fördubbling av nyttan." },
  ],
  related: [{ href: "/skonhet/tangle-teezer-eller-harborste", text: "Behöver du byta utredningsborste?" }, { href: "/skonhet", text: "Fler produktval inom skönhet" }],
};
