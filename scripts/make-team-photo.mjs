#!/usr/bin/env node
// Converts the responsible editor's portrait for /om-oss#azzam.
//
//   node scripts/make-team-photo.mjs [source.jpg]
//
// Source (default): ../assets/azzam-khalaf.jpg, relative to the repo root.
// Output: public/team/azzam-khalaf.webp — 400×400, quality 80, face-aware
// centre crop via sharp (already installed as a Next.js dependency).
// On success the script also flips `operatorImage: null` in lib/site.ts to
// "/team/azzam-khalaf.webp" so the portrait and Person.image go live.
// No placeholder is ever produced: a missing source is a hard error.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const SOURCE = process.argv[2] ?? join(ROOT, "..", "assets", "azzam-khalaf.jpg");
const OUTPUT = join(ROOT, "public", "team", "azzam-khalaf.webp");
const SITE_TS = join(ROOT, "lib", "site.ts");
const PUBLIC_PATH = "/team/azzam-khalaf.webp";

if (!existsSync(SOURCE)) {
  console.error(`make-team-photo: source photo not found: ${SOURCE}`);
  console.error("Place the portrait there (≥ 800×800, face clearly visible) and re-run.");
  process.exit(1);
}

mkdirSync(dirname(OUTPUT), { recursive: true });

await sharp(SOURCE)
  .rotate()
  .resize(400, 400, { fit: "cover", position: "attention" })
  .webp({ quality: 80 })
  .toFile(OUTPUT);

console.log(`make-team-photo: wrote ${OUTPUT}`);

const siteSource = readFileSync(SITE_TS, "utf8");
const nullField = /operatorImage:\s*null as string \| null,/;

if (nullField.test(siteSource)) {
  writeFileSync(
    SITE_TS,
    siteSource.replace(nullField, `operatorImage: ${JSON.stringify(PUBLIC_PATH)} as string | null,`),
    "utf8",
  );
  console.log(`make-team-photo: set siteConfig.operatorImage = "${PUBLIC_PATH}" in lib/site.ts`);
} else {
  console.log("make-team-photo: lib/site.ts already points at the portrait — nothing to change.");
}
