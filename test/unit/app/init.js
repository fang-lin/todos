/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

var tests = [];

for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    baseUrl: '/base',
    paths: {
        // Libs
        'jquery': 'lib/jquery/dist/jquery',
        'underscore': 'lib/underscore/underscore',
        'crypto': 'lib/crypto/crypto',
        'angular': 'lib/angular/angular',
        'angular-route': 'lib/angular-route/angular-route',
        'angular-animate': 'lib/angular-animate/angular-animate',
        'angular-mocks': 'lib/angular-mocks/angular-mocks',
        // Apps
        'config': 'app/config',
        'app': 'app/app',
        'routes': 'app/routes',
        'controllers': 'app/controllers',
        'directives': 'app/directives',
        'services': 'app/services',
        'filters': 'app/filters',
        // data
        'data': 'test/data',
        // Mocks
        'storageMock': 'test/unit/mocks/storageMock',
        'utilMock': 'test/unit/mocks/utilMock',
        // Templates
        'dealAllHtml': 'app/templates/dealAll.html',
        'removeAllDoneHtml': 'app/templates/removeAllDone.html'
    },
    shim: {
        angular: {
            deps: ['jquery']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-mocks': {
            deps: ['angular']
        },
        'dealAllHtml': {
            deps: ['angular']
        },
        'removeAllDoneHtml': {
            deps: ['angular']
        }
    },
    deps: tests,
    // start test run, once Require.js is done
    callback: window.__karma__.start
});
