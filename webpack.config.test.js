'use strict';

module.exports = {
   // Karma will set these up
  entry: {},
  output: {},

  devtool: 'inline-source-map',
  plugins: [],

  babel: {
    presets: ['es2015']
  },

  module: {
    preLoaders: [{
      // ISPARTA LOADER
      // Reference: https://github.com/deepsweet/isparta-loader
      // Instrument JS files with Isparta for subsequent code coverage reporting
      // Skips node_modules and files that end with .spec.js
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/,
      ],
      loader: 'isparta'
    }],
    loaders: [{
      // js spec loader - skips nginject/ng-annotate since it messes up the sourcemap
      test: /\.spec\.js$/,
      loaders: ['babel'],
      exclude: /(node_modules)/,
    }, {
      // js loader
      test: /\.js$/,
      loaders: ['ng-annotate', 'nginject?deprecate', 'babel'],
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
  }
};
