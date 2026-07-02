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
];

export const waveCategoryProductGroups: Partial<Record<ProductCategorySlug, CategoryProductGroup[]>> = {
  skonhet: [
    {
      title: "Hudvård",
      productSlugs: [
        "inkey-retinol-serum",
        "cerave-resurfacing-retinol",
      ],
    },
    {
      title: "Makeup",
      productSlugs: [
        "physicians-formula-bronzer",
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
