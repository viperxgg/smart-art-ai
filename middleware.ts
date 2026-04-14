import createMiddleware from "next-intl/middleware";
import { locales } from "@/i18n/request";

export default createMiddleware({
  locales,
  defaultLocale: "sv",
  localePrefix: "as-needed",
  localeDetection: false
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(sv|en)/:path*"]
};
