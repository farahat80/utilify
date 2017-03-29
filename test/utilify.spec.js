'use strict';

import { expect, assert } from 'chai';
import should from 'should';
import sinon from 'sinon';
import utilify from '../src/utilify';

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
  it('should throw an error if the array is undefined', function () {
    expect(() => { utilify.inArray(null,'apples') }).to.throw(Error, "Array input is undefined");
  });
});

describe('#extend', function () {
  var obj1 = { foo: 'foo1' };
  var obj2 = { bar: 'bar1' };
  it('should return one object of the combined objects properties', function () {
    expect(utilify.extend(obj1, obj2)).to.deep.equal({foo:'foo1', bar: 'bar1'});
  });
  it('should throw an error if the array is undefined', function () {
    expect(() => { utilify.extend(null,null) }).to.throw(Error, "input objects can't be undefined");
  });
});

describe('#getParam', function () {
  it('should return the parameter value from a provided url string', function () {
    expect(utilify.getParam("param1", "http://www.foo.com/?param1=hello")).to.equal("hello");
  });
  it('should return the parameter value from a browser url', function () {
    var stub = sinon.stub(utilify, 'getHref').returns('http://www.foo.com?param1=hello');
    expect(utilify.getParam("param1")).to.equal("hello");
  });
});


