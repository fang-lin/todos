/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$scope',
        '$routeParams',
        '$location',
        'util',
        'storage',
        function ($scope, $routeParams, $location, util, storage) {
            var key = $routeParams['key'];

            if (key) {
                $scope.todo = storage.get(key) || {
                    key: key,
                    createAt: util.now()
                };
            } else {
                key = util.randomBytes(8);
                $location.path('todo/' + key);
            }

            $scope.submit = function () {
                if ($scope.todo && util.trim($scope.todo.title) && util.trim($scope.todo.detail)) {
                    $scope.todo.updateAt = util.now();
                    storage.set(key, $scope.todo);
                }
            };

            $scope.$watch('todo.title + todo.detail', $scope.submit);
        }];
});