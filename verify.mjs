import assert from 'node:assert/strict';
import { slugify as before } from './sample-before.mjs';
import { slugify as after } from './sample-after.mjs';

const cases=[['Hello,   World!!','hello-world'],['  --Hello World--  ','hello-world'],['Árbol y niños','arbol-y-ninos'],['---','']];
const failures=cases.filter(([input,expected])=>before(input)!==expected);
assert.equal(failures.length,3,'The synthetic pre-fix implementation should reproduce three failures.');
for(const [input,expected] of cases) assert.equal(after(input),expected,`fixed output for ${input}`);
assert.throws(()=>after(5),TypeError);
console.log(JSON.stringify({beforeFailures:failures.map(([input])=>input),afterPassed:cases.length,typeGuard:true},null,2));

