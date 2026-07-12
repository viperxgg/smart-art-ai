/**
 * Elin's animated launcher avatar — the character chip shown inside the
 * floating "Fråga Elin" launcher button (see ElinProvider.tsx).
 *
 * Purely presentational and static (no props, no state): the actual motion
 * (idle bob, periodic wave, hover wave, entrance, pulse rings) is wired via
 * CSS classes/keyframes in app/globals.css, targeting the `elin-avatar-bob`
 * and `elin-avatar-rock` groups below. Keeping this markup in its own
 * component keeps ElinProvider.tsx focused on state/behavior.
 *
 * Color note: only the backdrop halo and the clothing (knit top, garment
 * shade, collar) reference the shared brand tokens (`var(--color-*)`) so
 * they track the site's palette. Skin, hair and the arm stay fixed hex —
 * Elin's actual appearance shouldn't shift if the brand palette ever does.
 */
export function ElinLauncherAvatar() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="block h-full w-full">
      <defs>
        <linearGradient id="elinHaloGrad" x1="6%" y1="4%" x2="96%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--color-wine)" }} />
          <stop offset="48%" style={{ stopColor: "var(--color-mid)" }} />
          <stop offset="100%" style={{ stopColor: "var(--color-violet)" }} />
        </linearGradient>
        <clipPath id="elinCircleClip">
          <circle cx="100" cy="100" r="92" />
        </clipPath>
      </defs>

      {/* backdrop: signature gradient, rim in bg tone so the chip pops on any page background */}
      <circle cx="100" cy="100" r="92" fill="url(#elinHaloGrad)" style={{ stroke: "var(--color-bg)" }} strokeWidth="4" />

      <g clipPath="url(#elinCircleClip)">
        {/* idle bob: whole-character breathing translateY (see .elin-avatar-bob) */}
        <g className="elin-avatar-bob">
          {/* torso / knit top */}
          <path
            d="M48,206 L48,150 Q48,133 61,123 Q80,109 100,109 Q120,109 139,123 Q152,133 152,150 L152,206 Z"
            style={{ fill: "var(--color-wine)" }}
          />
          {/* garment shade, right side */}
          <path
            d="M124,124 Q141,136 144,158 L152,158 L152,206 L130,206 Z"
            style={{ fill: "var(--color-ink)" }}
            opacity="0.32"
          />
          {/* collar V */}
          <path
            d="M87,113 L100,133 L113,113"
            fill="none"
            style={{ stroke: "var(--color-rose-soft)" }}
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* periodic wave: arm + head rotate together, pivoting at the base of the neck (see .elin-avatar-rock) */}
          <g className="elin-avatar-rock" style={{ transformOrigin: "100px 132px" }}>
            {/* waving arm — raised on viewer-left, away from the screen edge the launcher sits against */}
            <g>
              <path
                d="M66,132 Q47,124 41,101 Q38,85 51,79 Q65,74 69,89 Q72,101 79,119 Q82,127 74,133 Q70,135 66,132 Z"
                fill="#f3c9a4"
              />
              <path d="M51,79 Q65,74 69,89 Q71,97 74,104" fill="none" stroke="#e0ac7d" strokeWidth="1.4" opacity="0.55" />
            </g>

            {/* head */}
            <g>
              {/* hair back / bob silhouette */}
              <path
                d="M100,40 C70,40 52,66 52,100 C52,128 58,146 66,163 L75,163 C69,141 66,120 68,98 C70,74 82,55 100,55 C118,55 130,74 132,98 C134,120 131,141 125,163 L134,163 C142,146 148,128 148,100 C148,66 130,40 100,40 Z"
                fill="#e3b36a"
              />
              {/* face */}
              <ellipse cx="100" cy="99" rx="29" ry="32" fill="#f3c9a4" />
              {/* hairline / soft fringe over forehead */}
              <path d="M73,85 Q79,58 100,56 Q121,58 127,85 Q113,70 100,70 Q87,70 73,85 Z" fill="#e3b36a" />
              <path d="M100,56 Q99,64 100,70" fill="none" stroke="#c9924a" strokeWidth="1.2" opacity="0.6" />
              {/* eyebrows */}
              <path d="M82,91 Q88,86 95,90" fill="none" stroke="#ad7c46" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M105,90 Q112,86 118,91" fill="none" stroke="#ad7c46" strokeWidth="2.6" strokeLinecap="round" />
              {/* eyes */}
              <ellipse cx="87.5" cy="101" rx="4.2" ry="5" fill="#5b3441" />
              <ellipse cx="112.5" cy="101" rx="4.2" ry="5" fill="#5b3441" />
              <circle cx="89" cy="99.2" r="1" fill="#fff6f6" opacity="0.85" />
              <circle cx="114" cy="99.2" r="1" fill="#fff6f6" opacity="0.85" />
              {/* soft nose hint */}
              <path
                d="M100,104 L98.5,111 Q100,113 101.5,111"
                fill="none"
                stroke="#e0ac7d"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.7"
              />
              {/* smile */}
              <path d="M86,120 Q100,129 114,120" fill="none" stroke="#9a5364" strokeWidth="3.2" strokeLinecap="round" />
              {/* blush */}
              <ellipse cx="76.5" cy="112" rx="7" ry="4.4" fill="#efa4ad" opacity="0.5" />
              <ellipse cx="123.5" cy="112" rx="7" ry="4.4" fill="#efa4ad" opacity="0.5" />
            </g>
          </g>
        </g>
      </g>

      {/* rim highlight for extra polish */}
      <circle cx="100" cy="100" r="92" fill="none" style={{ stroke: "var(--color-bg)" }} strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}
