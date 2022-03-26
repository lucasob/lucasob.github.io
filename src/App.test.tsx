import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the entire app', () => {
  render(<App />);
  expect(screen.getByTestId("welcome")).toBeInTheDocument();
});
