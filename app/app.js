/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'angular',
    'angular-route',
    'angular-animate',
    'routes/all',
    'controllers/all',
    'directives/all',
    'filters/all',
    'services/all'
], function (config) {
    'use strict';

    var name = config.name;
    var app = angular
        .module(name, [
            'ngRoute',
            'ngAnimate',
                name + '.routes',
                name + '.controllers',
                name + '.directives',
                name + '.filters',
                name + '.services'
        ]);

    return app;
});