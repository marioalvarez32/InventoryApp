const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              emitError: false,
              emitWarning: true,
              failOnError: false,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
  },
};
