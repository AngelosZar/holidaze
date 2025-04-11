import React from 'react';
import logo1 from '../../assets/logos/logo1.svg';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="flex gap-4">
      <div>
        <NavLink to="homepage">
          <img src={logo1} alt="logo" className="w-60" />
        </NavLink>
      </div>

      <ul className="flex gap-4">
        <li>
          <NavLink to="login">Log in</NavLink>
        </li>
        <li>
          <NavLink to="register">Register</NavLink>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="manager">Manager</NavLink>
        </li>
        <li>
          <NavLink to="venue">Venue</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
