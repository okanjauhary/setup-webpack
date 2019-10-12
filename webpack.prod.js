const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    // module: {
    //     rules: [{
    //         test: /\.tsx?$/,
    //         use: ["babel-loader", "ts-loader"],
    //         exclude: /node_modules/
    //     }]
    // },
    // optimization: {
    //     minimizer: [new UglifyJsPlugin({
    //         sourceMap: true
    //     })],
    // },
});