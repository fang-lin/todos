/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        'storage',
        function (storage) {
            var link = function (scope, ele, attrs) {
                scope.dealAll = function () {
                    var allDone = !scope.allDone;
                    scope.todos.forEach(function (todo, index) {
                        todo.done = allDone;
                        storage.set(todo.key, todo);
                    });
                    scope.updateAllDone();
                };
            };
            return {
                restrict: 'A',
                templateUrl: 'app/templates/dealAll.html',
                replace: true,
                scope: {
                    todos: '=',
                    allDone: '=',
                    updateAllDone: '&'
                },
                link: link
            };
        }
    ];
});