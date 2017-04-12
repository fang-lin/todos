import React, {Component} from 'react';
import {filter} from 'lodash';

export default class NumOfItemsLeft extends Component {

    constructor(props) {
        super(props);
    }

    leftCount() {
        return filter(this.props.todos, todo => !todo.completed).length;
    }

    render() {
        return (
            this.props.todos.length > 0 && <div className="left-items">
                <span>{this.leftCount()} items left</span>
            </div>
        )
    }
}
