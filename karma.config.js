var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [
            'test/tests.webpack.js'
        ],

        preprocessors: {
            // add webpack as preprocessor
            'test/tests.webpack.js': ['webpack', 'sourcemap']
        },

        webpack: {
            //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                rules: [
                    {
                        test: /\.js?$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                'airbnb', 'stage-1'
                            ],
                            plugins: [['istanbul', {
                                'exclude': ['**/*.test.js', '**/tests.webpack.js', '**/actions/index.js']
                            }], 'rewire']
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
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': 'window'
            }
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
            dir: 'coverage',
            reporters: [
                {type: 'html'}
            ],
            check: {
                global: {
                    statements: 85,
                    branches: 85,
                    functions: 85,
                    lines: 85
                }
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        // browsers: ['PhantomJS'],
        singleRun: false,
        client: {
            captureConsole: false
        },
        browserNoActivityTimeout: 60000,
        captureTimeout: 60000,
        browserDisconnectTolerance: 1,
        browserDisconnectTimeout: 10000
    })
};