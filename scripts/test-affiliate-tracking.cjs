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
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
  vm.runInNewContext(code, { module: loadedModule, exports: loadedModule.exports, require: requireMock, URL, ...extra });
  return loadedModule.exports;
}

const amazonOffers = load('lib/amazon-offers.ts');
const offers = load('lib/merchant-offers.ts');
const tracking = load('lib/affiliate-tracking.ts', name => {
  if (name === '@/lib/amazon-offers') return amazonOffers;
  if (name === '@/lib/merchant-offers') return offers;
  throw Error(name);
});
const events = [];
let consent = null;
const gtag = load('lib/gtag.ts', name => {
  if (name === '@/lib/consent') return { getStoredConsentSnapshot: () => consent };
  if (name === '@next/third-parties/google') return { sendGAEvent: (...args) => events.push(args) };
  throw Error(name);
});
let cleanup;
const handlers = new Map();
class Element { closest() { return this; } }
class Anchor extends Element {
  constructor(offer) { super(); this.href = offer.href; this.dataset = {merchant: offer.merchantId, product: offer.productSlug, placement: offer.placement}; this.textContent = 'Se pris'; }
}
const document = { title: 'Test', addEventListener: (type, fn) => handlers.set(type, fn), removeEventListener: type => handlers.delete(type) };
const component = load('components/AmazonClickTracker.tsx', name => {
  if (name === 'react') return { useEffect: fn => { cleanup = fn(); } };
  if (name === '@/lib/gtag') return gtag;
  if (name === '@/lib/affiliate-tracking') return tracking;
  throw Error(name);
}, {document, window: {location: {pathname: '/guider/harinpackning'}}, Element, HTMLAnchorElement: Anchor});
component.AmazonClickTracker();
function click(target, type = 'click', button = 0) { handlers.get(type)({target, type, button}); }
for (const offer of [...offers.merchantOffers.filter(offer => offer.linkKind !== 'direct'), ...amazonOffers.amazonOffers.map(offer => ({...offer, merchantId: 'amazon', placement: 'home-curated'}))]) {
  const link = new Anchor(offer);
  events.length = 0;
  consent = null; click(link); assert.equal(events.length, 0);
  consent = 'denied'; click(link); assert.equal(events.length, 0);
  consent = 'granted'; click(link); assert.equal(events.length, 1);
  assert.equal(events[0][1], 'affiliate_click');
  assert.equal(events[0][2].merchant, offer.merchantId);
  assert.equal(events[0][2].product, offer.productSlug);
  assert.equal(events[0][2].placement, offer.placement);
  assert.equal(events[0][2].page_path, '/guider/harinpackning');
  assert.deepEqual(Object.keys(events[0][2]).sort(), ['merchant','page_path','placement','product']);
  consent = 'denied'; click(link); assert.equal(events.length, 1);
  consent = 'granted'; click(link, 'auxclick', 1); assert.equal(events.length, 2);
  click(link, 'auxclick', 2); assert.equal(events.length, 2);
  link.href = 'https://example.com/t/t'; click(link); assert.equal(events.length, 2);
}
events.length = 0;
const directPreview = { ...offers.merchantOffers[0], productSlug: 'unaffiliated-preview', href: 'https://example.com/product', linkKind: 'direct' };
offers.merchantOffers.push(directPreview);
for (const offer of [directPreview]) {
  consent = 'granted';
  const link = new Anchor(offer);
  click(link); click(link, 'auxclick', 1);
  assert.equal(events.length, 0, 'Direct Lyko visits must not inflate affiliate events');
  assert.equal(tracking.getPartnerClick(link.href,link.dataset),null);
}
offers.merchantOffers.pop();
const amazon = new Anchor({href: 'https://amzn.to/example'});
consent = null; click(amazon); assert.equal(events.length, 0);
consent = 'denied'; click(amazon); assert.equal(events.length, 0);
consent = 'granted'; click(amazon); assert.equal(events.length, 1); assert.equal(events[0][1], 'amazon_click');
consent = 'denied'; click(amazon); assert.equal(events.length, 1);
assert.equal(amazonOffers.getAmazonOffer('unknown'), undefined);
for (const offer of amazonOffers.amazonOffers) {
  const url = new URL(offer.href);
  assert.equal(url.hostname, 'www.amazon.se');
  assert.equal(url.pathname, '/dp/' + offer.asin);
  assert.equal(url.searchParams.get('tag'), 'azzamkhalaf-21');
  assert.equal('price' in offer, false, 'Manual Amazon prices must not be published');
  assert.equal(tracking.getAmazonOfferClick(offer.href, {merchant:'amazon', product:'wrong', placement:'home-curated'}), null);
  assert.equal(tracking.getAmazonOfferClick(offer.href, {merchant:'amazon', product:offer.productSlug, placement:'invalid placement'}), null);
  const malformed = new Anchor({...offer, merchantId:'amazon', placement:'home-curated'});
  malformed.href = offer.href.replace('azzamkhalaf-21','wrong-21');
  events.length = 0; click(malformed); assert.equal(events.length, 0, 'Malformed comparisons must not fall through to legacy events');
}
assert.equal(tracking.isAmazonDestination('https://amazon.se.evil.com'), false);
assert.equal(tracking.getPartnerClick('not a URL', {}), null);
assert.equal(tracking.getPartnerClick(offers.k18NordicfeelOffer.href, {merchant: 'nordicfeel',product:'wrong',placement:'body'}), null);
for (const offer of offers.merchantOffers) {
  for (const [key, value] of [['as','wrong'], ['a','wrong'], ['url','example.com']]) {
    const changed = new URL(offer.href); changed.searchParams.set(key, value);
    assert.equal(tracking.getPartnerClick(changed.href, {merchant:offer.merchantId, product:offer.productSlug, placement:'body'}), null);
  }
}
cleanup(); assert.equal(handlers.size, 0);
console.log('PASS: Adtraction/Amazon offer identity, exact ASIN/tag, no manual Amazon prices, single event, consent/withdrawal, middle click, no right click, legacy isolation and cleanup.');
