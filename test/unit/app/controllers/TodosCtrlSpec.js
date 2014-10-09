/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'controllers/TodosCtrl',
    'data',
    'app',
    'angular-mocks',
    'storageMock'
], function (config, TodosCtrl, data) {
    'use strict';

    describe('TodosCtrl:', function () {
        var scope;
        var todosData = data.todos;

        beforeEach(module(config.name));
        beforeEach(module('storageMock'));

        describe('fetch todos:', function () {
            beforeEach(inject(function ($rootScope, $injector) {
                scope = $rootScope.$new();
                $injector.instantiate(TodosCtrl, {
                    $scope: scope
                });
            }));

            it('todos to be mocked data.', function () {
                expect(scope.todos).toEqual(todosData());
            });

            it('allDone to be false.', function () {
                expect(scope.allDone).toBeFalsy();
            });

            describe('invoke remove:', function () {
                var _storage;
                beforeEach(inject(function (storage) {
                    _storage = storage;
                    spyOn(_storage, 'remove');
                    spyOn(scope, 'updateAllDone');

                    scope.remove(todosData()[0].key);
                }));

                it('todos to has one item.', function () {
                    expect(scope.todos).toEqual([
                        todosData()[1]
                    ]);
                });

                it('storage.remove have been called.', function () {
                    expect(_storage.remove).toHaveBeenCalled();
                });

                it('scope.updateAllDone have been called.', function () {
                    expect(scope.updateAllDone).toHaveBeenCalled();
                });
            });

            describe('invoke deal:', function () {
                var _storage;
                beforeEach(inject(function (storage) {
                    _storage = storage;
                    spyOn(_storage, 'set');
                    spyOn(scope, 'updateAllDone');

                    scope.deal(todosData()[0].key);
                }));

                it('todos[0].done to be true.', function () {
                    expect(scope.todos[0].done).toBeTruthy();
                });

                it('storage.set have been called.', function () {
                    expect(_storage.set).toHaveBeenCalled();
                });

                it('scope.updateAllDone have been called.', function () {
                    expect(scope.updateAllDone).toHaveBeenCalled();
                });
            });

            describe('invoke clearAll:', function () {
                var _storage;
                beforeEach(inject(function (storage) {
                    _storage = storage;
                    spyOn(_storage, 'clear');

                    scope.clearAll();
                }));

                it('todos to be empty array.', function () {
                    expect(scope.todos).toEqual([]);
                });

                it('storage.clear have been called.', function () {
                    expect(_storage.clear).toHaveBeenCalled();
                });
            });
        });
    });
});