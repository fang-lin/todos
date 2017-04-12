import React, {Component, PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import td from 'testdouble';

import MarkAllAsCompleted from '../../app/components/MarkAllAsCompleted';

describe('MarkAllAsCompleted', () => {

    it('It should has render nothing without todos', () => {
        let props = {
            todos: []
        };

        const markAllAsCompleted = render(<MarkAllAsCompleted {...props}/>);
        expect(markAllAsCompleted.text()).to.equal('');
    });

    describe('When it has todos', () => {
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
        });

        it('It should has render correct text in default', () => {
            const markAllAsCompleted = render(<MarkAllAsCompleted {...props}/>);
            expect(markAllAsCompleted.text()).to.equal('Mark all as complete');
        });

        it('It should call props.updateTodo with true when input change to checked', () => {
            const markAllAsCompleted = mount(<MarkAllAsCompleted {...props}/>);
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

        it('It should call props.updateTodo with false when input change to not checked', () => {
            const markAllAsCompleted = mount(<MarkAllAsCompleted {...props}/>);
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