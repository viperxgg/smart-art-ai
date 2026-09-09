const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const code = ts.transpileModule(fs.readFileSync('lib/consent.ts','utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
function setup(failWrite=false, failRead=false) {
 const values=new Map(), target=new EventTarget();
 const window={localStorage:{getItem:k=>{if(failRead)throw Error('blocked');return values.get(k)??null},setItem:(k,v)=>{if(failWrite)throw Error('blocked');values.set(k,v)},removeItem:k=>values.delete(k)},addEventListener:target.addEventListener.bind(target),removeEventListener:target.removeEventListener.bind(target),dispatchEvent:target.dispatchEvent.bind(target)};
 const module={exports:{}};vm.runInNewContext(code,{module,exports:module.exports,window,Event,Date});
 return {api:module.exports,values,window};
}
for(const [write,read] of [[false,false],[true,false],[true,true]]){
 const {api}=setup(write,read);let updates=0;const unsub=api.subscribeToStoredConsent(()=>updates++);
 assert.equal(api.getServerConsentSnapshot(),'unknown');assert.equal(api.getStoredConsentSnapshot(),null);
 api.writeStoredConsent('granted');assert.equal(api.getStoredConsentSnapshot(),'granted');
 api.writeStoredConsent('denied');assert.equal(api.getStoredConsentSnapshot(),'denied');assert.equal(updates,2);unsub();
}
console.log('PASS: consent persistence, unavailable/quota storage fallback, notifications and unknown SSR.');
