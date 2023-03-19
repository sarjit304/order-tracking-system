import { render, screen } from '@testing-library/react';
import DisplayOrderTable from './DisplayOrderTable';

describe('renders table', () => {

    test('renders order id column', () => {
      render(<DisplayOrderTable />);
      const orderIdElement = screen.getByText(/Order id/i);
      expect(orderIdElement).toBeInTheDocument();
    });
  
    test('renders creation date column', () => {
      render(<DisplayOrderTable />);
      const creationDateElement = screen.getByText(/creation date/i);
      expect(creationDateElement).toBeInTheDocument();
    });
  
    test('renders created by column', () => {
      render(<DisplayOrderTable />);
      const createdByElement = screen.getByText(/created by/i);
      expect(createdByElement).toBeInTheDocument();
    });
  
    test('renders order type column', () => {
      render(<DisplayOrderTable />);
      const orderTypeElement = screen.getByText(/order type/i);
      expect(orderTypeElement).toBeInTheDocument();
    });
  
    test('renders customer column', () => {
      render(<DisplayOrderTable />);
      const customerElement = screen.getByText(/customer/i);
      expect(customerElement).toBeInTheDocument();
    });
  
  })