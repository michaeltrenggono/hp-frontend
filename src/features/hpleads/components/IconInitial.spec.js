import React from 'react';
import { IconInitial } from "./IconInitial";
import {render, screen} from "@testing-library/react";

test('Click on the button', () => {
    render(<IconInitial firstName="test"/>);

    expect(screen.queryByText("T")).toBeInTheDocument();
});
