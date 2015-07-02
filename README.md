# babel-plugin-import-asserts
Babel plugin that does the following:

For every `import {foo, bar} from './baz';` it adds 
```
console.assert(foo, 'foo is undefined'); 
console.assert(baz, 'baz is undefined');
```
below the import statement. The same goes for `import foo from './baz';`.

Motivation: 

1. catching hard to debug errors when you 1) forget to export a thing from an `index.js` file and then 2) try to import this thing from that `index.js` file in another place

2. catch the case when you use a default import although it would have to be a regular import. (`import foo from './bar'` instead of `import {foo} from './bar'`). this happens way to often and there currently is no default safety net preventing you from doing this. 

**Note**: Only use this for development builds, you don't wanna bloat the production bundle. 

**Note 2**: This only works for codebases where you can guarantee that every imported thing will be instantly bound. It is theoretically possible for imported things  to *initially* be `undefined` and *later* defined. This is because ES6 Imports are "live binding". See [here](https://github.com/ModuleLoader/es6-module-loader/wiki/Circular-References-&-Bindings) for more information. 

# Usage
```
$ babel --plugins import-asserts script.js
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
