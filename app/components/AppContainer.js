import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addTodo, removeTodo, updateTodo, setEditingTodo, resetEditingTodo} from '../actions/index';
import MarkAllAsCompleted from './MarkAllAsCompleted';
import ClearCompletedItems from './ClearCompletedItems';
import NumOfItemsLeft from './NumOfItemsLeft';
import AddTodoInput from './AddTodoInput';
import TodosList from './TodosList';

import '../style.scss';


export class AppContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo-app">
                <h1 className="todo-title">Todos</h1>
                <MarkAllAsCompleted todos={this.props.todos}
                                    updateTodo={this.props.updateTodo}/>
                <AddTodoInput todos={this.props.todos}
                              addTodo={this.props.addTodo}/>
                <TodosList todos={this.props.todos}
                           editingTodo={this.props.editingTodo}
                           removeTodo={this.props.removeTodo}
                           updateTodo={this.props.updateTodo}
                           setEditingTodo={this.props.setEditingTodo}
                           resetEditingTodo={this.props.resetEditingTodo}/>
                <ClearCompletedItems todos={this.props.todos}
                                     removeTodo={this.props.removeTodo}/>
                <NumOfItemsLeft todos={this.props.todos}/>
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
    updateTodo,
    setEditingTodo,
    resetEditingTodo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
