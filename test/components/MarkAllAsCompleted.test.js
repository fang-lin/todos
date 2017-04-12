import React, {Component, PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import td from 'testdouble';

import MarkAllAsCompleted from '../../app/components/MarkAllAsCompleted';

describe('MarkAllAsCompleted', () => {

    it('It should has a SelectField and 4 menu items', () => {
        let props = {
            todos: [],
        };

        const markAllAsCompleted = render(<MarkAllAsCompleted {...props}/>);
        expect(markAllAsCompleted.text()).to.equal('');
    });

    it('It should has a SelectField and 4 menu items', () => {
        let props = {
            todos: [{
                id: 1,
                text: 'have breakfast',
                completed: false
            }, {
                id: 2,
                text: 'brush my teeth',
                completed: false
            }],
        };

        const markAllAsCompleted = render(<MarkAllAsCompleted {...props}/>);
        expect(markAllAsCompleted.text()).to.equal('Mark all as complete');
    });

    describe('It should has a SelectField and 4 menu items', () => {
        let props;
        let markAllAsCompleted;

        beforeEach(() => {
            props = {
                todos: [{
                    id: 1,
                    text: 'have breakfast',
                    completed: false
                }, {
                    id: 2,
                    text: 'brush my teeth',
                    completed: false
                }],
                updateTodo: td.function('updateTodo')
            };

            markAllAsCompleted = mount(<MarkAllAsCompleted {...props}/>);
        });

        it('', () => {
            const event = {
                target: {checked: true}
            };
            markAllAsCompleted.find('input').simulate('change', event);

            td.verify(props.updateTodo({
                id: 1,
                completed: true
            }));
            td.verify(props.updateTodo({
                id: 2,
                completed: true
            }));
        });

        it('', () => {

            const event = {
                target: {checked: false}
            };
            markAllAsCompleted.find('input').simulate('change', event);

            td.verify(props.updateTodo({
                id: 1,
                completed: false
            }));
            td.verify(props.updateTodo({
                id: 2,
                completed: false
            }));
        });
    });

});