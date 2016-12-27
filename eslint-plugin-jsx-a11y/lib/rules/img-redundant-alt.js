'use strict';

var _jsxAstUtils = require('jsx-ast-utils');

var _isHiddenFromScreenReader = require('../util/isHiddenFromScreenReader');

var _isHiddenFromScreenReader2 = _interopRequireDefault(_isHiddenFromScreenReader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview Enforce img alt attribute does not have the word image, picture, or photo.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var REDUNDANT_WORDS = ['image', 'photo', 'picture'];

var errorMessage = 'Redundant alt attribute. Screen-readers already announce ' + '`img` tags as an image. You don\'t need to use the words `image`, ' + '`photo,` or `picture` in the alt prop.';

module.exports = function (context) {
  return {
    JSXOpeningElement: function JSXOpeningElement(node) {
      var type = (0, _jsxAstUtils.elementType)(node);
      if (type !== 'img') {
        return;
      }

      var altProp = (0, _jsxAstUtils.getProp)(node.attributes, 'alt');
      // Return if alt prop is not present.
      if (altProp === undefined) {
        return;
      }

      var value = (0, _jsxAstUtils.getLiteralPropValue)(altProp);
      var isVisible = (0, _isHiddenFromScreenReader2.default)(type, node.attributes) === false;

      if (typeof value === 'string' && isVisible) {
        var hasRedundancy = REDUNDANT_WORDS.some(function (word) {
          return Boolean(value.match(new RegExp('(?!{)' + word + '(?!})', 'gi')));
        });

        if (hasRedundancy === true) {
          context.report({
            node: node,
            message: errorMessage
          });
        }

        return;
      }
    }
  };
};

module.exports.schema = [{ type: 'object' }];