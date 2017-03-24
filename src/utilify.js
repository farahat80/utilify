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

