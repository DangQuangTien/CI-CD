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
  expect(screen.getByText('Result:')).toBeInTheDocument();
  expect(screen.getByText('8')).toBeInTheDocument();
});

test('handles invalid expression', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '5 + 3 *' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('Error:')).toBeInTheDocument();
  expect(screen.getByText('Invalid Expression')).toBeInTheDocument();
});

/* Additional Test Cases */

// Test subtraction
test('calculates subtraction correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '10 - 4' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('6')).toBeInTheDocument();
});

// Test multiplication
test('calculates multiplication correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '7 * 6' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('42')).toBeInTheDocument();
});

// Test division
test('calculates division correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '20 / 5' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('4')).toBeInTheDocument();
});

// Test division by zero
test('handles division by zero', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '10 / 0' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('Infinity')).toBeInTheDocument();
});

// Test expression with parentheses
test('calculates expression with parentheses correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '(2 + 3) * 4' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('20')).toBeInTheDocument();
});

// Test exponentiation
test('calculates exponentiation correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '2^3' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('8')).toBeInTheDocument();
});

// Test decimal numbers
test('calculates decimal numbers correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '5.5 + 2.3' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('7.8')).toBeInTheDocument();
});

// Test negative numbers
test('calculates negative numbers correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '-5 + 3' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('-2')).toBeInTheDocument();
});

// Test complex expression
test('calculates complex expression correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  // Note: Ensure 'mathjs' is configured to handle functions like sqrt and sin
  fireEvent.change(inputField, { target: { value: 'sqrt(16) + sin(pi / 2)' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('5')).toBeInTheDocument();
});

// Test clearing error message on valid input
test('clears error message on valid input after invalid input', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');

  // Enter invalid expression
  fireEvent.change(inputField, { target: { value: '5 + *' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('Invalid Expression')).toBeInTheDocument();

  // Enter valid expression
  fireEvent.change(inputField, { target: { value: '5 + 5' } });
  fireEvent.click(calculateButton);
  expect(screen.queryByText('Invalid Expression')).not.toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
});

// Test calculation after clearing input
test('calculates correctly after clearing input', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');

  // First calculation
  fireEvent.change(inputField, { target: { value: '2 + 2' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('4')).toBeInTheDocument();

  // Clear input and perform another calculation
  fireEvent.change(inputField, { target: { value: '' } });
  fireEvent.change(inputField, { target: { value: '3 * 3' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('9')).toBeInTheDocument();
});

// Test large numbers
test('calculates large numbers correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, { target: { value: '123456789 * 2' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('246913578')).toBeInTheDocument();
});

// Test expression with multiple operations
test('calculates expression with multiple operations correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, {
    target: { value: '10 + 20 - 5 * 2 / 2' },
  });
  fireEvent.click(calculateButton);
  expect(screen.getByText('25')).toBeInTheDocument();
});

// Test expression with functions (e.g., sin, cos)
test('calculates expression with functions correctly', () => {
  render(<MathOperations />);
  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');
  fireEvent.change(inputField, {
    target: { value: 'cos(0)' },
  });
  fireEvent.click(calculateButton);
  expect(screen.getByText('1')).toBeInTheDocument();
});
