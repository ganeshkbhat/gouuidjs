/**
 * 
 * Package: gouuidjs
 * Author: Ganesh B
 * Description: 
 * Install: npm i gouuidjs --save
 * Github: https://github.com/ganeshkbhat/gouuidjs
 * npmjs Link: https://www.npmjs.com/package/gouuidjs
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const fs = require('node:fs');
const wasmBuffer = fs.readFileSync('./gouuid.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  const go = wasmModule.instance.exports;
  const uuid = go.GetUUID(["", "V7"]);
  console.log(uuid); 
});
