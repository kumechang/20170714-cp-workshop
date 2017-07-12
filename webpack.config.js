var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src',

  entry: {
    js: "./app.js",
  },

  output: {
    path: __dirname + '/dist',
    filename: "./app.js"
  },

  resolve: {
    extensions: ['.js']
  },
  devtool: 'inline-source-map',

  devServer: {
    contentBase: 'dist',
    port: 3000,
    inline: true,
    hot: true
  },

  module: {
  }
}