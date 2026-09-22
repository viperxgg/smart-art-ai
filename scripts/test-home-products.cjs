/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node test runner. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const moduleCache = new Map();

function loadAlias(name) {
  const base = name.replace(/^@\//, '');
  if (!name.startsWith('@/')) return require(name);
  if (moduleCache.has(base)) return moduleCache.get(base);
  if (base.endsWith('.json')) return JSON.parse(fs.readFileSync(base, 'utf8'));
  const loaded = load(`${base}.ts`);
  moduleCache.set(base, loaded);
  return loaded;
}

function load(file, imports = loadAlias) {
  const mod = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(code, { module: mod, exports: mod.exports, require: imports });
  return mod.exports;
}
const pricing = load('lib/merchant-price.ts');
const offers = load('lib/merchant-offers.ts');
const assets = load('lib/partner-image-assets.ts');
const home = load('lib/home-products.ts', name => {
  if (name === '@/lib/merchant-offers') return offers;
  if (name === '@/lib/merchant-price') return pricing;
  if (name === '@/lib/partner-image-assets') return {
    getPartnerOfferImage(slug, merchant) {
      // Fixtures model independently reviewed future products, never real offers.
      return slug.startsWith('fixture-') && merchant === 'nordicfeel'
        ? { src: '/fixture.jpg' } : assets.getPartnerOfferImage(slug, merchant);
    },
  };
  return loadAlias(name);
});
const now = Date.parse('2026-09-22T12:00:00+02:00');
const base = home.curatedHomeProducts[0];
const make = (slug, addedAt = '2026-09-20T12:00:00+02:00') => ({
  ...base, offer: { ...base.offer, productSlug: slug }, addedAt,
});
const first = make('fixture-first');
const second = make('fixture-second', '2026-09-19T12:00:00+02:00');
const third = make('fixture-third', '2026-09-18T12:00:00+02:00');
const selected = home.selectHomeProducts(home.curatedHomeProducts, [third, second, first, first, base], now);
assert.equal(selected.curated.length, 2);
assert.equal(selected.recent.length, 2);
assert.equal(selected.recent[0].offer.productSlug, 'fixture-first');
assert.equal(selected.recent[1].offer.productSlug, 'fixture-second');
assert.equal(home.selectHomeProducts(home.curatedHomeProducts, [], now).recent.length, 0);
const reject = entry => assert.equal(home.selectHomeProducts([], [entry], now).recent.length, 0);
for (const patch of [
  { reviewed: false }, { available: false }, { addedAt: 'invalid' },
  { addedAt: '2026-09-23T12:00:00+02:00' }, { campaignEndsAt: new Date(now).toISOString() },
  { campaignEndsAt: 'invalid' }, { fit: '' }, { caveat: '' }, { href: '//external.example/' },
]) reject({ ...first, ...patch });
reject({ ...first, offer: { ...first.offer, price: undefined } });
reject({ ...first, offer: { ...first.offer, price: { ...first.offer.price, amount: -1 } } });
reject({ ...first, offer: { ...first.offer, productSlug: 'missing-permission' } });
reject({ ...first, offer: { ...first.offer, merchantId: 'kjell' } });
assert.equal(home.selectHomeProducts([{ ...base, available: false }], [base], now).recent.length, 0);
// A delayed weekly review must not evict a still-valid, previously checked price.
assert.equal(home.selectHomeProducts(home.curatedHomeProducts, [], now + 365 * 86400000).curated.length, 2);
console.log('PASS: 2 curated + up to 2 newest, unique, reviewed complete offers; missing/invalid/ended/unavailable excluded; original price survives a delayed review.');
