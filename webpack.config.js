'use strict';

// Modules
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

const sassLoaders = [
  'css-loader?sourceMap',
  'postcss-loader?sourceMap',
  `sass-loader?sourceMap&indentedSyntax=sass&includePaths[]=${srcDir}`,
];

/**
 * Config
 * Reference: http://webpack.github.io/docs/configuration.html
 * This is the object where all configuration gets set
 */
module.exports = {

  /**
   * Entry file of the app
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   */
  entry: {
    app: './src/index.js',
  },

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   */
  output: {
    // Absolute output directory
    path: distDir,

    // Output path from the view of the page
    publicPath: '/',

    // Filename for entry points
    filename: '[name].[hash].js',

    // Filename for non-entry points
    chunkFilename: '[name].[hash].js',
  },

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  devtool: 'source-map',

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   */
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint',
        exclude: /node_modules/,
      },
    ],
    loaders: [{
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader to compile ES6 and ES7 into ES5 code.
      // Uses ng-annotate and nginject to handle anguler DI
      test: /\.js$/,
      loaders: ['ng-annotate', 'nginject?deprecate', 'babel?{"presets":["es2015"]}'],
      exclude: /node_modules/,
    }, {
      // sass loader
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
    }, {
      // CSS LOADER
      // Reference: https://github.com/webpack/css-loader
      // Allow loading css through js
      //
      // Reference: https://github.com/postcss/postcss-loader
      // Postprocess your css with PostCSS plugins
      test: /\.css$/,
      // Reference: https://github.com/webpack/extract-text-webpack-plugin
      // Extract css files in production builds
      //
      // Reference: https://github.com/webpack/style-loader
      // Use style-loader in development.
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss'),
    }, {
      // ASSET LOADER
      // Reference: https://github.com/webpack/file-loader
      // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file',
    }, {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      test: /\.html$/,
      loader: 'raw',
      exclude: /(index.html)/,
    }],
  },

  /**
   * PostCSS
   * Reference: https://github.com/postcss/autoprefixer-core
   * Add vendor prefixes to your css
   */
  postcss: [
    autoprefixer({
      browsers: ['last 2 version'],
    }),
  ],

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  plugins: [
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    // Render index.html
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),

    // Reference: https://github.com/webpack/extract-text-webpack-plugin
    // Extract css files
    new ExtractTextPlugin('[name].[hash].css'),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // Only emit files when there are no errors
    new webpack.NoErrorsPlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // Dedupe modules in the output
    new webpack.optimize.DedupePlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin(),

    // Copy assets from the public folder
    // Reference: https://github.com/kevlened/copy-webpack-plugin
    new CopyWebpackPlugin([{
      from: path.resolve(srcDir, 'public'),
    }]),
  ],
};
