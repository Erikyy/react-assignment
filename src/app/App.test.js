import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('test react link', () => {
  it('renders learn react link', () => {
    expect.hasAssertions();
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
