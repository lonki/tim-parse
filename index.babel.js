//  enable runtime transpilation to use ES6/7 in node
var path = require('path');
var fs = require('fs');

var babelrc = fs.readFileSync(path.resolve(__dirname, './.babelrc'));
var config = {};

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==>  ERROR: Error parsing your .babelrc.');
  console.error(err);
}

global.Promise = require('bluebird');

require("babel-polyfill");
require('babel-core/register')(config);
