'use strict';

import { expect, assert } from 'chai';
import should from 'should';
import sinon from 'sinon';
import util from '../src/utilify';

describe("Objects Functions Tests", function () {
  describe('#extend', function () {
    var obj1 = { foo: 'foo1' };
    var obj2 = { bar: 'bar1' };
    it('should return one object of the combined objects properties', function () {
      expect(util.objects.extend(obj1, obj2)).to.deep.equal({ foo: 'foo1', bar: 'bar1' });
    });
    it('should throw an error if the objects are undefined', function () {
      expect(() => { util.objects.extend(null, null) }).to.throw(Error, "input objects can't be undefined");
    });
  });
  describe('#find', function () {
    var json = [
      { name: 'John', age: 34, active: false },
      { name: 'Smith', age: 50, active: true },
      { name: 'Mike', age: 60, active: true }
    ];
    it('should return the object that matches the key value', function () {
      expect(util.objects.find(json, 'name', 'Mike')).to.deep.equal({ name: 'Mike', age: 60, active: true });
    });
    it('should return null if no value is found', function () {
      expect(util.objects.find(json, 'name', 'Ahmed')).to.be.null;
    });
  });
  describe('#search', function () {
    var json = [
      { name: 'John', age: 34, active: false },
      { name: 'Smith', age: 50, active: true },
      { name: 'Mike', age: 60, active: true }
    ];
    it('should return the array of objects that matches the key value', function () {
      expect(util.objects.search(json, 'active', true)).to.deep.equal([
        { name: 'Smith', age: 50, active: true },
        { name: 'Mike', age: 60, active: true }
      ]);
    });
    it('should return null if no value is found', function () {
      expect(util.objects.search(json, 'name', 'Ahmed')).to.be.null;
    });
  });
  describe('#isEqual', function () {
    it('should compare 2 objects and return true if they are equal', function () {
      var obj1 = { name: 'John', age: 34, active: false }
      var obj2 = { name: 'John', age: 34, active: false }
      expect(util.objects.isEqual(obj1,obj2)).to.equal(true);
    });
    it('should compare 2 objects and return false if they are not equal', function () {
      var obj1 = { name: 'John', age: 34, active: false }
      var obj2 = { name: '', age: 34, active: false }
      expect(util.objects.isEqual(obj1,obj2)).to.equal(false);
    });
  });
});
