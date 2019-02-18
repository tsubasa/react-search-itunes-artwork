/* eslint-disable @typescript-eslint/no-var-requires */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/build`,
    filename: 'app.[hash:8].min.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }, { loader: 'eslint-loader' }]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(['./build']),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};
