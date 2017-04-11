import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {addTodo, removeTodo, updateTodo} from '../actions/index';
import {bindActionCreators} from 'redux';
import {find, trim, each, filter} from 'lodash';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editingTodo: {
                id: null,
                text: null,
                completed: false
            }
        };
    }

    componentDidMount() {
    }

    static trim(event) {
        return trim(event.target.value);
    }

    addTodoHandle = event => {
        const text = App.trim(event);
        if (event.nativeEvent.keyCode === 13 && text.length > 0) {
            event.preventDefault();
            this.props.addTodo({
                text,
                completed: false
            });
            event.target.value = '';
        }
    };

    removeTodoHandle = id => {
        return event => {
            event.preventDefault();
            this.props.removeTodo({id});
        };
    };

    setEditingTodoHandle = (todo) => {
        return event => {
            this.setState({
                editingTodo: todo
            }, () => {
                const input = document.querySelector(`li[data-id="${todo.id}"] input`);
                input.value = todo.text;
                input.focus();
            });
        };
    };

    updateTodoHandle = id => {
        return event => {
            this.props.updateTodo({
                id,
                text: App.trim(event)
            })
        };
    };

    stopEditTodoHandle = id => {
        return event => {
            const text = App.trim(event);
            if (text.length === 0) {
                this.props.removeTodo({id});
            }
            this.setState({
                editingTodo: {
                    id: null,
                    text: null
                }
            });
        };
    };

    keyPressEditTodoHandle = id => {
        return event => {
            const text = App.trim(event);
            if (event.nativeEvent.keyCode === 13) {
                if (text.length === 0) {
                    this.props.removeTodo({id});
                }
                this.setState({
                    editingTodo: {
                        id: null,
                        text: null
                    }
                });
            }
        };
    };

    toggleAllCompletedHandle = event => {
        each(this.props.todos, todo => {
            this.props.updateTodo({
                id: todo.id,
                completed: event.target.checked
            })
        });
    };

    toggleTodoCompletedHandle = id => {
        return event => {
            this.props.updateTodo({
                id: id,
                completed: event.target.checked
            })
        };
    };

    removeCompletedTodosHandle = event => {
        each(this.props.todos, todo => {
            if (todo.completed) {
                this.props.removeTodo({
                    id: todo.id
                });
            }
        });
    };

    allAreCompleted() {
        return this.props.todos.length && !find(this.props.todos, todo => !todo.completed);
    }

    completedCount() {
        return filter(this.props.todos, todo => todo.completed).length;
    }

    render() {
        return (
            <div>
                <div>
                    <input type="checkbox"
                           checked={this.allAreCompleted()}
                           onChange={this.toggleAllCompletedHandle}/>
                    Mark all as complete
                </div>
                <div>
                    <input type="text"
                           onKeyPress={this.addTodoHandle}
                           placeholder="Todo..."/>
                </div>
                <ul>
                    {
                        this.props.todos.map(todo => {
                            if (this.state.editingTodo.id === todo.id) {
                                return <li data-id={todo.id} key={todo.id}>
                                    <input type="text"
                                           onChange={this.updateTodoHandle(todo.id)}
                                           onKeyPress={this.keyPressEditTodoHandle(todo.id)}
                                           onBlur={this.stopEditTodoHandle(todo.id)}/>
                                </li>;
                            } else {
                                return <li data-id={todo.id} key={todo.id}>
                                    <input type="checkbox"
                                           checked={todo.completed}
                                           onChange={this.toggleTodoCompletedHandle(todo.id)}/>
                                    <span onDoubleClick={this.setEditingTodoHandle(todo)}>
                                        {todo.text}
                                    </span>
                                    <a onClick={this.removeTodoHandle(todo.id)}>Remove</a>
                                </li>;
                            }
                        })
                    }
                </ul>
                <div>
                    <span>{this.props.todos.length - this.completedCount()} items left</span>
                </div>
                <div>
                    <button onClick={this.removeCompletedTodosHandle}>Clear <span>{this.completedCount()}</span> completed items</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addTodo,
    removeTodo,
    updateTodo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
