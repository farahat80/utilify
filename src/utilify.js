'use strict';


var Utilify = (function () {
  function Utilify() { }

  Utilify.prototype.trim = function (str) {
    if (str) {
      return str.replace(/^\s+|\s+$/gm, '');
    } else {
      return '';
    }
  }

  Utilify.prototype.inArray = function (array, value) {
    if (array) {
      var length = array.length;
      for (var i = 0; i < length; i++) {
        if (array[i] == value) return true;
      }
      return false;
    } else {
      throw new Error("Array input is undefined");
    }
  }

  Utilify.prototype.extend = function extend(obj1, obj2) {
    if (obj1 && obj2) {
      Object.keys(obj2).forEach(function (key) { obj1[key] = obj2[key]; });
      return obj1;
    }
    else {
      throw new Error("input objects can't be undefined");
    }
  }

  return Utilify;
})();

module.exports = new Utilify();
