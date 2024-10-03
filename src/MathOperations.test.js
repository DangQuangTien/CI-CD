import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MathOperations from './MathOperations';

test('renders MathOperations component', () => {
  render(<MathOperations />);
  const linkElement = screen.getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('calculates expression correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '5 + 3' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('Result: 8')).toBeInTheDocument();
});

test('handles invalid expression', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '5 + 3 *' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('Invalid Expression')).toBeInTheDocument();
});
  