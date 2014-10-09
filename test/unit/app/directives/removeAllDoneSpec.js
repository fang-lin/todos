/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'data',
    'app',
    'removeAllDoneHtml',
    'angular-mocks'
], function (config, data) {
    'use strict';

    describe('removeAllDone:', function () {
        var ele, scope, childHead;
        var todosData = data.todos();
        todosData[0]['done'] = true;

        beforeEach(module(config.name));
        beforeEach(module('app/templates/removeAllDone.html'));
        beforeEach(module('storageMock'));

        describe('compile:', function () {
            beforeEach(inject(function ($compile, $rootScope) {
                scope = $rootScope.$new();
                scope.todos = todosData;
                scope.updateAllDone = angular.noop;

                ele = angular.element(data.targets()['removeAllDone']);

                $compile(ele)(scope);
                scope.$digest();
                childHead = scope.$$childHead;
            }));

            it('todos to be mocked data.', function () {
                expect(childHead.todos).toEqual(todosData);
            });

            describe('invoke removeAllDown:', function () {
                var _storage;
                beforeEach(inject(function (storage) {
                    _storage = storage;
                    spyOn(_storage, 'remove');
                    spyOn(scope, 'updateAllDone');

                    childHead.removeAllDown();
                    scope.$digest();
                }));

                it('storage.remove have been called.', function () {
                    expect(_storage.remove).toHaveBeenCalled();
                });

                it('scope.updateAllDone have been called.', function () {
                    expect(scope.updateAllDone).toHaveBeenCalled();
                });

                it('todos to has one item.', function () {
                    expect(childHead.todos).toEqual([data.todos()[1]]);
                });
            });
        });
    });
});