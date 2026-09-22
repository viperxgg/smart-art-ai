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

function load(file, requireMock = loadAlias, extra = {}) {
  const loadedModule = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  vm.runInNewContext(code, { module: loadedModule, exports: loadedModule.exports, require: requireMock, ...extra });
  return loadedModule.exports;
}
const pricing = load('lib/merchant-price.ts');
const offers = load('lib/merchant-offers.ts', name => {
  if (name === '@/lib/merchant-price') return pricing;
  return loadAlias(name);
});
assert.equal(offers.k18NordicfeelOffer.price.amount, 799);
assert.equal(offers.k18NordicfeelOffer.price.checkedAt, '2026-09-14T11:58:26+02:00');
assert.equal(offers.koboKjellOffer.price.amount, 1899);
assert.equal(offers.koboKjellOffer.price.currency, 'SEK');
assert.match(offers.koboKjellOffer.price.source, /kjell\.com\/se\/produkter\//);
const price = { amount: 799, currency: 'SEK', checkedAt: '2026-09-13T23:03:14+02:00', source: 'https://www.nordicfeel.com/se/product/k18-leavein-repair-hair-mask-115729' };
const checked = Date.parse(price.checkedAt);
// Scheduling a review, or delaying it, must never expire the last verified price.
for (const days of [0, 1, 7, 8, 30, 365]) {
  assert.equal(pricing.getVerifiedMerchantPrice(price, checked + days * 86400000), price);
}
assert.equal(pricing.getVerifiedMerchantPrice(price, checked - 1), undefined);
for (const patch of [{ amount: 0 }, { amount: -1 }, { amount: NaN }, { currency: 'EUR' }, { checkedAt: 'invalid' }]) {
  assert.equal(pricing.getVerifiedMerchantPrice({ ...price, ...patch }, checked), undefined);
}
assert.equal(pricing.getVerifiedMerchantPrice(price, NaN), undefined);
const { renderToStaticMarkup } = require('react-dom/server');
const component = load('components/MerchantPrice.tsx', name =>
  name === '@/lib/merchant-price' ? pricing : require(name));
const html = renderToStaticMarkup(component.MerchantPrice({ price }));
assert.match(html, /799/);
assert.match(html, /Senast kontrollerat pris/);
assert.ok(html.includes(price.checkedAt));
assert.match(html, /butikens pris gäller vid köp/);
const updated = { ...price, amount: 749, checkedAt: '2026-09-13T23:04:00+02:00' };
const updatedHtml = renderToStaticMarkup(component.MerchantPrice({ price: updated }));
assert.match(updatedHtml, /749/);
assert.ok(updatedHtml.includes(updated.checkedAt));
assert.ok(!updatedHtml.includes(price.checkedAt));
const invalidHtml = renderToStaticMarkup(component.MerchantPrice({ price: { ...price, amount: -1 } }));
assert.match(invalidHtml, /Se aktuellt pris hos butiken/);
console.log('PASS: price survives 1/7/8/30/365 days, invalid/future data rejected, server HTML includes price and date without JavaScript, verified update replaces snapshot.');
