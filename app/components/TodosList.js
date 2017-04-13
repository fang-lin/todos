import React, {Component} from 'react';
import EditTodoInput from './EditTodoInput';
import TodoItem from './TodoItem';

export default class TodosList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.todos.length > 0 && <ul className="todo-list">
                {
                    this.props.todos.map(todo => {
                        return <li data-id={todo.id} key={todo.id} className="todo-item">
                            {
                                this.props.editingTodo.id === todo.id ?
                                    <EditTodoInput todo={todo}
                                                   updateTodo={this.props.updateTodo}
                                                   removeTodo={this.props.removeTodo}
                                                   resetEditingTodo={this.props.resetEditingTodo}/> :
                                    <TodoItem todo={todo}
                                              setEditingTodo={this.props.setEditingTodo}
                                              removeTodo={this.props.removeTodo}
                                              updateTodo={this.props.updateTodo}/>
                            }
                        </li>
                    })
                }
            </ul>
        )
    }
}
