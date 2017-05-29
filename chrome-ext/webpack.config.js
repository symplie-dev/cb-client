const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './sign-up-app/index.html',
  filename: 'index.html',
  inject: 'body'
});
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './sign-up-app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: combineLoaders([{
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }])
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    HtmlWebpackPluginConfig,
    new copyWebpackPlugin([
      { from: 'sign-up-app/static/css/normalize.css', to: 'css/normalize.css' },
      { from: 'sign-up-app/static/css/global.css', to: 'css/global.css' }
    ])
  ]
}