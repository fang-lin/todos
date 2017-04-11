import {combineReducers} from 'redux';
import {filter, map, assign} from 'lodash';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [action.value].concat(state);

        case 'REMOVE_TODO':
            return filter(state, todo => todo.id !== action.value.id);

        case 'UPDATE_TODO':
            return map(state, todo => {
                if (todo.id === action.value.id) {
                    return assign({}, todo, action.value);
                }
                return todo;
            });

        default:
            return state
    }
};

export default combineReducers({
    todos
});