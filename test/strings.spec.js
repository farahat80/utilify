'use strict';

import { expect, assert } from 'chai';
import should from 'should';
import sinon from 'sinon';
import util from '../src/utilify';

describe("Strings Functions Tests", function () {
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
});

