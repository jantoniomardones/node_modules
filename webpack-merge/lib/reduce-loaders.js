'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var find = require('lodash.find');
var isEqual = require('lodash.isequal');
var isArray = Array.isArray;

module.exports = function reduceLoaders(mergedLoaderConfigs, loaderConfig) {
  var foundLoader = find(mergedLoaderConfigs, function (l) {
    return String(l.test) === String(loaderConfig.test);
  });

  if (foundLoader) {
    /**
     * When both loaders have different `include` or `exclude`
     * properties, concat them
     */
    if (foundLoader.include && !isSameValue(foundLoader.include, loaderConfig.include) || foundLoader.exclude && !isSameValue(foundLoader.exclude, loaderConfig.exclude)) {
      return [loaderConfig].concat(mergedLoaderConfigs);
    }

    // foundLoader.loader is intentionally ignored, because a string loader value should always override
    if (foundLoader.loaders) {
      var newLoaders = loaderConfig.loader ? [loaderConfig.loader] : loaderConfig.loaders || [];

      foundLoader.loaders = mergeLoaders(newLoaders, foundLoader.loaders);
    }

    // webpack 2 support
    if (foundLoader.rules) {
      var newRules = loaderConfig.loader ? [loaderConfig.loader] : loaderConfig.rules || [];

      foundLoader.rules = mergeLoaders(newRules, foundLoader.rules);
    }

    if (loaderConfig.include) {
      foundLoader.include = loaderConfig.include;
    }

    if (loaderConfig.exclude) {
      foundLoader.exclude = loaderConfig.exclude;
    }

    return mergedLoaderConfigs;
  }

  return [loaderConfig].concat(mergedLoaderConfigs);
};

/**
 * Check equality of two values using lodash's isEqual
 * Arrays need to be sorted for equality checking
 * but clone them first so as not to disrupt the sort order in tests
 */
function isSameValue(a, b) {
  var _map = [a, b].map(function (value) {
    return isArray(value) ? value.slice().sort() : value;
  });

  var _map2 = _slicedToArray(_map, 2);

  var propA = _map2[0];
  var propB = _map2[1];


  return isEqual(propA, propB);
}

function mergeLoaders(currentLoaders, newLoaders) {
  var loaderNameRe = /^([^\?]+)/ig;

  return newLoaders.reduce(function (mergedLoaders, loader) {
    if (mergedLoaders.every(function (l) {
      return loader.match(loaderNameRe)[0] !== l.match(loaderNameRe)[0];
    })) {
      return mergedLoaders.concat([loader]);
    }

    // Replace query values with newer ones
    return mergedLoaders.map(function (l) {
      if (loader.match(loaderNameRe)[0] === l.match(loaderNameRe)[0]) {
        return loader;
      }

      return l;
    });
  }, currentLoaders);
}