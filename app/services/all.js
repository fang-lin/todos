/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'services/storageFactory',
    'angular'
], function (config, storageFactory) {
    'use strict';

    var services = angular.module(config.name + '.services', [])
        .factory('storage', storageFactory);

    return services;
});