import { getProductBySlug, type Product, type ProductCategorySlug } from "@/lib/products";

export type CategoryProductGroup = {
  title: string;
  productSlugs: string[];
};

export const categoryProductGroups = {
  skonhet: [
    {
      title: "Hårstyling (verktyg)",
      productSlugs: [
        "remington-s8540-plattang",
        "remington-mini-s2880-plattang",
        "babyliss-c325e-locktang",
        "tymo-curlpro-locktang",
        "babyliss-as126e-varmluftsborste",
        "remington-as7100-varmluftsborste",
        "remington-proluxe-ac9140-hartork",
        "beurer-hc-25-hartork",
      ],
    },
    {
      title: "Hårvård",
      productSlugs: [
        "moroccanoil-harolja",
        "loreal-absolut-repair",
        "moroccanoil-torrschampo",
        "loreal-elvital-varmeskydd",
      ],
    },
    {
      title: "Sol & glow",
      productSlugs: [
        "st-tropez-self-tan-express",
        "elf-skin-bronzing-drops",
        "nivea-sun-after-sun-lotion",
        "naissance-aloe-vera-gel",
      ],
    },
    {
      title: "Hudvård",
      productSlugs: [
        "minimalist-hyaluronsyra-serum",
        "kanzy-jojobaolja",
      ],
    },
    {
      title: "Hårborttagning",
      productSlugs: ["panasonic-es-ey30-epilator", "braun-silk-epil-9"],
    },
    {
      title: "Fötter",
      productSlugs: ["vxdoirk-elektrisk-fotfil"],
    },
  ],
  traning: [
    {
      title: "Träningsband",
      productSlugs: ["traningsband-4-nivaer", "jakkofoxx-loopband"],
    },
    {
      title: "Vikter",
      productSlugs: [
        "amazon-basics-gjutjarns-kettlebell",
        "proiron-mjuk-kettlebell",
        "proiron-neoprenhantlar",
        "songmics-hantelset-med-stallning",
      ],
    },
    {
      title: "Yoga",
      productSlugs: ["prosourcefit-extra-tjock-yogamatta", "yogati-tpe-yogamatta"],
    },
    {
      title: "Återhämtning",
      productSlugs: ["bodymate-foam-roller-care", "elvire-deep-tissue-massageset"],
    },
  ],
  halsa: [
    {
      title: "Återhämtning",
      productSlugs: ["beurer-mg-99-massagepistol", "bdbkmg-massagepistol"],
    },
    {
      title: "Smart hem & livsstil",
      productSlugs: [
        "kobo-clara-bw",
        "salking-aromadiffuser",
        "solnedgangslampa",
        "mini-projektor",
        "stjarnprojektor",
      ],
    },
  ],
} satisfies Record<ProductCategorySlug, CategoryProductGroup[]>;

export function getCategoryProductGroups(categorySlug: ProductCategorySlug) {
  return categoryProductGroups[categorySlug].map((group) => ({
    ...group,
    products: group.productSlugs
      .map((slug) => getProductBySlug(slug))
      .filter((product): product is Product => Boolean(product)),
  }));
}
