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
                }]
            };
        });

        it('It should has render correct num of TodoItem', () => {
            const todosList = shallow(<TodosList {...props}/>);
            expect(todosList.find(TodoItem).length).to.equal(2);
        });

        it('It should has render one EditTodoInput when setEditingTodo has been called', () => {
            const todosList = mount(<TodosList {...props}/>);

            todosList.instance().setEditingTodo(props.todos[1]);

            expect(todosList.state('editingTodo')).to.equal(props.todos[1]);
            expect(todosList.find(TodoItem).length).to.equal(1);
            expect(todosList.find(EditTodoInput).length).to.equal(1);
        });

        it('It should has a default editingTodo when resetEditingTodo has been called', () => {
            const todosList = mount(<TodosList {...props}/>);

            todosList.instance().setEditingTodo(props.todos[1]);
            todosList.instance().resetEditingTodo();

            expect(todosList.state('editingTodo')).to.deep.equal({
                id: null,
                text: null,
                completed: false
            });
            expect(todosList.find(TodoItem).length).to.equal(2);
        });
    });
});