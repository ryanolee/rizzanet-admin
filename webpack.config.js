const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const webpackHTML = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv-webpack');
const dotenvFile = typeof process.env.dotenv === 'undefined' ? './.env' : process.env.dotenv;
const publicPath = process.env.PUBLIC_URL || '/';

module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    devtool: debug ? "inline-sourcemap" : null,
    output: {
        path: __dirname + "/build/",
        filename: "index.js",
        publicPath: publicPath
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpackHTML({
            template:'./public/index.html'
        }),
        new dotenv({
            path: dotenvFile
        })
        ].concat(debug ?  [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ])
};