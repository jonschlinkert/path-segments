/*!
 * path-segments <https://github.com/jonschlinkert/path-segments>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var segments = require('../');


describe('segments:', function () {
  it('should segments file paths.', function () {
    expect(segments('/a/b/c/d/e/f/g/')).to.equal('g');
    expect(segments('/a/b/c/d/e/f/g/', {last: 2})).to.equal('f/g');
    // expect(segments('/a/b/c/d/e/f/g/', {last: 4})).to.equal('d/e/f/g');
    // expect(segments('/a/b/c/d/e/f/g/', {first: 4})).to.equal('d/e/f/g');
  });
});