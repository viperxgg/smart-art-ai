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


const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} }; cache.set(file, module);
  const code = ts.transpileModule(read(file), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(code, { module, exports: module.exports, URL, require: id => id.startsWith('@/') ? load(id.slice(2)+'.ts') : require(id) });
  return module.exports;
}
const { products, getProductPageHref } = load('lib/products.ts');
const { filterProducts } = load('lib/product-search.ts');
const slugs = query => Array.from(filterProducts(query), product => product.slug);
assert.deepEqual(slugs('Cetaphil').sort(), ['cetaphil-gentle-cleanser', 'cetaphil-moisturizing-cream'], 'Competitor mentions must not contaminate direct brand search');
assert.ok(slugs('CeraVe').includes('cerave-hydrating-cleanser'));
assert.ok(!slugs('CeraVe').includes('cetaphil-gentle-cleanser'));
assert.deepEqual(slugs('flakt'), slugs('fläkt'), 'Swedish diacritics remain searchable');
assert.ok(slugs('Kobo Clara').includes('kobo-clara-bw'));
assert.ok(slugs('bibliotek').includes('kobo-clara-bw'), 'Need-based fallback remains available');
assert.deepEqual(slugs('   '), []);
assert.deepEqual(slugs('nonexistent-product-zzqq'), []);

const { getElinProductEvidence } = load('lib/elin-product-evidence.ts');
const prices = load('lib/price-tier.ts');
const { getProductDecision } = load('lib/product-decisions.ts');
const entries=products.map(product=>({product,evidence:getElinProductEvidence(product)}));
const reviewed=entries.filter(entry=>entry.evidence.decision);
const unreviewed=entries.filter(entry=>!entry.evidence.decision);
assert.ok(reviewed.length>0 && unreviewed.length>0);
for (const {product,evidence} of reviewed) {
  assert.equal(JSON.stringify(evidence.decision), JSON.stringify(getProductDecision(product.slug)));
  assert.equal(evidence.title,evidence.decision.options[0].model);
  assert.ok(evidence.summary.includes(evidence.decision.options[0].avoidIf));
}
for (const {evidence} of unreviewed) assert.equal(evidence.status,'not_reviewed');
const target=reviewed.find(({product})=>product.slug==='amazon-basics-gjutjarns-kettlebell');
assert.equal(target.evidence.status,'incomplete_sources');
const poisoned={...target.product, summary:'LEGACY_SENTINEL', badges:['LEGACY_SENTINEL'], specs:[{label:'LEGACY_SENTINEL',value:'LEGACY_SENTINEL'}], evaluation:{verdict:'LEGACY_SENTINEL'}, amazonReviewSignal:{ratingSummary:'LEGACY_SENTINEL',highlights:['LEGACY_SENTINEL'],cautions:['LEGACY_SENTINEL']}};
const lookup=slug=>slug===poisoned.slug?poisoned:products.find(p=>p.slug===slug);
const { searchProducts,toRichCard }=extractFunctions('app/api/elin/route.ts',['normalizeSearchText','getSearchTerms','parseSearchProductsInput','searchProducts','toRichCard'],{
 ...prices,getElinProductEvidence,getProductBySlug:lookup,getProductPageHref,getEditorialScore:()=>undefined,
 categories:new Set(['traning','skonhet','halsa']),priceTiers:new Set(['budget','mellan','premium']),searchStopWords:new Set(),
});
const {toKnowledgeProduct}=extractFunctions('lib/elin-knowledge.ts',['oneLineSummary','toKnowledgeProduct'],{...prices,getElinProductEvidence,getProductPageHref,getEditorialScore:()=>undefined});
const knowledge=[toKnowledgeProduct(poisoned),toKnowledgeProduct(unreviewed[0].product)];
assert.ok(!JSON.stringify(knowledge).includes('LEGACY_SENTINEL'));
const result=searchProducts(knowledge,{query:'Amazon Basics'});
assert.ok(result.results.some(r=>r.slug===poisoned.slug));
assert.ok(!JSON.stringify(result).includes('LEGACY_SENTINEL'));
assert.equal(result.results.find(r=>r.slug===poisoned.slug).decision.options[0].merchantVariantVerified,false);
assert.equal(toRichCard(unreviewed[0].product.slug,'Invented recommendation'),null);
for (const {product} of unreviewed) assert.equal(toRichCard(product.slug,'Invented recommendation'),null);
for (const {product,evidence} of reviewed) {
  const actualCard=toRichCard(product.slug,'Invented recommendation');
  assert.equal(actualCard.image,'');
  assert.equal(actualCard.varfor,evidence.decision.options[0].chooseIf);
  if (!evidence.decision.options[0].merchantVariantVerified) assert.equal(actualCard.amazonUrl,'');
}
const card=toRichCard(poisoned.slug,'Invented recommendation');
assert.equal(card.varfor,target.evidence.decision.options[0].chooseIf);
assert.equal(card.caution,target.evidence.decision.options[0].avoidIf);
assert.equal(card.noPurchaseWhen,target.evidence.decision.noPurchaseWhen);
assert.equal(card.image,''); assert.equal(card.amazonUrl,'');
assert.equal(card.rating,''); assert.equal(card.bestseller,false); assert.equal(card.video,null);
assert.ok(!JSON.stringify(card).includes('LEGACY_SENTINEL'));
const {ProductCardView,WishlistPanel,getDisplayCard}=extractFunctions('components/elin/ElinChat.tsx',['ProductCardView','WishlistPanel','getDisplayCard'],{
 useState:React.useState,
 Link:props=>React.createElement('a',props),Image:props=>React.createElement('img',props),
 Heart:()=>null,ArrowUpRight:()=>null,Trash2:()=>null,
});
const legacy={...card,evidenceVersion:undefined,image:'/legacy.webp',amazonUrl:'https://amzn.to/legacy',rating:'LEGACY_SENTINEL',varfor:'LEGACY_SENTINEL',verdict:'LEGACY_SENTINEL',noPurchaseWhen:'LEGACY_SENTINEL'};
const display=getDisplayCard(legacy);
assert.equal(display.image,'');assert.equal(display.amazonUrl,'');assert.equal(display.varfor,'');
assert.equal(legacy.image,'/legacy.webp','Rendering must not mutate stored history');
const renderCard=item=>renderToStaticMarkup(React.createElement(ProductCardView,{product:item,isSaved:false,onToggleSave:()=>{},onAsk:()=>{}}));
const html=renderCard(card),oldHtml=renderCard(legacy);
assert.ok(html.includes('Viktig begränsning:'));
assert.ok(html.includes('När kan du avstå?'));
assert.ok(html.includes('Testunderlag:'));
assert.ok(!html.includes('<img') && !html.includes('amzn.to'));
assert.ok(!oldHtml.includes('LEGACY_SENTINEL') && !oldHtml.includes('<img') && !oldHtml.includes('amzn.to'));
assert.ok(oldHtml.includes('Äldre sparad produktpost'));
const wishlist=renderToStaticMarkup(React.createElement(WishlistPanel,{items:[legacy],onRemove:()=>{}}));
assert.ok(!wishlist.includes('<img')&&!wishlist.includes('amzn.to')&&!wishlist.includes('LEGACY_SENTINEL'));
const {getSafeElinTextHref,renderInlineMarkdown}=extractFunctions('components/elin/ElinChat.tsx',['getSafeElinTextHref','renderInlineMarkdown']);
assert.equal(getSafeElinTextHref('/traning/kettlebell/amazon-basics#decision-title'),'/traning/kettlebell/amazon-basics#decision-title');
for (const url of ['https://amzn.to/example','https://example.com/buy','//example.com','/\\example.com','/\n/example.com']) assert.equal(getSafeElinTextHref(url),null);
const textLinks=renderToStaticMarkup(React.createElement('p',null,renderInlineMarkdown('[Butik](https://amzn.to/example) [Guide](/traning/kettlebell/amazon-basics)')));
assert.ok(!textLinks.includes('href="https://'));
assert.ok(textLinks.includes('href="/traning/kettlebell/amazon-basics"'));
if(process.argv[2]){
 const {pathToFileURL}=require('node:url');
 const cssDir=path.join(root,'.next/static/chunks');
 const css=fs.readdirSync(cssDir).filter(name=>name.endsWith('.css')).map(name=>'<link rel="stylesheet" href="'+pathToFileURL(path.join(cssDir,name)).href+'">').join('');
 fs.writeFileSync(process.argv[2],'<!doctype html><html lang="sv"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><base href="http://127.0.0.1:3111/"><title>Elin decision-card review</title>'+css+'<body class="bg-bg text-ink"><main class="mx-auto max-w-3xl p-5"><h1 class="text-2xl font-bold">Lokal granskning av Elins produktkort</h1><p class="my-4">Statisk rendering av de riktiga React-komponenterna med beslutsdata och en äldre testpost. Ingen AI-förfrågan har skickats. Knapparna i denna provsida är inte interaktiva.</p>'+html+'<h2 class="my-4 text-xl font-bold">Äldre sparad post</h2>'+oldHtml+'<h2 class="my-4 text-xl font-bold">Sparad lista</h2>'+wishlist+'</main></body></html>');
}
console.log(JSON.stringify({result:'PASS',catalogProducts:entries.length,decisionDrafts:reviewed.length,unreviewed:unreviewed.length,checks:'Real registry matching; legacy-claim poisoning excluded; unreviewed recommendation withheld; guarded card data; SSR caveats/no-purchase/testing visible; cached claims hidden without mutation. No API call.'}));
