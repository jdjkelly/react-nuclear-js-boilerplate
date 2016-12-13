const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'src');
const APP_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
		bundle: ['main']
    },

    output: {
        path: APP_DIR,
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheDirectory: '/tmp/',
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },

    resolve: {
        modules: [
            BUILD_DIR,
            "node_modules"
        ]
    },

    devServer: {
        contentBase: APP_DIR,
        compress: true,
        port: 9000,
        historyApiFallback: true,
        stats: { colors: true }
    }
}
