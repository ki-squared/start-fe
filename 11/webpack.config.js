const newLocal = 'html-webpack-plugin';
// eslint-disable-next-line import/no-dynamic-require
const HtmlWebpackPlugin = require(newLocal);

export const entry = './src/index.js';
export const output = {
  filename: 'app.js',
  path: `${__dirname}/dist`,
};
export const devServer = {
  contentBase: './dist',
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];
