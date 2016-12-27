'use strict';

exports.__esModule = true;
exports.default = isStaticRequire;
// todo: merge with module visitor
function isStaticRequire(node) {
  return node && node.callee && node.callee.type === 'Identifier' && node.callee.name === 'require' && node.arguments.length === 1 && node.arguments[0].type === 'Literal';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvc3RhdGljUmVxdWlyZS5qcyJdLCJuYW1lcyI6WyJpc1N0YXRpY1JlcXVpcmUiLCJub2RlIiwiY2FsbGVlIiwidHlwZSIsIm5hbWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7OztrQkFDd0JBLGU7QUFEeEI7QUFDZSxTQUFTQSxlQUFULENBQXlCQyxJQUF6QixFQUErQjtBQUM1QyxTQUFPQSxRQUNMQSxLQUFLQyxNQURBLElBRUxELEtBQUtDLE1BQUwsQ0FBWUMsSUFBWixLQUFxQixZQUZoQixJQUdMRixLQUFLQyxNQUFMLENBQVlFLElBQVosS0FBcUIsU0FIaEIsSUFJTEgsS0FBS0ksU0FBTCxDQUFlQyxNQUFmLEtBQTBCLENBSnJCLElBS0xMLEtBQUtJLFNBQUwsQ0FBZSxDQUFmLEVBQWtCRixJQUFsQixLQUEyQixTQUw3QjtBQU1EIiwiZmlsZSI6ImNvcmUvc3RhdGljUmVxdWlyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IG1lcmdlIHdpdGggbW9kdWxlIHZpc2l0b3JcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShub2RlKSB7XG4gIHJldHVybiBub2RlICYmXG4gICAgbm9kZS5jYWxsZWUgJiZcbiAgICBub2RlLmNhbGxlZS50eXBlID09PSAnSWRlbnRpZmllcicgJiZcbiAgICBub2RlLmNhbGxlZS5uYW1lID09PSAncmVxdWlyZScgJiZcbiAgICBub2RlLmFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiZcbiAgICBub2RlLmFyZ3VtZW50c1swXS50eXBlID09PSAnTGl0ZXJhbCdcbn1cbiJdfQ==