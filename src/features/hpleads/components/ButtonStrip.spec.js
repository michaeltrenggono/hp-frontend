import React from 'react';
import { ButtonStrip } from "./ButtonStrip";
import {fireEvent, render, screen} from "@testing-library/react";

test('Click on the button', () => {
    const onClickMock = jest.fn();

    render(<ButtonStrip label="test" onClick={onClickMock}/>);

    expect(screen.queryByText("test")).toBeInTheDocument();
    fireEvent.click(screen.queryByText('test'));

    expect(onClickMock).toHaveBeenCalled();
});
