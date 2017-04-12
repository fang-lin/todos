import React, {Component} from 'react';
import {find, trim, each, filter} from 'lodash';

export default class EditTodoInput extends Component {

    constructor(props) {
        super(props);
    }

    toggleTodoCompletedHandle = id => {
        return event => {
            this.props.updateTodo({
                id: id,
                completed: event.target.checked
            })
        };
    };

    setEditingTodoHandle = (todo) => {
        return event => {
            this.props.setEditingTodo(todo);
        };
    };

    removeTodoHandle = id => {
        return event => {
            event.preventDefault();
            this.props.removeTodo({id});
        };
    };

    stopEditTodoHandle = id => {
        return event => {
            const text = trim(event.target.value);
            if (text.length === 0) {
                this.props.removeTodo({id});
            }
            this.props.resetEditingTodo();
        };
    };

    render() {
        return (
            <span>
                <input type="checkbox"
                       checked={this.props.todo.completed}
                       onChange={this.toggleTodoCompletedHandle(this.props.todo.id)}/>
                                    <span onDoubleClick={this.setEditingTodoHandle(this.props.todo)}>
                                        {this.props.todo.text}
                                    </span>
                                <a onClick={this.removeTodoHandle(this.props.todo.id)}>Remove</a>
            </span>
        )
    }
}