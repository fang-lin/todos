/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'underscore',
    'angular'
], function (config, _) {
    'use strict';

    var filter = angular.module(config.name + '.filters', [])
        .filter('count', [
            function () {
                return function (array, prop, reverse) {
                    return _.filter(array, function (ele) {
                        return reverse ? !ele[prop] : ele[prop];
                    }).length;
                };
            }
        ]);

    return filter;
});