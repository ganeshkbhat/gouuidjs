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
const { GO } = require("./wasm.exec.js");
const wasmBuffer = fs.readFileSync('./gouuid.wasm');
const { fetch } = import("node-fetch");

const go = new Go();
WebAssembly.instantiateStreaming(fetch("./gouuid.wasm"), go.importObject).then((result) => {
  go.run(result.instance);
});

// WebAssembly.instantiate(wasmBuffer, importObject).then(wasmModule => {
//   const go = wasmModule.instance.exports;
//   console.log(go);
//   const uuid = go.GetUUID(["", "V7"]);
//   console.log(uuid);
// });
