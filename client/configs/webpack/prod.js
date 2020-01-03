// production config
const merge = require('webpack-merge');
const webpack = require('webpack');
const {resolve} = require('path');
const Dotenv = require('dotenv-webpack');
const commonConfig = require('./common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [
      new HtmlWebpackPlugin({template: 'index.html.ejs',}),
  ],
});
