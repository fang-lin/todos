/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'jquery',
    'crypto'
], function ($, crypto) {
    'use strict';

    function now() {
        return (new Date()).getTime();
    }

    function randomBytes(size, callback) {
        return crypto.randomBytes(size, callback).toString('hex');
    }

    return [
        '$rootScope',
        '$scope',
        '$routeParams',
        '$location',
        'storage',
        function ($rootScope, $scope, $routeParams, $location, storage) {
            var key = $routeParams['key'];

            if (key) {
                $scope.todo = storage.get(key) || {
                    key: randomBytes(8),
                    createAt: now()
                };
            } else {
                key = randomBytes(8);
                $location.path('todo/' + key);
            }

            $scope.submit = function () {
                if ($scope.todo && $.trim($scope.todo.title) && $.trim($scope.todo.detail)) {
                    $scope.todo.updateAt = now();
                    storage.set(key, $scope.todo);
                }
            };

            $scope.$watch('todo.title + todo.detail', $scope.submit);
        }];
});