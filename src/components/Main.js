import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

import BookingPage from './BookingPage';
import Specials from './Specials';
import Header from './Header';
import Nav from './Nav';
import ConfirmedBooking from './ConfirmedBooking';


const Main = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookingData, setBookingData] = useState();
  const navigate = useNavigate();

  const handleReservationClick = () => {
    setShowForm(true);
    console.log('It works!');
  };

  const handleHomeClick = () => {
    setShowForm(false);
  };

  const handleSubmit = (formData) => {
    setBookingData(formData);
    navigate('/confirmedBooking');
  };


  return (
    <>
      <FormContext.Provider value={{ showForm, handleSubmit, bookingData, handleReservationClick, handleHomeClick}}>
        <Nav showForm={showForm} handleReservationClick={handleReservationClick} handleHomeClick={handleHomeClick}/>
        <Header showForm={showForm} handleReservationClick={handleReservationClick} handleHomeClick={handleHomeClick}/>
        { showForm ?
            <BookingPage submitData={handleSubmit} />
          : <Specials/> }
        <Outlet />
        {bookingData && (
          <ConfirmedBooking
            bookingData={bookingData}
          />
        )}
      </FormContext.Provider>
    </>
  );
};

export default Main;