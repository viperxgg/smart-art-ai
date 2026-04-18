import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "sv"];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !["en", "sv"].includes(locale)) {
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
