import RestaurantRepositionHome from "@/components/restaurant-home/RestaurantRepositionHome";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, getServiceSchema } from "@/lib/seo";
import type { AppLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return buildMetadata({
    locale,
    pathname: "/",
    title:
      locale === "sv"
        ? "Nord Smart Menu | Digitala menyer & menydesign för restauranger i Sverige"
        : "Nord Smart Menu | Digital menus and menu design for restaurants in Sweden",
    description:
      locale === "sv"
        ? "QR-menyer, digitala menyupplevelser och tryckklara menydesigner för restauranger, caféer, barer och hotell i Sverige. Engångsbetalning utan månadsabonnemang för kärnleveransen."
        : "QR menus, digital menu experiences, and print-ready menu design for restaurants, cafés, bars, and hotels in Sweden.",
    keywords: [
      "Nord Smart Menu",
      "digital meny restaurang",
      "QR meny Sverige",
      "menydesign restaurang",
      "tryckklar meny",
    ],
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <JsonLd
        data={getServiceSchema({
          locale,
          name: "Nord Smart Menu",
          description:
            locale === "sv"
              ? "Premium QR-menyer, digitala beställningsflöden och tryckklar menydesign för restauranger."
              : "Premium QR menus, digital ordering flows, and print-ready menu design for restaurants.",
          serviceType: locale === "sv" ? "Digital meny och menydesign" : "Digital menu and menu design",
          pathname: "/",
        })}
      />
      <RestaurantRepositionHome locale={locale} />
    </>
  );
}
