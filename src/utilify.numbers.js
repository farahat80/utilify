'use strict';

var Numbers = (function () {
  function Numbers() { }

  Numbers.prototype.isInt = function (n) {
    return Number(n) === n && n % 1 === 0;
  };

  Numbers.prototype.isFloat = function (n) {
    return Number(n) === n && n % 1 !== 0;
  };

  return Numbers;
})();

module.exports = Numbers;
