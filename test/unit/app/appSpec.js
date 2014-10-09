/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'app',
    'data'
], function (app, data) {
    'use strict';

    describe('appSpec:', function () {
        it('app name to to be "todos".', function () {
            expect(app.name).toBe(data.name());
        });
        it('check app requires list.', function () {
            expect(app.requires).toEqual(data.requires());
        });

    });
});