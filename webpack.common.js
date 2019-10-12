const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + '/bundling',
    filename: 'bundle.js', 
    publicPath: '/'
  },
  module: { 
      rules: [
        {
          test: /\.(sass|scss)$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }]
        }
      ]
  },
  plugins: [ 
      new HtmlWebpackPlugin({
          template: __dirname + "/src/public/index.html",
          inject: 'body'
      })
  ] 
}
