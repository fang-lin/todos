// Karma configuration

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [
            'app/rassets/spec/tests.webpack.js'
        ],

        preprocessors: {
            // add webpack as preprocessor
            'app/rassets/spec/tests.webpack.js': ['webpack', 'sourcemap']
        },

        webpack: {
            //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        test: /\.(js|jsx)$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                            babelrc: false,
                            presets: ['airbnb', 'stage-1'],
                            plugins: [['istanbul', {
                                'exclude': ['**/*.test.js', '**/tests.webpack.js']
                            }], 'rewire']
                        }
                    },
                    {
                        test: /\.json$/,
                        loader: 'json-loader'
                    },
                    {
                        test: /\.less$/,
                        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader', {
                            allChunks: true
                        })
                    },
                    {
                        test: /\.css$/,
                        exclude: /node_modules\/react-big-calendar\/lib\/css\/react-big-calendar.css/,
                        loader: 'style!css-loader?-url&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
                    },
                    {
                        test: /node_modules\/react-big-calendar\/lib\/css\/react-big-calendar.css$/,
                        loader: 'style!css-loader?-url&modules&importLoaders=1&localIdentName=[local]!postcss-loader'
                    }
                ]
            },
            postcss: function () {
                return [autoprefixer];
            },
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': 'window'
            },
            plugins: [
                new ExtractTextPlugin('[name].less')
            ]
        },

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },

        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-chai',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],

        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            dir: 'coverage/react',
            reporters: [
                {type: 'text'}
            ],
            check: {
                global: {
                    statements: 25,
                    branches: 20,
                    functions: 25,
                    lines: 30
                }
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true,
        client: {
            captureConsole: false
        },

        browserNoActivityTimeout: 60000,
        captureTimeout: 60000,
        browserDisconnectTolerance: 1,
        browserDisconnectTimeout: 10000
    })
};