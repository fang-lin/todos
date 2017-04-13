import React, {Component, PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import td from 'testdouble';

import TodosList from '../../app/components/TodosList';
import TodoItem from '../../app/components/TodoItem';
import EditTodoInput from '../../app/components/EditTodoInput';

describe('TodosList', () => {

    it('It should has render nothing without todos', () => {
        let props = {
            todos: []
        };

        const todosList = render(<TodosList {...props}/>);
        expect(todosList.text()).to.equal('');
    });
    
    describe('When it has todos', () => {
        let props;

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
                editingTodo: {
                    id: null,
                    text: null,
                    completed: false
                }
            };
        });

        it('It should has render correct num of TodoItem and without EditTodoInput in default', () => {
            const todosList = shallow(<TodosList {...props}/>);
            expect(todosList.find(TodoItem).length).to.equal(2);
            expect(todosList.find(EditTodoInput).length).to.equal(0);
        });

        it('It should has render a EditTodoInput when it has a editingTodo', () => {

            props.editingTodo = props.todos[1];
            const todosList = mount(<TodosList {...props}/>);

            expect(todosList.find(TodoItem).length).to.equal(1);
            expect(todosList.find(EditTodoInput).length).to.equal(1);
        });
    });
});