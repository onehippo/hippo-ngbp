'use strict';

function createConfig() {
  const config = {};

   // Karma will set these up
  config.entry = {};
  config.output = {};

  config.devtool = 'inline-source-map';
  config.plugins = [];

  config.module = {
    preLoaders: [{
      // ISPARTA LOADER
      // Reference: https://github.com/ColCh/isparta-instrumenter-loader
      // Instrument JS files with Isparta for subsequent code coverage reporting
      // Skips node_modules and files that end with .spec.js
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/,
      ],
      loader: 'isparta-instrumenter',
      query: {
        babel: {
          presets: ['es2015']
        }
      }
    }],
    loaders: [{
      // js spec loader - skips nginject/ng-annotate since it messes up the sourcemap
      test: /\.spec\.js$/,
      loaders: ['babel?{"presets":["es2015"]}'],
      exclude: /(node_modules)/,
    }, {
      // js loader
      test: /\.js$/,
      loaders: ['ng-annotate', 'nginject?deprecate', 'babel?{"presets":["es2015"]}'],
      exclude: [/(node_modules)/, /\.spec\.js$/] 
    }, {
        // sass loader
      test: /\.scss$/,
      loader: 'null',
    },
    {
      test: /\.html$/,
      loader: 'raw',
    }],
  };

  return config;
}

module.exports = createConfig();
