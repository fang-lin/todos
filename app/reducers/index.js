import {combineReducers} from 'redux';
import {filter, map, assign} from 'lodash';

import todos from './todos';
import editingTodo from './editingTodo';

export default combineReducers({
    todos,
    editingTodo
});