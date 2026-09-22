/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node verification. */
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const cache = new Map();
function load(name) {
  const base = name.replace(/^@\//, '');
  if (cache.has(base)) return cache.get(base);
  if (base.endsWith('.json')) return JSON.parse(fs.readFileSync(base, 'utf8'));
  const file = base.endsWith('.ts') ? base : `${base}.ts`;
  const loadedModule = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(code, { module: loadedModule, exports: loadedModule.exports, require: load, URL, Intl });
  cache.set(base, loadedModule.exports);
  return loadedModule.exports;
}

function sha256(filename) {
  return crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex');
}

function recordError(record, context) {
  const routeFile = context.routeFile(record.path);
  if (!routeFile || !fs.existsSync(routeFile)) return `${record.id}: missing route ${record.path}`;
  const imageFile = context.imageFile(record.image.src);
  if (!imageFile || !fs.existsSync(imageFile)) return `${record.id}: missing image ${record.image.src}`;
  if (sha256(imageFile) !== record.image.sha256) return `${record.id}: wrong image hash for ${record.image.src}`;
  if (!context.priceRows.has(`${record.id}:${record.offer.merchantId}`)) return `${record.id}: missing price-register row for ${record.offer.merchantId}`;
  if (record.amazon && !context.priceRows.has(`${record.id}:amazon`)) return `${record.id}: missing price-register row for amazon`;
  if (!context.sitemapPaths.has(record.path)) return `${record.id}: missing sitemap entry ${record.path}`;
  return null;
}

function assertFixtureFailures() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'elins-selected-product-'));
  assert.ok(path.resolve(tempRoot).startsWith(path.resolve(os.tmpdir()) + path.sep));
  try {
    const route = '/fixture/fake-selected-product';
    const image = '/products/selected/fake-selected-product/1.jpg';
    const routeFile = path.join(tempRoot, 'app', ...route.slice(1).split('/'), 'page.tsx');
    const imageFile = path.join(tempRoot, 'public', ...image.slice(1).split('/'));
    const fake = {
      id: 'fake-selected-product', path: route, selected: true,
      offer: { merchantId: 'lyko' },
      image: { src: image, sha256: '0'.repeat(64) },
    };
    const context = {
      routeFile: () => routeFile,
      imageFile: () => imageFile,
      priceRows: new Set(),
      sitemapPaths: new Set(),
    };
    assert.match(recordError(fake, context), /missing route/);
    console.log('FIXTURE PASS: missing route detected clearly.');
    fs.mkdirSync(path.dirname(routeFile), { recursive: true });
    fs.mkdirSync(path.dirname(imageFile), { recursive: true });
    fs.writeFileSync(routeFile, 'export default function Page() { return null; }\n');
    fs.writeFileSync(imageFile, 'fake-image-fixture');
    assert.match(recordError(fake, context), /wrong image hash/);
    console.log('FIXTURE PASS: wrong image hash detected clearly.');
    fake.image.sha256 = sha256(imageFile);
    assert.match(recordError(fake, context), /missing price-register row/);
    console.log('FIXTURE PASS: missing price-register row detected clearly.');
    context.priceRows.add('fake-selected-product:lyko');
    assert.match(recordError(fake, context), /missing sitemap entry/);
    console.log('FIXTURE PASS: missing sitemap entry detected clearly.');
    context.sitemapPaths.add(route);
    assert.equal(recordError(fake, context), null);
    console.log('FIXTURE PASS: complete temporary record accepted.');
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
    assert.equal(fs.existsSync(tempRoot), false);
    console.log('FIXTURE PASS: temporary fixture removed.');
  }
}

const canonical = require('../lib/selected-product-data.json');
const records = load('@/lib/selected-product-records');
const selected = load('@/lib/selected-products');
const merchants = load('@/lib/merchant-offers');
const amazon = load('@/lib/amazon-offers');
const price = load('@/lib/merchant-price');
const priceRegister = require('../../company/price-review/products.json').products;
const priceRows = new Set(priceRegister.map((row) => row.id));
const sitemapSource = fs.readFileSync('lib/sitemap-entries.ts', 'utf8');
const sitemapPaths = new Set([...sitemapSource.matchAll(/path:\s*"([^"]+)"/g)].map((match) => match[1]));
const now = Math.max(Date.parse('2026-09-22T12:00:00+02:00'), ...canonical.flatMap(record => [record.offer, ...(record.additionalOffers || [])]).map(offer => Date.parse(offer.price.checkedAt)));

assert.equal(records.productRecords.length, canonical.length);
assert.equal(selected.selectedProducts.length, canonical.filter((record) => record.selected).length);
assert.equal(new Set(canonical.map((record) => record.id)).size, canonical.length, 'Canonical IDs must be unique');
assert.equal(new Set(selected.selectedProducts.map((product) => product.path)).size, selected.selectedProducts.length, 'Selected paths must be unique');
assert.equal(new Set(selected.selectedProducts.map((product) => product.metaTitle)).size, selected.selectedProducts.length, 'Selected titles must be unique');

const selectedRouteIds = new Set();
function collectSelectedRoutes(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) collectSelectedRoutes(filename);
    else if (entry.name === 'page.tsx') {
      const source = fs.readFileSync(filename, 'utf8');
      const match = source.match(/getSelectedProduct\("([^"]+)"\)/);
      if (match) selectedRouteIds.add(match[1]);
    }
  }
}
collectSelectedRoutes('app');
assert.deepEqual([...selectedRouteIds].sort(), selected.selectedProducts.map((product) => product.id).sort(), 'Every selected-product route must have exactly one record');

const validationContext = {
  routeFile: (route) => path.join('app', ...route.slice(1).split('/'), 'page.tsx'),
  imageFile: (src) => path.join('public', ...src.slice(1).split('/')),
  priceRows,
  sitemapPaths,
};

for (const record of records.productRecords) {
  assert.ok(record.name && record.variant, `${record.id}: missing canonical identity`);
  assert.ok(record.offer.merchantId && record.offer.href.startsWith('https://'), `${record.id}: incomplete merchant offer`);
  assert.ok(record.offer.price && record.offer.price.amount > 0 && record.offer.price.currency === 'SEK', `${record.id}: missing dated price`);
  assert.ok(Date.parse(record.offer.price.checkedAt) && record.offer.price.source.startsWith('https://'), `${record.id}: invalid price date/source`);
  assert.ok(record.image.source.startsWith('https://') && record.image.permissionScope && Date.parse(record.image.reviewedAt), `${record.id}: incomplete image provenance`);
  const forbidden = ['rating', 'aggregateRating', 'reviewCount', 'liveStock', 'testimonial'];
  const keys = [];
  const visit = (value) => {
    if (!value || typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) { keys.push(key); visit(child); }
  };
  visit(record);
  for (const key of forbidden) assert.ok(!keys.includes(key), `${record.id}: unsupported ${key} field`);
  if (record.selected) assert.equal(recordError(record, validationContext), null);
  else {
    assert.ok(fs.existsSync(validationContext.imageFile(record.image.src)), `${record.id}: missing image`);
    assert.equal(sha256(validationContext.imageFile(record.image.src)), record.image.sha256, `${record.id}: wrong image hash`);
    assert.ok(priceRows.has(`${record.id}:${record.offer.merchantId}`), `${record.id}: missing merchant price row`);
    if (record.amazon) assert.ok(priceRows.has(`${record.id}:amazon`), `${record.id}: missing Amazon price row`);
  }
}

for (const product of selected.selectedProducts) {
  assert.ok(product.sources.length && product.sources.every((source) => source.url.startsWith('https://')));
  for (const [, route] of product.related) assert.ok(fs.existsSync(path.join('app', ...route.slice(1).split('/'), 'page.tsx')), `Missing related route ${route}`);
  const graph = selected.selectedProductSchema(product, now)['@graph'];
  const entity = graph.find((node) => node['@type'] === 'Product');
  const offer = merchants.getMerchantOffer(product.id);
  const schemaOffers = Array.isArray(entity.offers) ? entity.offers : [entity.offers];
  const actualOffers = merchants.getMerchantOffers(product.id);
  assert.equal(schemaOffers.length, actualOffers.length);
  actualOffers.forEach((item, index) => {
    assert.equal(schemaOffers[index].price, item.price.amount);
    assert.equal(schemaOffers[index].seller.name, item.merchantName);
    assert.ok(!('availability' in schemaOffers[index]), 'Weekly observations are not live stock');
    assert.ok(priceRows.has(`${product.id}:${item.merchantId}`));
  });
  assert.ok(!('review' in entity) && !('aggregateRating' in entity));
  assert.ok(!JSON.stringify(graph).includes('amazon.se'), 'No unsupported numeric Amazon offer');
  assert.ok(price.getVerifiedMerchantPrice(offer.price, Date.parse('2026-10-14T12:00:00+02:00')), 'Weekly deadline must not hide the dated price');
  if (product.campaignEndsAt) {
    const end = Date.parse(product.campaignEndsAt);
    assert.equal(selected.hasCurrentStructuredPrice(product, end - 1), true);
    assert.equal(selected.hasCurrentStructuredPrice(product, end), false);
    assert.equal(selected.getSelectedOfferState(product, end).campaignActive, false);
    assert.ok(!selected.selectedProductSchema(product, end)['@graph'][0].offers);
  }
}

const tapo = selected.getSelectedProduct('tapo-c520ws-single');
assert.equal(selected.selectedProductSchema(tapo, now)['@graph'][0].offers.price, 689, 'Use the newly verified unlabelled purchase price');
assert.equal('memberPrice' in tapo, false, 'Ended membership offer must be removed from public product data');
assert.equal(amazon.getAmazonOffer('beauty-of-joseon-propolis-serum').asin, 'B086VKZZZY');
for (const id of ['anker-prime-300w-26250mah', 'linocell-wireless-carplay-q1m', 'ole-henriksen-pout-strawberry-12ml', 'lumene-cc-medium-30ml', 'amika-hydro-rush-leave-in-200ml', 'la-roche-posay-cicaplast-b5-100ml']) {
  assert.equal(amazon.getAmazonOffer(id), undefined, 'Unconfirmed matching must not create a comparison');
}
const lykoPrices = {
  'ole-henriksen-pout-strawberry-12ml': 198,
  'lumene-cc-medium-30ml': 167,
  'amika-hydro-rush-leave-in-200ml': 349,
  'la-roche-posay-cicaplast-b5-100ml': 197,
  'wella-sp-luxeoil-100ml': 424,
};
for (const [id, amount] of Object.entries(lykoPrices)) {
  const offer = merchants.getMerchantOffer(id, 'lyko');
  assert.equal(offer.linkKind, 'affiliate', 'Use the validated Lyko program link');
  const url = new URL(offer.href);
  assert.equal(url.hostname, 'ion.lyko.com');
  assert.equal(url.searchParams.get('a'), '1117786221');
  assert.equal(url.searchParams.get('as'), '2110221551');
  assert.equal(url.searchParams.get('url'), offer.price.source, 'Tracking destination must match exact variant');
  assert.equal(selected.selectedProductSchema(selected.getSelectedProduct(id), now)['@graph'][0].offers.price, amount, 'Conditional combo price must not become a single-item offer');
}
assert.equal(amazon.getAmazonOffer('wella-sp-luxeoil-100ml').asin, 'B009ZVHWW4');
const cicaplast = selected.getSelectedProduct('la-roche-posay-cicaplast-b5-100ml');
assert.equal(cicaplast.path, '/skonhet/cicaplast-b5', 'Reuse family canonical');
assert.equal(cicaplast.gtin, '3337875816847');
assert.ok(cicaplast.images.every((image) => image.src.includes('100ml')), 'Never reuse old 40 ml packshots');

if (process.argv.includes('--fixture-matrix')) assertFixtureFailures();
console.log(`PASS: ${selected.selectedProducts.length} record-driven selected routes; canonical identity, sources, images/hashes, offers/prices, sitemap, related routes, price-register coverage, ended Tapo member offer removal and behavioral exceptions verified.`);
