import Image from "next/image";

type ElinLauncherAvatarProps = {
  /**
   * "idle" (default): gentle whole-avatar breathing bob, forever. Reserved
   * for the single floating launcher button (ElinProvider.tsx) — with only
   * one instance ever on screen, a constant idle motion reads as "alive"
   * rather than busy.
   *
   * "hover": no idle loop at all. Used by ElinCtaButton, which can appear
   * several times on one page (header, hero, product cards, search empty
   * state) — an always-animating avatar in every instance would be
   * distracting. The pop-on-hover/focus scale is handled by the parent's
   * `.elin-cta-avatar-clip` CSS (see app/globals.css), not by this
   * component.
   */
  motion?: "idle" | "hover";
};

/**
 * Elin's avatar — Direction A (flat-vector illustration), the single source
 * of truth for "Elin's face" wherever the chat launcher/CTA renders it: the
 * floating "Fråga Elin" launcher (ElinProvider.tsx) and every inline
 * "Fråga Elin" CTA (ElinCtaButton.tsx). Same asset backs the site header
 * logo, the mobile header, the home hero eyebrow tag, the chat window's own
 * avatars, and the "Utvald av Elin" byline (see components/Header.tsx,
 * components/elin/ElinHomeHero.tsx, components/elin/ElinChat.tsx,
 * components/ElinByline.tsx) — one face, one file, everywhere.
 *
 * Purely decorative (aria-hidden + empty alt): the surrounding <button>
 * always supplies its own accessible name (aria-label="Fråga Elin" on the
 * floating launcher, or visible "Fråga Elin" text on every CTA), so this
 * avatar is never independently announced by assistive tech.
 *
 * Previously an inline hand-drawn SVG with a separately-animated waving arm;
 * that per-limb "wave" isn't representable with the new flat raster asset
 * (no separated arm layer), so only the whole-avatar idle bob survives here.
 * See app/globals.css `.elin-avatar-bob` / `@keyframes elin-launcher-bob`.
 */
export function ElinLauncherAvatar({ motion = "idle" }: ElinLauncherAvatarProps) {
  const bobClass = motion === "idle" ? "elin-avatar-bob" : "";

  return (
    <span aria-hidden="true" className={`relative block h-full w-full ${bobClass}`}>
      <Image
        src="/elin/elin-avatar.webp"
        alt=""
        fill
        sizes="72px"
        className="object-cover"
      />
    </span>
  );
}
