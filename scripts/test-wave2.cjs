/* eslint-disable @typescript-eslint/no-require-imports -- Standalone record acceptance gate. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const data = require('../lib/selected-product-data.json');
const comparisons = require('../lib/partner-comparison-data.json');
const products = data.filter(record => record.selected && record.wave === 2);
const pages = [...products, ...comparisons.filter(record => record.wave === 2)];
assert.equal(products.length, 8);
assert.equal(pages.length, 17);
for (const page of pages) {
  assert.equal(page.publicationStatus, 'draft');
  assert.equal(page.publishedAt, undefined, 'No publication timestamp before an approved release');
  assert.deepEqual(page.changes, [], 'No publish event before release');
  assert.ok(page.targetQuery && /14 days/.test(page.hypothesis));
  assert.ok(page.metaTitle.length <= 60);
  assert.ok(page.description.length >= 120 && page.description.length <= 155);
  const words = page.answer.trim().split(/\s+/).length;
  assert.ok(words >= 40 && words <= 70, `${page.id}: ${words} answer words`);
  assert.ok(fs.existsSync(`app${page.path}/page.tsx`));
  assert.ok(page.sources.length >= 2 && page.sources.every(source => source.url.startsWith('https://') && source.checkedAt.startsWith('2026-10-01')));
  const sections = page.decisionSections || page.sections;
  assert.ok(sections.length >= 3);
  for (const section of sections) {
    assert.ok(section.question.endsWith('?') && section.answer);
    if (section.sourceUrls) assert.ok(section.sourceUrls.every(url => page.sources.some(source => source.url === url)), `${page.id}: section source missing from dated ledger`);
  }
  if (page.productIds) assert.ok(page.productIds.every(id => data.some(record => record.id === id)));
}
const ghd = data.find(record => record.id === 'ghd-bodyguard-120ml');
assert.equal(ghd.offer.merchantId, 'lyko');
assert.equal(ghd.offer.price, undefined, 'WOW without campaign end cannot become an ordinary price');
assert.ok(ghd.offer.priceUnavailableReason);
assert.equal(ghd.additionalOffers.length, 0, 'A mismatched EAN must not generate a merchant button');
assert.equal(ghd.gtin, '5060356734320');
for (const id of ['kerastase-elixir-ultime', 'beauty-of-joseon-propolis-serum']) {
  const record = data.find(record => record.id === id);
  const lyko = [record.offer, ...(record.additionalOffers || [])].find(offer => offer.merchantId === 'lyko');
  assert.equal(lyko.price, undefined);
  assert.ok(lyko.priceUnavailableReason);
}
for (const product of products.filter(product => product !== ghd)) assert.equal(1 + product.additionalOffers.length, 2);
assert.equal(data.find(record => record.id === 'cetaphil-gentle-cleanser-236ml').variant, '236 ml');
console.log('PASS: 17 question drafts, source ledgers, publication boundaries and explicit price/identity blocks.');
