/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'directives/removeAllDown',
    'directives/dealAll',
    'angular'
], function (config, removeAllDown, dealAll) {
    'use strict';

    var directives = angular.module(config.name + '.directives', [])
        .directive('removeAllDown', removeAllDown)
        .directive('dealAll', dealAll);

    return directives;
});