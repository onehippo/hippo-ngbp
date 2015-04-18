// Protractor config
// the seleniumAddress option is deliberatly left out to allow
// the grunt task 'protractor' to fire it up itself.

var cfg = require('./build.config.js');

module.exports.config = {
  specs: [cfg.src.e2e],
  baseUrl: 'http://localhost:9001/'
};
