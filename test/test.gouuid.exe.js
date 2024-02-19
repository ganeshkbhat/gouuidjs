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

const { expect } = require('chai');


describe('[isBrowser tests] Tests to check whichVersion in browser and nodejs enviroment', () => {

  before(() => {
  });

  after(() => {
  });

  it('should be negative for nodejs', () => {
    let actual = whichVersion();
    let expected = true;
    expect(typeof Number(actual) === "number").to.deep.equal(expected);
  });

});
