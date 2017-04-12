import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, removeTodo, updateTodo} from '../actions/index';
import {bindActionCreators} from 'redux';
import {find, trim, each, filter} from 'lodash';
import '../style.scss';
import MarkAllAsCompleted from './MarkAllAsCompleted';
import ClearCompletedItems from './ClearCompletedItems';
import NumOfItemsLeft from './NumOfItemsLeft';
import AddTodoInput from './AddTodoInput';
import TodosList from './TodosList';


export class AppContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MarkAllAsCompleted todos={this.props.todos}
                                    updateTodo={this.props.updateTodo}/>
                <AddTodoInput todos={this.props.todos}
                              addTodo={this.props.addTodo}/>
                <TodosList todos={this.props.todos}
                           removeTodo={this.props.removeTodo}
                           updateTodo={this.props.updateTodo}/>
                <NumOfItemsLeft todos={this.props.todos}/>
                <ClearCompletedItems todos={this.props.todos}
                                     removeTodo={this.props.removeTodo}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
