import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { localizedPathnames, siteConfig } from "@/lib/site";

const intlMiddleware = createMiddleware(routing);

function getDefaultLocaleInternalPath(pathname: string) {
  for (const [internalPathname, localizedConfig] of Object.entries(localizedPathnames)) {
    if (typeof localizedConfig === "string") {
      if (pathname === localizedConfig) {
        return internalPathname;
      }

      if (localizedConfig.includes("[")) {
        const publicPrefix = localizedConfig.split("[")[0];
        const internalPrefix = internalPathname.split("[")[0];

        if (pathname.startsWith(publicPrefix)) {
          return `${internalPrefix}${pathname.slice(publicPrefix.length)}`;
        }
      }

      continue;
    }

    if (pathname === localizedConfig[siteConfig.defaultLocale]) {
      return internalPathname;
    }
  }

  return pathname;
}

export default function proxy(request: NextRequest) {
  if (
    request.nextUrl.pathname === `/${siteConfig.defaultLocale}` ||
    request.nextUrl.pathname.startsWith(`/${siteConfig.defaultLocale}/`)
  ) {
    return NextResponse.next();
  }

  const originalPathname = request.nextUrl.pathname;
  const originalSearch = request.nextUrl.search;
  const response = intlMiddleware(request);
  const location = response.headers.get("location");

  if (response.status === 307 && location) {
    const redirectUrl = new URL(location, request.url);

    if (
      redirectUrl.pathname === originalPathname &&
      redirectUrl.search === originalSearch
    ) {
      const internalUrl = request.nextUrl.clone();
      const internalPath = getDefaultLocaleInternalPath(originalPathname);
      internalUrl.pathname = `/${siteConfig.defaultLocale}${internalPath === "/" ? "" : internalPath}`;

      const rewriteResponse = NextResponse.rewrite(internalUrl);
      const setCookie = response.headers.get("set-cookie");
      const link = response.headers.get("link");

      if (setCookie) {
        rewriteResponse.headers.set("set-cookie", setCookie);
      }

      if (link) {
        rewriteResponse.headers.set("link", link);
      }

      return rewriteResponse;
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"
  ]
};
