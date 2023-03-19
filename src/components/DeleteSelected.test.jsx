import { render, screen } from '@testing-library/react';
import DeleteSelected from './DeleteSelected';

describe('renders delete button', () => {

    test('renders delete button', () => {
        render(<DeleteSelected />);
        const deleteButton = screen.getByText(/delete selected/i);
        expect(deleteButton).toBeInTheDocument();
    });

})