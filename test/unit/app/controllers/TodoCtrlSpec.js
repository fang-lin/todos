/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'controllers/TodoCtrl',
    'data',
    'app',
    'angular-mocks',
    'storageMock',
    'utilMock'
], function (config, TodoCtrl, data) {
    'use strict';

    describe('TodoCtrl:', function () {
        var scope;
        var todosData = data.todos;

        beforeEach(module(config.name));
        beforeEach(module('storageMock'));
        beforeEach(module('utilMock'));

        describe('no has key in $routeParams:', function () {
            beforeEach(inject(function ($rootScope, $injector) {
                scope = $rootScope.$new();
                $injector.instantiate(TodoCtrl, {
                    $scope: scope
                });
            }));

            it('todo to be undefined.', function () {
                expect(scope.todo).toBeUndefined();
            });
        });

        describe('key is "00000000" in $routeParams:', function () {
            beforeEach(inject(function ($rootScope, $injector) {
                scope = $rootScope.$new();
                $injector.instantiate(TodoCtrl, {
                    $scope: scope,
                    $routeParams: {
                        key: '00000000'
                    }
                });
            }));

            it('check that util to be mocked.', function () {
                expect(scope.todo).toEqual({
                    key: todosData()[1].key,
                    createAt: todosData()[1].createAt
                });
            });
        });

        describe('key is "12345678" in $routeParams:', function () {
            beforeEach(inject(function ($rootScope, $injector) {
                scope = $rootScope.$new();
                $injector.instantiate(TodoCtrl, {
                    $scope: scope,
                    $routeParams: {
                        key: todosData()[0].key
                    }
                });
            }));

            it('check that storage to be mocked.', function () {
                expect(scope.todo).toEqual(todosData()[0]);
            });

            describe('invoke submit:', function () {
                var _storage;
                beforeEach(inject(function (storage) {
                    _storage = storage;
                    spyOn(_storage, 'set');
                    scope.submit();
                }));

                it('storage.set have been called.', function () {
                    expect(_storage.set).toHaveBeenCalled();
                });
            });
        });
    });
});