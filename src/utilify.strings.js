'use strict';

var Strings = (function () {
  function Strings() { }

  Strings.prototype.trim = function (str) {
    if (str) {
      return str.replace(/^\s+|\s+$/gm, '');
    } else {
      return '';
    }
  }
  return Strings;
})();

module.exports = Strings;