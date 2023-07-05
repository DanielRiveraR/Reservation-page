import { render, screen } from '@testing-library/react';
import BookingPage from '../src/components/BookingPage';
import { initializeTimes, updateTimes } from '../src/components/BookingPage';


test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText('RESERVATIONS');
  expect(headingElement).toBeInTheDocument();
});

describe('initializeTimes', () =>{
  it('function returns an array of times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const times = initializeTimes();
    expect(times).toEqual(expectedTimes);
  });
});

describe('updateTimes', () =>{
  it('function returns the same value provide in the state', () => {
    const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const selectedDate = '2023-07-04';
    const times = updateTimes(selectedDate, currentState);
    expect(times).toEqual(currentState);
  });
});
