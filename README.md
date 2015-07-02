# babel-plugin-import-asserts
Babel plugin that does the following:

For every `import {foo, bar} from './baz';` it adds 
```
console.assert(foo, 'foo is undefined'); 
console.assert(baz, 'baz is undefined');
```
below the import statement. The same goes for `import foo from './baz';`.

Motivation: catching errors when you forget to export a file from an `index.js` file.

**Note**: Only use this for development builds, you don't wanna bloat the production bundle. 

**Note 2**: This only works for codebases where you can guarantee that every imported thing will be instantly bound. It is theoretically possible for imported things  to *initially* show up as `undefined` and *later* as defined. See [here](https://github.com/ModuleLoader/es6-module-loader/wiki/Circular-References-&-Bindings) for more information. 

Example:
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
