import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const locales = [...routing.locales];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    locale = "sv";
  }
  
  try {
    const messages = (await (locale === "en" 
      ? import("@/messages/en.json") 
      : import("@/messages/sv.json")
    )).default;
    
    return { locale, messages };
  } catch (error) {
    console.error("Failed to load messages for locale:", locale, error);
    const fallbackMessages = (await import("@/messages/sv.json")).default;
    return { locale: "sv", messages: fallbackMessages };
  }
});
