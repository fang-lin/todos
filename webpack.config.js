var webpack = require('webpack');

module.exports = {
    entry: {
        main: './app/main',
        vendor: ['react', 'lodash', 'classnames']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react', 'es2015', 'stage-1'
                    ]
                }
                // use: [
                //     {
                //         loader: "style-loader"
                //     },
                //     {
                //         loader: "css-loader",
                //         options: {
                //             modules: true
                //         }
                //     }
                // ]
                // loader: 'babel',
                // query: {
                //     presets: ['react', 'es2015', 'stage-1']
                // },
                // exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules"
        ]
    },
    devtool: 'inline-source-map',
    output: {
        path: __dirname + '/public',
        filename: 'main-dev.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor-dev.js'})
    ]
};
