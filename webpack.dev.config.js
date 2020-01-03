const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer : {
        hot: false,
        port: 9000,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.html$/,
                use:{
                    loader: 'html-loader'
                },
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|woff|eot|ttf|svg|mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8000
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
    ]
}