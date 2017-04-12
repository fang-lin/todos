import React, {Component, PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import td from 'testdouble';

import ClearCompletedItems from '../../app/components/ClearCompletedItems';

describe('ClearCompletedItems', () => {

    it('It should has render nothing without todos', () => {
        let props = {
            todos: [],
            removeTodo: td.function('removeTodo')
        };

        const clearCompletedItems = render(<ClearCompletedItems {...props}/>);
        expect(clearCompletedItems.text()).to.equal('');
    });

    describe('When it has todos', () => {
        let props;

        beforeEach(() => {
            props = {
                todos: [{
                    id: 1,
                    text: 'have breakfast',
                    completed: true
                }, {
                    id: 2,
                    text: 'brush my teeth',
                    completed: false
                }, {
                    id: 2,
                    text: 'clean the room',
                    completed: true
                }],
                removeTodo: td.function('removeTodo')
            };
        });

        it('It should has render a correct text', () => {
            const clearCompletedItems = render(<ClearCompletedItems {...props}/>);
            expect(clearCompletedItems.text()).to.equal('Clear 2 completed items');
        });

        it('It should call props.removeTodo method when click the button', () => {

            const clearCompletedItems = mount(<ClearCompletedItems {...props}/>);
            clearCompletedItems.find('button').simulate('click');
            td.verify(props.removeTodo({id: 1}));
            td.verify(props.removeTodo({id: 2}));
        });
    });
});