import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const initialElement = screen.getByText(/Hello World from Alura./i);
  expect(initialElement).toBeInTheDocument();
  expect(App).toBeTruthy();
});
