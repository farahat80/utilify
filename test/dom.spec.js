'use strict';

import { expect, assert } from 'chai';
import should from 'should';
import sinon from 'sinon';
import util from '../src/utilify';

describe('DOM Functions Tests', function () {
  describe('#getParam', function () {
    it('should return the parameter value from a provided url string', function () {
      expect(util.dom.getParam("param1", "http://www.foo.com/?param1=hello")).to.equal("hello");
    });
    it('should return the parameter value from a browser url', function () {
      var stub = sinon.stub(util.dom, 'getHref').returns('http://www.foo.com?param1=hello');
      expect(util.dom.getParam("param1")).to.equal("hello");
    });
  });
});


