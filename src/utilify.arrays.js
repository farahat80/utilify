'use strict';

var Arrays = (function () {
  function Arrays() { }

  Arrays.prototype.inArray = function (array, value) {
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

  return Arrays;
})();

module.exports = Arrays;