const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = path.resolve(__dirname, '..');
function load(file) {
  const module = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(path.join(root,file),'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  vm.runInNewContext(code, {module,exports:module.exports,URL,require:id => {
    if (id === 'next/link') return {default: props => React.createElement('a',props)};
    if (id.startsWith('@/')) return load(id.slice(2)+'.ts');
    return require(id);
  }});
  return module.exports;
}
const ratings = load('lib/ratings.ts');
const legacy = {sourceUrl:'https://example.com/reviews',ratingSummary:'4,8 av 5 from old import',ratingCheckedAt:'2026-09-08',highlights:['LEGACY_HIGHLIGHT'],cautions:[]};
assert.equal(ratings.hasReviewedSignal(legacy),false,'A date and URL alone do not establish review evidence');
for (const summary of [legacy.ratingSummary,'4,8 av 5 (vid vår senaste kontroll)']) {
  assert.equal(ratings.formatRatingSummary(summary,legacy.ratingCheckedAt),'Vi har inget verifierat kundbetyg att visa.');
}
const receipt = {modelAndVariant:'Test fixture model, 200 ml',sourceUrl:legacy.sourceUrl,checkedAt:legacy.ratingCheckedAt,summary:legacy.ratingSummary,highlights:legacy.highlights,cautions:[],quotes:[{text:'FIXTURE_QUOTE',attribution:'Fixture reviewer',sourceUrl:'https://example.com/review/1'}]};
assert.equal(ratings.hasReviewedSignal({...legacy,reviewEvidence:receipt}),true);
assert.equal(ratings.hasReviewedSignal({...legacy,ratingSummary:'changed',reviewEvidence:receipt}),false);
assert.equal(ratings.hasReviewedSignal({...legacy,highlights:['changed'],reviewEvidence:receipt}),false);
for (const patch of [{checkedAt:'2026-02-31'},{sourceUrl:'javascript:alert(1)'},{sourceUrl:'https://name:password@example.com/'},{modelAndVariant:''}]) assert.equal(ratings.hasReviewEvidence({...receipt,...patch}),false);
const {AmazonReviewSignals} = load('components/AmazonReviewSignals.tsx');
assert.equal(renderToStaticMarkup(React.createElement(AmazonReviewSignals,{signal:legacy})), '');
const {TrustReviewLayers} = load('components/TrustReviewLayers.tsx');
const props={amazonSummary:legacy.ratingSummary,ratingCheckedAt:legacy.ratingCheckedAt,amazonQuotes:[{text:'UNSOURCED_QUOTE',attribution:'Someone'}]};
const hidden=renderToStaticMarkup(React.createElement(TrustReviewLayers,props));
assert.ok(hidden.includes('Skriv en recension'),'Real reader participation stays available');
assert.ok(!hidden.includes('UNSOURCED_QUOTE') && !hidden.includes('4,8 av 5') && !hidden.includes('Vad Amazon-köparna säger'));
const verified=renderToStaticMarkup(React.createElement(TrustReviewLayers,{...props,reviewEvidence:receipt,amazonQuotes:[...props.amazonQuotes,...receipt.quotes]}));
assert.ok(verified.includes('FIXTURE_QUOTE') && !verified.includes('UNSOURCED_QUOTE'));
assert.ok(verified.includes('källan kontrollerad 2026-09-08'));
console.log('PASS: missing receipts, legacy dates, mismatches and unsupported quotes withheld; matching fixture supported; reader review action preserved. No live review verified.');
