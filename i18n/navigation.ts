import { createNavigation } from "next-intl/navigation";
import { routing } from "@/i18n/routing";

export const { usePathname, useRouter, getPathname, redirect, permanentRedirect } =
  createNavigation(routing);
