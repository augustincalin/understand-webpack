var HtmlWebpackPlugin = require('html-webpack-plugin');
var  CopyWebpackPlugin  =  require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/app/main.js",
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")  },
            { test: /\.png$/, loader: 'file' },
            { test: /\.jpg$/, loader: 'file?name=[path][name].[ext]' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin(
            [
                {
                    from: 'src/assets/images/frankfurt.jpg',
                    to: 'assets/images/frankfurt.jpg'
                }
            ]
        ),
        new ExtractTextPlugin("styles.css")
    ]

};