import React, {Component} from 'react';
import {trim} from 'lodash';

export default class EditTodoInput extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.refs.input.focus();
    }

    updateTodoHandle = id => {
        return event => {
            this.props.updateTodo({
                id,
                text: trim(event.target.value)
            })
        };
    };

    keyPressEditTodoHandle = id => {
        return event => {
            const text = trim(event.target.value);
            if (event.nativeEvent.keyCode === 13) {
                if (text.length === 0) {
                    this.props.removeTodo({id});
                }
                this.props.resetEditingTodo();
            }
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
            <input type="text"
                   ref="input"
                   value={this.props.todo.text}
                   onChange={this.updateTodoHandle(this.props.todo.id)}
                   onKeyPress={this.keyPressEditTodoHandle(this.props.todo.id)}
                   onBlur={this.stopEditTodoHandle(this.props.todo.id)}/>
        )
    }
}
