import React, {Component, PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import td from 'testdouble';

import NumOfItemsLeft from '../../app/components/NumOfItemsLeft';

describe('NumOfItemsLeft', () => {

    it('It should has a SelectField and 4 menu items', () => {
        let props = {
            todos: [],
        };

        const numOfItemsLeft = render(<NumOfItemsLeft {...props}/>);
        expect(numOfItemsLeft.text()).to.equal('');
    });

    it('It should has a SelectField and 4 menu items', () => {
        let props = {
            todos: [{
                id: 1,
                text: 'have breakfast',
                completed: false
            }, {
                id: 2,
                text: 'brush my teeth',
                completed: false
            }],
        };

        const numOfItemsLeft = render(<NumOfItemsLeft {...props}/>);
        expect(numOfItemsLeft.text()).to.equal('2 items left');
    });
});