/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

var logger = require('./util/logger');

xdescribe('#/:', function () {
    'use strict';

    beforeEach(function () {
        browser.get('')
            .then(function () {
                return browser.driver.manage().window().setSize(640, 800);
            });
    });

    describe('checking URL |', function () {
        it('#/', function () {
            browser.getLocationAbsUrl()
                .then(function (url) {
                    logger.info('>>> URL #/');
                    expect(url.split('#')[1]).toBe('/');
                });
        });
    });

    describe('random URL |', function () {
        beforeEach(function () {
            logger.trace('>>> URL #/12345678');
            browser.get('#/12345678');
        });

        it('redirect to "#/"', function () {
            browser.getLocationAbsUrl()
                .then(function (url) {
                    logger.info('>>> REDIRECT #/');
                    expect(url.split('#')[1]).toBe('/');
                });
        });
    });

    describe('random URL |', function () {
        beforeEach(function () {
            logger.trace('>>> URL #/12345678');
            browser.get('#/12345678');
        });

        it('redirect to "#/"', function () {
            browser.getLocationAbsUrl()
                .then(function (url) {
                    logger.info('>>> REDIRECT #/');
                    expect(url.split('#')[1]).toBe('/');
                });
        });
    });
});
