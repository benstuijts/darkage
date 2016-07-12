'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './client',
        port: 1000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './userinterface/dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'client',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
