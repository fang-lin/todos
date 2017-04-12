import React, {Component, PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import td from 'testdouble';

import TodoItem from '../../app/components/TodoItem';

describe('TodoItem', () => {

    it('It should has a SelectField and 4 menu items', () => {
        let props = {
            todo: {
                id: 1,
                text: 'have breakfast',
                completed: false
            }
        };

        const todoItem = render(<TodoItem {...props}/>);
        expect(todoItem.find('.todo-text').text()).to.equal('have breakfast');
    });

    it('It should has a SelectField and 4 menu items', () => {
        let props = {
            todo: {
                id: 1,
                text: 'have breakfast',
                completed: false
            },
            removeTodo: td.function('removeTodo')
        };

        const todoItem = mount(<TodoItem {...props}/>);
        todoItem.find('.todo-remove').simulate('click');

        td.verify(props.removeTodo({id: 1}));
    });

    it('It should has a SelectField and 4 menu items', () => {
        let props = {
            todo: {
                id: 1,
                text: 'have breakfast',
                completed: true
            },
        };

        const todoItem = mount(<TodoItem {...props}/>);
        expect(todoItem.find('.todo-checkbox').props().checked).to.be.true;
    });

    it('It should has a SelectField and 4 menu items', () => {
        let props = {
            todo: {
                id: 1,
                text: 'have breakfast',
                completed: false
            },
            setEditingTodo: td.function('setEditingTodo')
        };

        const todoItem = mount(<TodoItem {...props}/>);
        todoItem.find('.todo-text').simulate('doubleclick');

        td.verify(props.setEditingTodo({
            id: 1,
            text: 'have breakfast',
            completed: false
        }));
    });

    it('It should has a SelectField and 4 menu items', () => {
        let props = {
            todo: {
                id: 1,
                text: 'have breakfast',
                completed: false
            },
            updateTodo: td.function('updateTodo')
        };

        const todoItem = mount(<TodoItem {...props}/>);
        const event = {
            target: {
                checked: true
            }
        };
        todoItem.find('.todo-checkbox').simulate('change', event);

        td.verify(props.updateTodo({
            id: 1,
            completed: true
        }));
    });
});