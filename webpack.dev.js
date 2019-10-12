const merge = require('webpack-merge');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            }
        ]
    },
    plugins: [
        new HardSourceWebpackPlugin()
    ],
    devServer: { 
        contentBase: '/src/public', 
        compress: true,
        port: 5000,
    }
});