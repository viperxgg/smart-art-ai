import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const appRoot = resolve(import.meta.dirname, "..");
const dataPath = resolve(appRoot, "lib/selected-product-data.json");
const cache = new Map();
const acceptCompatibleNameQualifiers = process.argv.includes("--accept-compatible-name-qualifiers");
const acceptedNameQualifiers = [];

function load(name) {
  const base = name.replace(/^@\//, "");
  if (cache.has(base)) return cache.get(base);
  if (base.endsWith(".json")) return JSON.parse(readFileSync(resolve(appRoot, base), "utf8"));
  const filename = resolve(appRoot, `${base}.ts`);
  const loadedModule = { exports: {} };
  const code = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText;
  vm.runInNewContext(code, {
    module: loadedModule,
    exports: loadedModule.exports,
    require: load,
    URL,
    Intl,
  }, { filename });
  cache.set(base, loadedModule.exports);
  return loadedModule.exports;
}

function comparable(value) {
  return JSON.stringify(value);
}

function conflict(conflicts, id, field, left, right) {
  if (comparable(left) !== comparable(right)) {
    conflicts.push(`${id}: conflicting ${field}: ${comparable(left)} !== ${comparable(right)}`);
  }
}

function required(map, id, label) {
  const value = map.get(id);
  if (!value) throw new Error(`${id}: missing ${label}`);
  return value;
}

function parseTrackingIds(offer) {
  if (offer.linkKind === "direct") return {};
  const url = new URL(offer.href);
  const programId = url.searchParams.get("a");
  const channelId = url.searchParams.get("as");
  if (!programId || !channelId) throw new Error(`${offer.productSlug}: missing program/channel id in offer URL`);
  return { programId, channelId };
}

const selectedData = JSON.parse(readFileSync(dataPath, "utf8"));
if (!Array.isArray(selectedData) || selectedData.some((record) => record.offer || record.image)) {
  throw new Error("Migration input must be the legacy flat selected-product array without offer/image projections.");
}

const { merchantOffers } = load("@/lib/merchant-offers");
const { partnerImageAssets, partnerImagePermission } = load("@/lib/partner-image-assets");
const { amazonOffers } = load("@/lib/amazon-offers");
const { curatedHomeProducts, newHomeOffers } = load("@/lib/home-products");

const selectedById = new Map(selectedData.map((record) => [record.id, record]));
const offersById = new Map(merchantOffers.map((offer) => [offer.productSlug, offer]));
const imagesById = new Map(Object.entries(partnerImageAssets));
const amazonById = new Map(amazonOffers.map((offer) => [offer.productSlug, offer]));
const homeById = new Map([
  ...curatedHomeProducts.map((home) => [home.offer.productSlug, { kind: "curated", home }]),
  ...newHomeOffers.map((home) => [home.offer.productSlug, { kind: "candidate", home }]),
]);
const conflicts = [];

for (const record of selectedData) {
  const offer = required(offersById, record.id, "merchant offer");
  const image = required(imagesById, record.id, "image record");
  if (record.name !== offer.productName) {
    const size = offer.variant.match(/(?:^|·\s*)(\d+(?:[.,]\d+)?\s*(?:ml|g|kg|l))(?:\s*·|$)/i)?.[1];
    const compatible = size && record.name === `${offer.productName} ${size}`;
    if (acceptCompatibleNameQualifiers && compatible) acceptedNameQualifiers.push(`${record.id}: ${offer.productName} -> ${record.name}`);
    else conflict(conflicts, record.id, "name", record.name, offer.productName);
  }
  conflict(conflicts, record.id, "variant", record.variant, offer.variant);
  conflict(conflicts, record.id, "merchant", record.merchantId, offer.merchantId);
  if (record.images.length !== 1) conflicts.push(`${record.id}: expected one selected-product image`);
  const selectedImage = record.images[0];
  for (const field of ["src", "width", "height", "alt", "credit"]) {
    conflict(conflicts, record.id, `image.${field}`, selectedImage[field], image[field]);
  }
}

for (const [id, { home }] of homeById) {
  const offer = required(offersById, id, "home merchant offer");
  conflict(conflicts, id, "home merchant offer", home.offer, offer);
}

for (const offer of merchantOffers) {
  required(imagesById, offer.productSlug, "image record");
}
for (const id of imagesById.keys()) required(offersById, id, "merchant offer for image");
for (const id of amazonById.keys()) required(offersById, id, "merchant offer for Amazon match");

if (conflicts.length) {
  throw new Error(`Migration stopped on ${conflicts.length} conflict(s):\n- ${conflicts.join("\n- ")}`);
}

const records = merchantOffers.map((legacyOffer) => {
  const legacySelected = selectedById.get(legacyOffer.productSlug);
  const legacyImage = required(imagesById, legacyOffer.productSlug, "image record");
  const legacyAmazon = amazonById.get(legacyOffer.productSlug);
  const legacyHome = homeById.get(legacyOffer.productSlug);
  const {
    productSlug: id,
    productName,
    variant: offerVariant,
    ...offerFields
  } = legacyOffer;
  const {
    merchantId: _selectedMerchant,
    images: _selectedImages,
    ...editorial
  } = legacySelected ?? {
    id,
    name: productName,
    variant: offerVariant,
  };
  const record = {
    ...editorial,
    selected: Boolean(legacySelected),
    ...(legacySelected ? {
      hubGroup: legacyOffer.merchantId === "lyko"
        ? "lyko"
        : legacySelected.category === "Skönhet" ? "skonhet" : "vardag",
    } : {}),
    offer: {
      ...offerFields,
      ...parseTrackingIds(legacyOffer),
      availabilityCheckedAt: legacyOffer.checkedAt,
    },
    image: {
      ...legacyImage,
      permissionScope: partnerImagePermission.scope,
      reviewedAt: partnerImagePermission.reviewedAt,
    },
  };
  if (legacyAmazon) {
    const { productSlug: _amazonSlug, ...amazon } = legacyAmazon;
    record.amazon = { ...amazon, linkOnly: true };
  }
  if (legacyHome) {
    const { offer: _homeOffer, ...home } = legacyHome.home;
    record.home = { kind: legacyHome.kind, ...home };
  }
  return record;
});

if (records.filter((record) => record.selected).length !== selectedData.length) {
  throw new Error("Selected record count changed during migration.");
}

const output = `${JSON.stringify(records, null, 2)}\n`;
writeFileSync(dataPath, output, "utf8");
for (const resolution of acceptedNameQualifiers) console.log(`RESOLVED compatible size qualifier: ${resolution}`);
console.log(`PASS: migrated ${records.length} canonical partner records (${selectedData.length} selected guides) without conflicts.`);
