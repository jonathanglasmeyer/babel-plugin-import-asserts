module.exports = function (babel) {
  function consoleAssert(thing) {
    return t.expressionStatement(t.callExpression(
      t.memberExpression(t.identifier('console'), t.identifier('assert')),
      [t.identifier(thing), t.literal(thing + ' is undefined.')]
    ));
  }

  var t = babel.types;

  return new babel.Plugin("import-asserts", {

    visitor: {
      ImportDeclaration: function (node, parent) {

        var self = this;
        node.specifiers.map(function(specifier) {
          var name = specifier.local.name;
          self.insertAfter(consoleAssert(name));
        })
      }
    }
  });
};

