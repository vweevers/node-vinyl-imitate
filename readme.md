# vinyl-imitate

**Clone a [vinyl](http://github.com/gulpjs/vinyl) file, but with new contents.**

[![npm status](http://img.shields.io/npm/v/vinyl-imitate.svg?style=flat-square)](https://www.npmjs.org/package/vinyl-imitate) [![Dependency status](https://img.shields.io/david/vweevers/node-vinyl-imitate.svg?style=flat-square)](https://david-dm.org/vweevers/node-vinyl-imitate)

## example

```js
var imitate = require('vinyl-imitate')
var clone = imitate(someFile, someBuffer)
```

## api

### `imitate(file, newContents = null, opts = {})`

Returns a clone of the vinyl-compatible `file`. `newContents` can be null, stream or buffer. Options are passed to [`clone()`](https://github.com/gulpjs/vinyl#cloneopt).

## install

With [npm](https://npmjs.org) do:

```
npm install vinyl-imitate
```

## license

[MIT](http://opensource.org/licenses/MIT) © [Vincent Weevers](vincentweevers.nl)
