import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import Display from './Display';


describe('Display Component', () => {
  it('renders the provided value', () => {
    const value = '43';
    const { getByText } = render(<Display value={value} />);
    const displayElement = getByText(value);

    expect(displayElement).toBeInTheDocument();
  });

  
});
