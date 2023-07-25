import React, { useEffect, useState } from 'react';
import Button from './Button';
import Img from '../icons_assets/restauranfood.jpg';

import { useLocation, useNavigate } from 'react-router-dom';



function Header({ handleReservationClick, handleHomeClick, showForm }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    if (location.pathname !== '/reservations') {
      handleReservationClick();
      navigate('/reservations');
      console.log('Reservation button works')
    }
  };

  const handleBackClick = () => {
    if (location.pathname !== '/') {
      handleHomeClick();
      navigate('/');
      console.log('Back to home button 2 works')
    }
  };

  return (
    <header className="header max-width-container">
      <span className="section-background"></span>
      <div className="hero">
        <div className="hero-section-texts">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned
            <br />
            Mediterranean restaurant,
            <br />
            focused on traditional
            <br />
            recipes served with a modern twist.
          </p>
          <br />
          { !showForm ?
            <Button id={'button-reserve'} text={'Reserve a Table'} aria-label="On click" onClick={handleNavLinkClick} />
           :
           <Button id={'button-reserve'} text={'Back'} aria-label="On click" onClick={handleBackClick} />
          }
        </div>
        <div className="hero-section-image" style={{ backgroundImage: `url(${Img})`, backgroundSize: 'cover' }}></div>
      </div>
    </header>
  );
}

export default Header;