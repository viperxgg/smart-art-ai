"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

interface LocaleShellProps {
  children: ReactNode;
}

export default function LocaleShell({ children }: LocaleShellProps) {
  const pathname = usePathname();
  const isDemoRoute = pathname.includes("/demo/");
  const showMarketingShell = !isDemoRoute;

  return (
    <>
      {showMarketingShell ? <Navbar /> : null}
      {children}
      {showMarketingShell ? <Footer /> : null}
    </>
  );
}
