var buildConfig = require('./build.config.js');

module.exports = {
  "baseURL": buildConfig.compiled_dir + "/babel/",
  "transpiler": "babel",
  "map": {
    "angular": "../../bower_components/angular/index",
    "angular-ui-router": "../../bower_components/angular-ui-router/release/angular-ui-router"
  }
};