import { render, screen } from '@testing-library/react';
import App from './App';


describe('renders header', () => {

  test('renders Home title', () => {
    render(<App />);
    const homeElement = screen.getByText(/Home/i);
    expect(homeElement).toBeInTheDocument();
  });

})

describe('render create order buttong', () => {

  test('renders create new order button', () => {
    render(<App />);
    const createOrderButton = screen.getByText(/create order/i);
    expect(createOrderButton).toBeInTheDocument();
  });
  
})

describe('renders table', () => {

  test('renders order id column', () => {
    render(<App />);
    const orderIdElement = screen.getByText(/Order id/i);
    expect(orderIdElement).toBeInTheDocument();
  });

  test('renders creation date column', () => {
    render(<App />);
    const creationDateElement = screen.getByText(/creation date/i);
    expect(creationDateElement).toBeInTheDocument();
  });

  test('renders created by column', () => {
    render(<App />);
    const createdByElement = screen.getByText(/created by/i);
    expect(createdByElement).toBeInTheDocument();
  });

  test('renders order type column', () => {
    render(<App />);
    const orderTypeElement = screen.getAllByText(/order type/i);
    expect(orderTypeElement[1]).toBeInTheDocument();
  });

  test('renders customer column', () => {
    render(<App />);
    const customerElement = screen.getAllByText(/customer/i);
    expect(customerElement[1]).toBeInTheDocument();
  });

})