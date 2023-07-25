import React, { useReducer } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../myAPI';

import BookingForm from './BookingForm';
import Nav from './Nav';
import Header from './Header';

export const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};

export const initializeTimes = (initialAvailableTimes) =>
   [ ...initialAvailableTimes ,...fetchAPI(new Date())];

const BookingPage = (showForm, {handleReservationClick}) => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();
  const location = useLocation();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) {
      navigate('/confirmedBooking');
      console.log('Confirmed!')
    }
  }

  const handleBackClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      console.log('Back to home button 1 works')
    }
  };

  return (
    <>
      <Nav/>
      <Header showForm={showForm} handleReservationClick={handleReservationClick} handleHomeClick={handleBackClick}/>
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

