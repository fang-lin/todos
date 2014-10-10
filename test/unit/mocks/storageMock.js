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

    angular.module('storageMock', [config.name + '.services'])
        .config(function ($provide) {
            $provide.decorator('storage', function ($delegate) {
                $delegate.get = function (key) {
                    var todos = data.todos();
                    if (key === todos[0].key) {
                        return todos[0];
                    } else {
                        return false;
                    }
                };

                $delegate.set = function () {
                };

                $delegate.fetch = function () {
                    return data.todos();
                };

                return $delegate;
            });
        });
});