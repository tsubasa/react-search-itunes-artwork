'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, '/public'),
    hot: true,
    open: true,
    publicPath: webpackConfig.output.publicPath,
  }
});
