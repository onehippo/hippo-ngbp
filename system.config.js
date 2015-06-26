'use strict';

module.exports = {
  "baseURL": "./",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "npm:*": "node_modules/*.js",
    "bower:*": "bower_components/*.js"
  },
  "map": {
    "hippo.ngbp.tpls": "target/tmp/angularjs/hippo.ngbp.tpls",
    "angular": "bower:angular/index",
    "angular-ui-router": "bower:angular-ui-router/release/angular-ui-router"
  }
};
