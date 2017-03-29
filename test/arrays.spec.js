'use strict';

import { expect, assert } from 'chai';
import should from 'should';
import sinon from 'sinon';
import util from '../src/utilify';

describe("Arrays Functions Tests", function () {
  describe('#inArray', function () {
    var array = ['orange', 'apples', 'bananas'];
    it('should return true if a value exist in an array', function () {
      expect(util.arrays.inArray(array, 'apples')).to.equal(true);
    });
    it('should return false if a value does not exist in an array', function () {
      expect(util.arrays.inArray(array, 'mangos')).to.equal(false);
    });
    it('should throw an error if the array is undefined', function () {
      expect(() => { util.arrays.inArray(null, 'apples') }).to.throw(Error, "Array input is undefined");
    });
  });
});