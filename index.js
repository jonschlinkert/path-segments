/*!
 * path-segments <https://github.com/jonschlinkert/path-segments>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var parsepath = require('parse-filepath');
var _ = require('lodash');

module.exports = function segments (filepath, options) {
  options = options || {};
  options.sep = options.sep || '/';
  options.cwd = options.cwd || process.cwd();

  if (filepath) {
    var first, last, result = filepath;
    var parsed = parsepath(path.normalize(filepath));
    parsed.dirname = parsed.dirname.replace(/^[\\\/]|[\\\/]$/g, '');
    var segments = parsed.dirname.split(/[\\\/]/).filter(Boolean);

    _.extend(parsed, {
      segments: _.union(segments, [parsed.basename].filter(Boolean))
    });

    var len = segments.length;

    if (options.first) {
      options.last = options.last || 1;
      first = _.first(parsed.segments, options.first);
      result = first.join(options.sep);
    } else {
      options.last = options.last || 1;
      last = _.last(parsed.segments, options.last);
      result = last.join(options.sep);
    }

    return result;
  }

  return;
};