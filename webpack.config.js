'use strict';
var webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  BowerWebpackPlugin = require("bower-webpack-plugin");

// Webpack configuration
module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:8080/#/',
      'webpack/hot/dev-server',
      './src/scripts/boot'
    ]
  },

  output: {
    path: path.join(__dirname, 'assets'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx','.html'],
    modulesDirectories: ['node_modules', 'bower_components']
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.jsx/,
        loader: 'traceur?experimental&runtime',
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url'),
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.(ttf|woff|woff2)/,
        loader: 'file'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css", {disable: process.env.NODE_ENV == 'development'}),
    new HtmlWebpackPlugin({template: path.join(__dirname, 'src','templates','index.ejs'), inject: false}),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ],

  metadata: {
    ENV: process.env.NODE_ENV
  },

  devServer: {
    contentBase: __dirname,
    hot: true
  }
};
