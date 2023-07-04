import React from 'react';
import Button from './Button';
import Img from '../icons_assets/restauranfood.jpg';

import { useLocation, useNavigate } from 'react-router-dom';

function Header({showForm, handleReservationClick, handleHomeClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    if (location.pathname === '/reservations') {
      handleHomeClick();
      navigate('/');
    }
  };

  const handleHomeButtonClick = () => {
    if (location.pathname === '/') {
      handleReservationClick();
      navigate('/reservations');
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
          {showForm ? (
            <Button text={'Back'} onClick={handleNavLinkClick} />
          ) : (
            <Button text={'Reserve a Table'} onClick={handleHomeButtonClick} />
          )}
        </div>
        <div className="hero-section-image" style={{ backgroundImage: `url(${Img})`, backgroundSize: 'cover' }}></div>
      </div>
    </header>
  );
}

export default Header;