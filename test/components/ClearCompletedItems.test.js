import React, {Component, PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import td from 'testdouble';

import ClearCompletedItems from '../../app/components/ClearCompletedItems';

describe('ClearCompletedItems', () => {

    it('It should has a SelectField and 4 menu items', () => {
        let props = {
            todos: [],
            removeTodo: td.function('removeTodo')
        };

        const clearCompletedItems = render(<ClearCompletedItems {...props}/>);
        expect(clearCompletedItems.text()).to.equal('');
    });

    it('It should has a SelectField and 4 menu items', () => {
        let props = {
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

        const clearCompletedItems = render(<ClearCompletedItems {...props}/>);
        expect(clearCompletedItems.text()).to.equal('Clear 2 completed items');
    });

    it('It should has a SelectField and 4 menu items', () => {
        const props = {
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

        const clearCompletedItems = mount(<ClearCompletedItems {...props}/>);

        clearCompletedItems.find('button').simulate('click');

        td.verify(props.removeTodo({id: 1}));
        td.verify(props.removeTodo({id: 2}));
    });
});