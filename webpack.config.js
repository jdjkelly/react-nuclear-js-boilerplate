const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'src');
const APP_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        bundle: `${BUILD_DIR}/main.js`
    },

    output: {
        path: './dist',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: '/tmp/',
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
