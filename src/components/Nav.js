import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import Logo from '../icons_assets/Logo .svg'

function Nav({handleReservationClick, handleHomeClick}) {

  return (
    <>
    <div className='nav-main-div'>
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
    </div>
      <Outlet />
    
    {/* This code renders a Hamburger menu with the Nav buttons for the mobile version. */ }
    <label className='hamburger-menu' id='burger-icon' >
      <input type='checkbox' />
    </label>
    <aside className='sidebar'>
      <nav>
        <ul >
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/menu">MENU</a>
          </li>
          <li>
            <a href="/reservations">RESERVATIONS</a>
          </li>
          <li>
            <a href="/order">ORDER ONLINE</a>
          </li>
          <li>
            <a href="/login">LOGIN</a>
          </li>
        </ul>
      </nav>
    </aside>
    </>
  );
}

export default Nav;