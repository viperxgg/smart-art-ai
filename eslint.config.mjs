import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "antigravity-awesome-skills-main/**",
    "portfolio/**",
    "backups/**",
    "scratch/**",
    ".agents/**",
    "components/sections/**",
    "components/smart-menu/**",
    "components/ui/GenerativeMesh.tsx",
    "components/ui/HeroCanvas.tsx",
    "components/ui/HeroText.tsx",
    "components/ui/LanguageToggle.tsx",
    "components/ui/MagneticButton.tsx",
  ]),
]);

export default eslintConfig;
