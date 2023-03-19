import { render, screen } from '@testing-library/react';
import SearchByOrderId from './SearchByOrderId';

describe('renders search', () => {

    test('renders input field', () => {
        render(<SearchByOrderId />);
        const inputFieldElement = screen.getAllByText(/customer search/i);
        expect(inputFieldElement[0]).toBeInTheDocument();
    })
})