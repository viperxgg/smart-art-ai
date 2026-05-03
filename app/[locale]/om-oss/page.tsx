import { RestaurantHomePage } from "@/components/restaurant/RestaurantHomePage";
import { buildMetadata } from "@/lib/seo";
import type { AppLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return buildMetadata({
    locale,
    pathname: "/om-oss",
    title:
      locale === "sv"
        ? "Digital meny för restauranger | Nord Smart Menu"
        : "Digital Menu for Restaurants | Nord Smart Menu",
    description:
      locale === "sv"
        ? "Modern QR-meny för restauranger med gästvy, adminpanel, köksvy, ingredienser, kalorier och tydligare serviceflöde."
        : "Modern QR menu for restaurants with guest view, admin panel, kitchen view, ingredients, calories, and a clearer service workflow.",
    keywords:
      locale === "sv"
        ? ["Smart Art Ai", "Nord Smart Menu", "AI SaaS Sverige", "digital restaurangdrift"]
        : ["Smart Art Ai", "Nord Smart Menu", "AI SaaS Sweden", "digital restaurant operations"],
  });
}

export default async function OmOssPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return <RestaurantHomePage locale={locale} />;
}
