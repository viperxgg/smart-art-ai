"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import ContactFormModal from "@/components/ui/ContactFormModal";
import { resolveMarketingHref } from "@/lib/site";

interface CtaButtonsProps {
  locale: "sv" | "en";
  primaryLabel: string;
  primaryHref?: string;
  primaryAction?: "link" | "modal";
  primaryOpenInNewTab?: boolean;
  secondaryLabel: string;
  secondaryHref?: string;
  secondaryAction?: "link" | "modal";
  secondaryOpenInNewTab?: boolean;
  sourcePage: string;
  ctaContext: string;
  serviceType?: string;
  className?: string;
}

export function CtaButtons({
  locale,
  primaryLabel,
  primaryHref,
  primaryAction = "link",
  primaryOpenInNewTab = true,
  secondaryLabel,
  secondaryHref,
  secondaryAction = "modal",
  secondaryOpenInNewTab = true,
  sourcePage,
  ctaContext,
  serviceType = "Restaurant Demo Request",
  className = "",
}: CtaButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const renderAction = ({
    label,
    action,
    href,
    variant,
    openInNewTab,
  }: {
    label: string;
    action: "link" | "modal";
    href?: string;
    variant: "solid" | "outline";
    openInNewTab: boolean;
  }) => {
    const isDemoRequestLabel = ["boka demo", "book a demo"].includes(label.trim().toLowerCase());
    const resolvedAction = isDemoRequestLabel ? "modal" : action;
    const buttonClassName =
      variant === "solid"
        ? "sai-button sai-button-primary"
        : "sai-button sai-button-secondary";

    if (resolvedAction === "modal") {
      return (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={buttonClassName}
        >
          <span>{label}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      );
    }

    const resolvedHref = resolveMarketingHref(href ?? "/", locale);
    const isHashHref = resolvedHref.startsWith("#");
    const isExternalHref = resolvedHref.startsWith("http");
    const LinkIcon = isExternalHref ? PlayCircle : ArrowRight;

    if (isHashHref) {
      return (
        <button
          type="button"
          onClick={() => {
            const targetId = resolvedHref.slice(1);
            const targetElement = document.getElementById(targetId);

            targetElement?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className={buttonClassName}
        >
          <LinkIcon className="h-4 w-4" />
          <span>{label}</span>
        </button>
      );
    }

    return isExternalHref ? (
      <a
        href={resolvedHref}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noreferrer" : undefined}
        className={buttonClassName}
      >
        <LinkIcon className="h-4 w-4" />
        <span>{label}</span>
      </a>
    ) : (
      <Link href={resolvedHref} className={buttonClassName}>
        <LinkIcon className="h-4 w-4" />
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <>
      <div className={`flex flex-wrap gap-4 ${className}`.trim()}>
        {renderAction({
          label: primaryLabel,
          action: primaryAction,
          href: primaryHref,
          variant: "solid",
          openInNewTab: primaryOpenInNewTab,
        })}
        {renderAction({
          label: secondaryLabel,
          action: secondaryAction,
          href: secondaryHref,
          variant: "outline",
          openInNewTab: secondaryOpenInNewTab,
        })}
      </div>

      <ContactFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        locale={locale}
        serviceType={serviceType}
        sourcePage={sourcePage}
        ctaContext={ctaContext}
      />
    </>
  );
}
