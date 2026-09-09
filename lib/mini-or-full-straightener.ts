import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { straightOrCurlDecision } from "@/lib/platta-eller-locka";

export const straightenerSizeDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [straightOrCurlDecision.options[0], {
    productSlug: "remington-mini-s2880-plattang", model: "Remington S2880 On The Go Mini",
    variant: "S2880 med keramiska plattor, 15 cm apparatlängd och värmeinställning 200 °C enligt tillverkaren. Längden avser inte plattorna. Underlaget är produktbeskrivning och 2016 års manual. Modellen i ett aktuellt butikserbjudande är ännu inte kontrollerad.",
    chooseIf: "du har ett konkret behov av ett kortare verktyg i packningen och har kontrollerat att dess fasta värmeinställning passar din användning. Kontrollera även sladd och fodral när du bedömer platsen i väskan.",
    avoidIf: "du behöver kunna välja lägre temperatur. Litet format betyder inte låg värme: S2880 har ingen temperaturväljare i den granskade manualen. Vi har inte visat att den är bäst för lugg eller kort hår och har inte verifierat apparatens vikt.",
    sourceIds: ["M1", "M2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du behöver valbar temperatur eller en storlek som passar ditt arbetssätt. S8540 erbjuder temperaturval som mini-modellen saknar; vi har inte visat snabbare styling eller räknat ut prisvärdet. Jämför aktuellt totalpris för rätt paket.",
  noPurchaseWhen: "Din befintliga plattång fungerar och får plats där du behöver ha den, eller du kan avstå från styling på resan. En separat resetång är inget krav.",
  swedishContext: "Kontrollera modellbeteckning, märkplåt och stickkontakt. Stöd för flera spänningar bevisar inte att rätt kontakt ingår. S2880-manualen anger att tider och temperaturer kan variera vid 120 V. Svenska erbjudanden och paket är inte matchade.",
  testing: "Vi har granskat dokumentation, inte använt verktygen. Vi har inte mätt vikt, grepp, packvolym, stylingtid eller hårskador. Ingen modell är utsedd till bäst för alla hårtyper.",
  limitations: "Manualen för S2880 kräver rent, torrt och utrett hår, säger att inte stanna med tången längs slingan och att stänga av och dra ur efter användning. Dess uppvärmningsuppgift är ingen total stylingtid. Vi har inte verifierat automatisk avstängning för S2880. Bildrättigheter, aktuell revision och butiksmatchning återstår.",
  sources: [
    ...straightOrCurlDecision.sources.filter(source => source.id !== "C2"),
    { id: "M1", title: "Remington – On The Go Mini S2880", url: "https://mt.remington-europe.com/products/on-the-go-mini-straightener-s2880", checkedAt: "2026-09-09", supports: "15 cm apparatlängd, keramiska plattor, 200 °C och kompakt reseformat. Tillverkarens uppvärmningstid och resepositionering är inte vår mätning av fart eller passform." },
    { id: "M2", title: "Remington – S2880 manual, version 10/16 (PDF)", url: "https://cdn-img.remington-europe.com/manager/remington-europe_com/User%20Manuals/EU/SS17/S2880_INT.pdf.pdf", checkedAt: "2026-09-09", supports: "På/av-reglage utan temperaturväljare, 200 °C, värmetåligt fodral, torrt utrett hår, avstängning/urkoppling och möjliga variationer vid 120 V. Äldre dokumentation, inte bevis för nuvarande säljares paket." },
  ],
};

export const straightenerSizeGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/plattang",
  title: "Mini eller fullstor plattång – behöver du mindre format eller temperaturval?",
  intro: "S2880 är kort, men värmeinställningen är 200 °C. S8540 erbjuder valbar temperatur. Börja med den skillnaden innan du köper en särskild tång för resan.",
  decision: straightenerSizeDecision,
  productPaths: ["/skonhet/plattang/remington-s8540", "/skonhet/plattang/remington-mini-s2880"],
  questions: [
    { question: "Kan jag sänka värmen på mini-modellen?", answer: "Inte enligt det granskade underlaget: S2880 har på/av-reglage och en angiven temperatur på 200 °C. S8540 har temperaturval. Utgå inte från att en mindre tång också har lägre värme." },
    { question: "Är 15 cm längden på plattorna?", answer: "Nej, uppgiften gäller S2880-apparatens längd. För S8540 anger manualen i stället 110 mm långa plattor. Måtten beskriver olika delar och ska inte jämföras som samma mått." },
    { question: "Behöver jag köpa en särskild resetång?", answer: "Inte om din befintliga lösning fungerar och passar packningen. Kontrollera kontakt och märkplåt inför resan; ett internationellt spänningsstöd ersätter inte kontaktkontrollen." },
  ],
  related: [{ href: "/skonhet/platta-eller-locka", text: "Vill du egentligen platta eller locka?" }, { href: "/skonhet", text: "Fler produktval inom skönhet" }],
};
