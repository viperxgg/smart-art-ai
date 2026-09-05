import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { VisualExperienceV2 } from "@/components/VisualExperienceV2";

export const metadata: Metadata = {
  title: "Visuell prototyp V2",
  description: "Lokal visuell prototyp för Elins val. Inte publicerad.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VisualExperienceV2PreviewPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return <VisualExperienceV2 preview />;
}
