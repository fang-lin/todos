import React, {Component} from 'react';
import classnames from 'classnames';

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

    render() {
        return (
            <span>
                <input type="checkbox"
                       className="todo-item-checkbox"
                       checked={this.props.todo.completed}
                       onChange={this.toggleTodoCompletedHandle(this.props.todo.id)}/>
                                    <span className={classnames('todo-item-text', this.props.todo.completed ? 'completed' : '')}
                                          onDoubleClick={this.setEditingTodoHandle(this.props.todo)}>
                                        {this.props.todo.text}
                                    </span>
                                <a className="todo-item-remove" onClick={this.removeTodoHandle(this.props.todo.id)}>Remove</a>
            </span>
        )
    }
}