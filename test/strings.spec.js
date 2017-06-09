'use strict';

import { expect, assert } from 'chai';
import should from 'should';
import sinon from 'sinon';
import util from '../src/utilify';

describe("Strings Functions Tests", function () {
  var sandbox;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });
  afterEach(function () {
    sandbox.restore();
  });
  describe('#trim', function () {
    it('should remove leading and trailing empty spaces', function () {
      var result = util.strings.trim(' hello ');
      expect(result).to.equal('hello');
    });
    it('should return empty strin on null input', function () {
      var result = util.strings.trim(null);
      expect(result).to.equal('');
    });
  });
  describe('#truncate', function () {
    it('should truncate the string to the required length of letters', function () {
      var result = util.strings.truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 20, true);
      expect(result).to.equal('Lorem ipsum dolor si...');
    });
    it('should strip the html string then truncate the string to the required length of letters', function () {
      sandbox.stub(util.strings, 'strip').returns('Hello World');
      var result = util.strings.truncate('<div><p>Hello World</p></div>', 5, true, true);
      expect(result).to.equal('Hello...');
    });
    it('should return empty string if null or undefined is provided', function () {
      var result = util.strings.truncate(null);
      expect(result).to.equal('');
      result = util.strings.truncate(undefined);
      expect(result).to.equal('');
    });
  });
  describe('#strip', function () {
    it('should remove html tags from html string', function () {
      var result = util.strings.strip('<div><p>Hello </p></div><div>World</div>');
      expect(result).to.equal('Hello World');
    });
    it('should return empty string if undefined is provided', function () {
      var result = util.strings.strip(undefined);
      expect(result).to.equal('');
    });
    it('should return empty string if null is provided', function () {
      var result = util.strings.strip(null);
      expect(result).to.equal('');
    });
  });
});

