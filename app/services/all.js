/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'services/storageFactory',
    'services/utilFactory',
    'angular'
], function (config, storageFactory, utilFactory) {
    'use strict';

    var services = angular.module(config.name + '.services', [])
        .factory('storage', storageFactory)
        .factory('util', utilFactory);

    return services;
});