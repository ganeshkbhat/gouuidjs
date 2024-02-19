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

import { GetUUID } from '../gouuid.wasm';
import * as go from '../gouuid.wasm';

console.log(GetUUID([".", "."]))
console.log(go.GetUUID([".", "."]))
