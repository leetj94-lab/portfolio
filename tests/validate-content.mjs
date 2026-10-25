import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('dist/content.js','utf8')+'\n'+fs.readFileSync('dist/story.js','utf8')+';globalThis.cases=projects;globalThis.filters=workFilters;globalThis.journey=journeyStages;',ctx);
const ids=new Set();
function translations(value,path){if(!value||typeof value!=='object')return;if('en' in value||'ko' in value){assert.equal(typeof value.en,'string',path+' English');assert.equal(typeof value.ko,'string',path+' Korean');assert.ok(value.en.trim()&&value.ko.trim(),path+' empty translation');}else for(const [k,v]of Object.entries(value))translations(v,path+'.'+k);}
for(const p of ctx.cases){assert.ok(!ids.has(p.id),'Duplicate case ID');ids.add(p.id);translations(p,p.id);assert.equal(p.metrics.length,p.metricKinds.length,p.id+' metric classification');assert.ok(p.navLabel&&p.status,p.id+' missing navigation/status');if(['delivery','master-data','digital-twin'].includes(p.id))assert.ok(p.details.length>=3,p.id+' missing technical notes');const nodes=new Set(p.nodes.map(n=>n[0]));assert.equal(nodes.size,p.nodes.length,p.id+' duplicate nodes');for(const n of p.nodes){assert.ok(n[1]>=80&&n[1]<=920&&n[2]>=55&&n[2]<=375,p.id+' diagram bounds');}for(const [a,b]of p.edges)assert.ok(nodes.has(a)&&nodes.has(b),p.id+' dangling edge');}
for(const file of ['index.html','dist/index.html']){const text=fs.readFileSync(file,'utf8');for(const m of text.matchAll(/<(?:script|link)\b[^>]*(?:src|href)="([^"]+)"/g)){if(m[1].includes('://'))continue;const path=new URL(m[1],new URL(file,'file://'+process.cwd()+'/'));assert.ok(fs.existsSync(path),'Missing asset '+path);}}
assert.ok(fs.statSync('dist/assets/Taekjun_Lee_Resume.pdf').size>1000,'Missing résumé PDF');assert.ok(fs.existsSync('dist/assets/social.png'),'Missing share image');
console.log(`${ids.size} bilingual cases, graph edges, metric labels and entry-point assets validated.`);

for(const [key,f] of Object.entries(ctx.filters)){translations(f,key);assert.equal(new Set(f.ids).size,f.ids.length,'Repeated filtered case');for(const id of f.ids)assert.ok(ids.has(id),'Unknown filtered case '+id);}
assert.equal(ctx.journey.length,6);const journeyIds=new Set();for(const stage of ctx.journey){translations(stage,stage.id);assert.ok(ids.has(stage.id),'Unknown journey case');assert.ok(!journeyIds.has(stage.id),'Repeated journey stage');journeyIds.add(stage.id);assert.ok(stage.problem&&stage.role&&stage.growth&&stage.enabled,'Incomplete journey stage');}
assert.ok(!ctx.filters.development.ids.includes('master-data'),'Early analysis role must not be presented as full-stack development');
console.log('Role filters and all six connected journey stages validated.');

for(const [key,filter] of Object.entries(ctx.filters)){if(['featured','all'].includes(key))continue;for(const id of filter.ids){const project=ctx.cases.find(p=>p.id===id);assert.ok(project.focus[key]?.en&&project.focus[key]?.ko,'Missing role-specific explanation: '+key+'/'+id);assert.ok(project.roles.length>0,'Missing contribution labels: '+id);}}
console.log('Every role-specific result has bilingual focus copy and contribution labels.');
