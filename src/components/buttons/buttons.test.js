import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BaseButton from './BaseButton';


describe('BaseButton Component', () => {
 
    it('renders button label', () => {
        const label = 'Click Me';
        const { getByText } = render(<BaseButton label={label} />);
        const buttonElement = getByText(label);
        expect(buttonElement).toBeInTheDocument();
      });
  it('applies className and id props', () => {
    const className = 'custom-button';
    const id = 'test-button';
    const label = 'Click Me';
    const { getByText } = render(<BaseButton label={label} className={className} id={id} />);
    const buttonElement = getByText(label);
    expect(buttonElement).toHaveClass(className);
    expect(buttonElement).toHaveAttribute('id', id);
  });
   
      
      it('calls onClick prop when button is clicked', () => {
        const onClickMock = jest.fn();
        const label = 'Click Me';
        const { getByText } = render(<BaseButton label={label} onClick={onClickMock} />);
        const buttonElement = getByText(label);
    
        fireEvent.click(buttonElement);
    
        expect(onClickMock).toHaveBeenCalled();
      });
});
