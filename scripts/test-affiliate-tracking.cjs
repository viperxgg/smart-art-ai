const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function load(file, requireMock, extra = {}) {
  const module = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(code, { module, exports: module.exports, require: requireMock, URL, ...extra });
  return module.exports;
}

const tracking = load('lib/affiliate-tracking.ts');
const offers = load('lib/merchant-offers.ts');
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
for (const offer of [offers.k18NordicfeelOffer, offers.koboKjellOffer]) {
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
const amazon = new Anchor({href: 'https://amzn.to/example'});
click(amazon); assert.equal(events.length, 1); assert.equal(events[0][1], 'amazon_click');
assert.equal(tracking.isAmazonDestination('https://amazon.se.evil.com'), false);
assert.equal(tracking.getPartnerClick('not a URL', {}), null);
assert.equal(tracking.getPartnerClick(offers.k18NordicfeelOffer.href, {merchant: 'nordicfeel',product:'wrong',placement:'body'}), null);
cleanup(); assert.equal(handlers.size, 0);
console.log('PASS: partner identity, single event, accepted/rejected/withdrawn consent, middle click, no right click, legacy Amazon isolation and listener cleanup.');
