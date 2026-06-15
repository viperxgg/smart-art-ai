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
