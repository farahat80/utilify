'use strict';

export function trim(str) {
  if (str) {
    return str.replace(/^\s+|\s+$/gm,'');
  } else {
    return '';
  }
}

export function inArray(array, value) {
  try {
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
  catch (err) {
    console.log(err.name, err.message);
  }
}

export function extend(obj1, obj2) {
  Object.keys(obj2).forEach(function (key) { obj1[key] = obj2[key]; });
  return obj1;
}

/**
 * Get the value of a query string from a URL
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from [optional]
 * @return {String}       The value
 */
export function getQueryString(field, url) {
  var href = url ? url : window.location.href;
  var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
  var string = reg.exec(href);
  return string ? string[1] : null;
};