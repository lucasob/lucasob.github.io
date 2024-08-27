import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from "./Welcome";

test('renders the welcome component', () => {
  render(<Welcome linkedIn={"https://www.linked.in/me"} githubLink={"https://git.hub/me"} resumeLink={"https://resume.com/me"} />);
  expect(screen.getByText(/Lucas Bruck/i)).toBeInTheDocument();
});