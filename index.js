/*!
 * path-segments <https://github.com/jonschlinkert/path-segments>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var parsepath = require('parse-filepath');

module.exports = function segments (filepath, options) {
  options = options || {};
  options.sep = options.sep || '/';
  options.cwd = options.cwd || process.cwd();


  if (filepath) {
    var first, last, result = filepath;
    var parsed = parsepath(filepath);

    console.log(parsed);


    var dir = path.join(options.cwd, path.dirname(filepath));
    var basename = path.basename(filepath, path.extname(filepath));
    var segments = dir.split(/[\\\/]/);
    var len = segments.length;

    if (options.last) {
      options.last = (options.last - 1);
      last = segments.slice(len - options.last);
      result = last.concat([basename]).join(options.sep);
    } else if (options.first) {
      options.first = (options.first + 1);
      first = segments.slice(options.first);
      result = first.concat([basename]).join(options.sep);
    } else {
      options.last = 1;
      last = segments.slice(len - options.last);
      result = last.concat([basename]).join(options.sep);
    }
    return result.replace(/^[\\\/]/, '');
  }
  return;
};