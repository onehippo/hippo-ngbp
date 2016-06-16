'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: ['angular', 'angular-animate', 'angular-aria', 'angular-ui-router', 'angular-material']
  },
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    /*stats: 'minimal'*/
  },
  module: {
    preLoaders: [
      { 
        test: /\.js?$/, 
        loader: 'eslint', 
        exclude: /node_modules/ 
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap&includePaths[]=' + path.resolve(__dirname, './src')]
      },
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'nginject?deprecate', 'babel?{"presets":["es2015"]}'],
        exclude: /(node_modules)/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /(index.html)/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    publicPath: '/'
  },
  postcss: [
      autoprefixer({
        browsers: ['last 5 versions'] 
      })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new HtmlWebpackPlugin({
      pushState: true,
      filename: 'index.html',
      inject: 'body',
      template: 'src/index.html',
      favicon: 'src/images/favicon.ico',
      hash: false
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [path.resolve(__dirname, 'src')]
  }
};
