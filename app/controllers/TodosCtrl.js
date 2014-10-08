/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$scope',
        '$location',
        'storage',
        function ($rootScope, $scope, $location, storage) {

            $scope.fetch = function () {
                $scope.todos = storage.fetch();
            };

            $scope.clearAll = function () {
                storage.clear();
                $scope.todos = [];
            };

            $scope.remove = function (key) {
                delete $scope.todos[key];
                storage.remove(key);
            };

            $scope.deal = function (key) {
                var todo = $scope.todos[key];
                todo.done = !todo.done;
                storage.set(key, todo);
            };

            $scope.doneAll = function () {
                for (var key in $scope.todos) {
                    if ($scope.todos.hasOwnProperty(key)) {
                        var todo = $scope.todos[key];
                        todo.done = true;
                        storage.set(key, todo);
                    }
                }
            };

            $scope.fetch();
        }];
});