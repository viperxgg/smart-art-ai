import type { ProductCategorySlug } from "@/lib/products";

export type ComparisonEntry = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProductCategorySlug;
  categoryLabel: string;
  href: string;
  description: string;
  productSlugs: [string, string];
  badges: string[];
};

export const comparisonEntries: readonly ComparisonEntry[] = [
  {
    slug: "traningsband",
    title: "Långa träningsband vs JAKKOFOXX loop-band",
    shortTitle: "Träningsband",
    category: "traning",
    categoryLabel: "Träning",
    href: "/traning/traningsband",
    description:
      "Långa band i naturlatex för helkropp mot loop-band för ben och rumpa.",
    productSlugs: ["traningsband-4-nivaer", "jakkofoxx-loopband"],
    badges: ["Helkropp", "Ben & rumpa", "Mest beprövad"],
  },
  {
    slug: "kettlebell",
    title: "Amazon Basics vs PROIRON mjuk kettlebell",
    shortTitle: "Kettlebell",
    category: "traning",
    categoryLabel: "Träning",
    href: "/traning/kettlebell",
    description:
      "Gjutjärn för mest värde mot mjuk kettlebell för golv, ljud och nybörjare.",
    productSlugs: [
      "amazon-basics-gjutjarns-kettlebell",
      "proiron-mjuk-kettlebell",
    ],
    badges: ["Mest värde", "Golvvänligt", "Nybörjarvänligt"],
  },
  {
    slug: "hantlar",
    title: "PROIRON neoprenhantlar vs SONGMICS hantelset",
    shortTitle: "Hantlar",
    category: "traning",
    categoryLabel: "Träning",
    href: "/traning/hantlar",
    description:
      "Ett enkelt par i rätt vikt mot ett färdigt startset med ställning.",
    productSlugs: ["proiron-neoprenhantlar", "songmics-hantelset-med-stallning"],
    badges: ["Mest beprövad", "Set + ställning", "Hemmaträning"],
  },
  {
    slug: "yogamatta",
    title: "ProSourceFit 13 mm vs YOGATI TPE yogamatta",
    shortTitle: "Yogamatta",
    category: "traning",
    categoryLabel: "Träning",
    href: "/traning/yogamatta",
    description:
      "Extra komfort för pilates och golvövningar mot bättre grepp för yoga.",
    productSlugs: [
      "prosourcefit-extra-tjock-yogamatta",
      "yogati-tpe-yogamatta",
    ],
    badges: ["13 mm komfort", "Bra grepp", "Balans"],
  },
  {
    slug: "foam-roller",
    title: "BODYMATE CARE vs Elvire Deep Tissue foam roller",
    shortTitle: "Foam roller",
    category: "traning",
    categoryLabel: "Träning",
    href: "/traning/foam-roller",
    description:
      "En enkel slät rulle med ryggränna mot ett komplett texturerat återhämtningsset.",
    productSlugs: [
      "bodymate-foam-roller-care",
      "elvire-deep-tissue-massageset",
    ],
    badges: ["Mest värde", "Komplett set", "Deep-tissue"],
  },
  {
    slug: "massagepistol",
    title: "Beurer MG 99 vs BDBKMG massagepistol",
    shortTitle: "Massagepistol",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/massagepistol",
    description:
      "Kompakt märkesval mot fler lägen och mer funktioner för pengarna.",
    productSlugs: ["beurer-mg-99-massagepistol", "bdbkmg-massagepistol"],
    badges: ["Känt märke", "99 lägen", "Återhämtning"],
  },
  {
    slug: "plattang",
    title: "Remington S8540 vs Remington Mini S2880",
    shortTitle: "Plattång",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/plattang",
    description:
      "Beprövad vardagsplattång mot ett ärligt begränsat reseval.",
    productSlugs: ["remington-s8540-plattang", "remington-mini-s2880-plattang"],
    badges: ["Beprövat val", "Resvänlig", "Hårstyling"],
  },
  {
    slug: "epilator",
    title: "Panasonic ES-EY30 vs Braun Silk-épil 9",
    shortTitle: "Epilator",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/epilator",
    description:
      "Prisvärt premiumval mot ett dyrare paket med fler tillbehör.",
    productSlugs: ["panasonic-es-ey30-epilator", "braun-silk-epil-9"],
    badges: ["Wet/Dry", "Premiumval", "Lenare resultat"],
  },
  {
    slug: "hartork",
    title: "Remington PROluxe vs Beurer HC 25 hårtork",
    shortTitle: "Hårtork",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/hartork",
    description:
      "Salongskraft hemma mot en lättare rese- och budgethårtork.",
    productSlugs: ["remington-proluxe-ac9140-hartork", "beurer-hc-25-hartork"],
    badges: ["2400 W", "Resvänlig", "Budgetval"],
  },
  {
    slug: "locktang",
    title: "BaByliss C325E vs TYMO CURLPRO locktång",
    shortTitle: "Locktång",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/locktang",
    description:
      "Manuellt värdeval för stora lockar mot automatisk premiumstyling.",
    productSlugs: ["babyliss-c325e-locktang", "tymo-curlpro-locktang"],
    badges: ["Mest värde", "Automatisk", "Stora lockar"],
  },
  {
    slug: "varmluftsborste",
    title: "BaByliss AS126E vs Remington AS7100 varmluftsborste",
    shortTitle: "Varmluftsborste",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/varmluftsborste",
    description:
      "Mångsidig 4-i-1 för volym mot billigare styling för kort hår.",
    productSlugs: [
      "babyliss-as126e-varmluftsborste",
      "remington-as7100-varmluftsborste",
    ],
    badges: ["4-i-1", "Budgetval", "Kort hår"],
  },
  {
    slug: "platta-eller-locka",
    title: "Platta eller locka?",
    shortTitle: "Platta eller locka?",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/platta-eller-locka",
    description:
      "Slätt, polerat och mjuka vågor mot definierade klassiska lockar.",
    productSlugs: ["remington-s8540-plattang", "babyliss-c325e-locktang"],
    badges: ["Rakt & vågor", "Definierade lockar", "Mångsidig"],
  },
  {
    slug: "varmluftsborste-eller-fon",
    title: "Varmluftsborste eller vanlig fön?",
    shortTitle: "Varmluftsborste eller fön",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/varmluftsborste-eller-fon",
    description:
      "Torka och styla i samma moment mot ren, kraftfull torkning.",
    productSlugs: [
      "babyliss-as126e-varmluftsborste",
      "remington-proluxe-ac9140-hartork",
    ],
    badges: ["Torka + styla", "Mest torkkraft", "Volym"],
  },
  {
    slug: "sommarglow-utan-sol",
    title: "Sommarglow utan sol",
    shortTitle: "Sommarglow utan sol",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/sommarglow-utan-sol",
    description:
      "Hållbar självbruna som utvecklas mot flexibel, tvättbar glow.",
    productSlugs: ["st-tropez-self-tan-express", "elf-skin-bronzing-drops"],
    badges: ["Håller i dagar", "Tvättbar glow", "Sommar"],
  },
  {
    slug: "harolja-eller-varmeskydd",
    title: "Hårolja eller värmeskydd?",
    shortTitle: "Hårolja eller värmeskydd",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/harolja-eller-varmeskydd",
    description:
      "Glans och mjukhet för torrt hår mot skydd före värmestyling.",
    productSlugs: ["moroccanoil-harolja", "loreal-elvital-varmeskydd"],
    badges: ["Skyddar vid värme", "Glans & mjukhet", "Sommarvård"],
  },
  {
    slug: "varmluftsborste-eller-plattang",
    title: "Varmluftsborste eller plattång?",
    shortTitle: "Varmluftsborste eller plattång",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/varmluftsborste-eller-plattang",
    description:
      "Volym och böj i ett steg mot slätt, polerat och mer mångsidigt.",
    productSlugs: ["babyliss-as126e-varmluftsborste", "remington-s8540-plattang"],
    badges: ["Allt-i-ett", "Slätt & polerat", "Volym"],
  },
  {
    slug: "aftersun-eller-aloe-vera",
    title: "Aftersun eller aloe vera?",
    shortTitle: "Aftersun eller aloe vera",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/aftersun-eller-aloe-vera",
    description:
      "Mjukgörande after sun-lotion för kroppen mot en lätt, svalkande aloe vera-gel.",
    productSlugs: ["nivea-sun-after-sun-lotion", "naissance-aloe-vera-gel"],
    badges: ["Svalkar", "Återfuktar", "Sommar"],
  },
  {
    slug: "harinpackning-eller-harolja",
    title: "Hårinpackning eller hårolja?",
    shortTitle: "Hårinpackning eller hårolja",
    category: "skonhet",
    categoryLabel: "Skönhet",
    href: "/skonhet/harinpackning-eller-harolja",
    description:
      "Intensiv inpackning som sköljs ur mot glansgivande leave-in-olja.",
    productSlugs: ["loreal-absolut-repair", "moroccanoil-harolja"],
    badges: ["Djup kur", "Glans & mjukhet", "Sommarvård"],
  },
  {
    slug: "kettlebell-eller-hantlar",
    title: "Kettlebell eller hantlar?",
    shortTitle: "Kettlebell eller hantlar",
    category: "traning",
    categoryLabel: "Träning",
    href: "/traning/kettlebell-eller-hantlar",
    description:
      "Ett mångsidigt redskap för svingar mot ett komplett hantelset med ställning.",
    productSlugs: [
      "amazon-basics-gjutjarns-kettlebell",
      "songmics-hantelset-med-stallning",
    ],
    badges: ["Helkropp", "Set + ställning", "Hemmaträning"],
  },
  {
    slug: "foam-roller-eller-massagepistol",
    title: "Foam roller eller massagepistol?",
    shortTitle: "Foam roller eller massagepistol",
    category: "traning",
    categoryLabel: "Träning",
    href: "/traning/foam-roller-eller-massagepistol",
    description:
      "Enkel återhämtning för stora muskelgrupper mot riktad vibration på enskilda punkter.",
    productSlugs: ["bodymate-foam-roller-care", "beurer-mg-99-massagepistol"],
    badges: ["Återhämtning", "Billigast", "Riktad"],
  },
  {
    slug: "mini-projektor-eller-stjarnprojektor",
    title: "Mini-projektor eller stjärnprojektor?",
    shortTitle: "Mini- eller stjärnprojektor",
    category: "halsa",
    categoryLabel: "Hälsa",
    href: "/halsa/mini-projektor-eller-stjarnprojektor",
    description:
      "Bärbar bio för film på väggen mot en drömmig galaxhimmel på taket.",
    productSlugs: ["mini-projektor", "stjarnprojektor"],
    badges: ["Film på väggen", "Galaxhimmel", "Mys"],
  },
];

export function getComparisonsByCategory(category: ProductCategorySlug) {
  return comparisonEntries.filter((comparison) => comparison.category === category);
}

export function getRelatedComparisons(
  category: ProductCategorySlug,
  currentHref?: string,
) {
  return comparisonEntries
    .filter(
      (comparison) =>
        comparison.category === category && comparison.href !== currentHref,
    )
    .slice(0, 3);
}
