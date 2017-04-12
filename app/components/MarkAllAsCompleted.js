import React, {Component} from 'react';
import {find, each} from 'lodash';

export default class MarkAllAsCompleted extends Component {

    constructor(props) {
        super(props);
    }

    toggleAllCompletedHandle = event => {
        each(this.props.todos, todo => {
            this.props.updateTodo({
                id: todo.id,
                completed: event.target.checked
            })
        });
    };

    allAreCompleted() {
        return this.props.todos.length && !find(this.props.todos, todo => !todo.completed);
    }

    render() {
        return (
            this.props.todos.length > 0 && <div>
                <input type="checkbox"
                       checked={this.allAreCompleted()}
                       onChange={this.toggleAllCompletedHandle}/>
                Mark all as complete
            </div>
        )
    }
}
