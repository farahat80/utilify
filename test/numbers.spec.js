'use strict';
import { expect, assert } from 'chai';
import should from 'should';
import sinon from 'sinon';
import util from '../src/utilify';

describe("Numbers Functions Tests", function () {
  describe('#isInt', function () {
    it('should return true if the number is integer', function () {
      expect(util.numbers.isInt(5)).to.be.true;
    });
    it('should return false if the number is not integer', function () {
      expect(util.numbers.isInt(5.5)).to.be.false;
      expect(util.numbers.isInt(null)).to.be.false;
      expect(util.numbers.isInt(undefined)).to.be.false;
    });
  });
    describe('#isFloat', function () {
    it('should return true if the number is float', function () {
      expect(util.numbers.isFloat(5.5)).to.be.true;
    });
    it('should return false if the number is not float', function () {
      expect(util.numbers.isFloat(5)).to.be.false;
      expect(util.numbers.isFloat(null)).to.be.false;
      expect(util.numbers.isFloat(undefined)).to.be.false;
    });
  });
});
