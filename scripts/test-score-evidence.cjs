const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');
const path = require('node:path');

const cache = new Map();
function load(relative) {
  const filename = path.resolve(__dirname, '..', relative);
  if (cache.has(filename)) return cache.get(filename).exports;
  const module = { exports: {} };
  cache.set(filename, module);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInThisContext(`(function(require,module,exports){${code}\n})`, { filename })(
    (id) => id.startsWith('@/') ? load(id.slice(2) + '.ts') : require(id), module, module.exports,
  );
  return module.exports;
}

const { hasReviewedScore } = load('lib/score-evidence.ts');
const score = { value: 20, performance: 20, promise: 20, proven: 10, total: 70, verdict: 'Test fixture only' };
const evidence = {
  productSlug: 'test-model', modelAndVariant: 'Test model 1, variant A',
  reviewedAt: '2026-09-08', reviewUrl: 'https://example.com/review', score,
  criteria: Object.fromEntries(['value', 'performance', 'promise', 'proven'].map(key => [key, {
    rationale: 'Test fixture rationale', sources: ['https://example.com/source'],
  }])),
};
assert.equal(hasReviewedScore('test-model', score, evidence), true);
assert.equal(hasReviewedScore('test-model', score, undefined), false);
assert.equal(hasReviewedScore('other-model', score, evidence), false);
assert.equal(hasReviewedScore('test-model', { ...score, total: 95 }, evidence), false);
assert.equal(hasReviewedScore('test-model', { ...score, verdict: 'Changed conclusion' }, evidence), false);
for (const key of ['value', 'performance', 'promise', 'proven']) {
  const missing = structuredClone(evidence);
  missing.criteria[key].sources = [];
  assert.equal(hasReviewedScore('test-model', score, missing), false);
  missing.criteria[key].sources = ['javascript:alert(1)'];
  assert.equal(hasReviewedScore('test-model', score, missing), false);
}
const scores = load('lib/scores.ts');
assert.equal(scores.getEditorialScore('cerave-hydrating-cleanser'), undefined);
assert.equal(scores.buildElinReviewNode('cerave-hydrating-cleanser'), undefined);
const { buildProductNode } = load('lib/product-schema.ts');
const product = { slug: 'cerave-hydrating-cleanser', title: 'Fixture', category: 'skonhet', brand: 'Fixture', image: '/fixture.jpg', summary: 'Fixture' };
assert.equal(buildProductNode({ product, url: '/fixture' }), null);
const userRated = buildProductNode({ product, url: '/fixture', aggregateRating: { ratingValue: 4, reviewCount: 2 } });
assert.equal(userRated.review, undefined);
assert.equal(userRated.aggregateRating.reviewCount, 2);
console.log('PASS: missing, mismatched and invalid score evidence suppressed; public score/schema omitted; genuine user aggregate kept separate.');
