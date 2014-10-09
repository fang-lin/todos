/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

var logger = require('./util/logger');
var todos = require('./util/data');

describe('#/todo:', function () {
    'use strict';

    beforeEach(function () {
        browser.get('#/todo')
            .then(function () {
                return browser.driver.manage().window().setSize(640, 800);
            });
    });

    describe('checking URL:', function () {
        it('#/todo', function () {
            browser.getLocationAbsUrl()
                .then(function (url) {
                    logger.info('>>> URL #/todo/key');
                    expect(url.split('#')[1].split('/')[1]).toBe('todo');
                })
                .then(function () {
                    return browser.sleep(2000);
                })
        });
    });

    describe('input todo:', function () {
        var titleInput;
        var detailInput;

        beforeEach(function () {

        });

        it('', function () {

            var defer = todos.reduce(function (defer, todo) {
                return defer
                    .then(function () {
                        return element(by.css('#title'));
                    })
                    .then(function (titleInput) {
                        return titleInput.sendKeys(todo.title);
                    })
                    .then(function () {
                        browser.sleep(1000);
                    })
                    .then(function () {
                        return element(by.css('#detail'));
                    })
                    .then(function (detailInput) {
                        return detailInput.sendKeys(todo.detail);
                    })
                    .then(function () {
                        browser.sleep(1000);
                    })
                    .then(function () {
                        return element(by.css('#new-todo'));
                    })
                    .then(function (newTodoBtn) {
                        return newTodoBtn.click();
                    })
                    .then(function () {
                        browser.sleep(1000);
                    });

            }, browser.waitForAngular());

            defer
                .then(function () {
                    return element(by.css('#back-list'));
                })
                .then(function (backListBtn) {
                    return backListBtn.click();
                })
                .then(function (backListBtn) {
                    browser.sleep(5000);
                });
        });
    });
});