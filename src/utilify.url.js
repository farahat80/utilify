'use strict';

var Url = (function () {
  function Url() { }

  Url.prototype.getParam = function (name, url) {
    if (!url) {
      url = this.getHref();
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  Url.prototype.getParams = function () {
    var url = this.getHref();
    var retObject = {};
    var parameters;
    if (url.indexOf('?') === -1) {
      return null;
    }
    url = url.split('?')[1];
    if (url == '') {
      return null;
    }
    parameters = url.split('&');
    for (var i = 0; i < parameters.length; i++) {
      retObject[parameters[i].split('=')[0]] = parameters[i].split('=')[1];
    }
    return retObject;
  }
  Url.prototype.getHashParams = function () {
    var hash = this.getHash();
    var retObject = {};
    var parameters;
    hash = hash.substr(1);
    if (hash == '') {
      return null;
    }
    parameters = hash.split('&');
    for (var i = 0; i < parameters.length; i++) {
      retObject[parameters[i].split('=')[0]] = parameters[i].split('=')[1];
    }
    return retObject;
  }
  Url.prototype.addParam = function (key, value) {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);
    
    var kvp = this.getSearch().substr(1).split('&');
    if (kvp == '') {
      return this.getPath() + '?' + key + '=' + value + this.getHash();
    }
    else {
      var i = kvp.length; var x; while (i--) {
        x = kvp[i].split('=');

        if (x[0] == key) {
          x[1] = value;
          kvp[i] = x.join('=');
          break;
        }
      }
      if (i < 0) { kvp[kvp.length] = [key, value].join('='); }
      return this.getPath() + "?" + kvp.join('&') + this.getHash();
    }
  }
  Url.prototype.getSearch = function () {
    return window.location.search;
  }
  Url.prototype.getHash = function () {
    return window.location.href;
  }
  Url.prototype.getPath= function() {
    return window.location.pathname;
  }
  Url.prototype.getHref = function () {
    return window.location.href;
  }
  return Url;
})();

module.exports = Url;