/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    var todos = [
        {
            key: '12345678',
            title: 'Free Talk: angular automated testing',
            detail: 'angular, karma, protractor, unit test, e2e test.',
            done: false,
            createAt: 1412843373965,
            updateAt: 1412843373987
        },
        {
            key: '87654321',
            title: 'Sprint review meeting',
            detail: 'Parallel Tree View, Translation Memory View.',
            done: false,
            createAt: 1412843373993,
            updateAt: 1412843373999
        }
    ];

    var targets = {
        dealAll: '<span deal-all todos="todos" update-all-done="updateAllDone()" all-done="allDone"></span>',
        removeAllDone: '<span remove-all-done todos="todos" update-all-done="updateAllDone()"></span>'
    };

    var requires = [
        'ngRoute',
        'ngAnimate',
        'todos.routes',
        'todos.controllers',
        'todos.directives',
        'todos.filters',
        'todos.services'
    ];

    return {
        name: function () {
            return 'todos';
        },
        requires: function () {
            return JSON.parse(JSON.stringify(requires));
        },
        todos: function () {
            return JSON.parse(JSON.stringify(todos));
        },
        targets: function () {
            return JSON.parse(JSON.stringify(targets));
        }
    };
});