import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MathOperations from './MathOperations';

test('calculates expression correctly', () => {
  render(<MathOperations />);

  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');

  // Input an expression
  fireEvent.change(inputField, { target: { value: '5 + 3' } });
  fireEvent.click(calculateButton);

  // Check if the result is displayed correctly
  expect(screen.getByText('Result: 8')).toBeInTheDocument();
});

test('calculates addition correctly', () => {
  render(<MathOperations />);

  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');

  fireEvent.change(inputField, { target: { value: '5 + 3' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('Result: 8')).toBeInTheDocument();
});

test('calculates subtraction correctly', () => {
  render(<MathOperations />);

  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');

  fireEvent.change(inputField, { target: { value: '10 - 4' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('Result: 6')).toBeInTheDocument();
});

test('calculates multiplication correctly', () => {
  render(<MathOperations />);

  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');

  fireEvent.change(inputField, { target: { value: '6 * 7' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('Result: 42')).toBeInTheDocument();
});

test('calculates division correctly', () => {
  render(<MathOperations />);

  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');

  fireEvent.change(inputField, { target: { value: '20 / 4' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('Result: 5')).toBeInTheDocument();
});

test('handles invalid expression', () => {
  render(<MathOperations />);

  const inputField = screen.getByPlaceholderText('Type an expression...');
  const calculateButton = screen.getByText('=');

  fireEvent.change(inputField, { target: { value: '5 + ' } });
  fireEvent.click(calculateButton);
  expect(screen.getByText('Invalid Expression')).toBeInTheDocument();
});