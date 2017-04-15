import {expect} from 'chai';

import todos from  '../../app/reducers/todos';

describe('todos', () => {
    it('default', () => {
        const state = [{
            id: 1,
            text: 'have breakfast',
            completed: false
        }];
        const action = {
            type: ''
        };

        expect(todos(state, action)).to.deep.equal(state);
    });

    it('ADD_TODO', () => {
        const state = [{
            id: 1,
            text: 'have breakfast',
            completed: false
        }];
        const action = {
            type: 'ADD_TODO',
            value: {
                id: 2,
                text: 'brush my teeth',
                completed: false
            }
        };

        expect(todos(state, action)).to.deep.equal([
            {
                id: 2,
                text: 'brush my teeth',
                completed: false
            },
            {
                id: 1,
                text: 'have breakfast',
                completed: false
            }
        ]);
    });

    it('REMOVE_TODO', () => {
        const state = [
            {
                id: 2,
                text: 'brush my teeth',
                completed: false
            },
            {
                id: 1,
                text: 'have breakfast',
                completed: false
            }
        ];
        const action = {
            type: 'REMOVE_TODO',
            value: {
                id: 1
            }
        };

        expect(todos(state, action)).to.deep.equal([
            {
                id: 2,
                text: 'brush my teeth',
                completed: false
            }
        ]);
    });

    it('UPDATE_TODO', () => {
        const state = [
            {
                id: 2,
                text: 'brush my teeth',
                completed: false
            },
            {
                id: 1,
                text: 'have breakfast',
                completed: false
            }
        ];
        const action = {
            type: 'UPDATE_TODO',
            value: {
                id: 1,
                text: 'have lunch'
            }
        };

        expect(todos(state, action)).to.deep.equal([
            {
                id: 2,
                text: 'brush my teeth',
                completed: false
            },
            {
                id: 1,
                text: 'have lunch',
                completed: false
            }
        ]);
    });
});