import type { Product } from "@/lib/products";

// Observations of these exact local assets, not image licences or model approvals.
const imageNotes: Record<string, { image: string; note: string }> = {
  "kobo-clara-bw": {
    image: "/products/kobo-clara-bw/kobo-clara-bw-thumbnail.webp",
    note: "Miljöbild med läsplatta. Bilden visar inte en identifierbar Clara BW och är inte dokumentation av vårt eget produkttest.",
  },
  "kindle-paperwhite": {
    image: "/products/kindle-paperwhite/kindle-paperwhite-thumbnail.webp",
    note: "Reklambild för Paperwhite. Bildens hastighetspåstående är inte vårt testresultat; generation och lagringsstorlek kan inte fastställas från bilden.",
  },
  "cerave-hydrating-cleanser": {
    image: "/products/cerave-hydrating-cleanser/cerave-thumbnail.webp",
    note: "Bilden visar 236 ml med engelsk och fransk märkning. Den bekräftar inte att innehållet motsvarar den svenska formula vi beskriver.",
  },
  "cetaphil-gentle-cleanser": {
    image: "/products/cetaphil-cleanser/cetaphil-thumbnail.webp",
    note: "Bilden visar 460 ml med tysk märkning. Matchningen mot den svenska formulan och butikens aktuella förpackning återstår.",
  },
  "songmics-hantelset-med-stallning": {
    image: "/products/dumbbells/songmics-dumbbell-set-thumbnail.webp",
    note: "Bilden visar hantlar märkta 1, 3 och 5 kg. Kontrollera att dessa vikter och ställningen ingår i erbjudandet du väljer.",
  },
  "elvire-miniband": {
    image: "/products/elvire-miniband/miniband-thumbnail.webp",
    note: "Bilden visar tre korta tygband. Färgerna bevisar inte motståndet; kontrollera mått och motstånd för det aktuella setet.",
  },
};

export function getProductImageNote(product: Pick<Product, "slug" | "image">) {
  const record = imageNotes[product.slug];
  return record?.image === product.image ? record.note : undefined;
}
