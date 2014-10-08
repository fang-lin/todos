/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'angular'
], function (config) {
    'use strict';

    var filter = angular.module(config.name + '.filters', [])
        .filter('formatSpace', [
            function () {
                return function (text) {
                    //将空字符转换成半角空格（\u2000），用于字符占位，修复UI上的Bug。
                    if (text == null || text === '') {
                        return '\u2000';
                    } else {
                        return text;
                    }
                };
            }
        ])
        .filter('toPercent', [
            function () {
                return function (num) {
                    //将数字转换成百分比形式
                    if (!isNaN(num)) {
                        return (num * 100).toFixed(2) + '%';
                    } else {
                        return num;
                    }
                };
            }
        ]);

    return filter;
});