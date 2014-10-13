/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'data',
    'app',
    'dealAllHtml',
    'angular-mocks'
], function (config, data) {
    'use strict';

    describe('dealAll:', function () {
        var ele, scope, childHead;
        var todosData = data.todos;

        beforeEach(module(config.name));
        beforeEach(module('app/templates/dealAll.html'));
        beforeEach(module('storageMock'));

        describe('compile:', function () {
            beforeEach(inject(function ($compile, $rootScope) {
                scope = $rootScope.$new();
                scope.allDone = false;
                scope.todos = todosData();
                scope.updateAllDone = function () {
                    scope.allDone = true;
                };

                ele = angular.element(data.targets()['dealAll']);

                $compile(ele)(scope);
                scope.$digest();
                childHead = scope.$$childHead;
            }));

            it('allDone to be false.', function () {
                expect(childHead.allDone).toBeFalsy();
            });

            it('todos to be mocked data.', function () {
                expect(childHead.todos).toEqual(todosData());
            });

            describe('invoke dealAll:', function () {
                var _storage;
                beforeEach(inject(function (storage) {
                    _storage = storage;
                    spyOn(_storage, 'set');
                    // Deal all todos
                    childHead.dealAll();
                    scope.$digest();
                }));

                it('storage.set have been called.', function () {
                    expect(_storage.set).toHaveBeenCalled();
                });

                it('all todo.done to be true.', function () {
                    childHead.todos.forEach(function (todo) {
                        expect(todo.done).toBeTruthy();
                    });
                });

                it('childHead.allDone to be true.', function () {
                    expect(childHead.allDone).toBeTruthy();
                });
            });
        });
    });
});