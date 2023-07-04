import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import Logo from '../icons_assets/Logo .svg'

function Nav({handleReservationClick, handleHomeClick}) {

  return (
    <>
      <img src={Logo} alt="Logo" />
      <nav className="nav max-width-container">
        <ul>
          <li>
            <Link to="/" onClick={handleHomeClick}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/reservations" onClick={handleReservationClick}>RESERVATIONS</Link>
          </li>
          <li>
            <Link to="/order">ORDER ONLINE</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;