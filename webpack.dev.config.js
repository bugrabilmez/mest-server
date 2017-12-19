const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    ]
};