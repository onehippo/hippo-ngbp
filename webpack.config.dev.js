'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        vendor: ['angular', 'angular-animate', 'angular-aria', 'angular-ui-router', 'angular-material']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: '/'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style/useable!css!postcss!'
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
    postcss: function() {
        return [
            autoprefixer({browsers: ['last 5 versions']})
        ];
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
        new HtmlWebpackPlugin({
            pushState: true,
            filename: 'index.html',
            inject: 'body',
            template: 'src/index.html',
            //favicon: 'img/favicon.ico',
            hash: false
        })
    ]
};
