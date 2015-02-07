// Karma configuration

var pkg = require('./package.json');

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'src/',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'components/angular/angular.js',
      'components/angular-mocks/angular-mocks.js',
      'components/angular-ui-router/release/angular-ui-router.js',
      'modules/**/*.js',
      'modules/**/*.tpl.html',
      'modules/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [
      'modules/**/*.e2e.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'modules/**/*.tpl.html': ['ng-html2js']
    },

    // config for the karma-ng-html2js-preprocessor
    // note that the preprocessor takes the *exact* html file including end of file line breaks.
    // this might cause test failures when testing the html strings
    ngHtml2JsPreprocessor: {
      stripPrefix: 'modules/',
      moduleName: pkg.name + '.templates'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
