import { JsonLd } from "@/components/JsonLd";
import {
  buildProductSchema,
  type ProductNodeInput,
} from "@/lib/product-schema";

/**
 * Emits a Product JSON-LD block, or nothing when the product has no
 * review basis (editorial score or approved on-site reviews). Emitting
 * nothing is deliberate: a Product without offers/review/aggregateRating
 * is rejected by Google as an invalid product snippet.
 */
export function ProductJsonLd(props: ProductNodeInput) {
  const data = buildProductSchema(props);

  return data ? <JsonLd data={data} /> : null;
}
