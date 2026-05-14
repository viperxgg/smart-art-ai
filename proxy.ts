import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { localizedPathnames, siteConfig } from "@/lib/site";

const intlMiddleware = createMiddleware(routing);
const CANONICAL_HOST = "www.smartartai.se";
const APEX_HOST = "smartartai.se";

function getForwardedProtocol(request: NextRequest) {
  const forwardedProtocol = request.headers.get("x-forwarded-proto");

  if (forwardedProtocol) {
    return forwardedProtocol.split(",")[0]?.trim().toLowerCase();
  }

  return request.nextUrl.protocol.replace(":", "").toLowerCase();
}

function getDefaultLocaleInternalPath(pathname: string) {
  if (pathname === "/nord-smart-menu") {
    return pathname;
  }

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
  const hostname = request.nextUrl.hostname.toLowerCase();
  const protocol = getForwardedProtocol(request);

  if (hostname === APEX_HOST || (hostname === CANONICAL_HOST && protocol === "http")) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https:";
    redirectUrl.hostname = CANONICAL_HOST;
    redirectUrl.port = "";

    return NextResponse.redirect(redirectUrl, 301);
  }

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
      internalUrl.searchParams.set("__localeRewrite", "1");

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
