import { JsonLd } from "@/components/JsonLd";
import { buildWebPageSchema, type WebPageSchemaInput } from "@/lib/site-schema";

/**
 * WebPage JSON-LD for a content page. Rendered next to the page's other
 * JSON-LD blocks; dateModified comes from the same sitemap lookup as the
 * visible EditorialMeta line.
 */
export function WebPageJsonLd(props: WebPageSchemaInput) {
  return <JsonLd data={buildWebPageSchema(props)} />;
}
