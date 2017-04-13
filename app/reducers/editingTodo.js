import {filter, map, assign} from 'lodash';

const defaultEditingTodo = {
    id: null,
    text: null,
    completed: false
};

export default (state = defaultEditingTodo, action) => {
    switch (action.type) {
        case 'SET_EDITING_TODO':
            return assign({}, state, action.value);

        case 'RESET_EDITING_TODO':
            return defaultEditingTodo;

        default:
            return state
    }
};