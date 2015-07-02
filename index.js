module.exports = function (babel) {
  var t = babel.types;

  function console_(method, arguments) {
    return t.expressionStatement(t.callExpression(
      t.memberExpression(
        t.identifier('console'), 
        t.identifier(method)),
      arguments));
  }
  
  function consoleTest(thing) {

    var thingIsUndefined = 
      t.unaryExpression('!', t.identifier(thing));

    var consoleStatement = console_('debug', 
        [t.literal(thing + ' is undefined.')]);

    var logIfUndefined = t.logicalExpression('&&', thingIsUndefined, consoleStatement);

    return logIfUndefined;

  }


  return new babel.Plugin("import-asserts", {

    visitor: {
      ImportDeclaration: function (node, parent) {
        var self = this;
        node.specifiers.map(function(specifier, idx) {
          var name = specifier.local.name;

        })
      }
    }
  });
};

