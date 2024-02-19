### gouuidjs
run the google uuid package to get uuid v6, v7, v4 versions of uuid using gouuidjs

the demos can be found in the folder [demos](https://github.com/ganeshkbhat/gouuidjs/tree/main/demos)

### USAGE

```
const fs = require('node:fs');
const wasmBuffer = fs.readFileSync('.node_modules/gouuid/gouuid.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  const go = wasmModule.instance.exports;
  const uuid = go.GetUUID(["", "V7"]);
  console.log(uuid); 
});
```

```
import { GetUUID } from '../gouuid.wasm';
console.log(GetUUID([".", "."]))
```

```
import * as go from '../gouuid.wasm';
console.log(go.GetUUID([".", "."]))
```

### SOURCE

Direct build od UUID definition implementations from [github.com/google/uuid](https://github.com/google/uuid)

