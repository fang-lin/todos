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
    it('It should has a SelectField and 4 menu items', () => {
        let props = {
            todos: [{
                id: 1,
                text: 'have breakfast',
                completed: false
            }],
            addTodo: td.function('addTodo'),
            updateTodo: td.function('updateTodo'),
            removeTodo: td.function('removeTodo'),
        };

        const appContainer = shallow(<AppContainer {...props}/>);
        expect(appContainer.find(MarkAllAsCompleted).length).to.equal(1);
        expect(appContainer.find(ClearCompletedItems).length).to.equal(1);
        expect(appContainer.find(NumOfItemsLeft).length).to.equal(1);
        expect(appContainer.find(TodosList).length).to.equal(1);
        expect(appContainer.find(AddTodoInput).length).to.equal(1);
    })
});