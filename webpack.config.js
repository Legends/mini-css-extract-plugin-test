const Webpack = require("webpack");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
debugger;
// I want to output one vendors.js and one bundle.js and once bundle.css file.

module.exports = {

  context: path.resolve(__dirname, "./src"),
  devtool: false,
  entry: {
    main: ["./polyfills.js", path.resolve(__dirname, "./src/entry.js")],   
  },
  optimization: {
    minimize: false,
    runtimeChunk: false,
    // splitChunks: {
    //   cacheGroups: {         
    //     style: {
    //       chunks: "all",
    //       name: "bundle",
    //       // priority: -20,
    //       enforce: true,
    //       test: /\*.(css|scss)$/,
    //       // reuseExistingChunk: true
    //     },
    //     vendor: {
    //       chunks: "initial", // all
    //       name: "vendor",
    //       priority: -10,
    //       test: /node_modules/
    //     }
    //   }
    // }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin("./dist/"),
    // new Webpack.optimize.OccurrenceOrderPlugin(),
    // new Webpack.optimize.ModuleConcatenationPlugin(),
    // new Webpack.HashedModuleIdsPlugin(),
    //new ExtractTextPlugin("[name].css")
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "bundle.css",
      // chunkFilename: "bundle"

    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader"        
        }]
      },
      // {
      //   test: /\.(css|scss)$/,
      //   use: [{
      //       loader: MiniCssExtractPlugin.loader
      //     },
      //     {
      //       loader: "css-loader",
      //       options: {
      //         minimize: true,
      //         url: false
      //       }
      //     },
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         includePaths: [
      //           path.resolve(__dirname, "./node_modules/compass-mixins/lib")
      //         ]
      //       }
      //     },
      //     {
      //       loader: "sass-resources-loader",
      //       options: {
      //         resources: [
      //           path.resolve(__dirname, "./src/styles/vars.scss")
      //         ]
      //       }
      //     }
      //   ]

      // }
    ]
  },
  resolve:{
    extensions: [".ts", ".js", ".txt", ".json", ".css", ".less", ".scss", ".saas"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "/"
  }
}
