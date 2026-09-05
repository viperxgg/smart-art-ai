// 2026-09-05: rebuilt as the "bäst i test 2026" category page (Fas 1, A1). Reads
// lib/products.ts and lib/wave-products.ts (SHARED_LIB_MODULES), so this dated
// comment is what moves the route's sitemap date.
import { BastITestPage } from "@/components/BastITestPage";
import { tystFlaktSovrum } from "@/lib/bast-i-test/tyst-flakt-sovrum";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const dreo = tystFlaktSovrum.picks[0].product;

export const metadata = createSeoMetadata({
  title: tystFlaktSovrum.metaTitle,
  description: tystFlaktSovrum.metaDescription,
  url: `${siteConfig.url}${tystFlaktSovrum.path}`,
  image: {
    url: `${siteConfig.url}${dreo.image}`,
    width: 1024,
    height: 1024,
    alt: dreo.imageAlt,
  },
});

export default function TystFlaktSovrumPage() {
  return <BastITestPage data={tystFlaktSovrum} />;
}
