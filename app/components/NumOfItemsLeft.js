import React, {Component} from 'react';
import {find, trim, each, filter} from 'lodash';

export default class NumOfItemsLeft extends Component {

    constructor(props) {
        super(props);
    }

    leftCount() {
        return filter(this.props.todos, todo => !todo.completed).length;
    }

    render() {
        return (
            this.props.todos.length > 0 && <div>
                <span>{this.leftCount()} items left</span>
            </div>
        )
    }
}
