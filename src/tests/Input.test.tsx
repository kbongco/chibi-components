import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../Components/Input/Input'

describe('Input Component', () => {
  it('renders the default input element', () => {
    const { container } = render(
      <Input type='text' />
    );

    const inputElement = container.querySelector('input[type="text"]') as HTMLInputElement;
  });

  it('renders the error message if it is true', () => {
    const { getByText } = render(
      <Input error errorMessage='This is an error message' />
    );

    const errorMessage = getByText('This is an error message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('does not render the error message if it is false', () => {
    const { queryByText } = render(
      <Input error={false} errorMessage="Invalid input" />
    );
    
    const errorMessage = queryByText('Invalid Input');
    expect(errorMessage).toBeNull();
  });

  it('renders a disabled input', () => {
    const { container } = render(<Input disabled />);
    const inputElement = container.querySelector('input') as HTMLInputElement;
    expect(inputElement.disabled).toBeTruthy();
  });
})