import { bdbkmgMassagepistolProduct, beurerMassagepistolProduct, type Product } from "@/lib/products";

export type MassagepistolPick = {
  product: Product;
  path: string;
  reviewSectionId: string;
  reviewFormId: string;
};

// Buying guidance lives in the decision registry; this only maps routes and reviews.
export const massagepistolPicks: MassagepistolPick[] = [
  { product: beurerMassagepistolProduct, path: "/halsa/massagepistol/beurer-mg-99", reviewSectionId: "beurer-recensioner", reviewFormId: "beurer-skriv-recension" },
  { product: bdbkmgMassagepistolProduct, path: "/halsa/massagepistol/kraftfull", reviewSectionId: "bdbkmg-recensioner", reviewFormId: "bdbkmg-skriv-recension" },
];
