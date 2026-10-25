import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('dist/content.js','utf8')+';globalThis.cases=projects;',ctx);
const ids=new Set();
function translations(value,path){if(!value||typeof value!=='object')return;if('en' in value||'ko' in value){assert.equal(typeof value.en,'string',path+' English');assert.equal(typeof value.ko,'string',path+' Korean');assert.ok(value.en.trim()&&value.ko.trim(),path+' empty translation');}else for(const [k,v]of Object.entries(value))translations(v,path+'.'+k);}
for(const p of ctx.cases){assert.ok(!ids.has(p.id),'Duplicate case ID');ids.add(p.id);translations(p,p.id);assert.equal(p.metrics.length,p.metricKinds.length,p.id+' metric classification');assert.ok(p.navLabel&&p.status,p.id+' missing navigation/status');if(['delivery','master-data','digital-twin'].includes(p.id))assert.ok(p.details.length>=3,p.id+' missing technical notes');const nodes=new Set(p.nodes.map(n=>n[0]));assert.equal(nodes.size,p.nodes.length,p.id+' duplicate nodes');for(const n of p.nodes){assert.ok(n[1]>=80&&n[1]<=920&&n[2]>=55&&n[2]<=375,p.id+' diagram bounds');}for(const [a,b]of p.edges)assert.ok(nodes.has(a)&&nodes.has(b),p.id+' dangling edge');}
for(const file of ['index.html','dist/index.html']){const text=fs.readFileSync(file,'utf8');for(const m of text.matchAll(/<(?:script|link)\b[^>]*(?:src|href)="([^"]+)"/g)){if(m[1].includes('://'))continue;const path=new URL(m[1],new URL(file,'file://'+process.cwd()+'/'));assert.ok(fs.existsSync(path),'Missing asset '+path);}}
assert.ok(fs.statSync('dist/assets/Taekjun_Lee_Resume.pdf').size>1000,'Missing résumé PDF');assert.ok(fs.existsSync('dist/assets/social.png'),'Missing share image');
console.log(`${ids.size} bilingual cases, graph edges, metric labels and entry-point assets validated.`);
