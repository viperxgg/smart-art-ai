import {
  elfSkinBronzingDropsProduct,
  niveaSunAfterSunLotionProduct,
  stTropezSelfTanExpressProduct,
  type Product,
} from "@/lib/products";

export type SommarQuote = {
  text: string;
  attribution: string;
};

export type SommarFaqItem = {
  question: string;
  answer: string;
};

export type SommarPick = {
  productSlug: string;
  href: string;
  cardBadge: string;
  cardHook: string;
  cardImage: string;
  cardImageAlt: string;
  product: Product;
  badge: string;
  headline: string;
  shortBody: string;
  valueHook: string;
  valueStatement: string;
  passFor: string[];
  caution: string;
  verdict: string;
  amazonSummary: string;
  amazonQuotes: SommarQuote[];
  faqItems: SommarFaqItem[];
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const sommarSectionCopy = {
  eyebrow: "☀️ Elins sommar-glow",
  title: "Elins sommar-glow",
  intro:
    "Sommaren och midsommar är här. Här samlar Elin produkter för en naturlig glow, mjukt hår och sandalfina fötter - sånt som faktiskt är värt pengarna inför säsongen. Listan fylls på under sommaren.",
  metaTitle:
    "Elins sommar-glow - sommarfynd för hud, hår & glow | Elins val",
  metaDescription:
    "Elins utvalda sommarfavoriter: brun utan sol, glow och vård inför sommaren och midsommar - med Elins poäng och vad tusentals Amazon-köpare tycker.",
};

export const sommarPicks: SommarPick[] = [
  {
    productSlug: stTropezSelfTanExpressProduct.slug,
    href: "/skonhet/brun-utan-sol",
    cardBadge: "Naturligast glow",
    cardHook: "Naturlig brun utan sol på en timme - 15 000+ omdömen.",
    cardImage:
      "/products/brun-utan-sol-st-tropez/brun-utan-sol-st-tropez-thumbnail.webp",
    cardImageAlt: "St.Tropez Self Tan Express brun-utan-sol-mousse, 200 ml",
    product: stTropezSelfTanExpressProduct,
    badge: "Elins sommarfavorit",
    headline:
      "St.Tropez Self Tan Express - naturlig brun utan sol på en timme",
    shortBody:
      "Den mest beprövade brun-utan-sol-moussen på Amazon: du styr själv färgen och får en naturlig glow utan att vara i solen.",
    valueHook: "Den mest beprövade brun-utan-sol för en naturlig glow.",
    valueStatement:
      "St.Tropez Self Tan Express är en av de mest sålda och högst betygsatta brun-utan-sol-mousserna på Amazon - 4,4 av 5 från över 15 000 omdömen. Du styr själv färgen: skölj av efter 1 timme för en lätt ton, 2 timmar för medel och 3 timmar för mörk. Den är vegansk och cruelty-free, och köparna lyfter framför allt den naturliga, icke-orangea färgen och den fräscha doften. Det är inte den billigaste, men för en pålitlig, jämn glow inför sommaren och midsommar är det få som slår den.",
    passFor: [
      "Vill ha en naturlig solbränna utan sol, lagom till sommaren eller midsommar.",
      "Vill styra hur mörk färgen blir (1, 2 eller 3 timmar).",
      "Föredrar vegansk och cruelty-free hudvård.",
    ],
    caution:
      "Det här är ett premiumval - det finns billigare brun-utan-sol om priset är viktigast. Applicera med en appliceringshandske och fördela jämnt, annars kan färgen bli ojämn eller ge ränder. Färgen tonas ut gradvis på några dagar, så du behöver lägga om med jämna mellanrum.",
    verdict:
      "Premiumvalet - naturligast glow för dig som vill ha ett tryggt, beprövat resultat.",
    amazonSummary:
      "Amazon visar 4,4 av 5 från 15 327 recensioner, och moussen ligger högt bland Body Self-Tanners (#14). Vegansk och cruelty-free. Köparna lyfter den naturliga färgen, att den är lätt att applicera och den fräscha doften.",
    amazonQuotes: [
      {
        text: "Ger fin lyster och vacker solbrun färg utan att kladda eller ge fläckar. Doftar dessutom gott.",
        attribution: "Köpare, Amazon (Sverige)",
      },
      {
        text: "Perfekt för oss med kall oliv ton.",
        attribution: "Dimaamsho1, Amazon",
      },
      {
        text: "So easy to apply and no streaks at all - and it's vegan and cruelty-free.",
        attribution: "Köpare, Amazon",
      },
    ],
    faqItems: [
      {
        question: "Hur länge håller färgen?",
        answer:
          "Express-moussen utvecklas på 1-3 timmar och färgen tonas sedan ut gradvis under några dagar. Lägg om med jämna mellanrum för att hålla glowen jämn.",
      },
      {
        question: "Blir man orange?",
        answer:
          "Köparna beskriver färgen som naturlig och brun snarare än orange, men resultatet beror på hudton och hur jämnt du applicerar. Använd en appliceringshandske för bäst resultat.",
      },
      {
        question: "Skyddar brun utan sol mot solen?",
        answer:
          "Nej. Brun utan sol ger färg men ger inget UV-skydd. Använd ett separat solskydd när du är i solen.",
      },
      {
        question: "Hur väljer jag hur mörk färgen blir?",
        answer:
          "Skölj av efter 1 timme för en lätt ton, 2 timmar för medel och 3 timmar för en mörkare färg.",
      },
    ],
    reviewSectionId: "st-tropez-recensioner",
    reviewFormId: "st-tropez-skriv-recension",
    targetKeyword: "brun utan sol bäst i test",
    metaTitle: "Brun utan sol - St.Tropez Self Tan Express i test | Elins val",
    metaDescription:
      "Elin går igenom St.Tropez Self Tan Express: en av de mest beprövade brun-utan-sol-mousserna (4,4 av 5, 15 000+ omdömen). Naturlig glow på 1-3 timmar, vegansk - och vad du bör veta om pris och hållbarhet.",
  },
  {
    productSlug: elfSkinBronzingDropsProduct.slug,
    href: "/skonhet/bronzing-drops",
    cardBadge: "Prisvärt glow-val",
    cardHook: "Flytande glow du blandar själv - veganskt och prisvärt.",
    cardImage: "/products/bronzing-drops-elf/bronzing-drops-elf-thumbnail.webp",
    cardImageAlt:
      "e.l.f. SKIN Bronzing Drops i fyra nyanser, från fair gold till copper gold",
    product: elfSkinBronzingDropsProduct,
    badge: "Prisvärt glow-val",
    headline: "e.l.f. SKIN Bronzing Drops - flytande glow du blandar själv",
    shortBody:
      "Pigmenterade bronzing-droppar som du blandar i din egen kräm för en naturlig, sun-kissed lyster - veganskt och prisvärt.",
    valueHook: "Prisvärd glow i droppform - för en sun-kissed lyster.",
    valueStatement:
      "e.l.f. Bronzing Drops är ett prisvärt sätt att få en sun-kissed glow utan sol. Det är en pigmenterad, vårdande vätska med E-vitamin och solrosfröolja som du blandar med din egen ansiktskräm eller olja - ju fler droppar, desto mer färg. Den är vegansk och cruelty-free (certifierad av Leaping Bunny och PETA) och beskrivs passa alla hudtyper. Köparna lyfter den naturliga lystern och att lite räcker långt.",
    passFor: [
      "Vill ha en lätt, naturlig glow snarare än en hel självbruna.",
      "Gillar att själv styra färgen genom att blanda i din kräm.",
      "Vill ha ett prisvärt, veganskt alternativ.",
    ],
    caution:
      'Dropparna kan bli ojämna eller fläckiga om de inte blandas väl - några köpare beskriver resultatet som "patchy" och färgen som ganska mörk, så den passar mindre bra för mycket ljus hud. Konsistensen är mer som en tjock kräm än rinnande droppar. Börja med få droppar och bygg upp.',
    verdict:
      "Prisvärt glow-val - bronzing drops för dig som vill bygga färgen själv.",
    amazonSummary:
      "Amazon visar 4,3 av 5 från 1 550 omdömen. Vegansk och cruelty-free. Köparna lyfter den naturliga lystern, att den är lätt att blanda i kräm och att lite räcker långt.",
    amazonQuotes: [
      {
        text: "Snabb leverans och läcker färg :)",
        attribution: "Rhianna, Amazon (Sverige)",
      },
      {
        text: "Super glow - blandad i foundation eller i små klickar. Rekommenderar verkligen.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "A bit patchy.",
        attribution: "Köpare, Amazon",
      },
    ],
    faqItems: [
      {
        question: "Hur använder jag bronzing drops?",
        answer:
          "Blanda några droppar med din ansiktskräm eller olja och applicera. Ju fler droppar, desto mörkare glow. Den kan användas på ansikte och kropp.",
      },
      {
        question: "Passar den ljus hud?",
        answer:
          "Färgen är ganska pigmenterad och kan bli mörk. Börja med en eller två droppar väl utblandade i kräm, så blir den lättare att dosera på ljus hud.",
      },
      {
        question: "Är den vegansk?",
        answer:
          "Ja, e.l.f. är vegansk och cruelty-free, certifierad av Leaping Bunny och PETA.",
      },
    ],
    reviewSectionId: "elf-bronzing-drops-recensioner",
    reviewFormId: "elf-bronzing-drops-skriv-recension",
    targetKeyword: "bronzing drops",
    metaTitle: "Bronzing drops i test - e.l.f. SKIN flytande bronzer | Elins val",
    metaDescription:
      "Elin går igenom e.l.f. SKIN Bronzing Drops: ett prisvärt, veganskt sätt att få en naturlig glow du blandar själv (4,3 av 5, 1 500+ omdömen) - och vad du bör veta om dosering och hudton.",
  },
  {
    productSlug: niveaSunAfterSunLotionProduct.slug,
    href: "/skonhet/aftersun",
    cardBadge: "Mest prisvärd",
    cardHook: "Svalkande aloe vera efter solen - 4,6 av 5.",
    cardImage: "/products/aftersun-nivea/aftersun-nivea-thumbnail.webp",
    cardImageAlt: "NIVEA SUN After Sun Moisturising Soothing Lotion, 200 ml",
    product: niveaSunAfterSunLotionProduct,
    badge: "Prisvärt val",
    headline: "NIVEA SUN After Sun - svalkande fukt efter solen",
    shortBody:
      "Ett prisvärt, beprövat after sun som kyler och återfuktar huden efter en dag i solen, med aloe vera.",
    valueHook: "Mest beprövade after sun för pengarna.",
    valueStatement:
      "NIVEA SUN After Sun är ett av de mest älskade after sun-valen på Amazon - 4,6 av 5 från över 3 000 omdömen. Den svalkande lotionen med aloe vera och avokadoolja absorberas snabbt, återfuktar och hjälper huden att kännas mjuk efter solen. Köparna lyfter att den kyler skönt, doftar fräscht och inte känns fet.",
    passFor: [
      "Vill ha ett svalkande, återfuktande after sun efter stranden eller midsommar.",
      "Vill ha ett tryggt, beprövat märke till ett lågt pris.",
      "Gillar aloe vera och en lätt, icke-fet känsla.",
    ],
    caution:
      "Det här är hudvård efter solen, inte solskydd - den ersätter inte solkräm. Produkten innehåller parfym och parabener, vilket känslig hud kan reagera på. Den har ännu inga svenska omdömen, men tusentals internationella.",
    verdict:
      "Prisvärt och beprövat - ett tryggt after sun-val för hela sommaren.",
    amazonSummary:
      "Amazon visar 4,6 av 5 från 3 237 omdömen. Köparna lyfter den svalkande, återfuktande känslan med aloe vera, den fräscha doften och det låga priset.",
    amazonQuotes: [
      {
        text: "Cools your skin down after sun exposure, smells good and isn't greasy.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Aloe vera and it smells amazing - I keep it in the fridge, so refreshing.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Great price. I just love it.",
        attribution: "Köpare, Amazon",
      },
    ],
    faqItems: [
      {
        question: "Ersätter after sun solskydd?",
        answer:
          "Nej. After sun är hudvård efter solen och ger inget UV-skydd. Använd alltid ett separat solskydd när du är i solen.",
      },
      {
        question: "Hjälper det mot solbränd hud?",
        answer:
          "Den kan kännas svalkande och återfuktande efter solen med aloe vera, men den ersätter inte solskydd och ska inte ses som en lösning vid kraftig solbränna.",
      },
      {
        question: "Är den fet eller klibbig?",
        answer:
          "Köparna beskriver den som lätt och snabbt absorberande, inte fet.",
      },
    ],
    reviewSectionId: "nivea-after-sun-recensioner",
    reviewFormId: "nivea-after-sun-skriv-recension",
    targetKeyword: "aftersun",
    metaTitle: "Aftersun bäst i test - NIVEA SUN After Sun lotion | Elins val",
    metaDescription:
      "Elin går igenom NIVEA SUN After Sun: ett prisvärt, svalkande after sun med aloe vera (4,6 av 5, 3 000+ omdömen) - och varför det inte ersätter solskydd.",
  },
];

export function getSommarPickBySlug(productSlug: string) {
  return sommarPicks.find((pick) => pick.productSlug === productSlug);
}
