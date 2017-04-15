import {expect} from 'chai';

import editingTodo from '../../app/reducers/editingTodo';

describe('editingTodo', () => {
    it('default', () => {
        const state = {
            id: 1,
            text: 'have breakfast',
            completed: false
        };
        const action = {
            type: '',
            value: {
                id: 1,
                text: 'have breakfast',
                completed: false
            }
        };

        expect(editingTodo(state, action)).to.deep.equal(state);
    });

    it('SET_EDITING_TODO', () => {
        const state = {
            id: null,
            text: null,
            completed: false
        };

        const action = {
            type: 'SET_EDITING_TODO',
            value: {
                id: 1,
                text: 'have breakfast',
                completed: false
            }
        };

        expect(editingTodo(state, action)).to.deep.equal({
            id: 1,
            text: 'have breakfast',
            completed: false
        });
    });

    it('RESET_EDITING_TODO', () => {
        const state = {
            id: 1,
            text: 'have breakfast',
            completed: false
        };
        const action = {
            type: 'RESET_EDITING_TODO'
        };

        expect(editingTodo(state, action)).to.deep.equal({
            id: null,
            text: null,
            completed: false
        });
    });
});