'use strict';

module.exports = function (context) {
  function checkDeclaration(node) {
    var kind = node.kind;

    if (kind === 'var' || kind === 'let') {
      context.report(node, 'Exporting mutable \'' + kind + '\' binding, use \'const\' instead.');
    }
  }

  function checkDeclarationsInScope(_ref, name) {
    var variables = _ref.variables;

    variables.forEach(function (variable) {
      if (variable.name === name) {
        variable.defs.forEach(function (def) {
          if (def.type === 'Variable') {
            checkDeclaration(def.parent);
          }
        });
      }
    });
  }

  function handleExportDefault(node) {
    var scope = context.getScope();

    if (node.declaration.name) {
      checkDeclarationsInScope(scope, node.declaration.name);
    }
  }

  function handleExportNamed(node) {
    var scope = context.getScope();

    if (node.declaration) {
      checkDeclaration(node.declaration);
    } else if (!node.source) {
      node.specifiers.forEach(function (specifier) {
        checkDeclarationsInScope(scope, specifier.local.name);
      });
    }
  }

  return {
    'ExportDefaultDeclaration': handleExportDefault,
    'ExportNamedDeclaration': handleExportNamed
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLW11dGFibGUtZXhwb3J0cy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY29udGV4dCIsImNoZWNrRGVjbGFyYXRpb24iLCJub2RlIiwia2luZCIsInJlcG9ydCIsImNoZWNrRGVjbGFyYXRpb25zSW5TY29wZSIsIm5hbWUiLCJ2YXJpYWJsZXMiLCJmb3JFYWNoIiwidmFyaWFibGUiLCJkZWZzIiwiZGVmIiwidHlwZSIsInBhcmVudCIsImhhbmRsZUV4cG9ydERlZmF1bHQiLCJzY29wZSIsImdldFNjb3BlIiwiZGVjbGFyYXRpb24iLCJoYW5kbGVFeHBvcnROYW1lZCIsInNvdXJjZSIsInNwZWNpZmllcnMiLCJzcGVjaWZpZXIiLCJsb2NhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ2xDLFdBQVNDLGdCQUFULENBQTBCQyxJQUExQixFQUFnQztBQUFBLFFBQ3ZCQyxJQUR1QixHQUNmRCxJQURlLENBQ3ZCQyxJQUR1Qjs7QUFFOUIsUUFBSUEsU0FBUyxLQUFULElBQWtCQSxTQUFTLEtBQS9CLEVBQXNDO0FBQ3BDSCxjQUFRSSxNQUFSLENBQWVGLElBQWYsMkJBQTJDQyxJQUEzQztBQUNEO0FBQ0Y7O0FBRUQsV0FBU0Usd0JBQVQsT0FBK0NDLElBQS9DLEVBQXFEO0FBQUEsUUFBbEJDLFNBQWtCLFFBQWxCQSxTQUFrQjs7QUFDbkRBLGNBQVVDLE9BQVYsQ0FBa0IsVUFBQ0MsUUFBRCxFQUFjO0FBQzlCLFVBQUlBLFNBQVNILElBQVQsS0FBa0JBLElBQXRCLEVBQTRCO0FBQzFCRyxpQkFBU0MsSUFBVCxDQUFjRixPQUFkLENBQXNCLFVBQUNHLEdBQUQsRUFBUztBQUM3QixjQUFJQSxJQUFJQyxJQUFKLEtBQWEsVUFBakIsRUFBNkI7QUFDM0JYLDZCQUFpQlUsSUFBSUUsTUFBckI7QUFDRDtBQUNGLFNBSkQ7QUFLRDtBQUNGLEtBUkQ7QUFTRDs7QUFFRCxXQUFTQyxtQkFBVCxDQUE2QlosSUFBN0IsRUFBbUM7QUFDakMsUUFBTWEsUUFBUWYsUUFBUWdCLFFBQVIsRUFBZDs7QUFFQSxRQUFJZCxLQUFLZSxXQUFMLENBQWlCWCxJQUFyQixFQUEyQjtBQUN6QkQsK0JBQXlCVSxLQUF6QixFQUFnQ2IsS0FBS2UsV0FBTCxDQUFpQlgsSUFBakQ7QUFDRDtBQUNGOztBQUVELFdBQVNZLGlCQUFULENBQTJCaEIsSUFBM0IsRUFBaUM7QUFDL0IsUUFBTWEsUUFBUWYsUUFBUWdCLFFBQVIsRUFBZDs7QUFFQSxRQUFJZCxLQUFLZSxXQUFULEVBQXVCO0FBQ3JCaEIsdUJBQWlCQyxLQUFLZSxXQUF0QjtBQUNELEtBRkQsTUFFTyxJQUFJLENBQUNmLEtBQUtpQixNQUFWLEVBQWtCO0FBQ3ZCakIsV0FBS2tCLFVBQUwsQ0FBZ0JaLE9BQWhCLENBQXdCLFVBQUNhLFNBQUQsRUFBZTtBQUNyQ2hCLGlDQUF5QlUsS0FBekIsRUFBZ0NNLFVBQVVDLEtBQVYsQ0FBZ0JoQixJQUFoRDtBQUNELE9BRkQ7QUFHRDtBQUNGOztBQUVELFNBQU87QUFDTCxnQ0FBNEJRLG1CQUR2QjtBQUVMLDhCQUEwQkk7QUFGckIsR0FBUDtBQUlELENBNUNEIiwiZmlsZSI6InJ1bGVzL25vLW11dGFibGUtZXhwb3J0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgZnVuY3Rpb24gY2hlY2tEZWNsYXJhdGlvbihub2RlKSB7XG4gICAgY29uc3Qge2tpbmR9ID0gbm9kZVxuICAgIGlmIChraW5kID09PSAndmFyJyB8fCBraW5kID09PSAnbGV0Jykge1xuICAgICAgY29udGV4dC5yZXBvcnQobm9kZSwgYEV4cG9ydGluZyBtdXRhYmxlICcke2tpbmR9JyBiaW5kaW5nLCB1c2UgJ2NvbnN0JyBpbnN0ZWFkLmApXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tEZWNsYXJhdGlvbnNJblNjb3BlKHt2YXJpYWJsZXN9LCBuYW1lKSB7XG4gICAgdmFyaWFibGVzLmZvckVhY2goKHZhcmlhYmxlKSA9PiB7XG4gICAgICBpZiAodmFyaWFibGUubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICB2YXJpYWJsZS5kZWZzLmZvckVhY2goKGRlZikgPT4ge1xuICAgICAgICAgIGlmIChkZWYudHlwZSA9PT0gJ1ZhcmlhYmxlJykge1xuICAgICAgICAgICAgY2hlY2tEZWNsYXJhdGlvbihkZWYucGFyZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXhwb3J0RGVmYXVsdChub2RlKSB7XG4gICAgY29uc3Qgc2NvcGUgPSBjb250ZXh0LmdldFNjb3BlKClcblxuICAgIGlmIChub2RlLmRlY2xhcmF0aW9uLm5hbWUpIHtcbiAgICAgIGNoZWNrRGVjbGFyYXRpb25zSW5TY29wZShzY29wZSwgbm9kZS5kZWNsYXJhdGlvbi5uYW1lKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUV4cG9ydE5hbWVkKG5vZGUpIHtcbiAgICBjb25zdCBzY29wZSA9IGNvbnRleHQuZ2V0U2NvcGUoKVxuXG4gICAgaWYgKG5vZGUuZGVjbGFyYXRpb24pICB7XG4gICAgICBjaGVja0RlY2xhcmF0aW9uKG5vZGUuZGVjbGFyYXRpb24pXG4gICAgfSBlbHNlIGlmICghbm9kZS5zb3VyY2UpIHtcbiAgICAgIG5vZGUuc3BlY2lmaWVycy5mb3JFYWNoKChzcGVjaWZpZXIpID0+IHtcbiAgICAgICAgY2hlY2tEZWNsYXJhdGlvbnNJblNjb3BlKHNjb3BlLCBzcGVjaWZpZXIubG9jYWwubmFtZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAnRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uJzogaGFuZGxlRXhwb3J0RGVmYXVsdCxcbiAgICAnRXhwb3J0TmFtZWREZWNsYXJhdGlvbic6IGhhbmRsZUV4cG9ydE5hbWVkLFxuICB9XG59XG4iXX0=