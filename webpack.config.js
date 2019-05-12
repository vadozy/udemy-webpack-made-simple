const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash].js"
  },
  devServer: {
    //contentBase: path.join(__dirname, 'dist'),
    port: 9000
    //watchContentBase: true // enable hot loading to static (html) files
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        //use: ["style-loader", "css-loader"]
        //use: ["style-loader/url", "file-loader"]
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ca]ss$/,
        use: [
            // "style-loader", // creates style nodes from JS strings
            MiniCssExtractPlugin.loader,
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  }
}
