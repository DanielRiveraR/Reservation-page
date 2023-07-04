import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const BookingPage = () => {
  const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  const updateTimes = (selectedDate) => {
    return initializeTimes();
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, '', initializeTimes);

  return (
    <>
      <h1 className='max-width-container res-title'>RESERVATIONS</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default BookingPage;
