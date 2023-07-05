import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const updateTimes = (selectedDate) => {
  return initializeTimes();
};


const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, '', initializeTimes);

  return (
    <>
      <h1 className='max-width-container res-title'>RESERVATIONS</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default BookingPage;
