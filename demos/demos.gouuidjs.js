const fs = require('node:fs');
const wasmBuffer = fs.readFileSync('./gouuid.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  const go = wasmModule.instance.exports;
  const uuid = go.GetUUID(["", "V7"]);
  console.log(uuid); 
});