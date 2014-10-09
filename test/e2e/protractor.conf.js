/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

exports.config = {
    allScriptsTimeout: 30000,

    specs: [
        'actionSpec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    chromeOnly: false,

    baseUrl: 'http://localhost:8000/',

    framework: 'jasmine',

    onPrepare: function () {
//        'use strict';
//        var disableNgAnimate = function () {
//            angular.module('disableNgAnimate', []).run(function ($animate) {
//                $animate.enabled(false);
//            });
//        };
//        browser.addMockModule('disableNgAnimate', disableNgAnimate);
    },

    debug: false,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};