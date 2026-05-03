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
    label: "Beställ nu",
    servicePrefix: "Beställning av Nord App",
    intro:
      "Vårt team är redo att hjälpa er. Fyll i uppgifterna så kontaktar vi er via e-post så snart som möjligt.",
  },
  en: {
    label: "Order now",
    servicePrefix: "Nord App order request",
    intro:
      "Our team is ready to help. Share your details and we will contact you by email as soon as possible.",
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
