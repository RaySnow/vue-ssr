const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    devtool: false,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'postcss-loader'
                    ],
                    fallback: 'vue-style-loader'
                })
            },
            {
                test: /\.styl(us)?$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'stylus-loader'
                    ],
                    fallback: 'vue-style-loader'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ],
                    fallback: 'vue-style-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ],
                    fallback: 'vue-style-loader'
                })
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                indentedSyntax: true
                            }
                        }
                    ],
                    fallback: 'vue-style-loader'
                })
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin({
            filename: 'common.[chunkhash].css',
            allChunks: true
        })
    ]
}
