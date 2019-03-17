/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */

const path = require('path');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

module.exports = merge(webpackConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.prod.json')
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              emitError: true
            }
          }
        ]
      }
    ]
  }
});
