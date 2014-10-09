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
                $scope.todos.forEach(function (todo, index) {
                    if (todo.key === key) {
                        $scope.todos.splice(index, 1);
                        storage.remove(key);
                        return false;
                    }
                });
                $scope.updateAllDone();
            };

            $scope.deal = function (key) {
                $scope.todos.forEach(function (todo, index) {
                    if (todo.key === key) {
                        todo.done = !todo.done;
                        storage.set(key, todo);
                        return false;
                    }
                });
                $scope.updateAllDone();
            };

            $scope.dealAll = function () {
                var allDone = !$scope.allDone;

                $scope.todos.forEach(function (todo, index) {
                    todo.done = allDone;
                    storage.set(todo.key, todo);
                });
                $scope.updateAllDone();
            };

            $scope.clearAllDone = function () {
                for (var index = 0; index < $scope.todos.length; ++index) {
                    var todo = $scope.todos[index];
                    if (todo.done) {
                        $scope.todos.splice(index, 1);
                        storage.remove(todo.key);
                        --index;
                    }
                }
                $scope.updateAllDone();
            };

            $scope.updateAllDone = function () {
                var allDone = true;
                $scope.todos.forEach(function (todo, index) {
                    if (!todo.done) {
                        allDone = false;
                        return false;
                    }
                });
                $scope.allDone = allDone;
            };

            $scope.fetch();
            $scope.updateAllDone();
        }];
});