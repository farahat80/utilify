'use strict';

var Dom = (function () {
  function Dom() { }

  Dom.prototype.getParam = function (name, url) {
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
  Dom.prototype.getHref = function () {
    return window.location.href;
  }

  return Dom;
})();

module.exports = Dom;