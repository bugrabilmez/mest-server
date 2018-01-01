const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js[x]?$/, include: path.resolve(__dirname, '/'), exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    target: 'node'
};