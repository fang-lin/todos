/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'angular'
], function (config) {
    'use strict';

    var directives = angular.module(config.name + '.directives', []);
//        .directive('TodoCtrl', TodoCtrl);

    return directives;
});