import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "sv"],
  defaultLocale: "sv",
  localePrefix: "as-needed",
  localeDetection: false
});

export const config = {
  matcher: ["/", "/(sv|en)/:path*"]
};
