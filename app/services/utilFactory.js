/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'jquery',
    'crypto'
], function ($, crypto) {
    'use strict';

    return [function () {

        return {
            now: function now() {
                return (new Date()).getTime();
            },
            randomBytes: function (size, callback) {
                return crypto.randomBytes(size, callback).toString('hex');
            },
            trim: $.trim
        }

    }];
});