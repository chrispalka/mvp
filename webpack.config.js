const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

module.exports = {
  entry: './compiled/public/src/app.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
      template: './public/src/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
          {from: './assets', to: 'assets'}
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}