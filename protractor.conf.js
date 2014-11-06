// Protractor config
// the seleniumAddress option is deliberatly left out to allow
// the grunt task 'protractor' to fire it up itself.
exports.config = {
  specs: ['src/modules/**/*.e2e.js'],
  baseUrl: 'http://localhost:9001/#/'
}
