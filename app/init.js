/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

requirejs.config({
    paths: {
        // Libs
        'jquery': '/lib/jquery/dist/jquery',
        'underscore': '/lib/underscore/underscore',
        'crypto': '/lib/crypto/crypto',
        'angular': '/lib/angular/angular',
        'angular-route': '/lib/angular-route/angular-route',
        'angular-animate': '/lib/angular-animate/angular-animate',
        // Apps
        'config': '/app/config',
        'app': '/app/app',
        'controllers': '/app/controllers',
        'routes': '/app/routes',
        'directives': '/app/directives',
        'filters': '/app/filters'
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
        }
    }
});

require([
    'config',
    'angular',
    'app'
], function (config) {
    'use strict';

    angular.bootstrap(document, [config.name]);
});
