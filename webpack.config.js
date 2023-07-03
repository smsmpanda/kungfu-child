const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader/dist')

module.exports = {
    entry: {
        main: './src/index.ts'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            { test: /\.(le|sa|sc|c)ss$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    //设置引用模块
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'test'
        })
    ]
}