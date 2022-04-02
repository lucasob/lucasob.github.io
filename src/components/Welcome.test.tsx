import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from "./Welcome";

test('renders the welcome component', () => {
  render(<Welcome />);
  expect(screen.getByText(/Lucas Bruck/i)).toBeInTheDocument();
});