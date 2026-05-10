"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactFormModal from "@/components/ui/ContactFormModal";

interface PlanOrderButtonProps {
  locale: "sv" | "en";
  planName: string;
  planLabel: string;
}

const copy = {
  sv: {
    label: "Be om prisförslag",
    servicePrefix: "Prisförfrågan för Nord Smart Menu",
    intro:
      "Berätta kort om restaurangen och menyn, så återkommer vi med ett tydligt förslag.",
  },
  en: {
    label: "Request proposal",
    servicePrefix: "Nord Smart Menu proposal request",
    intro:
      "Tell us briefly about the restaurant and menu, and we will follow up with a clear proposal.",
  },
} as const;

export function PlanOrderButton({ locale, planName, planLabel }: PlanOrderButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = copy[locale];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="sai-button sai-button-primary mt-8 w-full"
      >
        <span>{t.label}</span>
        <ArrowRight className="h-4 w-4" />
      </button>

      <ContactFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        locale={locale}
        serviceType={`${t.servicePrefix}: ${planName} - ${planLabel}`}
        sourcePage="/"
        ctaContext={`pricing-${planName.toLowerCase()}`}
        introMessage={t.intro}
      />
    </>
  );
}
