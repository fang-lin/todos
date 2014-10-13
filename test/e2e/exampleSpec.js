/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

var logger = require('./util/logger');
var todosData = require('./util/data');

describe('todos e2e testing:', function () {
    'use strict';

    var delayFn = function () {
        return browser.sleep(0);
    };

    describe('redirect to #/todo:', function () {
        beforeEach(function () {
            logger.trace('redirect to:', '#/todo');
            browser.get('#/todo');
        });

        it('check url.', function () {
            browser.getLocationAbsUrl()
                .then(function (url) {
                    logger.info('assertion:', '#/todo/*');
                    expect(url.split('#')[1].split('/')[1]).toBe('todo');
                })
                .then(delayFn);
        });

        describe('input todos first:', function () {

            beforeEach(function () {
                todosData.reduce(function (defer, todo) {
                    return defer
                        .then(function () {
                            return element(by.css('#create-at')).getText();
                        })
                        .then(function (createAt) {
                            var len = createAt.length;
                            logger.info('assertion:', 'exist createAt');
                            return expect(len).toBe(24);
                        })
                        .then(function () {
                            return element(by.css('#update-at')).getText();
                        })
                        .then(function (updateAt) {
                            var len = updateAt.length;
                            logger.info('assertion:', 'updateAt to be empty');
                            return expect(len).toBe(0);
                        })
                        .then(function () {
                            return element(by.css('#title'));
                        })
                        .then(function (titleInput) {
                            logger.trace('input title:', todo.title);
                            return titleInput.sendKeys(todo.title);
                        })
                        .then(delayFn)
                        .then(function () {
                            return element(by.css('#detail'));
                        })
                        .then(function (detailInput) {
                            logger.trace('input detail:', todo.detail);
                            return detailInput.sendKeys(todo.detail);
                        })
                        .then(delayFn)
                        .then(function () {
                            return element(by.css('#update-at')).getText();
                        })
                        .then(function (updateAt) {
                            var len = updateAt.length;
                            logger.info('assertion:', 'exist updateAt');
                            return expect(len).toBe(24);
                        })
                        .then(function () {
                            logger.trace('click:', '#new-todo');
                            return element(by.css('#new-todo')).click();
                        })
                        .then(delayFn);
                }, browser.waitForAngular());
            });

            describe('todos list:', function () {

                beforeEach(function () {
                    logger.trace('click:', '#back-list');
                    element(by.css('#back-list')).click();
                });

                it('check url.', function () {
                    browser.getLocationAbsUrl()
                        .then(function (url) {
                            logger.info('assertion:', '#/todos');
                            expect(url.split('#')[1]).toBe('/todos');
                        })
                        .then(delayFn);
                });

                it('check titles & details.', function () {
                    var titles = todosData.map(function (ele) {
                        return ele.title;
                    }).reverse();

                    var details = todosData.map(function (ele) {
                        return ele.detail;
                    }).reverse();

                    browser.waitForAngular()
                        .then(function () {
                            return element.all(by.repeater('todo in todos').column('title'))
                                .map(function (ele) {
                                    return ele.getText();
                                })
                                .then(function (todos) {
                                    logger.info('assertion:', 'titles to be', titles.join(','));
                                    expect(todos).toEqual(titles);
                                })
                                .then(delayFn);
                        })
                        .then(function () {
                            element.all(by.repeater('todo in todos').column('detail'))
                                .map(function (ele) {
                                    return ele.getText();
                                })
                                .then(function (todos) {
                                    logger.info('assertion:', 'details to be', details.join(','));
                                    expect(todos).toEqual(details);
                                })
                                .then(delayFn);
                        });
                });

                it('click deal buttons.', function () {
                    todosData.reduce(function (defer, todo, index) {
                        return defer
                            .then(function () {
                                return element.all(by.css('.deal-btn')).get(index);
                            })
                            .then(function (btn) {
                                logger.trace('click:', '.deal-btn[' + index + ']');
                                return btn.click();
                            })
                            .then(delayFn)
                            .then(function () {
                                return element.all(by.css('.deal-btn')).get(index);
                            })
                            .then(function (btn) {
                                logger.trace('click:', '.deal-btn[' + index + ']');
                                return btn.click();
                            })
                            .then(delayFn);

                    }, browser.waitForAngular());
                });

                describe('remove each todos:', function () {
                    it('click remove buttons.', function () {
                        todosData.reduce(function (defer, todo, index) {
                            var expectLen = todosData.length - index - 1;
                            return defer
                                .then(function () {
                                    return element.all(by.css('.remove-btn')).get(0);
                                })
                                .then(function (btn) {
                                    logger.trace('click:', '.remove-btn');
                                    return btn.click();
                                })
                                .then(function () {
                                    return element.all(by.css('ul.todos li')).count();
                                })
                                .then(function (count) {
                                    logger.info('assertion:', 'todos.length to be', expectLen);
                                    return expect(count).toBe(expectLen);
                                })
                                .then(delayFn);
                        }, browser.waitForAngular());
                    });
                });

                describe('deal & remove all todos:', function () {
                    beforeEach(function () {
                        element(by.css('#deal-all-btn')).click()
                            .then(function () {
                                return element(by.css('#remove-all-done-btn')).click();
                            });
                    });

                    it('check todos.length.', function () {
                        element.all(by.css('ul.todos li')).count()
                            .then(function (count) {
                                logger.info('assertion:', 'todos.length to be 0');
                                return expect(count).toBe(0);
                            })
                            .then(delayFn);
                    });
                });

                afterEach(function () {
                    element(by.css('#deal-all-btn')).click()
                        .then(function () {
                            return element(by.css('#remove-all-done-btn')).click();
                        });
                });
            });
        });
    });
});