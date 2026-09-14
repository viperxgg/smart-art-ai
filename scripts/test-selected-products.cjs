/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node verification. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const cache = new Map();
function load(name) {
  const base = name.replace(/^@\//, '');
  if (cache.has(base)) return cache.get(base);
  if (base.endsWith('.json')) return JSON.parse(fs.readFileSync(base, 'utf8'));
  const file = base + '.ts';
  const loadedModule = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(file,'utf8'), { compilerOptions: { module:ts.ModuleKind.CommonJS, target:ts.ScriptTarget.ES2022, esModuleInterop:true } }).outputText;
  vm.runInNewContext(code, { module:loadedModule, exports:loadedModule.exports, require:load, URL, Intl });
  cache.set(base, loadedModule.exports); return loadedModule.exports;
}
const selected = load('@/lib/selected-products');
const merchants = load('@/lib/merchant-offers');
const amazon = load('@/lib/amazon-offers');
const price = load('@/lib/merchant-price');
const now = Date.parse('2026-09-14T18:00:00+02:00');
assert.equal(selected.selectedProducts.length,15);
assert.equal(new Set(selected.selectedProducts.map(p=>p.path)).size,15);
assert.equal(new Set(selected.selectedProducts.map(p=>p.metaTitle)).size,15);
for (const product of selected.selectedProducts) {
  assert.ok(fs.existsSync(path.join('app',product.path,'page.tsx')));
  assert.ok(product.sources.length && product.sources.every(source=>source.url.startsWith('https://')));
  for (const image of product.images) assert.ok(fs.existsSync(path.join('public',image.src)) && image.alt && image.width > 0);
  for (const [,route] of product.related) assert.ok(fs.existsSync(path.join('app',route,'page.tsx')), 'Missing related route '+route);
  const graph = selected.selectedProductSchema(product,now)['@graph'];
  const entity = graph.find(node=>node['@type']==='Product');
  const offer = merchants.getMerchantOffer(product.id);
  assert.equal(entity.offers.price,offer.price.amount);
  assert.equal(entity.offers.seller.name,offer.merchantName);
  assert.ok(!('availability' in entity.offers), 'Weekly observations are not live stock');
  assert.ok(!('review' in entity) && !('aggregateRating' in entity));
  assert.ok(!JSON.stringify(graph).includes('amazon.se'), 'No unsupported numeric Amazon offer');
  const nextMonth = Date.parse('2026-10-14T12:00:00+02:00');
  assert.ok(price.getVerifiedMerchantPrice(offer.price,nextMonth), 'Weekly deadline must not hide the dated price');
  if (product.campaignEndsAt) {
    const end = Date.parse(product.campaignEndsAt);
    assert.equal(selected.hasCurrentStructuredPrice(product,end-1),true);
    assert.equal(selected.hasCurrentStructuredPrice(product,end),false);
    assert.equal(selected.getSelectedOfferState(product,end).campaignActive,false);
    assert.ok(!selected.selectedProductSchema(product,end)['@graph'][0].offers);
  }
}
const tapo = selected.getSelectedProduct('tapo-c520ws-single');
assert.equal(selected.selectedProductSchema(tapo,now)['@graph'][0].offers.price,1099,'Membership price must not become unconditional price');
assert.equal(selected.getSelectedOfferState(tapo,now).member.amount,689);
assert.equal(selected.getSelectedOfferState(tapo,Date.parse(tapo.memberPrice.endsAt)).member,undefined);
assert.equal(amazon.getAmazonOffer('beauty-of-joseon-propolis-serum').asin,'B086VKZZZY');
for (const id of ['anker-prime-300w-26250mah','linocell-wireless-carplay-q1m','ole-henriksen-pout-strawberry-12ml','lumene-cc-medium-30ml','amika-hydro-rush-leave-in-200ml','la-roche-posay-cicaplast-b5-100ml']) {
  assert.equal(amazon.getAmazonOffer(id),undefined,'Unconfirmed matching must not create a comparison');
}
const lykoPrices = {'ole-henriksen-pout-strawberry-12ml':198,'lumene-cc-medium-30ml':167,'amika-hydro-rush-leave-in-200ml':349,'la-roche-posay-cicaplast-b5-100ml':197,'wella-sp-luxeoil-100ml':424};
for (const [id, amount] of Object.entries(lykoPrices)) {
  const offer = merchants.getMerchantOffer(id,'lyko');
  assert.equal(offer.linkKind,'affiliate','Use the validated Lyko program link');
  const url = new URL(offer.href);
  assert.equal(url.hostname,'ion.lyko.com');
  assert.equal(url.searchParams.get('a'),'1117786221');
  assert.equal(url.searchParams.get('as'),'2110221551');
  assert.equal(url.searchParams.get('url'),offer.price.source,'Tracking destination must match exact variant');
  assert.equal(selected.selectedProductSchema(selected.getSelectedProduct(id),now)['@graph'][0].offers.price,amount,'Conditional combo price must not become a single-item offer');
}
assert.equal(amazon.getAmazonOffer('wella-sp-luxeoil-100ml').asin,'B009ZVHWW4');
const cicaplast = selected.getSelectedProduct('la-roche-posay-cicaplast-b5-100ml');
assert.equal(cicaplast.path,'/skonhet/cicaplast-b5','Reuse family canonical');
assert.equal(cicaplast.gtin,'3337875816847');
assert.ok(cicaplast.images.every(image=>image.src.includes('100ml')),'Never reuse old 40 ml packshots');
console.log('PASS: fifteen unique routes, sources/images/internal links, single-item merchant prices, no fake ratings/live stock/Amazon prices, weekly persistence, campaign/member boundaries, generated Lyko links and exact Wella match.');
