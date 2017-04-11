import {random} from 'lodash';

function createId() {
    return random(100000, 999999);
}

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        value: {
            id: createId(),
            ...todo
        }
    }
};

export const removeTodo = (todo) => {
    return {
        type: 'REMOVE_TODO',
        value: {...todo}
    }
};

export const updateTodo = (todo) => {
    return {
        type: 'UPDATE_TODO',
        value: {...todo}
    }
};