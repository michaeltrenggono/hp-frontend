import React from 'react';
import { LeadCard } from './LeadCard';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {formatPrice} from "../../../../helpers";

const initialState = {
    leads: [
        JSON.parse(`{"id":12,"customer_id":"138","suburb":"Box Hill 3128","category":"Interior Painters","description":"I did: there's no use in talking to herself, 'Why, they're only a child!' The Queen turned angrily away from her as she could do to hold it. As soon as it turned a back-somersault in at once.' And.","price":"118","status":"Invited","created_at":"2021-02-22T05:44:12.000000Z","updated_at":"2021-06-21T07:14:12.000000Z","customer":{"id":138,"first_name":"Laurie","last_name":"Brakus","email":"enid55@hotmail.com","phone":"0485918036","created_at":"2021-01-13T23:32:41.000000Z","updated_at":null}}`),
        JSON.parse(`{"id":12,"customer_id":"138","suburb":"Box Hill 3128","category":"Interior Painters","description":"I did: there's no use in talking to herself, 'Why, they're only a child!' The Queen turned angrily away from her as she could do to hold it. As soon as it turned a back-somersault in at once.' And.","price":"118","status":"Accepted","created_at":"2021-02-22T05:44:12.000000Z","updated_at":"2021-06-21T07:14:12.000000Z","customer":{"id":138,"first_name":"Laurie","last_name":"Brakus","email":"enid55@hotmail.com","phone":"0485918036","created_at":"2021-01-13T23:32:41.000000Z","updated_at":null}}`),
    ],
    status: 'idle',
};

const ReduxProvider = ({ children, reduxState }) => {
    const mockStore = configureStore();
    const reduxStore = mockStore(reduxState);

    return (
      <Provider store={reduxStore}>{children}</Provider>
    );
};

test('shows the Correct Information when the lead status is Invited', () => {
    const leadMock = initialState.leads[0];

    render(<ReduxProvider reduxStore={initialState}><LeadCard lead={leadMock}/></ReduxProvider>);

    expect(screen.queryByText(leadMock.customer.first_name)).toBeInTheDocument();
    expect(screen.queryByText(leadMock.customer.last_name)).toBeNull();
    expect(screen.queryByText(`Job ID: ${leadMock.id}`)).toBeInTheDocument();
    expect(screen.queryAllByText(formatPrice(leadMock.price)).length).toBe(2);
    expect(screen.queryByText('Accept')).toBeInTheDocument();
    expect(screen.queryByText('Decline')).toBeInTheDocument();
});

test('shows the Correct Information when the lead status is Accepted', () => {
    const leadMock = initialState.leads[1];

    render(<ReduxProvider reduxStore={initialState}><LeadCard lead={leadMock}/></ReduxProvider>);

    expect(screen.queryByText(`${leadMock.customer.first_name} ${leadMock.customer.last_name}`)).toBeInTheDocument();
    expect(screen.queryByText(`Job ID: ${leadMock.id}`)).toBeInTheDocument();
    expect(screen.queryAllByText(formatPrice(leadMock.price)).length).toBe(1);
    expect(screen.queryByText('Accept')).toBeNull();
    expect(screen.queryByText('Decline')).toBeNull();
});

