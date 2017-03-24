'use strict';

import {expect, assert} from 'chai';
import * as utilify from '../src/utilify';

describe('#trim', function () {
  it('should remove leading and trailing empty spaces', function () {
    var result = utilify.trim(' hello ');
    expect(result).to.equal('hello');
  });
  it('should return empty strin on null input', function () {
    var result = utilify.trim(null);
    expect(result).to.equal('');
  });
});

describe('#inArray', function () {
  var array = ['orange', 'apples', 'bananas'];
  it('should return true if a value exist in an array', function () {
    expect(utilify.inArray(array,'apples')).to.equal(true);
  });
  it('should return false if a value does not exist in an array', function () {
    expect(utilify.inArray(array,'mangos')).to.equal(false);
  });
  // it('should throw an error if the array is undefined', function () {
  //   expect(() => { utilify.inArray(null,'apples') }).to.throw(Error, "Array input is undefined");
  // });
});