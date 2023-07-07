import { render, screen } from '@testing-library/react';
import BookingPage from '../src/components/BookingPage';
import { initializeTimes, updateTimes } from '../src/components/BookingPage';
import { fetchAPI } from './myAPI';


// test('Renders the BookingForm heading', () => {
//   render(<BookingPage />);
//   const headingElement = screen.getByText('RESERVATIONS');
//   expect(headingElement).toBeInTheDocument();
// });

jest.mock('../src/myAPI', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
}));

describe('initializeTimes', () =>{
  it('function returns an array of times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    // Mock the fetchAPI function
    fetchAPI.mockReturnValueOnce(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

    const times = initializeTimes([]);
    expect(times).toEqual(expectedTimes);
  });
});

describe('updateTimes', () =>{
  it('function returns the same value provide in the state', () => {
    const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const selectedDate = new Date('2023-07-04');
    fetchAPI.mockReturnValueOnce(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    const times = updateTimes(selectedDate, currentState);
    expect(times).toEqual(currentState);
  });
});
