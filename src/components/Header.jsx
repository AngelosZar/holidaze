import React from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className="flex gap-4">
      <NavLink to="homepage">Homepage</NavLink>
      <NavLink to="login">Log in</NavLink>
      <NavLink to="register">Register</NavLink>
      <NavLink to="profile">Profile</NavLink>
      <NavLink to="manager">Manager</NavLink>
      <NavLink to="venue">Venue</NavLink>
    </header>
  );
}

export default Header;
