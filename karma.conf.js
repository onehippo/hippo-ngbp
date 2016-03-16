const hippoBuild = require('hippo-build');
const customConfig = require('./build.conf.js');
const cfg = hippoBuild.buildConfig(customConfig);

module.exports = function karmaConfig(config) {
  const options = cfg.karma;

  options.systemjs.includeFiles = [
    `${cfg.npmDir}/angular/angular.js`,
    `${cfg.npmDir}/angular-animate/angular-animate.js`,
    `${cfg.npmDir}/angular-aria/angular-aria.js`,
    `${cfg.npmDir}/angular-material/angular-material.js`,
    `${cfg.npmDir}/angular-ui-router/release/angular-ui-router.js`,
    `${cfg.npmDir}/angular-mocks/angular-mocks.js`,
  ];

  options.files = [
    cfg.src.templates,
    cfg.src.scripts,
    cfg.src.unitTests,
  ];

  config.set(options);
};
