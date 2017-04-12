import React, {Component} from 'react';

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