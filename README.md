# path-segments [![NPM version](https://badge.fury.io/js/path-segments.png)](http://badge.fury.io/js/path-segments)

> Get specific segments of a file path. First, last, last two, first two, etc.

## Install
Install with [npm](npmjs.org):

```bash
npm i path-segments --save-dev
```

## Usage

```js
var segements = require('path-segments');
```

## Tests

In the command line, run `npm test` or `mocha`.


### first

Get the first `n` segments of a path:

```js
segments('a/b/c', {first: 1});
//=> 'a'
segments('./a/b/c', {first: 1});
//=> 'a'
segments('/a/b/c.js', {first: 1});
//=> 'a'
segments('/a/b/c/', {first: 1});
//=> 'a'
segments('a\\b\\c', {first: 1});
//=> 'a'
segments('.\\a\\b\\c.js', {first: 1});
//=> 'a'
segments('.\\a\\b\\c\\', {first: 2});
//=> 'a/b'
segments('.\\a\\b\\c.js', {first: 2});
//=> 'a/b'
segments('/a/b/c.js', {first: 3});
//=> 'a/b/c.js'
segments('/a/b/c/', {first: 3});
//=> 'a/b/c'
segments('a\\b\\c', {first: 3});
//=> 'a/b/c'
segments('a\\b\\c\\', {first: 3});
//=> 'a/b/c'
segments('.\\a\\b\\c.js', {first: 3});
//=> 'a/b/c.js'
```

### last

Get the last `n` segments of a path:

```js
segments('a/b/c');
//=> 'c'
segments('./a/b/c');
//=> 'c'
segments('./a/b/c.js');
//=> 'c.js'
segments('/a/b/c.js');
//=> 'c.js'
segments('/a/b/c/');
//=> 'c'
segments('.\\a\\b\\c\\');
//=> 'c'
segments('.\\a\\b\\c.js');
//=> 'c.js'
segments('/a/b/c.js', {last: 2});
//=> 'b/c.js'
segments('/a/b/c/', {last: 2});
//=> 'b/c'
segments('a\\b\\c', {last: 2});
//=> 'b/c'
segments('.\\a\\b\\c.js', {last: 2});
//=> 'b/c.js'
segments('./a/b/c/', {last: 3});
//=> 'a/b/c'
segments('a/b/c.js', {last: 3});
//=> 'a/b/c.js'
segments('.\\a\\b\\c\\', {last: 3});
//=> 'a/b/c'
segments('.\\a\\b\\c.js', {last: 3});
//=> 'a/b/c.js'
```

See [the tests](./test/test.js) for more examples.

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 26, 2014._