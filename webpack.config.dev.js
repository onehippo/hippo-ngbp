var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        vendor: ['angular', 'angular-animate', 'angular-aria', 'angular-ui-router', 'angular-material']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
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
                loader: 'babel?{"presets":["es2015"]}',
                exclude: /(node_modules)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
                loader: 'file'
            },
            /*{ 
              test: /\.(html)$/,
              loader: "file?name=[path][name].[ext]&context=./src/angularjs"
            }*/
        ]
    },
    postcss: function() {
        return [
            autoprefixer({browsers: ['last 5 versions']})
        ];
    },
    resolve: {
        root: [
            //path.resolve(__dirname),
            //path.resolve(__dirname, 'src/'),
            //path.resolve(__dirname, 'src/angularjs/')
        ]
    },
    plugins: [
        //new CopyWebpackPlugin([{ 
        //  context: 'src/angularjs', 
        //  from: '**/*.html',
        //  to: 'build' 
        //}]),
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
