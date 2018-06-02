var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const publicPath = '/';
module.exports = {
  // mode: 'development',
  entry: [ paths.appMainTs],
  output: {
    pathinfo: true,
    path: paths.appBuild,
    // path: path.resolve(__dirname, 'dist'),
    publicPath: publicPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        // options: {
        // 	javascriptEnabled: true
        // }
      },
      {
        test: /\.ts$/,
        // exclude: /node_modules/,
        loader: 'ts-loader'
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loader: "babel-loader",
      //   options: {
      //     presets: ['@babel/preset-env']
      //   }
      //
      // },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
          }
        }
      },
      {
        test: /\.(png|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  // require 文件时可省略后缀 .js 和 .ts
  resolve: {
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx', '.ts', '.tsx']
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3006 // 修改端口，一般默认是8080
  },
  plugins: [
    new CleanWebpackPlugin([paths.appBuild]),
    // new HtmlWebpackPlugin({
    //   title: 'Hot Module Replacement',
    //   inject: true,
    //   template: './src/index.html',
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
};
