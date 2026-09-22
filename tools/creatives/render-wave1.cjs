/* eslint-disable @typescript-eslint/no-require-imports -- Local deterministic asset builder. */
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const {pathToFileURL}=require('node:url');
const sharp=require('sharp');
const {chromium}=require(process.argv[2]||'playwright');
const root=path.resolve(__dirname,'../..');
const evidence=path.resolve(process.argv[3]);
const dataFile=path.join(root,'lib/selected-product-data.json');
const comparisonFile=path.join(root,'lib/partner-comparison-data.json');
const records=JSON.parse(fs.readFileSync(dataFile,'utf8'));
const comparisons=JSON.parse(fs.readFileSync(comparisonFile,'utf8'));
const copy=require('./wave1-copy.json');
const template=fs.readFileSync(path.join(__dirname,'card.html'),'utf8');
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
const esc=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const writeJson=(file,data)=>fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
async function main(){
 fs.mkdirSync(path.join(__dirname,'generated'),{recursive:true});fs.mkdirSync(path.join(__dirname,'fonts'),{recursive:true});
 const css=fs.readdirSync(path.join(root,'.next/static/chunks')).filter(f=>f.endsWith('.css')).map(f=>fs.readFileSync(path.join(root,'.next/static/chunks',f),'utf8')).join('');
 const faces=css.match(/@font-face\{[^}]+\}/g)||[];
 for(const [family,name]of [['Playfair Display','playfair'],['Inter','inter']]){
  const face=faces.find(f=>f.includes('font-family:'+family+';')&&f.includes('U+??'));
  if(!face)throw Error('Build font not found '+family);
  const filename=face.match(/media\/([^)]*)/)[1];
  fs.copyFileSync(path.join(root,'.next/static/media',filename),path.join(__dirname,'fonts',name+'-latin.woff2'));
 }
 // Preserve the source response bytes while correcting extensions to their actual format.
 for(const p of records.filter(p=>copy[p.id])){
  let src=path.join(root,'public',p.image.src);
  if(!fs.existsSync(src)){const dir=path.dirname(src);const found=fs.readdirSync(dir).find(f=>/^1\.(jpg|png|webp)$/.test(f));if(!found)throw Error('Missing original '+p.id);src=path.join(dir,found);p.image.src=path.posix.join(path.posix.dirname(p.image.src),found);}
  const m=await sharp(src).metadata();
  const ext=m.format==='jpeg'?'jpg':m.format;const correct=p.image.src.replace(/\.[^.]+$/,'.'+ext);
  if(correct!==p.image.src){fs.renameSync(src,path.join(root,'public',correct));p.image.src=correct;}
 }
 writeJson(dataFile,records);
 const pages=[...records.filter(p=>copy[p.id]),...comparisons];
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const tab=await browser.newPage();const manifest=[];
 try{for(const p of pages){
  const isComparison=Boolean(p.productIds);const products=isComparison?p.productIds.map(id=>records.find(p=>p.id===id)):[p];
  const [headline,tension,points]=copy[p.id];
  const merchantNames=[...new Set(products.flatMap(p=>[p.offer,...(p.additionalOffers||[])]).map(o=>o.merchantName))].join(' och ');
  const dir='/products/selected/'+(isComparison?'comparison-'+p.id:p.id);
  fs.mkdirSync(path.join(root,'public',dir),{recursive:true});
  const sources=products.map(p=>{const bytes=fs.readFileSync(path.join(root,'public',p.image.src));if(hash(bytes)!==p.image.sha256)throw Error('Changed source '+p.id);return {id:p.id,path:p.image.src,sha256:p.image.sha256,source:p.image.source,credit:p.image.credit};});
  const entry={id:p.id,route:p.path,headline,originalSources:sources,assets:[],D:'not produced yet',E:'omitted: no necessary visible-detail callout',approval:'local draft; founder review required',generatedAt:new Date().toISOString()};
  for(const [kind,width,height]of [['A',1200,630],['B',1000,1500],['C',1200,630],['C-portrait',1000,1500]]){
   const portrait=height===1500;const decision=kind.startsWith('C');
   const filename=`${p.id}-${kind}.html`;const htmlPath=path.join(__dirname,'generated',filename);
   const output=kind==='A'?`/og/wave1-${p.id}.webp`:`${dir}/${kind.toLowerCase()}.webp`;
   const photos='<div class="photos">'+products.map(p=>`<figure><img alt="${esc(p.image.alt)}" src="../../../public${p.image.src}"></figure>`).join('')+'</div>';
   const selectedRows=isComparison?p.rows.filter(row=>row.slice(1).join(' ').length<120).slice(0,3):p.facts.filter(([label])=>!['Exakt variant','Artikel hos butiken'].includes(label)).slice(0,3);
   const matrix='<div class="matrix">'+selectedRows.map(row=>`<section><h2>${esc(row[0])}</h2>${isComparison?`<b>${esc(products[0].shortName||products[0].name)}</b><p>${esc(row[1])}</p><b>${esc(products[1].shortName||products[1].name)}</b><p>${esc(row[2])}</p>`:`<p>${esc(row[1])}</p>`}</section>`).join('')+'</div>';
   const content=decision?`<p class="deck">${esc(headline)}</p>${matrix}`:`<div class="body"><p class="tension">${esc(tension)}</p>${photos}</div>`+(portrait?`<ul class="points">${points.map(p=>'<li>'+esc(p)+'</li>').join('')}</ul><div class="cta">Läs guiden på smartartai.se</div>`:'');
   const vars={title:headline,width,height,classes:[portrait?'portrait':'',decision?'decision':''].join(' '),brand:kind==='B'?esc('Annons / Reklam för '+merchantNames):'Elins val',eyebrow:decision?'Beslutsöversikt':kind==='B'?'':'Frågan före köpet',headline:esc(decision?'Vilken passar dig?':headline),content,credit:decision?'Fakta och källor i guiden · Ingen egen produkttestning':esc('Produktbild: '+[...new Set(products.map(p=>p.offer.merchantName))].join(' / '))+' <span> · smartartai.se</span>'};
   const html=template.replace(/\{\{(\w+)\}\}/g,(_,key)=>vars[key]);fs.writeFileSync(htmlPath,html);
   await tab.setViewportSize({width,height});await tab.goto(pathToFileURL(htmlPath).href);await tab.evaluate(()=>document.fonts.ready);await tab.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode())));
   const metrics=await tab.evaluate(()=>{const h=document.querySelector('h1');const s=getComputedStyle(h);return {headlineLines:Math.round(h.clientHeight/parseFloat(s.lineHeight)),headlineFont:parseFloat(s.fontSize),overflow:document.documentElement.scrollWidth>innerWidth,images:[...document.images].map(i=>({loaded:i.complete&&i.naturalWidth>0,height:i.getBoundingClientRect().height})),contentBottom:Math.max(...[...document.querySelectorAll('.matrix,.points,.cta,.body')].map(e=>e.getBoundingClientRect().bottom))};});
   if(metrics.overflow||(!decision&&kind==='A'&&metrics.headlineLines>2)||metrics.contentBottom>height-60||metrics.images.some(i=>!i.loaded))throw Error('Visual layout failed '+p.id+' '+kind+' '+JSON.stringify(metrics));
   const png=await tab.screenshot();const bytes=await sharp(png).webp({quality:88,effort:6}).toBuffer();
   if(kind!=='B'&&bytes.length>250000)throw Error('Image too large '+p.id+' '+kind);
   fs.writeFileSync(path.join(root,'public',output),bytes);
   entry.assets.push({kind,tier:decision?2:1,path:output,width,height,bytes:bytes.length,sha256:hash(bytes),htmlSource:'tools/creatives/generated/'+filename,metrics,sourcePackshotsUnchanged:true});
  }
  p.visual={...(p.visual||{}),hero:entry.assets[0].path,infographic:entry.assets[2].path};manifest.push(entry);console.log(p.id+' A/B/C/C-portrait verified');
 }
 }finally{await browser.close();}
 writeJson(dataFile,records);writeJson(comparisonFile,comparisons);writeJson(path.join(evidence,'image-manifest.json'),manifest);
 const rel=path.relative(evidence,path.join(root,'public')).replaceAll('\\','/');
 fs.writeFileSync(path.join(evidence,'image-review.html'),'<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><title>مراجعة صور الموجة الأولى</title><style>body{font:18px Arial;background:#faf2ee;color:#54283a;margin:32px}section{border-top:1px solid #bc929f;padding:24px 0}.assets{display:flex;gap:20px;flex-wrap:wrap;align-items:start}figure{margin:0}img{max-width:100%;height:auto;border:1px solid #bc929f}figcaption{max-width:390px;font-size:14px;margin:10px 0}a{color:inherit}</style><h1>الموجة الأولى — مراجعة الصور المحلية</h1><p>14 منتجًا + 9 مقارنات. L’ANZA ومقارنته معلّقان؛ لا صور بديلة مخترعة. كل صورة تحتاج اعتماد عزام قبل النشر. A معروضة بعرض 390 بكسل.</p>'+manifest.map(p=>`<section><h2>${esc(p.headline)}</h2><p dir="ltr">${p.route}</p><div class="assets">${p.assets.map(a=>`<figure><a href="${rel+a.path}"><img loading="lazy" src="${rel+a.path}" width="${a.kind==='A'?390:240}" alt="${esc(p.headline)} ${a.kind}"></a><figcaption>${a.kind} · Tier ${a.tier} · ${a.width}×${a.height} · ${Math.ceil(a.bytes/1024)} KB</figcaption></figure>`).join('')}</div><p>القرار: ☐ اعتماد ☐ تعديل — الأصل محفوظ ببصمته؛ لا ادعاء اختبار.</p></section>`).join(''));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
