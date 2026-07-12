"use client";

import type { ReactNode } from "react";

import type { ElinFocus } from "@/components/elin/ElinChat";
import { ElinLauncherAvatar } from "@/components/elin/ElinLauncherAvatar";
import { useElin } from "@/components/elin/ElinProvider";

type ElinCtaSize = "sm" | "md";

// Kept as a static lookup (not string interpolation) so Tailwind's compiler
// sees every literal class name written out below, regardless of which
// branch runs at render time.
const avatarSizeClasses: Record<ElinCtaSize, string> = {
  sm: "size-7",
  md: "size-9",
};

type ElinCtaButtonProps = {
  /**
   * Label content — callers keep full control of the text (and any
   * responsive spans, e.g. a short label on mobile vs. the full label from
   * `sm:`/`lg:` up) so each placement — compact header pill, bolder hero
   * button, product-page CTA — can match its surrounding copy exactly.
   */
  children: ReactNode;
  /** Pre-fills the chat around one product, same as ElinProvider's openElin. */
  focus?: ElinFocus;
  /** Pre-fills the composer with a starter question. */
  prompt?: string;
  /** Mini-avatar size — "sm" for header/inline pills, "md" for a bolder hero CTA. */
  size?: ElinCtaSize;
  className?: string;
};

/**
 * The one shared "Fråga Elin" call-to-action. Renders Elin's mini animated
 * avatar (the same character as the floating launcher in ElinProvider.tsx —
 * never a generic chat-bubble icon) plus a text label, and always opens the
 * same chat drawer via `openElin`. Every inline "Fråga Elin" entry point on
 * the site — header, hero, product pages, search empty state — should
 * render through this component instead of a bespoke icon + link, so Elin
 * only ever has one "face" sitewide.
 *
 * This is a button, not a link: it never navigates (not even to the
 * dedicated /fraga-elin page) — it always opens the same in-page drawer so
 * the visitor keeps their place on the current page.
 */
export function ElinCtaButton({
  children,
  focus,
  prompt,
  size = "sm",
  className = "",
}: ElinCtaButtonProps) {
  const { openElin } = useElin();

  return (
    <button
      type="button"
      onClick={() => openElin(focus, prompt)}
      className={`elin-cta ${className}`}
    >
      <span className={`elin-cta-avatar-clip ${avatarSizeClasses[size]}`} aria-hidden="true">
        <ElinLauncherAvatar motion="hover" />
      </span>
      {children}
    </button>
  );
}
