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
const { withDecisionPick } = load('lib/decision-pick.ts');
const pickGroups = load('lib/sommar.ts');
const allPicks = ['sommarPicks','smartSommarPicks','traningsPicks','resaPicks'].flatMap(key => pickGroups[key]);
const currentPicks = allPicks.filter(pick => getProductDecision(pick.productSlug));
assert.ok(currentPicks.length > 0);
for (const pick of currentPicks) {
 const decision = getProductDecision(pick.productSlug);
 assert.equal(pick.headline, decision.options[0].model);
 assert.equal(pick.product.title, decision.options[0].model);
 assert.equal(pick.caution, decision.options[0].avoidIf);
 assert.equal(pick.verdict, decision.noPurchaseWhen);
 assert.equal(pick.amazonQuotes.length, 0);
}
const legacyPick = {...currentPicks[0], cardHook:'STALE_PICK_CLAIM', caution:'STALE_PICK_CLAIM', headline:'STALE_PICK_CLAIM', metaDescription:'STALE_PICK_CLAIM', amazonQuotes:[{text:'STALE_PICK_CLAIM',attribution:'unknown'}]};
assert.ok(!JSON.stringify(withDecisionPick(legacyPick)).includes('STALE_PICK_CLAIM'));
assert.equal(legacyPick.cardHook,'STALE_PICK_CLAIM','Projection must not mutate the historical record');
const unreviewedPick=allPicks.find(pick=>!getProductDecision(pick.productSlug));
assert.ok(unreviewedPick);
assert.equal(withDecisionPick(unreviewedPick),unreviewedPick,'Do not invent evidence for an unreviewed product');
const titlePoisonedPick={...currentPicks[0],product:{...currentPicks[0].product,title:'STALE_PRODUCT_TITLE'}};
assert.equal(withDecisionPick(titlePoisonedPick).product.title,getProductDecision(titlePoisonedPick.productSlug).options[0].model);
assert.equal(titlePoisonedPick.product.title,'STALE_PRODUCT_TITLE','Nested product projection must not mutate the catalogue');
const {ComparisonCard}=extractFunctions('app/jamforelser/page.tsx',['ComparisonCard'],{
 getProductBySlug:slug=>({...products.find(p=>p.slug===slug),title:'STALE_PRODUCT_TITLE'}),
 getElinProductEvidence,getEditorialScore:()=>null,
 Link:props=>React.createElement('a',props),ProductBadges:()=>null,ScoreBadge:()=>null,ArrowUpRight:()=>null,
});
const comparisonHtml=renderToStaticMarkup(React.createElement(ComparisonCard,{comparison:{href:'/skonhet/bio-oil-eller-jojobaolja',shortTitle:'Bio-Oil eller jojobaolja?',description:'Formula före köp',badges:[],productSlugs:['bio-oil','kanzy-jojobaolja']}}));
assert.ok(comparisonHtml.includes('Bio-Oil Skincare Oil Original'));
assert.ok(comparisonHtml.includes('Kanzy Jojoba Oil 120 ml'));
assert.ok(!comparisonHtml.includes('STALE_PRODUCT_TITLE'),'Comparison discovery must not leak stale reviewed product names');
console.log(JSON.stringify({pickProjection:'PASS',totalPicks:allPicks.length,currentPicks:currentPicks.length}));

const {getApprovedProductImage}=load('lib/product-image-approvals.ts');
const {getProductImageNote}=load('lib/product-image-notes.ts');
const mediaBindings={getApprovedProductImage,getProductImageNote,getProductDecision,getProductPageHref,
 getEditorialScore:()=>null,categoryLabel:new Map(),
 Link:props=>React.createElement('a',props),Image:()=>React.createElement('img',{'data-test':'product-image'}),
 ScoreBadge:()=>null,ArrowUpRight:()=>null,ProductDecisionPreview:()=>null,
 SaveProductButton:({productTitle})=>React.createElement('button',null,'Spara '+productTitle)};
const {ProductCard}=extractFunctions('components/ProductCard.tsx',['ProductCard'],mediaBindings);
const {SearchResultCard}=extractFunctions('components/ProductSearch.tsx',['SearchResultCard'],mediaBindings);
for(const product of products){
 const cardMarkup=renderToStaticMarkup(React.createElement(ProductCard,{product}));
 const searchMarkup=renderToStaticMarkup(React.createElement(SearchResultCard,{product}));
 if(!getApprovedProductImage(product.slug,product.image)){
  assert.ok(!cardMarkup.includes('<img')&&!searchMarkup.includes('<img'),'Unapproved catalogue media must not render');
 }
 assert.ok(cardMarkup.includes('<button'),'Save control survives missing image');
 assert.ok(cardMarkup.includes('href="'+getProductPageHref(product)+'"'));
 assert.ok(searchMarkup.includes('href="'+getProductPageHref(product)+'"'));
}
console.log(JSON.stringify({mediaCards:'PASS',products:products.length,scope:'ProductCard and SearchResultCard SSR; no rights approval inferred'}));
const entries=products.map(product=>({product,evidence:getElinProductEvidence(product)}));
const reviewed=entries.filter(entry=>entry.evidence.decision);
const { AmazonPurchaseCta } = extractFunctions('components/AmazonPurchaseCta.tsx',['AmazonPurchaseCta'],{getProductDecision});
const { AmazonCta } = extractFunctions('components/AmazonCta.tsx',['AmazonCta'],{getProductDecision});
for (const {product,evidence} of reviewed) {
 if (!evidence.decision.options[0].merchantVariantVerified) {
  assert.equal(AmazonPurchaseCta({product}),null,'Shared purchase CTA must respect unverified variant');
  assert.equal(AmazonCta({product,href:product.amazonUrl}),null,'Panel CTA must respect unverified variant');
 }
}

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

// Exercise the actual fallback with every unreviewed catalogue item and poisoned legacy copy.
const { UnreviewedProductPage } = extractFunctions('components/UnreviewedProductPage.tsx', ['UnreviewedProductPage'], {
  Link: props => React.createElement('a', props, props.children),
  Breadcrumbs: () => null, buildBreadcrumbSchema: () => ({}), JsonLd: () => null,
  SaveProductButton: () => React.createElement('button', null, 'Spara'),
  ProductComments: props => React.createElement('section', {id:props.sectionId}, React.createElement('form', {id:props.formId})),
  process: {env:{}},
});
const { createProductReviewMetadata } = extractFunctions('lib/product-review-metadata.ts', ['createProductReviewMetadata'], {
  getProductDecision, createSeoMetadata: data => data, siteConfig: {url:'https://www.smartartai.se'},
});
for (const {product} of unreviewed) {
  const pick = {product:{...product,summary:'LEGACY_SENTINEL',specs:[{label:'LEGACY_SENTINEL',value:'LEGACY_SENTINEL'}]},href:getProductPageHref(product),reviewSectionId:'review-'+product.slug,reviewFormId:'form-'+product.slug,verdict:'LEGACY_SENTINEL',metaTitle:'LEGACY_SENTINEL',metaDescription:'LEGACY_SENTINEL'};
  const markup = renderToStaticMarkup(React.createElement(UnreviewedProductPage,{pick,reviews:[]}));
  assert.ok(!markup.includes('LEGACY_SENTINEL'));
  assert.ok(!markup.includes('<img'));
  assert.ok(!/amzn\.to|amazon\.[^/]+\/dp/.test(markup));
  assert.ok(markup.includes('När kan du avstå helt?'));
  assert.ok(markup.includes('review-'+product.slug) && markup.includes('form-'+product.slug));
  const metadata = createProductReviewMetadata(pick);
  assert.ok(!JSON.stringify(metadata).includes('LEGACY_SENTINEL'));
  assert.equal(metadata.image,undefined);
  assert.equal(metadata.url,'https://www.smartartai.se'+pick.href);
}
const { ProductReviewPage } = extractFunctions('app/(products)/_components/ProductReviewPage.tsx',['ProductReviewPage'], {
  getApprovedReviews: async()=>[],getProductDecision,
  ProductDecisionPage: ()=>null,UnreviewedProductPage,
});
(async()=>{
 for (const {product} of entries) {
  const view = await ProductReviewPage({pick:{product}});
  assert.equal(view.type===UnreviewedProductPage,!getProductDecision(product.slug),'Actual shared router preserves reviewed path and gates unknown records');
 }
 console.log(JSON.stringify({unreviewedPages:'PASS',fallbackProducts:unreviewed.length,routerProducts:entries.length,scope:'SSR with save/comment stubs; interaction verified separately'}));
})().catch(error=>{console.error(error);process.exitCode=1;});
