import React, {Component} from 'react';
import {trim} from 'lodash';

export default class AddTodoInput extends Component {

    constructor(props) {
        super(props);
    }

    addTodoHandle = event => {
        const text = trim(event.target.value);
        if (event.nativeEvent.keyCode === 13 && text.length > 0) {
            event.preventDefault();
            this.props.addTodo({
                text,
                completed: false
            });
            event.target.value = '';
        }
    };

    render() {
        return (
            <div className="todo-add-input-wrap">
                <input type="text"
                       className="todo-add-input"
                       onKeyPress={this.addTodoHandle}
                       placeholder="Todo..."/>
            </div>
        )
    }
}
