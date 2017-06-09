'use strict';

var Objects = (function () {
  function Objects() { }

  Objects.prototype.extend = function extend(obj1, obj2) {
    if (obj1 && obj2) {
      Object.keys(obj2).forEach(function (key) {
        obj1[key] = obj2[key];
      });
      return obj1;
    }
    else {
      throw new Error('input objects can\'t be undefined');
    }
  };

  return Objects;
})();

module.exports = Objects;
