import React, {Component, PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import td from 'testdouble';

import EditTodoInput from '../../app/components/EditTodoInput';

describe('EditTodoInput', () => {
    let props;

    beforeEach(() => {
        props = {
            todo: {
                id: 1,
                text: 'have breakfast',
                completed: false
            },
            addTodo: td.function('addTodo'),
            updateTodo: td.function('updateTodo'),
            removeTodo: td.function('removeTodo'),
            resetEditingTodo: td.function('resetEditingTodo')
        };
    });

    it('It should has a input in default', () => {
        const editTodoInput = shallow(<EditTodoInput {...props}/>);
        expect(editTodoInput.find('input').length).to.equal(1);
    });

    it('It should has call props.updateTodo when change input', () => {
        const editTodoInput = mount(<EditTodoInput {...props}/>);
        const event = {
            target: {value: ' brush my teeth '}
        };
        editTodoInput.find('input').simulate('change', event);

        td.verify(props.updateTodo({
            id: 1,
            text: ' brush my teeth '
        }));
    });

    it('It should has call props.resetEditingTodo method when keypress enter', () => {
        const editTodoInput = mount(<EditTodoInput {...props}/>);
        const event = {
            target: {value: ' brush my teeth '},
            nativeEvent: {keyCode: 13}
        };
        editTodoInput.find('input').simulate('keypress', event);

        td.verify(props.resetEditingTodo());
    });

    it('It should has call props.removeTodo and props.resetEditingTodo methods when input is empty and keypress enter', () => {
        const editTodoInput = mount(<EditTodoInput {...props}/>);
        const event = {
            target: {value: ' '},
            nativeEvent: {keyCode: 13}
        };
        editTodoInput.find('input').simulate('keypress', event);

        td.verify(props.removeTodo({id: 1}));
        td.verify(props.resetEditingTodo());
    });

    it('It should has call props.resetEditingTodo method when input blur', () => {
        const editTodoInput = mount(<EditTodoInput {...props}/>);
        editTodoInput.find('input').simulate('blur');

        td.verify(props.resetEditingTodo());
    });

    it('It should has call props.removeTodo and props.resetEditingTodo methods when input is empty and input blur', () => {
        const editTodoInput = mount(<EditTodoInput {...props}/>);
        const event = {
            target: {value: ' '}
        };
        editTodoInput.find('input').simulate('blur', event);

        td.verify(props.removeTodo({id: 1}));
        td.verify(props.resetEditingTodo());
    });

});