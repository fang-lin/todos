import React, {Component, PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import td from 'testdouble';

import TodoItem from '../../app/components/TodoItem';

describe('TodoItem', () => {
    let props;

    beforeEach(() => {
        props = {
            todo: {
                id: 1,
                text: 'have breakfast',
                completed: false
            },
            removeTodo: td.function('removeTodo'),
            updateTodo: td.function('updateTodo'),
            setEditingTodo: td.function('setEditingTodo')
        };
    });

    it('It should has a correct text in default', () => {
        const todoItem = render(<TodoItem {...props}/>);
        expect(todoItem.find('.todo-text').text()).to.equal('have breakfast');
    });

    it('It should has call props.removeTodo when click remove button', () => {
        const todoItem = mount(<TodoItem {...props}/>);
        todoItem.find('.todo-remove').simulate('click');

        td.verify(props.removeTodo({id: 1}));
    });

    it('It should has a checked input when todo is completed', () => {
        const todoItem = mount(<TodoItem {...props}/>);
        todoItem.setProps({
            todo: {
                id: 1,
                text: 'have breakfast',
                completed: true
            }
        });

        expect(todoItem.find('.todo-checkbox').props().checked).to.be.true;
    });

    it('It should call props.setEditingTodo method when double click text', () => {
        const todoItem = mount(<TodoItem {...props}/>);
        todoItem.find('.todo-text').simulate('doubleclick');

        td.verify(props.setEditingTodo({
            id: 1,
            text: 'have breakfast',
            completed: false
        }));
    });

    it('It should has call props.updateTodo when change input', () => {
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