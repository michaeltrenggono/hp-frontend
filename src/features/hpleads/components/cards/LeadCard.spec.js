import React from 'react';
import { shallow } from 'enzyme';
import {LeadCard} from './LeadCard';
import { Provider } from "react-redux";

const ReduxProvider = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
);

describe('Should render leadCard and match snapshot', () => {
    it('should render LeadCard correctly', () => {
        const card = shallow(
            <ReduxProvider>
                <LeadCard lead={{id:1, status: "Invited"}}/>
            </ReduxProvider>
        );

        expect(card).toMatchSnapshot();
    });

    it('should render LeadCard correctly when Accepted', () => {
        const card = shallow(
            <ReduxProvider>
                <LeadCard lead={{id:2, status: "Accepted"}}/>
            </ReduxProvider>
        );

        expect(card).toMatchSnapshot();
    });
});
