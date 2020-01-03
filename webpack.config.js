const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].js',
        publicPath: './'
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif|woff|eot|ttf|svg|mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: '[hash].[ext]',
                        outputPath: 'assets',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css',
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
            outputPath: 'js',
            publicPath: 'js'
        })
    ]
}