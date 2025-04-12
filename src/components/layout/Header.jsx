import React, { useState } from 'react';
import logo1 from '../../assets/logos/logo1.svg';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center justify-between bg-white shadow-md max-w-[1520px] px-8 py-2 mx-auto">
      <div className="flex self-end">
        <NavLink to="homepage">
          <img src={logo1} alt="logo" className="w-60" />
        </NavLink>
      </div>
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
      <div className="hidden md:block mx-4">
        <DesktopMenu />
      </div>
    </header>
  );
}

export default Header;

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center gap-2 w-12 h-12 space-y-1.5"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out 
            ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out 
            ${isOpen ? 'opacity-0 translate-y-2' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out 
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </button>
      </div>
      <div className="z-50">
        <div
          className={`fixed left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ top: '5rem' }}
        >
          <div className="w-full h-full flex flex-col items-center space-y-4 py-4">
            <ul className=" flex flex-col items-center space-y-4 py-4 text-lg font-medium text-blue-1">
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
          </div>
        </div>
      </div>
    </>
  );
}

function DesktopMenu() {
  return (
    <ul className="flex gap-4 mx-4">
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
  );
}
