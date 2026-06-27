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
        "tangle-teezer-original",
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
        "maui-curl-smoothie",
        "cantu-leave-in-conditioner",
        "inkey-scalp-scrub",
        "mielle-rosemary-oil",
        "olaplex-no3-treatment",
        "olaplex-no5-conditioner",
        "olaplex-no4-shampoo",
        "silkesorngott-mullbarssilke",
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
        "neutrogena-hand-cream",
        "biotherm-lait-corporel",
        "olay-regenerist-night-cream",
        "dior-lip-glow-oil",
        "cosrx-acne-pimple-patch",
        "nature-spell-face-oil",
        "mario-badescu-facial-spray",
        "inkey-peptide-moisturizer",
        "anua-azelaic-acid-serum",
        "beauty-of-joseon-propolis-serum",
        "cosrx-centella-ampoule",
        "beauty-of-joseon-centella-mask",
        "some-by-mi-matcha-clay-mask",
        "divain-caffeine-eye-serum",
        "cetaphil-moisturizing-cream",
        "cosrx-aha-bha-toner",
        "bioderma-sensibio-h2o",
        "some-by-mi-cleansing-oil",
        "cetaphil-gentle-cleanser",
        "paulas-choice-2-bha",
        "purest-aha-bha-peeling",
        "celdyque-bakuchiol-serum",
        "gua-sha-rosenkvarts",
        "laneige-lip-sleeping-mask",
        "la-roche-posay-cicaplast-b5",
        "cerave-hydrating-cleanser",
        "la-roche-posay-vitamin-c10-serum",
        "cosrx-snail-mucin-essence",
        "minimalist-hyaluronsyra-serum",
        "kanzy-jojobaolja",
        "inkey-niacinamide-serum",
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
      title: "Kondition",
      productSlugs: [
        "portentum-hopprep",],
    },
    {
      title: "Träningsband",
      productSlugs: ["traningsband-4-nivaer", "jakkofoxx-loopband"],
    },
    {
      title: "Vikter",
      productSlugs: [
        "eric-flag-viktvast",
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
      title: "Fläkt",
      productSlugs: [
        "dreo-cruiser-pro-tornflakt",
        "honeywell-turboforce-ht900e",
        "midea-fz10-tornflakt",
      ],
    },
    {
      title: "Smart hem & livsstil",
      productSlugs: [
        "levoit-core-200s-luftrenare",
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
