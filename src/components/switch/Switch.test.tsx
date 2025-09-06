import '@testing-library/jest-dom';
import { render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {jest} from "@jest/globals";
import {Switch} from "./Switch";

const renderTest = (initialState: boolean) => {
    const mockOnToggleOnChange = jest.fn();
    const mockOnToggleOffChange = jest.fn();

    return {
        ...render(
    <Switch initialState={initialState} onToggleOn={mockOnToggleOnChange} onToggleOff={mockOnToggleOffChange} name='test switch'/>),
 mockOnToggleOnChange,
     mockOnToggleOffChange
    }
}

describe('<Switch />', () => {
    test('can pass initial state on', () => {
        const {getByRole} = renderTest(true);

        expect(getByRole('checkbox')).toBeInTheDocument();
        expect(getByRole('checkbox')).toBeChecked();
    })

    test('can pass initial state off', () => {
        const {getByRole} = renderTest(false);

        expect(getByRole('checkbox')).toBeInTheDocument();
        expect(getByRole('checkbox')).not.toBeChecked();
    })

    test('can toggle on click', async () => {
        const user = userEvent.setup();
        const {getByRole, mockOnToggleOffChange, mockOnToggleOnChange} = renderTest(true);

        expect(getByRole('checkbox')).toBeInTheDocument();
        expect(getByRole('checkbox')).toBeChecked();

        expect(mockOnToggleOffChange).not.toHaveBeenCalled();
        expect(mockOnToggleOnChange).toHaveBeenCalledTimes(1);

        // toggle off
        await user.click(getByRole('checkbox'));
        expect(getByRole('checkbox')).not.toBeChecked();

        expect(mockOnToggleOffChange).toHaveBeenCalledTimes(1);
        expect(mockOnToggleOnChange).toHaveBeenCalledTimes(1);


        // toggle on
        await user.click(getByRole('checkbox'));
        expect(getByRole('checkbox')).toBeChecked();

        expect(mockOnToggleOffChange).toHaveBeenCalledTimes(1);
        expect(mockOnToggleOnChange).toHaveBeenCalledTimes(2);
    })

    test('can toggle with Enter key press', async () => {
        const user = userEvent.setup();
        const { getByRole, mockOnToggleOffChange, mockOnToggleOnChange } = renderTest(true);

        expect(getByRole('checkbox')).toBeInTheDocument();
        expect(getByRole('checkbox')).toBeChecked();

        expect(mockOnToggleOffChange).not.toHaveBeenCalled();
        expect(mockOnToggleOnChange).toHaveBeenCalledTimes(1);

        // Press Enter to toggle off
        await user.type(getByRole('checkbox'), '{Enter}');

        expect(getByRole('checkbox')).not.toBeChecked();
        expect(mockOnToggleOffChange).toHaveBeenCalledTimes(1);
        expect(mockOnToggleOnChange).toHaveBeenCalledTimes(1);

        // Press Enter again to toggle back on
        await user.type(getByRole('checkbox'), '{Enter}');

        expect(getByRole('checkbox')).toBeChecked();
        expect(mockOnToggleOffChange).toHaveBeenCalledTimes(1);
        expect(mockOnToggleOnChange).toHaveBeenCalledTimes(2);
    });
})