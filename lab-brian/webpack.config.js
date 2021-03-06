'use strict';

require('dotenv').config({ path: `${__dirname}/.dev.env` });
const production = process.env.NODE_ENV === 'production';

const {DefinePlugin, EnvironmentPlugin} = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
// clean plugin gets rid of any additional folders that get made with your build
const UglifyPlugin = require('uglifyjs-webpack-plugin');
// minifies and obfuscates
const ExtractPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new EnvironmentPlugin(['NODE_ENV']),
  new ExtractPlugin('bundle-[hash].css'),
  new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
  }),
];

if(production) {
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
}
// removes any additional folders, minifies all production based assetts and folders, if production is true it gets these 2 additional plugins

module.exports = {
  plugins,
  // destructured sames as plugins: plugins
  entry: `${__dirname}/src/main.js`,
  devServer: {
    historyApiFallback: true,
    // allows for us to use react browser router
  },
  devtool: production ? undefined : 'cheap-module-eval-source-map',
  output: {
    path: `${__dirname}/build`,
    publicPath: process.env.CDN_URL,
    filename: 'bundle-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader : 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(woff|woff2|ttf|eot|glyph|\.svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'image/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 6000,
              name: 'image/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp3|aac|aiff|wav|flac|m4a|mp4|ogg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'audio/[name].[ext]' },
          },
        ],
      },
    ],
  },
};