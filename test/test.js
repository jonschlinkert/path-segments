/*!
 * path-segments <https://github.com/jonschlinkert/path-segments>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var segments = require('../');


describe('segments:', function () {
  describe('first:', function () {
    it('should return the first n, normalized path segments.', function () {
      expect(segments('a/b/c', {first: 1})).to.equal('a');
      expect(segments('./a/b/c', {first: 1})).to.equal('a');
      expect(segments('./a/b/c/', {first: 1})).to.equal('a');
      expect(segments('a/b/c.js', {first: 1})).to.equal('a');
      expect(segments('./a/b/c.js', {first: 1})).to.equal('a');
      expect(segments('/a/b/c.js', {first: 1})).to.equal('a');
      expect(segments('/a/b/c/', {first: 1})).to.equal('a');
      expect(segments('a\\b\\c', {first: 1})).to.equal('a');
      expect(segments('a\\b\\c\\', {first: 1})).to.equal('a');
      expect(segments('.\\a\\b\\c\\', {first: 1})).to.equal('a');
      expect(segments('\\a\\b\\c\\', {first: 1})).to.equal('a');
      expect(segments('.\\a\\b\\c\\', {first: 1})).to.equal('a');
      expect(segments('.\\a\\b\\c.js', {first: 1})).to.equal('a');

      expect(segments('a/b/c', {first: 2})).to.equal('a/b');
      expect(segments('./a/b/c', {first: 2})).to.equal('a/b');
      expect(segments('./a/b/c/', {first: 2})).to.equal('a/b');
      expect(segments('a/b/c.js', {first: 2})).to.equal('a/b');
      expect(segments('./a/b/c.js', {first: 2})).to.equal('a/b');
      expect(segments('/a/b/c.js', {first: 2})).to.equal('a/b');
      expect(segments('/a/b/c/', {first: 2})).to.equal('a/b');
      expect(segments('a\\b\\c', {first: 2})).to.equal('a/b');
      expect(segments('a\\b\\c\\', {first: 2})).to.equal('a/b');
      expect(segments('.\\a\\b\\c\\', {first: 2})).to.equal('a/b');
      expect(segments('\\a\\b\\c\\', {first: 2})).to.equal('a/b');
      expect(segments('.\\a\\b\\c\\', {first: 2})).to.equal('a/b');
      expect(segments('.\\a\\b\\c.js', {first: 2})).to.equal('a/b');

      expect(segments('a/b/c', {first: 3})).to.equal('a/b/c');
      expect(segments('./a/b/c', {first: 3})).to.equal('a/b/c');
      expect(segments('./a/b/c/', {first: 3})).to.equal('a/b/c');
      expect(segments('a/b/c.js', {first: 3})).to.equal('a/b/c.js');
      expect(segments('./a/b/c.js', {first: 3})).to.equal('a/b/c.js');
      expect(segments('/a/b/c.js', {first: 3})).to.equal('a/b/c.js');
      expect(segments('/a/b/c/', {first: 3})).to.equal('a/b/c');
      expect(segments('a\\b\\c', {first: 3})).to.equal('a/b/c');
      expect(segments('a\\b\\c\\', {first: 3})).to.equal('a/b/c');
      expect(segments('.\\a\\b\\c\\', {first: 3})).to.equal('a/b/c');
      expect(segments('\\a\\b\\c\\', {first: 3})).to.equal('a/b/c');
      expect(segments('.\\a\\b\\c\\', {first: 3})).to.equal('a/b/c');
      expect(segments('.\\a\\b\\c.js', {first: 3})).to.equal('a/b/c.js');
    });
  });

  describe('last:', function () {
    it('should return the last n, normalized path segments.', function () {
      expect(segments('a/b/c')).to.equal('c');
      expect(segments('./a/b/c')).to.equal('c');
      expect(segments('./a/b/c/')).to.equal('c');
      expect(segments('a/b/c.js')).to.equal('c.js');
      expect(segments('./a/b/c.js')).to.equal('c.js');
      expect(segments('/a/b/c.js')).to.equal('c.js');
      expect(segments('/a/b/c/')).to.equal('c');
      expect(segments('a\\b\\c')).to.equal('c');
      expect(segments('a\\b\\c\\')).to.equal('c');
      expect(segments('.\\a\\b\\c\\')).to.equal('c');
      expect(segments('\\a\\b\\c\\')).to.equal('c');
      expect(segments('.\\a\\b\\c\\')).to.equal('c');
      expect(segments('.\\a\\b\\c.js')).to.equal('c.js');

      expect(segments('a/b/c', {last: 2})).to.equal('b/c');
      expect(segments('./a/b/c', {last: 2})).to.equal('b/c');
      expect(segments('./a/b/c/', {last: 2})).to.equal('b/c');
      expect(segments('a/b/c.js', {last: 2})).to.equal('b/c.js');
      expect(segments('./a/b/c.js', {last: 2})).to.equal('b/c.js');
      expect(segments('/a/b/c.js', {last: 2})).to.equal('b/c.js');
      expect(segments('/a/b/c/', {last: 2})).to.equal('b/c');
      expect(segments('a\\b\\c', {last: 2})).to.equal('b/c');
      expect(segments('a\\b\\c\\', {last: 2})).to.equal('b/c');
      expect(segments('.\\a\\b\\c\\', {last: 2})).to.equal('b/c');
      expect(segments('\\a\\b\\c\\', {last: 2})).to.equal('b/c');
      expect(segments('.\\a\\b\\c\\', {last: 2})).to.equal('b/c');
      expect(segments('.\\a\\b\\c.js', {last: 2})).to.equal('b/c.js');

      expect(segments('a/b/c', {last: 3})).to.equal('a/b/c');
      expect(segments('./a/b/c', {last: 3})).to.equal('a/b/c');
      expect(segments('./a/b/c/', {last: 3})).to.equal('a/b/c');
      expect(segments('a/b/c.js', {last: 3})).to.equal('a/b/c.js');
      expect(segments('./a/b/c.js', {last: 3})).to.equal('a/b/c.js');
      expect(segments('/a/b/c.js', {last: 3})).to.equal('a/b/c.js');
      expect(segments('/a/b/c/', {last: 3})).to.equal('a/b/c');
      expect(segments('a\\b\\c', {last: 3})).to.equal('a/b/c');
      expect(segments('a\\b\\c\\', {last: 3})).to.equal('a/b/c');
      expect(segments('.\\a\\b\\c\\', {last: 3})).to.equal('a/b/c');
      expect(segments('\\a\\b\\c\\', {last: 3})).to.equal('a/b/c');
      expect(segments('.\\a\\b\\c\\', {last: 3})).to.equal('a/b/c');
      expect(segments('.\\a\\b\\c.js', {last: 3})).to.equal('a/b/c.js');
    });
  });
});