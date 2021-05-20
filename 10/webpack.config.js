// const path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'app.js',
        path: `${__dirname}/dist`,
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [new HtmlwebpackPlugin({
        template: './src/index.html',
    })],
};