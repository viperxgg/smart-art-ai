const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');
const path = require('node:path');
const moduleResult = { exports: {} };
const filename = path.resolve(__dirname, '../lib/decision-record.ts');
const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
vm.runInThisContext(`(function(module,exports){${code}\n})`, { filename })(moduleResult, moduleResult.exports);
const { validateDecisionRecord } = moduleResult.exports;
const record = {
  reviewedAt: '2026-09-08',
  options: ['a', 'b'].map(productSlug => ({ productSlug, model: productSlug, variant: 'Variant A', chooseIf: 'A need', avoidIf: 'A limitation', sourceIds: ['S1'], merchantVariantVerified: false })),
  payMoreWhen: 'A documented difference', noPurchaseWhen: 'Existing item works',
  swedishContext: 'Variant check required', testing: 'Not tested', limitations: 'No head-to-head test',
  sources: [{ id: 'S1', title: 'Fixture', url: 'https://example.com/product', checkedAt: '2026-09-08', supports: 'Model specification' }],
};
assert.doesNotThrow(() => validateDecisionRecord(record, ['a', 'b']));
assert.throws(() => validateDecisionRecord(record, ['b', 'a']));
for (const mutate of [
  r => { r.options[0].sourceIds = ['missing']; },
  r => { r.options[0].avoidIf = ''; },
  r => { r.noPurchaseWhen = ''; },
  r => { r.testing = ''; },
  r => { r.sources.push({ ...r.sources[0] }); },
  r => { r.sources[0].url = 'javascript:alert(1)'; },
  r => { r.reviewedAt = '2026-02-31'; },
  r => { r.sources[0].status = 'unchecked'; },
  r => { r.sources[0].status = 'unavailable'; r.options[0].merchantVariantVerified = true; },
]) {
  const invalid = structuredClone(record);
  mutate(invalid);
  assert.throws(() => validateDecisionRecord(invalid, ['a', 'b']));
}
const unavailable = structuredClone(record);
unavailable.sources[0].status = 'unavailable';
assert.doesNotThrow(() => validateDecisionRecord(unavailable, ['a', 'b']));
console.log('PASS: decision identity, source references, provenance, dates, caveats and no-purchase/testing fields validated.');
