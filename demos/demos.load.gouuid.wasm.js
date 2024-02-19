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
const gojs = require("gojs");

const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiate(wasmBuffer, importObject).then(wasmModule => {
  const go = wasmModule.instance.exports;
  console.log(go);
  const uuid = go.GetUUID(["", "V7"]);
  console.log(uuid); 
});
