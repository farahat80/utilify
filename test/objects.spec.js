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
});
