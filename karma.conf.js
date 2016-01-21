var hippoBuild = require('hippo-build');
var customConfig = require('./build.conf.js');
var cfg = hippoBuild.buildConfig(customConfig);

module.exports = function karmaConfig(config) {
  var options = cfg.karma;

  options.systemjs.includeFiles = [
    cfg.bowerDir + 'angular/angular.js',
    cfg.bowerDir + 'angular-animate/angular-animate.js',
    cfg.bowerDir + 'angular-aria/angular-aria.js',
    cfg.bowerDir + 'angular-material/angular-material.js',
    cfg.bowerDir + 'angular-ui-router/release/angular-ui-router.js',
    cfg.bowerDir + 'angular-mocks/angular-mocks.js',
  ];

  options.files = [
    cfg.src.templates,
    cfg.src.scripts,
    cfg.src.unitTests,
  ];

  config.set(options);
};
