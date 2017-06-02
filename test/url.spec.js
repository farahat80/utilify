'use strict';

import { expect, assert } from 'chai';
import should from 'should';
import sinon from 'sinon';
import util from '../src/utilify';

describe('Url Functions Tests', function () {
  var sandbox;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });
  afterEach(function () {
    sandbox.restore();
  });
  describe('#getParam', function () {
    it('should return the parameter value from a provided url string', function () {
      expect(util.url.getParam("param1", "http://www.foo.com/?param1=hello")).to.equal("hello");
    });
    it('should return the parameter value from a browser url', function () {
      var stub = sandbox.stub(util.url, 'getHref').returns('http://www.foo.com?param1=hello');
      expect(util.url.getParam("param1")).to.equal("hello");
    });
  });
  describe('#getParams', function () {
    it('should return the parameter values as object', function () {
      var stub = sandbox.stub(util.url, 'getHref').returns('http://www.foo.com?param1=hello&param2=44&param3=test');
      expect(util.url.getParams()).to.deep.equal({
        param1: 'hello',
        param2: '44',
        param3: 'test'
      });
    });
    it('should return null if no params exist', function () {
      var stub = sandbox.stub(util.url, 'getHref').returns('http://www.foo.com');
      expect(util.url.getParams()).to.be.null;
    });
    it('should return null if ? exist without any params', function () {
      var stub = sandbox.stub(util.url, 'getHref').returns('http://www.foo.com?');
      expect(util.url.getParams()).to.be.null;
    });
  });
  describe('#getHashParams', function () {
    it('should return the hash parameter values as object', function () {
      var stub = sandbox.stub(util.url, 'getHash').returns('#param1=hello&param2=44&param3=test');
      expect(util.url.getHashParams()).to.deep.equal({
        param1: 'hello',
        param2: '44',
        param3: 'test'
      });
    });
    it('should return null if no hash params exist', function () {
      var stub = sandbox.stub(util.url, 'getHash').returns('');
      expect(util.url.getHashParams()).to.be.null;
    });
  });
  describe('#addParam', function () {
    it('should add parameter key,value to the url', function () {
      sandbox.stub(util.url, 'getSearch').returns('?param1=value1');
      sandbox.stub(util.url, 'getPath').returns('http://www.foo.com/');
      sandbox.stub(util.url, 'getHash').returns('');
      expect(util.url.addParam('param2','value2')).to.equal('http://www.foo.com/?param1=value1&param2=value2');
    });
    it('should add parameter key,value to the url and maintain the url hash', function () {
      sandbox.stub(util.url, 'getSearch').returns('?param1=value1');
      sandbox.stub(util.url, 'getPath').returns('http://www.foo.com/');
      sandbox.stub(util.url, 'getHash').returns('#hashstringhere');
      expect(util.url.addParam('param2','value2')).to.equal('http://www.foo.com/?param1=value1&param2=value2#hashstringhere');
    });
  });
});


