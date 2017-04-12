import React, {Component} from 'react';
import {find, trim, each, filter} from 'lodash';
import EditTodoInput from './EditTodoInput';
import TodoItem from './TodoItem';

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editingTodo: {
                id: null,
                text: null,
                completed: false
            }
        }
    }

    resetEditingTodo = () => {
        this.setState({
            editingTodo: {
                id: null,
                text: null,
                completed: false
            }
        });
    };

    setEditingTodo = (todo) => {
        this.setState({
            editingTodo: todo
        });
    };

    render() {
        return (
            this.props.todos.length > 0 && <ul>
                {
                    this.props.todos.map(todo => {
                        return <li data-id={todo.id} key={todo.id}>
                            {
                                this.state.editingTodo.id === todo.id ?
                                    <EditTodoInput todo={todo}
                                                   updateTodo={this.props.updateTodo}
                                                   removeTodo={this.props.removeTodo}
                                                   resetEditingTodo={this.resetEditingTodo}/> :
                                    <TodoItem todo={todo}
                                              setEditingTodo={this.setEditingTodo}
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
