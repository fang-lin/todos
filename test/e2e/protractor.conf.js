/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

exports.config = {
    allScriptsTimeout: 30000,

    specs: [
        'exampleSpec.js'
    ],

    capabilities: {
        'browserName': 'chrome' //'firefox'
    },

    chromeOnly: false,

    baseUrl: 'http://localhost:8000/',

    framework: 'jasmine',

    onPrepare: function () {
        'use strict';

        browser.addMockModule('mock', function () {
            angular.module('mock', [])
                .run(function ($animate) {
                    $animate.enabled(false);
                });
        });
    },

    debug: false,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};