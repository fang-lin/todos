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
                scope.removeAllDown = function () {
                    for (var index = 0; index < scope.todos.length; ++index) {
                        var todo = scope.todos[index];
                        if (todo.done) {
                            scope.todos.splice(index, 1);
                            storage.remove(todo.key);
                            --index;
                        }
                    }
                    scope.updateAllDone();
                };
            };
            return {
                restrict: 'A',
                templateUrl: 'app/templates/removeAllDone.html',
                replace: true,
                scope: {
                    todos: '=',
                    updateAllDone: '&'
                },
                link: link
            };
        }
    ];
});