const exactGonePaths = new Set([
  "/nord-smart-menu",
  "/smart-menu",
  "/digital-meny-restaurang",
  "/qr-meny-restaurang",
  "/restaurang-bestallningssystem",
  "/digital-meny-sverige",
  "/blog",
  "/blog/stadsync-ai-security-architecture",
  "/blog/smart-menu-alcohol-compliance-sweden",
  "/blog/best-digital-menu-sweden",
  "/blog/restaurant-ordering-system-reduce-staff-pressure",
  "/blog/why-restaurants-switch-to-qr-menus",
  "/blog/digital-menu-vs-paper-menu",
  "/blog/qr-menus-help-restaurants-serve-faster",
  "/blog/scandinavian-digital-menu",
  "/blog/ai-automation-sweden",
  "/blog/future-of-digital-work",
  "/stadsync-ai",
  "/stadsync-ai/rut-automation",
  "/stadsync-ai/stadforetag-system",
  "/stadsync-ai/ai-oversattning-stadpersonal",
  "/stadsync-ai/gdpr-rut-stadforetag",
  "/stadsync-ai/rut-xml-skatteverket",
  "/stadsync-ai/affarssystem-stadforetag",
  "/stadsync-ai/schemalaggning-stadforetag",
  "/stadsync-ai/tidrapportering-stadforetag",
  "/stadsync-ai/personnummer-gdpr-rut",
  "/stadsync-ai/jamfor-system-stadforetag",
  "/stadsync-ai/priser",
  "/demo/admin",
  "/demo/kitchen",
  "/demo/menu/nordic-bistro",
  "/preview/elin-simple",
  "/product/ninja-blast-portable-blender",
  "/product/ninja-blast-portable-blender/ugc",
  "/review/ninja-blast-portable-blender",
  "/en/nord-smart-menu",
  "/en/smart-menu",
  "/en/digital-menu-restaurants",
  "/en/qr-menu-restaurant",
  "/en/restaurant-ordering-system",
  "/en/digital-menu-sweden",
  "/en/blog",
  "/en/blog/stadsync-ai-security-architecture",
  "/en/blog/smart-menu-alcohol-compliance-sweden",
  "/en/blog/best-digital-menu-sweden",
  "/en/blog/restaurant-ordering-system-reduce-staff-pressure",
  "/en/blog/why-restaurants-switch-to-qr-menus",
  "/en/blog/digital-menu-vs-paper-menu",
  "/en/blog/qr-menus-help-restaurants-serve-faster",
  "/en/blog/scandinavian-digital-menu",
  "/en/blog/ai-automation-sweden",
  "/en/blog/future-of-digital-work",
  "/en/stadsync-ai",
  "/en/stadsync-ai/rut-automation",
  "/en/stadsync-ai/stadforetag-system",
  "/en/stadsync-ai/ai-oversattning-stadpersonal",
  "/en/stadsync-ai/gdpr-rut-stadforetag",
  "/en/stadsync-ai/rut-xml-skatteverket",
  "/en/stadsync-ai/affarssystem-stadforetag",
  "/en/stadsync-ai/schemalaggning-stadforetag",
  "/en/stadsync-ai/tidrapportering-stadforetag",
  "/en/stadsync-ai/personnummer-gdpr-rut",
  "/en/stadsync-ai/jamfor-system-stadforetag",
  "/en/stadsync-ai/priser",
  "/en/demo/admin",
  "/en/demo/kitchen",
  "/en/demo/menu/nordic-bistro",
]);

const gonePrefixes = [
  "/fynd/",
  "/stadsync-ai/",
  "/demo/menu/",
  "/en/stadsync-ai/",
  "/en/demo/menu/",
];

export function isGonePath(pathname: string) {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (normalized === "/fynd" || exactGonePaths.has(normalized)) {
    return true;
  }

  return gonePrefixes.some((prefix) => pathname.startsWith(prefix));
}

export const goneApiPaths = new Set([
  "agent-x",
  "contact",
  "menu-upload",
]);
