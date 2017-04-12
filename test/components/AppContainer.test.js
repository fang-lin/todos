import React, {Component, PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import td from 'testdouble';

import {AppContainer} from '../../app/components/AppContainer';
import MarkAllAsCompleted from '../../app/components/MarkAllAsCompleted';
import ClearCompletedItems from '../../app/components/ClearCompletedItems';
import NumOfItemsLeft from '../../app/components/NumOfItemsLeft';
import AddTodoInput from '../../app/components/AddTodoInput';
import TodosList from '../../app/components/TodosList';

describe('AppContainer', () => {
    let props;

    beforeEach(() => {
        props = {
            todos: [{
                id: 1,
                text: 'have breakfast',
                completed: false
            }],
            addTodo: td.function('addTodo'),
            updateTodo: td.function('updateTodo'),
            removeTodo: td.function('removeTodo')
        };
    });

    it('It should has a MarkAllAsCompleted', () => {
        const appContainer = shallow(<AppContainer {...props}/>);
        expect(appContainer.find(MarkAllAsCompleted).length).to.equal(1);
    });

    it('It should has a ClearCompletedItems', () => {
        const appContainer = shallow(<AppContainer {...props}/>);
        expect(appContainer.find(ClearCompletedItems).length).to.equal(1);
    });

    it('It should has a NumOfItemsLeft', () => {
        const appContainer = shallow(<AppContainer {...props}/>);
        expect(appContainer.find(NumOfItemsLeft).length).to.equal(1);
    });

    it('It should has a TodosList', () => {
        const appContainer = shallow(<AppContainer {...props}/>);
        expect(appContainer.find(TodosList).length).to.equal(1);
    });

    it('It should has a AddTodoInput', () => {
        const appContainer = shallow(<AppContainer {...props}/>);
        expect(appContainer.find(AddTodoInput).length).to.equal(1);
    });
});