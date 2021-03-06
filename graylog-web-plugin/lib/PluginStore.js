"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginStore = function () {
  function PluginStore() {
    _classCallCheck(this, PluginStore);
  }

  _createClass(PluginStore, null, [{
    key: "register",
    value: function register(plugin) {
      if (!window.plugins) {
        window.plugins = [];
      }
      window.plugins.push(plugin);
    }
  }, {
    key: "get",
    value: function get() {
      if (!window.plugins) {
        window.plugins = [];
      }
      return window.plugins;
    }
  }, {
    key: "exports",
    value: function exports(entity) {
      return [].concat.apply([], this.get().map(function (plugin) {
        return plugin.exports && plugin.exports[entity] ? plugin.exports[entity] : [];
      }));
    }
  }]);

  return PluginStore;
}();

exports.default = PluginStore;
module.exports = exports["default"];