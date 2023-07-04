import React, { useState } from 'react';
import BookingPage from './BookingPage';
import Specials from './Specials';
import Header from './Header';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import { FormContext } from './FormContext';

const Main = () => {
  const [showForm, setShowForm] = useState(false);

  const handleReservationClick = () => {
    setShowForm(true);
    console.log('It works!');
  };

  const handleHomeClick = () => {
    setShowForm(false);
  };

  return (
    <>
      <FormContext.Provider value={{ showForm, setShowForm}}>
        <Nav showForm={showForm} handleReservationClick={handleReservationClick} handleHomeClick={handleHomeClick}/>
        <Header showForm={showForm} handleReservationClick={handleReservationClick} handleHomeClick={handleHomeClick}/>
        {showForm ? <BookingPage /> : <Specials />}
        <Outlet />
      </FormContext.Provider>
    </>
  );
};

export default Main;