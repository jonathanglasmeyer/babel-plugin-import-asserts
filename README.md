# babel-plugin-import-asserts
Babel plugin that does the following:

For every `import {foo, bar} from './baz';` it adds 
```
console.assert(foo, 'foo is undefined'); 
console.assert(baz, 'baz is undefined');
```
below the import statement. The same goes for `import foo from './baz';`.

Motivation: catching errors when you forget to export a file from an `index.js` file.

If you use
```
    new webpack.optimize.UglifyJsPlugin({
      compress: {drop_console: true}
    }),
```
this won't have any performance + code size impact in production builds. (Or you do not use the plugin at all for your production config. Now that I think about it. :))

# Usage
```
$ babel --plugins object-assign script.js
```

or in a `.babelrc`:
```
{
  "stage": 0,
  "plugins": [
    "import-asserts"
  ]
}
```

or in webpack:
`loader: 'babel?{"plugins":["import-asserts"]}'}`
