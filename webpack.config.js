var webpack = require('webpack');

module.exports = {
    entry: {
        main: './app/main',
        vendor: ['react', 'redux', 'react-dom', 'redux-persist', 'react-redux', 'lodash', 'classnames']
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
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
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
