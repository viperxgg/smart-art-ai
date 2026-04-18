import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "sv"],
  defaultLocale: "sv",
  localePrefix: "as-needed",
  localeDetection: false
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"
  ]
};
