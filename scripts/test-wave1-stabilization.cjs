/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node verification. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
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

const { selectedProducts, selectedProductSchema } = load('@/lib/selected-products');
const { partnerComparisons, comparisonSchema } = load('@/lib/partner-comparisons');
const { getProductTradeoffs } = load('@/lib/selected-product-tradeoffs');
const waveProducts = selectedProducts.filter(product => product.decisionSections?.length);
assert.equal(waveProducts.length, 14, 'All 14 wave-1 product guides are covered');
assert.equal(partnerComparisons.length, 9, 'All nine wave-1 comparisons are covered');

let faqQuestions = 0;
function checkQuestions(schema, sections) {
  const faq = schema['@graph'].find(node => node['@type'] === 'FAQPage');
  assert.ok(faq, 'FAQPage exists');
  assert.equal(faq.mainEntity.length, sections.length);
  faq.mainEntity.forEach((question, index) => {
    assert.equal(question.name, sections[index].question, 'Question matches the visible H2');
    assert.equal(question.acceptedAnswer.text, sections[index].answer, 'Answer matches the visible first paragraph');
    faqQuestions++;
  });
}

const now = Date.parse('2026-09-29T12:00:00Z');
let oneSided = 0;
for (const product of waveProducts) {
  checkQuestions(selectedProductSchema(product, now), product.decisionSections);
  const tradeoffs = getProductTradeoffs(product);
  assert.ok(tradeoffs.advantages.length || tradeoffs.limitations.length, `${product.id}: no tradeoffs`);
  if (!tradeoffs.advantages.length || !tradeoffs.limitations.length) oneSided++;
  for (const items of Object.values(tradeoffs)) {
    assert.ok(items.length === 0 || (items.length >= 2 && items.length <= 4), `${product.id}: invalid bullet count`);
  }
  for (const item of tradeoffs.advantages) {
    assert.ok(product.facts.some(([label, value]) => `${label}: ${value}` === item), `${product.id}: advantage is not a record fact`);
  }
  for (const item of tradeoffs.limitations) {
    assert.ok(product.decisionSections.some(section => section.answer.includes(item)
      && section.sourceUrls.some(url => product.sources.some(source => source.url === url))), `${product.id}: limitation lacks a sourced answer`);
  }
}
for (const page of partnerComparisons) checkQuestions(comparisonSchema(page, now), page.sections);
const rise = selectedProducts.find(product => product.id === 'ghd-rise');
assert.ok(rise.metaTitle.length <= 60);
assert.equal(rise.heading, 'ghd Rise Volumising Hot Brush – fungerar den bara på torrt hår?');
assert.equal(rise.targetQuery, 'ghd rise volumising hot brush');
assert.equal(rise.secondaryQuery, 'ghd Rise: fungerar en värmeborste bara på torrt hår?');
assert.ok(!getProductTradeoffs({ ...waveProducts[0], id: 'not-wave-1' }).advantages.length);
console.log(`PASS: 23 FAQPages, ${faqQuestions} exact visible questions; 14 sourced tradeoff blocks (${oneSided} intentionally one-sided); ghd title ${rise.metaTitle.length} characters.`);
