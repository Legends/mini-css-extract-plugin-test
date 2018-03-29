const Webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path');

module.exports = function (env) {
  const isDist = env.node_env === 'production';
  return {
    context: path.resolve(__dirname, './src'),
    devtool: false,
    entry: {
      bundle: path.resolve(__dirname, './src/entry.js')
    },
    mode: isDist ? 'production' : 'development',
    module: {
      rules: [{
          test: /\.jsx?$/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-0'],
              plugins: [
                [
                  'babel-root-import',
                  {
                    'rootPathSuffix': 'src/'
                  }
                ],
                'react-html-attrs',
                'transform-class-properties',
                'transform-decorators-legacy'
              ]
            }
          }]
        },
        {
          test: /\.(css|scss)$/,
          use: [{
              loader: MiniCssExtractPlugin.loader
            }, {
              loader: 'css-loader',
              options: {
                minimize: true,
                url: false
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, './node_modules/compass-mixins/lib')
                ]
              }
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(__dirname, './src/styles/vars.scss')
                ]
              }
            }
          ]

        }
      ]
    },
    optimization: {
      minimize: isDist,
      runtimeChunk: false,
      splitChunks: {
        automaticNameDelimiter: "-",
        cacheGroups: {
          styles: {
            name: 'bundle',
            test: /\.(css|scss)$/,
            chunks: 'all',
            enforce: true
          },
          vendor: {
            chunks: 'initial',
            name: 'vendor',
            priority: -10,
            test: /node_modules/        
          }
        }
      }
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/'
    },
    plugins: [
      new CleanWebpackPlugin("./dist/"),
      new Webpack.optimize.OccurrenceOrderPlugin(),
      new Webpack.optimize.ModuleConcatenationPlugin(),
      new Webpack.HashedModuleIdsPlugin(),
      //new ExtractTextPlugin('[name].css')
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        // chunkFilename: "bundle.css"
      })
    ]
  }
};