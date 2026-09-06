// 2026-09-06: new "bäst i test 2026" category page (Fas 1, A2). Reads
// lib/products.ts and lib/wave-products.ts (SHARED_LIB_MODULES), so this dated
// comment is what moves the route's sitemap date.
import { BastITestPage } from "@/components/BastITestPage";
import { harinpackning } from "@/lib/bast-i-test/harinpackning";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const moroccanoilMask = harinpackning.picks[0].product;

export const metadata = createSeoMetadata({
  title: harinpackning.metaTitle,
  description: harinpackning.metaDescription,
  url: `${siteConfig.url}${harinpackning.path}`,
  image: {
    url: `${siteConfig.url}${moroccanoilMask.image}`,
    width: 900,
    height: 900,
    alt: moroccanoilMask.imageAlt,
  },
});

export default function HarinpackningPage() {
  return <BastITestPage data={harinpackning} />;
}
