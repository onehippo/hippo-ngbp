'use strict';

var cfg = require('./build.config.js');

module.exports = {
  "baseURL": "",
  "paths": {
    "*": "src/*.js",
    "npm:*": "node_modules/*.js",
    "bower:*": "bower_components/*.js"
  },
  "map": {
    "angular": "bower:angular/index",
    "angular-ui-router": "bower:angular-ui-router/release/angular-ui-router"
  }
};