const path = require('path')
const dev = require('./webpack.dev.config')
const prd = require('./webpack.prd.config')
const merge = require('webpack-merge')

const isProd = process.env.NODE_ENV === 'production'

module.exports = merge(isProd ? prd : dev, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            'public': path.resolve(__dirname, '../public')
        }
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
    },
    performance: {
        hints: false
    }
})
