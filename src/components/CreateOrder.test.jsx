import { render, screen } from '@testing-library/react';
import CreateOrder from './CreateOrder';

const ORDER_TYPES = ["Standard", "SaleOrder", "PurchaseOrder", "TransferOrder", "ReturnOrder"];


describe('renders create new order form', () => {

    test('renders customer name input field', () => {
        render(<CreateOrder ORDER_TYPES={ORDER_TYPES}/>);
        const customerNameInputField = screen.getAllByText(/customer name/i);
        expect(customerNameInputField[0]).toBeInTheDocument();
        expect(customerNameInputField[1]).toBeInTheDocument();
    });

    test('renders create button', () => {
        render(<CreateOrder ORDER_TYPES={ORDER_TYPES}/>);
        const button = screen.getByText(/create/i);
        expect(button).toBeInTheDocument();
    });

})