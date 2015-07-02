# babel-plugin-import-asserts
Babel plugin that does the following:

For every `import {foo, bar} from './baz'` it adds 
```
console.assert(foo, 'foo is undefined'); 
console.assert(baz, 'baz is undefined')
```
below the import statement. The same goes for `import foo from './baz'`.

Motivation: catching errors when you forget to export a file from an `index.js` file.

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
