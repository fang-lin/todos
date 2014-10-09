/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'data',
    'angular'
], function (config, data) {
    'use strict';

    angular.module('utilMock', [config.name + '.services'])
        .config(function ($provide) {
            $provide.decorator('util', function ($delegate) {
                $delegate.randomBytes = function () {
                    return data.todos()[1].key;
                };
                $delegate.now = function () {
                    return data.todos()[1].createAt;
                };
                return $delegate;
            });
        });
});