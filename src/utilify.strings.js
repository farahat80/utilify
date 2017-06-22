'use strict';

var Strings = (function () {
  function Strings() { }

  Strings.prototype.trim = function (str) {
    if (str) {
      return str.replace(/^\s+|\s+$/gm, '');
    } else {
      return '';
    }
  };
  Strings.prototype.strip = function (html) {
    if (html) {
      return html.replace(/(<([^>]+)>)/ig, '');
    }
    return '';
  };
  Strings.prototype.truncate = function (str, length, ellipses, strip) {
    if (str) {
      var truncStr = '';
      if (strip) {
        str = this.strip(str);
      }
      truncStr = str.substring(0, length);
      if (ellipses) {
        return truncStr + '...';
      }
      return truncStr;
    }
    return '';
  };
  return Strings;
})();

module.exports = Strings;
