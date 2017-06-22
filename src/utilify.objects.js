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
  Objects.prototype.find = function (array, key, value) {
    var result = null;
    array.forEach(function (item) {
      if (item.hasOwnProperty(key)) {
        if (item[key] === value) {
          result = item;
        }
      }
    });
    return result;
  };
  Objects.prototype.search = function (array, key, value) {
    var results = [];
    array.forEach(function (item) {
      if (item.hasOwnProperty(key)) {
        if (item[key] === value) {
          results.push(item);
        }
      }
    });
    if (results.length == 0) {
      return null;
    }
    return results;
  };
  Objects.prototype.isEqual = function (a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
      return false;
    }
    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];
      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  };

  return Objects;
})();

module.exports = Objects;
