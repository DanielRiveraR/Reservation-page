import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const availableTimes = ['17:00', '18:00'];
  const submitData = jest.fn();
  const today = new Date().toISOString().split('T')[0];
  const dispatch = jest.fn(); 

  test('should have the correct HTML validation attributes', () => {
    render(<BookingForm availableTimes={availableTimes} submitData={submitData}/>);
    
    const bookingDateInput = screen.getByLabelText('Choose date');
    const bookingTimeSelect = screen.getByLabelText('Choose time');
    const numberOfGuestInput = screen.getByLabelText('Number of guests');
    
    expect(bookingDateInput).toHaveAttribute('type', 'date');
    expect(bookingDateInput).toBeRequired();
    
    expect(bookingTimeSelect).toHaveAttribute('required');
    
    expect(numberOfGuestInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestInput).toHaveAttribute('min', '1');
    expect(numberOfGuestInput).toHaveAttribute('max', '10');
    expect(numberOfGuestInput).toBeRequired();
  });
  
  test('should display the correct validation messages for invalid inputs and disabled submit button', () => {
    render(<BookingForm availableTimes={availableTimes} submitData={submitData}/>);
    
    const bookingDateInput = screen.getByLabelText('Choose date');
    const bookingTimeSelect = screen.getByLabelText('Choose time');
    const numberOfGuestInput = screen.getByLabelText('Number of guests');
    const submitButton =screen.getByRole('button');
    
    fireEvent.blur(bookingDateInput);
    expect(screen.getByText('Please provide a date')).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
    
    fireEvent.blur(bookingTimeSelect);
    expect(screen.getByText('Please provide a time')).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
    
    fireEvent.blur(numberOfGuestInput);
    expect(screen.getByText('Number of guests must be between 1 and 10')).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test('should not display validation messages for valid inputs', () => {
    render(<BookingForm availableTimes={availableTimes} submitData={submitData} dispatch={dispatch}/>);
    
    const bookingDateInput = screen.getByLabelText('Choose date');
    const bookingTimeSelect = screen.getByLabelText('Choose time');
    const numberOfGuestInput = screen.getByLabelText('Number of guests');
    
    fireEvent.change(bookingDateInput, { target: { value: '2023-07-05' } });
    fireEvent.blur(bookingDateInput);
    expect(screen.queryByText('Please provide a date')).toBeNull();
    
    fireEvent.change(bookingTimeSelect, { target: { value: '18:00' } });
    fireEvent.blur(bookingTimeSelect);
    expect(screen.queryByText('Please provide a time')).toBeNull();
    
    fireEvent.change(numberOfGuestInput, { target: { value: '5' } });
    fireEvent.blur(numberOfGuestInput);
    expect(screen.queryByText('Number of guests must be between 1 and 10')).toBeNull();
  });
});
