const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const root = path.resolve(__dirname, '..');
function evaluate(source, injected = {}) {
  const module = { exports: {} };
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  vm.runInNewContext(code, { module, exports: module.exports, require, ...injected });
  return module.exports;
}
function read(file) { return fs.readFileSync(path.join(root, file), 'utf8'); }
function extractFunctions(file, names, injected) {
  const source = read(file);
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const nodes = ast.statements.filter(node => ts.isFunctionDeclaration(node) && names.includes(node.name?.text));
  assert.equal(nodes.length, names.length, 'All tested production functions must be found');
  return evaluate(nodes.map(node => node.getText(ast)).join('\n') + `\nmodule.exports = {${names.join(',')}};`, injected);
}

const prices = evaluate(read('lib/price-tier.ts'));
const fixture = {
  slug: 'fixture', title: 'Fixture', brand: 'Amazon Basics', category: 'traning',
  priceTier: 'budget', summary: 'Billig premiumprodukt', badges: [],
  image: '/fixture.webp', amazonUrl: 'https://example.com/product',
  evaluation: { verdict: 'Fixture' }, specs: [], comments: [], uses: [], ugcVideos: [],
  amazonReviewSignal: { ratingSummary: '', highlights: [], cautions: [] },
};
for (const product of [fixture, { ...fixture, brand: 'Dior', priceTier: 'premium' }, { ...fixture, priceTier: undefined }, { ...fixture, slug: 'toString' }]) {
  assert.equal(prices.getPriceTier(product), null, 'Stored tiers, brand and marketing copy are not current price evidence');
  assert.equal(prices.getPriceTierDisplay(product), null);
}
const { PriceTierBadge } = evaluate(read('components/PriceTierBadge.tsx'), {
  require: id => id === '@/lib/price-tier' ? prices : require(id),
});
assert.equal(renderToStaticMarkup(React.createElement(PriceTierBadge, { product: fixture, showContext: true })), '');

const { searchProducts, buildProductIndex, toRichCard, hasBestsellerSignal } = extractFunctions('app/api/elin/route.ts', [
  'normalizeSearchText', 'getSearchTerms', 'parseSearchProductsInput', 'searchProducts', 'buildProductIndex', 'toRichCard', 'hasBestsellerSignal',
], {
  ...prices, searchStopWords: new Set(), categories: new Set(['traning', 'skonhet']),
  priceTiers: new Set(['budget', 'mellan', 'premium']),
  getProductBySlug: slug => slug === fixture.slug ? fixture : undefined,
  getEditorialScore: () => undefined, getProductPageHref: () => '/fixture', formatRatingSummary: () => '',
});
assert.equal(typeof hasBestsellerSignal, 'function');
const { toKnowledgeProduct } = extractFunctions('lib/elin-knowledge.ts', ['oneLineSummary', 'toKnowledgeProduct'], {
  ...prices, getEditorialScore: () => undefined, getProductPageHref: () => '/fixture',
});
const knowledge = [toKnowledgeProduct(fixture)];
assert.equal(knowledge[0].priceTier, null, 'The real knowledge mapper must not reintroduce a stored tier');
const result = searchProducts(knowledge, { query: 'Fixture', tier: 'budget', kategori: 'traning' });
assert.equal(result.results.length, 1, 'Missing price evidence must not make a matching product disappear');
assert.equal(result.priceFilterApplied, false);
assert.equal(result.requestedTier, 'budget');
assert.match(result.priceNotice, /inte filtrerade efter pris/);
assert.equal(result.results[0].priceTier, null);
assert.equal(searchProducts(knowledge, { query: 'Fixture', kategori: 'skonhet' }).results.length, 0, 'Category filtering still applies');
assert.match(buildProductIndex(knowledge, null, null), /ej verifierad\tej bedömd/);
const card = toRichCard('fixture', 'Fixture reason');
assert.equal(card.tier, null);
assert.equal(card.tierLabel, '');
assert.equal(card.tierIcon, '');
const { isProductCard } = extractFunctions('components/elin/ElinChat.tsx', ['isProductCard']);
assert.equal(isProductCard(card), true, 'Client must accept unknown-price cards');
assert.equal(isProductCard({ ...card, tier: 'invented' }), false);
console.log('PASS: unsupported price inference/badges removed; AI search preserves matches with an explicit missing-price notice, index/cards carry unknown price, client accepts them. No API request sent.');
