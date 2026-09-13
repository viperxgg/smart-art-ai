const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function load(file, requireMock, extra = {}) {
  const module = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  vm.runInNewContext(code, { module, exports: module.exports, require: requireMock, ...extra });
  return module.exports;
}
const pricing = load('lib/merchant-price.ts');
const price = { amount: 799, currency: 'SEK', checkedAt: '2026-09-13T23:03:14+02:00', source: 'https://www.nordicfeel.com/se/product/k18-leavein-repair-hair-mask-115729' };
const checked = Date.parse(price.checkedAt);
assert.equal(pricing.getFreshMerchantPrice(price, checked), price);
assert.equal(pricing.getFreshMerchantPrice(price, checked + pricing.PRICE_MAX_AGE_MS - 1), price);
assert.equal(pricing.getFreshMerchantPrice(price, checked + pricing.PRICE_MAX_AGE_MS), undefined);
assert.equal(pricing.getFreshMerchantPrice(price, checked - 1), undefined);
for (const patch of [{ amount: 0 }, { amount: -1 }, { amount: NaN }, { currency: 'EUR' }, { checkedAt: 'invalid' }]) {
  assert.equal(pricing.getFreshMerchantPrice({ ...price, ...patch }, checked), undefined);
}

// Exercise the real component subscription: expiry, return to tab, SSR fallback,
// and cleanup. This does not pretend to be a browser test or an automatic feed.
let now = checked + 1000, subscription, getSnapshot, getServerSnapshot, timer, cleared;
class Clock extends Date { static now() { return now; } }
const runtimePricing = load('lib/merchant-price.ts', undefined, { Date: Clock });
const listeners = new Map();
const eventTarget = { addEventListener: (name, fn) => listeners.set(name, fn), removeEventListener: name => listeners.delete(name) };
const component = load('components/MerchantPrice.tsx', name => {
  if (name === 'react') return {
    useCallback: fn => fn,
    useSyncExternalStore: (subscribe, client, server) => { subscription = subscribe; getSnapshot = client; getServerSnapshot = server; return false; },
  };
  if (name === '@/lib/merchant-price') return runtimePricing;
  if (name === 'react/jsx-runtime') return { jsx: () => null, jsxs: () => null };
  throw Error(name);
}, { Date: Clock, document: eventTarget, window: { ...eventTarget, setTimeout: (fn, ms) => { timer = { fn, ms }; return 1; }, clearTimeout: id => { cleared = id; } } });
component.MerchantPrice({ price });
assert.equal(getServerSnapshot(), false);
assert.equal(getSnapshot(), true);
let notifications = 0;
const cleanup = subscription(() => notifications++);
assert.equal(timer.ms, pricing.PRICE_MAX_AGE_MS - 1000);
now = checked + pricing.PRICE_MAX_AGE_MS;
timer.fn();
assert.equal(getSnapshot(), false);
listeners.get('focus')(); listeners.get('visibilitychange')();
assert.equal(notifications, 3);
cleanup();
assert.equal(listeners.size, 0);
assert.equal(cleared, 1);
console.log('PASS: checked price, expiry boundary, invalid/future data, SSR fallback, expiry timer, tab return and cleanup.');
