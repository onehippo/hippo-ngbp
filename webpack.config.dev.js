
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: ['angular', 'angular-animate', 'angular-aria', 'angular-ui-router', 'angular-material'],
  },
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  devServer: {},

  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', `sass?sourceMap&includePaths[]=${srcDir}`],
      },
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'nginject?deprecate', 'babel'],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
        loader: 'file',
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /(index.html)/,
      },
    ],
  },
  output: {
    path: distDir,
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    publicPath: '/',
  },
  postcss: [
    autoprefixer({
      browsers: ['last 5 versions'],
    }),
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor',filename: 'vendor.bundle.js' }),
    new HtmlWebpackPlugin({
      pushState: true,
      filename: 'index.html',
      inject: 'body',
      template: 'src/index.html',
      favicon: 'src/images/favicon.ico',
      hash: false,
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [srcDir],
  },
};
