import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ClientPage from './ClientPage';

test('renders learn react link', () => {
  render(<ClientPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
