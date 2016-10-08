var HtmlWebpackPlugin = require('html-webpack-plugin');
var  CopyWebpackPlugin  =  require('copy-webpack-plugin');

module.exports = {
    entry: "./src/app/main.js",
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.png$/, loader: 'file' }
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
        )
    ]

};