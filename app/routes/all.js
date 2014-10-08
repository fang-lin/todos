/**
 * Created by Justin on 14-6-5.
 */

define([
    'config',
    'angular'
], function (config) {
    'use strict';

    var routes = angular.module(config.name + '.routes', [])
        .config([
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider
                    .when('/', {
                        controller: 'TodosCtrl',
                        templateUrl: 'app/views/todos.html'
                    })
                    .when('/todos', {
                        controller: 'TodosCtrl',
                        templateUrl: 'app/views/todos.html'
                    })
                    .when('/todo/:key?', {
                        controller: 'TodoCtrl',
                        templateUrl: 'app/views/todo.html'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            }]);

    return routes;
});
