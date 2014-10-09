/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'jquery'
], function ($) {
    'use strict';

    return [
        '$window',
        function ($window) {

            var localStorage = $window.localStorage;

            var Storage = function () {
            };

            Storage.prototype.clear = function () {
                localStorage.clear();
            };

            Storage.prototype.get = function (key) {
                var todo = localStorage.getItem(key);
                if (todo) {
                    return JSON.parse(todo);
                } else {
                    return false;
                }
            };

            Storage.prototype.set = function (key, todo) {
                todo.title = $.trim(todo.title);
                todo.detail = $.trim(todo.detail);
                localStorage.setItem(key, JSON.stringify(todo));
            };

            Storage.prototype.remove = function (key) {
                return localStorage.removeItem(key);
            };

            Storage.prototype.fetch = function () {
                var list = [];
                for (var key in localStorage) {
                    if (localStorage.hasOwnProperty(key)) {
                        var todo = JSON.parse(localStorage[key]);
                        list.push({
                            key: key,
                            title: todo.title,
                            detail: todo.detail,
                            done: todo.done,
                            createAt: todo.createAt,
                            updateAt: todo.updateAt
                        });
                    }
                }
                return list;
            };

            return new Storage();
        }];
});