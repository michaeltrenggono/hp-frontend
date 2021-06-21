import React from 'react';
import { shallow } from 'enzyme';
import {ButtonStrip} from './ButtonStrip';

describe('Test ButtonStrip component', () => {
    it('should handle onClick event', () => {
        const mockCallBack = jest.fn();

        const button = shallow(<ButtonStrip onClick={mockCallBack} label="test"/>);
        button.find('.buttonStrip').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});
