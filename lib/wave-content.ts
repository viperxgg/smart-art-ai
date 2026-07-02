// Generated for wave-build-2026-07. Do not edit by hand.
import type { CategoryProductGroup } from "@/lib/categoryGroups";
import type { ComparisonEntry } from "@/lib/comparisons";
import type { ProductCategorySlug } from "@/lib/products";
import type { SommarPick } from "@/lib/sommar";
import { waveProducts } from "@/lib/wave-products";

export type WaveGuideRow = {
  label: string;
  values: string[];
};

export type WaveGuide = {
  id: string;
  href: string;
  category: ProductCategorySlug;
  label: "Guide" | "Jämförelse";
  title: string;
  intro: string;
  badges: string[];
  productSlugs: string[];
  pickBadges?: Record<string, string>;
  choiceTitle: string;
  choiceText: string;
  rows: WaveGuideRow[];
  verdict: string;
  faqItems: { question: string; answer: string }[];
  relatedLinks: { href: string; label: string; text: string }[];
  metaTitle: string;
  metaDescription: string;
};

function productBySlug(slug: string) {
  const product = waveProducts.find((item) => item.slug === slug);
  if (!product) {
    throw new Error(`Missing wave product: ${slug}`);
  }
  return product;
}

export const waveProductPicks: SommarPick[] = [
  {
    productSlug: "sportconic-lopband",
    product: productBySlug("sportconic-lopband"),
    href: "/traning/lopband/sportconic-lopband",
    cardBadge: "Armstöd",
    cardHook: "Ett kompakt 2-i-1-band för dig som vill kunna gå och lätt jogga hemma, med armstöd som gör steget från rent gåband tydligare.",
    cardImage: "/products/sportconic-lopband/sportconic-lopband-thumbnail.webp",
    cardImageAlt: "Sportconic löpband 2-i-1",
    badge: "Elins mellanval",
    headline: "Sportconic löpband 2-i-1",
    shortBody: "Ett kompakt 2-i-1-band för dig som vill kunna gå och lätt jogga hemma, med armstöd som gör steget från rent gåband tydligare.",
    valueHook: "Armstöd · 1-12 km/h · 6% lutning",
    valueStatement: "Ett kompakt 2-i-1-band för dig som vill kunna gå och lätt jogga hemma, med armstöd som gör steget från rent gåband tydligare. Löpytan är 40 cm bred och armstödet kan kännas lågt för längre personer, så välj inte detta för seriös löpträning.",
    passFor: [
      "Vill ha kondition utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Löpytan är 40 cm bred och armstödet kan kännas lågt för längre personer, så välj inte detta för seriös löpträning.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Starkt hemmaval när armstöd och lätt jogg är viktigare än bred gymkänsla.",
    amazonSummary: "Amazon visar 4.3 av 5 (457 betyg).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Sportconic löpband 2-i-1 värd att köpa?",
        answer: "Starkt hemmaval när armstöd och lätt jogg är viktigare än bred gymkänsla.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "sportconic-lopband-recensioner",
    reviewFormId: "sportconic-lopband-skriv-recension",
    targetKeyword: "sportconic löpband 2-i-1",
    metaTitle: "Sportconic löpband 2-i-1 – Elins ärliga koll | Elins val",
    metaDescription: "Sportconic löpband 2-i-1: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/traning",
        label: "Träning",
        text: "Se fler träningsval för hemmet.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "citysports-gaband",
    product: productBySlug("citysports-gaband"),
    href: "/traning/lopband/citysports-gaband",
    cardBadge: "Rent gåband",
    cardHook: "Ett rent walking pad-val för skrivbord, vardagsrörelse och låg tröskel hemma utan armstöd eller montering.",
    cardImage: "/products/citysports-gaband/citysports-gaband-thumbnail.webp",
    cardImageAlt: "CITYSPORTS gåband",
    badge: "Elins budgetval",
    headline: "CITYSPORTS gåband",
    shortBody: "Ett rent walking pad-val för skrivbord, vardagsrörelse och låg tröskel hemma utan armstöd eller montering.",
    valueHook: "Rent gåband · 1-6 km/h · Ingen montering",
    valueStatement: "Ett rent walking pad-val för skrivbord, vardagsrörelse och låg tröskel hemma utan armstöd eller montering. Det är ett gåband, inte ett löpband. Maxfarten och den enklare konstruktionen gör det fel för dig som vill jogga.",
    passFor: [
      "Vill ha kondition utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Det är ett gåband, inte ett löpband. Maxfarten och den enklare konstruktionen gör det fel för dig som vill jogga.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Prisvärt för gång hemma, men tydligt enklare än ett löpband.",
    amazonSummary: "Amazon visar 4.2 av 5 (180 betyg).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är CITYSPORTS gåband värd att köpa?",
        answer: "Prisvärt för gång hemma, men tydligt enklare än ett löpband.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "citysports-gaband-recensioner",
    reviewFormId: "citysports-gaband-skriv-recension",
    targetKeyword: "citysports gåband",
    metaTitle: "CITYSPORTS gåband – Elins ärliga koll | Elins val",
    metaDescription: "CITYSPORTS gåband: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/traning",
        label: "Träning",
        text: "Se fler träningsval för hemmet.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "inkey-retinol-serum",
    product: productBySlug("inkey-retinol-serum"),
    href: "/skonhet/retinolserum/inkey-retinol",
    cardBadge: "Retinol",
    cardHook: "Ett prisvärt retinolserum för kvällsrutinen där styrkan ligger i enkelheten och den starka externa uppmärksamheten.",
    cardImage: "/products/inkey-retinol-serum/inkey-retinol-serum-thumbnail.webp",
    cardImageAlt: "The INKEY List Retinol Serum",
    badge: "Elins budgetval",
    headline: "The INKEY List Retinol Serum",
    shortBody: "Ett prisvärt retinolserum för kvällsrutinen där styrkan ligger i enkelheten och den starka externa uppmärksamheten.",
    valueHook: "Retinol · Apohem-omnämnt · Budget",
    valueStatement: "Ett prisvärt retinolserum för kvällsrutinen där styrkan ligger i enkelheten och den starka externa uppmärksamheten. Doften och känslan passar inte alla. Börja försiktigt och håll dig till kosmetiska förväntningar på hudens utseende.",
    passFor: [
      "Vill ha hudvård utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Doften och känslan passar inte alla. Börja försiktigt och håll dig till kosmetiska förväntningar på hudens utseende.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Bra budgetretinol för vana hudvårdsrutiner, med tydlig doftcaveat.",
    amazonSummary: "Amazon visar 4.2 av 5 (1 593 betyg.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är The INKEY List Retinol Serum värd att köpa?",
        answer: "Bra budgetretinol för vana hudvårdsrutiner, med tydlig doftcaveat.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "inkey-retinol-serum-recensioner",
    reviewFormId: "inkey-retinol-serum-skriv-recension",
    targetKeyword: "the inkey list retinol serum",
    metaTitle: "The INKEY List Retinol Serum – Elins ärliga koll | Elins val",
    metaDescription: "The INKEY List Retinol Serum: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "cerave-resurfacing-retinol",
    product: productBySlug("cerave-resurfacing-retinol"),
    href: "/skonhet/retinolserum/cerave-retinol",
    cardBadge: "Doftfri",
    cardHook: "Ett mildare retinolval med doftfri CeraVe-känsla och tydligare vardagsprofil än mer aktiva serum.",
    cardImage: "/products/cerave-resurfacing-retinol/cerave-resurfacing-retinol-thumbnail.webp",
    cardImageAlt: "CeraVe Resurfacing Retinol Serum",
    badge: "Elins mellanval",
    headline: "CeraVe Resurfacing Retinol Serum",
    shortBody: "Ett mildare retinolval med doftfri CeraVe-känsla och tydligare vardagsprofil än mer aktiva serum.",
    valueHook: "Doftfri · Mild profil · CeraVe",
    valueStatement: "Ett mildare retinolval med doftfri CeraVe-känsla och tydligare vardagsprofil än mer aktiva serum. Referensen har leveranscaveat kopplad till tredjepart. Kontrollera alltid säljare och lagerstatus innan köp.",
    passFor: [
      "Vill ha hudvård utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Referensen har leveranscaveat kopplad till tredjepart. Kontrollera alltid säljare och lagerstatus innan köp.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Trygg formula på papperet, men leveranscaveaten håller poängen nere.",
    amazonSummary: "Amazon visar 4.5 av 5 (5 478 betyg).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är CeraVe Resurfacing Retinol Serum värd att köpa?",
        answer: "Trygg formula på papperet, men leveranscaveaten håller poängen nere.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "cerave-resurfacing-retinol-recensioner",
    reviewFormId: "cerave-resurfacing-retinol-skriv-recension",
    targetKeyword: "cerave resurfacing retinol serum",
    metaTitle: "CeraVe Resurfacing Retinol Serum – Elins ärliga koll | Elins val",
    metaDescription: "CeraVe Resurfacing Retinol Serum: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "physicians-formula-bronzer",
    product: productBySlug("physicians-formula-bronzer"),
    href: "/skonhet/bronzer",
    cardBadge: "Shade guide",
    cardHook: "En bronzer där rätt nyans är hela poängen: varm, mjuk glow för dig som vill ha solkysst färg utan BUS-rutin.",
    cardImage: "/products/physicians-formula-bronzer/physicians-formula-bronzer-thumbnail.webp",
    cardImageAlt: "Physicians Formula Butter Bronzer",
    badge: "Elins mellanval",
    headline: "Physicians Formula Butter Bronzer",
    shortBody: "En bronzer där rätt nyans är hela poängen: varm, mjuk glow för dig som vill ha solkysst färg utan BUS-rutin.",
    valueHook: "Shade guide · Lyster · Murumuru Butter",
    valueStatement: "En bronzer där rätt nyans är hela poängen: varm, mjuk glow för dig som vill ha solkysst färg utan BUS-rutin. Även Light kan bli mörk på väldigt ljus svensk hud och finishen har synligt skimmer, inte matt kontur.",
    passFor: [
      "Vill ha makeup utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Även Light kan bli mörk på väldigt ljus svensk hud och finishen har synligt skimmer, inte matt kontur.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Fin glow-bronzer om nyansen stämmer, men inte ett säkert val för den ljusaste huden.",
    amazonSummary: "Amazon visar 4.5 av 5 (1 480 betyg).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Physicians Formula Butter Bronzer värd att köpa?",
        answer: "Fin glow-bronzer om nyansen stämmer, men inte ett säkert val för den ljusaste huden.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "physicians-formula-bronzer-recensioner",
    reviewFormId: "physicians-formula-bronzer-skriv-recension",
    targetKeyword: "physicians formula butter bronzer",
    metaTitle: "Physicians Formula Butter Bronzer – Elins ärliga koll | Elins val",
    metaDescription: "Physicians Formula Butter Bronzer: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/skonhet/bronzing-drops",
        label: "Bronzing drops",
        text: "Jämför puderbronzer med flytande glow.",
      },
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "jean-len-saltvattenspray",
    product: productBySlug("jean-len-saltvattenspray"),
    href: "/skonhet/saltvattenspray",
    cardBadge: "Beach waves",
    cardHook: "En enkel saltvattenspray för strävare textur och beach waves-känsla utan salongspris.",
    cardImage: "/products/jean-len-saltvattenspray/jean-len-saltvattenspray-thumbnail.webp",
    cardImageAlt: "Jean & Len saltvattenspray",
    badge: "Elins budgetval",
    headline: "Jean & Len saltvattenspray",
    shortBody: "En enkel saltvattenspray för strävare textur och beach waves-känsla utan salongspris.",
    valueHook: "Beach waves · Vegan · Budget",
    valueStatement: "En enkel saltvattenspray för strävare textur och beach waves-känsla utan salongspris. Inte rätt val för definierade lockar. Referensen beskriver en pudrig känsla som kan störa lockrutiner.",
    passFor: [
      "Vill ha hårvård utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Inte rätt val för definierade lockar. Referensen beskriver en pudrig känsla som kan störa lockrutiner.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Prisvärd för beach texture, svagare för lockdefinition.",
    amazonSummary: "Amazon visar 4.3 av 5 (133 betyg).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Jean & Len saltvattenspray värd att köpa?",
        answer: "Prisvärd för beach texture, svagare för lockdefinition.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "jean-len-saltvattenspray-recensioner",
    reviewFormId: "jean-len-saltvattenspray-skriv-recension",
    targetKeyword: "jean & len saltvattenspray",
    metaTitle: "Jean & Len saltvattenspray – Elins ärliga koll | Elins val",
    metaDescription: "Jean & Len saltvattenspray: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/skonhet/curl-cream",
        label: "Lockar",
        text: "För definierade lockar är curl cream ofta bättre.",
      },
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "midea-golvflakt",
    product: productBySlug("midea-golvflakt"),
    href: "/halsa/flakt/midea-golvflakt",
    cardBadge: "DC-motor",
    cardHook: "En tystare golvfläkt med fjärrkontroll och timer för dig som vill ha mer luft än en liten bordsfläkt.",
    cardImage: "/products/midea-golvflakt/midea-golvflakt-thumbnail.webp",
    cardImageAlt: "Midea MFS400 golvfläkt",
    badge: "Elins mellanval",
    headline: "Midea MFS400 golvfläkt",
    shortBody: "En tystare golvfläkt med fjärrkontroll och timer för dig som vill ha mer luft än en liten bordsfläkt.",
    valueHook: "DC-motor · Fjärrkontroll · 8h timer",
    valueStatement: "En tystare golvfläkt med fjärrkontroll och timer för dig som vill ha mer luft än en liten bordsfläkt. Golvformatet tar mer plats än en tornfläkt. dB-uppgifter behandlas som köpar- och säljarinformation, inte som egen mätning.",
    passFor: [
      "Vill ha fläkt utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Golvformatet tar mer plats än en tornfläkt. dB-uppgifter behandlas som köpar- och säljarinformation, inte som egen mätning.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Starkt fläktval när luftflöde och låg ljudnivå prioriteras.",
    amazonSummary: "Amazon visar 4.5 av 5 (658 betyg).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Midea MFS400 golvfläkt värd att köpa?",
        answer: "Starkt fläktval när luftflöde och låg ljudnivå prioriteras.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "midea-golvflakt-recensioner",
    reviewFormId: "midea-golvflakt-skriv-recension",
    targetKeyword: "midea mfs400 golvfläkt",
    metaTitle: "Midea MFS400 golvfläkt – Elins ärliga koll | Elins val",
    metaDescription: "Midea MFS400 golvfläkt: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa/flakt",
        label: "Fläktguiden",
        text: "Se fler fläktar i samma kluster.",
      },
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "beurer-tl35-dagsljuslampa",
    product: productBySlug("beurer-tl35-dagsljuslampa"),
    href: "/halsa/dagsljuslampa/beurer-tl35",
    cardBadge: "Kompakt",
    cardHook: "En kompakt dagsljuslampa för mörka morgnar när du vill ha ett tydligare ljusinslag vid skrivbordet.",
    cardImage: "/products/beurer-tl35-dagsljuslampa/beurer-tl35-dagsljuslampa-thumbnail.webp",
    cardImageAlt: "Beurer TL35 dagsljuslampa",
    badge: "Elins mellanval",
    headline: "Beurer TL35 dagsljuslampa",
    shortBody: "En kompakt dagsljuslampa för mörka morgnar när du vill ha ett tydligare ljusinslag vid skrivbordet.",
    valueHook: "Kompakt · Beurer · Extra ljus",
    valueStatement: "En kompakt dagsljuslampa för mörka morgnar när du vill ha ett tydligare ljusinslag vid skrivbordet. Det här är extra ljus i vardagen, inte ett löfte om medicinsk effekt. Följ alltid produktens instruktioner.",
    passFor: [
      "Vill ha mörka morgnar utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Det här är extra ljus i vardagen, inte ett löfte om medicinsk effekt. Följ alltid produktens instruktioner.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Smidigt Beurer-val för extra ljus utan stor apparat.",
    amazonSummary: "Amazon visar 4.6 av 5 (823).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Beurer TL35 dagsljuslampa värd att köpa?",
        answer: "Smidigt Beurer-val för extra ljus utan stor apparat.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "beurer-tl35-dagsljuslampa-recensioner",
    reviewFormId: "beurer-tl35-dagsljuslampa-skriv-recension",
    targetKeyword: "beurer tl35 dagsljuslampa",
    metaTitle: "Beurer TL35 dagsljuslampa – Elins ärliga koll | Elins val",
    metaDescription: "Beurer TL35 dagsljuslampa: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "beurer-tl30-dagsljuslampa",
    product: productBySlug("beurer-tl30-dagsljuslampa"),
    href: "/halsa/dagsljuslampa/beurer-tl30",
    cardBadge: "Resefodral",
    cardHook: "Ett litet och beprövat Beurer-alternativ för dig som vill ha extra ljus utan att ta upp mycket plats.",
    cardImage: "/products/beurer-tl30-dagsljuslampa/beurer-tl30-dagsljuslampa-thumbnail.webp",
    cardImageAlt: "Beurer TL30 dagsljuslampa",
    badge: "Elins mellanval",
    headline: "Beurer TL30 dagsljuslampa",
    shortBody: "Ett litet och beprövat Beurer-alternativ för dig som vill ha extra ljus utan att ta upp mycket plats.",
    valueHook: "Resefodral · Beprövad · Extra ljus",
    valueStatement: "Ett litet och beprövat Beurer-alternativ för dig som vill ha extra ljus utan att ta upp mycket plats. Välj inte efter stora behandlingslöften. Här bedöms format, användbarhet och köparsignaler.",
    passFor: [
      "Vill ha mörka morgnar utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Välj inte efter stora behandlingslöften. Här bedöms format, användbarhet och köparsignaler.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Det mest beprövade dagsljusvalet i paret.",
    amazonSummary: "Amazon visar 4.5 av 5 (9 042 betyg.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Beurer TL30 dagsljuslampa värd att köpa?",
        answer: "Det mest beprövade dagsljusvalet i paret.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "beurer-tl30-dagsljuslampa-recensioner",
    reviewFormId: "beurer-tl30-dagsljuslampa-skriv-recension",
    targetKeyword: "beurer tl30 dagsljuslampa",
    metaTitle: "Beurer TL30 dagsljuslampa – Elins ärliga koll | Elins val",
    metaDescription: "Beurer TL30 dagsljuslampa: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "beurer-hd75-elfilt",
    product: productBySlug("beurer-hd75-elfilt"),
    href: "/halsa/elfilt",
    cardBadge: "Mysvärme",
    cardHook: "En elektrisk filt för soffan när du vill ha jämn mysvärme utan att värma upp hela rummet.",
    cardImage: "/products/beurer-hd75-elfilt/beurer-hd75-elfilt-thumbnail.webp",
    cardImageAlt: "Beurer HD75 elfilt",
    badge: "Elins mellanval",
    headline: "Beurer HD75 elfilt",
    shortBody: "En elektrisk filt för soffan när du vill ha jämn mysvärme utan att värma upp hela rummet.",
    valueHook: "Mysvärme · Beurer · Stor filt",
    valueStatement: "En elektrisk filt för soffan när du vill ha jämn mysvärme utan att värma upp hela rummet. Mysvärme, inte het värme. Läs säkerhetsinstruktionerna och använd aldrig produkten på ett sätt som tillverkaren avråder från.",
    passFor: [
      "Vill ha värme utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Mysvärme, inte het värme. Läs säkerhetsinstruktionerna och använd aldrig produkten på ett sätt som tillverkaren avråder från.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Bra soffvärme med tydligt säkerhetsfokus.",
    amazonSummary: "Amazon visar 4.1 av 5 (3 390).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Beurer HD75 elfilt värd att köpa?",
        answer: "Bra soffvärme med tydligt säkerhetsfokus.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "beurer-hd75-elfilt-recensioner",
    reviewFormId: "beurer-hd75-elfilt-skriv-recension",
    targetKeyword: "beurer hd75 elfilt",
    metaTitle: "Beurer HD75 elfilt – Elins ärliga koll | Elins val",
    metaDescription: "Beurer HD75 elfilt: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "emerio-varmeflakt",
    product: productBySlug("emerio-varmeflakt"),
    href: "/halsa/varmeflakt",
    cardBadge: "Snabb punktvärme",
    cardHook: "En kompakt värmefläkt för snabb punktvärme i ett kallt hörn eller ett tillfälligt arbetsrum.",
    cardImage: "/products/emerio-varmeflakt/emerio-varmeflakt-thumbnail.webp",
    cardImageAlt: "Emerio värmefläkt",
    badge: "Elins budgetval",
    headline: "Emerio värmefläkt",
    shortBody: "En kompakt värmefläkt för snabb punktvärme i ett kallt hörn eller ett tillfälligt arbetsrum.",
    valueHook: "Snabb punktvärme · Kompakt · Budget",
    valueStatement: "En kompakt värmefläkt för snabb punktvärme i ett kallt hörn eller ett tillfälligt arbetsrum. Värmefläktar ska användas under uppsikt och enligt säkerhetsråd. Ljud och luftdrag hör till kompromissen.",
    passFor: [
      "Vill ha värme utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Värmefläktar ska användas under uppsikt och enligt säkerhetsråd. Ljud och luftdrag hör till kompromissen.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Helt okej snabbvärme, men inte lika behaglig för långa pass.",
    amazonSummary: "Amazon visar 4.0 av 5 (2 179).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Emerio värmefläkt värd att köpa?",
        answer: "Helt okej snabbvärme, men inte lika behaglig för långa pass.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "emerio-varmeflakt-recensioner",
    reviewFormId: "emerio-varmeflakt-skriv-recension",
    targetKeyword: "emerio värmefläkt",
    metaTitle: "Emerio värmefläkt – Elins ärliga koll | Elins val",
    metaDescription: "Emerio värmefläkt: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "delonghi-oljefyllt-element",
    product: productBySlug("delonghi-oljefyllt-element"),
    href: "/halsa/oljefyllt-element",
    cardBadge: "Tyst värme",
    cardHook: "Ett oljefyllt element för tystare och mer uthållig värme när snabb luftström inte är målet.",
    cardImage: "/products/delonghi-oljefyllt-element/delonghi-oljefyllt-element-thumbnail.webp",
    cardImageAlt: "De'Longhi oljefyllt element",
    badge: "Elins mellanval",
    headline: "De'Longhi oljefyllt element",
    shortBody: "Ett oljefyllt element för tystare och mer uthållig värme när snabb luftström inte är målet.",
    valueHook: "Tyst värme · Långsam värme · De'Longhi",
    valueStatement: "Ett oljefyllt element för tystare och mer uthållig värme när snabb luftström inte är målet. Referensen har tredjeparts- och fraktcaveat. Det värmer långsammare än en fläkt och kräver plats.",
    passFor: [
      "Vill ha värme utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Referensen har tredjeparts- och fraktcaveat. Det värmer långsammare än en fläkt och kräver plats.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Bra för tyst långtidsvärme, men säljare/frakt och tempo drar ned.",
    amazonSummary: "Amazon visar 4.5 av 5 (4 877).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är De'Longhi oljefyllt element värd att köpa?",
        answer: "Bra för tyst långtidsvärme, men säljare/frakt och tempo drar ned.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "delonghi-oljefyllt-element-recensioner",
    reviewFormId: "delonghi-oljefyllt-element-skriv-recension",
    targetKeyword: "de'longhi oljefyllt element",
    metaTitle: "De'Longhi oljefyllt element – Elins ärliga koll | Elins val",
    metaDescription: "De'Longhi oljefyllt element: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "beurer-lb200-luftfuktare",
    product: productBySlug("beurer-lb200-luftfuktare"),
    href: "/halsa/luftfuktare/beurer-lb200",
    cardBadge: "Evaporativ",
    cardHook: "En evaporativ luftfuktare för dig som hellre vill ha en mer självreglerande typ än ultraljudsdimma.",
    cardImage: "/products/beurer-lb200-luftfuktare/beurer-lb200-luftfuktare-thumbnail.webp",
    cardImageAlt: "Beurer LB200 luftfuktare",
    badge: "Elins mellanval",
    headline: "Beurer LB200 luftfuktare",
    shortBody: "En evaporativ luftfuktare för dig som hellre vill ha en mer självreglerande typ än ultraljudsdimma.",
    valueHook: "Evaporativ · Beurer · Diskret drift",
    valueStatement: "En evaporativ luftfuktare för dig som hellre vill ha en mer självreglerande typ än ultraljudsdimma. Den är inte lika visuellt direkt som ultraljud. Filter, rengöring och rumsmiljö avgör hur nöjd du blir.",
    passFor: [
      "Vill ha klimat utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Den är inte lika visuellt direkt som ultraljud. Filter, rengöring och rumsmiljö avgör hur nöjd du blir.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Smart typval för rätt hem, men kräver mer förståelse än en enkel dimmaskin.",
    amazonSummary: "Amazon visar 4.3 av 5 (463).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Beurer LB200 luftfuktare värd att köpa?",
        answer: "Smart typval för rätt hem, men kräver mer förståelse än en enkel dimmaskin.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "beurer-lb200-luftfuktare-recensioner",
    reviewFormId: "beurer-lb200-luftfuktare-skriv-recension",
    targetKeyword: "beurer lb200 luftfuktare",
    metaTitle: "Beurer LB200 luftfuktare – Elins ärliga koll | Elins val",
    metaDescription: "Beurer LB200 luftfuktare: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "philips-600-luftrenare",
    product: productBySlug("philips-600-luftrenare"),
    href: "/halsa/luftrenare/philips-600",
    cardBadge: "HEPA-filter",
    cardHook: "En kompakt luftrenare för mindre ytor där filter, ljudnivå och enkel placering är viktigare än smarta extrafunktioner.",
    cardImage: "/products/philips-600-luftrenare/philips-600-luftrenare-thumbnail.webp",
    cardImageAlt: "Philips 600 luftrenare",
    badge: "Elins mellanval",
    headline: "Philips 600 luftrenare",
    shortBody: "En kompakt luftrenare för mindre ytor där filter, ljudnivå och enkel placering är viktigare än smarta extrafunktioner.",
    valueHook: "HEPA-filter · Kompakt · Philips",
    valueStatement: "En kompakt luftrenare för mindre ytor där filter, ljudnivå och enkel placering är viktigare än smarta extrafunktioner. Inga löften om medicinska effekter. Filterbyten och rumsstorlek är avgörande för om den passar.",
    passFor: [
      "Vill ha klimat utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Inga löften om medicinska effekter. Filterbyten och rumsstorlek är avgörande för om den passar.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Trygg kompakt luftrenare med tydlig filtercaveat.",
    amazonSummary: "Amazon visar 4.4 av 5 (4 039).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Philips 600 luftrenare värd att köpa?",
        answer: "Trygg kompakt luftrenare med tydlig filtercaveat.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "philips-600-luftrenare-recensioner",
    reviewFormId: "philips-600-luftrenare-skriv-recension",
    targetKeyword: "philips 600 luftrenare",
    metaTitle: "Philips 600 luftrenare – Elins ärliga koll | Elins val",
    metaDescription: "Philips 600 luftrenare: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "good-nite-tyngdtacke",
    product: productBySlug("good-nite-tyngdtacke"),
    href: "/halsa/tyngdtacke/good-nite",
    cardBadge: "8 kg",
    cardHook: "Ett tyngdtäcke för vuxna som vill ha en ombonad och tyngre känsla i sängen.",
    cardImage: "/products/good-nite-tyngdtacke/good-nite-tyngdtacke-thumbnail.webp",
    cardImageAlt: "Good Nite tyngdtäcke",
    badge: "Elins mellanval",
    headline: "Good Nite tyngdtäcke",
    shortBody: "Ett tyngdtäcke för vuxna som vill ha en ombonad och tyngre känsla i sängen.",
    valueHook: "8 kg · Mjuk känsla · Vuxen",
    valueStatement: "Ett tyngdtäcke för vuxna som vill ha en ombonad och tyngre känsla i sängen. Tyngdtäcken är personliga. Välj inte för barn här och utgå från vikt, värmekänsla och tvättråd.",
    passFor: [
      "Vill ha sömn & avkoppling utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Tyngdtäcken är personliga. Välj inte för barn här och utgå från vikt, värmekänsla och tvättråd.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Bra vuxenval om du vill ha tydlig tyngd, men personligt i känslan.",
    amazonSummary: "Amazon visar 4.5 av 5 (1 631).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Good Nite tyngdtäcke värd att köpa?",
        answer: "Bra vuxenval om du vill ha tydlig tyngd, men personligt i känslan.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "good-nite-tyngdtacke-recensioner",
    reviewFormId: "good-nite-tyngdtacke-skriv-recension",
    targetKeyword: "good nite tyngdtäcke",
    metaTitle: "Good Nite tyngdtäcke – Elins ärliga koll | Elins val",
    metaDescription: "Good Nite tyngdtäcke: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "beurer-fw20-fotvarmare",
    product: productBySlug("beurer-fw20-fotvarmare"),
    href: "/halsa/fotvarmare",
    cardBadge: "Fotmys",
    cardHook: "En enkel fotvärmare för kalla kvällar vid skrivbordet eller soffan.",
    cardImage: "/products/beurer-fw20-fotvarmare/beurer-fw20-fotvarmare-thumbnail.webp",
    cardImageAlt: "Beurer FW20 fotvärmare",
    badge: "Elins budgetval",
    headline: "Beurer FW20 fotvärmare",
    shortBody: "En enkel fotvärmare för kalla kvällar vid skrivbordet eller soffan.",
    valueHook: "Fotmys · Beurer · Mjuk värme",
    valueStatement: "En enkel fotvärmare för kalla kvällar vid skrivbordet eller soffan. Referensen pekar på tredjepart och tunt lager. Förvänta dig mild fotmys, inte kraftig värme.",
    passFor: [
      "Vill ha värme utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Referensen pekar på tredjepart och tunt lager. Förvänta dig mild fotmys, inte kraftig värme.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Helt okej för frusna fötter, men tunt lager och säljare håller nere poängen.",
    amazonSummary: "Amazon visar 4.2 av 5 (1 884).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Beurer FW20 fotvärmare värd att köpa?",
        answer: "Helt okej för frusna fötter, men tunt lager och säljare håller nere poängen.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "beurer-fw20-fotvarmare-recensioner",
    reviewFormId: "beurer-fw20-fotvarmare-skriv-recension",
    targetKeyword: "beurer fw20 fotvärmare",
    metaTitle: "Beurer FW20 fotvärmare – Elins ärliga koll | Elins val",
    metaDescription: "Beurer FW20 fotvärmare: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "philips-sonicare-5300",
    product: productBySlug("philips-sonicare-5300"),
    href: "/halsa/eltandborste/sonicare-5300",
    cardBadge: "Sonicare",
    cardHook: "En Sonicare-borste för dig som föredrar slank känsla, tydliga lägen och ett mer mjukt borstsätt.",
    cardImage: "/products/philips-sonicare-5300/philips-sonicare-5300-thumbnail.webp",
    cardImageAlt: "Philips Sonicare 5300",
    badge: "Elins mellanval",
    headline: "Philips Sonicare 5300",
    shortBody: "En Sonicare-borste för dig som föredrar slank känsla, tydliga lägen och ett mer mjukt borstsätt.",
    valueHook: "Sonicare · Trycksensor · Resefodral",
    valueStatement: "En Sonicare-borste för dig som föredrar slank känsla, tydliga lägen och ett mer mjukt borstsätt. Munvård är individuell. Här bedöms funktioner, borsthuvudsekonomi och köparsignaler, inte tandhälsolöften.",
    passFor: [
      "Vill ha munvård utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Munvård är individuell. Här bedöms funktioner, borsthuvudsekonomi och köparsignaler, inte tandhälsolöften.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Starkt Sonicare-val med bra funktionsnivå.",
    amazonSummary: "Amazon visar 4.4 av 5 (2 879).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Philips Sonicare 5300 värd att köpa?",
        answer: "Starkt Sonicare-val med bra funktionsnivå.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "philips-sonicare-5300-recensioner",
    reviewFormId: "philips-sonicare-5300-skriv-recension",
    targetKeyword: "philips sonicare 5300",
    metaTitle: "Philips Sonicare 5300 – Elins ärliga koll | Elins val",
    metaDescription: "Philips Sonicare 5300: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "oralb-io6",
    product: productBySlug("oralb-io6"),
    href: "/halsa/eltandborste/oralb-io6",
    cardBadge: "iO-system",
    cardHook: "En mer påkostad Oral-B-borste för dig som vill ha iO-känsla, display och tydlig feedback.",
    cardImage: "/products/oralb-io6/oralb-io6-thumbnail.webp",
    cardImageAlt: "Oral-B iO Series 6",
    badge: "Elins premiumval",
    headline: "Oral-B iO Series 6",
    shortBody: "En mer påkostad Oral-B-borste för dig som vill ha iO-känsla, display och tydlig feedback.",
    valueHook: "iO-system · Display · Premiumkänsla",
    valueStatement: "En mer påkostad Oral-B-borste för dig som vill ha iO-känsla, display och tydlig feedback. iO-borsthuvuden kostar mer än enklare Oral-B-huvuden. Räkna på förbrukningen, inte bara själva borsten.",
    passFor: [
      "Vill ha munvård utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "iO-borsthuvuden kostar mer än enklare Oral-B-huvuden. Räkna på förbrukningen, inte bara själva borsten.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Fin borste, men borsthuvudsekonomin gör valet mindre självklart.",
    amazonSummary: "Amazon visar 4.4 av 5 (378).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Oral-B iO Series 6 värd att köpa?",
        answer: "Fin borste, men borsthuvudsekonomin gör valet mindre självklart.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "oralb-io6-recensioner",
    reviewFormId: "oralb-io6-skriv-recension",
    targetKeyword: "oral-b io series 6",
    metaTitle: "Oral-B iO Series 6 – Elins ärliga koll | Elins val",
    metaDescription: "Oral-B iO Series 6: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "philips-power-flosser",
    product: productBySlug("philips-power-flosser"),
    href: "/halsa/munskoljare/philips-3000",
    cardBadge: "Vattenflosser",
    cardHook: "En stationär water flosser för dig som vill ha mer vattentank och stabil känsla vid handfatet.",
    cardImage: "/products/philips-power-flosser/philips-power-flosser-thumbnail.webp",
    cardImageAlt: "Philips Power Flosser 3000",
    badge: "Elins mellanval",
    headline: "Philips Power Flosser 3000",
    shortBody: "En stationär water flosser för dig som vill ha mer vattentank och stabil känsla vid handfatet.",
    valueHook: "Vattenflosser · Philips · Bänkenhet",
    valueStatement: "En stationär water flosser för dig som vill ha mer vattentank och stabil känsla vid handfatet. Den tar plats på badrumshyllan och ersätter inte vanliga råd från tandvården. Fokus här är funktion och vardagskänsla.",
    passFor: [
      "Vill ha munvård utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Den tar plats på badrumshyllan och ersätter inte vanliga råd från tandvården. Fokus här är funktion och vardagskänsla.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Stabilt premiumval för dig som har plats vid handfatet.",
    amazonSummary: "Amazon visar 4.4 av 5 (2 360).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Philips Power Flosser 3000 värd att köpa?",
        answer: "Stabilt premiumval för dig som har plats vid handfatet.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "philips-power-flosser-recensioner",
    reviewFormId: "philips-power-flosser-skriv-recension",
    targetKeyword: "philips power flosser 3000",
    metaTitle: "Philips Power Flosser 3000 – Elins ärliga koll | Elins val",
    metaDescription: "Philips Power Flosser 3000: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "surfou-water-flosser",
    product: productBySlug("surfou-water-flosser"),
    href: "/halsa/munskoljare/surfou",
    cardBadge: "Portabel",
    cardHook: "En billigare portabel water flosser för dig som vill testa kategorin utan stationär bänkenhet.",
    cardImage: "/products/surfou-water-flosser/surfou-water-flosser-thumbnail.webp",
    cardImageAlt: "SURFOU water flosser",
    badge: "Elins budgetval",
    headline: "SURFOU water flosser",
    shortBody: "En billigare portabel water flosser för dig som vill testa kategorin utan stationär bänkenhet.",
    valueHook: "Portabel · Budget · Vattentank",
    valueStatement: "En billigare portabel water flosser för dig som vill testa kategorin utan stationär bänkenhet. Budgetformatet innebär mindre tank och enklare känsla. Välj Philips om du vill ha mer stabilitet hemma.",
    passFor: [
      "Vill ha munvård utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Budgetformatet innebär mindre tank och enklare känsla. Välj Philips om du vill ha mer stabilitet hemma.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Helt okej budgettest, men inte lika stabil som bänkenhet.",
    amazonSummary: "Amazon visar 4.1 av 5 (1 909).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är SURFOU water flosser värd att köpa?",
        answer: "Helt okej budgettest, men inte lika stabil som bänkenhet.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "surfou-water-flosser-recensioner",
    reviewFormId: "surfou-water-flosser-skriv-recension",
    targetKeyword: "surfou water flosser",
    metaTitle: "SURFOU water flosser – Elins ärliga koll | Elins val",
    metaDescription: "SURFOU water flosser: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "beurer-fb35-fotbad",
    product: productBySlug("beurer-fb35-fotbad"),
    href: "/skonhet/fotbad/beurer-fb35",
    cardBadge: "Fotbad",
    cardHook: "Ett elektriskt fotbad för vinterrutinen när du vill ha bubblor, vibration och varmhållning i samma balja.",
    cardImage: "/products/beurer-fb35-fotbad/beurer-fb35-fotbad-thumbnail.webp",
    cardImageAlt: "Beurer FB35 fotbad",
    badge: "Elins mellanval",
    headline: "Beurer FB35 fotbad",
    shortBody: "Ett elektriskt fotbad för vinterrutinen när du vill ha bubblor, vibration och varmhållning i samma balja.",
    valueHook: "Fotbad · Massagekänsla · Beurer",
    valueStatement: "Ett elektriskt fotbad för vinterrutinen när du vill ha bubblor, vibration och varmhållning i samma balja. Viktig caveat: det värmer inte upp kallt vatten, utan håller främst värmen. Börja med lagom varmt vatten.",
    passFor: [
      "Vill ha fötter utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Viktig caveat: det värmer inte upp kallt vatten, utan håller främst värmen. Börja med lagom varmt vatten.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Bra om du förstår varmhållningen, svagare om du förväntar dig uppvärmning från kallt.",
    amazonSummary: "Amazon visar 4.2 av 5 (3 570).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Beurer FB35 fotbad värd att köpa?",
        answer: "Bra om du förstår varmhållningen, svagare om du förväntar dig uppvärmning från kallt.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "beurer-fb35-fotbad-recensioner",
    reviewFormId: "beurer-fb35-fotbad-skriv-recension",
    targetKeyword: "beurer fb35 fotbad",
    metaTitle: "Beurer FB35 fotbad – Elins ärliga koll | Elins val",
    metaDescription: "Beurer FB35 fotbad: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "deanic-fotbad",
    product: productBySlug("deanic-fotbad"),
    href: "/skonhet/fotbad/deanic",
    cardBadge: "Hopfällbart",
    cardHook: "Ett enkelt hopfällbart fotbad för dig som vill spara plats och inte behöver elfunktioner.",
    cardImage: "/products/deanic-fotbad/deanic-fotbad-thumbnail.webp",
    cardImageAlt: "DEANIC hopfällbart fotbad",
    badge: "Elins budgetval",
    headline: "DEANIC hopfällbart fotbad",
    shortBody: "Ett enkelt hopfällbart fotbad för dig som vill spara plats och inte behöver elfunktioner.",
    valueHook: "Hopfällbart · Enkelt · Tar liten plats",
    valueStatement: "Ett enkelt hopfällbart fotbad för dig som vill spara plats och inte behöver elfunktioner. Det är en smart balja snarare än ett elektriskt spa. Komforten beror på vattnet du fyller i och hur du använder den.",
    passFor: [
      "Vill ha fötter utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Det är en smart balja snarare än ett elektriskt spa. Komforten beror på vattnet du fyller i och hur du använder den.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Prisvärt och platsbesparande när enkelhet är poängen.",
    amazonSummary: "Amazon visar 4.4 av 5 (432).",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är DEANIC hopfällbart fotbad värd att köpa?",
        answer: "Prisvärt och platsbesparande när enkelhet är poängen.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "deanic-fotbad-recensioner",
    reviewFormId: "deanic-fotbad-skriv-recension",
    targetKeyword: "deanic hopfällbart fotbad",
    metaTitle: "DEANIC hopfällbart fotbad – Elins ärliga koll | Elins val",
    metaDescription: "DEANIC hopfällbart fotbad: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
  {
    productSlug: "bio-oil",
    product: productBySlug("bio-oil"),
    href: "/skonhet/bio-oil",
    cardBadge: "Kroppsolja",
    cardHook: "En parfymerad klassiker för mjukare hudkänsla och glow på kroppen.",
    cardImage: "/products/bio-oil/bio-oil-thumbnail.webp",
    cardImageAlt: "Bio-Oil hudvårdsolja",
    badge: "Elins mellanval",
    headline: "Bio-Oil hudvårdsolja",
    shortBody: "En parfymerad klassiker för mjukare hudkänsla och glow på kroppen.",
    valueHook: "Kroppsolja · Klassiker · Parfymerad",
    valueStatement: "En parfymerad klassiker för mjukare hudkänsla och glow på kroppen. Håll förväntningarna kosmetiska. Doft och oljig finish passar inte alla, särskilt om du vill ha en helt ren olja.",
    passFor: [
      "Vill ha hudvård utan att översäljas.",
      "Vill se caveaten före Amazon-klicket.",
      "Vill jämföra mot närliggande alternativ i katalogen.",
    ],
    caution: "Håll förväntningarna kosmetiska. Doft och oljig finish passar inte alla, särskilt om du vill ha en helt ren olja.",
    usageGuidance: {
      title: "Så tänker Elin före köp",
      text: "Matcha produkten mot behovet, kontrollera variant och säljare på Amazon och välj bort den om caveaten träffar din situation.",
    },
    verdict: "Stark klassiker för kroppsglow, men jojoba är renare och mer neutral.",
    amazonSummary: "Amazon visar 4.6 av 5 (65 241 betyg.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Är Bio-Oil hudvårdsolja värd att köpa?",
        answer: "Stark klassiker för kroppsglow, men jojoba är renare och mer neutral.",
      },
      {
        question: "Varför visar ni inget pris?",
        answer: "Amazon kan ändra pris och lagerstatus. Därför länkar vi till aktuell Amazon-sida i stället för att hårdkoda pris.",
      },
      {
        question: "Har Elin testat produkten själv?",
        answer: "Nej. Elin curerar och jämför utifrån referensfil, specifikationer, köparsignaler och dokumenterade caveats.",
      },
    ],
    reviewSectionId: "bio-oil-recensioner",
    reviewFormId: "bio-oil-skriv-recension",
    targetKeyword: "bio-oil hudvårdsolja",
    metaTitle: "Bio-Oil hudvårdsolja – Elins ärliga koll | Elins val",
    metaDescription: "Bio-Oil hudvårdsolja: Elin sammanfattar köparsignaler, styrkor och caveats. Annonslänk till Amazon, utan hårdkodade priser.",
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
  },
];

export const waveGuides: WaveGuide[] = [
  {
    id: "lopband",
    href: "/traning/lopband",
    category: "traning",
    label: "Guide",
    title: "Löpband och gåband hemma",
    intro: "Två kompakta sätt att få in mer vardagsrörelse hemma: ett rent gåband och ett 2-i-1-löpband med armstöd.",
    badges: [
      "Löpband",
      "Gåband",
      "Hemmaträning",
    ],
    productSlugs: [
      "citysports-gaband",
      "sportconic-lopband",
    ],
    pickBadges: {
      "citysports-gaband": "Rent gåband",
      "sportconic-lopband": "Armstöd",
    },
    choiceTitle: "Hur väljer du?",
    choiceText: "Välj CITYSPORTS om du vill gå vid skrivbordet och hålla formatet så enkelt som möjligt. Välj Sportconic om du vill kunna växla till lätt jogg och vill ha armstöd.",
    rows: [
      {
        label: "Format",
        values: [
          "Rent gåband utan armstöd",
          "2-i-1 med armstöd",
        ],
      },
      {
        label: "Tempo",
        values: [
          "Gång upp till 6 km/h",
          "Gång och lätt jogg upp till 12 km/h",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Inte för löpning",
          "Smal löpyta och lågt armstöd",
        ],
      },
    ],
    verdict: "CITYSPORTS är enklast för gång. Sportconic är mer mångsidigt men kräver att du accepterar smalare hemformat.",
    faqItems: [
      {
        question: "Löpband bäst i test handlar här om rätt typ för hemmet, inte om gymmaskiner.",
        answer: "Välj CITYSPORTS om du vill gå vid skrivbordet och hålla formatet så enkelt som möjligt. Välj Sportconic om du vill kunna växla till lätt jogg och vill ha armstöd.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/traning",
        label: "Träning",
        text: "Se fler träningsval för hemmet.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Löpband och gåband hemma | Elins val",
    metaDescription: "Löpband och gåband hemma: Två kompakta sätt att få in mer vardagsrörelse hemma: ett rent gåband och ett 2-i-1-löpband med armstöd. Annons, utan hårdkodade priser.",
  },
  {
    id: "gaband-eller-lopband",
    href: "/traning/gaband-eller-lopband",
    category: "traning",
    label: "Jämförelse",
    title: "Gåband eller löpband?",
    intro: "Elin jämför rent gåband mot kompakt löpband så valet blir praktiskt: skrivbordsgång eller mer träningskänsla.",
    badges: [
      "Gåband",
      "Löpband",
      "Typval",
    ],
    productSlugs: [
      "citysports-gaband",
      "sportconic-lopband",
    ],
    pickBadges: {
      "citysports-gaband": "Rent gåband",
      "sportconic-lopband": "Armstöd",
    },
    choiceTitle: "Den korta regeln",
    choiceText: "Gåband passar bäst för lågintensiv vardagsrörelse. Löpband passar bättre om du vill ha armstöd, högre tempo och tydligare träningspass hemma.",
    rows: [
      {
        label: "Bäst för",
        values: [
          "Skrivbord och promenadtempo",
          "Gång, lätt jogg och mer stöd",
        ],
      },
      {
        label: "Tar plats",
        values: [
          "Lägre och enklare",
          "Högre med armstöd",
        ],
      },
      {
        label: "Elins caveat",
        values: [
          "Förvänta dig inte löpning",
          "Förvänta dig inte gymbredd",
        ],
      },
    ],
    verdict: "Börja med användningen: ska du gå medan du jobbar är gåbandet smartast. Vill du kunna jogga lätt är Sportconic rimligare.",
    faqItems: [
      {
        question: "Gåband eller löpband hemma?",
        answer: "Gåband passar bäst för lågintensiv vardagsrörelse. Löpband passar bättre om du vill ha armstöd, högre tempo och tydligare träningspass hemma.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/traning",
        label: "Träning",
        text: "Se fler träningsval för hemmet.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Gåband eller löpband? | Elins val",
    metaDescription: "Gåband eller löpband?: Elin jämför rent gåband mot kompakt löpband så valet blir praktiskt: skrivbordsgång eller mer träningskänsla. Annons, utan hårdkodade priser.",
  },
  {
    id: "retinolserum",
    href: "/skonhet/retinolserum",
    category: "skonhet",
    label: "Guide",
    title: "Retinolserum utan hype",
    intro: "Två retinolserum med olika styrkor: Inkey för budget och uppmärksamhet, CeraVe för mildare doftfri profil.",
    badges: [
      "Retinol",
      "Hudvård",
      "Kosmetiskt",
    ],
    productSlugs: [
      "inkey-retinol-serum",
      "cerave-resurfacing-retinol",
    ],
    pickBadges: {
      "inkey-retinol-serum": "Retinol",
      "cerave-resurfacing-retinol": "Doftfri",
    },
    choiceTitle: "Hur väljer du?",
    choiceText: "Välj Inkey om pris och enkel aktiv produkt lockar mest. Välj CeraVe om doftfri och mildare vardagsprofil väger tyngre.",
    rows: [
      {
        label: "Profil",
        values: [
          "Aktiv budgetkänsla",
          "Mildare och doftfri",
        ],
      },
      {
        label: "Största caveat",
        values: [
          "Doft och invänjning",
          "Leveranscaveat",
        ],
      },
      {
        label: "Passar bäst",
        values: [
          "Van hudvårdsrutin",
          "Försiktig kvällsrutin",
        ],
      },
    ],
    verdict: "Båda ska behandlas som kosmetiska kvällsprodukter. Inkey får bättre värde, CeraVe får tryggare känsla men lägre poäng för leveranscaveat.",
    faqItems: [
      {
        question: "Retinol bäst i test utan egna testpåståenden.",
        answer: "Välj Inkey om pris och enkel aktiv produkt lockar mest. Välj CeraVe om doftfri och mildare vardagsprofil väger tyngre.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Retinolserum utan hype | Elins val",
    metaDescription: "Retinolserum utan hype: Två retinolserum med olika styrkor: Inkey för budget och uppmärksamhet, CeraVe för mildare doftfri profil. Annons, utan hårdkodade priser.",
  },
  {
    id: "retinol-eller-bakuchiol",
    href: "/skonhet/retinol-eller-bakuchiol",
    category: "skonhet",
    label: "Jämförelse",
    title: "Retinol eller bakuchiol?",
    intro: "Retinol är retinoidspåret. Bakuchiol är det växtbaserade, mildare alternativet utan retinoid.",
    badges: [
      "Retinol",
      "Bakuchiol",
      "Mildare alternativ",
    ],
    productSlugs: [
      "inkey-retinol-serum",
      "cerave-resurfacing-retinol",
      "celdyque-bakuchiol-serum",
    ],
    pickBadges: {
      "inkey-retinol-serum": "Retinol",
      "cerave-resurfacing-retinol": "Doftfri",
      "celdyque-bakuchiol-serum": "Elins val",
    },
    choiceTitle: "Elins valregel",
    choiceText: "Välj retinol om du redan vill ha en klassisk aktiv kvällsprodukt. Välj bakuchiol om du vill ha ett mildare alternativ utan retinoid.",
    rows: [
      {
        label: "Aktiv typ",
        values: [
          "Retinol",
          "Retinol",
          "Bakuchiol",
        ],
      },
      {
        label: "Känsla",
        values: [
          "Budgetaktiv",
          "Mildare CeraVe",
          "Mildare alternativ",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Doft",
          "Leverans",
          "Lägre aktiv känsla",
        ],
      },
    ],
    verdict: "Retinol är tydligare aktivt. Bakuchiol är smartare om du vill hålla rutinen mildare och enklare.",
    faqItems: [
      {
        question: "Retinol eller bakuchiol?",
        answer: "Välj retinol om du redan vill ha en klassisk aktiv kvällsprodukt. Välj bakuchiol om du vill ha ett mildare alternativ utan retinoid.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Retinol eller bakuchiol? | Elins val",
    metaDescription: "Retinol eller bakuchiol?: Retinol är retinoidspåret. Bakuchiol är det växtbaserade, mildare alternativet utan retinoid. Annons, utan hårdkodade priser.",
  },
  {
    id: "saltvattenspray-eller-texturspray",
    href: "/skonhet/saltvattenspray-eller-texturspray",
    category: "skonhet",
    label: "Jämförelse",
    title: "Saltvattenspray eller texturspray?",
    intro: "Beach waves-känsla mot mer salongsaktig textur och volym.",
    badges: [
      "Hårtextur",
      "Beach waves",
      "Volym",
    ],
    productSlugs: [
      "jean-len-saltvattenspray",
      "maria-nila-texturspray",
    ],
    pickBadges: {
      "jean-len-saltvattenspray": "Beach waves",
      "maria-nila-texturspray": "Elins val",
    },
    choiceTitle: "Välj efter finish",
    choiceText: "Saltvattenspray ger strävare strandkänsla. Texturspray passar bättre när du vill ha torrare volym och mer stylingfinish.",
    rows: [
      {
        label: "Finish",
        values: [
          "Sträv beach texture",
          "Torr volym och stadga",
        ],
      },
      {
        label: "Prisbild",
        values: [
          "Budget",
          "Salongsvarumärke",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Inte för definierade lockar",
          "Svagare underlag och dyrare",
        ],
      },
    ],
    verdict: "Jean & Len är budgetvalet för beach waves. Maria Nila är mer stylingprodukt för volym.",
    faqItems: [
      {
        question: "Saltvattenspray eller texturspray?",
        answer: "Saltvattenspray ger strävare strandkänsla. Texturspray passar bättre när du vill ha torrare volym och mer stylingfinish.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Saltvattenspray eller texturspray? | Elins val",
    metaDescription: "Saltvattenspray eller texturspray?: Beach waves-känsla mot mer salongsaktig textur och volym. Annons, utan hårdkodade priser.",
  },
  {
    id: "golvflakt-eller-tornflakt",
    href: "/halsa/golvflakt-eller-tornflakt",
    category: "halsa",
    label: "Jämförelse",
    title: "Golvfläkt eller tornfläkt?",
    intro: "Midea mot Midea: klassiskt luftflöde på fot eller smal tornform.",
    badges: [
      "Golvfläkt",
      "Tornfläkt",
      "Sovrum",
    ],
    productSlugs: [
      "midea-golvflakt",
      "midea-fz10-tornflakt",
    ],
    pickBadges: {
      "midea-golvflakt": "DC-motor",
      "midea-fz10-tornflakt": "Elins val",
    },
    choiceTitle: "Typen avgör",
    choiceText: "Välj golvfläkt för mer riktat luftflöde och klassisk fläktkänsla. Välj tornfläkt om smal placering och diskret format är viktigare.",
    rows: [
      {
        label: "Format",
        values: [
          "Rund fläkt på stativ",
          "Smal tornfläkt",
        ],
      },
      {
        label: "Styrka",
        values: [
          "Mer direkt luft",
          "Mer diskret spridning",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Tar golvyta",
          "Mindre klassiskt fläkttryck",
        ],
      },
    ],
    verdict: "Midea golvfläkt är starkare som nytt val, medan FZ10 fortfarande är smidigare där platsen är trång.",
    faqItems: [
      {
        question: "Tyst fläkt till sovrummet?",
        answer: "Välj golvfläkt för mer riktat luftflöde och klassisk fläktkänsla. Välj tornfläkt om smal placering och diskret format är viktigare.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Golvfläkt eller tornfläkt? | Elins val",
    metaDescription: "Golvfläkt eller tornfläkt?: Midea mot Midea: klassiskt luftflöde på fot eller smal tornform. Annons, utan hårdkodade priser.",
  },
  {
    id: "dagsljuslampa",
    href: "/halsa/dagsljuslampa",
    category: "halsa",
    label: "Guide",
    title: "Dagsljuslampa för mörka morgnar",
    intro: "Två Beurer-lampor för extra ljus under mörka morgnar, utan behandlingslöften.",
    badges: [
      "Extra ljus",
      "Beurer",
      "Mörka morgnar",
    ],
    productSlugs: [
      "beurer-tl30-dagsljuslampa",
      "beurer-tl35-dagsljuslampa",
    ],
    pickBadges: {
      "beurer-tl30-dagsljuslampa": "Resefodral",
      "beurer-tl35-dagsljuslampa": "Kompakt",
    },
    choiceTitle: "TL30 eller TL35?",
    choiceText: "TL30 är det mer beprövade lilla valet. TL35 passar om du vill ha ett något annorlunda format och kompakt skrivbordskänsla.",
    rows: [
      {
        label: "Styrka",
        values: [
          "Mest beprövad",
          "Kompakt alternativ",
        ],
      },
      {
        label: "Placering",
        values: [
          "Liten yta",
          "Skrivbord",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Inga medicinska löften",
          "Inga medicinska löften",
        ],
      },
    ],
    verdict: "Båda ska beskrivas som extra ljus i vardagen. TL30 får övertaget på social proof.",
    faqItems: [
      {
        question: "Dagsljuslampa utan medicinska claims.",
        answer: "TL30 är det mer beprövade lilla valet. TL35 passar om du vill ha ett något annorlunda format och kompakt skrivbordskänsla.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Dagsljuslampa för mörka morgnar | Elins val",
    metaDescription: "Dagsljuslampa för mörka morgnar: Två Beurer-lampor för extra ljus under mörka morgnar, utan behandlingslöften. Annons, utan hårdkodade priser.",
  },
  {
    id: "beurer-tl30-eller-tl35",
    href: "/halsa/beurer-tl30-eller-tl35",
    category: "halsa",
    label: "Jämförelse",
    title: "Beurer TL30 eller TL35?",
    intro: "Två kompakta Beurer-val för mörka morgnar, med skillnaden i format och beprövning.",
    badges: [
      "Beurer",
      "TL30",
      "TL35",
    ],
    productSlugs: [
      "beurer-tl30-dagsljuslampa",
      "beurer-tl35-dagsljuslampa",
    ],
    pickBadges: {
      "beurer-tl30-dagsljuslampa": "Resefodral",
      "beurer-tl35-dagsljuslampa": "Kompakt",
    },
    choiceTitle: "Elins korta val",
    choiceText: "Välj TL30 om du vill ha det mest beprövade valet. Välj TL35 om formatet och placeringen passar bättre hos dig.",
    rows: [
      {
        label: "Köparsignal",
        values: [
          "Starkast",
          "Stark",
        ],
      },
      {
        label: "Format",
        values: [
          "Litet och etablerat",
          "Kompakt panel",
        ],
      },
      {
        label: "Copygräns",
        values: [
          "Extra ljus",
          "Extra ljus",
        ],
      },
    ],
    verdict: "TL30 är förstavalet, TL35 är nära bakom när formatet passar bättre.",
    faqItems: [
      {
        question: "Beurer TL30 eller TL35?",
        answer: "Välj TL30 om du vill ha det mest beprövade valet. Välj TL35 om formatet och placeringen passar bättre hos dig.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Beurer TL30 eller TL35? | Elins val",
    metaDescription: "Beurer TL30 eller TL35?: Två kompakta Beurer-val för mörka morgnar, med skillnaden i format och beprövning. Annons, utan hårdkodade priser.",
  },
  {
    id: "morka-morgnar",
    href: "/halsa/morka-morgnar",
    category: "halsa",
    label: "Guide",
    title: "Mörka morgnar: ljus, väckning och kvällsro",
    intro: "En liten guide till extra ljus, wake-up light och mjukt kvällssken under mörka månader.",
    badges: [
      "Mörka morgnar",
      "Ljus",
      "Vardag",
    ],
    productSlugs: [
      "beurer-tl30-dagsljuslampa",
      "philips-wake-up-light",
      "solnedgangslampa",
    ],
    pickBadges: {
      "beurer-tl30-dagsljuslampa": "Resefodral",
      "philips-wake-up-light": "Elins val",
      solnedgangslampa: "Elins val",
    },
    choiceTitle: "Bygg efter tid på dagen",
    choiceText: "Dagsljuslampa hör hemma på morgon eller skrivbord. Wake-up light hjälper rutinen runt uppvakning. Solnedgångslampa är mer kvälls- och mysprodukt.",
    rows: [
      {
        label: "Bäst för",
        values: [
          "Extra ljus",
          "Väckningsrutin",
          "Kvällskänsla",
        ],
      },
      {
        label: "Placering",
        values: [
          "Skrivbord",
          "Nattduksbord",
          "Vardagsrum",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Inga behandlingslöften",
          "Inte dagsljus",
          "Mest stämning",
        ],
      },
    ],
    verdict: "Kombinera efter situation, inte efter stora löften.",
    faqItems: [
      {
        question: "Mörka morgnar guide.",
        answer: "Dagsljuslampa hör hemma på morgon eller skrivbord. Wake-up light hjälper rutinen runt uppvakning. Solnedgångslampa är mer kvälls- och mysprodukt.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Mörka morgnar: ljus, väckning och kvällsro | Elins val",
    metaDescription: "Mörka morgnar: ljus, väckning och kvällsro: En liten guide till extra ljus, wake-up light och mjukt kvällssken under mörka månader. Annons, utan hårdkodade priser.",
  },
  {
    id: "luftfuktare-guide",
    href: "/halsa/luftfuktare-guide",
    category: "halsa",
    label: "Guide",
    title: "Luftfuktare: ultraljud eller evaporativ?",
    intro: "Levoit ger synlig dimma och smart styrning. Beurer LB200 är det evaporativa alternativet med annan logik.",
    badges: [
      "Luftfuktare",
      "Ultraljud",
      "Evaporativ",
    ],
    productSlugs: [
      "levoit-luftfuktare",
      "beurer-lb200-luftfuktare",
    ],
    pickBadges: {
      "levoit-luftfuktare": "Elins val",
      "beurer-lb200-luftfuktare": "Evaporativ",
    },
    choiceTitle: "Välj typ först",
    choiceText: "Ultraljud känns direkt och synligt. Evaporativ luftfuktning är mer lågmäld och kräver mer förståelse för filter och skötsel.",
    rows: [
      {
        label: "Typ",
        values: [
          "Ultraljud",
          "Evaporativ",
        ],
      },
      {
        label: "Känsla",
        values: [
          "Synlig dimma",
          "Mer lågmäld",
        ],
      },
      {
        label: "Skötsel",
        values: [
          "Rengöring viktig",
          "Filter och rengöring",
        ],
      },
    ],
    verdict: "Levoit är enklare att förstå direkt. Beurer är intressant för dig som aktivt vill ha evaporativ typ.",
    faqItems: [
      {
        question: "Luftfuktare guide.",
        answer: "Ultraljud känns direkt och synligt. Evaporativ luftfuktning är mer lågmäld och kräver mer förståelse för filter och skötsel.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Luftfuktare: ultraljud eller evaporativ? | Elins val",
    metaDescription: "Luftfuktare: ultraljud eller evaporativ?: Levoit ger synlig dimma och smart styrning. Beurer LB200 är det evaporativa alternativet med annan logik. Annons, utan hårdkodade priser.",
  },
  {
    id: "ultraljud-eller-evaporativ-luftfuktare",
    href: "/halsa/ultraljud-eller-evaporativ-luftfuktare",
    category: "halsa",
    label: "Jämförelse",
    title: "Ultraljud eller evaporativ luftfuktare?",
    intro: "Två tekniker med olika vardagskänsla, skötsel och synlighet.",
    badges: [
      "Typguide",
      "Luftfuktare",
      "Klimat",
    ],
    productSlugs: [
      "levoit-luftfuktare",
      "beurer-lb200-luftfuktare",
    ],
    pickBadges: {
      "levoit-luftfuktare": "Elins val",
      "beurer-lb200-luftfuktare": "Evaporativ",
    },
    choiceTitle: "Tekniken styr vardagen",
    choiceText: "Välj ultraljud för synlig dimma och direkt känsla. Välj evaporativ om du vill ha ett mer lågmält system och accepterar filter.",
    rows: [
      {
        label: "Synlighet",
        values: [
          "Synlig dimma",
          "Lågmäld",
        ],
      },
      {
        label: "Skötsel",
        values: [
          "Tankrengöring",
          "Filter",
        ],
      },
      {
        label: "Elins val",
        values: [
          "Enklast för de flesta",
          "För den typmedvetna",
        ],
      },
    ],
    verdict: "Det finns inget universellt bästa val. Välj tekniken du faktiskt orkar sköta.",
    faqItems: [
      {
        question: "Ultraljud eller evaporativ luftfuktare?",
        answer: "Välj ultraljud för synlig dimma och direkt känsla. Välj evaporativ om du vill ha ett mer lågmält system och accepterar filter.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Ultraljud eller evaporativ luftfuktare? | Elins val",
    metaDescription: "Ultraljud eller evaporativ luftfuktare?: Två tekniker med olika vardagskänsla, skötsel och synlighet. Annons, utan hårdkodade priser.",
  },
  {
    id: "luftrenare-guide",
    href: "/halsa/luftrenare-guide",
    category: "halsa",
    label: "Guide",
    title: "Luftrenare: Levoit eller Philips?",
    intro: "Levoit Core 200S mot Philips 600: smartare appval eller kompakt märkesval.",
    badges: [
      "Luftrenare",
      "Levoit",
      "Philips",
    ],
    productSlugs: [
      "levoit-core-200s-luftrenare",
      "philips-600-luftrenare",
    ],
    pickBadges: {
      "levoit-core-200s-luftrenare": "Elins val",
      "philips-600-luftrenare": "HEPA-filter",
    },
    choiceTitle: "Så väljer du",
    choiceText: "Välj Levoit om smart styrning och beprövning lockar. Välj Philips om du vill ha ett kompakt, enkelt märkesval.",
    rows: [
      {
        label: "Profil",
        values: [
          "Smart och beprövad",
          "Kompakt och enkel",
        ],
      },
      {
        label: "Filter",
        values: [
          "Kontrollera filterpris",
          "Kontrollera filterpris",
        ],
      },
      {
        label: "Copygräns",
        values: [
          "Inga medicinska löften",
          "Inga medicinska löften",
        ],
      },
    ],
    verdict: "Levoit behåller högst poäng, Philips är ett rimligt enklare alternativ.",
    faqItems: [
      {
        question: "Luftrenare guide med lågmäld copy.",
        answer: "Välj Levoit om smart styrning och beprövning lockar. Välj Philips om du vill ha ett kompakt, enkelt märkesval.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Luftrenare: Levoit eller Philips? | Elins val",
    metaDescription: "Luftrenare: Levoit eller Philips?: Levoit Core 200S mot Philips 600: smartare appval eller kompakt märkesval. Annons, utan hårdkodade priser.",
  },
  {
    id: "levoit-eller-philips-luftrenare",
    href: "/halsa/levoit-eller-philips-luftrenare",
    category: "halsa",
    label: "Jämförelse",
    title: "Levoit eller Philips luftrenare?",
    intro: "Smart luftrenare mot kompakt luftrenare, utan stora hälsolöften.",
    badges: [
      "Luftrenare",
      "Filter",
      "Kompakt",
    ],
    productSlugs: [
      "levoit-core-200s-luftrenare",
      "philips-600-luftrenare",
    ],
    pickBadges: {
      "levoit-core-200s-luftrenare": "Elins val",
      "philips-600-luftrenare": "HEPA-filter",
    },
    choiceTitle: "Välj efter styrning",
    choiceText: "Levoit är starkare om du vill ha app och etablerat val. Philips passar om du vill hålla det enkelt.",
    rows: [
      {
        label: "Styrning",
        values: [
          "Smart",
          "Enklare",
        ],
      },
      {
        label: "Styrka",
        values: [
          "Högre poäng",
          "Kompakt märke",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Filterkostnad",
          "Filterkostnad",
        ],
      },
    ],
    verdict: "Levoit är förstavalet, Philips är alternativet när formatet avgör.",
    faqItems: [
      {
        question: "Levoit eller Philips luftrenare?",
        answer: "Levoit är starkare om du vill ha app och etablerat val. Philips passar om du vill hålla det enkelt.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Levoit eller Philips luftrenare? | Elins val",
    metaDescription: "Levoit eller Philips luftrenare?: Smart luftrenare mot kompakt luftrenare, utan stora hälsolöften. Annons, utan hårdkodade priser.",
  },
  {
    id: "tyngdtacke-guide",
    href: "/halsa/tyngdtacke-guide",
    category: "halsa",
    label: "Guide",
    title: "Tyngdtäcke: Ella eller Good Nite?",
    intro: "Två vuxenval där vikt, värmekänsla och tvättråd betyder mer än stora löften.",
    badges: [
      "Tyngdtäcke",
      "Vuxen",
      "Sömnmiljö",
    ],
    productSlugs: [
      "ella-tyngdtacke",
      "good-nite-tyngdtacke",
    ],
    pickBadges: {
      "ella-tyngdtacke": "Elins val",
      "good-nite-tyngdtacke": "8 kg",
    },
    choiceTitle: "Välj med kroppen",
    choiceText: "Ella har högre poäng i katalogen. Good Nite är det nya alternativet om vikt och känsla matchar bättre.",
    rows: [
      {
        label: "Profil",
        values: [
          "Högre poäng",
          "Nytt alternativ",
        ],
      },
      {
        label: "Viktigast",
        values: [
          "Vikt och värme",
          "Vikt och värme",
        ],
      },
      {
        label: "Gräns",
        values: [
          "Vuxenval",
          "Vuxenval",
        ],
      },
    ],
    verdict: "Tyngdtäcke är personligt. Elin väljer hellre efter viktmatchning än efter säljrubrik.",
    faqItems: [
      {
        question: "Tyngdtäcke guide.",
        answer: "Ella har högre poäng i katalogen. Good Nite är det nya alternativet om vikt och känsla matchar bättre.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Tyngdtäcke: Ella eller Good Nite? | Elins val",
    metaDescription: "Tyngdtäcke: Ella eller Good Nite?: Två vuxenval där vikt, värmekänsla och tvättråd betyder mer än stora löften. Annons, utan hårdkodade priser.",
  },
  {
    id: "ella-eller-good-nite-tyngdtacke",
    href: "/halsa/ella-eller-good-nite-tyngdtacke",
    category: "halsa",
    label: "Jämförelse",
    title: "Ella eller Good Nite tyngdtäcke?",
    intro: "Två tyngdtäcken för vuxna, jämförda på känsla, vikt och caveats.",
    badges: [
      "Tyngdtäcke",
      "Vuxen",
      "Jämförelse",
    ],
    productSlugs: [
      "ella-tyngdtacke",
      "good-nite-tyngdtacke",
    ],
    pickBadges: {
      "ella-tyngdtacke": "Elins val",
      "good-nite-tyngdtacke": "8 kg",
    },
    choiceTitle: "Elins korta val",
    choiceText: "Välj Ella om du vill ha det starkare katalogvalet. Välj Good Nite om vikten och materialkänslan stämmer bättre för dig.",
    rows: [
      {
        label: "Poäng",
        values: [
          "Högre",
          "Bra",
        ],
      },
      {
        label: "Vikt",
        values: [
          "Kontrollera variant",
          "8 kg enligt referens",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Personlig känsla",
          "Kan kännas varmt",
        ],
      },
    ],
    verdict: "Ella är förstavalet, Good Nite är fullt rimligt när vikten matchar.",
    faqItems: [
      {
        question: "Ella eller Good Nite?",
        answer: "Välj Ella om du vill ha det starkare katalogvalet. Välj Good Nite om vikten och materialkänslan stämmer bättre för dig.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Ella eller Good Nite tyngdtäcke? | Elins val",
    metaDescription: "Ella eller Good Nite tyngdtäcke?: Två tyngdtäcken för vuxna, jämförda på känsla, vikt och caveats. Annons, utan hårdkodade priser.",
  },
  {
    id: "varmeflakt-eller-oljefyllt-element",
    href: "/halsa/varmeflakt-eller-oljefyllt-element",
    category: "halsa",
    label: "Jämförelse",
    title: "Värmefläkt eller oljefyllt element?",
    intro: "Snabb punktvärme mot tystare långtidsvärme.",
    badges: [
      "Värme",
      "Vinter",
      "Typval",
    ],
    productSlugs: [
      "emerio-varmeflakt",
      "delonghi-oljefyllt-element",
    ],
    pickBadges: {
      "emerio-varmeflakt": "Snabb punktvärme",
      "delonghi-oljefyllt-element": "Tyst värme",
    },
    choiceTitle: "Snabbt eller tyst?",
    choiceText: "Värmefläkt är bäst när du vill känna värme snabbt. Oljefyllt element är bättre när låg ljudnivå och längre pass väger tyngre.",
    rows: [
      {
        label: "Styrka",
        values: [
          "Snabb punktvärme",
          "Tystare långtidsvärme",
        ],
      },
      {
        label: "Kompromiss",
        values: [
          "Ljud och luftdrag",
          "Långsammare start",
        ],
      },
      {
        label: "Säkerhet",
        values: [
          "Uppsikt",
          "Plats runt elementet",
        ],
      },
    ],
    verdict: "Emerio är snabbast och billigare. De'Longhi är mer behaglig över tid men har säljare/frakt-caveat.",
    faqItems: [
      {
        question: "Värmefläkt eller oljefyllt element?",
        answer: "Värmefläkt är bäst när du vill känna värme snabbt. Oljefyllt element är bättre när låg ljudnivå och längre pass väger tyngre.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Värmefläkt eller oljefyllt element? | Elins val",
    metaDescription: "Värmefläkt eller oljefyllt element?: Snabb punktvärme mot tystare långtidsvärme. Annons, utan hårdkodade priser.",
  },
  {
    id: "elfilt-eller-varmedyna",
    href: "/halsa/elfilt-eller-varmedyna",
    category: "halsa",
    label: "Jämförelse",
    title: "Elfilt eller värmedyna?",
    intro: "Stor soffvärme mot mindre riktad värme.",
    badges: [
      "Värme",
      "Soffa",
      "Mys",
    ],
    productSlugs: [
      "beurer-hd75-elfilt",
      "beurer-varmedyna",
    ],
    pickBadges: {
      "beurer-hd75-elfilt": "Mysvärme",
      "beurer-varmedyna": "Elins val",
    },
    choiceTitle: "Yta eller punkt?",
    choiceText: "Välj elfilt när du vill värma större del av kroppen i soffan. Välj värmedyna när du vill ha mindre format och riktad värme.",
    rows: [
      {
        label: "Format",
        values: [
          "Stor filt",
          "Mindre dyna",
        ],
      },
      {
        label: "Passar bäst",
        values: [
          "Soffan",
          "Riktad plats",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Mild mysvärme",
          "Mindre yta",
        ],
      },
    ],
    verdict: "Elfilt är mysigare för soffan. Värmedyna är smidigare när formatet ska vara litet.",
    faqItems: [
      {
        question: "Elfilt eller värmedyna?",
        answer: "Välj elfilt när du vill värma större del av kroppen i soffan. Välj värmedyna när du vill ha mindre format och riktad värme.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Elfilt eller värmedyna? | Elins val",
    metaDescription: "Elfilt eller värmedyna?: Stor soffvärme mot mindre riktad värme. Annons, utan hårdkodade priser.",
  },
  {
    id: "eltandborste-guide",
    href: "/halsa/eltandborste-guide",
    category: "halsa",
    label: "Guide",
    title: "Eltandborste: Oral-B eller Sonicare?",
    intro: "Oral-B iO, Sonicare och befintliga iO 5 samlade i en tydligare munvårdsguide.",
    badges: [
      "Eltandborste",
      "Oral-B",
      "Sonicare",
    ],
    productSlugs: [
      "oralb-tandborste",
      "philips-sonicare-5300",
      "oralb-io6",
    ],
    pickBadges: {
      "oralb-tandborste": "Elins val",
      "philips-sonicare-5300": "Sonicare",
      "oralb-io6": "iO-system",
    },
    choiceTitle: "Borsthuvuden avgör mer än man tror",
    choiceText: "Sonicare lockar med slank känsla. Oral-B iO ger premiumfeedback men borsthuvudena kostar mer. Det enklare Oral-B-valet är ofta mer ekonomiskt.",
    rows: [
      {
        label: "System",
        values: [
          "Oral-B",
          "Sonicare",
          "Oral-B iO",
        ],
      },
      {
        label: "Ekonomi",
        values: [
          "Bättre än iO 6",
          "Kontrollera huvuden",
          "Dyrare huvuden",
        ],
      },
      {
        label: "Poäng",
        values: [
          "Starkt katalogval",
          "Starkt nytt val",
          "Sänks av ekonomi",
        ],
      },
      {
        label: "Attribuerad köparsignal",
        values: [
          "Befintligt Oral-B-val; jämför främst borsthuvudsekonomin.",
          "Bo Strömberg: \"Cleanest teeth in a long time. My Oral-B is retired.\" Niclas: \"Känns bra och rent i munnen och batteritiden mycket bättre.\"",
          "Referens: \"Köpare som uppgraderat från Oral-B Pro beskriver tydlig skillnad\"",
        ],
      },
    ],
    verdict: "Sonicare 5300 är starkast nytt val. iO6 är fin men kräver att du accepterar löpande kostnad.",
    faqItems: [
      {
        question: "Eltandborste guide.",
        answer: "Sonicare lockar med slank känsla. Oral-B iO ger premiumfeedback men borsthuvudena kostar mer. Det enklare Oral-B-valet är ofta mer ekonomiskt.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Eltandborste: Oral-B eller Sonicare? | Elins val",
    metaDescription: "Eltandborste: Oral-B eller Sonicare?: Oral-B iO, Sonicare och befintliga iO 5 samlade i en tydligare munvårdsguide. Annons, utan hårdkodade priser.",
  },
  {
    id: "oral-b-eller-sonicare",
    href: "/halsa/oral-b-eller-sonicare",
    category: "halsa",
    label: "Jämförelse",
    title: "Oral-B eller Sonicare?",
    intro: "Rund borsthuvudkänsla mot Sonicare-känsla, med borsthuvudsekonomin i centrum.",
    badges: [
      "Munvård",
      "Oral-B",
      "Sonicare",
    ],
    productSlugs: [
      "oralb-io6",
      "philips-sonicare-5300",
    ],
    pickBadges: {
      "oralb-io6": "iO-system",
      "philips-sonicare-5300": "Sonicare",
    },
    choiceTitle: "Känsla först",
    choiceText: "Välj Oral-B om du gillar iO-feedback och display. Välj Sonicare om du vill ha slankare känsla och starkt helhetsvärde.",
    rows: [
      {
        label: "Känsla",
        values: [
          "Rund iO-känsla",
          "Slank Sonicare-känsla",
        ],
      },
      {
        label: "Ekonomi",
        values: [
          "Dyrare huvuden",
          "Kontrollera huvuden",
        ],
      },
      {
        label: "Elins val",
        values: [
          "Premium med caveat",
          "Starkare helhet",
        ],
      },
      {
        label: "Attribuerad köparsignal",
        values: [
          "Referens: \"Köpare som uppgraderat från Oral-B Pro beskriver tydlig skillnad\"",
          "Bo Strömberg: \"Cleanest teeth in a long time. My Oral-B is retired.\" Niclas: \"Känns bra och rent i munnen och batteritiden mycket bättre.\"",
        ],
      },
    ],
    verdict: "Sonicare får helhetsfördelen. Oral-B iO6 är bäst när premiumfeedback är viktigast.",
    faqItems: [
      {
        question: "Oral-B eller Sonicare?",
        answer: "Välj Oral-B om du gillar iO-feedback och display. Välj Sonicare om du vill ha slankare känsla och starkt helhetsvärde.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Oral-B eller Sonicare? | Elins val",
    metaDescription: "Oral-B eller Sonicare?: Rund borsthuvudkänsla mot Sonicare-känsla, med borsthuvudsekonomin i centrum. Annons, utan hårdkodade priser.",
  },
  {
    id: "oralb-io6-vart-priset",
    href: "/halsa/oralb-io6-vart-priset",
    category: "halsa",
    label: "Guide",
    title: "Är Oral-B iO6 värd priset?",
    intro: "En ärlig guide till när iO6 är rätt och när enklare Oral-B räcker.",
    badges: [
      "Oral-B iO",
      "Borsthuvuden",
      "Värde",
    ],
    productSlugs: [
      "oralb-io6",
      "oralb-tandborste",
    ],
    pickBadges: {
      "oralb-io6": "iO-system",
      "oralb-tandborste": "Elins val",
    },
    choiceTitle: "Räkna på förbrukningen",
    choiceText: "iO6 är mest intressant om display och premiumkänsla gör att du faktiskt använder den. Annars är enklare Oral-B ofta mer rimlig.",
    rows: [
      {
        label: "Styrka",
        values: [
          "Premiumfeedback",
          "Bättre värde",
        ],
      },
      {
        label: "Kostnad över tid",
        values: [
          "Dyrare huvuden",
          "Billigare system",
        ],
      },
      {
        label: "Elins råd",
        values: [
          "Köp medvetet",
          "Räcker för många",
        ],
      },
      {
        label: "Attribuerad köparsignal",
        values: [
          "Referens: \"Köpare som uppgraderat från Oral-B Pro beskriver tydlig skillnad\"",
          "Befintligt enklare Oral-B-val; jämför total kostnad över tid.",
        ],
      },
    ],
    verdict: "iO6 är bra, men inte automatiskt bästa köpet.",
    faqItems: [
      {
        question: "Oral-B iO6 värd priset?",
        answer: "iO6 är mest intressant om display och premiumkänsla gör att du faktiskt använder den. Annars är enklare Oral-B ofta mer rimlig.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Är Oral-B iO6 värd priset? | Elins val",
    metaDescription: "Är Oral-B iO6 värd priset?: En ärlig guide till när iO6 är rätt och när enklare Oral-B räcker. Annons, utan hårdkodade priser.",
  },
  {
    id: "munskoljare",
    href: "/halsa/munskoljare",
    category: "halsa",
    label: "Guide",
    title: "Munsköljare: billig eller dyr water flosser?",
    intro: "Philips bänkenhet mot SURFOU portabel budgetmodell.",
    badges: [
      "Water flosser",
      "Munvård",
      "Budget vs dyr",
    ],
    productSlugs: [
      "philips-power-flosser",
      "surfou-water-flosser",
    ],
    pickBadges: {
      "philips-power-flosser": "Vattenflosser",
      "surfou-water-flosser": "Portabel",
    },
    choiceTitle: "Stationär eller portabel?",
    choiceText: "Philips passar bättre om rutinen sker hemma vid handfatet. SURFOU är billigare och mer portabel men enklare.",
    rows: [
      {
        label: "Format",
        values: [
          "Bänkenhet",
          "Portabel",
        ],
      },
      {
        label: "Styrka",
        values: [
          "Stabil känsla",
          "Låg tröskel",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Tar plats",
          "Mindre tank",
        ],
      },
    ],
    verdict: "Philips är starkare om du vet att du kommer använda den. SURFOU är rimlig om du vill testa billigt.",
    faqItems: [
      {
        question: "Munsköljare guide.",
        answer: "Philips passar bättre om rutinen sker hemma vid handfatet. SURFOU är billigare och mer portabel men enklare.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Munsköljare: billig eller dyr water flosser? | Elins val",
    metaDescription: "Munsköljare: billig eller dyr water flosser?: Philips bänkenhet mot SURFOU portabel budgetmodell. Annons, utan hårdkodade priser.",
  },
  {
    id: "billig-eller-dyr-water-flosser",
    href: "/halsa/billig-eller-dyr-water-flosser",
    category: "halsa",
    label: "Jämförelse",
    title: "Billig eller dyr water flosser?",
    intro: "Portabel budget mot stationär Philips-modell.",
    badges: [
      "Water flosser",
      "Budget",
      "Philips",
    ],
    productSlugs: [
      "surfou-water-flosser",
      "philips-power-flosser",
    ],
    pickBadges: {
      "surfou-water-flosser": "Portabel",
      "philips-power-flosser": "Vattenflosser",
    },
    choiceTitle: "Betala för stabilitet",
    choiceText: "Det dyrare valet ger mer stationär känsla och större vardagsstabilitet. Budgetvalet är bäst för test och liten plats.",
    rows: [
      {
        label: "Prislogik",
        values: [
          "Billigare test",
          "Mer stabil rutin",
        ],
      },
      {
        label: "Tank",
        values: [
          "Mindre",
          "Större",
        ],
      },
      {
        label: "Elins caveat",
        values: [
          "Enklare känsla",
          "Tar plats",
        ],
      },
    ],
    verdict: "Philips vinner på långsiktig rutin. SURFOU vinner på låg tröskel.",
    faqItems: [
      {
        question: "Billig eller dyr water flosser?",
        answer: "Det dyrare valet ger mer stationär känsla och större vardagsstabilitet. Budgetvalet är bäst för test och liten plats.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/halsa",
        label: "Hälsa",
        text: "Se fler val för hem och vardag.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Billig eller dyr water flosser? | Elins val",
    metaDescription: "Billig eller dyr water flosser?: Portabel budget mot stationär Philips-modell. Annons, utan hårdkodade priser.",
  },
  {
    id: "fotbad",
    href: "/skonhet/fotbad",
    category: "skonhet",
    label: "Guide",
    title: "Fotbad för vinterrutinen",
    intro: "Beurer FB35 mot DEANIC: elektrisk varmhållning eller enkel hopfällbar balja.",
    badges: [
      "Fotbad",
      "Vinter",
      "Fötter",
    ],
    productSlugs: [
      "beurer-fb35-fotbad",
      "deanic-fotbad",
    ],
    pickBadges: {
      "beurer-fb35-fotbad": "Fotbad",
      "deanic-fotbad": "Hopfällbart",
    },
    choiceTitle: "El eller enkelhet?",
    choiceText: "Välj Beurer om du vill ha bubblor och elfunktioner. Välj DEANIC om det viktigaste är att fotbadet tar liten plats.",
    rows: [
      {
        label: "Format",
        values: [
          "Elektriskt",
          "Hopfällbart",
        ],
      },
      {
        label: "Värme",
        values: [
          "Håller främst värmen",
          "Du fyller själv",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Värmer inte kallt vatten",
          "Ingen spa-funktion",
        ],
      },
    ],
    verdict: "DEANIC får högre poäng för enkelheten. Beurer passar om funktionerna faktiskt används.",
    faqItems: [
      {
        question: "Fotbad guide.",
        answer: "Välj Beurer om du vill ha bubblor och elfunktioner. Välj DEANIC om det viktigaste är att fotbadet tar liten plats.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Fotbad för vinterrutinen | Elins val",
    metaDescription: "Fotbad för vinterrutinen: Beurer FB35 mot DEANIC: elektrisk varmhållning eller enkel hopfällbar balja. Annons, utan hårdkodade priser.",
  },
  {
    id: "elektriskt-eller-enkelt-fotbad",
    href: "/skonhet/elektriskt-eller-enkelt-fotbad",
    category: "skonhet",
    label: "Jämförelse",
    title: "Elektriskt eller enkelt fotbad?",
    intro: "Bubblor och varmhållning mot platsbesparande enkelhet.",
    badges: [
      "Fotbad",
      "Elektriskt",
      "Hopfällbart",
    ],
    productSlugs: [
      "beurer-fb35-fotbad",
      "deanic-fotbad",
    ],
    pickBadges: {
      "beurer-fb35-fotbad": "Fotbad",
      "deanic-fotbad": "Hopfällbart",
    },
    choiceTitle: "Välj efter förvaring",
    choiceText: "Har du plats och vill ha bubblor kan Beurer vara rätt. Om fotbadet annars blir stående i vägen är DEANIC smartare.",
    rows: [
      {
        label: "Förvaring",
        values: [
          "Tar mer plats",
          "Hopfällbart",
        ],
      },
      {
        label: "Funktion",
        values: [
          "Bubblor och varmhållning",
          "Enkel balja",
        ],
      },
      {
        label: "Elins caveat",
        values: [
          "Inte uppvärmning från kallt",
          "Mindre lyx",
        ],
      },
    ],
    verdict: "Det enkla fotbadet är ofta smartare än man tror.",
    faqItems: [
      {
        question: "Elektriskt eller enkelt fotbad?",
        answer: "Har du plats och vill ha bubblor kan Beurer vara rätt. Om fotbadet annars blir stående i vägen är DEANIC smartare.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Elektriskt eller enkelt fotbad? | Elins val",
    metaDescription: "Elektriskt eller enkelt fotbad?: Bubblor och varmhållning mot platsbesparande enkelhet. Annons, utan hårdkodade priser.",
  },
  {
    id: "skona-fotter-i-vinter",
    href: "/skonhet/skona-fotter-i-vinter",
    category: "skonhet",
    label: "Guide",
    title: "Sköna fötter i vinter",
    intro: "Fotbad, fotfil, foot peel, kräm och puder i en enkel ordning.",
    badges: [
      "Fötter",
      "Vinter",
      "Rutin",
    ],
    productSlugs: [
      "deanic-fotbad",
      "vxdoirk-elektrisk-fotfil",
      "plantifique-foot-peel",
      "flexitol-halkram",
      "gehwol-fotpuder",
    ],
    pickBadges: {
      "deanic-fotbad": "Hopfällbart",
      "vxdoirk-elektrisk-fotfil": "Elins val",
      "plantifique-foot-peel": "Elins val",
      "flexitol-halkram": "Elins val",
      "gehwol-fotpuder": "Elins val",
    },
    choiceTitle: "Bygg rutinen lugnt",
    choiceText: "Börja med fotbad när du vill mjuka upp. Välj fil eller peeling efter behov och avsluta med kräm eller puder beroende på känsla.",
    rows: [
      {
        label: "Steg",
        values: [
          "Blötläggning",
          "Fil",
          "Peeling",
          "Kräm",
          "Puder",
        ],
      },
      {
        label: "Bäst för",
        values: [
          "Mjuk start",
          "Förhårdnader",
          "Periodisk kur",
          "Torr hudkänsla",
          "Fräsch känsla",
        ],
      },
    ],
    verdict: "Det bästa är inte flest produkter, utan rätt steg vid rätt tillfälle.",
    faqItems: [
      {
        question: "Sköna fötter i vinter.",
        answer: "Börja med fotbad när du vill mjuka upp. Välj fil eller peeling efter behov och avsluta med kräm eller puder beroende på känsla.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Sköna fötter i vinter | Elins val",
    metaDescription: "Sköna fötter i vinter: Fotbad, fotfil, foot peel, kräm och puder i en enkel ordning. Annons, utan hårdkodade priser.",
  },
  {
    id: "bio-oil-eller-jojobaolja",
    href: "/skonhet/bio-oil-eller-jojobaolja",
    category: "skonhet",
    label: "Jämförelse",
    title: "Bio-Oil eller jojobaolja?",
    intro: "Parfymerad klassiker mot renare naturolja.",
    badges: [
      "Kroppsolja",
      "Jojoba",
      "Hudvård",
    ],
    productSlugs: [
      "bio-oil",
      "kanzy-jojobaolja",
    ],
    pickBadges: {
      "bio-oil": "Kroppsolja",
      "kanzy-jojobaolja": "Elins val",
    },
    choiceTitle: "Doft eller renhet?",
    choiceText: "Välj Bio-Oil om du vill ha klassisk parfymerad kroppsolja. Välj jojoba om du vill ha renare, mer neutral olja för hud, hår och naglar.",
    rows: [
      {
        label: "Profil",
        values: [
          "Parfymerad klassiker",
          "Renare olja",
        ],
      },
      {
        label: "Mångsidighet",
        values: [
          "Kroppsglow",
          "Hud, hår och naglar",
        ],
      },
      {
        label: "Caveat",
        values: [
          "Doft och finish",
          "Mindre presentkänsla",
        ],
      },
    ],
    verdict: "Jojoba är Elins mer mångsidiga val. Bio-Oil är starkt om du gillar känslan och doften.",
    faqItems: [
      {
        question: "Bio-Oil eller jojobaolja?",
        answer: "Välj Bio-Oil om du vill ha klassisk parfymerad kroppsolja. Välj jojoba om du vill ha renare, mer neutral olja för hud, hår och naglar.",
      },
      {
        question: "Varför visar ni inga priser?",
        answer: "Amazon kan ändra pris, lager och säljare. Därför visar Elins val aktuell prisinformation först på Amazon.",
      },
    ],
    relatedLinks: [
      {
        href: "/skonhet",
        label: "Skönhet",
        text: "Se fler skönhetsval.",
      },
      {
        href: "/jamforelser",
        label: "Jämförelser",
        text: "Alla Elins jämförelser samlade.",
      },
    ],
    metaTitle: "Bio-Oil eller jojobaolja? | Elins val",
    metaDescription: "Bio-Oil eller jojobaolja?: Parfymerad klassiker mot renare naturolja. Annons, utan hårdkodade priser.",
  },
];

export const waveComparisonEntries: readonly ComparisonEntry[] = [
  {
    slug: "lopband",
    title: "Löpband och gåband hemma",
    shortTitle: "Löpband och gåband hemma",
    category: "traning",
    categoryLabel: "Träning",
    href: "/traning/lopband",
    description: "Två kompakta sätt att få in mer vardagsrörelse hemma: ett rent gåband och ett 2-i-1-löpband med armstöd.",
    productSlugs: [
      "citysports-gaband",
      "sportconic-lopband",
    ],
    badges: [
      "Löpband",
      "Gåband",
      "Hemmaträning",
    ],
  },
  {
    slug: "gaband-eller-lopband",
    title: "Gåband eller löpband?",
    shortTitle: "Gåband eller löpband?",
    category: "traning",
    categoryLabel: "Träning",
    href: "/traning/gaband-eller-lopband",
    description: "Elin jämför rent gåband mot kompakt löpband så valet blir praktiskt: skrivbordsgång eller mer träningskänsla.",
    productSlugs: [
      "citysports-gaband",
      "sportconic-lopband",
    ],
    badges: [
      "Gåband",
      "Löpband",
      "Typval",
    ],
  },
  {
    slug: "retinolserum",
    title: "Retinolserum utan hype",
    shortTitle: "Retinolserum utan hype",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/retinolserum",
    description: "Två retinolserum med olika styrkor: Inkey för budget och uppmärksamhet, CeraVe för mildare doftfri profil.",
    productSlugs: [
      "inkey-retinol-serum",
      "cerave-resurfacing-retinol",
    ],
    badges: [
      "Retinol",
      "Hudvård",
      "Kosmetiskt",
    ],
  },
  {
    slug: "retinol-eller-bakuchiol",
    title: "Retinol eller bakuchiol?",
    shortTitle: "Retinol eller bakuchiol?",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/retinol-eller-bakuchiol",
    description: "Retinol är retinoidspåret. Bakuchiol är det växtbaserade, mildare alternativet utan retinoid.",
    productSlugs: [
      "inkey-retinol-serum",
      "cerave-resurfacing-retinol",
      "celdyque-bakuchiol-serum",
    ],
    badges: [
      "Retinol",
      "Bakuchiol",
      "Mildare alternativ",
    ],
  },
  {
    slug: "saltvattenspray-eller-texturspray",
    title: "Saltvattenspray eller texturspray?",
    shortTitle: "Saltvattenspray eller texturspray?",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/saltvattenspray-eller-texturspray",
    description: "Beach waves-känsla mot mer salongsaktig textur och volym.",
    productSlugs: [
      "jean-len-saltvattenspray",
      "maria-nila-texturspray",
    ],
    badges: [
      "Hårtextur",
      "Beach waves",
      "Volym",
    ],
  },
  {
    slug: "golvflakt-eller-tornflakt",
    title: "Golvfläkt eller tornfläkt?",
    shortTitle: "Golvfläkt eller tornfläkt?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/golvflakt-eller-tornflakt",
    description: "Midea mot Midea: klassiskt luftflöde på fot eller smal tornform.",
    productSlugs: [
      "midea-golvflakt",
      "midea-fz10-tornflakt",
    ],
    badges: [
      "Golvfläkt",
      "Tornfläkt",
      "Sovrum",
    ],
  },
  {
    slug: "dagsljuslampa",
    title: "Dagsljuslampa för mörka morgnar",
    shortTitle: "Dagsljuslampa för mörka morgnar",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/dagsljuslampa",
    description: "Två Beurer-lampor för extra ljus under mörka morgnar, utan behandlingslöften.",
    productSlugs: [
      "beurer-tl30-dagsljuslampa",
      "beurer-tl35-dagsljuslampa",
    ],
    badges: [
      "Extra ljus",
      "Beurer",
      "Mörka morgnar",
    ],
  },
  {
    slug: "beurer-tl30-eller-tl35",
    title: "Beurer TL30 eller TL35?",
    shortTitle: "Beurer TL30 eller TL35?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/beurer-tl30-eller-tl35",
    description: "Två kompakta Beurer-val för mörka morgnar, med skillnaden i format och beprövning.",
    productSlugs: [
      "beurer-tl30-dagsljuslampa",
      "beurer-tl35-dagsljuslampa",
    ],
    badges: [
      "Beurer",
      "TL30",
      "TL35",
    ],
  },
  {
    slug: "luftfuktare-guide",
    title: "Luftfuktare: ultraljud eller evaporativ?",
    shortTitle: "Luftfuktare: ultraljud eller evaporativ?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/luftfuktare-guide",
    description: "Levoit ger synlig dimma och smart styrning. Beurer LB200 är det evaporativa alternativet med annan logik.",
    productSlugs: [
      "levoit-luftfuktare",
      "beurer-lb200-luftfuktare",
    ],
    badges: [
      "Luftfuktare",
      "Ultraljud",
      "Evaporativ",
    ],
  },
  {
    slug: "ultraljud-eller-evaporativ-luftfuktare",
    title: "Ultraljud eller evaporativ luftfuktare?",
    shortTitle: "Ultraljud eller evaporativ luftfuktare?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/ultraljud-eller-evaporativ-luftfuktare",
    description: "Två tekniker med olika vardagskänsla, skötsel och synlighet.",
    productSlugs: [
      "levoit-luftfuktare",
      "beurer-lb200-luftfuktare",
    ],
    badges: [
      "Typguide",
      "Luftfuktare",
      "Klimat",
    ],
  },
  {
    slug: "luftrenare-guide",
    title: "Luftrenare: Levoit eller Philips?",
    shortTitle: "Luftrenare: Levoit eller Philips?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/luftrenare-guide",
    description: "Levoit Core 200S mot Philips 600: smartare appval eller kompakt märkesval.",
    productSlugs: [
      "levoit-core-200s-luftrenare",
      "philips-600-luftrenare",
    ],
    badges: [
      "Luftrenare",
      "Levoit",
      "Philips",
    ],
  },
  {
    slug: "levoit-eller-philips-luftrenare",
    title: "Levoit eller Philips luftrenare?",
    shortTitle: "Levoit eller Philips luftrenare?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/levoit-eller-philips-luftrenare",
    description: "Smart luftrenare mot kompakt luftrenare, utan stora hälsolöften.",
    productSlugs: [
      "levoit-core-200s-luftrenare",
      "philips-600-luftrenare",
    ],
    badges: [
      "Luftrenare",
      "Filter",
      "Kompakt",
    ],
  },
  {
    slug: "tyngdtacke-guide",
    title: "Tyngdtäcke: Ella eller Good Nite?",
    shortTitle: "Tyngdtäcke: Ella eller Good Nite?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/tyngdtacke-guide",
    description: "Två vuxenval där vikt, värmekänsla och tvättråd betyder mer än stora löften.",
    productSlugs: [
      "ella-tyngdtacke",
      "good-nite-tyngdtacke",
    ],
    badges: [
      "Tyngdtäcke",
      "Vuxen",
      "Sömnmiljö",
    ],
  },
  {
    slug: "ella-eller-good-nite-tyngdtacke",
    title: "Ella eller Good Nite tyngdtäcke?",
    shortTitle: "Ella eller Good Nite tyngdtäcke?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/ella-eller-good-nite-tyngdtacke",
    description: "Två tyngdtäcken för vuxna, jämförda på känsla, vikt och caveats.",
    productSlugs: [
      "ella-tyngdtacke",
      "good-nite-tyngdtacke",
    ],
    badges: [
      "Tyngdtäcke",
      "Vuxen",
      "Jämförelse",
    ],
  },
  {
    slug: "varmeflakt-eller-oljefyllt-element",
    title: "Värmefläkt eller oljefyllt element?",
    shortTitle: "Värmefläkt eller oljefyllt element?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/varmeflakt-eller-oljefyllt-element",
    description: "Snabb punktvärme mot tystare långtidsvärme.",
    productSlugs: [
      "emerio-varmeflakt",
      "delonghi-oljefyllt-element",
    ],
    badges: [
      "Värme",
      "Vinter",
      "Typval",
    ],
  },
  {
    slug: "elfilt-eller-varmedyna",
    title: "Elfilt eller värmedyna?",
    shortTitle: "Elfilt eller värmedyna?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/elfilt-eller-varmedyna",
    description: "Stor soffvärme mot mindre riktad värme.",
    productSlugs: [
      "beurer-hd75-elfilt",
      "beurer-varmedyna",
    ],
    badges: [
      "Värme",
      "Soffa",
      "Mys",
    ],
  },
  {
    slug: "eltandborste-guide",
    title: "Eltandborste: Oral-B eller Sonicare?",
    shortTitle: "Eltandborste: Oral-B eller Sonicare?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/eltandborste-guide",
    description: "Oral-B iO, Sonicare och befintliga iO 5 samlade i en tydligare munvårdsguide.",
    productSlugs: [
      "oralb-tandborste",
      "philips-sonicare-5300",
      "oralb-io6",
    ],
    badges: [
      "Eltandborste",
      "Oral-B",
      "Sonicare",
    ],
  },
  {
    slug: "oral-b-eller-sonicare",
    title: "Oral-B eller Sonicare?",
    shortTitle: "Oral-B eller Sonicare?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/oral-b-eller-sonicare",
    description: "Rund borsthuvudkänsla mot Sonicare-känsla, med borsthuvudsekonomin i centrum.",
    productSlugs: [
      "oralb-io6",
      "philips-sonicare-5300",
    ],
    badges: [
      "Munvård",
      "Oral-B",
      "Sonicare",
    ],
  },
  {
    slug: "oralb-io6-vart-priset",
    title: "Är Oral-B iO6 värd priset?",
    shortTitle: "Är Oral-B iO6 värd priset?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/oralb-io6-vart-priset",
    description: "En ärlig guide till när iO6 är rätt och när enklare Oral-B räcker.",
    productSlugs: [
      "oralb-io6",
      "oralb-tandborste",
    ],
    badges: [
      "Oral-B iO",
      "Borsthuvuden",
      "Värde",
    ],
  },
  {
    slug: "munskoljare",
    title: "Munsköljare: billig eller dyr water flosser?",
    shortTitle: "Munsköljare: billig eller dyr water flosser?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/munskoljare",
    description: "Philips bänkenhet mot SURFOU portabel budgetmodell.",
    productSlugs: [
      "philips-power-flosser",
      "surfou-water-flosser",
    ],
    badges: [
      "Water flosser",
      "Munvård",
      "Budget vs dyr",
    ],
  },
  {
    slug: "billig-eller-dyr-water-flosser",
    title: "Billig eller dyr water flosser?",
    shortTitle: "Billig eller dyr water flosser?",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/billig-eller-dyr-water-flosser",
    description: "Portabel budget mot stationär Philips-modell.",
    productSlugs: [
      "surfou-water-flosser",
      "philips-power-flosser",
    ],
    badges: [
      "Water flosser",
      "Budget",
      "Philips",
    ],
  },
  {
    slug: "fotbad",
    title: "Fotbad för vinterrutinen",
    shortTitle: "Fotbad för vinterrutinen",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/fotbad",
    description: "Beurer FB35 mot DEANIC: elektrisk varmhållning eller enkel hopfällbar balja.",
    productSlugs: [
      "beurer-fb35-fotbad",
      "deanic-fotbad",
    ],
    badges: [
      "Fotbad",
      "Vinter",
      "Fötter",
    ],
  },
  {
    slug: "elektriskt-eller-enkelt-fotbad",
    title: "Elektriskt eller enkelt fotbad?",
    shortTitle: "Elektriskt eller enkelt fotbad?",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/elektriskt-eller-enkelt-fotbad",
    description: "Bubblor och varmhållning mot platsbesparande enkelhet.",
    productSlugs: [
      "beurer-fb35-fotbad",
      "deanic-fotbad",
    ],
    badges: [
      "Fotbad",
      "Elektriskt",
      "Hopfällbart",
    ],
  },
  {
    slug: "bio-oil-eller-jojobaolja",
    title: "Bio-Oil eller jojobaolja?",
    shortTitle: "Bio-Oil eller jojobaolja?",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/bio-oil-eller-jojobaolja",
    description: "Parfymerad klassiker mot renare naturolja.",
    productSlugs: [
      "bio-oil",
      "kanzy-jojobaolja",
    ],
    badges: [
      "Kroppsolja",
      "Jojoba",
      "Hudvård",
    ],
  },
];

export const waveCategoryProductGroups: Partial<Record<ProductCategorySlug, CategoryProductGroup[]>> = {
  skonhet: [
    {
      title: "Hudvård",
      productSlugs: [
        "inkey-retinol-serum",
        "cerave-resurfacing-retinol",
        "bio-oil",
      ],
    },
    {
      title: "Makeup",
      productSlugs: [
        "physicians-formula-bronzer",
      ],
    },
    {
      title: "Hårvård",
      productSlugs: [
        "jean-len-saltvattenspray",
      ],
    },
    {
      title: "Fötter",
      productSlugs: [
        "beurer-fb35-fotbad",
        "deanic-fotbad",
      ],
    },
  ],
  halsa: [
    {
      title: "Fläkt",
      productSlugs: [
        "midea-golvflakt",
      ],
    },
    {
      title: "Mörka morgnar",
      productSlugs: [
        "beurer-tl35-dagsljuslampa",
        "beurer-tl30-dagsljuslampa",
      ],
    },
    {
      title: "Värme",
      productSlugs: [
        "beurer-hd75-elfilt",
        "emerio-varmeflakt",
        "delonghi-oljefyllt-element",
        "beurer-fw20-fotvarmare",
      ],
    },
    {
      title: "Klimat",
      productSlugs: [
        "beurer-lb200-luftfuktare",
        "philips-600-luftrenare",
      ],
    },
    {
      title: "Sömn & avkoppling",
      productSlugs: [
        "good-nite-tyngdtacke",
      ],
    },
    {
      title: "Munvård",
      productSlugs: [
        "philips-sonicare-5300",
        "oralb-io6",
        "philips-power-flosser",
        "surfou-water-flosser",
      ],
    },
  ],
  traning: [
    {
      title: "Kondition",
      productSlugs: [
        "sportconic-lopband",
        "citysports-gaband",
      ],
    },
  ],
};

export function getWaveProductPick(productSlug: string) {
  return waveProductPicks.find((pick) => pick.productSlug === productSlug);
}

export function getWaveGuide(id: string) {
  return waveGuides.find((guide) => guide.id === id);
}
