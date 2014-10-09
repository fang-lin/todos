/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'directives/removeAllDone',
    'directives/dealAll',
    'angular'
], function (config, removeAllDone, dealAll) {
    'use strict';

    var directives = angular.module(config.name + '.directives', [])
        .directive('removeAllDone', removeAllDone)
        .directive('dealAll', dealAll);

    return directives;
});