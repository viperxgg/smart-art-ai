import type { Product } from "@/lib/products";

// Shared shape of a "bäst i test" category page (Fas 1). The data module of
// each page owns every string that reaches the screen; components/BastITestPage.tsx
// owns the layout. Products are referenced by import — never copied — so a page
// can never drift from lib/products.ts / lib/wave-products.ts.

export type BastITestBadge = "Bäst i test" | "Bästa budget" | `Bäst för ${string}`;

export type BastITestPick = {
  /** The product record, imported from the data layer. */
  product: Product;
  /** The product's own slug, used for the Elins poäng lookup. */
  slug: string;
  /** Ranked picks carry a badge; compared-but-unranked products pass null. */
  badge?: BastITestBadge | null;
  /** One-line verdict shown on the winner card and above the product block. */
  verdict: string;
  pros: string[];
  cons: string[];
  /** "Vem passar X för?" — 2–4 sentences. */
  whoFor: string;
  /** Href of the product's own review page. */
  productHref: string;
  /** Two existing comparison pages this product appears on. */
  comparisonHrefs: [string, string];
  /** Optional honest warning rendered inside the product block. */
  caution?: string;
};

export type BastITestCriterion = {
  name: string;
  /** Percent. The criteria of a page must sum to 100. */
  weight: number;
  note: string;
};

export type BastITestTableColumn = {
  name: string;
  /** Product page the column header links to. */
  href: string;
};

export type BastITestTableRow = {
  label: string;
  /** One cell per column, same order. A fact we cannot source stays "—". */
  cells: string[];
};

export type BastITestTable = {
  /** Header of the first (row-label) column. */
  rowHeader: string;
  columns: BastITestTableColumn[];
  rows: BastITestTableRow[];
};

export type BastITestGuideSection = {
  heading: string;
  body: string;
};

export type BastITestFaqItem = {
  question: string;
  answer: string;
};

/** The shape RelatedLinks already requires. */
export type BastITestRelatedLink = {
  href: string;
  label: string;
  text: string;
};

export type BastITestPage = {
  slug: string;
  /** Canonical site-relative path of the page. */
  path: string;
  /** Category label shown as the eyebrow above the H1. */
  category: string;
  /** Short page name used in breadcrumbs and the ItemList schema. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** The ranked products, in rank order. */
  picks: BastITestPick[];
  /** Compared for contrast, rendered after the ranked picks and never as a pick. */
  contrast?: BastITestPick;
  /** The honest "skip this one" paragraph and where it points. */
  skip?: { text: string; href: string };
  table: BastITestTable;
  criteria: BastITestCriterion[];
  guide: BastITestGuideSection[];
  faq: BastITestFaqItem[];
  related: BastITestRelatedLink[];
};
