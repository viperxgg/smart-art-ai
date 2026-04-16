import createMiddleware from "next-intl/middleware";
import { locales } from "@/i18n/request";

export default createMiddleware({
  locales,
  defaultLocale: "sv",
  localePrefix: "as-needed",
  localeDetection: false
});

export const config = {
  // Match all pathnames except for
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|explainer.mp4).*)"]
};
