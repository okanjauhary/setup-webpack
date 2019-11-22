const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js', 
    publicPath: '/'
  },
  module: { 
      rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: [
                /node_modules/
            ]
        },
        {
            test: /\.(jpe?g|png|gif|svg|ico)$/i,
            loader: 'file-loader',
            options: {
                name: '[name].[hash].[ext]',
                outputPath: 'images',
            },
        }
      ]
  },
  plugins: [ 
      new HtmlWebpackPlugin({
          template: __dirname + '/src/public/index.html',
          inject: 'body'
      }),
      new FlowBabelWebpackPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'Assets': path.resolve(__dirname, 'src/assets/'),
      'App': path.resolve(__dirname, 'src/app/')
    }
  }
}
