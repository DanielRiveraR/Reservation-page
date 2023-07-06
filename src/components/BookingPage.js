import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../myAPI';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) =>
   [ ...initialAvailableTimes , ...fetchAPI(new Date())];

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate('/confirmedBooking')
  }

  return (
    <>
      <h1 className='max-width-container res-title'>RESERVATIONS</h1>
      <BookingForm 
      availableTimes={availableTimes} 
      dispatch={dispatch} 
      submitData={submitData}
      />
    </>
  );
};

export default BookingPage;

