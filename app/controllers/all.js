/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'controllers/TodosCtrl',
    'controllers/TodoCtrl',
    'angular'
], function (config, TodosCtrl, TodoCtrl) {
    'use strict';

    var controllers = angular.module(config.name + '.controllers', [])
        .controller('TodosCtrl', TodosCtrl)
        .controller('TodoCtrl', TodoCtrl);

    return controllers;
});