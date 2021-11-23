const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (evn = {}, argv) => ({
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    client: {
      overlay: true,
      logging: 'info',
      progress: true,
      reconnect: true
    },
    host: '0.0.0.0',
    port: 8081,
    static: {
      directory: path.resolve(__dirname, 'src'),
      publicPath: '/',
      watch: {
        ignored: /node_modules/
      }
    },
    allowedHosts: 'all'
  },
  entry: './src/root.js',
  devtool: 'source-map',
  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: 'development'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
})